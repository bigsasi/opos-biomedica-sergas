# Esp. Tema 55 — Aplicación de la normativa eléctrica (REBT) y eficiencia energética en entornos biomédicos.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 1: Núcleo Diamante (💎 Núcleo Diamante)  
> **Bloque de Estudio Completo:** [`Bloque_08_Ingenieria_Hospitalaria_REBT_ITC38_Ambiente_Controlado_Planes_Directores_Calidad.md`](../02_apuntes_nucleo_diamante/Bloque_08_Ingenieria_Hospitalaria_REBT_ITC38_Ambiente_Controlado_Planes_Directores_Calidad.md)

## 🎯 Cruce con Otras Oposiciones del SERGAS

- **Categorías con solapamiento:** **Ingeniero/a Técnico/a** |  | **Grupo Técnico / Gestión TIC**
- **Grado de solapamiento:** **Total (95%)**: Cubre íntegramente el Reglamento Electrotécnico de Baja Tensión (REBT, ITC-BT-28/38 quirófanos y locales médicos) y eficiencia energética en edificios hospitalarios.<br><br>**Medio (45%)**: Cubre instalaciones eléctricas en CPD y Green IT / eficiencia energética.
- **Epígrafes equivalentes:**
  • Tema 3. Reglamento electrotécnico de baja tensión (RBT): Real decreto 842/2002. Ámbito de aplicación. Instrucciones técnicas complementarias ITC-BT. Guía técnica.
  • Tema 4. Instalación eléctrica en locales de pública concurrencia, alumbrado de emergencia.
  • Tema 28. Cogeneración, trigeneración: aspectos generales. Recuperadores. Máquinas de absorción. Eficiencia energética. Código técnico de la edificación (HE ahorro de energía: objeto y ámbito de aplicación).
  • Tema 30. Real decreto 235/2013, de 5 de abril, por el que se aprueba el procedimiento básico para la certificación de la eficiencia energética de los edificios.
  
  • Superior (A1): Tema 58. Diseño de centro de procesos de datos. Instalaciones (electricidad, control de acceso, control de presencia, sistema antincendios, climatización, sistemas de alimentación ininterrumpida). y Tema 59. Virtualización de servidores. Virtualización del almacenamiento. Virtualización del puesto cliente. Computación basada en servidor (SBC). Grid Computing. Cloud computing. Hiperconvergencia. Green IT y eficiencia energética.
  • Gestión (A2): Tema 48. Diseño de centro de procesos de datos. Instalaciones (electricidad, control de acceso, control de presencia, sistema antincendios, climatización, sistemas de alimentación ininterrumpida). y Tema 49. Virtualización de servidores. Virtualización del almacenamiento. Virtualización del puesto cliente. Tecnologías de contenedores. Computación basada en servidor (SBC). Grid Computing. Cloud computing. Hiperconverxencia. Green IT y eficiencia energética.
  • Especialista (C1): Tema 36. Instalaciones de centro de procesos de datos (electricidad, control de acceso, control de presencia, sistema antincendios, climatización, sistemas de alimentación ininterrumpida). y Tema 37. Virtualización de servidores. Virtualización del almacenamiento. Virtualización del puesto cliente. Computación basada en servidor (SBC). Green IT y eficiencia energética.

---

## 📖 Desarrollo Técnico y Normativo del Tema

### 1. Tema 55: Normativa Eléctrica en Entornos Biomédicos (`REBT RD 842/2002`, `ITC-BT-28`, `ITC-BT-38` y `UNE-HD 60364-7-710`)

> **¡CASO PRÁCTICO ESTRELLA DE INGENIERÍA HOSPITALARIA!**
> En todos los exámenes de ingeniería hospitalaria y electromedicina preguntan los valores exactos de la instrucción **`ITC-BT-38` (*Requisitos particulares para la instalación eléctrica en quirófanos y salas de intervención*)** y de la **`ITC-BT-28` (*Locales de pública concurrencia*)**.

### 1.1. Suministros Complementarios en Hospitales (`ITC-BT-28` e `ITC-BT-38`)
1. **Según `ITC-BT-28` (Locales de Pública Concurrencia):**
   - Todo hospital o ambulatorio es un **Local de Pública Concurrencia** y requiere **Suministro de Reserva** (capaz de mantener al menos el **$25\%$ de la potencia total contratada** mediante grupos electrógenos diésel de arranque automático en $< 15\text{ segundos}$).
   - **Alumbrado de Emergencia:** Iluminancia mínima de **$1\text{ lux}$ a nivel del suelo en el eje de las vías de evacuación** y **$5\text{ lux}$ en los puntos donde estén situados los equipos manuales de protección contra incendios y los cuadros eléctricos de distribución**, durante un mínimo de **$1\text{ hora}$**.
