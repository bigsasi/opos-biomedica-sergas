# Esp. Tema 62 — Áreas de ambiente controlado. Bloque quirúrgico. Unidades de críticos. Unidades de aislamiento. Flujo de trabajo y circulaciones.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 1: Núcleo Diamante (💎 Núcleo Diamante)  
> **Bloque de Estudio Completo:** [`Bloque_08_Ingenieria_Hospitalaria_REBT_ITC38_Ambiente_Controlado_Planes_Directores_Calidad.md`](../02_apuntes_nucleo_diamante/Bloque_08_Ingenieria_Hospitalaria_REBT_ITC38_Ambiente_Controlado_Planes_Directores_Calidad.md)

## 🎯 Cruce con Otras Oposiciones del SERGAS

- **Categorías con solapamiento:** **Ingeniero/a Técnico/a**
- **Grado de solapamiento:** **Total (95%)**: Coincidencia directa con el diseño de quirófanos, unidades críticas, habitaciones de aislados (inmunodeprimidos/infecciosos), normas de ambiente controlado (UNE 100713, 171340) y circuitos del bloque quirúrgico.
- **Epígrafes equivalentes:**
  • Tema 25. Estándares para el diseño de instalaciones de climatización y ventilación en quirófanos, unidades críticas, habitaciones de hospitalización de pacientes inmunodeprimidos, pacientes infecciosos y habitaciones de hospitalización convencionales.
  • Tema 26. Normas UNE: 100012, 100713, 171330, 171340.
  • Tema 46. El bloque quirúrgico: instalaciones y equipos. Circuitos. UCIs y unidades de reanimación post-anestésica: instalaciones y equipos. Inspección y mantenimiento.

---

## 📖 Desarrollo Técnico y Normativo del Tema

### 2. Tema 62: Áreas de Ambiente Controlado: Bloque Quirúrgico, Críticos y Unidades de Aislamiento (`UNE 100713`, `UNE 171340` e `ISO 14644-1`)

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
