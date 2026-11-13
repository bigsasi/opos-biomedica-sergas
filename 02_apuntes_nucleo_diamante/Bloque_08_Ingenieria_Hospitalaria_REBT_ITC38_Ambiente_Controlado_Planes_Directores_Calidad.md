# Bloque 08 — Ingeniería Hospitalaria: Normativa Eléctrica (REBT / ITC-BT-38), Áreas de Ambiente Controlado (UNE 100713 / 171340), Planes Funcionales y Directores, Calidad por Procesos, CAD y Sostenibilidad

> **Temas de la Parte Específica cubiertos íntegramente en este bloque (11 temas):**
> - **Tema 45:** Caracterización y funcionamiento de los sistemas CAD (diseño asistido por ordenador).
> - **Tema 55:** Aplicación de la normativa eléctrica (REBT) y eficiencia energética en entornos biomédicos.
> - **Tema 59:** Calidad asistencial y gestión por procesos. Descripción y diseño de programas de calidad en sistemas sanitarios. Identificación de procesos clave. Bases metodológicas. Implantación de los procesos: características, claves estratégicas, metodología de implantación. Control y mejora continua de los procesos. Mecanismos de evaluación y seguimiento de procesos.
> - **Tema 61:** Plan de necesidades. Plan de inversión. Planes de alta tecnología. Metodología.
> - **Tema 62:** Áreas de ambiente controlado. Bloque quirúrgico. Unidades de críticos. Unidades de aislamiento. Flujo de trabajo y circulaciones.
> - **Tema 63:** Plan funcional de centros sanitarios. Concepto y metodología. Definición de necesidades asistenciales, cartera de servicios, dimensionamiento de espacios y organización de recursos.
> - **Tema 64:** Documentos estratégicos y de planificación del Servicio Gallego de Salud y de la Consellería de Sanidad.
> - **Tema 65:** Unidades funcionales y diseño de flujos: seguridad, eficiencia y circuitos asistenciales. Estructura organizativa y recursos. Criterios de humanización y sostenibilidad en el diseño de espacios y gestión de recursos.
> - **Tema 66:** Planes directores de hospitales. Metodología y etapas.
> - **Tema 68:** Integración de equipos biomédicos en instalaciones e infraestructuras.
> - **Tema 69:** Economía circular. Sostenibilidad. Resiliencia.
>
> **PDF Oficial descargado en [`01_normativa_oficial/`](../01_normativa_oficial/):**
> - [`T55_RD_842_2002_REBT_e_ITC_BT_38_Quirofanos.pdf`](../01_normativa_oficial/T55_RD_842_2002_REBT_e_ITC_BT_38_Quirofanos.pdf)

---

## 1. Tema 55: Normativa Eléctrica en Entornos Biomédicos (`REBT RD 842/2002`, `ITC-BT-28`, `ITC-BT-38` y `UNE-HD 60364-7-710`)

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

## 2. Tema 62: Áreas de Ambiente Controlado: Bloque Quirúrgico, Críticos y Unidades de Aislamiento (`UNE 100713`, `UNE 171340` e `ISO 14644-1`)

> **¡PREGUNTA FIJA DE TEORÍA Y SUPUESTOS PRÁCTICOS!**
> Las condiciones de climatización, filtración de aire, renovaciones por hora, presión diferencial, temperatura y humedad en hospitales se rigen en España por dos normas fundamentales: **`UNE 100713` (*Instalaciones de acondicionamiento de aire en hospitales*)** y **`UNE 171340` (*Validación y cualificación de salas de ambiente controlado en hospitales*)**.

### 2.1. Los 3 Niveles de Filtración en Climatizadores Hospitalarios (`UNE 100713` para Locales Clase I — Muy Alto Riesgo)
Para los locales de **Clase I (Quirófanos Tipo A y Tipo B, UCI de inmunodeprimidos/quemados, salas limpias de farmacia)**, la norma `UNE 100713` exige obligatoriamente **3 etapas de filtración en serie**:
1. **1ª Etapa (En la toma de aire exterior / entrada de la UTA):** Filtro **`F5 / F6` (actual `ePM10` / `ePM2,5`)** — retiene polvo grueso y protege la batería de tratamiento de la UTA.
2. **2ª Etapa (A la salida de la UTA, después del ventilador de impulsión):** Filtro fino **`F9` (actual `ePM1 80%`)**.
3. **3ª Etapa (Filtro Absoluto TERMINAL en el propio techo/difusor del quirófano):** Filtro **`HEPA H13 o H14`** (`UNE-EN 1822`, con eficacia de retención **$\ge 99,95\%$ [H13] o $\ge 99,995\%$ [H14] para la partícula más penetrante $\text{MPPS} \approx 0,1\text{–}0,3\text{ }\mu\text{m}$**), impulsando el aire mediante **Techo de Flujo Laminar (Unidireccional)** sobre la mesa quirúrgica (en Quirófanos Tipo A de alta tecnología) o flujo turbulento por mezcla (en Quirófanos Tipo B convencionales).

