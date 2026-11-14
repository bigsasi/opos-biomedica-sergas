# Tema 41 — Información sanitaria nacional para análisis y planificación: SIAP, BDCAP y CMBD/RAE-CMBD (contenidos, definiciones, periodicidad y comparabilidad). Estratificación poblacional tipo GMA: conceptos básicos y aplicaciones.

> - **Parte del Programa:** Parte Específica (74 Temas · Orden DOG #41 de 74) — Ejercicio 1.º Eliminatorio
> - **Bloque Temático SERGAS:** Bloque 07 — Salud Digital, Sistemas Corporativos, Interoperabilidad, HCE, Analítica, IoMT, Citación y Logística (`Fase 2: Subir Nota · Relación 1:1`)
> - **Marco Normativo y Técnico Nuclear:** Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud (Art. 53: Sistema de Información Sanitaria del SNS); **Real Decreto 69/2015, de 6 de febrero**, por el que se regula el Registro de Actividad de Atención Sanitaria Especializada (**`RAE-CMBD`**, BOE núm. 35, de 10/02/2015); Normas metodológicas oficiales del Ministerio de Sanidad para el **Sistema de Información de Atención Primaria (`SIAP`)**, la **Base de Datos Clínicos de Atención Primaria (`BDCAP`)**, los **Grupos Relacionados por el Diagnóstico (`APR-GRD`)** y la **Estrategia para el Abordaje de la Cronicidad en el SNS (`GMA` — Grupos de Morbilidad Ajustados)**; Orden EFP/1216/2019 (Módulo Profesional 1592).
> - **Sistemas y Entorno SERGAS:** Servicios de Admisión y Documentación Clínica (`SADC`) de las 7 Áreas Sanitarias, `SIHGA`, `IANUS 5` (visor integrado de estrato y complejidad `GMA`), `HEXE` (cuadros de mando casuísticos `GRD`/`RAE-CMBD`), `SILICON` / `e-Receita` y plataforma de telemonitorización domiciliaria `TELEA`.

---

## 🎯 0. Alcance Oficial del Epígrafe y Cruce con Otras Oposiciones del SERGAS

### 0.1. Desglose de Subepígrafes según Publicación Oficial del DOG (Resolución de 13/04/2026)
El presente tema aborda los grandes sistemas nacionales de información sanitaria que sustentan la planificación estratégica, el análisis epidemiológico, la evaluación del desempeño hospitalario, la asignación de recursos y el dimensionamiento tecnológico en el Sistema Nacional de Salud (SNS) y en el Servicio Gallego de Salud (SERGAS). El epígrafe oficial exige el dominio técnico y normativo de dos bloques complementarios:
1. **Información sanitaria nacional para análisis y planificación (`SIAP`, `BDCAP` y `CMBD/RAE-CMBD`):** Análisis exhaustivo de sus contenidos, definiciones normativas, unidades de medida, periodicidad de actualización, cobertura poblacional/asistencial y reglas metodológicas de comparabilidad interautonómica e internacional, con especial énfasis en el **Real Decreto 69/2015 (`RAE-CMBD`)**, sus **6 modalidades de contacto**, sus **31 variables**, el marcador **`POA` (*Present On Admission*)** y los indicadores de ajuste casuístico mediante **`GRD` (`APR-GRD`)**.
2. **Estratificación poblacional tipo `GMA` (*Grupos de Morbilidad Ajustados*):** Conceptos básicos de ajuste de riesgo poblacional, estructura matemática de la matriz bidimensional del agrupador público español `GMA` ($7\text{ categorías de estado de morbilidad} \times 5\text{ niveles de complejidad} = 31\text{ grupos clínicos}$) y sus aplicaciones operativas sobre la **Pirámide de Kaiser Permanente** en la gestión de pacientes crónicos complejos y telemonitorización en el SERGAS.

### 0.2. Cruce Verificado 1:1 con Otras Categorías del SERGAS (`cruce_temarios_sergas.md`)

| Categorías con las que coincide | Epígrafes Equivalentes en Otras Convocatorias del SERGAS | Grado de Solapamiento y Enfoque de Tribunal |
| :--- | :--- | :--- |
| **Grupo Técnico / Gestión TIC** | • **TIC Superior (A1):** Tema 23. Sistemas de información para la salud pública. Sistemas de Información y sistemas de gestión de pacientes en atención primaria y hospitales. Sistema poblacional y tarjeta sanitaria. Sistemas de gestión de recursos humanos. Sistemas de gestión económica y suministros.<br>• **TIC Gestión (A2):** Tema 15. Sistemas de información para la salud pública. Sistemas de información y sistemas de gestión de pacientes en atención primaria y hospitales. Sistema poblacional y tarjeta sanitaria. Sistemas de gestión de recursos humanos. Sistemas de gestión económica y suministros.<br>• **TIC Especialista (C1):** Tema 10. Sistemas de información para la salud pública. Sistemas de información y sistemas de gestión de pacientes en atención primaria y hospitales... | **Alto (75%)**: Cubre los sistemas de información estadística y de salud pública del SNS, los sistemas de información clínica y gestión de pacientes en atención primaria (`SIAP`, `BDCAP`) y hospitales (`CMBD/RAE-CMBD`), y la estratificación sobre la base poblacional de tarjeta sanitaria (`GMA`). |

---

## 📖 1. El Sistema de Información Sanitaria del SNS (`Ley 16/2003`) y los Sistemas de Información de Atención Primaria (`SIAP` y `BDCAP`)

### 1.1. Marco Legal del Sistema de Información Sanitaria del SNS (`Art. 53 Ley 16/2003`)
El **Artículo 53 de la Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud**, encomienda al Ministerio de Sanidad —previo acuerdo del Consejo Interterritorial del Sistema Nacional de Salud (`CISNS`)— el establecimiento de un **Sistema de Información Sanitaria del SNS (`SIS-SNS`)** que garantice la disponibilidad de la información y la comunicación recíprocas entre las Administraciones sanitarias. Sus objetivos legales son cuatro: **1) Autoridades sanitarias:** aportar información para la planificación, evaluación de políticas y comparación nacional e internacional (OCDE, OMS, Eurostat); **2) Profesionales:** facilitar la toma de decisiones clínicas basadas en la evidencia; **3) Ciudadanos:** fomentar el autocuidado y el conocimiento del sistema; y **4) Organizaciones y centros:** proporcionar indicadores de gestión, calidad y eficiencia.

