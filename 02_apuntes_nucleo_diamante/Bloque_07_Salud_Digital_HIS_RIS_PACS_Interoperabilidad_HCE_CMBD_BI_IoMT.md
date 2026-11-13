# Bloque 07 — Salud Digital, HIS/RIS/PACS, Interoperabilidad (DICOM, HL7, IHE, SNOMED), Historia Clínica Electrónica, CMBD/GMA, Analítica/BI, IoMT, Citación y Logística

> **Temas de la Parte Específica cubiertos íntegramente en este bloque (10 temas):**
> - **Tema 38:** Caracterización y funcionamiento del equipamiento asociado a la gestión de la imagen diagnóstica. Herramientas de posprocesado. HIS, RIS y PACS.
> - **Tema 39:** Estándares de integración con los sistemas corporativos del Servicio Gallego de Salud.
> - **Tema 40:** Historia clínica electrónica. Concepto y objetivos en atención primaria y hospitalaria.
> - **Tema 41:** Información sanitaria nacional para análisis y planificación: SIAP, BDCAP y CMBD/RAE-CMBD (contenidos, definiciones, periodicidad y comparabilidad). Estratificación poblacional tipo GMA: conceptos básicos y aplicaciones.
> - **Tema 42:** Codificación sanitaria e interoperabilidad. Estándares y clasificaciones (CIAP2, CIE-10, SNOMED CT) para el uso clínico.
> - **Tema 43:** Gestión del dato sanitario desde la perspectiva funcional y organizativa: conceptos generales de captura, calidad, interoperabilidad y gobierno del dato en el ámbito sanitario.
> - **Tema 44:** Uso de los datos sanitarios como apoyo a la toma de decisiones clínicas y organizativas. Fundamentos de analítica de datos sanitarios, uso secundario de datos en investigación e identificación de las principales herramientas de explotación.
> - **Tema 47:** Internet of Medical Things (IoMT) y Telemedicina: concepto, arquitectura funcional, sensores y casos de uso en el Sistema público de salud gallego.
> - **Tema 67:** Planificación integrada en hospitales y centros de atención primaria. Sistemas de gestión de la citación y de la demanda asistencial.
> - **Tema 70:** Logística de productos sanitarios. Cadena de suministros.
>
> **PDFs Oficiales en [`01_normativa_oficial/`](../01_normativa_oficial/):**
> - [`T41_RD_69_2015_Registro_Actividad_Atencion_Sanitaria_Especializada_RAE_CMBD.pdf`](../01_normativa_oficial/T41_RD_69_2015_Registro_Actividad_Atencion_Sanitaria_Especializada_RAE_CMBD.pdf)
> - [`Comun_T07_Esp_T40_LO_3_2018_Proteccion_Datos_LOPDGDD.pdf`](../01_normativa_oficial/Comun_T07_Esp_T40_LO_3_2018_Proteccion_Datos_LOPDGDD.pdf)

---

## 1. Mapa de Sistemas de Información Corporativos del SERGAS (¡Imprescindible para el Examen!)

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

## 2. Tema 38 y Tema 39: Gestión de Imagen Diagnóstica (HIS, RIS, PACS), Posprocesado y Estándares de Integración (`DICOM`, `HL7`, `IHE`)

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

## 3. Tema 42: Codificación Sanitaria, Estándares y Clasificaciones Clínicas (`CIAP-2`, `CIE-10-ES`, `SNOMED CT`, `LOINC`, `ATC`)

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

## 4. Tema 40: Historia Clínica Electrónica (HCE) en Atención Primaria y Hospitalaria

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

## 5. Tema 41: Sistemas de Información Sanitaria Nacional (`SIAP`, `BDCAP`, `CMBD / RAE-CMBD`) y Estratificación Poblacional (`GMA`)

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

## 6. Tema 43 y Tema 44: Gobierno del Dato Sanitario, Analítica de Datos (BI, Datawarehouse, Big Data) y Uso Secundario en Investigación

