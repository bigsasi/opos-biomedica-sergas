# Esp. Tema 40 — Historia clínica electrónica. Concepto y objetivos en atención primaria y hospitalaria.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 1: Núcleo Diamante (💎 Núcleo Diamante)  
> **Bloque de Estudio Completo:** [`Bloque_07_Salud_Digital_HIS_RIS_PACS_Interoperabilidad_HCE_CMBD_BI_IoMT.md`](../02_apuntes_nucleo_diamante/Bloque_07_Salud_Digital_HIS_RIS_PACS_Interoperabilidad_HCE_CMBD_BI_IoMT.md)

## 🎯 Cruce con Otras Oposiciones del SERGAS

- **Categorías con solapamiento:** **Grupo Técnico / Gestión TIC**
- **Grado de solapamiento:** **Total (95%)**: Cubre historia clínica electrónica en atención primaria y hospitalaria, sistema del SNS y normativa reguladora en Galicia.
- **Epígrafes equivalentes:**
  • Superior (A1): Tema 13. Decreto por el que se regula el uso y acceso a la historia clínica electrónica. Decreto de receta electrónica. Decreto por el que se regula el uso de la tarjeta sanitaria para la identificación de pacientes y profesionales en Galicia. y Tema 24. Sistemas de información clínica: telemedicina. Telemonitorización. Historia clínica y receta electrónica. Imagen digital y PAC. Sistema de historia clínica del Sistema nacional de salud. Proyectos de intercambio de información clínica en el ámbito europeo.
  • Gestión (A2): Tema 6. Decreto por el que se regula el uso y el acceso a la historia clínica electrónica. Decreto de receta electrónica. Decreto por el que se regula el uso de la tarjeta sanitaria para la identificación de pacientes y profesionales en Galicia. y Tema 16. Sistemas de información clínica: telemedicina. Telemonitorización. Historia clínica y receta electrónica. Imagen digital y PAC. Sistema de historia clínica del Sistema nacional de salud. Proyectos europeos de intercambio de información clínica.
  • Especialista (C1): Tema 3. Decreto por el que se regula el uso y acceso a la historia clínica electrónica. Decreto de receta electrónica. Decreto por el que se regula el uso de la tarjeta sanitaria para la identificación de pacientes y profesionales en Galicia. y Tema 11. Sistemas de información clínica: telemedicina. Telemonitorización. Historia clínica y receta electrónica. Imagen digital y PAC. Sistema de historia clínica del Sistema nacional de salud. Proyectos de intercambio de información clínica.

---

## 📖 Desarrollo Técnico y Normativo del Tema

### 1. Mapa de Sistemas de Información Corporativos del SERGAS (¡Imprescindible para el Examen!)

En los exámenes del SERGAS (tanto teóricos como supuestos prácticos), preguntan constantemente los **nombres propios de los sistemas corporativos gallegos** y cómo se integran con el equipamiento biomédico:

| Acrónimo SERGAS | Nombre / Función en el Servicio Gallego de Salud | Temas donde entra |
| :--- | :--- | :--- |
| **`IANUS` / `IANUS 5`** | **Historia Clínica Electrónica única** del SERGAS (integra Atención Primaria + Atención Hospitalaria + Sociosanitaria; regulada por el **Decreto 29/2009, de 5 de febrero**). | Temas 38, 40, 67 + Común T7 |
| **`É-Saúde`** | Plataforma digital de salud para la ciudadanía/pacientes (acceso a historia clínica, informes, citas, carpeta personal). | Temas 40, 47, 67 |
| **`TELEA`** | **Plataforma de Teleasistencia y Telemonitorización Domiciliaria (IoMT)** del SERGAS integrada en `IANUS` para pacientes crónicos (insuficiencia cardíaca, EPOC, diabetes, HTA, post-infarto). | **Tema 47** |
| **`PACS Corporativo` / `Anello Radiolóxico Galego`** | Sistema centralizado de archivo y comunicación de imagen médica digital del SERGAS (integra imagen DICOM y objetos no-DICOM mediante **VNA — *Vendor Neutral Archive***). | **Tema 38 y 39** |
| **`SILICON`** | Sistema de información corporativo de **Farmacia Hospitalaria** (prescripción electrónica hospitalaria, validación farmacéutica y conexión con carruseles y armarios `Pyxis`). | **Tema 57** |
| **`SIHGA` / `XIDE`** | Sistemas de gestión de pacientes (**HIS**: admisión, urgencias, hospitalización, bloque quirúrgico, citación de consultas externas) y **`XIDE`** (*Xestión Integrada da Demanda en Equipo* en Atención Primaria). | **Temas 38 y 67** |
| **`LOGAS`** | Sistema corporativo de **Gestión Logística, Compras, Almacenes y Cadena de Suministros** del SERGAS (basado en plataforma ERP, plataformas logísticas como la de Negreira y carruseles/kanban con RFID en planta). | **Tema 70** |
| **`HEXE`** | Herramienta corporativa de **Explotación de Información y Cuadros de Mando (Business Intelligence)** del SERGAS. | **Temas 43 y 44** |
| **`XMAO` (GMAO Corporativo)** | Sistema corporativo de **Gestión de Mantenimiento Asistido por Ordenador** (inventario de base instalada biomédica e industrial, órdenes de trabajo preventivas/correctivas). | **Temas 71, 72 y 73** |