Dentro de este marco e incluidos en el **Plan Estadístico Nacional**, los tres pilares de información asistencial del SNS son el **`SIAP`** y la **`BDCAP`** (para el nivel de Atención Primaria) y el **`RAE-CMBD`** (para el nivel de Atención Especializada/Hospitalaria).

### 1.2. `SIAP` (*Sistema de Información de Atención Primaria*): Contenidos, Definiciones, Periodicidad y Comparabilidad
1. **Definición y Naturaleza:** El **`SIAP`** es la operación estadística oficial del Ministerio de Sanidad y las Comunidades Autónomas que recoge información **agregada (macrodatos administrativos y de actividad, no microdatos clínicos individuales)** sobre los recursos estructurales, la población protegida asignada, la oferta de servicios y la actividad asistencial desarrollada en el conjunto de los centros públicos de **Atención Primaria** del Sistema Nacional de Salud.
2. **Ámbito y Cobertura:** Es una estadística **censal exhaustiva ($100\%$ de cobertura)** de toda la red pública de Atención Primaria de las 17 Comunidades Autónomas e INGESA (Ceuta y Melilla), abarcando las Áreas de Salud, las Zonas Básicas de Salud (`ZBS`), los Centros de Salud (`CS`), los Consultorios Locales (`CL`) y los dispositivos de urgencias extrahospitalarias (**Puntos de Atención Continuada — `PAC`** / Servicios de Urgencias de Atención Primaria `SUAP`).
3. **Contenidos Estructurados en 4 Módulos:**
   - **Módulo 1 — Población Asignada:** Número de personas con **Tarjeta Sanitaria Individual (`TSI`)** asignadas a cada Zona Básica de Salud y centro, desagregadas por sexo y grupos quinquenales de edad (con especial desglose en edad pediátrica $0\text{–}14\text{ años}$ y mayores de $65$ y $75\text{ años}$).
   - **Módulo 2 — Infraestructura y Cartera de Servicios:** Número y tipología de Centros de Salud y Consultorios Locales, dotación de equipamiento diagnóstico en AP (ecógrafos, retinógrafos, espirómetros, electrocardiógrafos, cirugía menor) y programas de la cartera de servicios implantados.
   - **Módulo 3 — Recursos Humanos y Ratios de Asignación (*Cupos/Contingentes*):** Efectivos de personal por categoría profesional (**Medicina de Familia, Pediatría de AP, Enfermería, Matronas, Fisioterapeutas, Odontólogos, Farmacéuticos de AP, Trabajadores Sociales y Personal Administrativo**) y cálculo del **cupo medio (TSI asignadas por profesional)**.
   - **Módulo 4 — Actividad Asistencial Anual (Ordinaria y Urgente):** Número total de consultas realizadas (en el centro, en el domicilio del paciente y teleconsultas/telefónicas) desglosadas por categoría profesional, así como las atenciones en Puntos de Atención Continuada (`PAC`).
4. **Definiciones y Fórmulas Matemáticas de Indicadores del `SIAP` (¡Pregunta frecuente de examen!):**
   - **Frecuentación General o por Categoría ($\text{consultas / habitante}\cdot\text{año}$):** Mide la utilización media anual del servicio por cada ciudadano asignado:
     $$\text{Frecuentación Anual} = \frac{\text{N.º Total de Consultas Anuales (Centro + Domicilio + Telefónicas)}}{\text{Población con TSI Asignada}}$$
     *(Valores típicos en el SNS/SERGAS: $\approx 5,0\text{–}5,8\text{ consultas/hab}\cdot\text{año}$ en Medicina de Familia y $\approx 3,2\text{–}3,8$ en Enfermería).*
   - **Presión Asistencial Media Diaria ($\text{pacientes / profesional}\cdot\text{día hábil}$):** Mide la carga de trabajo diaria real de cada facultativo o enfermero:
     $$\text{Presión Asistencial} = \frac{\text{N.º Total de Consultas Anuales de la Categoría}}{\text{N.º de Profesionales Equivalentes} \times \text{N.º de Días Hábiles Trabajados al Año}}$$
5. **Periodicidad y Comparabilidad:** Su periodicidad oficial de consolidación y publicación es **ANUAL** (los datos de recursos humanos, centros y población asignada se refieren a fecha de corte **31 de diciembre** de cada año, mientras que los datos de actividad acumulan del **1 de enero al 31 de diciembre**). Para garantizar la **comparabilidad** entre CCAA con estructuras organizativas distintas, el Ministerio aplica un manual de definiciones normalizadas que homologa las figuras profesionales y separa estrictamente las consultas ordinarias de las urgencias de `PAC`.

### 1.3. `BDCAP` (*Base de Datos Clínicos de Atención Primaria*): Contenidos, Definiciones, Periodicidad y Comparabilidad
Mientras que el `SIAP` responde a *«cuántos centros, cuántos médicos y cuántas consultas totales se hacen»*, carece de información sobre *«qué enfermedades sufren los pacientes y qué medicamentos o pruebas reciben»*. Para cubrir ese vacío clínico nació la **`BDCAP`**:
1. **Definición y Diseño Metodológico Muestral ($\approx 10\%$ de la población):**
   - La **`BDCAP`** es una base de datos nacional de **microdatos clínicos longitudinales disociados/anonimizados a nivel de individuo**, diseñada para conocer la **morbilidad atendida, el proceso asistencial y el uso de recursos diagnósticos y terapéuticos en Atención Primaria**.
   - **Diferencia crítica frente a `SIAP` y `RAE-CMBD` (¡Pregunta fija de test!):** Mientras que `SIAP` y `RAE-CMBD` son registros **censales ($100\%$)**, la **`BDCAP` se construye mediante una muestra aleatoria estratificada representativa del $\approx 10\%$ de la población con Tarjeta Sanitaria Individual (`TSI`) de cada Comunidad Autónoma** (lo que equivale a más de **$4,7\text{ millones de personas}$** en toda España, manteniendo un diseño de panel longitudinal donde los mismos individuos anonimizados se siguen año tras año, renovando nacimientos y bajas).
