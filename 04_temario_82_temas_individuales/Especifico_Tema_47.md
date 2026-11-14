# Tema 47 — Internet of Medical Things (IoMT) y Telemedicina: concepto, arquitectura funcional, sensores y casos de uso en el Sistema público de salud gallego.

> - **Parte del Programa:** Parte Específica (74 Temas · Orden DOG #46 de 74 — *Nota: la publicación oficial del DOG núm. 67 omite el Tema 46 y pasa directamente del Tema 45 al Tema 47*) — Ejercicio 1.º Eliminatorio
> - **Bloque Temático SERGAS:** Bloque 07 — Salud Digital, Sistemas Corporativos, Interoperabilidad, HCE, Analítica, IoMT, Citación y Logística (`💎 Núcleo Diamante · Fase 1`)
> - **Marco Normativo y Técnico Nuclear:** Reglamento (UE) 2017/745 (`MDR`) y Real Decreto 192/2023; Familia de estándares **`ISO/IEEE 11073`** (*Personal Health Device Communication — `PHD`*, protocolo base **`IEEE 11073-20601`** y especializaciones `11073-104xx`); **Guías de Diseño `Continua` (*PCHAlliance*)**; Perfiles médicos **`Bluetooth Low Energy (BLE) GATT`**; Estándar **`IEEE 802.15.6`** (*Wireless Body Area Networks — WBAN*); Banda radioeléctrica médica para implantes activos **`MICS` / `MedRadio` ($401\text{–}406\text{ MHz}$, núcleo $402\text{–}405\text{ MHz}$, `ETSI EN 301 839`)**; Estándar **`HL7 FHIR` (*Personal Health Device IG*)** e **`IHE PCD`**; Norma **`UNE-EN 60601-1-11`** (Equipos electromédicos para uso en el entorno de asistencia sanitaria domiciliaria); Guía de Ciberseguridad **`MDCG 2019-16`** y Norma **`UNE-EN IEC 81001-5-1`**.
> - **Sistemas y Entorno SERGAS:** **`TELEA`** (*Plataforma de Teleasistencia y Telemonitorización Domiciliaria del SERGAS*), `IANUS 5`, `É-Saúde`, `Sergas Móbil`, Unidades de Monitorización Remota de Dispositivos Cardioimplantables (`Marcapasos`, `DAI`, `CRT`, `Holter Insertable`), `e-Interconsulta` avanzada (Teledermatología, Teleoftalmología) y Red Gallega de **`Teleictus`**.

---

## 🎯 0. Alcance Oficial del Epígrafe y Cruce con Otras Oposiciones del SERGAS

El **Tema 47** del programa oficial de Ingeniero/a Biomédico/a (Subgrupo A1) ocupa el **puesto #46 de los 74 temas de la Parte Específica** en el Anexo de la Resolución publicada en el **DOG núm. 67, de 13 de abril de 2026** (debido a que la numeración del DOG salta del Tema 45 al Tema 47, omitiendo el ordinal 46). Es un tema perteneciente al **Núcleo Diamante (Fase 1)** que integra la ingeniería electrónica de biosensores, las redes inalámbricas de grado médico y los sistemas corporativos de telemedicina del SERGAS en cuatro bloques:
1. **Concepto y taxonomía de Internet of Medical Things (`IoMT`) y Telemedicina:** diferenciación entre dispositivos vestibles (*wearables*), equipamiento de diagnóstico en el punto de atención domiciliario (*Point-of-Care*), implantes médicos activos conectados (`CIEDs`) y sistemas intrahospitalarios (*Smart ICU/Ward*), así como las modalidades síncronas y asíncronas de telemedicina.
2. **Arquitectura funcional de 4 capas de un ecosistema IoMT:** desde el nodo transductor y el acondicionamiento de señal hasta las redes de área corporal (`WBAN`, `BLE GATT`, `MICS 402–405 MHz`), pasarelas celulares (`5G`, `NB-IoT`), plataforma *middleware* bajo estándares **`IEEE 11073-20601` / `Continua`** y **`HL7 FHIR`**, y capa de aplicación clínica.
3. **Principios físicos y electrónicos de los sensores biomédicos IoMT:** ecuaciones y transducción en pulsioximetría reflectiva/transmisiva (`PPG`), esfigmomanometría oscilométrica, monitorización continua de glucosa amperométrica (`CGM`), bioimpedancia tetrapolar (`BIA`), parches ECG, espirometría ultrasónica/turbina y acelerometría triaxial `MEMS`.
4. **Ciberseguridad (`MDCG 2019-16`), seguridad eléctrica domiciliaria (`UNE-EN 60601-1-11`) y casos de uso reales en el SERGAS:** arquitectura y protocolos clínicos de la plataforma corporativa **`TELEA`**, telemonitorización de marcapasos/DAI, Teledermatología, Teleoftalmología y **`Teleictus`**.

### Cruce Verificado con Otras Oposiciones del SERGAS (`cruce_temarios_sergas.md`)

| Categoría SERGAS con Solapamiento | Grado de Solapamiento | Epígrafes Equivalentes y Orientación de Tribunal |
| :--- | :--- | :--- |
| **Grupo Técnico de la Función Administrativa / Gestión TIC (Subgrupos A1, A2 y C1)** | **Total (90%)**: Cubre explícitamente telemedicina, telemonitorización, estándares de dispositivos personales conectados (IEEE Continua Alliance) y sistemas clínicos del SERGAS. | • **TIC Superior (A1):** Tema 24. Sistemas de información clínica: telemedicina. Telemonitorización. Historia clínica y receta electrónica. Imagen digital y PAC. Sistema de historia clínica del Sistema nacional de salud. Proyectos de intercambio de información clínica en el ámbito europeo. y Tema 25. Interoperabilidad en el entorno sanitario. Estándares tecnológicos en el ámbito sanitario: DICOM, HL7, CDA, IHE, CEN TC/251, AEN/CTN 139, IEEE Continua Alliance. Implementación de mensajería HL7 sobre buses de integración.<br>• **TIC Gestión (A2):** Tema 16. Sistemas de información clínica... y Tema 17. Interoperabilidad en el entorno sanitario...<br>• **TIC Especialista (C1):** Tema 11. Sistemas de información clínica... y Tema 12. Interoperabilidad en el entorno sanitario... |

---

## 📖 1. Concepto y Taxonomía de Internet of Medical Things (`IoMT`) y Telemedicina

### 1.1. Concepto de `IoMT` (*Internet of Medical Things*) y Paradigma de Atención Ubicua

El concepto de **`IoMT` (*Internet of Medical Things* o Internet de las Cosas Médicas)** define la infraestructura ciberfísica formada por dispositivos médicos dotados de sensores fisiológicos, microprocesadores embebidos, actuadores e interfaces de comunicación inalámbrica que capturan, procesan y transmiten datos biomédicos de forma autónoma hacia los sistemas de información hospitalarios (`HCE`) sin requerir el desplazamiento físico del paciente al centro sanitario ni la transcripción manual del profesional.

Mientras que el *Internet of Things* (`IoT`) de consumo general (relojes deportivos o pulseras comerciales de bienestar no reguladas) carece de validación clínica certificada, el verdadero ecosistema **`IoMT` clínico** está integrado por productos sanitarios con **marcado CE bajo el `Reglamento (UE) 2017/745 (MDR)`**, sujetos a requisitos estrictos de exactitud metrológica, biocompatibilidad (`ISO 10993`), seguridad eléctrica y compatibilidad electromagnética en el hogar (**`UNE-EN 60601-1-11`**), interoperabilidad sintáctica/semántica (**`ISO/IEEE 11073`**) y ciberseguridad extremo a extremo.

Su objetivo estratégico en sistemas públicos de salud con alta dispersión geográfica y envejecimiento demográfico —como es el caso paradigmático de Galicia— es **desplazar el centro de gravedad asistencial desde el hospital de agudos hacia el domicilio del paciente**, transformando un modelo reactivo basado en ingresos por descompensación en urgencias en un **modelo proactivo, continuo y predictivo** guiado por biomarcadores digitales.

### 1.2. Taxonomía de Dispositivos en el Ecosistema `IoMT`

En ingeniería biomédica, los nodos del ecosistema `IoMT` se clasifican según su ubicación anatómica/espacial y su clase de riesgo regulatorio en cuatro grandes grupos:
1. **IoMT Corporal o Vestible (*On-Body Wearables* — Clase IIa / IIb `MDR`):**
   - Biosensores no invasivos o mínimamente invasivos adheridos a la piel o portados continuamente por el paciente: parches epidérmicos de ECG Holter de larga duración, sensores transcutáneos de **Monitorización Continua de Glucosa (`CGM`)**, anillos/muñequeras de fotopletismografía clínica (`SpO2`/frecuencia cardíaca), sensores inerciales `MEMS` para trastornos del movimiento (enfermedad de Parkinson) o detección de caídas, y textiles inteligentes sensorizados.
2. **IoMT Domiciliario Estacionario y de Punto de Cuidado (*In-Home / Ambient IoMT* — Clase IIa `MDR`):**
   - Equipos electromédicos de uso periódico por el paciente o por las unidades de **Hospitalización a Domicilio (`HADO`)**: esfigmomanómetros automáticos conectados, básculas de bioimpedancia eléctrica, pulsioxímetros digitales Bluetooth, espirómetros domiciliarios, coagulómetros portátiles para autocontrol de `INR` en pacientes anticoagulados, equipos de terapia de presión positiva continua en vía aérea (`CPAP`/`BiPAP`) con telemetría celular integrada y dializadores peritoneales automatizados (`DPA`) conectados en red.
3. **IoMT Implantable Activo (*In-Body Implantable Devices* — Clase III `MDR`):**
   - Productos sanitarios implantables activos (`AIMD` / `CIED` — *Cardiac Implantable Electronic Devices*): **marcapasos**, **desfibriladores automáticos implantables (`DAI`)**, dispositivos de **terapia de resincronización cardíaca (`CRT-P` / `CRT-D`)**, monitores cardíacos insertables subcutáneos (*Loop Recorders*), sensores implantables de presión arterial pulmonar (tipo *CardioMEMS*), neuroestimuladores medulares/cerebrales profundos (`DBS`) e implantes cocleares conectados.
4. **IoMT Intrahospitalario (*In-Hospital Smart Care & RTLS*):**
   - Redes de telemetría cardíaca ambulatoria para pacientes ingresados en planta, camas hospitalarias inteligentes conectadas (con celdas de carga de peso, alerta de salida de cama y monitorización sin contacto de frecuencia respiratoria/cardíaca por balistocardiografía), bombas de infusión inteligentes con biblioteca de fármacos inalámbrica (`IHE PIV`) y **Sistemas de Localización en Tiempo Real (`RTLS` — *Real-Time Location Systems*)** basados en etiquetas activas `BLE` / `Wi-Fi` / `UWB` (*Ultra-Wideband*) o `RFID` para geolocalizar al instante ecógrafos portátiles, desfibriladores, bombas y carros de paradas dentro del hospital.

### 1.3. Modalidades Operativas de la Telemedicina

La Organización Mundial de la Salud (OMS) y la Comisión Europea definen la **Telemedicina** como la provisión de servicios de atención sanitaria, en los que la distancia es un factor crítico, por profesionales sanitarios que utilizan tecnologías de la información y la comunicación para el intercambio de información válida para el diagnóstico, tratamiento y prevención de enfermedades. Operativamente comprende cinco modalidades:
1. **Telemonitorización Domiciliaria (*Remote Patient Monitoring — RPM* / Teleasistencia):** Seguimiento longitudinal a distancia de constantes fisiológicas y cuestionarios clínicos (*PROMs* — *Patient-Reported Outcome Measures*) desde el domicilio del paciente crónico o postquirúrgico hacia la HCE hospitalaria/primaria (representada en el SERGAS por **`TELEA`**).
2. **Teleconsulta / Interconsulta Asíncrona (*Store-and-Forward* — Almacenamiento y Reenvío):** Captura de información clínica estructurada e imágenes diagnósticas de alta resolución (dermatoscopia, retinografía, ECG, radiología) en Atención Primaria para su evaluación diferida por el especialista hospitalario sin que médico y paciente tengan que coincidir simultáneamente en el tiempo (representada en el SERGAS por la **`e-Interconsulta`** en `IANUS`).
3. **Teleconsulta y Teleasistencia Síncrona en Tiempo Real (*Real-Time Interactive Telemedicine*):** Interacción bidireccional en vivo mediante videoconferencia clínica de alta definición y transmisión simultánea de bioseñales o imagen diagnóstica (consultas virtuales médico-paciente y sistemas críticos de urgencias hospital-a-hospital como **`Teleictus`**).
4. **Telerrehabilitación y Telefarmacia:** Prescripción, guiado por sensores de movimiento y supervisión remota de programas de rehabilitación física, respiratoria o cardíaca, así como seguimiento farmacoterapéutico y entrega informada de medicación hospitalaria.
5. **Telementorización Quirúrgica e Intervencionista (*Telementoring*):** Supervisión y guiado remoto en tiempo real por un cirujano o hemodinamista experto sobre otro quirófano conectado mediante redes `5G` de latencia ultrabaja.

---

## ⚙️ 2. Arquitectura Funcional de 4 Capas de un Sistema IoMT y Protocolos de Comunicación

Conforme al modelo de referencia **UIT-T Y.2060** adaptado a dispositivos médicos conectados y a las **Guías de Diseño `Continua` (*Personal Connected Health Alliance — PCHAlliance*)**, la arquitectura funcional extremo a extremo de un sistema `IoMT` se estructura en **cuatro capas jerárquicas**:

```
[CAPA 1: Percepción y Nodo Sensor Biomédico] (Transductor + AFE Analógico + ADC + MCU + Batería)
       │  Interfaces de Área Corporal (WBAN IEEE 802.15.6 / BLE GATT / NFC / MICS 402-405 MHz)
       ▼
[CAPA 2: Red de Acceso y Pasarela (Gateway / Hub)] (Smartphone Sergas Móbil / Monitor de Mesilla)
       │  Interfaz PAN-IF / TAN-IF (Estándar ISO/IEEE 11073-20601 PHD)
       │  Transporte WAN Cifrado (TLS 1.3 sobre 4G/5G URLLC-mMTC / NB-IoT / FTTH)
       ▼
[CAPA 3: Plataforma Middleware, Integración y Motor de Reglas] (Servidor TELEA / Bus SERGAS)
       │  Interfaz WAN-IF / HRN-IF (HL7 FHIR Observation/Device + IHE PCD-01 ORU^R01)
       ▼
[CAPA 4: Aplicación Clínica y Ciudadana] (Panel Semafórico en IANUS 5 + Portal É-Saúde)
```

### 2.1. Capa 1 — Percepción, Adquisición Fisiológica y Acondicionamiento en el Nodo Sensor

El nodo sensor biomédico constituye la frontera física con el cuerpo del paciente y está integrado por cinco bloques electrónicos:
1. **Transductor primario (físico, óptico o electroquímico):** Convierte la magnitud biomédica (presión arterial, absorción óptica de la hemoglobina, concentración de glucosa intersticial, potencial bioeléctrico o aceleración) en una señal eléctrica analógica débil (del orden de $\mu\text{V}$ en EEG/ECG o $\text{nA}$ en sensores amperométricos).
2. **Etapa Analógica Frontal (`AFE` — *Analog Front-End*):** Compuesta por un **amplificador de instrumentación** de muy alta impedancia de entrada ($Z_{\text{in}} > 100\text{ M}\Omega\text{–}1\text{ G}\Omega$) y elevado **Rechazo al Modo Común ($\text{CMRR} > 100\text{ dB}$ a $50\text{ Hz}$)** para eliminar la interferencia de la red eléctrica, seguido de un filtro paso banda analógico (que elimina la deriva de línea base por respiración/movimiento y actúa como **filtro *anti-aliasing*** antes del muestreo).
3. **Conversión Analógico-Digital (`ADC`):** Digitaliza la señal cumpliendo el **Teorema de Muestreo de Nyquist-Shannon ($f_s \ge 2 \cdot f_{\max}$)** con una resolución típica de $12\text{ a }24\text{ bits}$ ($\Delta V = V_{\text{ref}} / 2^N$).
4. **Microcontrolador de Ultrabajo Consumo (`MCU` — ej. arquitectura ARM Cortex-M) con Procesado en el Borde (*Edge Computing*):** Ejecuta algoritmos locales de filtrado digital (`FIR`/`IIR`), extracción de características (cálculo de frecuencia cardíaca, detección de complejo QRS en tiempo real o algoritmo oscilométrico), compresión sin pérdidas y almacenamiento en memoria *flash* circular para no perder datos si se corta temporalmente la conexión inalámbrica (*Store-and-Forward local*).
5. **Subsistema de Gestión de Energía y Radio (`RF Transceiver`):** Ciclos de trabajo (*duty cycling*) con modos de sueño profundo (*Deep Sleep* de pocos $\mu\text{A}$) para garantizar autonomías desde días (parches desechables) hasta $10\text{–}15\text{ años}$ (baterías de Litio-Yodo $\text{Li/I}_2$ o Litio-Monofluoruro de Carbono $\text{Li/CF}_x$ en marcapasos).

### 2.2. Capa 2 — Conectividad de Área Corporal (`WBAN`), Corto Alcance y Pasarela (*Gateway*)

La segunda capa transporta las tramas desde el sensor médico hasta el dispositivo concentrador o **Pasarela (*Gateway* / *Application Hosting Device* `AHD`)**, que puede ser el teléfono móvil del paciente (ejecutando la app oficial) o un transmisor autónomo enchufado en la mesilla de noche (habitual en ancianos sin habilidades digitales o en monitorización de marcapasos/DAI), y desde dicha pasarela hacia la red del servicio de salud:

| Tecnología Inalámbrica | Estándar / Banda de Frecuencia | Alcance Típico y Tasa de Datos | Aplicación Específica en Ingeniería Biomédica e `IoMT` |
| :--- | :--- | :--- | :--- |
| **`BLE` (*Bluetooth Low Energy* 4.2 / 5.x)** | `IEEE 802.15.1` · Banda ISM **$2,4\text{ GHz}$** ($40$ canales de $2\text{ MHz}$, salto de frecuencia `AFH`) | $5\text{–}30\text{ m}$ · $1\text{–}2\text{ Mbps}$ · Ultrabajo consumo | **Estándar dominante en `TELEA`** para conectar pulsioxímetros, tensiómetros, básculas, termómetros, glucómetros y marcapasos modernos con el smartphone mediante perfiles **`GATT`** (*Generic Attribute Profile*). |
| **`MICS` / `MedRadio`** (*Medical Implant Communication Service*) | **`ETSI EN 301 839` / `FCC Part 95`** · Banda **$401\text{–}406\text{ MHz}$** (núcleo en **$402\text{–}405\text{ MHz}$**) | $2\text{–}3\text{ m}$ · $100\text{–}800\text{ kbps}$ · $\text{PIRE}_{\max} \le \mathbf{25\text{ }\mu\text{W}}$ ($-16\text{ dBm}$) | **Exclusiva para implantes médicos activos (`Marcapasos`, `DAI`, `CRT`, `Holter subcutáneo`)**: la frecuencia de $\approx 403\text{ MHz}$ presenta la relación óptima entre baja atenuación dieléctrica al atravesar tejido humano y tamaño reducido de antena implantable, con acceso al medio *Listen-Before-Talk (`LBT`)* libre de interferencias ISM. |
| **`NFC` (*Near Field Communication*)** | **`ISO/IEC 14443` / `ISO/IEC 15693`** · Banda HF **$13,56\text{ MHz}$** (acoplamiento inductivo) | $< 4\text{–}10\text{ cm}$ · $106\text{–}424\text{ kbps}$ · Pasivo (*Energy Harvesting*) | Lectura por aproximación en **sensores *Flash* de glucosa intersticial** y emparejamiento criptográfico instantáneo (*Out-of-Band Pairing*) de dispositivos `BLE` sin teclear códigos PIN. |
| **`WBAN` (*Wireless Body Area Network*)** | **`IEEE 802.15.6`** · Bandas `NB` (banda estrecha), `UWB` y **`HBC`** (*Human Body Communication*) | $< 2\text{–}5\text{ m}$ alrededor del cuerpo humano | Estándar específico para redes corporales médicas con soporte nativo de **prioridad de tráfico de emergencia vital** (acceso garantizado de latencia mínima para alarmas fisiológicas críticas). |
| **`Zigbee` / `IEEE 802.15.4`** | `IEEE 802.15.4` · Banda $2,4\text{ GHz}$ / $868\text{ MHz}$ en Europa | $10\text{–}100\text{ m}$ (topología en malla *Mesh*) · $250\text{ kbps}$ | Sensores ambientales domiciliarios de teleasistencia (detectores de presencia, apertura de puertas, caídas) y redes de sensores en plantas hospitalarias. |
| **`Wi-Fi` (`IEEE 802.11ax/ac`)** | Bandas $2,4\text{ GHz}$, $5\text{ GHz}$ y $6\text{ GHz}$ (`WPA3-Enterprise`) | Cobertura de planta hospitalaria · $> 100\text{ Mbps}$ | Monitores multiparamétricos de transporte intrahospitalario, bombas de infusión en planta y ecógrafos portátiles inalámbricos que envían grandes volúmenes de datos o ondas continuas. |
| **Redes Celulares `NB-IoT`, `LTE-M` y `5G` (`mMTC` / `URLLC`)** | Bandas licenciadas `3GPP` ($700\text{ MHz}$, $800\text{ MHz}$, $3,5\text{ GHz}$) | Cobertura regional/nacional (`WAN`) | **`NB-IoT` / `LTE-M`:** transmisión directa desde monitores de mesilla de marcapasos o equipos `CPAP` domiciliarios con alta penetración en interiores rurales.<br>**`5G URLLC` (*Ultra-Reliable Low-Latency* $< 1\text{–}5\text{ ms}$):** ambulancias medicalizadas conectadas y `Teleictus` móvil. |

### 2.3. Capa 3 — Plataforma Middleware, Estándar `ISO/IEEE 11073` (`Continua`) y Motor de Reglas

Para evitar que cada fabricante de tensiómetros o glucómetros utilice una trama binaria propietaria incompatible, la interoperabilidad sintáctica y semántica en `IoMT` se rige por la familia de normas **`ISO/IEEE 11073` (*Health informatics — Personal health device communication*)** y las **Guías de Diseño `Continua` (`PCHAlliance`)**:
1. **Protocolo Base `ISO/IEEE 11073-20601` (*Optimized Exchange Protocol*):**
   - Define un modelo orientado a objetos (**`DIM` — *Domain Information Model***) donde cada dispositivo físico se representa como un **Agente (*Agent*)** que contiene un objeto `MDS` (*Medical Device System*) y uno o varios objetos `Numeric`, `Real-Time Sample Array` (ondas), `Enumeration` o `PM-Store` (memoria histórica), los cuales se comunican con el **Gestor (*Manager*, la pasarela)** mediante una máquina de estados finitos rigurosa (*Disconnected $\rightarrow$ Connected $\rightarrow$ Unassociated $\rightarrow$ Associating $\rightarrow$ Operating $\rightarrow$ Disassociating*).
2. **Nomenclatura (`IEEE 11073-10101`) y Especializaciones por Tipo de Dispositivo (`IEEE 11073-104xx` — ¡Muy preguntables en test A1!):**
   - **`IEEE 11073-10404`:** Pulsioxímetro (*Pulse Oximeter*).
   - **`IEEE 11073-10406`:** Monitor de ECG básico (1 a 3 derivaciones).
   - **`IEEE 11073-10407`:** Monitor de Presión Arterial / Tensiómetro (*Blood Pressure Monitor*).
   - **`IEEE 11073-10408`:** Termómetro clínico (*Thermometer*).
   - **`IEEE 11073-10415`:** Báscula de peso corporal (*Weighing Scale*).
   - **`IEEE 11073-10417`:** Glucómetro (*Glucose Meter*).
   - **`IEEE 11073-10418`:** Monitor de coagulación `INR` (*INR Monitor*).
   - **`IEEE 11073-10419`:** Bomba de insulina (*Insulin Pump*).
   - **`IEEE 11073-10420`:** Analizador de composición corporal / Bioimpedancia (*Body Composition Analyzer*).
   - **`IEEE 11073-10427`:** Monitor continuo de glucosa (`CGM`).
   - **`IEEE 11073-10471`:** Hub de actividad en vida independiente (*Independent Living Activity Hub* — sensores de caídas/movimiento).
3. **Interfaces de las Guías `Continua` hacia el Hospital:**
   - **Interfaz `PAN-IF` / `TAN-IF`:** Conecta el sensor con la pasarela mediante `BLE GATT` / `NFC` / `USB` usando el modelo `IEEE 11073-20601`.
   - **Interfaz `WAN-IF` / `HRN-IF` (*Wide Area Network / Health Record Network Interface*):** Conecta la pasarela con la plataforma en la nube del servicio de salud (`TELEA`) y con la HCE (`IANUS 5`) utilizando recursos estándar **`HL7 FHIR`** (`Patient`, `Device`, `DeviceMetric`, `Observation` codificado con códigos `IEEE 11073-10101` y `LOINC`, y `QuestionnaireResponse`) sobre `HTTPS REST` o mensajería **`IHE PCD-01` (`HL7 v2.6 ORU^R01`)** / `HL7 CDA PHMR` (*Personal Healthcare Monitoring Report*).

En esta Capa 3 reside también el **Motor Clínico de Reglas y Eventos Complejos (*Complex Event Processing — CEP*)**, que evalúa en tiempo real cada medida recibida frente a los umbrales parametrizados para ese paciente concreto, calculando deltas temporales (p. ej., incremento de peso $\Delta P > 2\text{ kg}$ en $72\text{ horas}$) y clasificando automáticamente el estado clínico.

### 2.4. Capa 4 — Aplicación Clínica (`IANUS 5`) y Ciudadana (`É-Saúde` / `Sergas Móbil`)

La capa superior proporciona dos vistas sincronizadas:
- **Vista del Paciente / Cuidador (`É-Saúde` y App `Sergas Móbil`):** Permite emparejar los sensores Bluetooth, visualizar el plan de mediciones diarias, responder encuestas de síntomas (*PROMs*), consultar gráficas históricas de autocontrol y recibir mensajes o videollamadas del equipo sanitario.
- **Vista del Profesional Sanitario (`TELEA` integrada en `IANUS 5`):** Cuadro de mando poblacional que presenta la cohorte de pacientes telemonitorizados ordenada por nivel de prioridad clínica (**Semáforo de Alertas: Rojo / Amarillo / Verde**), permitiendo que una sola enfermera gestora de casos o facultativo supervise eficientemente a cientos de pacientes crónicos e intervenga solo sobre aquellos que presentan signos precoces de descompensación.

---

## 🔬 3. Caracterización Física y Técnica de los Sensores Biomédicos en IoMT y Telemedicina

### 3.1. Sensores Ópticos (`SpO2` / `PPG`), Hemodinámicos (Oscilometría `PANI`) y Electroquímicos (`CGM`)

1. **Pulsioxímetros Inalámbricos y Fotopletismografía (`PPG` Transmisiva y Reflectiva):**
   - **Principio físico:** Se basa en la **Ley de Beer-Lambert** ($I = I_0 \cdot 10^{-\varepsilon(\lambda) \cdot c \cdot d}$) y en la absorción diferencial de la luz por la **oxihemoglobina ($\text{HbO}_2$)** y la **desoxihemoglobina o hemoglobina reducida ($\text{Hb}$)** en dos longitudes de onda emitidas alternadamente por diodos LED:
     - **Luz Roja ($\lambda_1 \approx \mathbf{660\text{ nm}}$):** La $\text{Hb}$ reducida absorbe mucha más luz que la $\text{HbO}_2$.
     - **Luz Infrarroja ($\lambda_2 \approx \mathbf{940\text{ nm}}$):** La $\text{HbO}_2$ absorbe ligeramente más luz que la $\text{Hb}$.
   - **Algoritmo de cálculo:** El fotodiodo receptor separa en cada longitud de onda la **componente pulsátil alterna ($AC$)** —debida exclusivamente a la expansión sistólica de la sangre arterial— de la **componente basal continua ($DC$)** —absorción constante por tejidos, hueso, piel y sangre venosa—, calculando el **Cociente de Modulación ($R$ o *Ratio of Ratios*)**:
     $$R = \frac{AC_{660\text{ nm}} / DC_{660\text{ nm}}}{AC_{940\text{ nm}} / DC_{940\text{ nm}}} \quad \Longrightarrow \quad \text{SpO}_2\text{ (\%)} = f_{\text{cal}}(R) \approx 110 - 25 \cdot R$$
     *(Cuando $R = 1,0$, la $\text{SpO}_2$ equivale aproximadamente al $\mathbf{85\%}$).*
   - **Modalidad Transmisiva vs. Reflectiva:** Las pinzas de dedo o lóbulo auricular operan por **transmisión** (LED y fotodiodo enfrentados, mayor relación señal-ruido), mientras que los parches torácicos, relojes y anillos IoMT operan por **fotopletismografía reflectiva** (LED y fotodiodo adyacentes en el mismo plano midiendo la luz retrodispersada por el lecho capilar dérmico).
2. **Esfigmomanómetros Automáticos Conectados (Presión Arterial No Invasiva `PANI`):**
   - **Principio físico:** A diferencia del método auscultatorio manual (ruidos de Korotkoff), los tensiómetros automáticos IoMT utilizan el **Método Oscilométrico**. Un compresor infla el manguito braquial por encima de la presión sistólica y una electroválvula lo desinfla linealmente (o mide durante el inflado en tecnología *Inflationary Measurement*) mientras un **transductor piezoresistivo de presión** en puente de Wheatstone mide tanto la presión estática del manguito como las **micro-oscilaciones pulsátiles ($\Delta P \approx 1\text{–}3\text{ mmHg}$)** transmitidas por la pared de la arteria braquial.
   - **Dato crítico de examen A1:** El único parámetro medido directamente por el pico máximo de la envolvente de oscilaciones en el método oscilométrico es la **Presión Arterial Media (`PAM` o `MAP`)**; la **Presión Arterial Sistólica (`PAS`)** y la **Presión Arterial Diastólica (`PAD`)** se estiman algorítmicamente mediante coeficientes empíricos de razón de amplitud ($A_{\text{sys}} / A_{\max} \approx 0,45\text{–}0,55$ y $A_{\text{dia}} / A_{\max} \approx 0,75\text{–}0,85$), cumpliendo fisiológicamente:
     $$\text{PAM} \approx \text{PAD} + \frac{1}{3}\left(\text{PAS} - \text{PAD}\right) = \frac{\text{PAS} + 2 \cdot \text{PAD}}{3}$$
3. **Sensores de Monitorización Continua de Glucosa (`CGM` y Sistemas *Flash*):**
   - **Principio físico-químico:** Consisten en un microfilamento flexible insertado subcutáneamente en el **líquido intersticial** (durante $10\text{ a }15\text{ días}$) recubierto con la enzima **Glucosa Oxidasa (`GOx`)**. En los sensores amperométricos clásicos de primera/segunda generación, la glucosa intersticial reacciona con el oxígeno produciendo ácido glucónico y peróxido de hidrógeno ($\text{H}_2\text{O}_2$), el cual se oxida aplicando un potencial de polarización ($\approx +0,6\text{ V}$) en un electrodo de trabajo de platino (o mediante mediadores redox poliméricos de osmio a bajo potencial en sensores modernos libres de calibración capilar), generando una **corriente eléctrica faradaica ($I$ en nanoamperios, $\text{nA}$) directamente proporcional a la concentración de glucosa**:
     $$\text{D-Glucosa} + \text{O}_2 + \text{H}_2\text{O} \xrightarrow{\text{Glucosa Oxidasa (GOx)}} \text{Ácido D-glucónico} + \text{H}_2\text{O}_2$$
     $$\text{H}_2\text{O}_2 \xrightarrow{\text{Electrodo Pt } (+0,6\text{ V})} \text{O}_2 + 2\text{H}^+ + 2e^- \quad \Longrightarrow \quad I\text{ (nA)} = S \cdot [\text{Glucosa}]_{\text{intersticial}} + I_{\text{basal}}$$
   - **Retardo fisiológico y métricas clínicas:** Existe un retardo fisiológico de difusión sangre capilar $\rightarrow$ líquido intersticial de **$5\text{ a }10\text{ minutos}$**; la exactitud metrológica de un `CGM` se evalúa mediante el **`MARD` (*Mean Absolute Relative Difference*, exigible $< 9\text{–}10\%$)**. Los datos se transmiten cada $1\text{–}5\text{ minutos}$ por `BLE` (o por lectura `NFC`) generando el perfil ambulatorio de glucosa (`AGP`) con los indicadores internacionales: **Tiempo en Rango (`TIR` entre $70\text{ y }180\text{ mg/dL}$, objetivo $> 70\%$)**, Tiempo bajo Rango (`TBR` $< 70\text{ mg/dL}$, objetivo $< 4\%$; y $< 54\text{ mg/dL}$, objetivo $< 1\%$), Tiempo sobre Rango (`TAR` $> 180\text{ mg/dL}$) y Coeficiente de Variación ($\text{CV} \le 36\%$). Cuando el `CGM` se acopla por `BLE` mediante un algoritmo de control predictivo (`MPC` o `PID`) a una bomba de infusión subcutánea continua de insulina (`ISCI`), conforma un **Sistema de Páncreas Artificial o Lazo Cerrado Híbrido (`HCL` — *Hybrid Closed-Loop*)**.

### 3.2. Básculas con Bioimpedancia (`BIA`), Parches de ECG, Espirómetros y Sensores Inerciales (`MEMS`)

1. **Básculas Conectadas y Análisis de Bioimpedancia Eléctrica (`BIA`):**
   - Miden la masa corporal mediante cuatro **celdas de carga con galgas extensométricas (*strain gauges*)** dispuestas en puente de Wheatstone (variación de resistencia $\Delta R / R = K \cdot \varepsilon$ proporcional a la deformación mecánica).
   - Adicionalmente, las básculas avanzadas de telemonitorización de **Insuficiencia Cardíaca** incorporan 4 electrodos plantares (**configuración tetrapolar de Kelvin**: 2 electrodos inyectan una corriente alterna imperceptible de $I \approx 500\text{ }\mu\text{A}$ a $50\text{ kHz}$ o multifrecuencia $5\text{–}250\text{ kHz}$ y otros 2 electrodos de alta impedancia miden la caída de tensión $\Delta V$ eliminando la impedancia de contacto de la piel). El módulo de la impedancia compleja corporal $Z = \sqrt{R^2 + X_c^2}$ distingue la **Resistencia ($R$)** (inversamente proporcional al agua corporal total y líquido extracelular conductor) de la **Reactancia Capacitiva ($X_c$)** (generada por el doble estrato lipídico de las membranas celulares), permitiendo detectar la **congestión hídrica pulmonar/sistémica días antes de que aparezca la disnea aguda**.
2. **Parches de ECG Vestibles (*Wearable Holter Patches*) y Monitores Cardíacos:**
   - Registran de 1 a 3 derivaciones bipolares mediante electrodos adhesivos de hidrogel de $\text{Ag/AgCl}$ o electrodos secos capacitivos/textiles durante $7\text{ a }30\text{ días}$, ejecutando algoritmos de detección de **Fibrilación Auricular** (irregularidad de intervalos $R\text{-}R$ en el mapa de Lorenz/Poincaré y ausencia de onda P), pausas sinusales, bloqueos AV y taquicardias ventriculares.
3. **Espirómetros Domiciliarios Conectados:**
   - Utilizados en seguimiento de **EPOC, asma grave, fibrosis quística y trasplante pulmonar** (para detectar precozmente el síndrome de bronquiolitis obliterante por caída del $\text{FEV}_1 > 10\%$). Emplean **transductores de turbina digital** (hélice de baja inercia cuyo giro interrumpe un haz infrarrojo, donde cada pulso equivale a un volumen fijo de aire y la frecuencia de pulsos al flujo $\dot{V}(t)$) o **sensores ultrasónicos de tiempo de tránsito (*Time-of-Flight*)** sin piezas móviles, integrando el flujo respecto al tiempo $V = \int \dot{V}(t)\,dt$ para obtener la **Capacidad Vital Forzada ($\text{FVC}$)**, el **Volumen Espiratorio Forzado en el primer segundo ($\text{FEV}_1$)**, el índice $\text{FEV}_1/\text{FVC}$ y el flujo espiratorio máximo ($\text{PEF}$).
4. **Unidades de Medición Inercial (`IMU` — Acelerómetros Triaxiales y Giroscopios `MEMS`):**
   - Microestructuras de silicio micro-mecanizadas que miden la aceleración lineal en los tres ejes ortogonales ($a_x, a_y, a_z$) por variación de capacidad eléctrica entre peines móviles, además de la velocidad angular ($\omega_x, \omega_y, \omega_z$). Calculan el vector magnitud de aceleración resultante:
     $$\|\vec{a}(t)\| = \sqrt{a_x^2(t) + a_y^2(t) + a_z^2(t)}$$
   - En los detectores automáticos de caídas, el algoritmo identifica la firma trifásica característica: 1) caída transitoria de $\|\vec{a}\| \rightarrow 0\text{ g}$ (fase de caída libre), 2) pico brusco de impacto $\|\vec{a}\| > 2,5\text{–}3,5\text{ g}$, y 3) cambio de orientación angular del tronco ($\Delta \theta \approx 90^\circ$ a posición horizontal) seguido de inactividad prolongada.

