# Tema 42 — Codificación sanitaria e interoperabilidad. Estándares y clasificaciones (CIAP2, CIE-10, SNOMED CT) para el uso clínico.

> - **Parte del Programa:** Parte Específica (74 Temas · Orden DOG #42 de 74) — Ejercicio 1.º Eliminatorio
> - **Bloque Temático SERGAS:** Bloque 07 — Salud Digital, Sistemas Corporativos, Interoperabilidad, HCE, Analítica, IoMT, Citación y Logística (`💎 Núcleo Diamante · Fase 1`)
> - **Marco Normativo y Técnico Nuclear:** Real Decreto 69/2015, de 6 de febrero (`RAE-CMBD` y obligatoriedad oficial de **`CIE-10-ES Diagnósticos y Procedimientos`**); Real Decreto 1093/2010 (`HCDSNS` y adopción de **`SNOMED CT`**, `CIE` y `LOINC` como estándares semánticos del SNS); Real Decreto 4/2010 (`Esquema Nacional de Interoperabilidad — ENI`); Reglamento (UE) 2017/745 (`MDR`, Art. 26 sobre la **Nomenclatura Europea de Productos Sanitarios `EMDN`**); Orden EFP/1216/2019 (Módulo Profesional 1592); Estándares internacionales **`WONCA CIAP-2` (`ICPC-2`)**, **`OMS CIE-10` / `CIE-10-ES` (`ICD-10-CM` e `ICD-10-PCS`)**, **`SNOMED CT`** (*SNOMED International*), **`LOINC`**, **`ATC`** y **`EMDN` / `GMDN`**.
> - **Sistemas y Entorno SERGAS:** Servidor Terminológico Corporativo del SERGAS, `IANUS 5` (codificación `CIAP-2` en la Hoja de Problemas de Atención Primaria y `SNOMED CT` / `CIE-10-ES` en HCE), Unidades de Codificación de los `SADC` hospitalarios (`SIHGA` / `RAE-CMBD`), Sistemas de Información de Laboratorio (`LIS` con `LOINC`), `SILICON` / `e-Receita` (`ATC`) y catalogación de activos y suministros biomédicos en `XMAO` y `LOGAS` (`EMDN`/`GMDN`).

---

## 🎯 0. Alcance Oficial del Epígrafe y Cruce con Otras Oposiciones del SERGAS

### 0.1. Desglose de Subepígrafes según Publicación Oficial del DOG (Resolución de 13/04/2026)
El presente tema constituye el fundamento de la **interoperabilidad semántica** en salud digital e ingeniería biomédica. Mientras que el Tema 39 analiza los protocolos de transporte y sintaxis de mensajería (`HL7`, `DICOM`, `IHE`), el Tema 42 estudia cómo representar de forma computable, normalizada y sin ambigüedad el **significado clínico** de los diagnósticos, síntomas, procedimientos quirúrgicos y diagnósticos, observaciones de laboratorio, fármacos y dispositivos médicos a través de tres grandes sistemas nucleares exigidos expresamente en el epígrafe (**`CIAP-2`**, **`CIE-10` / `CIE-10-ES`** y **`SNOMED CT`**), complementados por los vocabularios específicos de dominio (**`LOINC`**, **`ATC`** y **`EMDN/GMDN`**) y la arquitectura de **Servidores Terminológicos**.

### 0.2. Cruce Verificado 1:1 con Otras Categorías del SERGAS (`cruce_temarios_sergas.md`)

| Categorías con las que coincide | Epígrafes Equivalentes en Otras Convocatorias del SERGAS | Grado de Solapamiento y Enfoque de Tribunal |
| :--- | :--- | :--- |
| **Grupo Técnico / Gestión TIC** | • **TIC Superior (A1):** Tema 25. Interoperabilidad en el entorno sanitario. Estándares tecnológicos en el ámbito sanitario: DICOM, HL7, CDA, IHE, CEN TC/251, AEN/CTN 139, IEEE Continua Alliance. Implementación de mensajería HL7 sobre buses de integración.<br>• **TIC Gestión (A2):** Tema 17. Interoperabilidad en el entorno sanitario. Estándares tecnológicos en el ámbito sanitario: DICOM, HL7, CDA, IHE, CEN TC/251, AEN/CTN 139, IEEE Continua Alliance. Implementación de mensajería HL7 sobre buses de integración.<br>• **TIC Especialista (C1):** Tema 12. Interoperabilidad en el entorno sanitario. Estándares tecnológicos en el ámbito sanitario: DICOM, HL7, CDA, IHE, CEN TC/251, AEN/CTN 139, IEEE Continua Alliance... | **Alto (80%)**: Cubre la capa de interoperabilidad semántica en el entorno sanitario y el dominio técnico de las clasificaciones clínicas y terminologías de referencia (`CIAP-2`, `CIE-10-ES`, `SNOMED CT`, `LOINC`). |

---

## 📖 1. Fundamentos de Codificación Sanitaria, Interoperabilidad Semántica y Sistemas de Organización del Conocimiento (`KOS`)

### 1.1. Clasificaciones Estadísticas vs. Nomenclaturas Multiaxiales vs. Ontologías Clínicas
El lenguaje médico natural es extraordinariamente rico, pero presenta fenómenos lingüísticos (sinonimia, polisemia, acrónimos ambiguos, epónimos locales, negaciones y abreviaturas como *«IC»*, que puede significar *Insuficiencia Cardíaca*, *Infección por Citomegalovirus*, *Interconsulta* o *Índice Cardíaco*) que impiden que un sistema informático procese directamente el texto libre con total fiabilidad.

La **Codificación Sanitaria** es el proceso de abstracción y traducción mediante el cual una expresión clínica documental se asigna a una representación alfanumérica estandarizada perteneciente a un **Sistema de Organización del Conocimiento (`KOS` — *Knowledge Organization System*)**. En ingeniería del conocimiento biomédico es imprescindible distinguir tres arquitecturas formales de sistemas terminológicos (**¡Pregunta conceptual clave de examen A1!**):

1. **Clasificaciones Estadísticas Monoaxiales (o de eje jerárquico simple, ej. `CIE-10` Diagnósticos y `CIAP-2`):**
   - **Propósito de diseño:** Agrupar las enfermedades y motivos de atención en un número finito y manejable de **compartimentos o categorías** para fines de **estadística de salud pública, epidemiología, mortalidad, morbilidad (`RAE-CMBD`, `BDCAP`) y facturación/casuística (`GRD`, `GMA`)**.
   - **Dos propiedades matemáticas obligatorias:**
     - **Exclusividad mutua (*Mutually Exclusive*):** Cada entidad nosológica solo puede ubicarse en un único código de la clasificación (**monojejerarquía**: cada nodo hijo tiene un único nodo padre).
     - **Exhaustividad conjunta (*Jointly Exhaustive*):** Para garantizar que el $100\%$ de los casos del mundo real tengan algún código donde contabilizarse, las clasificaciones estadísticas incorporan obligatoriamente **categorías o «bolsas» residuales** del tipo ***«Otros especificados» (`NCOC` — No Clasificados Bajo Otro Concepto / *NEC*)*** y ***«No especificados» (`NEOM` — No Especificado de Otro Modo / *NOS*)***.
   - **Limitación para el registro clínico directo:** Al agrupar varias variantes clínicas bajo un mismo código estadístico o en bolsas residuales, se pierde granularidad clínica fina (lo que se conoce como *pérdida por compresión estadística*).
2. **Nomenclaturas Sistemáticas Multiaxiales (ej. `CIE-10-ES Procedimientos / ICD-10-PCS` y `LOINC`):**
   - Construyen cada código combinando de forma ortogonal e independiente varios **ejes semánticos** (p. ej., en un procedimiento quirúrgico: *Sistema Orgánico $\times$ Operación Raíz $\times$ Localización Anatómica $\times$ Vía de Abordaje $\times$ Dispositivo Implantado*), evitando términos residuales genéricos y permitiendo construir decenas de miles de combinaciones precisas sin epónimos.
3. **Ontologías Clínicas de Referencia Basadas en Lógica Descriptiva (ej. `SNOMED CT`):**
   - **Propósito de diseño:** Registrar con **fidelidad clínica absoluta y máxima granularidad** los hallazgos, diagnósticos, procedimientos y dispositivos en el punto de atención al paciente (*Interfaz / Terminología de Referencia de la HCE*).
   - **Propiedades ontológicas:** Es **polijerárquica** (un concepto puede tener múltiples padres simultáneos: p. ej., *«Neumonía bacteriana»* es simultáneamente hijo de *«Neumonía»* [por localización pulmonar] e hijo de *«Infección bacteriana»* [por agente etiológico]), **no contiene bolsas residuales («otros/no especificado»)**, y define formalmente el significado de cada concepto mediante relaciones lógicas computables (*lógica descriptiva $\mathcal{EL}^{++}$*), lo que permite a los motores de apoyo a la decisión clínica (`CDSS`) razonar automáticamente sobre la historia clínica.

### 1.2. Interoperabilidad Semántica y Enlace Terminológico (*Terminology Binding*)
En las arquitecturas modernas de Historia Clínica Electrónica (`UNE-EN ISO 13606`, `HL7 CDA Nivel 3` y `HL7 FHIR`), la **Interoperabilidad Semántica** se alcanza mediante el **Enlace Terminológico (*Terminology Binding*)**, que conecta sin fisuras dos modelos independientes:
- **El Modelo de Información (*Information Model*):** Define la estructura sintáctica y el contexto epistémico del registro (p. ej., un recurso `FHIR Condition` o un arquetipo `ISO 13606` que indica que el dato es un *Diagnóstico confirmado actual del paciente* y no un *Antecedente familiar* ni una *Hipótesis descartada*).
- **El Modelo Terminológico (*Terminology Model*):** Define el conjunto de valores permitidos (**`ValueSet` / Conjunto de Valores**) extraídos de uno o varios sistemas de codificación (**`CodeSystem`: `SNOMED CT`, `CIE-10-ES`, `LOINC`, `CIAP-2`**) que pueden poblar un campo concreto del modelo de información, identificando cada sistema mediante su **`OID` (*Object Identifier* ISO)** o su **`URI` canónica**.

---

## ⚙️ 2. Clasificaciones Clínicas en Atención Primaria y Especializada: `CIAP-2` y `CIE-10-ES` (Diagnósticos y Procedimientos)

### 2.1. `CIAP-2` (*Clasificación Internacional de la Atención Primaria*, 2.ª Edición de la `WONCA`)
En Atención Primaria, gran parte de las consultas no finalizan en el primer contacto con un diagnóstico anatomopatológico o etiológico cerrado (como exige la CIE-10), sino que se atienden por **síntomas indiferenciados** (*tos*, *mareo*, *dolor abdominal*, *fiebre*), por actividades preventivas o por motivos administrativos. Para responder a esta realidad clínica, el Comité Internacional de Clasificación de la **`WONCA` (*World Organization of National Colleges, Academies and Academic Associations of General Practitioners/Family Physicians*)** desarrolló la **`CIAP-2` (`ICPC-2` — *International Classification of Primary Care*)**, que es el estándar de codificación de los **Episodios y de la Hoja de Problemas en Atención Primaria del SERGAS (`IANUS`)** y de la base nacional **`BDCAP`**:

1. **Filosofía Orientada al Episodio de Atención:** Permite codificar los tres elementos de un episodio: **1) La Razón o Motivo de Consulta (`RFE` — *Reason For Encounter*)** expresada por el paciente, **2) El Proceso de Atención o Intervención** realizado por el profesional, y **3) El Problema de Salud o Diagnóstico** evaluado.
2. **Estructura Biaxial Alfanumérica de 3 Caracteres (`1 Letra + 2 Dígitos Numéricos`):**
   Todo código `CIAP-2` consta exactamente de **una letra mayúscula seguida de dos números** (p. ej., **`R05`** = *Tos*, **`K86`** = *Hipertensión arterial no complicada*, **`T90`** = *Diabetes no insulinodependiente*):
   - **Eje 1 — 17 Capítulos Alfabéticos (Localización por Aparato o Sistema Orgánico):** Prioriza la localización corporal sobre la etiología (porque en AP primero se sabe *dónde* duele antes de saber la causa exacta):
     - **`A`** Problemas generales e inespecíficos · **`B`** Sangre, órganos hematopoyéticos, linfáticos y bazo · **`D`** Aparato digestivo · **`F`** Ojo y anejos · **`H`** Aparato auditivo (oído) · **`K`** Aparato circulatorio (cardiovascular) · **`L`** Aparato locomotor (musculoesquelético) · **`N`** Sistema nervioso (neurológico) · **`P`** Problemas psicológicos y psiquiátricos · **`R`** Aparato respiratorio · **`S`** Piel y faneras · **`T`** Aparato endocrino, metabolismo y nutrición · **`U`** Aparato urinario · **`W`** Planificación familiar, embarazo, parto y puerperio · **`X`** Aparato genital femenino y mamas · **`Y`** Aparato genital masculino · **`Z`** Problemas sociales.
   - **Eje 2 — 7 Componentes Numéricos Estándar (`01` a `99`, idénticos en los 17 capítulos):**
     - **Componente 1 (`dígitos 01 a 29`):** **Signos, síntomas y quejas** (motivos de consulta sintomáticos cuando aún no hay diagnóstico definitivo, p. ej., `R05` Tos, `N01` Cefalea, `D11` Diarrea).
     - **Componente 2 (`dígitos 30 a 49`):** Procedimientos diagnósticos, de cribado y preventivos (p. ej., análisis, exploración física, citología).
     - **Componente 3 (`dígitos 50 a 59`):** Medicación, tratamiento y procedimientos terapéuticos.
     - **Componente 4 (`dígitos 60 a 61`):** Resultados de pruebas complementarias.
     - **Componente 5 (`dígito 62`):** Motivos administrativos (certificados, informes).
     - **Componente 6 (`dígitos 63 a 69`):** Derivaciones, seguimiento y otras razones de consulta.
     - **Componente 7 (`dígitos 70 a 99`):** **Diagnósticos y enfermedades**, subdividido internamente de forma sistemática en todos los capítulos en:
       - `70–73`: **Enfermedades infecciosas**.
       - `74–79`: **Neoplasias**.
       - `80–81`: **Traumatismos y lesiones**.
       - `82–83`: **Anomalías congénitas**.
       - `84–99`: **Otras enfermedades específicas del aparato** (p. ej., `K86` HTA sin afectación de órgano diana, `K87` HTA con afectación de órgano diana, `R95` EPOC, `R96` Asma).