2. **Contenidos y Variables Registradas por Individuo en `BDCAP`:**
   - **Variables Sociodemográficas:** Edad, sexo, tamaño del municipio de residencia, país de origen, situación laboral/activa o pensionista, **nivel de renta / código de aportación farmacéutica (`TSI 001` a `TSI 005`)**.
   - **Problemas de Salud Activos y Contactos:** Todos los episodios y problemas de salud registrados en la HCE de Atención Primaria (`IANUS` en Galicia) durante el año de estudio, codificados en **`CIAP-2`** (con tablas de conversión a `CIE-10-ES` y `SNOMED CT`).
   - **Procedimientos Diagnósticos, Terapéuticos e Interconsultas:** Peticiones de laboratorio, pruebas de imagen y derivaciones realizadas desde AP hacia las distintas especialidades hospitalarias.
   - **Prescripción y Facturación Farmacéutica:** Todos los envases y **Dosis Diarias Definidas (`DDD`)** prescritos y dispensados en receta oficial, clasificados según el código **`ATC`** de 5 niveles.
   - **Parámetros Biológicos de Seguimiento:** Variables clínicas seleccionadas (presión arterial, índice de masa corporal `IMC`, hemoglobina glicosilada $\text{HbA}_{1\text{c}}$, perfil lipídico, filtrado glomerular y hábito tabáquico).
3. **Periodicidad y Reglas de Comparabilidad:** Su periodicidad es **ANUAL**. Para asegurar la **comparabilidad** epidemiológica entre Comunidades Autónomas con pirámides demográficas muy dispares (p. ej., una población gallega muy envejecida frente a poblaciones más jóvenes), la `BDCAP` publica tanto tasas brutas por $1.000\text{ personas asignadas}$ como **tasas estandarizadas por edad (método directo sobre la población estándar europea)** y distingue entre **prevalencia registrada** (problemas crónicos abiertos históricos) y **prevalencia atendida en el año** (problemas que han generado al menos un contacto, receta o prueba en el año natural).

---

## ⚙️ 2. El Registro de Actividad de Atención Sanitaria Especializada (`CMBD / RAE-CMBD` — `Real Decreto 69/2015`)

### 2.1. Evolución del Antiguo `CMBD` al `RAE-CMBD` (`Real Decreto 69/2015, de 6 de febrero`)
En 1987, el Consejo Interterritorial del SNS aprobó la implantación del **Conjunto Mínimo Básico de Datos (`CMBD`) al alta hospitalaria**, inspirado en el *Uniform Hospital Discharge Data Set* (`UHDDS`) estadounidense y codificado durante casi tres décadas mediante la clasificación `CIE-9-MC`. Sin embargo, la ambulatorización de la medicina moderna (cirugía sin ingreso, hospitales de día oncológicos y biológicos, radiología intervencionista, hemodinámica y endoscopia terapéutica) dejó obsoleto un registro que solo capturaba pacientes ingresados en cama convencional o CMA.

Por ello, se promulgó el **Real Decreto 69/2015, de 6 de febrero, por el que se regula el Registro de Actividad de Atención Sanitaria Especializada (`RAE-CMBD`)**, publicado en el BOE núm. 35 de 10 de febrero de 2015 y **de aplicación obligatoria en toda España desde el 1 de enero de 2016**, introduciendo cuatro cambios históricos:
1. **Cambio de denominación y alcance:** Pasa a denominarse **`RAE-CMBD`** (*Registro de Actividad de Atención Sanitaria Especializada*, sustentado en el Conjunto Mínimo Básico de Datos).
2. **Ámbito subjetivo universal (`Art. 3 RD 69/2015`):** Es **obligatorio para TODOS los hospitales y centros ambulatorios de atención especializada, tanto PÚBLICOS como PRIVADOS**, ubicados en el territorio nacional.
3. **Sustitución del estándar de codificación (`Anexo I RD 69/2015`):** Sustituye la antigua `CIE-9-MC` por la **`CIE-10-ES` (*Clasificación Internacional de Enfermedades, 10.ª Revisión, Modificación Clínica Española*, dividida en `CIE-10-ES Diagnósticos` y `CIE-10-ES Procedimientos`)**, más `CIE-O-3` para morfología de neoplasias.
4. **Introducción de los Marcadores `POA` (*Present On Admission* — Presente al Ingreso)** y ampliación a **31 variables normalizadas**.

### 2.2. Unidad de Registro: El `Contacto` y las 6 Modalidades Asistenciales (`Art. 6 RD 69/2015`)
La unidad básica de registro del `RAE-CMBD` es el **`Contacto`**, definido en el **Anexo II del `RD 69/2015`** como la *«atención sanitaria prestada a un paciente bajo una misma modalidad asistencial y de forma ininterrumpida por un proveedor de atención sanitaria especializada»*. Según el **Artículo 6 del `RD 69/2015`**, están obligadas a registrarse en el `RAE-CMBD` las siguientes **6 modalidades de contacto asistencial**:
1. **`a)` Hospitalización Convencional:** Episodios con ingreso en cama de hospitalización (cuando el paciente ha permanecido ingresado o se le ha asignado cama con orden de ingreso, con independencia de que fallezca o sea trasladado el mismo día).
2. **`b)` Hospitalización a Domicilio (`HADO`):** Atención de rango hospitalario prestada en el domicilio del paciente por equipos hospitalarios específicos.
3. **`c)` Hospital de Día Médico:** Episodios sin pernocta para administración de tratamientos complejos (quimioterapia, inmunoterapia biológica, transfusiones, terapias intravenosas) o vigilancia estrecha.
4. **`d)` Cirugía Ambulatoria (`CMA` — Cirugía Mayor Ambulatoria):** Procedimientos quirúrgicos realizados en quirófano (con anestesia general, locorregional o local con sedación) que requieren cuidados postoperatorios de corta duración sin ingreso en cama de hospitalización.
5. **`e)` Procedimientos Ambulatorios de Especial Complejidad:** Exploraciones diagnósticas o terapéuticas invasivas realizadas sin ingreso en gabinetes especializados (hemodinámica y cardiología intervencionista, electrofisiología, radiología vascular e intervencionista, colangiopancreatografía retrógrada endoscópica `CPRE`, broncoscopia intervencionista, litotricia extracorpórea, radioterapia y braquiterapia).
6. **`f)` Urgencias Hospitalarias:** Contactos atendidos en los Servicios de Urgencias hospitalarios (cuya implantación completa se regula de forma progresiva por el CISNS).

### 2.3. Las 31 Variables Oficiales del `RAE-CMBD` (`Art. 5 y Anexo I del RD 69/2015`) y Definiciones Clínicas
El **Artículo 5.2 y el Anexo I del `Real Decreto 69/2015`** fijan exactamente **31 variables** que conforman la estructura de datos del registro:

| Bloque Funcional | N.º y Nombre Exacto de las Variables Oficiales (`Anexo I RD 69/2015`) | Reglas Técnicas y Definiciones de Examen (`Anexo II RD 69/2015`) |
| :--- | :--- | :--- |
| **I. Identificación y Demografía del Paciente (Vars. 1 a 8)** | **1.** Tipo de código de identificación personal (`CIP-SNS`, `CIP autonómico`).<br>**2.** Código de identificación personal.<br>**3.** Número de historia clínica (`NHC`).<br>**4.** Fecha de nacimiento.<br>**5.** Sexo (`1` Varón, `2` Mujer, `3` Indeterminado, `9` Desconocido).<br>**6.** País de nacimiento (ISO 3166-1 alfa-3).<br>**7.** Código postal de residencia.<br>**8.** Municipio de residencia (código INE). | Permite enlazar longitudinalmente los reingresos de un mismo paciente en cualquier hospital del SNS sin revelar su nombre en las explotaciones estadísticas. |
| **II. Episodio Administrativo y Continuidad (Vars. 9 a 19)** | **9.** Régimen de financiación (SNS público, mutualidades MUFACE/ISFAS/MUGEJU, tráfico, accidentes laborales, privado).<br>**10.** Fecha y hora de inicio de la atención.<br>**11.** Fecha y hora de la orden de ingreso.<br>**12.** Tipo de contacto (`1` Hosp, `2` HADO, `3` HDía, `4` CMA, `5` Proc. Complejo, `6` Urgencias).<br>**13.** Tipo de visita (`1` inicial, `2` sucesiva).<br>**14.** Procedencia (AP, urgencias propio centro, otro hospital, iniciativa propia).<br>**15.** Circunstancias de la atención (`1` **Urgente**, `2` **Programada**).<br>**16.** Servicio responsable de la atención.<br>**17.** Fecha y hora de finalización de la atención (alta).<br>**18.** Tipo de alta (`1` Domicilio, `2` Traslado a otro hospital, `3` Traslado a centro sociosanitario, `4` **Alta voluntaria**, `5` **Fuga**, `6` **Éxitus / Fallecimiento**).<br>**19.** Dispositivo de continuidad asistencial. | La diferencia entre `Fecha de finalización (17)` y `Fecha de inicio (10)` determina los **Días de Estancia** del episodio (si ingresa y se va el mismo día, a efectos de cálculo de estancias computa como $0$ o $1$ día según el estándar del agrupador). |
| **III. Quirófano y Críticos (Vars. 20 a 22)** | **20.** Fecha y hora de intervención (de la primera intervención quirúrgica del episodio).<br>**21.** Ingreso en Unidad de Cuidados Intensivos (`UCI`: `1` Sí, `2` No).<br>**22.** Días de estancia en `UCI` (suma de días en unidades críticas: UCI, Reanimación, Coronarias, Quemados, UCI Neonatal/Pediátrica). | Permite calcular la **Estancia Preoperatoria** (`Var. 20 - Var. 10`), indicador clave de eficiencia diagnóstica y programación quirúrgica. |
| **IV. Diagnósticos, Marcadores `POA` y Procedimientos (Vars. 23 a 29)** | **23. Diagnóstico Principal (`DP`, 1 código en `CIE-10-ES Diagnósticos`).**<br>**24. Marcador `POA1` (Presente al ingreso del Diagnóstico Principal).**<br>**25. Diagnósticos Secundarios (`DS`, hasta 19/20 códigos en `CIE-10-ES Diagnósticos`).**<br>**26. Marcador `POA2` (Presente al ingreso de cada Diagnóstico Secundario).**<br>**27. Procedimientos realizados en el centro (hasta 20 códigos en `CIE-10-ES Procedimientos`).**<br>**28. Procedimientos realizados en otros centros.**<br>**29. Códigos de Morfología de las Neoplasias (`CIE-O-3`, tipo histológico + comportamiento).** | • **Definición legal de Diagnóstico Principal (`DP`):** *«Afección que, **tras el estudio necesario**, se establece como **causa que motivó el ingreso o contacto** del paciente en el centro para su atención»* (¡Ojo: NO es el diagnóstico de sospecha inicial de urgencias ni la causa última de muerte, sino la causa del ingreso establecida tras el estudio!).<br>• **Definición de Diagnósticos Secundarios (`DS`):** Aquellas afecciones que **coexisten con el DP en el momento del ingreso (comorbilidades)** o que **se desarrollan a lo largo de la estancia hospitalaria (complicaciones)** e influyen en la duración de la estancia o en el tratamiento aplicado. |
| **V. Centro y CCAA (Vars. 30 a 31)** | **30.** Centro sanitario (`CODCNH` — Catálogo Nacional de Hospitales).<br>**31.** Comunidad Autónoma del centro. | **Prohibición expresa del `Art. 5.3 RD 69/2015`:** En ningún caso se incluirán datos relativos a **ideología, creencia, religión, origen racial o étnico u orientación sexual**. |

### 2.4. El Marcador `POA` (*Present On Admission*), Periodicidad y Comparabilidad del `RAE-CMBD`
1. **El Marcador `POA` (`POA1` y `POA2` — ¡Pregunta estrella de examen!):**
   - Antes del `RD 69/2015`, si un paciente ingresaba por una fractura de cadera (`DP`) y en los Diagnósticos Secundarios (`DS`) aparecía una «neumonía por *Pseudomonas*» o una «úlcera por presión grado III», era imposible saber estadísticamente si el paciente ya traía la úlcera desde su domicilio/residencia (**comorbilidad previa**) o si se le había producido dentro del hospital por mala calidad de cuidados (**complicación intrahospitalaria / evento adverso nosocomial**).
   - Los marcadores **`POA1`** (asociado al Diagnóstico Principal) y **`POA2`** (asociado a cada Diagnóstico Secundario) resuelven esta ambigüedad asignando obligatoriamente uno de los **4 valores oficiales**:
     - **`S` (*Sí*):** La condición estaba **presente en el momento del ingreso** (incluye afecciones crónicas previas o diagnosticadas durante la estancia pero que claramente ya estaban incubándose o presentes al ingresar).
     - **`N` (*No*):** La condición **NO estaba presente en el momento del ingreso** (se ha desarrollado durante el episodio asistencial: infección nosocomial, dehiscencia de sutura quirúrgica, tromboembolismo venoso postoperatorio, reacción adversa a un fármaco administrado en el hospital o lesión asociada a un dispositivo médico).
     - **`D` (*Desconocido / Documentación insuficiente*):** La documentación clínica de la historia no permite determinar si estaba o no presente al ingreso.
     - **`E` (*Exento*):** Códigos exentos de marcador POA según el manual de codificación (p. ej., causas externas o códigos de estado Z intemporales).