---

## 🛡️ 4. Ciberseguridad en IoMT (`MDCG 2019-16`), Gestión de Flota de Dispositivos y Seguridad del Paciente

### 4.1. Seguridad Eléctrica y Ambiental en el Entorno Domiciliario (`UNE-EN 60601-1-11`)

Un equipo médico utilizado en la casa de un paciente opera en condiciones muy distintas a las de un hospital supervisado: la vivienda puede **carecer de toma de tierra de protección fiable**, está expuesta a derrames accidentales de líquidos, mascotas, pelusas y manipulación por usuarios legos sin formación técnica. Por ello, todo dispositivo electromédico domiciliario conectado debe cumplir la norma colateral **`UNE-EN 60601-1-11` (*Requisitos para los equipos electromédicos y los sistemas electromédicos utilizados en el entorno de la asistencia sanitaria domiciliaria*)**:
- **Clase II de aislamiento eléctrico (doble aislamiento o aislamiento reforzado, símbolo de dos cuadrados concéntricos)** o alimentación exclusiva por batería interna, prohibiendo depender de la tierra de protección del enchufe doméstico.
- Grado de protección envolvente contra penetración de agua y partículas mínimo **`IP21` o `IP22`** (y hasta `IP67`/`IP68` en sensores corporales vestibles).
- Conectores diseñados mecánicamente a prueba de error para impedir que el paciente o familiar conecte un cable de sensor o tubuladura a la red eléctrica, e instrucciones de uso redactadas para un operador lego.

