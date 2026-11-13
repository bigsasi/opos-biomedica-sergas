# Esp. Tema 38 — Caracterización y funcionamiento del equipamiento asociado a la gestión de la imagen diagnóstica. Herramientas de posprocesado. HIS, RIS y PACS.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 1: Núcleo Diamante (💎 Núcleo Diamante)  
> **Bloque de Estudio Completo:** [`Bloque_07_Salud_Digital_HIS_RIS_PACS_Interoperabilidad_HCE_CMBD_BI_IoMT.md`](../02_apuntes_nucleo_diamante/Bloque_07_Salud_Digital_HIS_RIS_PACS_Interoperabilidad_HCE_CMBD_BI_IoMT.md)

## 🎯 Cruce con Otras Oposiciones del SERGAS

- **Categorías con solapamiento:** **Ingeniero/a Técnico/a** |  | **Radiofísica Hospitalaria** |  | **TS Imagen para el Diagnóstico**
- **Grado de solapamiento:** **Alto (80%)**: Cubre específicamente equipos, instalaciones y salas de radiodiagnóstico y digitalización.<br><br>**Alto (75%)**: Cubre características de los equipos/salas de radiodiagnóstico y diseño de instalaciones.<br><br>**Medio (65%)**: Cubre equipamiento de radiología convencional y sistemas digitales.
- **Epígrafes equivalentes:**
  • Tema 50. Diagnóstico por imagen. Equipos y salas de radiodiagnóstico. RNM. TAC. Instalaciones. Procesado de placas. Digitalización de imágenes.
  
  • Tema 26. Equipos. Tubos y generadores de rayos X. Propiedades. Cadena de imagen: a) placa radiográfica, características de la película radiográfica, pantallas de refuerzo, procesadoras, negatoscopios, b) intensificadores de imagen, c) sistemas receptores de imagen digital: cR, detectores de panel plano, etc. Características de los equipos de radiodiagnóstico: radiográficos, tomógrafos convencionales, mamógrafos, equipos dentales, telemandos, arcos quirúrgicos, equipos vasculares y de hemodinámica, tomógrafos computadorizados (TC).
  • Tema 10. Regulaciones, recomendaciones y normas. Administración y organización de la protección radiológica. Organizaciones y normas nacionales e internacionales. Legislación nacional e internacional. Diseño de instalaciones. Cálculo de blindajes. Gestión de la seguridad radiológica.
  
  • Tema 9. Equipamientos de diagnóstico por imagen: radiología convencional intervencionista, tomografía computerizada, resonancia magnética y ultrasonografía. Principios de tomografía computerizada y resonancia magnética: fundamentos físicos, aplicaciones e indicaciones. Estudios y técnicas de exploración con TC y RMN. Ultrasonografía. Bases y fundamentos físicos. Ultrasonografía en 2, 3 y 4 dimensiones. Ventajas. Inconvenientes.
  • Tema 14. Sistemas de imagen en la radiología convencional. Película radiográfica: revelado y fijado. Sistemas digitales de imagen.

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

### 2. Tema 38 y Tema 39: Gestión de Imagen Diagnóstica (HIS, RIS, PACS), Posprocesado y Estándares de Integración (`DICOM`, `HL7`, `IHE`)

### 2.1. El Flujo de Trabajo Completo HIS – RIS – Modalidad – PACS (Perfil `IHE SWF` — *Scheduled Workflow*)
> **Caso práctico clásico de examen:** *«Un hospital del SERGAS instala un nuevo TC o Ecógrafo. Explique paso a paso qué mensajes y estándares intervienen desde que el médico pide la prueba hasta que ve la imagen en IANUS»*:

1. **Petición electrónica en `HIS` (`IANUS` / `SIHGA`):** El médico solicita el estudio radiológico $\rightarrow$ el `HIS` envía un mensaje **`HL7 ORM` (*Order Message*)** (o `OML`) al **`RIS` (*Radiology Information System*)** a través del **Bus de Integración Corporativo (ESB, ej. *Mirth Connect* / *Rhapsody* / *InterSystems Ensemble/HealthShare*)**, habiendo sincronizado previamente los datos demográficos del paciente con mensajes **`HL7 ADT` (*Admit, Discharge, Transfer*)**.
2. **Citación y Lista de Trabajo en la Modalidad (`DICOM Modality Worklist — MWL`):**
   - El equipo de imagen (TC, RM, RX, Ecógrafo) consulta al `RIS` mediante el servicio **`DICOM MWL` (*C-FIND*)** y descarga automáticamente en la consola del equipo el nombre, apellidos, NHC, fecha de nacimiento y **Accession Number** del paciente (**evitando errores manuales de tecleo**).
