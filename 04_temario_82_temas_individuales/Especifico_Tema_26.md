# Tema 26 — Robotización quirúrgica. Principios, tipos y tecnologías.

## 📖 1. Definición Reglamentaria (`UNE-EN IEC 80601-2-77`) y Niveles de Autonomía en Robótica Quirúrgica

### 1.1. Definición Reglamentaria (`UNE-EN IEC 80601-2-77`) y Niveles de Autonomía en Robótica Quirúrgica

La norma internacional **`UNE-EN IEC 80601-2-77`** (*Equipos electromédicos. Parte 2-77: Requisitos particulares para la seguridad básica y el funcionamiento esencial de los equipos quirúrgicos asistidos por robot — RASE, Robotically Assisted Surgical Equipment*) define un **equipo quirúrgico asistido por robot (RASE)** como aquel sistema electromédico que incorpora un dispositivo de actuación programable con uno o más grados de libertad mecánicos que manipula instrumentos quirúrgicos (endoscopios, pinzas, tijeras, portaagujas, electrobisturís, fresas o guías) para realizar tareas quirúrgicas bajo el control interactivo del cirujano.

Un principio conceptual de máxima importancia en los exámenes de oposición A1 es distinguir entre **telemanipulación robótica** y **ejecución autónoma**. La taxonomía internacional de **Yang et al. (*Science Robotics*)** adoptada en la ingeniería regulatoria clasifica los robots médicos en **6 niveles de autonomía (Nivel 0 a Nivel 5)**:

1. **Nivel 0 — Sin autonomía (Telemanipulación pura Maestro-Esclavo):** El robot carece de toma de decisiones quirúrgicas; responde instantáneamente y de forma determinista a los comandos cinemáticos continuos de las manos del cirujano en la consola maestra (aplicando filtrado de temblor y escalado geométrico). Es el nivel en el que operan los **robots de cirugía laparoscópica de tejidos blandos** (*Da Vinci*, *Hugo RAS*, *Versius*).
2. **Nivel 1 — Asistencia robotizada y Restricción Virtual/Háptica (*Active Constraint / Cobot*):** El cirujano guía físicamente el instrumento o el brazo robótico proporciona guía mecánica pasiva/semiactiva, pero el sistema ejerce **fuerzas reactivas de contención (fronteras hápticas o *virtual fixtures*)** que impiden atravesar estructuras críticas o salir del plano de osteotomía preplanificado (ej. robot ortopédico *Mako*, robots de posicionamiento estereotáxico *ROSA* o *Mazor X*).
3. **Nivel 2 — Autonomía de tarea específica (*Task Autonomy*):** El robot ejecuta de manera automática una subtarea discreta definida y supervisada paso a paso por el cirujano (ej. fresado óseo automático de cavidad femoral tipo *ROBODOC / TSolution One*, ablación prostática por chorro de agua guiada por ecografía robótica *AquaBeam*, o sutura intestinal experimental).
4. **Nivel 3 — Autonomía condicional:** El sistema genera estrategias quirúrgicas alternativas sobre imagen intraoperatoria y el cirujano selecciona y aprueba el plan antes de la ejecución.
5. **Niveles 4 y 5 — Alta autonomía y Autonomía completa:** Sin sistemas comerciales aprobados actualmente bajo el MDR para cirugía invasiva.

### 1.2. Cinemática Directa e Inversa, Grados de Libertad (GDL) y el Problema de la Laparoscopia Convencional

En la cirugía laparoscópica rígida convencional (Tema 25), el instrumento recto atraviesa un trócar fijo en la pared abdominal que actúa como un punto de apoyo o pivote mecánico (**fulcro**). Esta configuración impone severas limitaciones biomecánicas:

1. **Reducción a solo 4 Grados de Libertad (GDL) de posicionamiento/orientación (+ 1 de agarre):** Un cuerpo rígido libre en el espacio tridimensional ($\mathbb{R}^3$) requiere **6 grados de libertad** ($3\text{ traslaciones } [X, Y, Z]$ y $3\text{ rotaciones } [\text{alabeo } \phi, \text{cabeceo } \theta, \text{guiñada } \psi]$) para alcanzar cualquier punto con una orientación arbitraria de la herramienta (por ejemplo, para pasar una aguja curva perpendicularmente a una pared vascular). Al quedar constreñido el vástago recto por el punto de inserción del trócar, el instrumento laparoscópico rígido **pierde 2 grados de libertad rotacionales internos**, conservando únicamente **4 GDL**:
   - Inserción / extracción axial a lo largo del eje del trócar ($d_z$).
   - Rotación axial del vástago sobre sí mismo ($\phi$).
   - Inclinación angular Arriba / Abajo respecto al trócar (*Pitch* externo $\theta$).
   - Inclinación angular Izquierda / Derecha respecto al trócar (*Yaw* externo $\psi$).
2. **Efecto Fulcro (Inversión Cinemática Mano-Punta y amplificación variable de par):** Debido a la palanca de primer género en el trócar, para desplazar la punta intracorpórea hacia la derecha ($\Delta x_{\text{punta}} > 0$), el cirujano debe desplazar su mano hacia la izquierda ($\Delta x_{\text{mano}} < 0$), siendo la relación de desplazamiento y de fuerza dependiente de la proporción variable entre la longitud introducida ($L_{\text{in}}$) y la longitud exterior ($L_{\text{out}}$):
   $$\Delta x_{\text{punta}} = -\left(\frac{L_{\text{in}}}{L_{\text{out}}}\right) \cdot \Delta x_{\text{mano}} \quad ; \quad F_{\text{punta}} = \left(\frac{L_{\text{out}}}{L_{\text{in}}}\right) \cdot F_{\text{mano}}$$
3. **Amplificación del temblor fisiológico humano:** La mano humana presenta un temblor fisiológico neuromuscular en la banda de **$6\text{ a }12\text{ Hz}$** (amplitud de $50\text{ a }200\text{ }\mu\text{m}$), que el largo vástago laparoscópico amplifica en la punta distal dificultando la microcirugía.

**Solución Mecatrónica de la Robótica Quirúrgica (Cinemática de Denavit-Hartenberg y Matriz Jacobiana):**
El procesador maestro-esclavo resuelve en tiempo real (frecuencia de muestreo del bucle de servocontrol **$f_s \ge 1.000\text{ a }1.300\text{ Hz}$**, período $T_s < 1\text{ ms}$) el problema cinemático:
- **Cinemática Directa en los Mandos Maestros:** A partir de los ángulos medidos por los *encoders* de las articulaciones de los *joysticks* o pinzas maestras del cirujano ($\mathbf{q}_m$), calcula mediante matrices de transformación homogénea de Denavit-Hartenberg ($^{0}\mathbf{T}_n(\mathbf{q}_m)$) el vector de posición y orientación cartesiana deseada por la mano del cirujano ($\mathbf{x}_m = [x, y, z, \alpha, \beta, \gamma]^T$) referenciado exactamente al eje óptico de la cámara 3D.
- **Filtrado Digital y Escalado (*Motion Scaling*):** Aplica un filtro digital paso bajo de fase lineal con frecuencia de corte $f_c \approx 4\text{–}5\text{ Hz}$ que **suprime el temblor de $6\text{–}12\text{ Hz}$**, y divide el incremento diferencial de posición por el **factor de escalado seleccionado $k_{\text{scale}} \in \{1{,}5:1,\, 2:1,\, 3:1,\, 5:1\}$**:
  $$\Delta \mathbf{x}_{\text{esclavo}} = \frac{1}{k_{\text{scale}}} \cdot \mathcal{F}_{\text{LPF}}\left( \mathbf{R}_{\text{cámara}} \cdot \Delta \mathbf{x}_{\text{maestro}} \right)$$
  De este modo, con un escalado **$3:1$**, un desplazamiento cómodo de **$3\text{ cm}$** en los dedos del cirujano produce un desplazamiento micrométrico de **$1\text{ cm}$** en la punta del instrumento, **eliminando por completo el efecto fulcro** (si la mano va a la derecha, la punta va a la derecha en el visor).
- **Cinemática Inversa en el Brazo Esclavo y Muñeca Distal:** Mediante la pseudoinversa de la **Matriz Jacobiana ($\mathbf{J}^+$)** del brazo robótico y de la muñeca articulada distal ($\dot{\mathbf{q}}_s = \mathbf{J}^{-1}(\mathbf{q}_s) \cdot \dot{\mathbf{x}}_{\text{esclavo}}$), calcula las velocidades y posiciones angulares exactas de los servomotores que sitúan la punta del instrumento con **7 Grados de Libertad intracorpóreos** (los 4 GDL en el trócar + 2 rotaciones distales de muñeca [*pitch* y *yaw* internos] + 1 grado de apertura/agarre reactivo).