### 4.2. Ciberseguridad en el Ciclo de Vida de Sistemas IoMT (`MDCG 2019-16` y `UNE-EN IEC 81001-5-1`)

Los dispositivos `IoMT` amplían el perímetro de exposición fuera del cortafuegos del hospital. Un ataque sobre una bomba de insulina conectada o un marcapasos podría alterar la terapia y comprometer la vida del paciente (*Safety = Security*). Conforme al **Anexo I (Requisitos Generales de Seguridad y Funcionamiento, apartado 17.2 y 17.4) del `MDR (UE) 2017/745`**, a la guía europea **`MDCG 2019-16`** y a la norma **`UNE-EN IEC 81001-5-1`**, la ingeniería biomédica exige cinco controles técnicos en la arquitectura `IoMT`:
1. **Emparejamiento y Autenticación Fuerte en el Enlace Inalámbrico:** Prohibición de perfiles `BLE Just Works` sin protección; obligatoriedad de **`BLE LE Secure Connections`** con criptografía de curva elíptica (`ECDH P-256`) y autenticación fuera de banda (`NFC` o código QR) para evitar ataques *Man-in-the-Middle (`MitM`)* o inyección de constantes falsas (*spoofing*).
2. **Cifrado de Datos en Tránsito y en Reposo:** Transporte hacia los servidores corporativos exclusivamente sobre **`TLS 1.3`** con autenticación mutua mediante certificados digitales `X.509` aprovisionados en un elemento seguro hardware del dispositivo (**`TPM` / *Secure Element***), y cifrado **`AES-256`** de cualquier dato almacenado temporalmente en la pasarela, evitando guardar datos identificativos (`PHI`) en el sensor físico.
3. **Arranque Seguro (*Secure Boot*) y Actualizaciones Remotas Firmadas (*Secure OTA Firmware Updates*):** El microcontrolador verifica criptográficamente la firma digital del firmware antes de arrancar y antes de aplicar cualquier parche de seguridad remoto.
4. **Protección de Dispositivos Implantables Activos (`CIEDs`):** En marcapasos y DAI, la reprogramación de parámetros terapéuticos (frecuencia de estimulación o energía de choque) **nunca se habilita de forma remota a través de Internet**: la telemonitorización domiciliaria (`MICS` / `BLE`) es estrictamente de **solo lectura (telemetría unidireccional hacia el hospital)**, exigiendo la presencia física de un cabezal inductivo de corto alcance a pocos centímetros del pecho en consulta hospitalaria para modificar la programación del implante.
5. **Logística e Higienización de Kits Reutilizables:** Para los kits de sensores domiciliarios en préstamo (p. ej., kits de seguimiento postquirúrgico o `HADO`), el Servicio de Electromedicina y Logística gestiona la trazabilidad por número de serie en `XMAO`/`LOGAS`, el protocolo de limpieza y desinfección de alto/medio nivel entre pacientes, la sustitución de consumibles de un solo uso (manguitos o boquillas) y la verificación metrológica periódica de los transductores.