2. **Periodicidad de Remisión Oficial:** De acuerdo con el **Artículo 8 del `RD 69/2015`**, las Comunidades Autónomas remiten al Ministerio de Sanidad los datos consolidados con **periodicidad ANUAL** (enviando antes del **30 de mayo** de cada año la actividad completa del año natural anterior, sin perjuicio de los envíos parciales semestrales/mensuales y del cierre mensual interno que realiza el SERGAS para sus cuadros de mando en `HEXE`).

---

## 🔬 3. Sistemas de Ajuste de Riesgo Hospitalario (`GRD`) y Estratificación Poblacional tipo `GMA` (Conceptos Básicos y Aplicaciones)

### 3.1. Agrupadores de Casuística Hospitalaria (`APR-GRD`) y Fórmulas de Eficiencia Clínica
No se puede comparar directamente la estancia media bruta ni el coste por paciente de un hospital comarcal (como el Hospital de Verín o Cee, que atiende patología médica estándar y cirugía general básica) con un complejo hospitalario universitario de tercer nivel (como el CHUAC o el CHUS, que realiza trasplantes cardíacos/hepáticos, neurocirugía compleja y cirugía cardíaca infantil). Para poder compararlos de forma justa es imprescindible **ajustar por casuística (*Case-Mix*)** mediante los **Grupos Relacionados por el Diagnóstico (`GRD` — *Diagnosis Related Groups*, creados por Fetter y Thompson en la Universidad de Yale)**.

Actualmente, el Ministerio de Sanidad y el SERGAS utilizan el sistema **`APR-GRD` (*All Patient Refined DRG*)**, que procesa las variables del `RAE-CMBD` y asigna cada episodio a una de las **25 Categorías Diagnósticas Mayores (`CDM`, más la precategoría de trasplantes/traqueostomías)** y a un único **`GRD` clínico isoconsumo de recursos**, subdividiendo cada GRD base en dos escalas independientes de **4 niveles ($1\text{ a }4$)**:
- **Nivel de Severidad o Gravedad de la Enfermedad (`SOI` — *Severity of Illness*):** **`1` Menor**, **`2` Moderada**, **`3` Mayor** y **`4` Extrema** (determina el consumo esperado de estancias, farmacia y pruebas).
- **Nivel de Riesgo de Mortalidad (`ROM` — *Risk of Mortality*):** **`1` Menor**, **`2` Moderado**, **`3` Mayor** y **`4` Extremo** (utilizado para calcular el Índice de Mortalidad Ajustada por Riesgo `RAMI`).

A cada subgrupo `APR-GRD` + Nivel de Severidad se le asigna un **Peso Relativo Estatal ($P_i$)**, donde por definición **el peso relativo medio del episodio hospitalario estándar de referencia es $1,0000$** (un proceso leve como una apendicectomía laparoscópica sin complicaciones tiene un peso $P_i < 1$, mientras que un trasplante pulmonar o ECMO tiene un peso $P_i > 10$). A partir de aquí se formulan los **5 indicadores matemáticos fundamentales de gestión hospitalaria A1**:

1. **Peso Medio o Índice Casuístico del Hospital (`IC` o *Case-Mix Index — CMI*):** Mide la **complejidad media** de los pacientes atendidos por el hospital (si $\text{IC} > 1$, el hospital atiende una casuística más compleja y costosa que la media de la norma estatal):
   $$\text{IC} = \frac{\sum_{i=1}^{K} \left( N_i \cdot P_i \right)}{\sum_{i=1}^{K} N_i}$$
   donde $N_i$ es el número de altas del hospital en el `GRD` $i$ y $P_i$ es el peso relativo normativo del `GRD` $i$.
2. **Estancia Media Observada (`EM`, tras depurar *outliers* extremos por punto de corte trimodal):**
   $$\text{EM} = \frac{\sum_{i=1}^{K} \left( N_i \cdot e_i \right)}{\sum_{i=1}^{K} N_i}$$
   donde $e_i$ es la estancia media del hospital en el `GRD` $i$, mientras que $E_i$ es la estancia media de la **norma o estándar nacional** en ese mismo `GRD` $i$.
3. **Estancia Media Ajustada por Casuística (`EMAC`):** Es la estancia media que **tendría el hospital si en cada uno de sus propios GRD tardase exactamente lo mismo que la media nacional ($E_i$)** (es decir, la estancia esperada dada la complejidad de sus pacientes):
   $$\text{EMAC} = \frac{\sum_{i=1}^{K} \left( N_i \cdot E_i \right)}{\sum_{i=1}^{K} N_i}$$
4. **Estancia Media Ajustada por Funcionamiento (`EMAF`):** Es la estancia media que tendría el hospital si atendiese la estructura de pacientes de la media nacional ($M_i$), pero manteniendo sus propios tiempos de estancia por GRD ($e_i$):
   $$\text{EMAF} = \frac{\sum_{i=1}^{K} \left( M_i \cdot e_i \right)}{\sum_{i=1}^{K} M_i}$$
5. **Índice de Estancia Media Ajustada (`IEMA` — ¡Indicador reina de eficiencia en estancias!):** Compara las estancias reales consumidas por el hospital con las estancias esperadas para su casuística:
   $$\text{IEMA} = \frac{\text{EM}}{\text{EMAC}} = \frac{\sum_{i=1}^{K} \left( N_i \cdot e_i \right)}{\sum_{i=1}^{K} \left( N_i \cdot E_i \right)} = \frac{\text{Estancias Reales Observadas}}{\text{Estancias Esperadas según Casuística}}$$
   - **Interpretación directa en examen:**
     - Si **$\text{IEMA} < 1$** (p. ej., $\text{IEMA} = 0,88$): El hospital es **MÁS EFICIENTE** que el estándar nacional (consume un $12\%$ menos de estancias de las esperadas para la complejidad real de sus pacientes, ahorrando camas).
     - Si **$\text{IEMA} = 1$**: El hospital funciona exactamente igual que la norma de referencia.
     - Si **$\text{IEMA} > 1$** (p. ej., $\text{IEMA} = 1,15$): El hospital es **MENOS EFICIENTE** (consume un $15\%$ más de estancias de las esperadas para su complejidad, debido a cuellos de botella en pruebas diagnósticas de imagen/laboratorio, demoras quirúrgicas o problemas de drenaje sociosanitario).

