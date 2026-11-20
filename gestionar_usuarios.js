#!/usr/bin/env node
/**
 * Gestor CLI Zero-Knowledge de Usuarios y Licencias (AES-256-GCM Key Wrapping)
 * Portal de Estudio — Ingeniería Biomédica SERGAS (Subgrupo A1)
 *
 * Ninguna contraseña se almacena en texto claro ni en el código ni en el registro
 * de administración. Cada usuario tiene su propio sobre PBKDF2 + AES-256-GCM.
 *
 * Variables de entorno opcionales:
 *   SERGAS_ADMIN_USER  (por defecto: "admin")
 *   SERGAS_ADMIN_PWD   (si no se indica, se pedirá de forma oculta por terminal)
 *
 * Uso:
 *   node gestionar_usuarios.js list
 *   node gestionar_usuarios.js add <email_o_usuario> <contraseña> "<Nombre Completo>" [caducidad_YYYY-MM-DD|permanente] [full|quiz_only|admin]
 *   node gestionar_usuarios.js passwd <email_o_usuario> <nueva_contraseña>
 *   node gestionar_usuarios.js remove <email_o_usuario>
 *   node gestionar_usuarios.js purge-passwords
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const readline = require('readline');

const FILES = [
  path.join(__dirname, 'index.html'),
  path.join(__dirname, '00_PORTAL_ESTUDIO_INTERACTIVO_BIOMEDICA_SERGAS.html')
];

const ADMIN_USER = process.env.SERGAS_ADMIN_USER || 'admin';

function normalizeUserId(u) {
  return String(u || '').trim().toLowerCase();
}

function sha256Hex(str) {
  return crypto.createHash('sha256').update(str, 'utf8').digest('hex');
}

function userUidHash(u) {
  return sha256Hex('sergas_uid_v2:' + normalizeUserId(u));
}

function decryptAesGcm(keyBuf, ivB64, ctB64) {
  const iv = Buffer.from(ivB64, 'base64');
  const full = Buffer.from(ctB64, 'base64');
  const tag = full.subarray(full.length - 16);
  const ct = full.subarray(0, full.length - 16);
  const decipher = crypto.createDecipheriv('aes-256-gcm', keyBuf, iv);
  decipher.setAuthTag(tag);
  const plain = Buffer.concat([decipher.update(ct), decipher.final()]);
  return JSON.parse(plain.toString('utf8'));
}

function encryptAesGcm(keyBuf, plainObj) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', keyBuf, iv);
  const enc = Buffer.concat([cipher.update(JSON.stringify(plainObj), 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return {
    iv: iv.toString('base64'),
    ct: Buffer.concat([enc, tag]).toString('base64')
  };
}

function wrapUserToken(userRecord, passwordPlain, masterKeyTopicsB64, masterKeyQuizB64, masterKeyAdminB64) {
  const normUser = normalizeUserId(userRecord.user);
  const uidHash = userUidHash(normUser);
  const salt = crypto.randomBytes(16);
  const iv = crypto.randomBytes(12);
  const derivedKey = crypto.pbkdf2Sync(normUser + ':' + String(passwordPlain), salt, 100000, 32, 'sha256');

  const tokenPayload = {
    user: normUser,
    name: userRecord.name || normUser,
    role: userRecord.role || 'student',
    plan: userRecord.plan || 'full',
    expiresAt: userRecord.expiresAt || null,
    licenseId: uidHash.slice(0, 8).toUpperCase(),
    masterKeyQuizB64,
    masterKeyTopicsB64: (userRecord.plan === 'full' || userRecord.role === 'admin') ? masterKeyTopicsB64 : null,
    masterKeyAdminB64: (userRecord.role === 'admin') ? masterKeyAdminB64 : null
  };

  const cipher = crypto.createCipheriv('aes-256-gcm', derivedKey, iv);
  const enc = Buffer.concat([cipher.update(JSON.stringify(tokenPayload), 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();

  return {
    uidHash,
    salt: salt.toString('base64'),
    iv: iv.toString('base64'),
    wrapped: Buffer.concat([enc, tag]).toString('base64')
  };
}

function sanitizeRegistryRecord(u) {
  const normUser = normalizeUserId(u.user);
  return {
    user: normUser,
    uidHash: u.uidHash || userUidHash(normUser),
    name: u.name || normUser,
    role: u.role || 'student',
    plan: u.plan || 'full',
    expiresAt: u.expiresAt || null,
    notes: u.notes || ''
  };
}

function loadVaultFromHtml(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const prefix = '    const ENCRYPTED_VAULT = ';
  const start = html.indexOf(prefix);
  if (start === -1) throw new Error('ENCRYPTED_VAULT no encontrado en ' + htmlPath);
  const end = html.indexOf('\n', start);
  const jsonStr = html.slice(start + prefix.length, end).trim().replace(/;$/, '');
  return { html, start, end, vault: JSON.parse(jsonStr) };
}

function unlockAdminRegistry(vault, adminPwd) {
  const normAdmin = normalizeUserId(ADMIN_USER);
  const uidHash = userUidHash(normAdmin);
  const entry = (vault.users || []).find(u => u.uidHash === uidHash);
  if (!entry) throw new Error(`Usuario administrador "${normAdmin}" no encontrado.`);
  const salt = Buffer.from(entry.salt, 'base64');
  const wrappingKey = crypto.pbkdf2Sync(normAdmin + ':' + adminPwd, salt, 100000, 32, 'sha256');
  const adminToken = decryptAesGcm(wrappingKey, entry.iv, entry.wrapped);
  if (!adminToken.masterKeyAdminB64) {
    throw new Error(`El usuario "${normAdmin}" no tiene permisos de administrador.`);
  }
  const masterKeyAdmin = Buffer.from(adminToken.masterKeyAdminB64, 'base64');
  return decryptAesGcm(masterKeyAdmin, vault.adminPayload.iv, vault.adminPayload.ct);
}

function writeVaultToFiles(vault, adminReg) {
  // Always strip any plaintext passwords before persisting adminPayload
  adminReg.usersRegistry = (adminReg.usersRegistry || []).map(sanitizeRegistryRecord);
  vault.adminPayload = encryptAesGcm(Buffer.from(adminReg.masterKeyAdminB64, 'base64'), adminReg);

  const newLine = '    const ENCRYPTED_VAULT = ' + JSON.stringify(vault) + ';';
  for (const f of FILES) {
    if (!fs.existsSync(f)) continue;
    const { html, start, end } = loadVaultFromHtml(f);
    fs.writeFileSync(f, html.slice(0, start) + newLine + html.slice(end), 'utf8');
  }
}

function promptHiddenPassword(question) {
  return new Promise((resolve, reject) => {
    if (!process.stdin.isTTY) {
      reject(new Error('Define la variable de entorno SERGAS_ADMIN_PWD para ejecutar en modo no interactivo.'));
      return;
    }
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const origWrite = rl._writeToOutput;
    rl._writeToOutput = function (str) {
      if (rl.stdoutMuted) rl.output.write('*');
      else origWrite.call(rl, str);
    };
    rl.question(question, (ans) => {
      rl.output.write('\n');
      rl.close();
      resolve(ans);
    });
    rl.stdoutMuted = true;
  });
}

async function main() {
  const [, , cmd, ...args] = process.argv;
  const adminPwd = process.env.SERGAS_ADMIN_PWD || await promptHiddenPassword(`Contraseña de administrador (${ADMIN_USER}): `);
  if (!adminPwd) {
    console.error('Error: contraseña de administrador vacía.');
    process.exit(1);
  }

  const { vault } = loadVaultFromHtml(FILES[0]);
  const adminReg = unlockAdminRegistry(vault, adminPwd);

  if (!cmd || cmd === 'list') {
    console.log('\nALUMNOS Y ACCESOS REGISTRADOS (Zero-Knowledge · sin contraseñas almacenadas):');
    console.log('--------------------------------------------------------------------------------------');
    (adminReg.usersRegistry || []).forEach((u, i) => {
      const planTag = u.role === 'admin' ? 'ADMINISTRADOR' : (u.plan === 'full' ? 'PLAN COMPLETO' : 'SOLO TESTS');
      console.log(`${String(i + 1).padStart(2, '0')}. ${u.user.padEnd(26)} | Clave: •••••••• | ${planTag.padEnd(14)} | Caduca: ${String(u.expiresAt || 'Permanente').padEnd(10)} | ${u.name}`);
    });
    console.log('--------------------------------------------------------------------------------------\n');
  } else if (cmd === 'add') {
    const [userRaw, password, name, expRaw, planRaw] = args;
    if (!userRaw || !password) {
      console.error('Uso: node gestionar_usuarios.js add <email_o_usuario> <contraseña> "<Nombre Completo>" [YYYY-MM-DD|permanente] [full|quiz_only|admin]');
      process.exit(1);
    }
    const user = normalizeUserId(userRaw);
    const uidHash = userUidHash(user);
    const expiresAt = (!expRaw || expRaw.toLowerCase() === 'permanente') ? null : expRaw;
    const role = planRaw === 'admin' ? 'admin' : 'student';
    const plan = planRaw === 'quiz_only' ? 'quiz_only' : 'full';
    const meta = sanitizeRegistryRecord({ user, uidHash, name: name || user, role, plan, expiresAt, notes: 'Alta vía CLI' });

    const wrapped = wrapUserToken(meta, password, adminReg.masterKeyTopicsB64, adminReg.masterKeyQuizB64, adminReg.masterKeyAdminB64);
    vault.users = (vault.users || []).filter(x => x.uidHash !== uidHash);
    vault.users.push(wrapped);

    const existingIdx = adminReg.usersRegistry.findIndex(u => normalizeUserId(u.user) === user);
    if (existingIdx >= 0) adminReg.usersRegistry[existingIdx] = meta;
    else adminReg.usersRegistry.push(meta);

    writeVaultToFiles(vault, adminReg);
    console.log(`Usuario "${user}" guardado (contraseña cifrada y descartada). Total activos: ${adminReg.usersRegistry.length}.`);
  } else if (cmd === 'passwd') {
    const [userRaw, newPassword] = args;
    if (!userRaw || !newPassword) {
      console.error('Uso: node gestionar_usuarios.js passwd <email_o_usuario> <nueva_contraseña>');
      process.exit(1);
    }
    const user = normalizeUserId(userRaw);
    const uidHash = userUidHash(user);
    const existing = adminReg.usersRegistry.find(u => normalizeUserId(u.user) === user);
    if (!existing) {
      console.error(`El usuario "${user}" no existe.`);
      process.exit(1);
    }
    const meta = sanitizeRegistryRecord(existing);
    const wrapped = wrapUserToken(meta, newPassword, adminReg.masterKeyTopicsB64, adminReg.masterKeyQuizB64, adminReg.masterKeyAdminB64);
    vault.users = (vault.users || []).filter(x => x.uidHash !== uidHash);
    vault.users.push(wrapped);

    const idx = adminReg.usersRegistry.findIndex(u => normalizeUserId(u.user) === user);
    adminReg.usersRegistry[idx] = meta;
    writeVaultToFiles(vault, adminReg);
    console.log(`Contraseña actualizada para "${user}" (no almacenada en claro).`);
  } else if (cmd === 'remove') {
    const [userRaw] = args;
    const user = normalizeUserId(userRaw);
    const uidHash = userUidHash(user);
    const before = adminReg.usersRegistry.length;
    adminReg.usersRegistry = adminReg.usersRegistry.filter(u => normalizeUserId(u.user) !== user);
    vault.users = (vault.users || []).filter(x => x.uidHash !== uidHash);
    if (adminReg.usersRegistry.length === before) {
      console.error(`El usuario "${user}" no existe.`);
      process.exit(1);
    }
    writeVaultToFiles(vault, adminReg);
    console.log(`Acceso revocado para "${user}". Usuarios activos: ${adminReg.usersRegistry.length}.`);
  } else if (cmd === 'purge-passwords') {
    writeVaultToFiles(vault, adminReg);
    console.log(`Todas las contraseñas en texto claro han sido eliminadas del registro (${adminReg.usersRegistry.length} usuarios conservan su acceso cifrado).`);
  } else {
    console.log('Comandos disponibles: list | add | passwd | remove | purge-passwords');
  }
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