---

## 🏥 5. Implantación, Integración y Casuística en el Servicio Gallego de Salud (SERGAS)

### 5.1. La Plataforma Corporativa `TELEA` (*Teleasistencia Domiciliaria*) del SERGAS

El Servicio Gallego de Salud es referente europeo en telemonitorización pública gracias a su plataforma corporativa **`TELEA` (*Plataforma de Teleasistencia Domiciliaria*)**, desarrollada e integrada de forma nativa dentro de la Historia Clínica Electrónica **`IANUS 5`** y conectada con el portal ciudadano **`É-Saúde`** y la aplicación **`Sergas Móbil`**:
- **Flujo operativo sin silos:** A diferencia de las plataformas comerciales externas que obligan al médico a salir de la historia clínica y entrar en una web de terceros con otro usuario, en el SERGAS el facultativo o la enfermera prescribe un **Perfil de Seguimiento `TELEA`** directamente desde **`IANUS`**, y todas las biomedidas enviadas por el paciente desde su domicilio (por captura Bluetooth automática de sus sensores o por registro en `Sergas Móbil` / `É-Saúde` / llamada automatizada) se graban directamente como constantes clínicas en **`IANUS`**.
- **Sistema de Triaje Proactivo por Semáforo de Alertas Clínicas:**
  - 🟢 **Alerta Verde (Estabilidad):** Todas las constantes biomédicas y cuestionarios se encuentran dentro del rango terapéutico personalizado del paciente; el sistema registra los datos en la gráfica longitudinal de `IANUS` sin requerir intervención activa.
  - 🟡 **Alerta Amarilla (Desviación Moderada o Técnica):** Superación leve de un umbral (p. ej., PAS entre $145\text{ y }160\text{ mmHg}$), síntoma moderado en el cuestionario o falta de envío de medidas programadas; genera una tarea de revisión para la **enfermera de Atención Primaria o gestora de casos**.
  - 🔴 **Alerta Roja (Descompensación Clínica Crítica):** Superación de un umbral crítico de riesgo (p. ej., caída de $\text{SpO}_2 < 88\text{–}90\%$ en EPOC, ganancia brusca de peso $> 2\text{ kg}$ en $72\text{ h}$ con disnea en Insuficiencia Cardíaca, glucemia $< 54\text{ mg/dL}$ o fiebre postquirúrgica); prioriza al paciente en la cabecera del panel de `IANUS` para contacto telefónico inmediato, ajuste precoz de tratamiento diurético/broncodilatador o visita presencial/domiciliaria en el día, **evitando la visita a Urgencias y el ingreso hospitalario**.
