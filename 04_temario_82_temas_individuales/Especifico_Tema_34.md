# Esp. Tema 34 — Impresión 3D en el ámbito sanitario. Aplicación y tecnología.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 3: Ficha Específica Biomédica (Complementario)  
> **Bloque de Estudio Completo:** [`Bloque_06_Equipamiento_Dialisis_Laboratorio_Esterilizacion_Rehabilitacion_Farmacia.md`](../02_apuntes_nucleo_diamante/Bloque_06_Equipamiento_Dialisis_Laboratorio_Esterilizacion_Rehabilitacion_Farmacia.md)

## 🎯 Cruce con Otras Oposiciones del SERGAS

- **Categorías con solapamiento:** **Sin equivalencia directa en las 5 categorías analizadas**
- **Grado de solapamiento:** **Nulo / Muy Bajo (10%)**: Impresión 3D médica es exclusivo de esta nueva convocatoria.
- **Epígrafes equivalentes:**
  • N/A (Contenido específico de Ingeniería Biomédica)

---

## 📖 Desarrollo Técnico y Normativo del Tema

### 5. Tema 57, Tema 29 y Tema 34: Farmacia Hospitalaria, Equipamiento de Hospitalización/Movilización e Impresión 3D Sanitaria

### 5.1. Tema 57: Equipamiento de Farmacia Hospitalaria y Sistemas Automatizados de Dispensación
1. **Salas Blancas de Elaboración de Medicamentos Estériles y Citostáticos (Norma GMP / Guía de Buenas Prácticas del Ministerio de Sanidad):**
   - **Preparación de Nutrición Parenteral y Mezclas Intravenosas No Peligrosas:** Se realiza en **Campana de Flujo Laminar Horizontal o Vertical (Grado A / ISO 5)** dentro de un entorno limpio **Grado B o C con Presión POSITIVA** (para proteger la esterilidad del preparado).
   - **Preparación de Medicamentos Peligrosos (Citostáticos / Quimioterapia antineoplásica — ¡Pregunta fija de examen!):** Se realiza obligatoriamente en una **Cabina de Seguridad Biológica Clase II Tipo B2 (100% de extracción al exterior sin recirculación) o Clase III (Aislador)**, situada dentro de una sala limpia **Grado B con PRESIÓN NEGATIVA respecto a la esclusa** (para evitar que los vapores o aerosoles citotóxicos salgan al servicio de farmacia y protegiendo simultáneamente la esterilidad del fármaco y la salud del trabajador), o bien mediante **robots de preparación intravenosa de citostáticos (*APOTECAchemo*, *Kiro Oncology*)** con control gravimétrico y visión artificial.
2. **Automatización de Almacenamiento, Reenvasado y Dispensación (Trazabilidad en el SERGAS con `SILICON`):**
   - **Carruseles Horizontales y Verticales Robotizados ( Farmacia Central):** Almacenamiento de alta densidad guiado por software (*pick-to-light*) conectado al sistema de gestión farmacoterapéutica del SERGAS (**SILICON**).
   - **Robots de Almacén de Cajas (tipo *Rowa* / *Apostore*) y Reenvasadoras Automáticas de Dosis Unitaria:** Reenvasan comprimidos/blísteres en **unidosis individuales con código DataMatrix** (lote, caducidad, principio activo) para los carros de **Sistema de Distribución de Medicamentos en Dosis Unitaria (SDMDU)**.
   - **Sistemas Automatizados de Dispensación (SAD / *Pyxis*, *Omnicell*) en Unidades de Hospitalización, Urgencias, UCI y Quirófanos:** Armarios inteligentes descentralizados con acceso por huella biométrica o tarjeta profesional e **integrados con la prescripción electrónica de IANUS/SILICON**: solo abren el cajetín del medicamento pautado para ese paciente concreto, registran automáticamente el consumo, controlan estupefacientes y lanzan el pedido de reposición a Farmacia.
   - **Cadena de Frío de Medicamentos Termolábiles ($+2\text{ }^\circ\text{C a }+8\text{ }^\circ\text{C}$):** Cámaras frigoríficas farmacéuticas con sondas PT100 calibradas y monitorización continua en red 24/7 con alarmas SMS/correo.

### 5.2. Tema 29: Equipamiento de Pacientes: Hospitalización y Movilización
1. **Camas Hospitalarias Eléctricas Articuladas (`UNE-EN 60601-2-52`):**
   - Somier de **4 planos (3 articulaciones)** accionado por actuadores lineales eléctricos (protección IPX4/IPX6 frente a lavado, batería de respaldo): elevación en altura variable ($35\text{–}80\text{ cm}$ para prevención de caídas y ergonomía del personal), respaldo (Fowler), tramo femoral y vascular (piernas), **Trendelenburg / Anti-Trendelenburg** y **palanca mecánica rápida de posición de RCP (pone el respaldo a $0^\circ$ instantáneamente)**.
   - En camas de **UCI**: incorporan **báscula electrónica integrada** de 4 células de carga (para balance hídrico diario), **lateralización continua rotacional** ($20\text{–}30^\circ$ para fisioterapia respiratoria y prevención de atelectasias) y tablero radiotransparente.