### 1.3. Marco Normativo: MDR 2017/745, `UNE-EN IEC 80601-2-77` e `IEC 62304`

- **Clasificación en el Reglamento (UE) 2017/745 (MDR):** Los sistemas quirúrgicos robotizados e instrumentos activos asociados se clasifican como **Clase IIb** (**Regla 9** y **Regla 11** para el software de control), elevándose a **Clase III** (**Reglas 6, 7 y 8**) cuando el robot y sus instrumentos están destinados a entrar en contacto directo con el **sistema nervioso central** (robots neuroquirúrgicos) o el **corazón y sistema circulatorio central** (cirugía cardíaca robótica).
- **Seguridad del Software:** El software de control cinemático en tiempo real se clasifica como **Clase C** (el fallo del software podría ocasionar la muerte o lesión grave irreversible al paciente), exigiendo arquitectura redundante de doble procesador con comprobación cruzada (*lockstep / watchdog*) en cada milisegundo.

---

## ⚙️ 2. Arquitectura de un Sistema Quirúrgico Telemanipulado de Tejidos Blandos

### 2.1. Arquitectura de un Sistema Quirúrgico Telemanipulado de Tejidos Blandos

Un sistema telemanipulado estándar (como *Intuitive Da Vinci Xi / X / SP*, *Medtronic Hugo RAS* o *CMR Surgical Versius*) se estructura en **tres grandes subsistemas físicos** interconectados mediante cables de **fibra óptica monomodo/multimodo de alta velocidad** (transmisión inmune a interferencias electromagnéticas de electrocirugía con ancho de banda $> 10\text{ Gbps}$ y latencia total de lazo $< 10\text{ ms}$):

```
┌───────────────────────────────────────────┐
│ 1. CONSOLA QUIRÚRGICA MAESTRA             │
│ • Visor Estereoscópico 3D-HD + Head Sensor│
│ • Mandos Maestros (Gimbal 7 GDL + Clutch) │
│ • Panel de Pedales (Energía, Cámara, Swap)│
└─────────────────────┬─────────────────────┘
                      │ Enlace Fibra Óptica Redundante (Lazo Servocontrol >= 1 kHz)
                      ▼
┌───────────────────────────────────────────┐       ┌───────────────────────────────────────────┐
│ 2. TORRE DE VISIÓN (VISION CART)          │◄─────►│ 3. CARRO DEL PACIENTE (PATIENT-SIDE CART) │
│ • Procesador Central 3D + Iluminador Láser│       │ • 4 Brazos Robóticos Electromecánicos     │
│ • Generador Electroquirúrgico Integrado   │       │ • Cinemática de Centro Remoto (RCM)       │
│ • Monitor Táctil 2D para Equipo Estéril   │       │ • Instrumentos Articulados (EndoWrist)    │
└───────────────────────────────────────────┘       └───────────────────────────────────────────┘
```