### 6.1. Tema 43: Gestión y Gobierno del Dato Sanitario (*Data Governance* — Marco `DAMA-DMBOK` e `ISO/IEC 25012`)
1. **Ciclo de vida del dato sanitario:** Captura en origen (dato estructurado vs. texto libre no estructurado) $\rightarrow$ Validación e Integración $\rightarrow$ Almacenamiento $\rightarrow$ Explotación primaria (clínica) y secundaria (gestión/investigación) $\rightarrow$ Archivo/Conservación legal.
2. **Dimensiones de Calidad del Dato Sanitario (`ISO/IEC 25012`):**
   - **Exactitud (*Accuracy*):** El dato refleja el valor real clínico.
   - **Completitud (*Completeness*):** Ausencia de valores nulos o campos obligatorios vacíos.
   - **Consistencia / Coherencia (*Consistency*):** Sin contradicciones entre distintos sistemas (ej. sexo/edad coherente con el diagnóstico).
   - **Actualidad / Oportunidad (*Currentness / Timeliness*):** Registrado en el momento asistencial real.
   - **Trazabilidad y Credibilidad.**
3. **Gobierno del Dato (*Data Governance*):** Define roles (**Comité de Gobierno del Dato**, ***Data Owner* [Propietario del dato]**, ***Data Steward* [Custodio/Administrador de calidad del dato]** y ***Data Custodian* [TIC]**), el **Catálogo de Metadatos y Diccionario de Datos Maestro (MDM — *Master Data Management*)** y el linaje del dato (*Data Lineage*).

### 6.2. Tema 44: Analítica de Datos Sanitarios, Herramientas de Explotación (BI) y Uso Secundario en Investigación
1. **Arquitectura de Inteligencia de Negocio (*Business Intelligence* — BI en el SERGAS: `HEXE`):**
   - **Sistemas Transaccionales (`OLTP` — *On-Line Transaction Processing*):** Son los sistemas asistenciales del día a día (`IANUS`, `SIHGA`, `SILICON`, `LOGAS`), optimizados para inserciones/lecturas rápidas por paciente individual.
   - **Procesos `ETL` (*Extract, Transform, Load* — Extracción, Transformación/Limpieza y Carga):** Extraen por la noche o en casi tiempo real los datos de los sistemas `OLTP`, los limpian, normalizan y cargan en el almacén analítico.
   - **Almacén de Datos Corporativo (`Datawarehouse` — DWH) y `Data Marts` departamentales:** Repositorio histórico, integrado, temático y **no volátil** diseñado para consultas masivas (**`OLAP` — *On-Line Analytical Processing***) modelado en **Esquema en Estrella o Copo de Nieve** (una **Tabla de Hechos** central con métricas numéricas [estancias, dosis, costes, tiempos de espera] rodeada de **Tablas de Dimensión** [Tiempo, Centro/Servicio, Paciente/GMA, Diagnóstico CIE-10, Equipo Biomédico]) con operaciones OLAP de ***Drill-down* (desglosar detalle), *Roll-up* (agregar), *Slice & Dice* y *Pivot***.
   - **Arquitecturas modernas de Big Data y *Data Lake / Data Lakehouse*:** Para explotar datos masivos **no estructurados** (texto libre de notas clínicas mediante **Procesamiento del Lenguaje Natural — PLN/NLP**, señales continuas de monitores UCI en streaming e **imágenes DICOM para Radiómica e IA**).
2. **Los 4 Niveles de Analítica de Datos Sanitarios:**
   1. **Analítica Descriptiva (*¿Qué ha pasado?*):** Cuadros de mando (*Dashboards*), indicadores clave (**KPIs**), listas de espera, actividad quirúrgica.
   2. **Analítica Diagnóstica (*¿Por qué ha pasado?*):** Análisis de causa raíz, correlaciones y minería de procesos (*Process Mining*).
   3. **Analítica Predictiva (*¿Qué va a pasar?*):** Modelos de *Machine Learning* (predicción de reingreso hospitalario a 30 días, predicción de sepsis en UCI, **mantenimiento predictivo de tubos de TC o helio en RM**).
   4. **Analítica Prescriptiva (*¿Qué decisión debemos tomar?*):** Sistemas de Apoyo a la Decisión Clínica (**CDSS**) y optimización automática de agendas/quirófanos.