### 2.2. Tabla Maestra de Parámetros de Áreas de Ambiente Controlado (`UNE 100713` y `UNE 171340` — ¡MEMORIZAR!)

| Tipo de Sala / Unidad | Clasificación `UNE 100713` / `ISO 14644-1` | Caudal de Aire Exterior / Renovaciones por hora | Presión Diferencial ($\Delta P$) respecto a locales anexos | Temperatura y Humedad Relativa | Nivel de Ruido máx. |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Quirófano Tipo A (Alta Tecnología):** Trasplantes, cirugía cardíaca, ortopedia con prótesis, neurocirugía, quirófano híbrido | **Clase I** / **`ISO 5`** *(en reposo)* | **$\ge 2.400\text{ m}^3\text{/h}$** de impulsión con **Flujo Unidireccional (Laminar)**; **$100\%$ aire exterior** (o $\ge 1.200\text{ m}^3\text{/h}$ aire exterior + recirculación local por HEPA) $\approx \mathbf{\ge 20\text{ ren/h}}$. | **SOBREPRESIÓN POSITIVA ($\mathbf{+15\text{ a }+25\text{ Pa}}$)** (el aire sale siempre del quirófano hacia el pasillo limpio y del pasillo limpio al sucio). | • **$T = \mathbf{22\text{ a }26\text{ }^\circ\text{C}}$** *(ajustable de $18\text{ a }26\text{ }^\circ\text{C}$)*<br>• **$\text{HR} = \mathbf{45\%\text{ a }55\%}$** | $\le 40\text{ dBA}$ |
| **Quirófano Tipo B (Convencional)** y Salas de Intervención / Paritorios | **Clase I** / **`ISO 7`** *(en reposo)* | Flujo turbulento por difusión de mezcla; caudal mínimo **$1.200\text{ m}^3\text{/h}$ ($100\%$ aire exterior)** y **$\mathbf{\ge 15\text{ a }20\text{ renovaciones/h}}$**. | **SOBREPRESIÓN POSITIVA ($\mathbf{+10\text{ a }+15\text{ Pa}}$)** | • **$T = \mathbf{22\text{ a }26\text{ }^\circ\text{C}}$**<br>• **$\text{HR} = \mathbf{45\%\text{ a }55\%}$** | $\le 40\text{ dBA}$ |
| **Unidades de Críticos (UCI, Reanimación URPA, Coronarias, Neonatología)** | **Clase I** / **`ISO 7` u `8`** | **3 etapas de filtración (con HEPA H13)**; mínimo **$\ge 6\text{ renovaciones/h}$** de aire exterior (total $\ge 12\text{ ren/h}$). | **Positiva ($+5\text{ a }+10\text{ Pa}$)** o neutra en box estándar. | • **$T = 24\text{ a }26\text{ }^\circ\text{C}$** ($22\text{–}26\text{ }^\circ\text{C}$)<br>• **$\text{HR} = 45\text{–}55\%$** | $\le 35\text{–}40\text{ dBA}$ |
| **Habitación de Aislamiento PROTECTOR (Pacientes Inmunodeprimidos / Neutropénicos / Trasplante Médula Ósea / Grandes Quemados)** | **Clase I** / **`ISO 5` o `6`** | **$100\%$ aire filtrado por HEPA H14** ($\ge 12\text{–}15\text{ ren/h}$). Entrada a través de **esclusa con presión positiva**. | **PRESIÓN POSITIVA ($\mathbf{+15\text{ Pa}}$)** en la habitación respecto a la esclusa y pasillo (**para impedir que entren hongos como *Aspergillus* al paciente**). | • $T = 22\text{–}25\text{ }^\circ\text{C}$<br>• $\text{HR} = 45\text{–}55\%$ | $\le 35\text{ dBA}$ |
| **Habitación de Aislamiento para INFECCIOSOS de Transmisión Aérea (Tuberculosis bacilífera, Sarampión, Varicela, COVID/SARS)** | Especial infecciosos | **$100\%$ de extracción al exterior SIN RECIRCULACIÓN** a través de **filtro absoluto HEPA H14 en la extracción** y $\ge 12\text{ renovaciones/h}$. Obligatoria **esclusa previa**. | **PRESIÓN NEGATIVA ($\mathbf{-15\text{ Pa}}$)** en la habitación y baño respecto a la esclusa y al pasillo (**para impedir que el patógeno salga al hospital**). | • $T = 22\text{–}25\text{ }^\circ\text{C}$<br>• $\text{HR} = 45\text{–}55\%$ | $\le 35\text{ dBA}$ |