### 3.2. Estratificación Poblacional tipo `GMA` (*Grupos de Morbilidad Ajustados*): Conceptos Básicos y Arquitectura
Mientras que los `GRD` clasifican **episodios aislados de hospitalización** (un paciente que ingresa tres veces en un año genera tres GRDs distintos), la gestión moderna de la cronicidad necesita clasificar **PERSONAS COMPLETAS a nivel poblacional** (los $2,7\text{ millones}$ de ciudadanos con Tarjeta Sanitaria en Galicia, hayan ingresado o no en el hospital).

En el marco de la **Estrategia para el Abordaje de la Cronicidad en el Sistema Nacional de Salud**, el Ministerio de Sanidad (en colaboración inicialmente con el Servei Català de la Salut / IACS y desplegado en 13+ CCAA incluido el **SERGAS**) desarrolló los **`GMA` (*Grupos de Morbilidad Ajustados*)**:
1. **Ventaja Estratégica de los `GMA` frente a *ACG* o *CRG*:** A diferencia de los agrupadores comerciales estadounidenses (*ACG — Adjusted Clinical Groups* de la Universidad Johns Hopkins o *CRG — Clinical Risk Groups* de 3M), los **`GMA` son un agrupador de titularidad pública del SNS español**, adaptado a la epidemiología y práctica clínica española, sin dependencia de licencias propietarias extranjeras de caja negra y con capacidad predictiva superior validada para predecir mortalidad, ingresos urgentes, reingresos y gasto farmacéutico/sanitario total.
2. **Fuentes de Entrada del Algoritmo `GMA`:** El motor `GMA` procesa anualmente (o semestralmente/mensualmente) para cada ciudadano con Tarjeta Sanitaria (`TSI`): **1) Edad y sexo**, y **2) TODOS los códigos diagnósticos registrados en los últimos 12 meses (o históricos crónicos)** tanto en la **HCE de Atención Primaria (`IANUS` en `CIAP-2`)** como en **Atención Hospitalaria (`RAE-CMBD` en `CIE-10-ES`)** y urgencias.
3. **Arquitectura de la Matriz Bidimensional `GMA` ($7\text{ Categorías} \times 5\text{ Niveles} \rightarrow 31\text{ Grupos Clínicos}$):**
   El algoritmo `GMA` clasifica a cada ciudadano en dos ejes ortogonales y además calcula un **Peso Individual de Complejidad `GMA` continuo**:
   - **Eje 1 — Las 7 Categorías Mutuamente Excluyentes de Estado de Morbilidad (¡Pregunta fija de test!):**
     1. **`Grupo 0` — Población Sana (Sin patología relevante registrada / No usuarios en el periodo).**
     2. **`Grupo 1` — Embarazo y/o Parto.**
     3. **`Grupo 2` — Patología Aguda** (únicamente procesos agudos autolimitados, sin enfermedades crónicas).
     4. **`Grupo 3` — Enfermedad Crónica en $1$ único sistema orgánico** (p. ej., solo hipertensión arterial o solo asma).
     5. **`Grupo 4` — Multimorbilidad Crónica en $2\text{ o }3$ sistemas orgánicos distintos** (p. ej., diabetes + cardiopatía isquémica).
     6. **`Grupo 5` — Multimorbilidad Crónica en $\ge 4$ sistemas orgánicos distintos** (paciente pluripatológico complejo: insuficiencia cardíaca + EPOC + enfermedad renal crónica + diabetes + artrosis).
     7. **`Grupo 6` — Neoplasia Maligna Activa** (en los últimos 2 años; tiene prioridad jerárquica por su alto impacto clínico y consumo de recursos).
   - **Eje 2 — Los 5 Niveles de Complejidad o Gravedad Individual (`Niveles 1 a 5`):**
     Dentro de cada categoría de morbilidad (salvo la población sana `Grupo 0` que tiene un único nivel), el `GMA` suma los pesos de morbimortalidad de todas las patologías de la persona y la asigna a uno de los **5 niveles de complejidad creciente**: **Nivel 1 (complejidad mínima)**, **Nivel 2 (baja)**, **Nivel 3 (moderada)**, **Nivel 4 (alta)** y **Nivel 5 (complejidad extrema)**, conformando en total **$1 + (6 \times 5) = 31\text{ Grupos de Morbilidad Ajustados (`GMA`)}$**.

### 3.3. Aplicaciones de los `GMA` en la Pirámide de Kaiser Permanente y en la Planificación Sanitaria
La salida numérica del **Peso de Complejidad `GMA`** permite ordenar a toda la población de un Área Sanitaria o cupo médico de mayor a menor riesgo y segmentarla en los **4 estratos de intervención proactiva del modelo de la Pirámide de Kaiser Permanente**:

```
                     /\
                    /  \      NIVEL 3 — VÉRTICE APICAL (Percentil 99–100: ~1% a 2% superior de peso GMA)
                   / 3  \     • Pacientes Crónicos Complejos Pluripatológicos (GMA 5.4, 5.5, 6.5)
                  /------\    • Intervención: GESTIÓN DE CASOS individualizada, enfermera gestora, HADO y TELEA intensivo
                 /        \
                / NIVEL 2  \  NIVEL 2 — ALTO RIESGO (Percentil 95–99: ~3% a 5% de la población)
               / (Alto R.)  \ • Multimorbilidad descompensada -> Seguimiento proactivo compartido AP-Medicina Interna y TELEA
              /--------------\
             /    NIVEL 1     \ NIVEL 1 — RIESGO BAJO / MEDIO (Percentil 80–95: ~15% a 20% de la población)
            / (Gestión Enferm.)\ • Crónicos estables (1–2 sistemas) -> Gestión de la enfermedad, protocolos AP y AUTOCUIDADO
           /--------------------\
          /      NIVEL BASE      \ NIVEL BASE — POBLACIÓN GENERAL / SANA (~75% a 80% de la población)
         /  (Promoción/Prevención)\ • Promoción de la salud, estilos de vida saludables y cribados poblacionales
        /__________________________\
```

Además de la intervención clínica individual, los `GMA` tienen **4 aplicaciones de planificación macro y mesosanitaria**:
1. **Ajuste de Cupos y Cargas de Trabajo en Atención Primaria:** No tiene la misma carga asistencial un cupo médico de $1.400$ pacientes jóvenes con peso medio `GMA` bajo que un cupo envejecido de $1.400$ pacientes con altísima proporción de `GMA` niveles 4 y 5.
2. **Financiación Capitativa Ajustada por Morbilidad y Presupuesto Farmacéutico:** El peso `GMA` explica más del $60\%$ de la variabilidad del gasto farmacéutico en receta (`e-Receita`) de un centro de salud.
3. **Modelos Predictivos de Ingreso Urgente y Reingreso a 30 días:** Identificación de pacientes diana para programas de atención domiciliaria y telemedicina (`TELEA`).
4. **Planificación de Necesidades de Equipamiento y Recursos (`Tema 61` y `Tema 63`):** Estimación de la demanda futura de camas de crónicos, hemodiálisis, oxigenoterapia domiciliaria (`TRD`), bombas de insulina, sensores de monitorización continua de glucosa y kits de telemonitorización.

