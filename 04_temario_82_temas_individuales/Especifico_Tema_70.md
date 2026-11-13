# Esp. Tema 70 — Logística de productos sanitarios. Cadena de suministros.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 2: Subir Nota (Relación 1:1) (Complementario)  
> **Bloque de Estudio Completo:** [`Bloque_07_Salud_Digital_HIS_RIS_PACS_Interoperabilidad_HCE_CMBD_BI_IoMT.md`](../02_apuntes_nucleo_diamante/Bloque_07_Salud_Digital_HIS_RIS_PACS_Interoperabilidad_HCE_CMBD_BI_IoMT.md)

## 🎯 Cruce con Otras Oposiciones del SERGAS

- **Categorías con solapamiento:** **Grupo Técnico / Gestión TIC** |  | **Ingeniero/a Técnico/a**
- **Grado de solapamiento:** **Alto (75%)**: Cubre sistemas de gestión económica y de suministros/logística (LOGAS/ERP) en el SERGAS.<br><br>**Medio (55%)**: Cubre gestión y control de almacenes y suministros técnicos.
- **Epígrafes equivalentes:**
  • Superior (A1): Tema 23. Sistemas de información para la salud pública. Sistemas de Información y sistemas de gestión de pacientes en atención primaria y hospitales. Sistema poblacional y tarjeta sanitaria. Sistemas de gestión de recursos humanos. Sistemas de gestión económica y suministros. y Tema 17. Sistemas CRM (Customer Relationship Management) y ERP (Enterprise Resource Planning). La informatización de los procedimientos. BPM (Business Process Management). Sistemas de gestión documental.
  • Gestión (A2): Tema 15. Sistemas de información para la salud pública. Sistemas de información y sistemas de gestión de pacientes en atención primaria y hospitales. Sistema poblacional y tarjeta sanitaria. Sistemas de gestión de recursos humanos. Sistemas de gestión económica y suministros. y Tema 10. Sistemas CRM (Customer Relationship Management) y ERP (Enterprise Resource Planning). Sistemas BPM (Business Process Management). Sistemas de gestión documental.
  • Especialista (C1): Tema 10. Sistemas de información para la salud pública. Sistemas de información y sistemas de gestión de pacientes en atención primaria y hospitales. Sistema poblacional y tarjeta sanitaria. Sistemas de gestión de recursos humanos. Sistema de gestión económica y suministros.
  
  • Tema 69. Talleres: oficios, organización y control. Almacén: gestión y control.

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

### 7. Tema 47, Tema 67 y Tema 70: IoMT y Telemedicina (`TELEA`), Citación/Demanda (`XIDE`) y Logística Sanitaria (`LOGAS`)

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