### 2.3. Zonificación, Flujos de Trabajo y Circulaciones en el Bloque Quirúrgico (Tema 62 y Tema 65)
El diseño arquitectónico y funcional del **Bloque Quirúrgico** divide el espacio en **3 zonas de asepsia creciente** y separa los **circuitos de limpio y sucio**:
1. **Zona Negra (No restringida / Externa):** Acceso general, admisión quirúrgica, información a familiares y vestuarios de filtro (donde el personal cambia su ropa de calle por pijama quirúrgico, gorro y calzas).
2. **Zona Gris (Semirrestringida / Limpia):** Pasillo limpio de acceso de pacientes en camilla transfer e ingreso del personal desde vestuarios, zona de lavado quirúrgico de manos, almacén de material estéril/equipos, unidad de preparación preoperatoria y **URPA (Reanimación)**.
3. **Zona Blanca (Restringida / Estéril):** El interior del **Quirófano** propiamente dicho (acceso con mascarilla quirúrgica y vestimenta estéril).
4. **Doble pasillo (Circuito Limpio / Circuito Sucio):** En el diseño de **doble circulación**, el personal, pacientes e instrumental estéril entran por el **pasillo limpio (en sobrepresión)**, y los residuos quirúrgicos, ropa sucia y contenedores de instrumental usado salen del quirófano por una puerta posterior o esclusa hacia el **pasillo sucio / de evacuación (en depresión respecto al quirófano)** directo al montacargas de sucio hacia la Central de Esterilización.

### 2.4. Validación y Cualificación Anual de Salas de Ambiente Controlado (`UNE 171340`)
La norma **`UNE 171340`** obliga a validar las salas de ambiente controlado al menos **ANUALMENTE** (y tras cualquier obra o cambio de filtros HEPA) verificando:
1. **Contaje de partículas en suspensión en el aire (`ISO 14644-1`):**
   - **Clase `ISO 5` (Quirófano Tipo A):** Máximo **$3.520\text{ partículas/m}^3$ de tamaño $\ge 0,5\text{ }\mu\text{m}$** (y $\le 29\text{ partículas/m}^3$ de $\ge 5,0\text{ }\mu\text{m}$).
   - **Clase `ISO 7` (Quirófano Tipo B):** Máximo **$352.000\text{ partículas/m}^3$ de tamaño $\ge 0,5\text{ }\mu\text{m}$** (y $\le 2.930\text{ partículas/m}^3$ de $\ge 5,0\text{ }\mu\text{m}$).
   - **Clase `ISO 8`:** Máximo **$3.520.000\text{ partículas/m}^3$ de tamaño $\ge 0,5\text{ }\mu\text{m}$**.
2. **Control Microbiológico ambiental y de superficies:** Muestreador volumétrico de impacto de aire en placas de agar (**$< 10\text{ UFC/m}^3$ en Quirófano Tipo A**, **$< 100\text{ UFC/m}^3$ en Quirófano Tipo B** y **ausencia total [$0\text{ UFC}$] de hongos filamentosos como *Aspergillus***).
3. **Integridad y estanqueidad de los filtros HEPA instalados (Test DOP / PAO con fotómetro o contador de aerosol)**, caudal y número de renovaciones/hora, cascada de presiones diferenciales ($\Delta P$), temperatura, humedad y nivel sonoro.

---

## 3. Temas 61, 63, 65, 66 y 68: Plan Funcional, Plan Director de Hospitales, Plan de Necesidades/Inversión e Integración en Infraestructuras