- **Catálogo de Perfiles Clínicos Implantados en `TELEA` en las 7 Áreas Sanitarias:**
  1. **Crónicos Complejos y Pluripatológicos (estrato apical de `GMA`):** **Insuficiencia Cardíaca** (peso, TA, FC, $\text{SpO}_2$, cuestionario de edemas/disnea), **EPOC** ($\text{SpO}_2$, FC, flujo espiratorio, cuestionario de esputo/disnea), **Hipertensión Arterial (HTA)** y **Diabetes Mellitus** (integrando glucómetros y sistemas de monitorización continua de glucosa).
  2. **Procesos Agudos, Subagudos y Perioperatorios:** **Hospitalización a Domicilio (`HADO`)**, seguimiento tras **alta precoz postquirúrgica** (cirugía colorrectal ERAS, cirugía mayor ambulatoria `CMA`, artroplastias), cardiopatía isquémica tras síndrome coronario agudo (**Post-Infarto** y **Rehabilitación Cardíaca domiciliaria**), pacientes oncológicos en tratamiento sistémico, trastorno mental grave y seguimiento de infecciones respiratorias.

### 5.2. Telemonitorización de Dispositivos Cardioimplantables (`Marcapasos`, `DAI` y `CRT`) en el SERGAS

En los Servicios de Cardiología (Unidades de Arritmias y Electrofisiología) de los hospitales de las 7 Áreas Sanitarias del SERGAS, miles de pacientes portadores de **Marcapasos**, **Desfibriladores Automáticos Implantables (`DAI`)**, **Resincronizadores (`CRT`)** y **Holter subcutáneos insertables** se encuentran bajo **Monitorización Remota Domiciliaria**:
- El paciente dispone en su domicilio de un transmisor de mesilla de noche (o app móvil autenticada) que interroga automáticamente durante la madrugada al implante mediante radiofrecuencia **`MICS` ($402\text{–}405\text{ MHz}$)** o **`BLE`** sin que el paciente note nada.
- El sistema transmite de forma cifrada tanto las **revisiones programadas periódicas** (sustituyendo visitas presenciales rutinarias al hospital) como **alertas técnicas y clínicas urgentes en $< 24\text{ h}$**:
  1. **Alertas de Integridad Técnica del Sistema Implantado (críticas para Ingeniería Biomédica):** Caída del voltaje de la batería alcanzando el **Indicador de Reemplazo Electivo (`ERI` / `RRT`)**, fractura o fallo de aislamiento de los cables/electrodos intracavitarios (detectado por caída brusca de la impedancia de estimulación $< 200\text{ }\Omega$ o subida $> 2.000\text{–}3.000\text{ }\Omega$, o aumento del umbral de captura en voltios/milisegundos) o ruido por sobredetección (*oversensing* de miopotenciales o interferencia electromagnética).
  2. **Alertas Arrítmicas y Hemodinámicas:** Episodios de fibrilación auricular silente de nueva aparición (que obligan a iniciar anticoagulación para prevenir un ictus cardioembólico), taquicardias ventriculares sostenidas, descargas eléctricas de alta energía ($30\text{–}40\text{ J}$) o terapias de estimulación antitaquicardia (`ATP`) aplicadas por el DAI, e índice de impedancia intratorácica transtorácica (entre la carcasa de titanio del generador y la bobina del electrodo ventricular) para alerta precoz de edema agudo de pulmón.
