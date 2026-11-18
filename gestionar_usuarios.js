#!/usr/bin/env node
/**
 * Gestor CLI de Usuarios y Licencias Criptográficas (AES-256-GCM Key Wrapping)
 * Portal de Estudio Interactivo — Ingeniería Biomédica SERGAS (Subgrupo A1)
 *
 * Uso:
 *   node gestionar_usuarios.js list
 *   node gestionar_usuarios.js add <email_o_usuario> <contraseña> "<Nombre Completo>" [caducidad_YYYY-MM-DD|permanente] [full|quiz_only|admin]
 *   node gestionar_usuarios.js remove <email_o_usuario>
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const FILES = [
  path.join(__dirname, 'index.html'),
  path.join(__dirname, '00_PORTAL_ESTUDIO_INTERACTIVO_BIOMEDICA_SERGAS.html')
];

const ADMIN_USER = process.env.SERGAS_ADMIN_USER || 'admin';
const ADMIN_PWD = process.env.SERGAS_ADMIN_PWD || 'biomedica2026';

function normalizeUserId(u) {
  return String(u || '').trim().toLowerCase();
}

function sha256Hex(str) {
  return crypto.createHash('sha256').update(str, 'utf8').digest('hex');
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

function wrapUserToken(userRecord, masterKeyTopicsB64, masterKeyQuizB64, masterKeyAdminB64) {
  const normUser = normalizeUserId(userRecord.user);
  const uidHash = sha256Hex('sergas_uid_v2:' + normUser);
  const salt = crypto.randomBytes(16);
  const iv = crypto.randomBytes(12);
  const derivedKey = crypto.pbkdf2Sync(normUser + ':' + String(userRecord.password), salt, 100000, 32, 'sha256');

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

function loadVaultFromHtml(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const prefix = '    const ENCRYPTED_VAULT = ';
  const start = html.indexOf(prefix);
  if (start === -1) throw new Error('ENCRYPTED_VAULT no encontrado en ' + htmlPath);
  const end = html.indexOf('\n', start);
  const jsonStr = html.slice(start + prefix.length, end).trim().replace(/;$/, '');
  return { html, start, end, vault: JSON.parse(jsonStr) };
}

function unlockAdminRegistry(vault) {
  const normAdmin = normalizeUserId(ADMIN_USER);
  const uidHash = sha256Hex('sergas_uid_v2:' + normAdmin);
  const entry = (vault.users || []).find(u => u.uidHash === uidHash);
  if (!entry) throw new Error(`Usuario administrador "${normAdmin}" no encontrado en la bóveda.`);
  const salt = Buffer.from(entry.salt, 'base64');
  const wrappingKey = crypto.pbkdf2Sync(normAdmin + ':' + ADMIN_PWD, salt, 100000, 32, 'sha256');
  const adminToken = decryptAesGcm(wrappingKey, entry.iv, entry.wrapped);
  const masterKeyAdmin = Buffer.from(adminToken.masterKeyAdminB64, 'base64');
  return decryptAesGcm(masterKeyAdmin, vault.adminPayload.iv, vault.adminPayload.ct);
}

function saveUpdatedVault(vault, adminReg) {
  const { usersRegistry, masterKeyTopicsB64, masterKeyQuizB64, masterKeyAdminB64 } = adminReg;
  vault.users = usersRegistry.map(u => wrapUserToken(u, masterKeyTopicsB64, masterKeyQuizB64, masterKeyAdminB64));
  vault.adminPayload = encryptAesGcm(Buffer.from(masterKeyAdminB64, 'base64'), adminReg);
  const newLine = '    const ENCRYPTED_VAULT = ' + JSON.stringify(vault) + ';';

  for (const f of FILES) {
    if (!fs.existsSync(f)) continue;
    const { html, start, end } = loadVaultFromHtml(f);
    fs.writeFileSync(f, html.slice(0, start) + newLine + html.slice(end), 'utf8');
  }
}

const [, , cmd, ...args] = process.argv;
const { vault } = loadVaultFromHtml(FILES[0]);
const adminReg = unlockAdminRegistry(vault);

if (!cmd || cmd === 'list') {
  console.log('\n👑 USUARIOS REGISTRADOS EN LA BÓVEDA CRIPTOGRÁFICA (AES-256-GCM):');
  console.log('----------------------------------------------------------------------------------------');
  adminReg.usersRegistry.forEach((u, i) => {
    const planTag = u.role === 'admin' ? 'ADMIN TOTAL' : (u.plan === 'full' ? 'PACK COMPLETO A1' : 'SOLO TEST 683');
    console.log(`${String(i + 1).padStart(2, '0')}. ${u.user.padEnd(24)} | Clave: ${u.password.padEnd(15)} | ${planTag.padEnd(17)} | Caduca: ${u.expiresAt || 'Permanente'} | ${u.name}`);
  });
  console.log('----------------------------------------------------------------------------------------\n');
} else if (cmd === 'add') {
  const [userRaw, password, name, expRaw, planRaw] = args;
  if (!userRaw || !password) {
    console.error('Uso: node gestionar_usuarios.js add <email_o_usuario> <contraseña> "<Nombre Completo>" [YYYY-MM-DD|permanente] [full|quiz_only|admin]');
    process.exit(1);
  }
  const user = normalizeUserId(userRaw);
  const expiresAt = (!expRaw || expRaw.toLowerCase() === 'permanente') ? null : expRaw;
  const role = planRaw === 'admin' ? 'admin' : 'student';
  const plan = planRaw === 'quiz_only' ? 'quiz_only' : 'full';

  const existingIdx = adminReg.usersRegistry.findIndex(u => normalizeUserId(u.user) === user);
  const record = { user, password, name: name || user, role, plan, expiresAt, notes: 'Alta vía CLI' };
  if (existingIdx >= 0) {
    adminReg.usersRegistry[existingIdx] = record;
    console.log(`✅ Usuario "${user}" actualizado.`);
  } else {
    adminReg.usersRegistry.push(record);
    console.log(`✅ Nuevo usuario "${user}" añadido.`);
  }
  saveUpdatedVault(vault, adminReg);
  console.log(`🔒 Bóveda criptográfica actualizada en index.html (${adminReg.usersRegistry.length} usuarios activos).`);
} else if (cmd === 'remove') {
  const [userRaw] = args;
  const user = normalizeUserId(userRaw);
  const before = adminReg.usersRegistry.length;
  adminReg.usersRegistry = adminReg.usersRegistry.filter(u => normalizeUserId(u.user) !== user);
  if (adminReg.usersRegistry.length === before) {
    console.error(`❌ El usuario "${user}" no existe.`);
    process.exit(1);
  }
  saveUpdatedVault(vault, adminReg);
  console.log(`🗑️ Acceso revocado para "${user}". Bóveda actualizada (${adminReg.usersRegistry.length} usuarios activos).`);
} else {
  console.log('Comandos disponibles: list | add | remove');
}