> **Cómo se relacionan estos 5 temas en un único flujo cronológico (¡Muy preguntado en examen!):**
> $$\text{1. Análisis Demográfico y Cartera de Servicios} \longrightarrow \text{2. PLAN FUNCIONAL (Tema 63 y 65: Necesidades, Dimensionamiento y Flujos)} \longrightarrow \text{3. PLAN DIRECTOR ARQUITECTÓNICO POR FASES (Tema 66)} \longrightarrow \text{4. PLAN DE NECESIDADES Y PLAN DE INVERSIÓN DE EQUIPAMIENTO / ALTA TECNOLOGÍA (Tema 61)} \longrightarrow \text{5. PREINSTALACIÓN E INTEGRACIÓN DE EQUIPOS EN OBRA (Tema 68)}$$

### 3.1. Tema 63 y Tema 65: El Plan Funcional de un Centro Sanitario y Diseño de Flujos
- **¿Qué es el Plan Funcional? (Tema 63):** Es el **documento técnico-asistencial previo a cualquier proyecto arquitectónico** que traduce la demanda sanitaria de una población y la **Cartera de Servicios** del hospital en una relación cuantificada de **Unidades Funcionales**, su actividad prevista (consultas, ingresos, estancias medias, cirugías, exploraciones), la **organización de recursos humanos y tecnológicos**, y el **Programa Funcional de Superficies** (metros cuadrados útiles y construidos de cada local y sus relaciones de proximidad/flujos).
- **Metodología de Dimensionamiento de un Plan Funcional (Fórmulas de cálculo en supuestos prácticos):**
  1. **Dimensionamiento de Camas de Hospitalización:**
     $$\text{Estancias anuales previstas} = \text{Ingresos anuales} \times \text{Estancia Media (EM)}$$
     $$\text{Nº de Camas necesarias} = \frac{\text{Estancias anuales previstas}}{365 \times \text{Índice de Ocupación objetivo (IO, típicamente } 0,80\text{ a }0,85)}$$
  2. **Dimensionamiento de Quirófanos (o Salas de TC / RM / Consultas):**
     $$\text{Nº de Quirófanos} = \frac{\text{Nº de Intervenciones anuales} \times \text{Duración media por intervención (horas)}}{\text{Jornada hábil anual de un quirófano (días/año } \times \text{ horas/día)} \times \text{Rendimiento Quirúrgico objetivo (}0,75\text{–}0,80\text{)}}$$
- **Unidades Funcionales y Diseño de Flujos / Circulaciones (Tema 65):**
  - **Separación estricta de circulaciones externas e internas (Verticales [ascensores/montacargas] y Horizontales [pasillos]):**
    1. **Circulación Externa / Ambulatoria:** Pacientes ambulatorios (Consultas Externas, Extracciones, Hospital de Día, Gabinetes) y visitantes $\rightarrow$ no deben cruzar nunca las circulaciones internas de hospitalización ni de críticos.
    2. **Circulación Interna Técnica / Asistencial:** Personal sanitario y **pacientes encamados** (entre Urgencias, Diagnóstico por Imagen, Bloque Quirúrgico, UCI y Hospitalización).
    3. **Circulación Logística (Limpio vs. Sucio):** Suministros limpios (farmacia, comida, lencería limpia, material estéril) separados de los circuitos de evacuación de sucio (residuos sanitarios, ropa sucia, cadáveres).
  - **Criterios de Humanización y Sostenibilidad (Tema 65 y 69):** Habitaciones individuales o dobles con luz natural y vistas al exterior, control acústico nocturno en UCI/hospitalización, señalética accesible universal (lectura fácil/braille), arquitectura biofílica y certificaciones ambientales de edificación sostenible (**BREEAM / LEED / VERDE**).