- Los informes estructurados y trazados intracavitarios (`EGM`) se integran directamente en la Historia Clínica Electrónica **`IANUS 5`**.

### 5.3. `e-Interconsulta` con Equipamiento Conectado (Teledermatología, Teleoftalmología) y Red Gallega de `Teleictus`

1. **Teledermatología con Dermatoscopia Digital y Teleoftalmología (Retinografía No Midriática):**
   - Todos los centros de salud de Atención Primaria del SERGAS disponen de **dermatoscopios digitales con luz polarizada** y acceso a **retinógrafos digitales no midriáticos**. Las imágenes de lesiones pigmentadas sospechosas de melanoma o de fondo de ojo para cribado de retinopatía diabética se adquieren y envían en formato estándar **`DICOM VL` (*Visible Light*)** al **`PACS Corporativo` (`Anello Radiolóxico Galego`)**, vinculadas a una **`e-Interconsulta`** en `IANUS`. El dermatólogo u oftalmólogo del hospital de referencia evalúa la imagen de alta resolución en pocos días, derivando directamente a quirófano los tumores malignos y resolviendo en Atención Primaria las patologías benignas sin desplazar al paciente.
2. **Red Gallega de `Teleictus` (Telemedicina Síncrona Crítica en Urgencias):**
   - Conecta en tiempo real las $24\text{ horas}$ del día los Servicios de Urgencias de los **Hospitales Comarcales del SERGAS** (Cee, Barbanza, A Mariña, Monforte de Lemos, Verín, O Barco de Valdeorras y O Salnés) y otros hospitales sin neurólogo de guardia presencial con el **Centro de Atención al Ictus / Unidad de Ictus de referencia**.
   - Integra una estación móvil de **videoconferencia clínica de alta definición con cámara robotizada PTZ** (que permite al neurólogo explorar a distancia las pupilas y la escala `NIHSS` del paciente en el box de urgencias comarcal) sincronizada con la visualización instantánea del **TC craneal multimodal (TC basal + Angio-TC de troncos supraaórticos/polígono de Willis + TC de Perfusión cerebral)** a través del `PACS Corporativo`. Gracias a esta arquitectura, el neurólogo indica la administración inmediata del bolo de **fibrinolisis intravenosa (alteplasa/tenecteplasa)** en el propio hospital comarcal (reduciendo drásticamente el **tiempo puerta-aguja**) y activa simultáneamente el traslado directo a la sala de neurorradiología intervencionista del hospital terciario si existe oclusión de gran vaso candidata a **trombectomía mecánica** (**tiempo puerta-ingle**).