### 2.2. `CIE-10-ES Diagnósticos` (*Modificación Clínica Española de ICD-10-CM*)
Por mandato del **Real Decreto 69/2015 (`RAE-CMBD`)**, desde el 1 de enero de 2016 el estándar oficial obligatorio en toda España para la codificación clínica en Atención Especializada/Hospitalaria es la **`CIE-10-ES`**, publicada y actualizada bienalmente por la Unidad Técnica de la CIE-10-ES del Ministerio de Sanidad. Consta de dos sistemas con arquitecturas completamente distintas: **`CIE-10-ES Diagnósticos`** (traducción y adaptación de la *ICD-10-CM* estadounidense basada en la CIE-10 de la OMS) y **`CIE-10-ES Procedimientos`** (traducción de la *ICD-10-PCS*).

En **`CIE-10-ES Diagnósticos`**:
1. **Estructura Documental:** Se organiza en un **Índice Alfabético de Enfermedades** (con tabla de neoplasias, tabla de fármacos/productos químicos e índice de causas externas) y una **Lista Tabular de Enfermedades** estructurada en **21 Capítulos** (ordenados por etiología —infecciosas `A00-B99`, neoplasias `C00-D49`—, por aparatos anatómicos, embarazo/perinatal/congénitas, síntomas `R00-R99`, lesiones y envenenamientos `S00-T88`, causas externas de morbilidad `V00-Y99` y factores que influyen en el estado de salud `Z00-Z99`, más el capítulo 22 para códigos de emergencia de la OMS con letra `U`, como **`U07.1` COVID-19**).
2. **Anatomía del Código de `CIE-10-ES Diagnósticos` ($3\text{ a }7\text{ caracteres alfanuméricos}$ con punto decimal tras el 3.º):**
   $$\underbrace{\text{Carácter 1}}_{\text{Letra (A–Z)}} \quad \underbrace{\text{Car. 2} \quad \text{Car. 3}}_{\text{Categoría (3 car.)}} \quad \mathbf{.} \quad \underbrace{\text{Car. 4} \quad \text{Car. 5} \quad \text{Car. 6}}_{\text{Etiología, Localización, Gravedad y Lateralidad}} \quad \underbrace{\text{Carácter 7}}_{\text{Extensión de Episodio}}$$
   - **Carácter 1:** Es **siempre una LETRA** (`A` a `Z`), lo que permitió triplicar el número de categorías respecto a la antigua CIE-9-MC numérica.
   - **Caracteres 2 y 3:** Números (formando con la letra la **Categoría de 3 caracteres**, longitud mínima de un código).
   - **Caracteres 4, 5 y 6 (Subcategorías tras el punto decimal):** Especifican la etiología, la localización anatómica exacta, las manifestaciones clínicas/complicaciones (códigos de combinación) y la **LATERALIDAD** (generalmente: **`1` = lado derecho**, **`2` = lado izquierdo**, **`3` = bilateral**, `9` = lado no especificado).
   - **Carácter 7 (Extensión):** Obligatorio en capítulos como el **Capítulo 19 (Lesiones, traumatismos y complicaciones de cuidados médicos/quirúrgicos `S00-T88`)** y Obstetricia/Fracturas para indicar la fase asistencial del episodio:
     - **`A` (*Initial encounter* — Contacto inicial):** Mientras el paciente está recibiendo tratamiento activo por la lesión o complicación de un implante/dispositivo médico.
     - **`D` (*Subsequent encounter* — Contacto sucesivo):** Fase de seguimiento, curas, retirada de fijación o convalecencia rutinaria.
     - **`S` (*Sequela* — Secuela):** Complicación tardía o efecto residual permanente tras haber finalizado la fase aguda.
   - **El Carácter Comodín o Marcador de Posición `X` (*Placeholder* — ¡Pregunta clásica de examen!):** Si un código tiene menos de 6 caracteres base (p. ej., solo 4 o 5 caracteres) pero exige obligatoriamente un **7.º carácter** (como `A`, `D` o `S`), se deben rellenar las posiciones intermedias vacías con la letra **`X`** para que el 7.º carácter ocupe siempre exactamente la séptima posición (p. ej., **`T82.110A`**: *Complicación mecánica por rotura de electrodo de marcapasos cardíaco, contacto inicial*; o **`W19.XXXA`**: *Caída no especificada, contacto inicial*).