### 3.2. Tema 66: Planes Directores de Hospitales (Metodología y Etapas)
Un **Plan Director** es el instrumento estratégico de planificación física, funcional, tecnológica y económica a **medio y largo plazo ($5\text{ a }15\text{ años}$)** que ordena la **reforma, ampliación y modernización por fases de un hospital en funcionamiento** (o la construcción de uno nuevo) **garantizando en todo momento la continuidad de la actividad asistencial sin interrumpir el servicio del hospital**.
- **Las 6 Etapas Metodológicas de un Plan Director (¡Pregunta literal del Tema 66 de Biomédica y Tema 72 de Ing. Técnico!):**
  1. **Etapa 1 — Análisis de la Situación Actual (Diagnóstico de partida):** Estudio demográfico y epidemiológico del Área Sanitaria, análisis de la actividad histórica, auditoría del estado arquitectónico, estructural, de instalaciones industriales y del **inventario/obsolescencia del parque tecnológico biomédico**.
  2. **Etapa 2 — Definición del Modelo Asistencial y Plan Funcional Futuro:** Definición de la cartera de servicios horizonte, proyecciones de demanda a $10\text{–}15\text{ años}$ (potenciando ambulatorización, CMA, Hospital de Día y telemedicina) y cálculo del programa de necesidades de espacios.
  3. **Etapa 3 — Zonificación y Ordenación General Arquitectónica (*Master Plan*):** Contraste entre la superficie actual y la futura; diseño de la matriz de relaciones funcionales entre bloques (Urgencias $\leftrightarrow$ Imagen $\leftrightarrow$ Críticos/Quirófanos) y reserva de espacios de crecimiento futuro (*espacios pulmón*).
  4. **Etapa 4 — Planificación de Fases de Ejecución y Gestión de Traslados («Efecto Dominó»):** Es la etapa más crítica en la reforma de un hospital vivo: diseña la secuencia constructiva (**Fase 0 de obras previas/edificio nuevo $\rightarrow$ traslado de unidades $\rightarrow$ demolición/reforma de zonas liberadas en Fase 1, Fase 2...**) minimizando el ruido, el polvo (*protocolo de bioseguridad frente a Aspergillus en obras hospitalarias*) y las interferencias asistenciales.
  5. **Etapa 5 — Plan de Equipamiento y Alta Tecnología + Valoración Económica y Financiera (Plan de Inversiones plurianual).**
  6. **Etapa 6 — Licitación de Proyectos, Dirección de Obra, Comisionado (*Commissioning*), Puesta en Marcha y Evaluación Post-Ocupacional.**

### 3.3. Tema 61 y Tema 68: Plan de Necesidades, Plan de Inversión, Alta Tecnología e Integración en Instalaciones
1. **Clasificación del Equipamiento en un Plan de Inversión / Montaje de Hospitales (Grupos I, II y III — ¡Pregunta clásica!):**
   - **Grupo I (Obra civil e instalaciones fijas ligadas al edificio):** Incluido en el presupuesto de ejecución de la obra (climatización, gases medicinales, cuadros eléctricos, lámparas y columnas si van en obra, tubos neumáticos).
   - **Grupo II (Mobiliario clínico y general, equipamiento electromédico estándar y de diagnóstico):** Camas, mesas quirúrgicas, monitores, respiradores, ecógrafos, autoclaves, equipamiento de laboratorio.
   - **Grupo III (Alta Tecnología Sanitaria / Grandes Equipos pesados):** Aceleradores lineales, Protonterapia, PET-TC, PET-RM, SPECT-TC, Resonancias Magnéticas, TC, Salas de Angiografía/Hemodinámica, Robots Quirúrgicos.
2. **Metodología de Elaboración del Plan de Necesidades y de Inversión (Tema 61):**
   - **Priorización multicriterio:** **1) Seguridad del paciente y cumplimiento normativo** (`RD 601/2019`, alertas AEMPS), **2) Obsolescencia tecnológica y fin de soporte técnico/repuestos (*End-of-Life* / criterios FENIN-COCIR)**, **3) Ratio coste de mantenimiento correctivo anual vs. valor de reposición** (si el gasto en averías supera el $15\text{–}20\%$ del valor de compra de un equipo nuevo), **4) Demanda asistencial / listas de espera** y **5) Retorno clínico e innovación tecnológica (Evaluación de Tecnologías Sanitarias — ETS / Avalia-t en Galicia)**.
   - **Análisis del Coste Total de Propiedad (*Total Cost of Ownership* — TCO / Ciclo de Vida):** No evalúa solo el precio de compra inicial (**CAPEX**), sino la suma de: $\text{CAPEX (Adquisición + Obras de preinstalación)} + \text{OPEX durante los 8–10 años de vida útil (Mantenimiento integral, fungibles cautivos, consumo energético/helio, licencias de software y desinstalación/baja)}$.