3. **Adquisición e Informe de Estado del Procedimiento (`DICOM MPPS`):**
   - Cuando el técnico inicia y finaliza el disparo, la modalidad envía al `RIS`/`PACS` un mensaje **`DICOM MPPS` (*Modality Performed Procedure Step* — *N-CREATE / N-SET*)** indicando que el estudio se ha realizado y enviando el informe estructurado de dosis **`DICOM RDSR` (*Radiation Dose Structured Report*, obligatorio por `RD 601/2019`)**.
4. **Almacenamiento en el `PACS` (`DICOM Storage` y `Storage Commitment`):**
   - La modalidad envía las imágenes al **`PACS` (*Picture Archiving and Communication System*)** mediante el comando **`DICOM C-STORE`** y solicita confirmación de guardado seguro mediante **`DICOM Storage Commitment`** antes de permitir borrar las imágenes del disco duro local de la consola.
5. **Visualización Diagnóstica, Posprocesado e Informe Clínico (`HL7 ORU`):**
   - El radiólogo recupera las imágenes en su estación diagnóstica mediante **`DICOM Query/Retrieve` (`C-FIND` / `C-MOVE` / `C-GET`)** o **`WADO` / `DICOMweb`** (basado en RESTful HTTP: `WADO-RS`, `STOW-RS`, `QIDO-RS`), y al firmar el informe radiológico en el `RIS`, este se envía a **`IANUS`** mediante un mensaje **`HL7 ORU` (*Observation Result*)** o documento **`HL7 CDA`**.

### 2.2. Equipamiento de Visualización Diagnóstica y Herramientas de Posprocesado (Tema 38)
1. **Monitores de Diagnóstico Médico vs. Monitores Clínicos de Revisión (¡Pregunta frecuente!):**
   - **Monitores de Diagnóstico Primario (Radiología):** Monitores de alta resolución ($2\text{ a }3\text{ Megapíxeles}$ para TC/RM/RX y **$\ge 5\text{ Megapíxeles}$ obligatorios para Mamografía Digital**), alta luminancia máxima ($500\text{–}1.000\text{ cd/m}^2$, operando calibrados a $\ge 350\text{–}450\text{ cd/m}^2$), fotómetro integrado en el marco y **calibración automática según la curva estándar de percepción visual humana `DICOM Parte 14 (GSDF — Grayscale Standard Display Function)`**.
2. **Herramientas de Posprocesado de Imagen 2D / 3D / 4D:**
   - **Ventana y Nivel (*Window Width [WW]* = contraste / *Window Level o Center [WL]* = brillo):** Mapea las $4.096$ tonalidades de Unidades Hounsfield ($12\text{ bits}$) a los $256$ niveles de gris del ojo humano (ventana de pulmón, hueso, mediastino, cerebro).
   - **MPR (*Multiplanar Reconstruction* — Reconstrucción Multiplanar):** Reconstruye planos **coronal, sagital u oblicuos/curvos** a partir de un volumen axial isotrópico.
   - **MIP (*Maximum Intensity Projection* — Proyección de Máxima Intensidad):** Proyecta en cada rayo el vóxel de **mayor valor UH** $\rightarrow$ ideal para **Angio-TC, Angio-RM y nódulos pulmonares**.
   - **MinIP (*Minimum Intensity Projection* — Proyección de Mínima Intensidad):** Proyecta el vóxel de **menor valor UH** $\rightarrow$ ideal para **árbol traqueobronquial, enfisema pulmonar y conductos biliares/pancreáticos**.
   - **VR (*Volume Rendering* — Renderizado Volumétrico 3D) y *Surface Rendering* (Sombras de superficie):** Asigna opacidad y color a cada rango de UH para visualización 3D realista y **Endoscopia Virtual (Colonoscopia o Broncoscopia virtual)**.

### 2.3. Estándares de Interoperabilidad Sanitaria (Tema 39 y Tema 42 — ¡Tabla resumen para test!)