---

## 🛡️ 4. Comparativa Global `SIAP` vs. `BDCAP` vs. `RAE-CMBD` vs. `GMA` y Aplicaciones en Ingeniería Biomédica

### 4.1. Tabla Comparativa Integral de los Sistemas de Información Sanitaria Nacionales

| Característica / Dimensión | `SIAP` (*Sistema de Información de AP*) | `BDCAP` (*Base de Datos Clínicos de AP*) | `RAE-CMBD` (*Registro de Actividad Especializada*) | `GMA` (*Grupos de Morbilidad Ajustados*) |
| :--- | :--- | :--- | :--- | :--- |
| **Nivel Asistencial que Cubre** | **Atención Primaria** (Centros de Salud, Consultorios y `PAC`). | **Atención Primaria** (clínica, farmacia y pruebas). | **Atención Especializada / Hospitalaria** (6 modalidades). | **Transversal / Poblacional** (integra AP + Hospitalaria). |
| **Naturaleza y Unidad de Análisis** | **Datos agregados** de recursos, población TSI y consultas totales. | **Microdatos clínicos individuales** longitudinales anonimizados. | **Microdatos por Episodio / `Contacto`** asistencial (31 variables). | **Estratificador de riesgo por Persona** con TSI ($31$ grupos + peso). |
| **Cobertura / Muestreo** | **Censal ($100\%$)** de centros públicos del SNS. | **Muestral ($\approx 10\%$)** aleatorio estratificado ($> 4,7\text{ millones}$). | **Censal ($100\%$)** de centros **públicos y privados** (`RD 69/2015`). | **Censal ($100\%$)** de toda la población con TSI de la CCAA. |
| **Codificación Clínica Principal** | No codifica patologías (solo recuentos de actividad y recursos). | **`CIAP-2`** (problemas de salud) + **`ATC`** (fármacos) + `SNOMED`. | **`CIE-10-ES Diagnósticos`**, **`CIE-10-ES Procedimientos`** y **`CIE-O-3`**. | Recibe como entrada códigos **`CIAP-2`** y **`CIE-10-ES`**. |
| **Periodicidad Oficial** | **Anual** (recursos/TSI a 31 dic; actividad anual). | **Anual** (panel longitudinal). | **Anual** al Ministerio (antes del 30 de mayo) / Mensual en CCAA. | Actualización periódica (anual/semestral) en la HCE. |
| **Indicadores Estrella** | **Frecuentación** ($\text{consultas/hab}\cdot\text{año}$) y **Presión Asistencial**. | Prevalencia atendida, tasas estandarizadas y `DDD` por mil hab. | **`IC` (Peso Medio)**, **`EMAC`**, **`EMAF`**, **`IEMA`**, mortalidad y complicaciones (`POA=N`). | **7 categorías de morbilidad $\times$ 5 niveles de complejidad** y Pirámide de Kaiser. |

### 4.2. Cómo Utiliza la Ingeniería Biomédica el `RAE-CMBD` y los `GMA`
Para el Ingeniero Biomédico del SERGAS, el `RAE-CMBD` y los `GMA` constituyen una fuente objetiva de datos auditados para la toma de decisiones tecnológicas:
- **Auditoría de Utilización de Procedimientos con Alta Tecnología (`Variable 27` en `CIE-10-ES Procedimientos`):** Permite cuantificar exactamente cuántos procedimientos complejos se han realizado en cada hospital (implantes de válvulas `TAVI`, ablaciones por radiofrecuencia/crioablación, cirugías robóticas Da Vinci, trombectomías mecánicas, sesiones de radioterapia estereotáctica `SBRT` o `PET-TC`), cruzando la actividad registrada en el `RAE-CMBD` con los partes de uso y horas de funcionamiento de los equipos en **`XMAO`**.
- **Evaluación de Seguridad de Productos Sanitarios (`POA = N`):** Permite detectar tasas anómalas de complicaciones asociadas a dispositivos médicos e implantes (infecciones de prótesis articulares, complicaciones mecánicas de catéteres o electrodos de marcapasos) adquiridas durante el ingreso (`POA2 = N`).

---

## 🏥 5. Implantación, Integración y Casuística en el Servicio Gallego de Salud (SERGAS)

### 5.1. El Circuito Autonómico del `RAE-CMBD` en Galicia y su Explotación en `HEXE`
En las **7 Áreas Sanitarias del SERGAS**, los **Servicios de Admisión y Documentación Clínica (`SADC`)** gestionan el flujo continuo del `RAE-CMBD`:
- Los datos administrativos y de movimiento del episodio (variables 1 a 22 y 30–31) se extraen automáticamente desde **`SIHGA`**, mientras que los médicos documentalistas y técnicos superiores en documentación sanitaria codifican en **`CIE-10-ES Diagnósticos y Procedimientos`** (variables 23 a 29, incluyendo los marcadores `POA1` y `POA2`) a partir del Informe Clínico de Alta, el protocolo quirúrgico y los informes de anatomía patológica e imagen en **`IANUS 5`**, apoyados por herramientas corporativas de codificación asistida.
- Los registros superan las mallas de validación autonómica y se cargan mensualmente en el **Datawarehouse Corporativo del SERGAS**, alimentando los cuadros de mando de la plataforma **`HEXE`**, donde las Direcciones de Área y Jefaturas de Servicio monitorizan en tiempo real su **Índice Casuístico (`IC`)**, su **`EMAC`**, su **`IEMA`** (que forma parte de los objetivos de los **Acuerdos de Gestión Anuales del SERGAS**), la tasa de ambulatorización quirúrgica (`% CMA`) y los reingresos urgentes.

