# Esp. Tema 41 — Información sanitaria nacional para análisis y planificación: SIAP, BDCAP y CMBD/RAE-CMBD (contenidos, definiciones, periodicidad y comparabilidad). Estratificación poblacional tipo GMA: conceptos básicos y aplicaciones.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 2: Subir Nota (Relación 1:1) (Complementario)  
> **Bloque de Estudio Completo:** [`Bloque_07_Salud_Digital_HIS_RIS_PACS_Interoperabilidad_HCE_CMBD_BI_IoMT.md`](../02_apuntes_nucleo_diamante/Bloque_07_Salud_Digital_HIS_RIS_PACS_Interoperabilidad_HCE_CMBD_BI_IoMT.md)

## 🎯 Cruce con Otras Oposiciones del SERGAS

- **Categorías con solapamiento:** **Grupo Técnico / Gestión TIC**
- **Grado de solapamiento:** **Alto (75%)**: Cubre sistemas de información para la salud pública, sistemas de información y gestión de pacientes en atención primaria y hospitales, y sistema poblacional.
- **Epígrafes equivalentes:**
  • Superior (A1): Tema 23. Sistemas de información para la salud pública. Sistemas de Información y sistemas de gestión de pacientes en atención primaria y hospitales. Sistema poblacional y tarjeta sanitaria. Sistemas de gestión de recursos humanos. Sistemas de gestión económica y suministros.
  • Gestión (A2): Tema 15. Sistemas de información para la salud pública. Sistemas de información y sistemas de gestión de pacientes en atención primaria y hospitales. Sistema poblacional y tarjeta sanitaria. Sistemas de gestión de recursos humanos. Sistemas de gestión económica y suministros.
  • Especialista (C1): Tema 10. Sistemas de información para la salud pública. Sistemas de información y sistemas de gestión de pacientes en atención primaria y hospitales. Sistema poblacional y tarjeta sanitaria. Sistemas de gestión de recursos humanos. Sistema de gestión económica y suministros.

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

### 5. Tema 41: Sistemas de Información Sanitaria Nacional (`SIAP`, `BDCAP`, `CMBD / RAE-CMBD`) y Estratificación Poblacional (`GMA`)

| Sistema Nacional (Ministerio de Sanidad) | Qué mide y en qué nivel asistencial | Contenido, Periodicidad y Norma Reguladora |
| :--- | :--- | :--- |
| **`SIAP`** (*Sistema de Información de Atención Primaria*) | **Recursos, población asignada y actividad agregada de Atención Primaria** en el SNS. | • **Periodicidad:** **ANUAL**.<br>• Recoge centros de salud y consultorios locales, plantilla de profesionales (médicos de familia, pediatras, enfermería), población con tarjeta sanitaria (TSI) asignada, frecuentación y número total de consultas médicas/enfermería/domiciliarias y urgencias extrahospitalarias (PAC). |
| **`BDCAP`** (*Base de Datos Clínicos de Atención Primaria*) | **Morbilidad atendida, problemas de salud, prescripción farmacéutica, derivaciones y pruebas a nivel individual anonimizado en Atención Primaria**. | • **Periodicidad:** **ANUAL** (muestra representativa del $\approx 10\%$ de la población con TSI de todas las CCAA, $> 4,7\text{ millones}$ de personas).<br>• Codifica los problemas de salud activos en **`CIAP-2`** (y mapeo a `CIE-10` / `SNOMED`), fármacos en **`ATC`** y nivel socioeconómico/aportación farmacéutica. |
| **`RAE-CMBD`** (*Registro de Actividad de Atención Sanitaria Especializada*, que evolucionó el antiguo **`CMBD`**) | **Toda la actividad asistencial de Atención Especializada / Hospitalaria** (pública y privada) en España. | • **Regulado por el `Real Decreto 69/2015, de 6 de febrero`** (en vigor desde el 1 de enero de 2016).<br>• **Ámbito ampliado respecto al antiguo CMBD:** Incluye no solo la **Hospitalización convencional**, sino también la **Cirugía Mayor Ambulatoria (CMA)**, el **Hospital de Día médico y oncológico**, las **Urgencias hospitalarias**, los **procedimientos invasivos en gabinete/intervencionismo** y la hospitalización a domicilio.<br>• **Periodicidad:** Envío oficial **ANUAL** al Ministerio (con cierres mensuales/trimestrales autonómicos).<br>• **Variables clave (31 variables):** Datos del paciente, centro, fechas de ingreso/alta, **circunstancia de contacto y tipo de alta (destino al alta)**, **1 Diagnóstico Principal (DP)** (*la afección que tras el estudio se establece como **causa principal que motivó el ingreso***) + hasta 19 **Diagnósticos Secundarios (comorbilidades y complicaciones)** codificados en **`CIE-10-ES Diagnósticos`** + indicador **POA (*Present On Admission* — Presente al Ingreso: `S` Sí, `N` No, `D` Desconocido, `E` Exento, clave para distinguir comorbilidades previas de complicaciones nosocomiales)** + **Procedimientos diagnósticos y terapéuticos** codificados en **`CIE-10-ES Procedimientos`**. |