3. **Tema 68: Integración de Equipos Biomédicos en Instalaciones e Infraestructuras (*Guías de Preinstalación / Site Planning*):**
   Antes de recibir un equipo pesado (RM, TC, LINAC, Sala de Hemodinámica, Autoclave o Planta de Diálisis), el Ingeniero Biomédico debe coordinar con Ingeniería y Obras la **Guía de Preinstalación del fabricante (*Site Planning Guide*)** verificando **7 aspectos críticos**:
   1. **Cargas estructurales y Ruta de Acceso (*Rigging*):** Peso estático y dinámico del equipo (un imán de RM de $3\text{ T}$ pesa **$5\text{ a }8\text{ toneladas}$** y un gantry de TC $\approx 2\text{ toneladas}$ $\rightarrow$ cálculo de forjado y bancada antivibratoria), dimensiones de pasillos, resistencia del suelo al paso de tanquetas y **abertura o escotilla en fachada/cubierta** para introducir el imán con grúa.
   2. **Acometida Eléctrica y Calidad de Red:** Potencia aparente de pico ($\text{kVA}$, ej. $100\text{–}150\text{ kVA}$ en TC/Angiógrafo), **impedancia máxima de línea ($Z_{\text{red}}$ en $\text{m}\Omega$)** para evitar caídas de tensión durante el disparo de rayos X, protección diferencial superinmunizada Tipo B, transformador de aislamiento (`ITC-BT-38`) y SAI.
   3. **Climatización y Refrigeración por Agua Helada (*Chiller*):** Disipación térmica en sala técnica y sala de exploración ($\text{kW}$ térmicos) + circuito primario/secundario de **agua enfriada (*chiller* redundante)** para enfriar el compresor de helio de la RM, el intercambiador del tubo de TC o el klystron del acelerador lineal.
   4. **Blindajes Especiales:** Plomo o sulfato de bario en muros/puertas/visores para salas de RX y TC (`RD 1085/2009`); hormigón baritado y puerta con polietileno borado en búnker de acelerador; **Jaula de Faraday (RF) + Blindaje Magnético (acero al silicio) + Tubo de evacuación de Quench al exterior** en Resonancia Magnética.
   5. **Gases Medicinales y Vacío (`ISO 7396-1`):** Tomas de $\text{O}_2$, Aire medicinal, $\text{N}_2\text{O}$, Vacío, Aire motor y AGSS (en RM las cajas de tomas dentro de Zona IV deben ser **100% no ferromagnéticas**).
   6. **Fontanería, Agua Tratada y Desagües Termorresistentes:** Acometida de agua osmotizada y desagües resistentes a altas temperaturas ($> 90\text{ }^\circ\text{C}$ con enfriador de efluentes) en autoclaves y lavadoras de esterilización, o anillo de agua ultrapura en hemodiálisis.
   7. **Comunicaciones y Red de Datos:** Tomas de red Ethernet Gigabit/10GbE redundantes en VLAN médica segmentada, direccionamiento IP fijo y configuración de nodos `DICOM` (`AE Title`, puerto, `MWL`, `PACS`) y `HL7`.

---

## 4. Tema 59, Tema 64, Tema 45 y Tema 69: Calidad por Procesos, Estrategia SERGAS, Sistemas CAD y Economía Circular

### 4.1. Tema 59: Calidad Asistencial y Gestión por Procesos (*Coincidencia 100% literal con Tema 59 de Ing. Técnico*)
1. **Trilogía de Avedis Donabedian para evaluar la Calidad Asistencial (¡Pregunta fija de test!):**
   - **1) Indicadores de ESTRUCTURA:** Evalúan los recursos humanos, materiales, instalaciones, dotación tecnológica y organización con los que cuenta el centro (ej. número de respiradores por cama de UCI, antigüedad del parque de TC, acreditación de las salas).
   - **2) Indicadores de PROCESO:** Evalúan **qué se hace y cómo se hace** la actividad asistencial o técnica siguiendo la evidencia y protocolos (ej. porcentaje de cirugías con *checklist* quirúrgico de la OMS completado, porcentaje de equipos críticos con mantenimiento preventivo realizado en plazo, tiempo puerta-aguja en el código ictus).
   - **3) Indicadores de RESULTADO (*Outcomes*):** Evalúan el cambio logrado en el estado de salud del paciente y su satisfacción (ej. mortalidad intrahospitalaria, tasa de infección nosocomial del sitio quirúrgico, tasa de reingresos a 30 días, disponibilidad operativa del parque biomédico $> 98\%$).
