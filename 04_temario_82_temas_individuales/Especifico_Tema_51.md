# Esp. Tema 51 — Real decreto 601/2019, de 18 de octubre, sobre justificación y optimización del uso de las radiaciones ionizantes para la protección radiológica de las personas con ocasión de exposiciones médicas.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 1: Núcleo Diamante (💎 Núcleo Diamante)  
> **Bloque de Estudio Completo:** [`Bloque_04_Proteccion_Radiologica_CSN_RD601_RD1085_EURATOM.md`](../02_apuntes_nucleo_diamante/Bloque_04_Proteccion_Radiologica_CSN_RD601_RD1085_EURATOM.md)

## 🎯 Cruce con Otras Oposiciones del SERGAS

- **Categorías con solapamiento:** **Radiofísica Hospitalaria**
- **Grado de solapamiento:** **Alto (85%)**: Cubre justificación y optimización de exposiciones médicas y legislación nacional de protección radiológica (actualizada al RD 601/2019 por cláusula de vigencia legal).
- **Epígrafes equivalentes:**
  • Tema 8. Bases científicas de la protección radiológica. magnitudes y unidades en protección radiológica. Detección de la radiación en protección radiológica. Justificación y optimización: principio ALARA (As Low As Reasonably Available). Principios básicos de la limitación de dosis.
  • Tema 10. Regulaciones, recomendaciones y normas. Administración y organización de la protección radiológica. Organizaciones y normas nacionales e internacionales. Legislación nacional e internacional. Diseño de instalaciones. Cálculo de blindajes. Gestión de la seguridad radiológica.

---

## 📖 Desarrollo Técnico y Normativo del Tema

### 1. Los 3 Principios del Sistema de Protección Radiológica (ICRP 103 y Directiva 2013/59/EURATOM)

1. **Justificación:** Toda práctica o exposición debe producir un beneficio neto suficiente que compense el detrimento individual o social que pueda causar.
2. **Optimización (Principio ALARA — *As Low As Reasonably Achievable*):** La probabilidad de exposición, el número de personas expuestas y la magnitud de las dosis individuales deben mantenerse **tan bajos como sea razonablemente posible**, teniendo en cuenta factores económicos y sociales.
3. **Limitación de Dosis:** La dosis total recibida por cualquier individuo no debe superar los límites legales establecidos para **trabajadores expuestos y miembros del público**.
   - **¡PREGUNTA CLÁSICA DE EXAMEN (Trampa habitual)!**
     > En las **EXPOSICIONES MÉDicas de pacientes** (diagnóstico y tratamiento), se aplican los principios de **Justificación** y **Optimización**, pero **NO SE APLICAN LÍMITES DE DOSIS** (ya que limitar la dosis podría impedir un diagnóstico vital o el control de un tumor). En su lugar, en radiodiagnóstico y medicina nuclear se utilizan **Niveles de Referencia para Diagnóstico (NRD / DRL)**.

---

---

### 3. Tema 51: Real Decreto 601/2019 (Justificación y Optimización de Exposiciones Médicas)

El **Real Decreto 601/2019, de 18 de octubre**, transpone la parte de **exposiciones médicas** de la Directiva 2013/59/EURATOM y **deroga el antiguo RD 815/2001**.

### Puntos Clave del RD 601/2019 para Examen Tipo Test
1. **Justificación en 3 niveles (Arts. 3 a 5):**
   - Están **prohibidas las exposiciones médicas que no puedan justificarse**.
   - En la justificación individual participan tanto el **médico prescriptor** como el **médico especialista responsable de la exposición** (radiólogo, médico nuclear o radiooncólogo), teniendo en cuenta la eficacia, beneficios y riesgos de **técnicas alternativas que tengan el mismo objetivo pero no utilicen radiaciones ionizantes o impliquen menor dosis (ej. Ecografía o Resonancia Magnética, especialmente en pediatría)**.
2. **Optimización y Niveles de Referencia para Diagnóstico — NRD (Art. 6):**
   - Las unidades asistenciales de radiodiagnóstico, radiología intervencionista y medicina nuclear deben comparar periódicamente sus dosis medias por procedimiento con los **Niveles de Referencia para Diagnóstico (NRD)**. Si se superan de forma constante e injustificada los NRD, debe realizarse una revisión local y aplicar medidas correctoras.
3. **Figura del Especialista en Radiofísica Hospitalaria (Art. 9):**
   - Participación **obligatoria en todas las exposiciones de radioterapia** (planificación y dosimetría física), en medicina nuclear terapéutica y diagnóstica, y en la optimización, dosimetría de pacientes, control de calidad y **especificaciones técnicas de compra e instalación de equipos de radiodiagnóstico e intervencionismo**.
4. **Requisitos Técnicos Obligatorios del Equipamiento Nuevo (Art. 14 — ¡Pregunta estrella para Ingenieros Biomédicos!):**
   - **Prohibición expresa de la fluoroscopia sin intensificación de imagen** (o sin detector digital equivalente) y obligación de **Control Automático de Intensidad/Tasa de Dosis**.
   - **Equipos de TC y de Radiología Intervencionista:** Todo equipo instalado tras la entrada en vigor debe disponer de un dispositivo que informe al médico especialista de los parámetros dosimétricos al finalizar el procedimiento (**$\text{CTDI}_{\text{vol}}$ y $\text{DLP}$ en TC**; **$K_{a,r}$ y $\text{PKA}$ en intervencionismo**) y **debe tener capacidad de transferir electrónicamente esta información dosimétrica al registro de la exploración / informe radiológico (mediante `DICOM Radiation Dose Structured Report — RDSR`)**.
   - **Informe Dosimétrico en la Historia Clínica:** El informe clínico del procedimiento radiológico debe incluir la información relativa a la **dosis recibida por el paciente**.
5. **Protección en Embarazo y Lactancia (Art. 12) y Exposición Accidental/No Intencionada (Art. 15):**
   - Obligación de preguntar a toda mujer en edad fértil si está embarazada o en período de lactancia (en medicina nuclear) y colocar carteles informativos en las salas de espera.
   - Obligación de contar con un sistema de **registro y análisis de sucesos que impliquen o puedan implicar exposiciones accidentales o no intencionadas** clínicamente significativas y notificarlos a la autoridad sanitaria y al **CSN**.

---