2. **Según `ITC-BT-38` (Suministro Especial Complementario en Quirófanos y Salas de Intervención):**
   - Además del grupo electrógeno general, los quirófanos y salas de intervención requieren un **Suministro Especial Complementario (Baterías de acumuladores / SAI)** que entre en servicio automáticamente en **menos de $0,5\text{ segundos}$ (corte breve)** y con una **autonomía mínima de $2\text{ horas}$** para alimentar:
     - **La lámpara de quirófano** (o endoscopio).
     - **Los equipos de asistencia vital** (máquina de anestesia, respirador, bomba de circulación extracorpórea, monitores críticos).
   - **Alumbrado de Reemplazamiento en Quirófano:** Debe proporcionar una iluminancia igual al alumbrado normal durante **$2\text{ horas}$**.

### 1.2. Las 5 Medidas de Protección Eléctrica Obligatorias de la `ITC-BT-38` en Quirófanos y Salas de Intervención (¡MEMORIZAR CIFRAS EXACTAS!)

| Medida de Protección (`ITC-BT-38`) | Valor Numérico Exacto de Examen | Por qué se exige (Fundamento Biomédico) |
| :--- | :--- | :--- |
| **1. Esquema IT Médico (Transformador de Aislamiento Monofásico con Neutro Aislado de Tierra)** *(Obligatorio al menos **1 transformador por cada quirófano**)* | • **Potencia nominal del transformador:** Entre **$\mathbf{0,5\text{ kVA y }10\text{ kVA}}$** (típicamente $5\text{ a }7,5\text{ kVA}$).<br>• **Tensión secundaria máxima:** **$\le 230\text{ V}$** monofásica.<br>• **Corriente de fuga del secundario a tierra en vacío:** **$\le 0,5\text{ mA}$**. | **Doble objetivo:**<br>1. **Continuidad de suministro vital:** Ante un **primer defecto de aislamiento a tierra** en un bisturí o bomba, **NO salta ningún interruptor automático ni diferencial** (el paciente no se queda sin soporte vital en mitad de la operación).<br>2. Reduce drásticamente la corriente de defecto a masa (evita **microshock** al corazón del paciente). |
| **2. Vigilador / Monitor Permanente de Aislamiento (CPI / IMD) + Panel Repetidor de Alarmas en Quirófano** | • **Impedancia interna del detector:** **$\ge 100\text{ k}\Omega$**.<br>• **Tensión de medida:** $\le 25\text{ V DC}$; corriente inyectada $\le 1\text{ mA}$.<br>• **Umbral de disparo de alarma (óptica ROJA + acústica):** Cuando la resistencia de aislamiento cae por debajo de **$\mathbf{50\text{ k}\Omega}$** *(en la norma armonizada `UNE-HD 60364-7-710` también se vigila sobrecarga y temperatura del transformador)*.<br>• En el panel del quirófano: **Luz VERDE** (normal) + **Luz ROJA y alarma acústica** (fallo de aislamiento $< 50\text{ k}\Omega$, silenciable acústicamente pero la luz roja permanece fija hasta reparar) + botón de **TEST**. | Avisa inmediatamente al personal de quirófano y mantenimiento de que se ha producido un **primer fallo de aislamiento** para que finalicen la cirugía con seguridad y reparen el equipo antes de un segundo fallo. |
| **3. Puesta a Tierra de Protección y Conexión Equipotencial Suplementaria (Embarrado de Equipotencialidad `EE` + Embarrado de Tierra `PT`)** | • **Resistencia máxima** entre cualquier masa metálica o toma de tierra del quirófano y el embarrado de equipotencialidad (`EE`): **$\mathbf{\le 0,1\text{ }\Omega}$**.<br>• **Diferencia de potencial máxima** entre partes metálicas accesibles en condiciones normales: **$\mathbf{\le 10\text{ mV}}$**.<br>• **Sección de los conductores:** Cobre aislado verde-amarillo de **$\ge 6\text{ mm}^2$** para equipotencialidad individual y **$\ge 16\text{ mm}^2$** para la unión entre el embarrado `EE` y el de tierra `PT`. | Garantiza que todas las partes metálicas al alcance del paciente (mesa quirúrgica, columna de gases, carcasa de equipos) estén exactamente al **mismo potencial eléctrico ($\Delta V \le 10\text{ mV}$)**, impidiendo que circule una corriente de microshock ($> 10\text{ }\mu\text{A}$) a través del corazón del paciente. |
| **4. Protección Diferencial de Alta Sensibilidad (para los circuitos que NO van al transformador de aislamiento, p. ej. equipo portátil de Rayos X o láser de gran potencia)** | • **Interruptores diferenciales de Clase A (sensibles a corrientes alternas y pulsantes con componente continua) de alta sensibilidad:** **$I_{\Delta n} \mathbf{\le 30\text{ mA}}$**. | Protege los receptores de gran potencia o alumbrado general que se alimentan fuera del transformador IT. |
| **5. Suelos Antiestáticos Conductores (Cuando se empleen gases anestésicos inflamables) y Control de Humedad** | • Resistencia de aislamiento del suelo entre **$50\text{ k}\Omega\text{ y }1\text{ M}\Omega$** (`UNE 20392`).<br>• **Humedad relativa en quirófano:** **$\ge 50\%$** ($45\text{–}55\%$) para disipar la electricidad estática. | Evita chispas electrostáticas. |