3. **Uso Secundario de Datos de Salud para Investigación e Innovación (Marco Legal — ¡Pregunta de examen!):**
   - **Disposición Adicional 17ª de la `LO 3/2018 (LOPDGDD)` y Reglamento Europeo del Espacio Europeo de Datos de Salud (`EHDS`):**
     - Distingue entre **Datos Anonimizados** (irreversibles; fuera del RGPD) y **Datos Seudonimizados** (reversibles solo mediante una clave custodiada separadamente por un tercero de confianza; **siguen siendo datos personales sujetos al RGPD**).
     - Para el uso secundario de datos clínicos seudonimizados en investigación biomédica se exige: **1) Dictamen favorable del Comité de Ética de la Investigación (CEI/CEIm)**, **2)Separación técnica y funcional estricta** entre el equipo investigador y quien posee la tabla de reidentificación, **3) Compromiso expreso de no reidentificar** a los pacientes y **4) Evaluación de Impacto en Protección de Datos (`EIPD`)**.

---

## 7. Tema 47, Tema 67 y Tema 70: IoMT y Telemedicina (`TELEA`), Citación/Demanda (`XIDE`) y Logística Sanitaria (`LOGAS`)

### 7.1. Tema 47: Internet of Medical Things (IoMT) y Telemedicina en el SERGAS (`TELEA`)
1. **Arquitectura Funcional de 4 Capas de un Sistema IoMT:**
   - **Capa 1 — Percepción / Sensores Biomédicos (*Wearables*, implantables y dispositivos domiciliarios):** Pulsioxímetros, tensiómetros, básculas bioimpedancia, glucómetros continuos (*CGM*), parches de ECG Holter, espirómetros domiciliarios y monitorización remota de **marcapasos y DAI**.
   - **Capa 2 — Red y Pasarela (*Gateway* / Conectividad):** Comunicación de corto alcance desde el sensor (**Bluetooth Low Energy — BLE, NFC, Zigbee, Wi-Fi** bajo estándar **`IEEE 11073` / *Continua***) hacia el smartphone del paciente o pasarela domiciliaria, y transmisión cifrada (**TLS 1.3 / 5G / NB-IoT**) hacia la nube del servicio de salud.
   - **Capa 3 — Plataforma Middleware / Procesamiento e Integración:** Validación de datos, motor de reglas clínicas y alertas automáticas por descompensación, e integración mediante **`HL7 FHIR` / `IHE PCD`** con la Historia Clínica Electrónica (**`IANUS`**).
   - **Capa 4 — Aplicación Clínica y Ciudadana:** **Plataforma `TELEA` (*Teleasistencia Domiciliaria del SERGAS*)**: el paciente introduce o envía automáticamente por Bluetooth sus constantes desde la app **`É-Saúde` / ` Sergas Móbil`**, y el personal de enfermería/medicina visualiza en **`IANUS`** un panel priorizado por colores (**semáforo de alertas clínicas: rojo/amarillo/verde**) para intervenir precozmente y evitar ingresos hospitalarios en **Insuficiencia Cardíaca, EPOC, Diabetes, Hipertensión, Hospitalización a Domicilio (HADO) y seguimiento postquirúrgico**.
2. **Modalidades de Telemedicina en el SERGAS:**
   - **Teleconsulta / e-Interconsulta (Asíncrona *Store-and-Forward* o Síncrona):** Entre el médico de Atención Primaria y el especialista hospitalario a través de `IANUS` (incluyendo **Teledermatología** con dermatoscopio digital acoplado y **Teleoftalmología / Retinografía**).
   - **Teleictus y Telemedicina de Urgencias:** Conexión síncrona de vídeo de alta definición e imagen TC en tiempo real entre hospitales comarcales y las Unidades de Ictus de referencia para indicar fibrinolisis o trombectomía mecánica urgente.
   - **Telemonitorización de Dispositivos Cardioimplantables (Marcapasos / DAI):** El transmisor en la mesilla de noche del paciente interroga inalámbricamente (banda **MICS $402\text{–}405\text{ MHz}$** o BLE) el implante y envía alertas de arritmias o agotamiento de batería (`ERI`) a la unidad de arritmias.

### 7.2. Tema 67: Planificación Integrada y Sistemas de Gestión de la Citación y de la Demanda Asistencial
- **Integración Primaria-Hospitalaria (Estructura de Áreas Sanitarias de Gestión Integrada del SERGAS — EOXI / 7 Áreas Sanitarias):**
  - El SERGAS organiza el territorio en **7 Áreas Sanitarias** (A Coruña y Cee, Santiago de Compostela y Barbanza, Ferrol, Lugo-A Mariña-Monforte, Ourense-Verín-O Barco, Pontevedra y O Salnés, y Vigo), integrando bajo una misma Gerencia los hospitales y los centros de salud de Atención Primaria.