#### 1. Consola del Cirujano (*Surgeon Master Console*)
Situada fuera del campo estéril (dentro del propio quirófano), permite al cirujano operar sentado en postura ergonómica neutra:
- **Visor Estereoscópico 3D-HD Inmersivo:** Dos pantallas de alta resolución (OLED o LCD de alta frecuencia) con ópticas colimadas proyectan el canal izquierdo ($L$) al ojo izquierdo y el canal derecho ($R$) al ojo derecho sin necesidad de gafas polarizadas (en consolas cerradas tipo *Da Vinci*) o mediante pantalla 3D abierta con gafas polarizadas y seguimiento ocular (*eye-tracking* en *Hugo RAS* / *Senhance*).
- **Sensores de Presencia Infrarrojos (*Head-in Sensor*):** Emisores/receptores IR situados a ambos lados del visor detectan que la cabeza del cirujano está introducida mirando la pantalla. **Si el cirujano retira la cabeza del visor, el sistema bloquea instantáneamente todos los brazos robóticos (*Dead-Man Switch*)** para impedir movimientos accidentales de los mandos maestros.
- **Mandos Maestros (*Master Controllers*):** Dos manipuladores cardán (*gimbal*) de bajísima inercia y fricción compensada gravitatoriamente que el cirujano sujeta con los dedos pulgar e índice/corazón. Incluyen detección capacitiva de agarre (*finger-clutch*).
- **Bandeja de Pedales (*Footswitch Panel*):**
  - **Pedal de Embrague (*Master Clutch*):** Desacopla temporalmente los mandos maestros de los brazos esclavos (igual que levantar un ratón de ordenador al llegar al borde de la alfombrilla) para que el cirujano recoloque sus brazos en el centro ergonómico de la consola sin mover los instrumentos dentro del paciente.
  - **Pedal de Control de Cámara:** Acopla ambos mandos maestros al brazo del endoscopio 3D para acercar, alejar o rotar el horizonte visual sin ayuda de un asistente.
  - **Pedal de Intercambio de Cuarto Brazo (*Arm Swap*)** y **Pedales de Energía Quirúrgica** (azul para coagulación, amarillo para corte monopolar, bipolar o sellador vascular avanzado / ultrasónico).

#### 2. Carro del Paciente (*Patient-Side Cart*) y el Centro Remoto de Movimiento (*Remote Center of Motion* — RCM)
Situado en el campo estéril junto a la mesa quirúrgica, soporta los **brazos robóticos electromecánicos** (ya sea montados en una columna única con pluma giratoria superior tipo *Da Vinci Xi*, o en carros modulares independientes por cada brazo tipo *Hugo RAS* y *Versius*).

- **Principio Cinemático del Centro Remoto de Movimiento (*Remote Center of Motion* — RCM):**
  Es el concepto de seguridad biomecánica más importante del carro del paciente. Cuando la cánula del trócar robótico atraviesa la pared abdominal del paciente, **el brazo robótico NUNCA debe desplazar lateralmente el trócar**, pues su enorme par motor desgarraría la pared muscular y aponeurótica o provocaría hematomas graves. El **RCM** es un punto geométrico fijo en el espacio (señalizado en la cánula por una franja negra gruesa que debe colocarse exactamente a nivel de la fascia muscular abdominal) alrededor del cual **pivota esféricamente el eje del instrumento con traslación nula**:
  $$\mathbf{v}_{\text{RCM}} = \begin{bmatrix} \dot{x}_{\text{RCM}} \\ \dot{y}_{\text{RCM}} \\ \dot{z}_{\text{RCM}} \end{bmatrix} = \mathbf{0}$$
  Se implementa mediante dos tecnologías:
  1. **RCM Mecánico Pasivo (Mecanismo de paralelogramo articulado o correas acopladas):** La geometría física de los eslabones del brazo obliga mecánicamente a que el eje del instrumento pase siempre por el centro de giro remoto aunque fallen los algoritmos de software.
  2. **RCM Cinemático Programado por Software (*Software-Constrained RCM*):** Los servomotores de las articulaciones proximales del brazo coordinan sus ángulos de modo que el punto de cruce permanezca estacionario en la pared abdominal.

#### 3. Instrumentos Quirúrgicos Articulados Distales (*EndoWrist*) y Gestión por RFID
Los instrumentos robóticos de $8\text{ mm}$ de diámetro constan de una caja proximal de acoplamiento estéril con discos rotatorios magnéticos/mecánicos, un vástago largo y una **muñeca distal multiarticulada accionada por microcables de tungsteno o acero trenzado** (*tendon-driven mechanism*):
- Proporcionan **7 grados de libertad** con $90^\circ$ de angulación distal y $540^\circ$ de rotación axial (superando el rango de la mano humana).
- Cada instrumento incorpora en su carcasa un **microchip de memoria encriptada RFID / EEPROM** que registra la identificación única (UDI), el tipo de instrumento (reconocido automáticamente al insertarlo para configurar las matrices cinemáticas y los pedales de energía del generador) y el **contador estricto de vidas/usos restantes (habitualmente entre $10\text{ y }18\text{ usos}$)**. Una vez agotado el número de ciclos validados por el fabricante (debido a la fatiga mecánica de los microcables de tungsteno y la esterilización en autoclave), el robot **inutiliza electrónicamente el instrumento** e impide su uso en un nuevo paciente.