---

---

### 4. Tema 40: Historia Clínica Electrónica (HCE) en Atención Primaria y Hospitalaria

### Marco Legal e Institucional de la HCE (`Ley 41/2002`, `Ley Gallega 3/2001` y `Decreto 29/2009`)
1. **Normativa Básica:**
   - **Estatal:** **Ley 41/2002, de 14 de noviembre**, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica + **RD 1093/2010** (conjunto mínimo de datos de los informes clínicos en el SNS, base de la **Historia Clínica Digital del Sistema Nacional de Salud — HCDSNS** y del nodo europeo *MyHealth@EU*).
   - **Autonómica en Galicia (¡Preguntas fijas de Parte Común T7 y Específico T40!):**
     - **Ley 3/2001, de 28 de mayo**, reguladora del consentimiento informado y de la historia clínica de los pacientes (modificada por la Ley 3/2005 y la Ley 12/2013).
     - **Decreto 29/2009, de 5 de febrero**, por el que se regula el uso y acceso a la **historia clínica electrónica (`IANUS`)** en el Sistema Público de Salud de Galicia.
2. **Principios y Objetivos Clave de `IANUS` en el SERGAS:**
   - **Historia Clínica Única por Paciente en toda Galicia:** Integra en un repositorio único transversal toda la información generada en **Atención Primaria, Atención Hospitalaria (consultas, hospitalización, urgencias, bloque quirúrgico), e-Interconsulta, Receta Electrónica, Laboratorio e Imagen Médica (`PACS`)**.
   - **Finalidad fundamental de la Historia Clínica (Art. 13 Ley 3/2001):** Facilitar la **asistencia sanitaria** al paciente, dejando constancia de todos aquellos datos que, bajo criterio médico, permitan el conocimiento veraz y actualizado de su estado de salud.
   - **Régimen de Acceso y Trazabilidad de Accesos (Decreto 29/2009):**
     - El acceso de los profesionales asistenciales está limitado a aquellos pacientes con los que mantienen un **vínculo asistencial activo** y con **perfiles diferenciados por categoría profesional** (médico, enfermería, personal técnico/administrativo solo a datos identificativos/citación).
     - **Registro de Auditoría (*Log* de accesos):** Todo acceso a `IANUS` queda registrado de forma indeleble (identificación del profesional, fecha, hora, centro, paciente y tipo de información consultada), conservándose el registro de accesos y realizándose auditorías periódicas.
   - **Plazos de Conservación de la Historia Clínica en Galicia (Art. 20 Ley 3/2001 — ¡Pregunta clásica de test!):**
     - Se conservarán de forma **INDEFINIDA** (junto con los datos de identificación): **los informes de alta, las hojas de consentimiento informado, las hojas quirúrgicas, los informes de anestesia, los informes de exploraciones complementarias, las hojas de evolución, los informes de necropsia y los informes clínicos de urgencias**.
     - El resto de la documentación podrá destruirse una vez hayan transcurrido **5 años desde el fallecimiento del paciente** o, en todo caso, cuando hayan transcurrido **5 años desde la última asistencia** prestada al paciente en la institución.

---