### 5.2. Integración Visual de `GMA` en `IANUS 5` y Selección de Pacientes para `TELEA`
El SERGAS ha integrado el resultado de la estratificación poblacional **`GMA`** directamente en la práctica clínica diaria a través de **`IANUS 5`**:
- En la cabecera de la historia clínica electrónica de cada paciente gallego se muestra un **icono visual estratificado por colores (nivel de complejidad `GMA` de 1 a 5 y categoría de pluripatología)**, permitiendo que cualquier médico o enfermero de Atención Primaria, Urgencias (`PAC`/Hospital) o Medicina Interna identifique al instante que está ante un **Paciente Crónico Complejo (estrato apical del $1\text{–}2\%$ de mayor peso `GMA`)**.
- Esta estratificación `GMA` se utiliza operativamente en las 7 Áreas Sanitarias para **seleccionar e incluir de forma proactiva** a los pacientes de alto riesgo (Insuficiencia Cardíaca grado III-IV, EPOC grave con agudizaciones frecuentes, pluripatológicos polimedicados) en programas de **seguimiento intensivo mediante la plataforma de telemonitorización domiciliaria `TELEA`** (`Tema 47`), dotándolos de biosensores conectados (báscula, tensiómetro, pulsioxímetro) para detectar precozmente las descompensaciones en su domicilio y evitar ingresos urgentes en el hospital.

---

## ⚡ 6. Síntesis de Alto Rendimiento, Tabla Resumen y Puntos Críticos de Examen A1

### 6.1. Tabla Maestra de Cifras, Umbrales y Artículos Clave

| Concepto / Norma / Indicador | Cifra / Fórmula / Definición Exacta de Examen | Clave Estratégica de Tribunal |
| :--- | :--- | :--- |
| **Norma Reguladora del `RAE-CMBD`** | **`Real Decreto 69/2015, de 6 de febrero`** (en vigor desde el 01/01/2016) | Obligatorio para centros **PÚBLICOS y PRIVADOS**. Incluye **6 modalidades de contacto** (Hosp. convencional, HADO, Hospital de Día, CMA, Procedimientos complejos y Urgencias) y **31 variables**. |
| **Definición de Diagnóstico Principal (`DP`)** | **`Anexo II RD 69/2015`** (Variable 23, en `CIE-10-ES`) | *«Afección que, **tras el estudio necesario**, se establece como **causa que motivó el ingreso/contacto** en el centro»*. |
| **Valores del Marcador `POA` (`POA1` / `POA2`)** | **`S`** (Sí) · **`N`** (No) · **`D`** (Desconocido) · **`E`** (Exento) | *Present On Admission* (Presente al ingreso). **`POA = S`** $\rightarrow$ comorbilidad previa del paciente; **`POA = N`** $\rightarrow$ complicación o infección adquirida durante la estancia hospitalaria. |
| **Diferencia Muestral `SIAP` vs. `BDCAP`** | **`SIAP` = $100\%$ censal agregado** · **`BDCAP` = $\approx 10\%$ muestral individual** | `SIAP` mide recursos, TSI y actividad agregada (frecuentación y presión asistencial). `BDCAP` mide morbilidad (`CIAP-2`) y fármacos (`ATC`) en una muestra longitudinal del $\approx 10\%$ ($> 4,7\text{ millones}$). |
| **Índice de Estancia Media Ajustada (`IEMA`)** | $$\text{IEMA} = \frac{\text{EM}}{\text{EMAC}} = \frac{\sum N_i e_i}{\sum N_i E_i}$$ | Compara las estancias reales del hospital con las esperadas según su complejidad (`APR-GRD`). **Si $\text{IEMA} < 1$, el hospital es MÁS EFICIENTE** que la norma nacional (ahorra estancias). |
| **Matriz de Estratificación `GMA`** | **7 Categorías de Morbilidad $\times$ 5 Niveles de Complejidad = 31 `GMA`** | Agrupador **público español del SNS**. Las 7 categorías: `0` Sano, `1` Embarazo/Parto, `2` Agudo, `3` Crónico en $1$ sistema, `4` Crónico en $2\text{–}3$ sistemas, `5` Crónico en $\ge 4$ sistemas, `6` **Neoplasia activa**. |

### 6.2. Puntos Críticos y Trampas Habituales de Tribunal (Tipo Test y Supuestos Prácticos)
1. **¡Trampa clásica sobre el ámbito del `RAE-CMBD` (`RD 69/2015`)!** En los exámenes suelen poner como opción falsa que el `RAE-CMBD` *«solo es obligatorio para los hospitales públicos del SNS y únicamente registra altas de hospitalización convencional»*. **FALSO por partida doble**: el Artículo 3 del `RD 69/2015` obliga tanto a los centros **públicos como privados**, y el Artículo 6 abarca **6 modalidades** (incluyendo HADO, Hospital de Día médico, CMA, procedimientos ambulatorios complejos y Urgencias).
2. **¡Trampa sobre la definición del Diagnóstico Principal (`DP`)!** Si un paciente ingresa por urgencias con dolor torácico sospechoso de infarto, tras el estudio se diagnostica una disección aórtica, y durante el postoperatorio sufre un ictus y fallece por parada cardiorrespiratoria, ¿cuál es el Diagnóstico Principal en el `RAE-CMBD`? Es la **disección aórtica** (*la afección que, tras el estudio necesario, se establece como causa que motivó el ingreso*), mientras que el ictus postoperatorio es un Diagnóstico Secundario con marcador **`POA2 = N`** (no presente al ingreso) y el tipo de alta (Variable 18) es `6 = Éxitus`.
3. **¡Trampa en la interpretación numérica del `IEMA` y del `IC`!**
   - Un **Índice Casuístico $\text{IC} = 1,25$** significa que los pacientes atendidos por ese hospital son un **$25\%$ más complejos** que la media de la norma nacional.
   - Un **$\text{IEMA} = 0,90$** significa que el hospital es **más eficiente** (sus estancias reales son un $10\%$ inferiores a las que cabría esperar dada su casuística $\text{EMAC}$). Muchos opositores confunden $< 1$ con peor resultado: en estancias ($\text{IEMA}$), **menor que $1$ es mejor (más eficiente)**.
4. **¡Trampa entre `GRD` y `GMA`!** Los **`GRD` (`APR-GRD`)** clasifican **episodios de atención especializada** en grupos isoconsumo de recursos para medir eficiencia hospitalaria, mientras que los **`GMA` (*Grupos de Morbilidad Ajustados*)** son un sistema de **estratificación poblacional** que clasifica **personas completas** (integrando diagnósticos de Atención Primaria y Hospitalaria) en **7 categorías de estado de morbilidad y 5 niveles de complejidad** para gestionar la cronicidad en la Pirámide de Kaiser Permanente.
5. **¡Trampa del Artículo 5.3 del `RD 69/2015`!** El `RAE-CMBD` recoge país de nacimiento, sexo y municipio, pero tiene **expresamente prohibido por ley incluir datos relativos a ideología, creencia, religión, origen racial o orientación sexual**.