#### 4. Torre de Visión (*Vision Cart*)
Aloja la unidad central de procesamiento del sistema, la fuente de iluminación láser/LED con **fluorescencia NIR/ICG integrada (*Firefly*, excitación a $805\text{ nm}$)**, el procesador de vídeo 3D-HD, el **generador electroquirúrgico de alta frecuencia y sellado bipolar integrado** y el monitor táctil de $24''\text{–}32''$ para el cirujano asistente y enfermería instrumentista.

---

## 🔬 3. Comparativa de Plataformas Robóticas de Tejidos Blandos

### 3.1. Comparativa de Plataformas Robóticas de Tejidos Blandos (Multipuerto vs. Puerto Único)

| Característica / Plataforma | *Da Vinci Xi* (Intuitive) | *Da Vinci SP* (*Single-Port*) | *Hugo RAS* (Medtronic) | *Versius* (CMR Surgical) |
| :--- | :--- | :--- | :--- | :--- |
| **Arquitectura del Carro de Paciente** | Columna única con brazo superior giratorio (*boom*) y **4 brazos colgados** | Columna única con **1 sola cánula única de $25\text{ mm}$** | **Modular:** hasta **4 carros de brazo independientes** sobre ruedas | **Modular:** carros ligeros independientes con brazo antropomórfico |
| **Consola del Cirujano** | Consola inmersiva cerrada con visor 3D sin gafas y pedales integrados | Consola inmersiva cerrada | **Consola abierta** con monitor 3D-HD, gafas polarizadas y *eye-tracking* | **Consola abierta** (operable sentado o de pie) con mandos tipo *joystick* sin pedales |
| **Instrumentación y Calibre** | Instrumentos rígidos con muñeca distal de **$8\text{ mm}$** (7 GDL) | **3 instrumentos multiarticulados tipo «codo-muñeca» ($6\text{ mm}$) + cámara 3D flexible** por un solo puerto | Instrumentos articulados de $8\text{ mm}$ | Instrumentos articulados de **$5\text{ mm}$** con articulación en V |
| **Aplicaciones Clínicas Principales** | Urología (prostatectomía radical, nefrectomía parcial), colorrectal, ginecología, torácica, ORL | Cirugía transoral (TORS), transanal, urológica por incisión única umbilical | Urología, ginecología y cirugía general/digestiva | Cirugía digestiva, ginecológica, torácica y urológica |

### 3.2. Sistemas Robóticos Ortopédicos Guiados por Imagen 3D y Restricción Háptica

En cirugía ortopédica reconstructiva (artroplastia total o unicompartimental de rodilla y cadera), el tejido diana es el **hueso**, que a diferencia de las vísceras abdominales es **rígido e indeformable**. Esto permite registrar matemáticamente la anatomía ósea real del paciente con un modelo tridimensional virtual preoperatorio o intraoperatorio:

1. **Robots de Restricción Háptica Semiautónoma con Sierra/Fresa Integrada (ej. *Stryker Mako*):**
   - **Fase de Planificación 3D:** A partir de una **Tomografía Computarizada (TC) helicoidal preoperatoria** de cadera-rodilla-tobillo (segmentada en formato DICOM), el software construye un modelo óseo 3D virtual donde se dimensionan y orientan los componentes protésicos al milímetro y medio grado.
   - **Fase de Registro Espacial y Seguimiento Óptico Infrarrojo (*Optical Tracking*):** En el quirófano se fijan rígidamente al fémur y a la tibia sendas **estrellas de referencia con esferas reflectantes pasivas (*fiducial arrays*)**. Una **cámara estereoscópica infrarroja** ($\lambda \approx 850\text{ nm}$) triangula por fotogrametría 3D la posición de las esferas a $> 60\text{–}200\text{ Hz}$ con precisión submilimétrica ($< 0,5\text{ mm}$ y $< 0,5^\circ$). El cirujano palpa con un puntero calibrado decenas de puntos de la superficie cortical ósea, y el algoritmo **ICP (*Iterative Closest Point*)** calcula la matriz de transformación rígida $^{cámara}\mathbf{T}_{TC}$ que superpone el hueso real con el TC virtual (error cuadrático medio $\text{RMS} < 0,5\text{ mm}$), compensando en tiempo real cualquier movimiento de la pierna durante la cirugía.
   - **Fase de Ejecución con Frontera Háptica (*AccuStop Haptic Technology*):** El cirujano sujeta el mango de la sierra oscilante o fresa acoplada al extremo del brazo robótico. Dentro del volumen de corte óseo permitido, el brazo se mueve libremente sin ofrecer resistencia (control de impedancia mecánica nula); pero en cuanto la hoja de sierra se aproxima a menos de $0,5\text{ mm}$ del plano límite virtual o de los ligamentos cruzados/vasos poplíteos, los servomotores del brazo **generan instantáneamente una pared de fuerza rígida impenetrable (*Haptic Boundary*) y cortan la alimentación eléctrica de la sierra**, impidiendo físicamente resecar hueso fuera del plan o lesionar partes blandas.