### 1.3. Periodicidad Oficial de Revisiones e Inspecciones Eléctricas en Quirófanos (`ITC-BT-38` e `ITC-BT-05` — ¡Pregunta fija!)
1. **ANTES de cada intervención (o diariamente):** El personal usuario verifica el botón de **TEST** del monitor de aislamiento del panel de quirófano.
2. **SEMANALMENTE:** Control del correcto funcionamiento del **dispositivo de vigilancia de aislamiento** y de los dispositivos de protección.
3. **MENSUALMENTE:** Realizar **medidas de continuidad y de resistencia de aislamiento** de los diversos circuitos del quirófano (registradas en el **Libro de Mantenimiento** de cada quirófano).
4. **ANUALMENTE (por Empresa Instaladora Autorizada / Servicio de Ingeniería):** Revisión completa de la instalación del quirófano (medida de equipotencialidad $\le 0,1\text{ }\Omega$, aislamiento, disparo de diferenciales, funcionamiento de suministros complementarios).
5. **CADA 5 AÑOS (`ITC-BT-05`):** **Inspección Periódica Obligatoria por un Organismo de Control Autorizado (OCA)** para todos los locales de pública concurrencia y quirófanos/salas de intervención (además de la **Inspección Inicial por OCA** antes de su puesta en servicio).

### 1.4. Clasificación Europea de Locales Médicos según `UNE-HD 60364-7-710` (IEC 60364-7-710)
- **Grupo 0:** Local médico donde **NO se utilizan partes aplicables** de equipos electromédicos y una discontinuidad del suministro no pone en peligro al paciente (ej. consultas médicas básicas, salas de espera).
- **Grupo 1:** Local médico donde las partes aplicables se usan **externamente** o invasivamente en cualquier parte del cuerpo **EXCEPTO aplicación cardíaca directa** (ej. habitaciones de hospitalización, salas de ecografía, endoscopia básica, salas de diálisis).
- **Grupo 2:** Local médico donde las partes aplicables se destinan a **procedimientos intracardíacos, intervenciones quirúrgicas o tratamientos vitales donde el corte de suministro eléctrico supone peligro de muerte** (**Quirófanos, Salas de Reanimación Postanestésica [URPA], Unidades de Cuidados Intensivos [UCI], Salas de Hemodinámica/Angiografía y Salas de Prematuros/Neonatología crítica**) $\rightarrow$ **Obligatorio Esquema IT Médico con transformador de aislamiento**.

### 1.5. Eficiencia Energética en Entornos Hospitalarios (Tema 55 y Tema 69)
- Los hospitales funcionan **24 h / 365 días** con una altísima demanda térmica y eléctrica: el consumo energético de un hospital se reparte aproximadamente en **$40\text{–}50\%$ Climatización (HVAC) y Agua Caliente Sanitaria (ACS)**, **$20\text{–}25\%$ Iluminación** y **$25\text{–}35\%$ Equipamiento electromédico, diagnóstico por imagen, esterilización y lavandería**.
- **Medidas clave de eficiencia energética (`CTE DB-HE`, `RITE` e `ISO 50001`):**
  1. **Recuperadores de calor entálpicos/rotativos o de baterías en los climatizadores (UTAs)** de áreas de 100% aire exterior.
  2. **Variadores de frecuencia (VFD)** en bombas de circulación secundarias y ventiladores (la potencia absorbida varía con el **cubo del caudal**: $P \propto Q^3$ según las leyes de afinidad).
  3. **Enfriadoras con recuperación de calor, bombas de calor polivalentes a 4 tubos, *Free-Cooling* (enfriamiento gratuito por aire exterior)** y **Cogeneración / Trigeneración** (producción combinada de electricidad + calor para calefacción/ACS + frío mediante máquinas de absorción de bromuro de litio).
  4. **Iluminación 100% LED con regulación DALI** por presencia y aporte de luz natural (`CTE DB-HE3`, cumpliendo el **VEEI — Valor de Eficiencia Energética de la Instalación**).
  5. **Modo *Eco / Standby* inteligente en equipos de Alta Tecnología (RM y TC):** Apagado programado de gradientes/tubo fuera de horario programado y compresores de helio de consumo adaptativo (*Smart Helium Management*), que ahorran hasta un $30\%$ del consumo eléctrico del servicio de radiología.

---