3. **Convenciones Normativas Críticas (`Excluye 1` vs. `Excluye 2`):**
   - **`Excluye 1` (*No codificar aquí*):** Indica que las dos afecciones son **mutuamente excluyentes** (p. ej., la forma congénita frente a la forma adquirida de una misma enfermedad); **jamás pueden asignarse ambos códigos a la vez**.
   - **`Excluye 2` (*No incluido aquí*):** Indica que la afección excluida no forma parte de la definición de ese código, pero **un mismo paciente sí puede padecer ambas patologías simultáneamente**, por lo que **sí deben codificarse los dos códigos juntos** si están documentados.

### 2.3. `CIE-10-ES Procedimientos` (*basada en ICD-10-PCS*): La Nomenclatura Multiaxial de 7 Posiciones (¡Crítica en Ingeniería Biomédica!)
El segundo volumen de la `CIE-10-ES` —dedicado a codificar todas las intervenciones quirúrgicas, exploraciones de diagnóstico por imagen, medicina nuclear, radioterapia e implantación de dispositivos médicos— es técnicamente una obra de ingeniería terminológica radicalmente distinta de la clasificación de diagnósticos:

1. **Reglas Estructurales Absolutas de `CIE-10-ES Procedimientos` (¡Preguntas fijas de test!):**
   - **Longitud fija invariable:** **TODOS los códigos de `CIE-10-ES Procedimientos` tienen SIEMPRE exactamente 7 caracteres alfanuméricos**, sin puntos decimales en ninguna posición.
   - **Alfabeto de 34 valores por posición (Sin `I` ni `O`):** Cada una de las 7 posiciones puede tomar uno de **34 valores posibles**: los **10 dígitos (`0` a `9`)** y **24 letras del alfabeto inglés (`A–H`, `J–N`, `P–Z`)**. **Quedan terminantemente excluidas las letras `I` y `O`** para evitar cualquier confusión visual o informática con los dígitos **`1` (uno)** y **`0` (cero)**.
   - **Construcción sobre Tablas (`Tables`):** Los códigos no se buscan en una lista cerrada pre-impresa como los diagnósticos, sino que se **construyen posición a posición sobre las Tablas oficiales** seleccionando una fila válida tras fijar las 3 primeras posiciones.