2. **Robots Ortopédicos Sin TC Preoperatorio (*Image-Free / Imageless* — ej. *Zimmer Biomet ROSA Knee*, *Smith+Nephew CORI*, *DePuy VELYS*):** Construyen el modelo 3D intraoperatoriamente mediante mapeo de nube de puntos con puntero óptico (*bone morphing*) o radiografías calibradas, posicionando robóticamente las guías de corte o controlando la retracción de la fresa.

### 3.3. Robots de Navegación para Columna Vertebral y Neurocirugía Estereotáxica

En instrumentación espinal (colocación de tornillos transpediculares cerca de la médula espinal y arteria vertebral) y en **neurocirugía funcional estereotáxica** (implantación de electrodos de **Estimulación Cerebral Profunda — ECP / DBS** en el núcleo subtalámico para enfermedad de Parkinson, o electrodos de estereoelectroencefalografía SEEG en epilepsia refractaria):
- Sistemas como ***Mazor X Stealth Edition*, *Globus ExcelsiusGPS* o *Zimmer Biomet ROSA Brain*** fusionan la **RM cerebral / TC preoperatoria** con la **fluoroscopia 3D o TC intraoperatorio de haz cónico (O-Arm / arco 3D)**.
- El brazo robótico de 6 GDL se desplaza automáticamente hasta alinearse con el vector exacto de la trayectoria planificada (precisión de posicionamiento espacial **$< 0,8\text{ a }1,0\text{ mm}$**), bloqueando sus frenos para actuar como un **portaguías mecánico rígido** a través del cual el neurocirujano introduce la broca, el tornillo pedicular o la cánula cerebral.

---

## 🛡️ 4. Requisitos de Infraestructura e Ingeniería Hospitalaria del Quirófano Robótico

### 4.1. Requisitos de Infraestructura e Ingeniería Hospitalaria del Quirófano Robótico

La implantación de un sistema robótico en un bloque quirúrgico exige verificar requisitos estructurales, eléctricos y de climatización superiores a los de un quirófano convencional:

1. **Superficie, Altura Libre y Sobrecarga Estructural del Forjado:**
   - **Superficie útil de sala:** Mínimo recomendado de **$50\text{ a }65\text{ m}^2$** (frente a los $36\text{–}42\text{ m}^2$ de un quirófano estándar) para alojar simultáneamente el carro del paciente con sus brazos desplegados, la consola del cirujano (o doble consola docente), la torre de visión, la mesa quirúrgica, la estación de anestesia y las mesas de instrumentación manteniendo los pasillos de circulación limpia.
   - **Peso y carga en forjado:** El carro del paciente de un sistema *Da Vinci Xi* pesa entre **$550\text{ y }850\text{ kg}$** concentrados sobre 4 ruedas en una huella de $\approx 1\text{ m}^2$, exigiendo verificar la capacidad portante del forjado ($\ge 500\text{ kg/m}^2$ o refuerzo estructural) y la nivelación horizontal del pavimento conductivo.
2. **Suministro Eléctrico (`REBT ITC-BT-38`) y Circuitos Independientes:**
   - Los tres componentes (Consola, Carro de Paciente y Torre de Visión) deben conectarse a circuitos diferenciados del **transformador de aislamiento del esquema IT médico** del quirófano (debido al elevado pico de corriente de arranque de las fuentes y del generador electroquirúrgico integrado) y al embarrado de equipotencialidad (**EE $\le 0,1\text{ }\Omega$**).
   - El carro del paciente incorpora una **batería interna de emergencia (SAI integrado)** capaz de mantener alimentada la electrónica y permitir la retirada segura de los instrumentos en caso de fallo de suministro eléctrico.