| Estándar / Comité | Qué es y para qué se usa exactamente | Detalles Técnicos de Examen |
| :--- | :--- | :--- |
| **`DICOM`** (*Digital Imaging and Communications in Medicine* — Norma **`ISO 12052`**) | Estándar mundial para el **almacenamiento, impresión y transmisión de imagen médica digital** y datos asociados. | • **Un archivo DICOM une en un solo objeto la cabecera de metadatos (paciente, equipo, dosis) + la matriz de píxeles**.<br>• Une objetos de información (**IOD**) con comandos de servicio (**DIMSE**: `C-ECHO` [ping], `C-STORE`, `C-FIND`, `C-MOVE`, `C-GET`, `N-CREATE`) formando pares **SOP (*Service-Object Pair*)** donde cada nodo actúa como **SCU (*Service Class User* — cliente)** o **SCP (*Service Class Provider* — servidor)** identificado por su **AE Title (*Application Entity Title*)**, dirección IP y puerto TCP. |
| **`HL7 v2.x`** (*Health Level Seven* versión 2) | Estándar de **mensajería clínica y administrativa** intrahospitalaria más extendido del mundo (Opera en la Capa 7 — Aplicación del modelo OSI). | • Mensajes de texto plano delimitados por tuberías (`|`, *pipes*) y segmentos de 3 letras (`MSH` cabecera, `PID` paciente, `OBR` petición, `OBX` resultado) sobre protocolo **MLLP (*Minimal Lower Layer Protocol*)**.<br>• Tipos clave: **`ADT`** (admisión/traslado/alta), **`ORM`** (petición de orden), **`ORU`** (resultado de laboratorio/informe), **`SIU`** (citación/agendas). |
| **`HL7 v3` y `HL7 CDA`** (*Clinical Document Architecture*) | Estándar de **documentos clínicos electrónicos estructurados** (informes de alta, informes de consulta, historia clínica resumida del SNS). | Basado en el modelo de información de referencia **RIM (*Reference Information Model*)** y sintaxis **XML**. Un documento **CDA R2** consta de una **Cabecera (*Header*)** legible por máquina y un **Cuerpo (*Body*)** con 3 niveles de interoperabilidad (Nivel 1 texto no estructurado, Nivel 2 secciones codificadas, Nivel 3 entradas clínicas codificadas en SNOMED/LOINC). |
| **`HL7 FHIR`** (*Fast Healthcare Interoperable Resources*) | El **nuevo estándar moderno de interoperabilidad web y móvil** de HL7. | Basado en **Recursos modulares** (`Patient`, `Observation`, `Device`, `DiagnosticReport`, `MedicationRequest`) accesibles mediante **APIs RESTful web (HTTP/HTTPS)** en formato **`JSON` o `XML`** y autorización **`OAuth2 / OpenID Connect` (*SMART on FHIR*)**. |
| **`IHE`** (*Integrating the Healthcare Enterprise*) | **¡OJO EXAMEN!** `IHE` **NO crea nuevos estándares desde cero**, sino que publica **Perfiles de Integración (*Integration Profiles*)** que definen cómo combinar estándares existentes (`DICOM`, `HL7`, `W3C`) para resolver flujos clínicos reales. | Define **Actores** y **Transacciones**. Perfiles famosos de examen:<br>• **`SWF`** (*Scheduled Workflow* — radiología).<br>• **`XDS.b` y `XDS-I.b`** (*Cross-Enterprise Document / Image Sharing* — compartir documentos e imágenes entre áreas sanitarias o CCAA).<br>• **`PIX` / `PDQ`** (identificación cruzada y consulta demográfica de pacientes).<br>• **`PCD` (*Patient Care Device*)**: Integración directa de **monitores multiparamétricos, respiradores y bombas de infusión** con la HCE (`IANUS`).<br>• **`ATNA`** (auditoría de seguridad y nodos autenticados) y **`CT`** (*Consistent Time* — sincronización horaria NTP). |
| **`IEEE 11073` (*SDC / PHD*) y `Continua Design Guidelines` (*PCHAlliance*)** | Estándar específico para la **comunicación e interoperabilidad *Plug-and-Play* de dispositivos médicos de punto de cuidado (PoC) y sensores personales de Telemedicina / IoMT** (tensiómetros, básculas, glucómetros, pulsioxímetros Bluetooth/USB). | Utiliza el modelo de dominio **DIM (*Domain Information Model*)** y nomenclatura estandarizada de parámetros fisiológicos para volcar constantes vitales en plataformas como **`TELEA`** e **`IANUS`**. |
| **`CEN/TC 251`, `ISO/TC 215` y `UNE-CTN 139`** | Comités oficiales de normalización en **Informática Sanitaria** a nivel Europeo (`CEN/TC 251`, creador de la norma de arquitectura de HCE **`UNE-EN 13606`**), Internacional (`ISO/TC 215`) y Español (`CTN 139` de UNE). | — |

---
