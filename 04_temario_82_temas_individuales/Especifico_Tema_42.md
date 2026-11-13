# Esp. Tema 42 — Codificación sanitaria e interoperabilidad. Estándares y clasificaciones (CIAP2, CIE-10, SNOMED CT) para el uso clínico.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 1: Núcleo Diamante (💎 Núcleo Diamante)  
> **Bloque de Estudio Completo:** [`Bloque_07_Salud_Digital_HIS_RIS_PACS_Interoperabilidad_HCE_CMBD_BI_IoMT.md`](../02_apuntes_nucleo_diamante/Bloque_07_Salud_Digital_HIS_RIS_PACS_Interoperabilidad_HCE_CMBD_BI_IoMT.md)

## 🎯 Cruce con Otras Oposiciones del SERGAS

- **Categorías con solapamiento:** **Grupo Técnico / Gestión TIC**
- **Grado de solapamiento:** **Alto (80%)**: Cubre interoperabilidad en el entorno sanitario y estándares/clasificaciones clínicas (CEN TC/251, AEN/CTN 139, HL7, CDA, IHE).
- **Epígrafes equivalentes:**
  • Superior (A1): Tema 25. Interoperabilidad en el entorno sanitario. Estándares tecnológicos en el ámbito sanitario: DICOM, HL7, CDA, IHE, CIEN TC/251, AEN/CTN 139, IEEE Continua alliance. Implementación de mensajería HL7 sobre buses de integración.
  • Gestión (A2): Tema 17. Interoperabilidad en el entorno sanitario. Estándares tecnológicos en el ámbito sanitario: DICOM, HL7, CDA, IHE, CIEN, TC/251, AEN/CTN 139, IEEE Continua alliance. Implementación de mensajería HL7 sobre buses de integración.
  • Especialista (C1): Tema 12. Interoperabilidad en el entorno sanitario. Estándares tecnológicos en el ámbito sanitario: DICOM, HL7, CDA, IHE, CIEN TC/251, AEN/CTN 139, IEEE Continua alliance. Implementación de mensajería HL7 sobre buses de integración.

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

### 3. Tema 42: Codificación Sanitaria, Estándares y Clasificaciones Clínicas (`CIAP-2`, `CIE-10-ES`, `SNOMED CT`, `LOINC`, `ATC`)

> **Diferencia conceptual clave de examen:**
> - **Interoperabilidad Técnica:** Capacidad de dos sistemas para intercambiar bytes/mensajes por la red (protocolos TCP/IP, REST, MLLP).
> - **Interoperabilidad Sintáctica:** Estructura y formato común del mensaje (`HL7 v2`, `XML`, `JSON`, `FHIR`, `DICOM`).
> - **Interoperabilidad Semántica:** Garantiza que el significado clínico exacto de la información intercambiada sea **comprendido sin ambigüedad por cualquier sistema receptor**, gracias al uso de **terminologías y clasificaciones clínicas estandarizadas**.

| Sistema de Codificación | Ámbito de uso obligatorio en España / SERGAS | Estructura y Características de Examen |
| :--- | :--- | :--- |
| **`CIAP-2`** (*Clasificación Internacional de la Atención Primaria*, de la **WONCA**) | **Atención Primaria** (consultas de medicina de familia y pediatría en centros de salud del SERGAS / `IANUS` AP y `BDCAP`). | Estructura **biaxial alfanumérica de 3 caracteres (1 Letra + 2 Números)**:<br>• **17 Capítulos por Letra** según aparato/sistema corporal (`A` General, `K` Circulatorio, `R` Respiratorio, `L` Locomotor, `P` Psicológico...).<br>• **2 dígitos numéricos** divididos en 7 componentes: motivos de consulta/síntomas (`01–29`), procedimientos diagnósticos/preventivos (`30–69`) y **diagnósticos/enfermedades (`70–99`)**. |
| **`CIE-10-ES`** (*Clasificación Internacional de Enfermedades, 10ª Revisión, Modificación Clínica Española*) | **Atención Hospitalaria / Especializada** (obligatoria en toda España desde el **1 de enero de 2016** para el **`RAE-CMBD`** sustituyendo a la antigua CIE-9-MC). | Se divide en **dos volúmenes/sistemas totalmente diferenciados**:<br>1. **CIE-10-ES Diagnósticos (basada en ICD-10-CM):** Códigos alfanuméricos de **$3\text{ a }7\text{ caracteres}$** (el 1º es siempre una letra salvo la U; el 2º y 3º números, seguidos de punto y hasta 4 caracteres adicionales de etiología, localización, **lateralidad** y séptimo carácter de contacto inicial `A`, sucesivo `D` o secuela `S`).<br>2. **CIE-10-ES Procedimientos (basada en ICD-10-PCS):** **Todos los códigos tienen exactamente 7 caracteres alfanuméricos (0–9 y letras A–H, J–N, P–Z; nunca usa las letras I ni O para no confundirlas con el 1 y el 0)**. Cada posición tiene un significado fijo (en la sección `0` Médico-Quirúrgica: 1=Sección, 2=Sistema Orgánico, 3=**Tipo de Procedimiento**, 4=Localización Anatómica, 5=**Abordaje**, 6=**Dispositivo**, 7=Calificador). |
| **`SNOMED CT`** (*Systematized Nomenclature of Medicine — Clinical Terms*) | **Terminología clínica de referencia mundial para la Historia Clínica Electrónica e interoperabilidad semántica en el SNS y la UE**. | A diferencia de CIE-10 (que es una clasificación estadística monoaxial), **SNOMED CT es una ontología clínica polijerárquica y multiaxial** con más de $350.000$ **Conceptos** únicos (identificados por un **SCTID** numérico), **Descripciones** (sinónimos en cada idioma) y **Relaciones** lógicas («*es un*», localización del hallazgo, morfología asociada) que permite tanto pre-coordinación como post-coordinación. |
| **`LOINC`** (*Logical Observation Identifiers Names and Codes*) | **Pruebas de Laboratorio, Microbiología y Observaciones Clínicas / Informes de Imagen**. | Identifica cada determinación analítica u observación mediante 6 ejes separados por dos puntos (Componente/Analito : Propiedad : Tiempo : Tipo de Muestra/Sistema : Escala : Método). |
| **`ATC`** (*Anatomical Therapeutic Chemical Classification*) | **Medicamentos y principios activos** (usado en receta electrónica, `SILICON` y BDCAP). | Código alfanumérico de **5 niveles y 7 caracteres** (1º grupo anatómico, 2º subgrupo terapéutico, 3º farmacológico, 4º químico, 5º principio activo). |

---