3. **Sincronización con la Mesa Quirúrgica (*Integrated Table Motion* — ITM):**
   - **Regla crítica de seguridad:** En un quirófano convencional, una vez que los brazos del carro del paciente están acoplados a los trócares del paciente (**estado *Docked***), **está terminantemente prohibido mover o inclinar una mesa quirúrgica convencional**, ya que los brazos robóticos son rígidos en el espacio y desgarrarían la pared abdominal del paciente al descender la mesa.
   - Únicamente cuando el robot dispone de **Movimiento Integrado de Mesa (*Integrated Table Motion* — ITM)** emparejado por enlace inalámbrico seguro / infrarrojo con una mesa quirúrgica certificada (ej. *Trumpf TruSystem 7000dV* o *Maquet*), los brazos robóticos leen en tiempo real los sensores de inclinación de la mesa y **reajustan dinámicamente sus articulaciones y su RCM al unísono con el movimiento de Trendelenburg** sin necesidad de desacoplar (*undock*) los instrumentos.

### 4.2. Seguridad Funcional (`UNE-EN IEC 80601-2-77`), Fallos Críticos y Desacoplamiento de Emergencia (*Emergency Undocking*)

- **Autotest de Encendido (*Power-On Self-Test* — POST) y Homing:** Al encender el sistema, los brazos verifican todos los sensores redundantes, frenos electromagnéticos y continuidad de fibra óptica sin instrumentos insertados.
- **Gestión de Fallos Recuperables vs. No Recuperables:** Si los dos codificadores redundantes de una articulación discrepan en más de una fracción de grado o la corriente de un servomotor supera el par previsto (colisión externa), el sistema entra en **Parada Segura (*Fault Safe State*)**, activando los frenos mecánicos y emitiendo alarma de prioridad alta.
- **Protocolo de Conversión Abierta y Desacoplamiento de Emergencia (*Emergency Undocking*):** Ante una hemorragia masiva incontrolable o parada cardiorrespiratoria en el paciente, todo el equipo quirúrgico debe entrenarse para ejecutar el desacoplamiento de emergencia en **menos de $30\text{–}60\text{ segundos}$**:
  1. Abrir las mandíbulas de los instrumentos con la **llave mecánica de liberación manual de emergencia (*Instrument Release Kit*)** encajada en la carcasa del instrumento en caso de bloqueo del sistema.
  2. Extraer los instrumentos bajo visión directa, soltar los cierres rápidos de las cánulas de los trócares, pulsar el **botón de Parada de Emergencia (*E-Stop*)** y retirar el carro motorizado para dar paso a la laparotomía o RCP.

---

## ⚡ 5. Síntesis de Alto Rendimiento, Tabla Resumen y Puntos Críticos de Examen

### 5.1. Tabla Maestra de Cifras, Umbrales y Conceptos Clave