2. **Dimensiones de la Calidad Asistencial (OMS / Instituto de Medicina IOM):** **Seguridad del paciente**, **Efectividad** (basada en evidencia científica), **Eficiencia** (óptimo uso de recursos), **Accesibilidad / Oportunidad** (tiempos de espera), **Equidad** y **Atención centrada en el paciente (Satisfacción/Humanización)**.
3. **Gestión por Procesos y Mapa de Procesos en una Organización Sanitaria (`ISO 9001` / Modelo `EFQM`):**
   - Un **Proceso** es una secuencia ordenada de actividades interrelacionadas que transforma **Entradas (*Inputs*)** en **Salidas (*Outputs*)** aportando **valor añadido** para un cliente/paciente interno o externo, bajo la responsabilidad de un **Propietario del Proceso**.
   - **Los 3 Tipos de Procesos en el Mapa de Procesos de un Hospital:**
     1. **Procesos ESTRATÉGICOS (Gobernanza y Dirección):** Planificación estratégica, acuerdos de gestión, calidad y seguridad del paciente, docencia e I+D+i, comunicación.
     2. **Procesos CLAVE u OPERATIVOS (Misionales / Asistenciales):** Son la razón de ser del hospital y contactan directamente con el paciente: Proceso de Urgencias, Consultas Externas, Hospitalización, Proceso Quirúrgico, Procesos Asistenciales Integrados (PAI de cáncer, ictus, cardiopatía isquémica).
     3. **Procesos de SOPORTE (Apoyo):** Proveen los recursos necesarios para que funcionen los procesos clave: **Ingeniería Biomédica / Electromedicina y Mantenimiento**, Diagnóstico por Imagen, Laboratorio, Farmacia, Esterilización, TIC, Suministros/Logística (`LOGAS`) y Recursos Humanos.
   - **Herramientas de Implantación, Control y Mejora Continua:**
     - **Ciclo PDCA de Deming / Shewhart:** **P**lan (Planificar) $\rightarrow$ **D**o (Hacer) $\rightarrow$ **C**heck (Verificar con indicadores) $\rightarrow$ **A**ct (Actuar/Estandarizar).
     - **Diagrama de Flujo (Flujograma)** con carriles de responsabilidad (*swimlanes*), **Ficha de Proceso** (misión, límites, propietario, indicadores), **Diagrama Causa-Efecto de Ishikawa (Espina de Pescado)**, **Diagrama de Pareto (80/20)** y **Análisis Modal de Fallos y Efectos (AMFE)** proactivo.

### 4.2. Tema 64: Documentos Estratégicos y de Planificación del SERGAS y de la Consellería de Sanidade
1. **Estrategia SERGAS (Horizonte 2020 / 2025 / 2030) y Plan de Salud de Galicia:**
   - **Líneas estratégicas nucleares:** Atención integral a la cronicidad y envejecimiento activo (estratificación por `GMA` y telemonitorización `TELEA`), transformación digital e inteligencia artificial, renovación de alta tecnología e infraestructuras (Planes Directores de las 7 Áreas Sanitarias y **Centro de Protonterapia de Galicia**), medicina genómica y personalizada (Fundación Pública Galega de Medicina Xenómica), compra pública innovadora y sostenibilidad ambiental.
2. **Estrategia de Seguridad del Paciente del SERGAS (`SINASP` — Sistema de Notificación y Aprendizaje para la Seguridad del Paciente)**, **Estrategia de Humanización de la Asistencia Sanitaria** y **Acuerdos de Gestión Anuales** firmados con las 7 Áreas Sanitarias.
3. **Agencia Gallega de Conocimiento en Salud (`ACIS` — *Axencia Galega para a Xestión do Coñecemento en Saúde*) y `Avalia-t`:**
   - **`ACIS`** gestiona la formación continuada, la investigación e innovación sanitaria y la **Unidad de Asesoramiento Científico-Técnico (`Avalia-t`)**, que forma parte de la **Red Española de Agencias de Evaluación de Tecnologías Sanitarias y Prestaciones del SNS (`RedETS`)**, encargada de evaluar la eficacia, seguridad y coste-efectividad antes de incorporar nuevas tecnologías biomédicas a la cartera de servicios.