2. **Las 16 Secciones de `CIE-10-ES Procedimientos` (`Posición 1` del código):**
   - **Sección Médico-Quirúrgica y Relacionadas (`0` a `9`):** **`0` Médico-Quirúrgica (la más grande, $> 85\%$ de los códigos)**, **`1` Obstetricia**, **`2` Colocación** (vendajes, férulas, tracciones externas), **`3` Administración** (transfusiones, quimioterapia, trombólisis), **`4` Medición y Monitorización** (cateterismo arterial, monitorización de presión intracraneal `PIC`, ECG, EEG, saturación), **`5` Asistencia y Soporte Extracorpóreo o Sistémico** (ventilación mecánica invasiva/no invasiva, balón de contrapulsación intraaórtico `BCIA`, circulación extracorpórea `CEC`, `ECMO`, hemodiálisis, marcapasos externo temporal), **`6` Terapias Extracorpóreas o Sistémicas** (litotricia extracorpórea `LEOC`, fototerapia, hiperbárica, aféresis), **`7` Osteopatía**, **`8` Otros Procedimientos** (cirugía robótica asistida, navegación quirúrgica asistida por ordenador, fecundación in vitro) y **`9` Quiropráctica**.
   - **Secciones Complementarias de Diagnóstico por Imagen y Terapia con Radiaciones (`B`, `C`, `D` — ¡Vitales para un Ingeniero Biomédico!):**
     - **`B` = Imagen (*Imaging*):** Radiología convencional, fluoroscopia, TC, RM y ecografía.
     - **`C` = Medicina Nuclear (*Nuclear Medicine*):** Gammagrafía planar, `SPECT`, `PET` y terapia metabólica con radionúclidos.
     - **`D` = Oncología Radioterápica (*Radiation Therapy*):** Teleterapia con acelerador lineal, radiocirugía estereotáctica, terapia con protones/iones pesados y braquiterapia (`LDR`/`HDR`/`PDR`).
     - **`F` = Rehabilitación Física y Audiología Diagnóstica**, **`G` = Salud Mental**, **`H` = Tratamiento de Abuso de Sustancias**.
     - **`X` = Nueva Tecnología (*New Technology*):** Sección creada para capturar de forma inmediata dispositivos biomédicos innovadores, prótesis de última generación y fármacos/terapias disruptivas recién aprobadas antes de su incorporación a las secciones generales.
3. **Significado Exacto de las 7 Posiciones en la `Sección 0 (Médico-Quirúrgica)` y en la `Sección B (Imagen)`:**