- **Vías Rápidas Oncológicas y Procesos Asistenciales Integrados (PAI):** Circuitos preferentes sin demora entre Atención Primaria y Hospitalaria ante sospecha fundada de cáncer (mama, colon, pulmón, próstata, vejiga, cabeza y cuello, melanoma).
- **Gestión de la Demanda y Citación en Atención Primaria (`XIDE` — *Xestión Integrada da Demanda en Equipo*) y Cita Previa Multicanal:**
  - Canales de citación: App **`Sergas Móbil`**, web `sergas.es`, respuesta de voz interactiva (IVR telefónico) y mostrador de admisión.
  - **`XIDE`:** Algoritmo organizativo en Atención Primaria que encamina la demanda del paciente según su motivo de consulta hacia el profesional más resolutivo del equipo multidisciplinar (médico de familia, enfermería, farmacéutico de AP, odontólogo, trabajador social o área administrativa), diferenciando consulta ordinaria, consulta en el día (no demorable), consulta telefónica y acto único.
- **Gestión de Listas de Espera en Atención Hospitalaria (`RD 605/2003` y Ley Gallega de Garantías de Prestaciones Sanitarias `Ley 12/2013`):**
  - **Indicadores básicos del Registro de Pacientes en Espera (Quirúrgica, Consultas Externas y Pruebas Diagnósticas):** **Tiempo Medio de Espera (TME)** de los pacientes estructurales y **Tasa de espera por tramos** según la **Prioridad Clínica**:
    - **Prioridad 1:** Pacientes cuyo tratamiento quirúrgico, siendo programable, **no admite una demora superior a 30 días**.
    - **Prioridad 2:** Pacientes cuya situación clínica o social admite una **demora relativa, siendo recomendable la intervención en un plazo inferior a 90 días** (y **garantía máxima legal en Galicia de $\le 60\text{ días}$ para patologías graves garantizadas por la Ley 12/2013**, $\le 45\text{ días}$ para consultas preferentes y pruebas diagnósticas garantizadas).
    - **Prioridad 3:** Patologías que permiten una demora mayor ya que no producen secuelas importantes.

### 7.3. Tema 70: Logística de Productos Sanitarios y Cadena de Suministros (`LOGAS`)
1. **Arquitectura de la Cadena de Suministros del SERGAS (`LOGAS` y Plataforma Logística de Negreira):**
   - El SERGAS opera bajo un modelo de **compra agregada centralizada y plataforma logística centralizada (Plataforma Logística Sanitaria de Galicia en Negreira)** que abastece a los hospitales y centros de salud de las 7 Áreas Sanitarias mediante pedidos electrónicos en el ERP **`LOGAS`**.
2. **Clasificación ABC de Inventarios (Ley de Pareto en almacenes sanitarios):**
   - **Artículos A ($\approx 10\text{–}20\%$ de las referencias, pero representan el $70\text{–}80\%$ del coste económico total):** Prótesis, implantes, *stents*, válvulas TAVI, material de robótica $\rightarrow$ control estricto unitario por número de serie/lote (**UDI**) y gestión en **depósito/consigna**.
   - **Artículos B ($\approx 30\%$ de las referencias y $\approx 15\text{–}20\%$ del coste):** Fungible específico.
   - **Artículos C ($\approx 50\text{–}60\%$ de las referencias, pero solo el $5\text{–}10\%$ del coste):** Material fungible común de alto consumo (gasas, guantes, jeringas).
3. **Sistemas de Reposición en Unidades Asistenciales y Quirófanos:**
   - **Sistema de Doble Cajetín (*Kanban* con lectura de código de barras o etiquetas **RFID pasivas UHF**):** En los almacenes de planta (*pacto de consumo*), cada referencia se divide en dos compartimentos (cajetín primario y secundario); cuando el personal agota el primer cajetín, coloca la tarjeta/etiqueta RFID en el buzón o panel lector, disparando automáticamente en **`LOGAS`** la orden de reposición sin tener que contar stock manualmente.
   - **Carruseles verticales/horizontales y Armarios Inteligentes RFID de Alto Coste** (en Hemodinámica, Radiología Intervencionista y Quirófanos): leen automáticamente qué *stent*, catéter o prótesis se ha retirado del armario, comprueban su fecha de caducidad (**gestión FEFO — *First Expired, First Out***) e imputan el consumo al paciente y episodio quirúrgico.