### Sistemas de Agrupación de Pacientes (*Case-Mix*): `GRD` (Hospitales) vs. `GMA` (Estratificación Poblacional)
1. **En Hospitalización (`RAE-CMBD`) $\longrightarrow$ `GRD` (*Grupos Relacionados por el Diagnóstico*, actualmente `APR-GRD`):**
   - Clasifica cada episodio de alta hospitalaria en un único grupo **isoconsumo de recursos** según su diagnóstico principal, procedimientos quirúrgicos, edad y comorbilidades, asignando un **nivel de Gravedad (1 a 4)**, un **nivel de Riesgo de Mortalidad (1 a 4)** y un **Peso Relativo (coste relativo)** para calcular la **Estancia Media Ajustada por Casuística (EMAC)** y el **Índice Casuístico (Case-Mix Index)**.
2. **En Población Crónica Completa (Primaria + Hospitales) $\longrightarrow$ `GMA` (*Grupos de Morbilidad Ajustados* — Tema 41 — ¡Pregunta fija de examen!):**
   - **¿Qué son los `GMA`?** Es el agrupador de **estratificación de riesgo y morbilidad poblacional de desarrollo público español** implantado en el **Sistema Nacional de Salud y en el SERGAS** (sustituyendo a herramientas comerciales extranjeras como *ACG* o *CRG*).
   - **¿Cómo funciona un `GMA`?** Toma todos los diagnósticos de una persona durante el último año (tanto de Primaria como de Hospitales y prescripción) y la clasifica en una matriz bidimensional:
     1. **Categoría de Morbilidad (Tipo de patología):** Sano, Embarazo/Parto, Patología Aguda, **Enfermedad Crónica en 1 sistema**, **Multimorbilidad Crónica en 2 o 3 sistemas**, **Multimorbilidad Crónica en $\ge 4$ sistemas**, o **Neoplasia activa**.
     2. **Nivel de Complejidad / Gravedad Individual ($1\text{ a }5$) y Peso de Complejidad numérico continuo**.
   - **La Pirámide de Kaiser Permanente con `GMA` (Aplicación en el SERGAS):** Permite estratificar a los $2,7\text{ millones}$ de ciudadanos gallegos en la pirámide de riesgo:
     - **Base ($70\text{–}80\%$):** Población sana o con patología leve $\rightarrow$ promoción y prevención.
     - **Nivel 1 ($15\text{–}20\%$):** Enfermos crónicos de riesgo bajo/medio $\rightarrow$ **gestión de la enfermedad y autogestión**.
     - **Nivel 2 ($3\text{–}5\%$):** Pacientes crónicos de alto riesgo.
     - **Vértice / Nivel 3 ($1\text{–}2\%$ superior de peso `GMA`):** **Pacientes Crónicos Complejos / Pluripatológicos** $\rightarrow$ **Gestión de Casos individualizada y telemonitorización intensiva en `TELEA`**.

---