---

## ⚡ 6. Síntesis de Alto Rendimiento, Tabla Resumen y Puntos Críticos de Examen A1

### 6.1. Tabla Maestra de Cifras, Umbrales y Artículos Clave

| Dispositivo / Estándar / Sistema | Referencia Normativa o Física | Cifra / Frecuencia / Regla de Oro para Examen A1 |
| :--- | :--- | :--- |
| **Orden Oficial del Tema 47 en el DOG** | DOG núm. 67 (13/04/2026) | **Orden #46 de 74** en Parte Específica (el DOG omite el Tema 46 y salta del 45 al 47). |
| **Plataforma Corporativa IoMT del SERGAS** | Sistema Corporativo SERGAS | **`TELEA`** (*Plataforma de Teleasistencia Domiciliaria*), integrada nativamente en **`IANUS 5`** y conectada con **`É-Saúde` / `Sergas Móbil`**, con triaje por **semáforo de alertas (Verde / Amarillo / Rojo)**. |
| **Estándar de Dispositivos Personales (`PHD`)** | **`ISO/IEEE 11073-20601`** y **`Continua`** | Modelo Agente-Gestor (`DIM` / `MDS`). Especializaciones clave: **`10404` Pulsioxímetro**, **`10407` Tensiómetro**, **`10408` Termómetro**, **`10415` Báscula**, **`10417` Glucómetro**, **`10418` INR**, **`10427` CGM**. |
| **Banda Radioeléctrica de Implantes (`MICS`)** | **`ETSI EN 301 839` (`MedRadio`)** | Banda **$401\text{–}406\text{ MHz}$** (núcleo en **$402\text{–}405\text{ MHz}$**), potencia máxima $\text{PIRE} \le \mathbf{25\text{ }\mu\text{W}}$ ($-16\text{ dBm}$), para telemetría de **marcapasos y DAI**. |
| **Física de la Pulsioximetría (`SpO2`)** | Ley de Beer-Lambert | Dos longitudes de onda: **Rojo $\approx 660\text{ nm}$** (mayor absorción por $\text{Hb}$ reducida) e **Infrarrojo $\approx 940\text{ nm}$** (mayor absorción por $\text{HbO}_2$). Cociente $R = \frac{AC_{660}/DC_{660}}{AC_{940}/DC_{940}}$ ($R=1 \Rightarrow \text{SpO}_2 \approx 85\%$). |
| **Física de la PANI Automática** | Método Oscilométrico | Mide directamente por máxima amplitud de oscilación del manguito la **Presión Arterial Media (`PAM`)** y calcula algorítmicamente PAS y PAD ($\text{PAM} \approx \text{PAD} + \frac{1}{3}[\text{PAS} - \text{PAD}]$). |
| **Sensor Continuo de Glucosa (`CGM`)** | Electroquímica Amperométrica | Enzima **Glucosa Oxidasa (`GOx`)** en **líquido intersticial subcutáneo** (retardo fisiológico de **$5\text{–}10\text{ min}$** respecto a sangre); corriente en $\text{nA}$; objetivo de **Tiempo en Rango (`TIR` $70\text{–}180\text{ mg/dL}$) $> 70\%$**. |
| **Seguridad Eléctrica Domiciliaria** | **`UNE-EN 60601-1-11`** | Exige **Clase II de aislamiento eléctrico (doble aislamiento)** o batería interna (prohibido depender de toma de tierra doméstica) y protección mínima contra agua/polvo **`IP21`/`IP22`**. |
| **Ciberseguridad de Dispositivos Médicos** | **`MDCG 2019-16`** y **`IEC 81001-5-1`** | Emparejamiento `BLE LE Secure Connections`, transporte `TLS 1.3`, `AES-256`, arranque seguro (*Secure Boot*) y **telemetría remota de marcapasos/DAI estrictamente de solo lectura** (prohibida reprogramación remota por Internet). |