| Concepto / Subsistema Robótico | Norma / Parámetro Técnico Oficial | Valor / Cifra Exacta de Examen A1 | Implicación Clínica o de Ingeniería Biomédica |
| :--- | :--- | :--- | :--- |
| **Norma particular de robótica quirúrgica** | Norma `UNE-EN IEC` | **`UNE-EN IEC 80601-2-77`** (Equipos RASE) | Seguridad básica y funcionamiento esencial de robots quirúrgicos |
| **Nivel de autonomía de robots telemanipulados** | Taxonomía Yang et al. / IEC | **Nivel 0 (Maestro-Esclavo sin autonomía)** | El robot **nunca** opera solo; traduce en tiempo real las manos del cirujano |
| **Grados de libertad intracorpóreos** | Laparoscopia rígida vs. Instrumento robótico | Laparoscopia: **4 GDL** · Robótica (*EndoWrist*): **$\mathbf{7\text{ GDL}}$** | Añade cabeceo (*pitch*) y guiñada (*yaw*) distales internos + rotación $540^\circ$ |
| **Centro Remoto de Movimiento (RCM)** | Punto de pivote en la cánula del trócar | **Traslación nula ($\Delta x = \Delta y = \Delta z = 0$) en la fascia abdominal** | Impide que el brazo ejerza palanca lateral y desgarre la pared abdominal |
| **Filtrado digital de temblor fisiológico** | Banda de frecuencia eliminada | **Temblor humano de $\mathbf{6\text{ a }12\text{ Hz}}$** (filtro paso bajo) | Estabiliza la punta en microcirugía y suturas vasculares |
| **Escalado de movimiento (*Motion Scaling*)** | Relaciones de desmultiplicación | **$1{,}5:1$, $2:1$, $\mathbf{3:1}$ o $\mathbf{5:1}$** + **Eliminación del Efecto Fulcro** | En $3:1$, mover $3\text{ cm}$ los dedos mueve solo $1\text{ cm}$ la punta en igual sentido |
| **Frecuencia del lazo de servocontrol** | Enlace por fibra óptica Consola-Carro | **$\ge 1.000\text{–}1.300\text{ Hz}$** (latencia $< 10\text{ ms}$) | Software de seguridad **Clase C** |
| **Sensor de seguridad de la Consola Maestra** | Presencia de cabeza en el visor 3D | **Sensor Infrarrojo (*Head-in Sensor*)** | Bloquea instantáneamente los brazos si el cirujano aparta la vista del visor |
| **Control de vida útil de instrumentos** | Memoria electrónica en carcasa | **Chip RFID / EEPROM ($\mathbf{10\text{ a }18\text{ usos}}$ máximos)** | Desactiva el instrumento al agotar los ciclos por fatiga de microcables |
| **Robots ortopédicos semiautónomos (*Mako*)** | Principio de seguridad de corte óseo | **Seguimiento óptico IR + Restricción Háptica (*Active Constraint*)** | Frena el brazo y apaga la sierra si intenta salir del volumen planificado en TC |
| **Despliegue de cirugía robótica en el ámbito hospitalario** | Cobertura hospitalaria gallega | **Los 7 Hospitales Universitarios de las 7 Áreas Sanitarias** | hospital universitario, hospital universitario, hospital universitario, hospital universitario, hospital universitario, CHOP y hospital universitario |

### 5.2. Puntos Críticos y Trampas Habituales de Examen

1. **Trampa de test sobre la autonomía de los robots de tejidos blandos (*Da Vinci*, *Hugo*, *Versius*):** Si una pregunta sugiere que estos robots «ejecutan de forma autónoma la disección o la sutura programada previamente en el TC», es **totalmente FALSA**. Son sistemas **telemanipulados maestro-esclavo de Nivel 0 de autonomía**: cada milímetro que avanza la aguja o la tijera es ordenado en tiempo real por los dedos del cirujano en la consola maestra.
2. **Trampa sobre el Centro Remoto de Movimiento (RCM) y la mesa quirúrgica:** El **RCM** debe quedar posicionado exactamente en el espesor de la pared muscular abdominal. Si la mesa quirúrgica se mueve o se pone en Trendelenburg **con los brazos del robot acoplados (*docked*)** y la mesa **NO** dispone de sistema de sincronización activa (*Integrated Table Motion* — ITM), los brazos robóticos mantendrán su RCM fijo en el espacio absoluto de la sala y desgarrarán la pared abdominal del paciente. Sin ITM, siempre hay que **desacoplar (*undock*) todos los brazos antes de mover la mesa quirúrgica**.
3. **Trampa sobre la retroalimentación táctil (*Haptic Feedback*):** En los sistemas telemanipulados clásicos de tejidos blandos (hasta la generación *Da Vinci Xi*), el cirujano carece de sensación táctil directa de la tensión del hilo de sutura y suple la propiocepción mediante **pistas visuales 3D de deformación tisular** (*visual haptics*), mientras que en los robots ortopédicos (*Mako*) la **restricción háptica (*haptic boundary*)** es precisamente el mecanismo físico central que guía y limita el corte óseo.
4. **Trampa sobre el pedal de embrague (*Clutch*):** Pulsar el pedal de embrague en la consola maestra **NO mueve los instrumentos dentro del paciente**; al contrario, congela los brazos esclavos en su posición intracorpórea y libera los mandos maestros para que el cirujano reubique sus manos en una postura ergonómica centrada.