### 4.3. Tema 45: Sistemas CAD (Diseño Asistido por Ordenador) y BIM en Ingeniería Hospitalaria y Biomédica
1. **CAD 2D (Planos de Planta e Instalaciones) vs. CAD 3D Paramétrico vs. BIM:**
   - **CAD 2D/3D (ej. *AutoCAD*):** Basado en entidades geométricas vectoriales (líneas, arcos, polilíneas, bloques con atributos) organizadas en **Capas (*Layers*)** independientes por instalación (arquitectura, estructura, electricidad, gases medicinales, climatización, blindajes y equipamiento biomédico), con **Espacio Modelo** (dibujo a escala real $1:1$) y **Espacio Papel / Presentación (*Layouts*)** con ventanas gráficas (*viewports*) para impresión a escala normalizada (`ISO 5457`: A0, A1, A2, A3, A4).
   - **CAD 3D Paramétrico y CAE (*SolidWorks*, *Inventor*, *Fusion 360*):** Modelado sólido paramétrico basado en operaciones (*features*) y restricciones para el **diseño de dispositivos biomédicos, prótesis e implantes a medida (Tema 33 y 34)** acoplado a simulación por **Elementos Finitos (FEA / MEF)** de tensiones mecánicas (Von Mises) y dinámica de fluidos computacional (**CFD**).
   - **Metodología `BIM` (*Building Information Modeling* — Norma `UNE-EN ISO 19650`):** Modela digitalmente el hospital en 3D con una **base de datos paramétrica asociada a cada objeto** (un equipo de TC o una columna quirúrgica en el modelo BIM contiene su peso, potencia eléctrica, caudal de climatización, coste y datos de mantenimiento), permitiendo la **detección automática de colisiones (*Clash Detection*)** entre conductos de climatización, estructura y soportes de techo de equipos biomédicos antes de construir, y alimentando en la dimensión **BIM 7D** al sistema **`XMAO`** de mantenimiento.
   - **Formatos de intercambio estándar:** `.DWG` (nativo), `.DXF` (intercambio CAD), **`.IFC` (*Industry Foundation Classes* — estándar abierto `ISO 16739` para interoperabilidad BIM)** y `.STL` / `.STEP` / `.IGES` (para fabricación aditiva 3D y mecanizado CNC).

### 4.4. Tema 69: Economía Circular, Sostenibilidad, Resiliencia y Gestión de Residuos Sanitarios en Galicia
1. **Estrategia de Economía Circular en el SERGAS y Ciclo de Vida de Equipos (`RAEE` — `RD 110/2015`):**
   - Paso del modelo lineal (*comprar-usar-tirar*) al modelo circular (**ecodiseño, compra pública verde, mantenimiento preventivo que alarga la vida útil, actualización tecnológica [*upgrades*] de equipos de imagen como RM *Fit/Evolution* reaprovechando el imán superconductor, reacondicionamiento certificado conforme a la norma `IEC 63077` [*Good Refurbishment Practice* de equipamiento médico] y gestión de Residuos de Aparatos Eléctricos y Electrónicos — `RAEE`** al dar de baja un equipo biomédico).
2. **Clasificación de Residuos Sanitarios en Galicia (`Decreto 38/2015, de 26 de febrero`, de residuos sanitarios de Galicia — ¡Pregunta fija de examen!):**
   - **Clase I — Residuos domésticos (Sin riesgo):** Papel, cartón, envases, restos de comida de oficinas/cafetería.
   - **Clase II — Residuos sanitarios asimilables a domésticos (No específicos):** Gasas, vendajes, guantes, yesos o sondas de pacientes no infecciosos (bolsa negra/gris).
   - **Clase III — Residuos sanitarios especiales o de biorriesgo (Peligrosos):**
     - **IIIa (Biológicos/Infecciosos y Punzantes/Cortantes):** Agujas, hojas de bisturí, cultivos microbiológicos, sangre y hemoderivados líquidos ($> 100\text{ ml}$) $\rightarrow$ **envases rígidos amarillos impermeables e imperforables** con pictograma de **biorriesgo** (tratamiento por esterilización en autoclave de residuos + trituración o incineración).
     - **IIIb (Residuos Químicos y Citotóxicos / Citostáticos):** Restos de medicamentos antineoplásicos, carcinógenos, mutágenos y todo el material en contacto con su preparación/administración $\rightarrow$ **contenedores rígidos AZULES (o rojos según centro)** con pictograma de **Citotóxico** (tratamiento obligatorio por **incineración exclusiva a alta temperatura**).
   - **Clase IV — Residuos tipificados en normativas singulares:**
     - **Residuos Radiactivos** (Medicina Nuclear, Braquiterapia, RIA): Sujetos a la competencia exclusiva de **ENRESA (*Empresa Nacional de Residuos Radiactivos*)** y normativa del **CSN** (en Medicina Nuclear con radionucleidos de vida muy corta como $^{99\text{m}}\text{Tc}$ o $^{18}\text{F}$, se almacenan en el almacén de decaimiento del hospital durante $\ge 10\text{ semividas}$ hasta que su actividad cae por debajo del **nivel de desclasificación/exención** y pueden evacuarse como residuo convencional tras retirar las etiquetas radiactivas).
     - Cadáveres y restos humanos de entidad suficiente, y medicamentos caducados.