### 6.2. Puntos Críticos y Trampas Habituales de Tribunal (Tipo Test y Supuestos Prácticos)

1. **Trampa Física en Tensiómetros Automáticos (`PANI` Oscilométrica):**
   - Si en el test preguntan qué parámetro determina de forma directa el pico de máxima amplitud de oscilación de presión en el manguito de un tensiómetro automático de telemedicina, la respuesta correcta es la **Presión Arterial Media (`PAM`)**, nunca la sistólica ni la diastólica (que se derivan por algoritmos de fracción de amplitud).
2. **Trampa Fisiológica y Física en Sensores Continuos de Glucosa (`CGM`):**
   - Los sensores `CGM` **NO miden la glucosa en sangre capilar ni venosa**, sino en el **líquido intersticial del tejido celular subcutáneo** mediante una reacción enzimática amperométrica con **glucosa oxidasa (`GOx`)**. Por ello existe un desfase fisiológico de **$5\text{ a }10\text{ minutos}$** cuando la glucemia sube o baja rápidamente.
3. **Trampa de Seguridad en Marcapasos y Desfibriladores (`DAI`) Conectados:**
   - Si una opción de respuesta indica que *«desde la plataforma de telemonitorización el cardiólogo puede reprogramar a distancia por Internet la energía de choque o el modo de estimulación del marcapasos en casa del paciente»*, es **FALSO**. Por seguridad del paciente y ciberseguridad, la comunicación remota domiciliaria (`MICS 402–405 MHz` / `BLE`) es **exclusivamente de monitorización/lectura**; cualquier cambio de programación exige telemetría inductiva presencial con cabezal programador en el hospital.
4. **Trampa de Seguridad Eléctrica Domiciliaria (`UNE-EN 60601-1-11`):**
   - Un equipo electromédico diseñado para el entorno domiciliario (`TELEA` / `HADO`) conectado a la red de $230\text{ V}$ debe ser de **Clase II (aislamiento doble o reforzado, sin conductor de tierra de protección)**, porque según la norma `UNE-EN 60601-1-11` no se puede confiar en la existencia ni continuidad de la puesta a tierra de las instalaciones eléctricas domésticas.
5. **Trampa sobre la Integración de `TELEA` en el SERGAS:**
   - `TELEA` **no es una aplicación aislada ni externa**, sino la plataforma corporativa del SERGAS **integrada nativamente dentro de `IANUS 5`** y conectada con **`É-Saúde` / `Sergas Móbil`**, cubriendo tanto patologías crónicas (IC, EPOC, Diabetes, HTA) como procesos agudos/subagudos (`HADO` y seguimiento postquirúrgico de alta precoz).