| Posición del Código (`1` a `7`) | Significado en `Sección 0` (**Médico-Quirúrgica**) | Significado en `Sección B` (**Diagnóstico por Imagen**) |Significado en `Sección D` (**Oncología Radioterápica**) |
| :---: | :--- | :--- | :--- |
| **Posición 1** | **Sección** (`0` = Médico-Quirúrgica) | **Sección** (`B` = Imagen) | **Sección** (`D` = Oncología Radioterápica) |
| **Posición 2** | **Sistema Orgánico** (p. ej., `2` Corazón y grandes vasos, `0` SNC, `S`/`R` Articulaciones) | **Sistema Orgánico** (p. ej., `0` SNC, `2` Corazón, `B` Sistema respiratorio) | **Sistema Orgánico / Zona Anatómica** |
| **Posición 3** | **Tipo de Procedimiento (*Root Operation*)**: **31 tipos estandarizados** (`B` Escisión, `T` Resección, **`R` Sustitución** [prótesis], **`H` Inserción** [marcapasos/sensor], `U` Suplemento, `1` Derivación/Bypass, `7` Dilatación [angioplastia], `5` Destrucción [ablación]) | **Tipo de Modalidad de Imagen**:<br>• `0` Radiología Simple<br>• `1` Fluoroscopia<br>• **`2` Tomografía Computarizada (`TC`)**<br>• **`3` Resonancia Magnética (`RM`)**<br>• **`4` Ecografía (Ultrasonidos)`** | **Modalidad de Radioterapia**:<br>• `0` Radiación de Haces Externos<br>• `1` **Braquiterapia**<br>• `2` Radioterapia Estereotáctica<br>• `Y` Otra Radioterapia |
| **Posición 4** | **Localización Anatómica Exacta** (p. ej., válvula aórtica, arteria coronaria una/dos, cadera derecha) | **Localización Anatómica** (p. ej., cerebro, arterias pulmonares, hígado) | **Localización de Tratamiento** |
| **Posición 5** | **Abordaje Quirúrgico (*Approach* — 7 valores)**:<br>• `0` **Abierto**<br>• `3` **Percutáneo**<br>• `4` **Endoscópico percutáneo (laparoscópico/artroscópico)**<br>• `7` Orificio natural o artificial<br>• `8` Orificio natural o artificial endoscópico<br>• `F` Orificio natural con asistencia percutánea endoscópica<br>• `X` **Externo** | **Contraste**:<br>• `0` Contraste de Alta Osmolaridad<br>• `1` Contraste de Baja Osmolaridad<br>• `Y` Otro Contraste<br>• `Z` **Sin Contraste** | **Calificador de Modalidad (Energía / Partícula)**:<br>• Fotones ($< 1\text{ MeV}$, $1\text{–}10\text{ MeV}$, $> 10\text{ MeV}$)<br>• Electrones<br>• **Protones**<br>• **Braquiterapia `HDR` vs. `LDR`** |
| **Posición 6** | **DISPOSITIVO (`Device`)** *(¡Clave en Ingeniería Biomédica!)*:<br>Solo se codifica el dispositivo que **permanece implantado en el paciente al finalizar el procedimiento** (marcapasos monocameral/bicameral, `DAI`, electrodo intracardíaco, *stent* liberador de fármaco, prótesis articular cerámica/polietileno, válvula zooplástica/sintética, neuroestimulador, o **`Z` = Ningún dispositivo**). | **Calificador 1** (p. ej., Sin contraste seguido de Con contraste, o agente específico de RM/ecografía) | **Isótopo (`Cs-137`, `Ir-192`, `I-125`, `Pd-103`)** o Ninguno (`Z`) |
| **Posición 7** | **Calificador (*Qualifier*)**: Información adicional específica (p. ej., abordaje transapical vs. transfemoral en una `TAVI`, o `Z` Ninguno) | **Calificador 2** (p. ej., guía intraoperatoria, evaluación densitometrica, o `Z` Ninguno) | **Calificador** (`Z` Ninguno) |

---

## 🔬 3. La Ontología Clínica de Referencia `SNOMED CT` y Estándares de Dominio Específico (`LOINC`, `ATC`, `EMDN/GMDN`)

### 3.1. Arquitectura Interna de `SNOMED CT` (*Systematized Nomenclature of Medicine — Clinical Terms*)
Mantenida internacionalmente por **`SNOMED International`** (organización de la que España es Estado Miembro a través del Ministerio de Sanidad, que gestiona el **Centro Nacional de Referencia de `SNOMED CT`** y publica semestralmente la **Extensión para España**), **`SNOMED CT`** es la terminología clínica integral, multilingüe y polijerárquica más completa del mundo, designada por el **Real Decreto 1093/2010 (`HCDSNS`)** y por la Red Europea de eSalud (`eHealth Network`) como el vocabulario de referencia para la Historia Clínica Electrónica.

Toda la arquitectura de `SNOMED CT` se sustenta sobre **3 Componentes Nucleares** (más los Conjuntos de Referencia), donde cada elemento individual está identificado de forma permanente e inmutable por un **`SCTID` (*SNOMED CT Identifier*)** —un número entero de entre **$6\text{ y }18\text{ dígitos}$** que incluye un identificador de espacio de nombres (*Namespace ID* de 7 dígitos para extensiones nacionales), un **identificador de partición de 2 dígitos** (`00`/`10` = Concepto, `01`/`11` = Descripción, `02`/`12` = Relación) y un **dígito de control final calculado mediante el algoritmo diedral de *Verhoeff***—:

1. **Componente 1 — Conceptos (*Concepts*):**
   - Un **Concepto** representa un significado clínico único e independiente del idioma (actualmente existen más de **$360.000\text{ conceptos activos}$** en la edición internacional).
   - Todos los conceptos descienden del concepto raíz (`138875005 |Concepto de SNOMED CT|`) y se organizan en **19 Jerarquías de Nivel Superior (*Top-Level Hierarchies*)**, entre las que destacan para la práctica clínica e ingeniería biomédica:
     - **`Hallazgo clínico` (*Clinical finding*):** Signos, síntomas y enfermedades/trastornos (p. ej., `22298006 |Infarto de miocardio (trastorno)|`).
     - **`Procedimiento` (*Procedure*):** Intervenciones quirúrgicas, exploraciones de imagen, terapias y cuidados de enfermería.
     - **`Estructura corporal` (*Body structure*):** Anatomía normal y alteraciones morfológicas (infarto, fractura, inflamación, neoplasia).
     - **`Objeto físico` (*Physical object*):** Incluye toda la jerarquía de **Dispositivos médicos (`49062001 |Dispositivo (objeto físico)|`: implantes, prótesis, catéteres, monitores, equipos de imagen)**.
     - **`Sustancia` (*Substance*)** y **`Producto farmacéutico / biológico` (*Pharmaceutical / biologic product*)**.
     - **`Entidad observable` (*Observable entity*)**, **`Organismo`**, **`Espécimen`**, **`Valor calificador`**, **`Evento`**, **`Situación con contexto explícito`** (antecedentes familiares, ausencia de hallazgo).
2. **Componente 2 — Descripciones (*Descriptions*):**
   - Vinculan términos legibles por humanos en cada idioma o dialecto con un `SCTID` de Concepto. Cada concepto posee múltiples descripciones clasificadas en tres tipos:
     - **Nombre Completamente Especificado (`FSN` — *Fully Specified Name*):** Descripción única y libre de toda ambigüedad que termina siempre con una **etiqueta semántica entre paréntesis (*Semantic Tag*)** que indica su jerarquía (p. ej., `Apendicectomía (procedimiento)` vs. `Apendicitis (trastorno)` vs. `Estructura del apéndice (estructura corporal)`).
     - **Término Preferido (*Preferred Term*):** El término clínico habitual recomendado para mostrar en la interfaz de la HCE (`IANUS`) en un idioma concreto.
     - **Sinónimos Aceptables (*Acceptable Synonyms*):** Todas las variantes léxicas, acrónimos y términos equivalentes por los que el médico puede buscar en el buscador de la HCE, apuntando todos al mismo `SCTID`.
3. **Componente 3 — Relaciones (*Relationships*):**
   - Son tripletas formales dirigidas **`(Concepto Origen — Tipo de Relación — Concepto Destino)`** que definen lógicamente cada concepto:
     - **Relaciones de Subsunción Jerárquica `Es un` (*Is a*, `SCTID 116680003`):** Conectan un concepto subtipo más específico con sus conceptos supertipo más generales, formando una **polijerarquía (grafo acíclico dirigido)** que permite agregar datos por cualquier eje clínico.
     - **Relaciones de Atributo Definitorias (*Attribute Relationships*):** Especifican las propiedades formales del concepto según el Modelo Conceptual de SNOMED CT: p. ej., en un trastorno, `Sitio del hallazgo` (*Finding site*) = *Estructura del pulmón*, `Morfología asociada` (*Associated morphology*) = *Inflamación* y `Agente causal` (*Causative agent*) = *Streptococcus pneumoniae*; en un procedimiento quirúrgico o de imagen, `Sitio del procedimiento directo`, `Método` y **`Dispositivo utilizado` (*Using device*)**.
   - Aquellos conceptos cuyas relaciones son suficientes para distinguirlos computacionalmente de cualquier otro concepto se denominan **Conceptos Completamente Definidos (*Fully Defined*)**, frente a los **Conceptos Primitivos (*Primitive*)**.

### 3.2. Pre-coordinación vs. Post-coordinación y Conjuntos de Referencia (`RefSets`)
- **Expresión Pre-coordinada:** Cuando el concepto clínico que se desea registrar ya existe como un único código `SCTID` predefinido en la terminología (p. ej., `71388002 |Procedimiento|`).
- **Expresión Post-coordinada (Gramática Composicional de SNOMED CT):** Cuando el clínico necesita expresar un nivel de detalle que no existe como concepto único prefabricado, `SNOMED CT` permite combinar en tiempo real varios códigos `SCTID` unidos por operadores lógicos (`:` para refinar atributos y `+` para intersección): p. ej., combinar el concepto *«Extracción de cuerpo extraño»* refinando su atributo *«Sitio del procedimiento»* = *«Estructura de la córnea izquierda»* y *«Dispositivo utilizado»* = *«Imán oftálmico»*.
- **Conjuntos de Referencia (`RefSets` — *Reference Sets*):** Dado que ningún servicio clínico necesita ver los $360.000$ conceptos de golpe en un desplegable, el mecanismo estándar de personalización son los **`RefSets`**:
  1. **RefSets Simples de Subconjunto:** Acotan los códigos relevantes para un servicio concreto (p. ej., *RefSet de Urgencias*, *RefSet de Anatomía Patológica*, *RefSet de Alergias* o *RefSet de Cuidados de Enfermería*).
  2. **RefSets de Idioma:** Definen cuál de los sinónimos es el término preferido en España o en gallego.
  3. **RefSets de Mapeo Cruzado (*Map RefSets*):** Tablas de correlación formal unidireccional o basada en reglas (edad, sexo, comorbilidades) para traducir automáticamente desde `SNOMED CT` hacia **`CIE-10-ES`**, **`CIAP-2`** u **`OrphaCodes`** (enfermedades raras).

### 3.3. Estándares Terminológicos de Dominio Específico: `LOINC`, `ATC` y Nomenclaturas de Dispositivos Biomédicos (`EMDN` y `GMDN`)
Para completar el ecosistema de interoperabilidad semántica en el hospital, `SNOMED CT`, `CIE-10-ES` y `CIAP-2` se articulan con cuatro estándares especializados:

1. **`LOINC` (*Logical Observation Identifiers Names and Codes* — Instituto Regenstrief):**
   - Es el estándar mundial para identificar **determinaciones analíticas de Laboratorio Clínico, Microbiología, Gasometrías, Constantes Vitales (`IHE PCD` / `FHIR Observation`) y Secciones/Catálogos de Informes de Radiología (`RSNA RadLex/LOINC Playbook`) y Documentos `HL7 CDA`**.
   - **Regla de examen (`SNOMED CT` vs. `LOINC`):** En una observación clínica estructura *Pregunta–Respuesta*, **`LOINC` codifica la «Pregunta» (qué prueba o parámetro se ha medido**, en el campo `OBX-3`), mientras que **`SNOMED CT` codifica la «Respuesta» cualitativa** (qué microorganismo o hallazgo se ha encontrado, en el campo `OBX-5`, cuando no es un valor numérico).
   - **Los 6 Ejes Formales de un Nombre `LOINC` (separados por dos puntos `:`):**
     $$\texttt{Componente/Analito} : \texttt{Propiedad} : \texttt{Tiempo} : \texttt{Sistema/Muestra} : \texttt{Escala} : \texttt{Método}$$
     1. **Componente o Analito:** Qué se mide (p. ej., *Glucosa*, * Sodio*, *Hemoglobina A1c*, *Frecuencia cardíaca*).
     2. **Propiedad o Magnitud medida:** Concentración de masa (`MCnc`), concentración molar (`SCnc`), fracción catalítica (`CCnc`), presión (`Pres`).
     3. **Aspecto Temporal (*Time*):** Puntual en un instante (`Pt` — *Point in time*) vs. acumulado en 24 horas (`24H`, como en orina de 24 h).
     4. **Sistema o Tipo de Muestra (*System/Specimen*):** Suero o plasma (`Ser/Plas`), sangre arterial (`BldA`), líquido cefalorraquídeo (`CSF`), orina (`Urine`).
     5. **Tipo de Escala (*Scale*):** Cuantitativa numérica (`Qn`), Ordinal (`Ord`: positivo/negativo, `1+`/`2+`), Nominal (`Nom`: cultivo taxonómico) o Narrativa (`Nar`: texto de informe).
     6. **Método (opcional, solo cuando altera la interpretación clínica):** Inmunoensayo, PCR en tiempo real, tira reactiva POCT, auscultación vs. arterial invasiva.
2. **`ATC` (*Anatomical Therapeutic Chemical Classification System* — OMS):**
   - Estándar para codificar principios activos y medicamentos (utilizado en **`SILICON`**, **`e-Receita`** y **`BDCAP`**). Tiene una estructura jerárquica alfanumérica de **5 Niveles y 7 Caracteres**:
     - **Nivel 1 (1 Letra):** Grupo Anatómico Principal (14 grupos: `A` Digestivo/Metabolismo, `B` Sangre, `C` Cardiovascular, `J` Antiinfecciosos sistémicos, `L` Antineoplásicos/Inmunomoduladores, `N` Sistema Nervioso, `R` Respiratorio...).
     - **Nivel 2 (2 Números):** Subgrupo Terapéutico Principal.
     - **Nivel 3 (1 Letra):** Subgrupo Farmacológico.
     - **Nivel 4 (1 Letra):** Subgrupo Químico.
     - **Nivel 5 (2 Números):** Sustancia Química / Principio Activo concreto (p. ej., **`N02BE01`** = *Paracetamol*; **`C09AA05`** = *Ramipril*). Se complementa con la **DDD (*Dosis Diaria Definida*)** como unidad técnica de medida de consumo farmacéutico.
3. **Nomenclaturas Específicas de Productos Sanitarios y Equipamiento Biomédico (`EMDN` vs. `GMDN` — ¡Pregunta clave para Ingeniero Biomédico!):**
   - **`EMDN` (*European Medical Device Nomenclature* — Nomenclatura Europea de Productos Sanitarios):** Establecida por la Comisión Europea en cumplimiento del **Artículo 26 del Reglamento (UE) 2017/745 (`MDR`) y Art. 23 del `IVDR 2017/746`** para el registro obligatorio de todos los productos sanitarios y de diagnóstico *in vitro* en la base de datos europea **`EUDAMED`** vinculada al **`UDI-DI`**. Está basada en la clasificación italiana **`CND` (*Classificazione Nazionale dei Dispositivi medici*)** y es de acceso público y gratuito. Tiene una **estructura jerárquica alfanumérica en árbol de hasta 7 niveles**: el **1.º nivel es una Letra de Categoría** (`A` Dispositivos de administración/extracción, `B` Hematología, **`C` Sistema cardiocirculatorio**, `J` Implantes activos, **`P` Dispositivos protésicos e implantables**, `W` Diagnóstico in vitro, **`Z` Equipamiento sanitario y electromédico de diagnóstico, terapia y laboratorio**), seguida de pares de dígitos de Grupo y Tipos sucesivos (hasta 13 caracteres).
   - **`GMDN` (*Global Medical Device Nomenclature* — Norma `ISO 15225`):** Nomenclatura internacional de términos preferidos de 5 dígitos numéricos utilizada históricamente por agencias como la FDA, AEMPS (alertas de vigilancia) y en catálogos de **GMAO / `XMAO`** para clasificar familias de equipamiento electromédico.

---

## 🛡️ 4. Comparativa Integral, Servidores Terminológicos (`FHIR`) y Gobernanza Semántica

### 4.1. Tabla Comparativa Maestra de los Estándares de Codificación Sanitaria

| Estándar / Clasificación | Organismo Mantenedor | Ámbito Principal de Uso en España / SERGAS | Arquitectura y Formato del Código | Propósito Nuclear |
| :--- | :--- | :--- | :--- | :--- |
| **`CIAP-2` (`ICPC-2`)** | **`WONCA`** | **Atención Primaria** (`IANUS` Hoja de Problemas y **`BDCAP`**). | **Biaxial de 3 caracteres (`1 Letra + 2 Dígitos`)**: 17 capítulos anatómicos $\times$ 7 componentes (`01–29` síntomas, `30–69` procesos, `70–99` enfermedades). | Clasificar **Episodios de Atención** (motivos de consulta, procesos y problemas de salud en AP). |
| **`CIE-10-ES Diagnósticos`** | **OMS / Ministerio de Sanidad** (`ICD-10-CM`) | **Atención Hospitalaria / Especializada** (**`RAE-CMBD`** `RD 69/2015`, urgencias, mortalidad). | **Monoaxial de `3 a 7` caracteres alfanuméricos** (1.º letra, punto tras el 3.º, lateralidad, comodín **`X`** y 7.º carácter de episodio `A`, `D`, `S`). | Estadística de morbilidad/mortalidad, casuística **`APR-GRD`** y estratificación **`GMA`**. |
| **`CIE-10-ES Procedimientos`** | **Ministerio de Sanidad** (`ICD-10-PCS`) | **Atención Hospitalaria / Especializada** (**`RAE-CMBD`** Quirófano, Intervencionismo, Imagen, RT). | **Multiaxial de exactamente `7` caracteres alfanuméricos** ($34$ valores/posición, **sin `I` ni `O`**). 16 secciones (`0` MQ, `B` Imagen, `C` MN, `D` RT, `X` Nueva Tec.). | Codificación exhaustiva de procedimientos, abordajes, modalidades de imagen y **dispositivos implantados (Posición 6)**. |
| **`SNOMED CT`** | **`SNOMED International`** + CNR España | **Historia Clínica Electrónica (`IANUS`, `HCDSNS`, `MyHealth@EU`)** e informes estructurados. | **Ontología polijerárquica** con **`SCTID`** ($6\text{–}18$ dígitos): **Conceptos** (19 jerarquías), **Descripciones** (`FSN` + sinónimos) y **Relaciones** (`Es un` + atributos). | **Terminología clínica de referencia** en el punto de atención, pre/post-coordinación y soporte a la decisión (`CDSS`). |
| **`LOINC`** | **Regenstrief Institute** | **Laboratorio (`LIS`)**, Microbiología, Constantes Vitales (`IHE PCD`) y secciones `CDA`. | Código numérico con guion (`NNNNN-N`) y nombre formal de **6 ejes separados por `:`** (*Analito:Propiedad:Tiempo:Muestra:Escala:Método*). | Identificar inequívocamente la **prueba u observación medida** («la pregunta»). |
| **`ATC`** | **OMS** (*WHOCC*) | **Farmacia Hospitalaria (`SILICON`)**, Receta Electrónica (**`e-Receita`**) y `BDCAP`. | **Jerárquico de 5 niveles y `7` caracteres** (`L NN L L NN`: Anatómico, Terapéutico, Farmacológico, Químico, Principio Activo). | Clasificación farmacológica y estudios de utilización de medicamentos (**`DDD`**). |
| **`EMDN` / `GMDN`** | **Comisión Europea (`MDR`)** / GMDN Agency | **`EUDAMED`**, compras/logística (**`LOGAS`**) e inventario biomédico (**`XMAO`**). | **`EMDN`**: árbol alfanumérico de hasta 7 niveles (`Z...` equipos electromédicos, `P`/`J` implantes). **`GMDN`**: código numérico de 5 dígitos. | Catalogación regulatoria, vigilancia y trazabilidad de **productos sanitarios y equipos biomédicos**. |

### 4.2. Arquitectura de un Servidor Terminológico Corporativo (`HL7 FHIR Terminology Service`) y Regla de Oro del Ciclo de Vida
Para evitar que cada aplicación hospitalaria (`IANUS`, `SIHGA`, `SILICON`, `LIS`, `RIS`, `XMAO`) mantenga copias locales desactualizadas o contradictorias de los catálogos de códigos, la arquitectura moderna de salud digital centraliza la gestión semántica en un **Servidor Terminológico Corporativo** accesible mediante la especificación estándar **`HL7 FHIR Terminology Service`**:
- Gestiona tres recursos maestros: **`CodeSystem`** (define el sistema de codificación completo y sus propiedades), **`ValueSet`** (selecciona el subconjunto de códigos permitidos para un campo o formulario concreto) y **`ConceptMap`** (define las reglas de traducción o mapeo entre dos sistemas distintos, p. ej., `SNOMED CT` $\rightarrow$ `CIE-10-ES` o `CIAP-2` $\rightarrow$ `CIE-10-ES`).
- Expone **4 operaciones RESTful estándar de examen**:
  1. **`$lookup`:** Dado un código (p. ej., un `SCTID` o un código `CIE-10-ES`), devuelve su descripción oficial, jerarquía y propiedades.
  2. **`$expand`:** Expande dinámicamente un `ValueSet` aplicando filtros de búsqueda por texto predictivo para alimentar los cuadros de búsqueda de los médicos en `IANUS`.
  3. **`$validate-code`:** Verifica en tiempo real en el Bus de Integración si un código recibido en un mensaje `HL7` o documento `CDA/FHIR` pertenece válidamente al `ValueSet` exigido.
  4. **`$translate`:** Ejecuta el mapeo automático de un código origen a un código destino utilizando un `ConceptMap`.
- **Regla de Oro de Mantenimiento Terminológico (Prohibición de Borrado Físico):** Cuando una nueva edición de `SNOMED CT`, `CIE-10-ES` o `LOINC` retira un código antiguo, **jamás se borra físicamente de la base de datos del servidor terminológico** (pues dejaría huérfanos e ilegibles los informes históricos de hace 10 años en `IANUS`), sino que se cambia su estado a **`Inactivo / Deprecado` (*Inactive*)** manteniendo un puntero histórico de sustitución (*Same-As / Replaced-By*) hacia el nuevo código vigente.

---

## 🏥 5. Implantación, Integración y Casuística en el Servicio Gallego de Salud (SERGAS)

### 5.1. El Paradigma de Doble Capa Semántica en `IANUS 5` y en las 7 Áreas Sanitarias
El Servicio Gallego de Salud aplica el principio internacional de **«Capturar una vez en el lenguaje clínico natural del profesional y derivar múltiples salidas estadísticas y de gestión»**:
- **En los Centros de Salud y `PAC` (Atención Primaria):** Cuando el médico de familia o pediatra abre un nuevo episodio en la **Hoja de Problemas de `IANUS 5`**, utiliza el buscador asistido vinculado a **`CIAP-2`** (y términos clínicos mapeados a **`SNOMED CT`**), lo que permite simultáneamente estructurar la historia longitudinal del paciente, alimentar la muestra nacional de **`BDCAP`** y aportar los diagnósticos ambulatorios al algoritmo autonómico de estratificación **`GMA`**.
- **En los Hospitales del SERGAS (Atención Especializada):** Los clínicos registran problemas, alergias, informes estructurados y procedimientos sobre vocabularios de interfaz basados en **`SNOMED CT`** y **`CIE-10-ES`**, mientras que las Unidades de Codificación de los **Servicios de Admisión y Documentación Clínica (`SADC`)** realizan la codificación normativa exhaustiva de los episodios de hospitalización, CMA, hospital de día y procedimientos complejos en **`CIE-10-ES Diagnósticos y Procedimientos`** para el **`RAE-CMBD`** y el cálculo de **`APR-GRD`**.

### 5.2. Interoperabilidad Semántica en Laboratorio, Farmacia e Ingeniería Biomédica (`XMAO` y `LOGAS`)
- **Laboratorios y Microbiología (`LIS`):** Los catálogos de determinaciones analíticas de las 7 Áreas Sanitarias están normalizados y mapeados a **`LOINC`** (y `SNOMED CT` para microorganismos y muestras), garantizando que una determinación de creatinina, troponina o PCR realizada en cualquier hospital de Galicia se represente en la misma gráfica evolutiva de `IANUS 5` y se publique correctamente en la **`HCDSNS`** (`RD 1093/2010`).
- **Farmacia (`SILICON` y `e-Receita`):** Todos los medicamentos se vinculan al Nomenclátor oficial de facturación de la AEMPS/Ministerio (Código Nacional) y a la clasificación **`ATC`** de 5 niveles.
- **Ingeniería Biomédica (`XMAO`) y Logística (`LOGAS`):** En la catalogación del inventario de la base instalada biomédica en **`XMAO`** (`Tema 71` y `Tema 73`) y del catálogo maestro de productos sanitarios e implantes en **`LOGAS`** (`Tema 70`), la codificación se alinea con la **Nomenclatura Europea de Productos Sanitarios `EMDN`** (Categoría `Z` para equipamiento electromédico y Categorías `C`, `J`, `P` para implantes) y con el identificador único **`UDI`**, permitiendo cruzar la trazabilidad física del implante con la **Posición 6 (Dispositivo) del código `CIE-10-ES Procedimientos`** registrado en el episodio quirúrgico del paciente.

---

## ⚡ 6. Síntesis de Alto Rendimiento, Tabla Resumen y Puntos Críticos de Examen A1

### 6.1. Tabla Maestra de Cifras, Umbrales y Artículos Clave

| Sistema / Concepto | Cifra / Regla Estructural Exacta de Examen | Detalle Crítico para no Fallar en el Test |
| :--- | :--- | :--- |
| **Estructura de `CIAP-2` (`WONCA`)** | **3 caracteres alfanuméricos (`1 Letra + 2 Dígitos`)** | **17 capítulos alfabéticos** (por aparato orgánico) $\times$ **7 componentes numéricos**: `01–29` signos/síntomas, `30–69` procedimientos/procesos y **`70–99` diagnósticos/enfermedades**. |
| **Estructura de `CIE-10-ES Diagnósticos`** | **`3 a 7` caracteres alfanuméricos** (con punto decimal tras el 3.º) | 21 capítulos. 1.º carácter es siempre letra. Usa comodín **`X` (*placeholder*)** para rellenar posiciones vacías cuando existe **7.º carácter de episodio** (`A` inicial, `D` sucesivo, `S` secuela). |
| **Estructura de `CIE-10-ES Procedimientos`** | **Exactamente `7` caracteres alfanuméricos** (sin punto decimal) | $34$ valores posibles por posición (`0–9` y `A–Z` **excepto `I` y `O`**). En Sección `0` (Médico-Quirúrgica): `1` Sección, `2` Sistema Orgánico, `3` **Tipo Procedimiento**, `4` Localización, `5` **Abordaje**, **`6` Dispositivo**, `7` Calificador. |
| **Secciones de Imagen/Radiaciones en `CIE-10-ES PCS`** | **`B` = Imagen · `C` = Medicina Nuclear · `D` = Radioterapia · `X` = Nueva Tecnología** | En Sección `B` (Imagen), la **Posición 3** define la modalidad: `0` RX simple, `1` Fluoroscopia, **`2` TC**, **`3` RM**, **`4` Ecografía**, y la **Posición 5** el contraste. |
| **Arquitectura de `SNOMED CT`** | **Ontología Polijerárquica** con **`SCTID`** ($6\text{–}18$ dígitos, control *Verhoeff*) | **3 Componentes:** **1) Conceptos** ($>360.000$ en **19 jerarquías**), **2) Descripciones** (**`FSN`** con etiqueta semántica, Preferido y Sinónimos) y **3) Relaciones** (**`Es un` `116680003`** + Atributos definitorios). |
| **Estructura de `LOINC` y `ATC`** | **`LOINC` = 6 ejes (`:`)** · **`ATC` = 5 niveles y 7 caracteres** | `LOINC`: *Componente : Propiedad : Tiempo : Muestra/Sistema : Escala : Método*. `ATC`: Anatómico (1L) $\rightarrow$ Terapéutico (2N) $\rightarrow$ Farmacológico (1L) $\rightarrow$ Químico (1L) $\rightarrow$ Principio activo (2N). |
| **Nomenclatura Regulatoria de Productos Sanitarios (`MDR`)** | **`EMDN`** (*Art. 26 Reglamento UE 2017/745*) y **`GMDN`** | `EMDN` es obligatoria en `EUDAMED` (basada en la italiana `CND`, árbol de hasta 7 niveles: **`Z`** = equipamiento electromédico; **`J`** = implantes activos; **`P`** = prótesis). |

### 6.2. Puntos Críticos y Trampas Habituales de Tribunal (Tipo Test y Supuestos Prácticos)
1. **¡Trampa clásica entre `CIE-10-ES Diagnósticos` y `CIE-10-ES Procedimientos`!**
   - Si preguntan por **`CIE-10-ES Diagnósticos`**, la longitud es variable de **3 a 7 caracteres**, lleva punto decimal después del tercer carácter y utiliza la letra **`X`** como marcador de posición (*placeholder*).
   - Si preguntan por **`CIE-10-ES Procedimientos`**, la longitud es **SIEMPRE fija de 7 caracteres**, **no lleva punto decimal** y **jamás utiliza las letras `I` ni `O`** para no confundirlas con `1` y `0`.
2. **¡Trampa de Ingeniería Biomédica sobre la Posición 6 de `CIE-10-ES Procedimientos` (Dispositivo)!** En la Posición 6 de la Sección `0` **solo se codifica un dispositivo si permanece en el cuerpo del paciente una vez finalizado el procedimiento quirúrgico** (p. ej., un marcapasos, un *stent*, una prótesis de cadera o un drenaje permanente). El instrumental quirúrgico, los catéteres guía, los balones de angioplastia que se retiran al terminar o el robot quirúrgico **no se codifican como Dispositivo en la Posición 6** (si no queda nada implantado, la Posición 6 toma el valor **`Z` = Ningún dispositivo**).
3. **¡Trampa entre `Excluye 1` y `Excluye 2` en `CIE-10-ES`!** **`Excluye 1`** significa *«nunca codificar juntos»* (son mutuamente excluyentes, como congénito vs. adquirido). **`Excluye 2`** significa *«no incluido en este código, pero sí pueden codificarse ambos juntos si el paciente presenta las dos patologías»*.
4. **¡Trampa sobre por qué `SNOMED CT` es una Ontología y NO una simple Clasificación Estadística!** A diferencia de la `CIE-10` (que es monoaxial y usa bolsas residuales «otros / no especificado» para cuadrar estadísticas), **`SNOMED CT` es polijerárquica** (un concepto puede tener múltiples padres a través de relaciones `Es un`), define formalmente los conceptos mediante lógica descriptiva y permite **post-coordinación**, sin bolsas residuales artificiales.
5. **¡Trampa en `CIAP-2` sobre los dígitos numéricos!** En `CIAP-2`, un código cuyos dos dígitos están entre **`01` y `29`** representa siempre un **signo, síntoma o queja** (Componente 1), mientras que un código cuyos dos dígitos están entre **`70` y `99`** representa un **diagnóstico o enfermedad** (Componente 7).