2. **Superficies Especiales para el Manejo de la Presión (SEMP — Prevención de Úlceras por Presión [UPP]):**
   - **Estáticas:** Colchones viscoelásticos de espuma de alta densidad.
   - **Dinámicas (Activas):** **Colchones de aire de presión alternante motorizados** con compresor silencioso que infla y desinfla secuencialmente las celdas impares y pares cada $5\text{–}10\text{ min}$, garantizando que ningún punto de apoyo óseo (sacro, talones, trocánteres) supere la **presión de cierre capilar ($\approx 32\text{ mmHg}$)** de forma sostenida.
3. **Equipamiento de Movilización y Transferencia de Pacientes (Prevención de trastornos musculoesqueléticos según `ISO 10535`):**
   - **Grúas de movilización pasiva (de suelo o de raíles de techo)** con arnés de suspensión y **grúas de bipedestación/cambiapañales** (activas para pacientes con tono parcial).
   - **Transfer de rodillos (*rollboard*) y colchones de transferencia por colchón de aire (*HoverMatt*)** para pasar al paciente de la cama a la mesa quirúrgica o al TC sin esfuerzo lumbar.

### 5.3. Tema 34: Impresión 3D (Fabricación Aditiva) en el Ámbito Sanitario (`ISO/ASTM 52900`)
1. **Flujo de Trabajo Digital Completo (*Point-of-Care 3D Printing* en el Hospital):**
   $$\text{1. Adquisición Imagen (TC corte fino }\le 1\text{ mm / RM en DICOM)} \longrightarrow \text{2. Segmentación Anatómica (Umbralizado UH / IA)} \longrightarrow \text{3. Mallado 3D y Diseño CAD (archivos .STL / .OBJ / .3MF)} \longrightarrow \text{4. Laminado (Slicing -> G-Code)} \longrightarrow \text{5. Impresión 3D, Posprocesado y Esterilización}$$
2. **Las 4 Tecnologías Principales de Impresión 3D en Medicina (¡Muy preguntadas!):**
   - **FDM / FFF (*Modelado por Deposición Fundida*):** Extrusión de filamento termoplástico fundido (**PLA, ABS, PETG, TPU flexible o PEEK implantable de grado médico**). Económica; usada para **biomodelos anatómicos básicos de planificación prequirúrgica y ortesis externas**.
   - **SLA / DLP / MSLA (*Estereolitografía y Fotopolimerización en Cuba*):** Un láser UV ($355\text{–}405\text{ nm}$) o proyector digital solidifica capa a capa **resinas líquidas fotopolimerizables biocompatibles (Clase I / Clase IIa certificadas `ISO 10993` y esterilizables en autoclave)**. Es la tecnología estándar en hospitales para **Guías Quirúrgicas de corte y perforación personalizadas** (cirugía maxilofacial, ortopedia, implantes dentales) y biomodelos de alta precisión.
   - **SLS (*Sinterizado Selectivo por Láser*) y MJF (*Multi Jet Fusion*):** Un láser sinteriza polvo de **poliamida (Nylon PA12) o PEEK** sin necesidad de estructuras de soporte. Ideal para **prótesis externas definitivas, corsés ortopédicos y modelos funcionales**.
   - **SLM / DMLS / EBM (*Fusión Selectiva por Láser o por Haz de Electrones en Lecho de Polvo Metálico*):** Funde polvo de **Titanio médico ($\text{Ti-6Al-4V}$ ELI) o Cromo-Cobalto** creando **implantes definitivos a medida con estructuras trabeculares porosas** que imitan el hueso esponjoso y favorecen la osteointegración (reconstrucciones craneales, mandibulares, cotilos acetabulares complejos y cajas vertebrales).
   - **Bioimpresión 3D (*Bioprinting*):** Extrusión o *inkjet* de **biotintas (*bioinks*: hidrogeles de alginato, colágeno o ácido hialurónico cargados con células vivas del paciente)** para ingeniería tisular y medicina regenerativa.
3. **Regulación Legal de la Impresión 3D en Hospitales (`MDR 2017/745` y `Art. 9 del RD 192/2023`):**
   - Un **biomodelo anatómico** usado para tomar decisiones diagnósticas/quirúrgicas o una **guía quirúrgica de corte** que entra en contacto con el hueso durante la cirugía **SON PRODUCTOS SANITARIOS** (el software de segmentación/planificación es **Clase IIa / IIb por Regla 11**, y la guía quirúrgica invasiva pasajera es **Clase IIa por Regla 6**).
   - Si el hospital los fabrica para sus propios pacientes, se acoge al régimen de **Fabricación *In-House* (Art. 5.5 MDR y Art. 9 RD 192/2023)** (comunicación a la AEMPS, sistema de calidad `ISO 13485` y prohibición de venta a terceros) o bien a **Licencia de Fabricante de Productos a Medida**.
