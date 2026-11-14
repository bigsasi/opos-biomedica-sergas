# Tema 25 — Caracterización y funcionamiento de los sistemas de endoscopia quirúrgica. Componentes y tecnologías.

## 📖 1. Principios de la Cirugía Mínimamente Invasiva (CMI) y Clasificación de Procedimientos Endosquirúrgicos

### 1.1. Principios de la Cirugía Mínimamente Invasiva (CMI) y Clasificación de Procedimientos Endosquirúrgicos

La **endoscopia quirúrgica** comprende el conjunto de técnicas operatorias en las que el acceso al órgano diana se realiza a través de pequeñas incisiones cutáneas mediante cánulas o **trócares** ($3\text{ a }15\text{ mm}$ de diámetro) o a través de cavidades anatómicas distendidas artificialmente por un medio gaseoso o líquido, visualizando el campo operatorio en monitores quirúrgicos de alta resolución mediante una cadena de imagen optoelectrónica cerrada.

Desde el punto de vista de la ingeniería biomédica hospitalaria, las disciplinas endosquirúrgicas se clasifican según la naturaleza de la cavidad y el medio físico empleado para su distensión y visualización:

1. **Cavidades virtuales distendidas mediante gas ($\text{CO}_2$ medicinal):**
   - **Laparoscopia (cirugía general, digestiva, ginecológica y urológica):** Creación de un **neumoperitoneo** (o retroneumoperitoneo en cirugía renal/adrenal) insuflando dióxido de carbono a presión controlada ($12\text{–}15\text{ mmHg}$ en adultos).
   - **Toracoscopia / Cirugía Torácica Videoasistida (VATS):** Acceso al espacio pleural con colapso pulmonar selectivo (intubación bronquial selectiva con tubo de doble luz), con o sin insuflación de $\text{CO}_2$ a baja presión ($4\text{–}8\text{ mmHg}$).
   - **Cirugía endoscópica transanal (TEM / TAMIS) y tiroidectomía endoscópica:** Insuflación local controlada de $\text{CO}_2$ en espacios confinados.
2. **Cavidades anatómicas o articulares distendidas mediante medio líquido a presión:**
   - **Artroscopia (rodilla, hombro, cadera, tobillo, muñeca):** Distensión de la cápsula articular con solución salina isotónica ($\text{NaCl } 0,9\%$) o Ringer Lactato a presiones de $40\text{ a }80\text{ mmHg}$ mediante bombas de artroscopia.
   - **Histeroscopia quirúrgica y Resectoscopia ginecológica:** Distensión de la cavidad uterina a $70\text{–}100\text{ mmHg}$ con medio electrolítico ($\text{NaCl } 0,9\%$ en sistemas bipolares o morceladores mecánicos) o no electrolítico (glicina $1,5\%$ o sorbitol-manitol en sistemas monopolares).
   - **Endourología (Cistoscopia, Resección Transuretral de Próstata/Vejiga [RTU], Ureterorrenoscopia rígida/semirrígida y Nefrolitotomía Percutánea [NLPC]):** Irrigación continua con control de presión intrapélvica o intravesical.
   - **Neuroendoscopia ventricular:** Acceso a los ventrículos cerebrales (ej. ventriculocisternostomía del tercer ventrículo) con irrigación isotónica atemperada a $37\text{ }^\circ\text{C}$ (Ringer Lactato).

### 1.2. Fundamentos de Óptica Física en Telescopios Rígidos: El Sistema de Lentes de Barra de Hopkins (*Rod-Lens*)

En el diseño clásico de los primeros cistoscopios de **Maximilian Nitze (1879)**, el tubo rígido metálico contenía una sucesión de lentes convergentes delgadas de vidrio separadas entre sí por largos espacios de aire. Esta configuración presentaba graves limitaciones físicas: pérdidas de luz por reflexión en las múltiples interfases aire-vidrio, reducido ángulo de campo visual, viñeteado severo y gran fragilidad mecánica.

En **1959**, el físico británico **Harold Horace Hopkins** revolucionó la óptica quirúrgica invirtiendo el paradigma geométrico mediante el **Sistema de Lentes Cilíndricas de Barra (*Rod-Lens System*)**: el espacio interior del tubo metálico pasa a estar ocupado por **cilindros largos de vidrio óptico o cuarzo de alto índice de refracción ($n \approx 1,52\text{–}1,65$)** con sus extremos tallados esféricamente y recubiertos de capas antirreflejantes multicapa, de modo que las «lentes» pasan a ser los pequeños espacios delgados de aire interpuestos entre las barras de vidrio.

Las leyes ópticas que justifican la superioridad del sistema de Hopkins son:

1. **Incremento cuadrático del flujo luminoso transmitido ($T$):** Para un tubo endoscópico de longitud fija $L$ y radio interior $r$, la capacidad de transporte de energía luminosa (*étendue* o invariante óptico de Lagrange-Helmholtz) es directamente proporcional al cuadrado del índice de refracción del medio que llena el espacio entre las lentes:
   $$\Phi_{\text{luz}} \propto n^2 \cdot \left(\frac{r^4}{L^2}\right)$$
   Al sustituir las columnas de aire ($n_{\text{aire}} = 1,00$) por cilindros macizos de vidrio óptico ($n_{\text{vidrio}} \approx 1,55\text{–}1,62$), el término $n^2$ aumenta por sí solo en un factor $\approx 2,4\text{ a }2,6$. Si además se considera que las paredes del tubo metálico pueden ser más delgadas al actuar los propios cilindros de vidrio como soporte estructural, el radio libre $r$ aumenta ligeramente, lo que (al estar elevado a la cuarta potencia $r^4$) multiplica la transmisión luminosa global hasta **9 veces ($\times 9$)** respecto al sistema de Nitze.
2. **Ampliación del campo visual aparente ($\text{FOV}$) y resolución espacial:** La refracción en medios de mayor índice reduce las aberraciones esféricas y cromáticas (empleando dobletes o tripletes acromáticos apocromáticos soldables), permitiendo ángulos de visión de $70^\circ\text{ a }110^\circ$ sin distorsión en barril excesiva y una Función de Transferencia de Modulación ($\text{MTF}$) compatible con sensores 4K UHD.
3. **Reflexión Interna Total en las fibras de iluminación periféricas:** Alrededor del tren central de lentes de barra de Hopkins se dispone coaxialmente un mazo anular incoherente de fibras ópticas de vidrio de sílice que transportan la luz desde el poste lateral de conexión (tipo Storz, Olympus, Wolf o ACMI) hasta la punta distal. Cada fibra consta de un núcleo de índice $n_1 \approx 1,62$ y un revestimiento (*cladding*) de índice $n_2 \approx 1,52$, confinando los rayos dentro del ángulo de aceptación definido por su **Apertura Numérica ($\text{NA}$)**:
   $$\text{NA} = n_0 \cdot \sin\theta_{\text{máx}} = \sqrt{n_1^2 - n_2^2} \approx 0,55\text{–}0,66$$

### 1.3. Marco Reglamentario y Normativo Aplicable

1. **Reglamento (UE) 2017/745 (MDR) y Real Decreto 192/2023:**
   - Las ópticas rígidas e instrumentos endosquirúrgicos invasivos de uso pasajero o a corto plazo a través de un acceso quirúrgico se clasifican como **Clase IIa** (**Regla 6** del Anexo VIII del MDR), pasando a **Clase III** si entran en contacto directo con el sistema nervioso central (neuroendoscopios) o el sistema circulatorio central / corazón.
   - Los equipos activos de la torre: las fuentes de luz y procesadores de vídeo son **Clase I / IIa**, mientras que los **insufladores electrónicos de $\text{CO}_2$** y las **bombas quirúrgicas de irrigación a presión** se clasifican como **Clase IIa o Clase IIb** (**Regla 9 / Regla 11** del Anexo VIII, al administrar energía o sustancias/gases determinando la presión intracavitaria con riesgo vital de embolia o intravasación).
   - Las ópticas e instrumentos quirúrgicos reutilizables están sujetos al marcado directo e indeleble del **Identificador Único del Producto (UDI)** sobre el chasis metálico (grabado láser DataMatrix resistente a ciclos de autoclave) conforme al artículo 27 del MDR.
2. **Norma Particular `UNE-EN 60601-2-18`:** Establece los requisitos particulares para la seguridad básica y el funcionamiento esencial de los equipos de endoscopia (límites de temperatura superficial en el extremo distal de la óptica $\le 41\text{ }^\circ\text{C}$ o indicación de riesgo térmico si supera dicho umbral, aislamiento de partes aplicables **Tipo BF o CF a prueba de desfibrilación**, y limitación de corrientes de fuga combinadas con equipos de alta frecuencia `UNE-EN 60601-2-2`).
3. **Serie `UNE-EN ISO 8600` (Partes 1 a 8):** Normaliza los métodos de ensayo óptico de endoscopios médicos y dispositivos de endoterapia: determinación del campo de visión ($0^\circ, 30^\circ, 45^\circ, 70^\circ$), dirección de visión, distorsión geométrica, resolución espacial en pares de líneas por milímetro ($\text{lp/mm}$) e índice de reproducción cromática.

---

## ⚙️ 2. Subsistema 1: Ópticas Rígidas y Subsistema 2

Una **Torre de Endoscopia Quirúrgica** constituye un sistema modular montado sobre carro móvil con transformador de aislamiento o integrado en la **columna de techo de cirugía (`UNE-EN ISO 11197`)**. Consta de cinco subsistemas tecnológicos interdependientes:

```
[1. Fuente de Luz LED/Xenón + Láser NIR] ──(Cable Fibra Óptica)──► [2. Óptica Rígida Hopkins (0°/30°/45°)]
                                                                             │ (Acoplo C-Mount)
[3. Procesador Vídeo 4K/3D/ICG] ◄──(Cable Híbrido Fibra/Cobre)── [Cabezal Cámara 3-CMOS + Prisma RGB]
       │
       ├──► Monitores Quirúrgicos 4K/3D (Grado Médico DICOM / BT.2020)
       └──► Integración HIS/PACS (DICOM Visible Light / HL7) y Quirófano Integrado
[4. Insuflador Electrónico CO2 (12-15 mmHg, 40-50 L/min)] ──► Trócar Abdominal (Neumoperitoneo)
[5. Bomba Irrigación/Aspiración + Motor Shaver] ───────────► Cavidad Articular / Uterina / Vesical
```

### 2.1. Subsistema 1: Ópticas Rígidas (Telescopios Quirúrgicos)

El telescopio rígido consta de un tubo envolvente de acero inoxidable quirúrgico austenítico CrNiMo (`AISI 316L`), un objetivo distal sellado con **ventana de cristal de zafiro sintético** ($\text{Al}_2\text{O}_3$, dureza $9\text{ Mohs}$, resistente al rayado por instrumental y a choques térmicos), el tren interno de lentes de barra de Hopkins con separadores metálicos calibrados, el poste de entrada de luz lateral y el ocular proximal con acoplamiento estándar C-Mount.

- **Ángulo de Dirección de Visión (*Direction of View* — DOV):** Ángulo formado entre el eje longitudinal geométrico del tubo del endoscopio y el rayo central del cono visual captado por el prisma objetivo distal:
  - **Óptica de $0^\circ$ (Visión frontal o directa):** El eje óptico coincide con el eje mecánico del instrumento. Proporciona una orientación espacial intuitiva e inmediata; se emplea en el acceso laparoscópico inicial, ginecología diagnóstica y cirugía general básica.
  - **Óptica de $30^\circ$ (Visión oblicua estándar):** Incorpora un prisma deflector distal a $30^\circ$. Al hacer girar el cuerpo del telescopio sobre su eje longitudinal (mientras el cabezal de la cámara se mantiene horizontal), el cirujano puede «mirar por encima de las esquinas» y explorar recovecos anatómicos ocultos sin desplazar el trócar (estándar de oro en laparoscopia avanzada, hiato esofágico, cirugía colorrectal, toracoscopia y artroscopia de rodilla/hombro).
  - **Ópticas de $45^\circ$, $70^\circ$ y $120^\circ$:** Empleadas en cirugía bariátrica compleja, cistoscopia diagnóstica de cuello vesical, artroscopia de cadera y cirugía endoscópica nasosinusal (CENS).
  - **Ópticas de ángulo variable (*EndoCAMeleon* / *EndoEye Flex*):** Incorporan un prisma distal basculante mecánicamente entre $0^\circ\text{ y }90^\circ\text{–}120^\circ$ o una punta articulable electrónicamente sin cambiar de óptica.
- **Calibres y Longitudes según Especialidad:**
  - **Laparoscopia y Toracoscopia:** Diámetro de **$10\text{ mm}$** (máxima luminosidad y profundidad de campo) o **$5\text{ mm}$** (cirugía mini-laparoscópica y pediátrica), longitud de trabajo de $300\text{ a }330\text{ mm}$ ($450\text{ mm}$ en cirugía bariátrica).
  - **Artroscopia:** Diámetro estándar de **$4,0\text{ mm}$** ($30^\circ$, longitud $175\text{ mm}$) para rodilla, hombro y cadera; $2,7\text{ mm}$ o $1,9\text{ mm}$ para muñeca, tobillo y pequeñas articulaciones.
  - **Histeroscopia y Cistoscopia / RTU:** Diámetro de **$2,9\text{ mm}$ o $4,0\text{ mm}$** ($12^\circ$ o $30^\circ$, longitud $300\text{ mm}$), insertado dentro de una doble vaina de flujo continuo (entrada y salida de líquido independientes) y elemento de trabajo activo o pasivo para el asa de resección.

### 2.2. Subsistema 2: Cabezal de Cámara y Procesador de Vídeo Quirúrgico (3-CMOS, 4K UHD)

El cabezal de cámara se acopla al ocular del telescopio mediante un anillo rápido con lente de enfoque y *zoom* óptico parafocal:

1. **Arquitectura Monochip vs. 3-Chip (Prisma Dicroico RGB):**
   - Los cabezales básicos emplean un único sensor CMOS con filtro de mosaico de Bayer (RGGB), donde cada píxel solo capta un color primario y los otros dos se interpolan matemáticamente (*demosaicing*), perdiendo resolución cromática real.
   - Los cabezales quirúrgicos de alta gama emplean tecnología **3-CMOS (o 3-CCD)**: la luz procedente del telescopio atraviesa un **bloque de prismas dicroicos con recubrimientos interferenciales** que descomponen el haz óptico en tres bandas espectrales puras: **Rojo ($\text{R}, \sim 600\text{–}700\text{ nm}$)**, **Verde ($\text{G}, \sim 500\text{–}600\text{ nm}$)** y **Azul ($\text{B}, \sim 400\text{–}500\text{ nm}$)**, dirigiendo cada banda a un sensor CMOS dedicado de resolución completa. Esto triplica la fidelidad cromática y la relación señal/ruido ($\text{SNR}$), crítica para diferenciar planos tisulares sutiles y vasos sangrantes dentro de una cavidad donde predomina el color rojo.
2. **Estándares de Resolución y Espacio de Color (Full HD vs. 4K UHD):**
   - **Full HD ($1920 \times 1080\text{ píxeles}$, barrido progresivo a $60\text{ Hz}$):** Relación de aspecto $16:9$ ($\approx 2,07\text{ Megapíxeles}$), espacio de color **Rec. 709** ($8\text{ bits}$ por canal).
   - **4K Ultra High Definition ($3840 \times 2160\text{ píxeles}$ o $4096 \times 2160$ a $60\text{ Hz}$):** Cuadruplica el número de píxeles ($\approx 8,3\text{ Megapíxeles}$), incorpora profundidad de color de **$10\text{ o }12\text{ bits}$** y espacio cromático extendido **ITU-R BT.2020**, permitiendo visualizar en pantallas quirúrgicas de $32''\text{ a }55''$ microestructuras anatómicas (plexos nerviosos autonómicos, conductos linfáticos) con percepción de profundidad monocular mejorada.
3. **Algoritmos de Procesamiento Digital en Tiempo Real (Latencia $< 16\text{–}30\text{ ms}$):**
   - **Balance de blancos (*White Balance*):** Calibración espectral previa al inicio de la cirugía apuntando a una gasa blanca estéril bajo la luz real de la fuente y el cable óptico empleados, ajustando las ganancias de los canales $G_R, G_G, G_B$.
   - **Control Automático de Exposición y Obturación Electrónica (*Anti-Blooming*):** Evita la saturación blanca deslumbrante cuando un instrumento metálico brillante refleja la luz a corta distancia de la lente distal.
   - **Reducción de humo (*Smoke Reduction*) y realce de bordes/contraste vascular (*Clara / Chroma*):** Algoritmos FPGA que incrementan localmente la visibilidad a través del penacho de humo electroquirúrgico y acentúan los contrastes de los vasos sanguíneos.

### 2.3. Subsistema 3: Fuentes de Luz Fría y Cables de Transmisión Fotónica

Se denomina **«Fuente de Luz Fría»** porque incorpora un **filtro interferencial reflectante de infrarrojos (*Hot Mirror*)** entre la lámpara y el cono de focalización del cable óptico, bloqueando la radiación infrarroja térmica ($\lambda > 700\text{–}750\text{ nm}$) y transmitiendo únicamente el espectro visible ($400\text{–}700\text{ nm}$), aunque la alta densidad fotónica en el extremo distal sigue generando calor por absorción radiante.

| Característica Técnica | Fuente de Arco Corto de Xenón | Fuente de Estado Sólido LED / Híbrida Láser-LED |
| :--- | :--- | :--- |
| **Principio físico de emisión** | Descarga eléctrica en gas Xenón a alta presión ($20\text{–}40\text{ bar}$) entre electrodos de tungsteno | Recombinación electroluminiscente en semiconductores InGaN / Fósforo o bombeo láser |
| **Potencia nominal típica** | $180\text{ W a }300\text{ W}$ | $100\text{ W a }300\text{ W}$ equivalentes fotométricos |
| **Temperatura de color ($T_c$)** | $\mathbf{5.800\text{ K – }6.200\text{ K}}$ (espectro solar continuo puro) | $\mathbf{5.500\text{ K – }6.500\text{ K}}$ (constante durante toda la vida útil) |
| **Vida útil de la lámpara** | **$500\text{ horas}$** (con contador horario y degradación del espectro) | **$\ge 30.000\text{ horas}$** (no requiere recambio periódico de bulbo) |
| **Tiempo de encendido y apagado** | Requiere pulso de cebado de alta tensión ($> 20\text{ kV}$) y enfriamiento por ventilador | Instantáneo; modulación PWM digital sin parpadeo (*flicker-free*) e integración con NIR/ICG |

**Cables de Transmisión de Luz (Diámetro activo $3,5\text{ a }5,0\text{ mm}$, longitud $1,8\text{ a }3,0\text{ m}$):**
1. **Cable de Haces de Fibra Óptica Incoherente:** Compuesto por miles de microfibras de vidrio de cuarzo ($30\text{–}50\text{ }\mu\text{m}$). Es flexible y **esterilizable en autoclave de vapor a $134\text{ }^\circ\text{C}$**, pero sufre rotura progresiva de fibras por acodamiento o tracción (apreciable como puntos negros al mirar un extremo enfrentando el otro a la luz ambiental; **debe retirarse si presenta $> 25\%\text{–}30\%$ de fibras rotas**).
2. **Cable de Gel Líquido Conductivo Óptico:** Tubo flexible de fluoropolímero relleno de un gel fluido transparente de alto índice de refracción con terminales de cuarzo. Ofrece un $+20\text{–}30\%$ de transmisión luminosa adicional, mayor temperatura de color y no sufre rotura de fibras individuales, pero **NO puede esterilizarse en autoclave de vapor a $134\text{ }^\circ\text{C}$** (el fluido herviría y reventaría los sellos ópticos; solo admite desinfección o esterilización a baja temperatura).

### 2.4. Subsistema 4: Insuflador Electrónico de $\text{CO}_2$ y Física del Neumoperitoneo

En cirugía laparoscópica, la cavidad peritoneal es un espacio virtual colapsado. Para separar la pared abdominal anterior de las vísceras y crear una bóveda de trabajo, el **insuflador electrónico** inyecta gas medicinal de forma servorregulada.

#### A) Justificación Biofísica del Uso Exclusivo de Dióxido de Carbono ($\text{CO}_2$)
El gas de elección universal en laparoscopia es el **$\text{CO}_2$ medicinal ($> 99,5\%$ de pureza)** por **dos propiedades físico-químicas determinantes (pregunta recurrente de examen)**:
1. **Es totalmente incombustible y NO comburente:** No arde ni mantiene la combustión, permitiendo utilizar con seguridad dentro del abdomen bisturís eléctricos monopolares/bipolares, coagulación por plasma de argón o láseres quirúrgicos sin riesgo de deflagración o explosión intracavitaria (riesgo letal si se utilizase oxígeno $\text{O}_2$, aire o protóxido de nitrógeno $\text{N}_2\text{O}$ en presencia de gases intestinales como metano $\text{CH}_4$ o hidrógeno $\text{H}_2$).
2. **Elevadísima solubilidad en sangre y rápida eliminación pulmonar (Ley de Henry):** El coeficiente de solubilidad Ostwald/Bunsen del $\text{CO}_2$ en plasma a $37\text{ }^\circ\text{C}$ es de **$0,57\text{ mL de gas/mL de sangre}$** (frente a solo $0,024$ del $\text{O}_2$ y $0,012$ del $\text{N}_2$). Por tanto, el $\text{CO}_2$ es **más de 20 veces más soluble en sangre que el oxígeno y más de 45 veces más soluble que el nitrógeno/aire**. Si se produce una entrada accidental de gas en una vena abierta (embolia gaseosa), las burbujas de $\text{CO}_2$ se disuelven rápidamente en la sangre venosa en forma de bicarbonato ($\text{CO}_2 + \text{H}_2\text{O} \rightleftharpoons \text{H}_2\text{CO}_3 \rightleftharpoons \text{H}^+ + \text{HCO}_3^-$) y son eliminadas en los pulmones mediante un aumento de la ventilación minuto por el anestesiólogo (monitorizado por el ascenso de la $\text{EtCO}_2$ en el capnógrafo).

#### B) Arquitectura Neumática y Algoritmo de Control Presión-Flujo
El insuflador se conecta a la botella de $\text{CO}_2$ (presión de vapor licuado $\approx 50\text{–}60\text{ bar}$ a $20\text{ }^\circ\text{C}$) o a la toma mural centralizada del quirófano (`UNE-EN ISO 9170`, color **gris**, $4\text{–}5\text{ bar}$). Como por un único tubo de silicona hacia el trócar no se puede medir la presión estática intraabdominal ($P_{\text{abd}}$) en el mismo instante en que circula un alto flujo de gas ($\dot{V}$) debido a la caída de presión dinámica en la resistencia del tubo y de la llave del trócar ($\Delta P = R_{\text{tubo}} \cdot \dot{V}$):
$$P_{\text{salida\_insuflador}} = P_{\text{abd}} + R_{\text{tubo}} \cdot \dot{V}$$
Los insufladores electrónicos convencionales operan en **modo pulsado intermitente**: insuflan durante $1\text{–}3\text{ segundos}$, cierran la electroválvula proporcional durante $200\text{–}500\text{ ms}$ ($\dot{V} = 0$) para que los transductores piezoresistivos redundantes midan la **presión intraabdominal estática real**, y reanudan el flujo proporcionalmente a la diferencia $(P_{\text{objetivo}} - P_{\text{abd}})$.

- **Presión Intraabdominal Objetivo ($P_{\text{set}}$):** En el **adulto estándar se programa entre $\mathbf{12\text{ y }15\text{ mmHg}}$**. En pacientes pediátricos, ancianos frágiles o gestantes se reduce a **$8\text{–}10\text{ mmHg}$** (*laparoscopia de baja presión*). Presiones $> 15\text{–}20\text{ mmHg}$ comprimen la vena cava inferior (cayendo el retorno venoso y el gasto cardíaco), reducen la perfusión esplácnica/renal (oliguria) y elevan el diafragma (aumentando la presión pico de vía aérea y reduciendo la compliancia pulmonar).
- **Caudal de Flujo ($\dot{V}_{\text{set}}$):** Al inicio (con aguja de Veress) se emplea flujo bajo ($1\text{–}2\text{ L/min}$) comprobando que la presión inicial sea $< 8\text{ mmHg}$; una vez colocados los trócares se eleva a **flujo alto ($20\text{ a }40\text{–}50\text{ L/min}$)** para compensar instantáneamente las fugas al aspirar o cambiar instrumentos.
- **Acondicionamiento Térmico y Seguridad:** Incluye filtro hidrofóbico bacteriológico/vírico ($0,1\text{–}0,2\text{ }\mu\text{m}$) a la salida para impedir el reflujo de fluidos biológicos al interior del equipo, calefactor en el tubo ($37\text{ }^\circ\text{C}$) para evitar hipotermia y empañamiento de la lente del laparoscopio (efecto Joule-Thomson de enfriamiento por expansión del $\text{CO}_2$), y **válvula electromecánica de alivio automático de sobrepresión** que ventea el gas al exterior si la presión abdominal supera el umbral de alarma ($> 20\text{–}30\text{ mmHg}$ sostenidos durante $> 3\text{–}5\text{ s}$).

### 2.5. Subsistema 5: Bombas de Irrigación-Aspiración y Motores Quirúrgicos (*Shavers*)

En artroscopia, histeroscopia y endourología, una **bomba peristáltica de rodillos o centrífuga servocontrolada** inyecta líquido estéril y aspira simultáneamente los restos tisulares y sangre:
- **Control manométrico compensado:** El equipo estima la presión real en el interior de la articulación o del útero descontando la presión hidrostática de la columna de líquido (altura de la bolsa respecto a la articulación) y la pérdida de carga del trócar.
- **Motores quirúrgicos artroscópicos (*Shavers* / Sinoviotomos):** Piezas de mano motorizadas con motor eléctrico *brushless* autoclavable que accionan cuchillas tubulares concéntricas o fresas de carburo/diamante en modo rotación directa, inversa u **oscilación alternante ($1.000\text{ a }8.000\text{ rpm}$)**, con canal central conectado al vacío para aspirar y cortar simultáneamente el menisco, cartílago o tejido sinovial.

---

## 🔬 3. Imagen Guiada por Fluorescencia en Infrarrojo Cercano y Sistemas de Endoscopia Quirúrgica 3D Estereoscópica

### 3.1. Imagen Guiada por Fluorescencia en Infrarrojo Cercano (NIR / ICG — Verde de Indocianina)

Una de las mayores innovaciones de las torres quirúrgicas modernas (ej. Karl Storz *IMAGE1 S Rubina*, Stryker *1688/1788 AIM*, Olympus *Visera Elite III*) es la integración de **angiografía y colangiografía fluorescente en el Infrarrojo Cercano (NIR)** utilizando el fluoróforo **Verde de Indocianina (ICG — *Indocyanine Green*)**:

1. **Farmacocinética y Biofísica Espectral del ICG:**
   - El ICG es una tricarbocianina anfifílica hidrosoluble aprobada para uso intravenoso o intersticial. Tras su inyección intravenosa ($0,1\text{–}0,5\text{ mg/kg}$), se une en un $98\%$ a las lipoproteínas y albúmina plasmáticas (permaneciendo confinado en el espacio intravascular) y es captado y excretado **exclusivamente por los hepatocitos hacia la bilis** sin circulación enterohepática ni excreción renal (vida media plasmática $t_{1/2} \approx 3\text{–}4\text{ minutos}$).
   - **Ventana óptica biológica del Infrarrojo Cercano ($700\text{–}900\text{ nm}$):** En este rango espectral la absorción por la hemoglobina y el agua es mínima y la dispersión tisular disminuye, permitiendo penetrar entre **$5\text{ y }10\text{ mm}$ de profundidad en el tejido**.
   - **Longitudes de onda de Excitación y Emisión (Desplazamiento de Stokes $\Delta \lambda \approx 25\text{–}30\text{ nm}$):**
     $$\lambda_{\text{excitación (Láser/LED NIR)}} \approx \mathbf{780\text{ nm – }805\text{ nm}} \quad \longrightarrow \quad \lambda_{\text{emisión fluorescente (ICG)}} \approx \mathbf{820\text{ nm – }835\text{ nm}}$$
2. **Modos de Visualización en el Procesador Quirúrgico:**
   - La fuente de luz conmuta o combina luz visible blanca RGB con excitación láser/LED a $805\text{ nm}$, mientras un filtro óptico de barrera en el cabezal de cámara bloquea los $805\text{ nm}$ reflejados y deja pasar al sensor sensible al NIR únicamente la fluorescencia de $830\text{ nm}$.
   - El procesador ofrece: **Modo Superposición (*Overlay*)** (imagen anatómica 4K en luz blanca con la fluorescencia superpuesta en color verde o azul brillante), **Modo Monocromático NIR** (blanco sobre fondo negro para máximo contraste de vasos profundos) y **Modo Mapa de Intensidad Cuantitativo (*Color-Segmented Fluorescence*)** que colorea en escala térmica la velocidad e intensidad de llegada del bolo vascular.
3. **Indicaciones Clínicas Quirúrgicas Principales:**
   - **Evaluación en tiempo real de la perfusión vascular de anastomosis digestivas** (cirugía colorrectal y esofagogástrica) antes de grapar, reduciendo drásticamente la tasa de dehiscencia anastomótica por isquemia.
   - **Colangiografía fluorescente intraoperatoria en colecistectomía laparoscópica:** Administrado $30\text{–}45\text{ min}$ antes, el ICG ilumina el conducto cístico y el colédoco sin necesidad de canular la vía biliar ni emitir rayos X.
   - **Mapeo linfático del ganglio centinela** en cáncer de endometrio, cérvix, gástrico y colon, y delimitación de segmentos y metástasis hepáticas.

### 3.2. Sistemas de Endoscopia Quirúrgica 3D Estereoscópica

Para restituir la percepción binocular de profundidad (estereopsis) perdida en la laparoscopia 2D convencional, los sistemas de **Videoendoscopia 3D** emplean un **videoendoscopio distal con doble canal óptico y doble sensor CMOS independiente en la punta (*Dual Chip-on-the-Tip*)** separados entre sí por una distancia interpupilar miniaturizada ($1,5\text{ a }4\text{ mm}$ en ópticas de $10\text{ mm}$).
- Los sensores izquierdo ($L$) y derecho ($R$) captan dos perspectivas ligeramente diferentes con convergencia fija (ángulo de estereopsis) y envían dos flujos de vídeo sincronizados al procesador 3D.
- El monitor quirúrgico 3D incorpora un filtro polarizador circular alternante por líneas (o tecnología *3D Light-Field*) y el equipo quirúrgico utiliza **gafas pasivas ligeras de polarización circular** (levógira para un ojo y dextrógira para el otro), reduciendo en un $30\text{–}40\%$ el tiempo de ejecución de nudos y suturas intracorpóreas complejas.

### 3.3. Insuflación Inteligente Sin Válvulas y Evacuación Activa de Humo Quirúrgico (*AirSeal*)

Los sistemas de gestión de neumoperitoneo de última generación (ej. *ConMed AirSeal* o *Storz S-Pilot*) sustituyen el trócar convencional con válvulas mecánicas de silicona por un **trócar sin válvulas ni membranas mecánicas** alimentado por un circuito triaxial de tres lúmenes:
1. Un flujo de $\text{CO}_2$ recirculado a alta velocidad crea en el interior de la cánula del trócar una **barrera de presión horizontal dinámica (cortina de vórtices de gas)** que mantiene sellado el neumoperitoneo a $12\text{ mmHg}$ exactos aunque se introduzcan o extraigan instrumentos o gasas.
2. Mide la presión abdominal en **tiempo real continuo** (sin pausas de flujo), manteniendo estable la bóveda abdominal incluso durante la aspiración intensa o fugas masivas.
3. Aspira continuamente el **humo electroquirúrgico** (que contiene benceno, formaldehído, acroleína y partículas virales viables de VPH/VHB), haciéndolo pasar por un **filtro ULPA (*Ultra-Low Particulate Air*, eficacia del $\mathbf{99,999\%}$ para partículas de $\mathbf{0,12\text{ a }0,01\text{ }\mu\text{m}}$) con etapa de carbón activo** antes de devolver el $\text{CO}_2$ limpio a la cavidad.

### 3.4. Seguridad Hidrodinámica y Electrolítica en Histeroscopia y Resectoscopia Urológica (RTU)

En cirugía endoscópica con medio líquido (útero, vejiga, próstata), el uso de energía electroquirúrgica determina críticamente el líquido de distensión empleado y el riesgo de **Síndrome de Intravasación / Síndrome Post-RTU**:

| Modalidad de Resección Endoscópica | Medio Líquido de Distensión Obligatorio | Mecanismo Físico de Conducción de RF | Riesgo Clínico por Absorción Vascular y Umbral de Déficit Hídrico Crítico |
| :--- | :--- | :--- | :--- |
| **Resectoscopia Monopolar Clásica** | **No electrolítico (Hipoosmolar):** Glicina $1,5\%$, Sorbitol $3\%$ o Manitol $5\%$ | La corriente va del asa activa a la placa neutra cutánea; un medio con iones ($\text{NaCl}$) dispersaría la corriente impidiendo el corte | **Hiponatremia dilucional aguda grave ($\text{Na}^+ < 120\text{ mEq/L}$), edema cerebral y toxicidad por amonio**. Límite máximo de déficit (absorción): **$\mathbf{1.000\text{ mL}}$** ($750\text{ mL}$ en cardiópatas) |
| **Resectoscopia Bipolar en Plasma (*Saline Resection*)** | **Electrolítico Isotónico:** Suero Fisiológico ($\text{NaCl } 0,9\%$) o Ringer Lactato | La corriente se cierra localmente en la punta del asa; el suero salino conductor crea una corona de plasma de vapor de sodio que vaporiza el tejido | **Elimina el riesgo de hiponatremia dilucional**; solo existe riesgo de sobrecarga hídrica circulatoria. Límite máximo de déficit: **$\mathbf{2.500\text{ mL}}$** |

Las bombas de histeroscopia/urología modernas incorporan **básculas gravimétricas electrónicas dobles** (una en las bolsas de infusión y otra en los botes del colector de aspiración y bolsa de campo quirúrgico) que calculan en tiempo real el **Déficit Hídrico Acumulado**:
$$V_{\text{déficit (intravasado al paciente)}} = V_{\text{infundido}} - V_{\text{recolectado en aspiración}}$$
Emitiendo alarmas escalonadas y deteniendo la bomba al alcanzar el umbral programado ($1.000\text{ mL}$ en medios no electrolíticos).

---

## 🛡️ 4. Riesgos Físicos Específicos en Endoscopia Quirúrgica y Medidas de Mitigación

### 4.1. Riesgos Físicos Específicos en Endoscopia Quirúrgica y Medidas de Mitigación

1. **Quemaduras Térmicas e Ignición del Campo Quirúrgico por la Fuente de Luz:**
   - Aunque se denomine «luz fría», la concentración de $300\text{ W}$ de energía óptica visible en un área circular de solo $4\text{ a }5\text{ mm}$ de diámetro en el extremo distal del cable de fibra óptica o en la punta del laparoscopio puede elevar la temperatura local a **$> 95\text{–}200\text{ }^\circ\text{C}$ en menos de $10\text{ segundos}$** si se apoya directamente sobre los paños quirúrgicos de celulosa/polipropileno o sobre la piel del paciente en atmósfera rica en oxígeno, provocando quemaduras de tercer grado o fuego en quirófano.
   - **Regla de seguridad obligatoria:** La fuente de luz debe colocarse siempre en modo ***Stand-by* (espera)** antes de desconectar la óptica o mientras el telescopio esté fuera de la cavidad corporal; las fuentes modernas incorporan detección automática de desconexión del cable en la torreta.
2. **Acoplamiento Capacitivo y Fallo de Aislamiento en Laparoscopia Monopolar:**
   - En cirugía laparoscópica, el cirujano solo visualiza en el monitor el último $10\text{–}15\%$ distal del instrumento monopolar ($33\text{ cm}$ de longitud). Pueden producirse quemaduras viscerales ocultas (perforación intestinal diferida a las $48\text{–}72\text{ h}$ con peritonitis mortal) por **tres mecanismos eléctricos fuera del campo visual**:
     - **Fallo de aislamiento del vástago:** Microfisuras o poros en la vaina aislante polimérica del instrumento que descargan un arco de alta densidad de corriente al intestino adyacente (se verifica con **comprobadores de porosidad de alta tensión a $2,5\text{–}4\text{ kV}$ en la central de esterilización RUMED**).
     - **Acoplamiento directo:** Contacto accidental del electrodo activo con el tubo metálico del laparoscopio o con otra pinza.
     - **Acoplamiento capacitivo:** El vástago metálico interno (conductor 1), la vaina aislante (dieléctrico) y una cánula metálica o híbrida (conductor 2) forman un **condensador cilíndrico** ($C = \frac{2\pi\varepsilon L}{\ln(r_2/r_1)}$) que induce corriente de alta frecuencia ($I_C = 2\pi f C V$) hacia la pared intestinal si la cánula está aislada de la pared abdominal por un anclaje plástico (por ello nunca deben combinarse cánulas metálicas con anclajes plásticos híbridos, o bien deben emplearse sistemas de **monitorización activa de electrodo — AEM**).

### 4.2. Reprocesamiento, Esterilización en Autoclave y Mantenimiento Preventivo

A diferencia de los videoendoscopios flexibles digestivos (termosensibles, limitados a $\le 55\text{ }^\circ\text{C}$), las **ópticas rígidas quirúrgicas con inscripción `AUTOCLAVABLE` y soldadura láser en cristal de zafiro** soportan la **esterilización por vapor saturado en autoclave (`UNE-EN 285` / `ISO 17665`) a $134\text{ }^\circ\text{C}$ durante $3\text{–}5\text{ minutos}$ ($2\text{ bar}$)** o a $121\text{ }^\circ\text{C}$ durante $15\text{–}20\text{ minutos}$, así como esterilización a baja temperatura por **plasma de gas de peróxido de hidrógeno ($\text{H}_2\text{O}_2$, $< 50\text{ }^\circ\text{C}$)** (método preferente para cabezales de cámara no autoclavables, cables de luz de gel líquido y ópticas 3D sensibles).

**Protocolo de Mantenimiento Preventivo Anual (`GMAO` — Módulos 1587 y 1589):**
1. **Inspección Óptica y Fotométrica:** Comprobación con lupa de superficies de zafiro distal y ocular proximal (ausencia de depósitos proteicos quemados por el autoclave, limpiables solo con pasta específica de óxido de aluminio), ausencia de humedad interna (empañamiento al cambio térmico indica pérdida de hermeticidad del sello de zafiro), medida del porcentaje de fibras rotas en el cable de luz ($< 25\%$) y medida del flujo luminoso en lúmenes/lux con **medidor de potencia óptica/luxómetro endoscópico**.
2. **Calibración del Insuflador de $\text{CO}_2$:** Verificación con manómetro patrón digital y caudalímetro másico (analizador de flujo tipo *Fluke VT650/900*) de la exactitud de la presión estática en $10, 12, 15\text{ y }20\text{ mmHg}$ (tolerancia $\pm 1\text{ a }\pm 2\text{ mmHg}$), caudal de insuflación y disparo de la válvula de sobrepresión a $> 25\text{–}30\text{ mmHg}$.
3. **Seguridad Eléctrica:** Medición de resistencia de tierra de protección ($\le 0,3\text{ }\Omega$ del chasis de la torre y del transformador de aislamiento del carro), corriente de fuga del equipo y corriente de fuga de parte aplicable (cabezal de cámara y elementos en contacto con el paciente **Tipo BF o CF**).

---

## ⚡ 5. Síntesis de Alto Rendimiento, Tabla Resumen y Puntos Críticos de Examen

### 5.1. Tabla Maestra de Cifras, Umbrales y Conceptos Clave

| Subsistema / Concepto Técnico | Norma / Magnitud / Parámetro Oficial | Valor / Cifra Exacta de Examen A1 | Implicación Clínica o de Ingeniería Biomédica |
| :--- | :--- | :--- | :--- |
| **Norma particular de equipos de endoscopia** | Norma `UNE-EN` / `IEC` | **`UNE-EN 60601-2-18`** (y serie óptica `ISO 8600`) | Límite térmico distal $\le 41\text{ }^\circ\text{C}$, partes aplicables Tipo BF/CF |
| **Óptica rígida de lentes de barra (*Rod-Lens*)** | Físico inventor y ganancia luminosa | **Harold Hopkins** ($\Phi_{\text{luz}} \propto n^2 \cdot r^4 / L^2 \rightarrow \mathbf{\times 9\text{ luz}}$) | Cilindros largos de vidrio/cuarzo separados por lentes delgadas de aire |
| **Ángulos de dirección visual en laparoscopia** | Óptica frontal vs. oblicua estándar | **$0^\circ$ (frontal)** y **$30^\circ$ / $45^\circ$ (oblicuas)** | La de $30^\circ$ permite explorar recovecos rotando el eje del telescopio |
| **Cabezal de cámara de alta fidelidad cromática** | Separación espectral RGB | **3-CMOS / 3-CCD con Prisma Dicroico** | Tres sensores dedicados para R, G y B sin interpolación de Bayer |
| **Resolución 4K UHD vs. Full HD** | Píxeles en barrido progresivo ($60\text{ Hz}$) | **4K UHD: $\mathbf{3840 \times 2160}$** ($8,3\text{ MP}$) vs. FHD: $1920 \times 1080$ | Espacio de color extendido **BT.2020** ($10\text{–}12\text{ bits}$) |
| **Fluorescencia NIR con Verde de Indocianina (ICG)** | Excitación ($\lambda_{\text{exc}}$) y Emisión ($\lambda_{\text{em}}$) | **Excitación: $\mathbf{780\text{–}805\text{ nm}}$ · Emisión: $\mathbf{820\text{–}835\text{ nm}}$** | Perfusión de anastomosis, colangiografía sin RX y ganglio centinela |
| **Fuente de luz de Xenón vs. LED** | Temperatura de color y vida útil | Xenón: **$6.000\text{ K}$ ($500\text{ h}$)** · LED: **$6.000\text{ K}$ ($\ge 30.000\text{ h}$)** | Filtro IR (*Hot Mirror*); cable de fibra óptica se retira si $> 25\text{–}30\%$ rotas |
| **Esterilización de ópticas rígidas *Autoclavables*** | Ciclo de vapor | **$134\text{ }^\circ\text{C}$ durante $3\text{–}5\text{ min}$** (ventana de zafiro soldada) | Los cables de gel líquido **NO** admiten autoclave de vapor a $134\text{ }^\circ\text{C}$ |
| **Gas de neumoperitoneo en laparoscopia** | Tipo de gas y motivos físicos | **$\text{CO}_2$ medicinal** (toma gris `ISO 9170`) | **1) Incombustible/no comburente** y **2) $\mathbf{> 20\times}$ más soluble en sangre** |
| **Presión intraabdominal y flujo de insuflación** | Ajuste normal en adulto / pediátrico | Adulto: **$\mathbf{12\text{–}15\text{ mmHg}}$** (niños $8\text{–}10\text{ mmHg}$) · Flujo hasta **$40\text{–}50\text{ L/min}$** | Medición intermitente de presión estática (o continua sin válvulas *AirSeal*) |
| **Filtración de humo quirúrgico laparoscópico** | Eficiencia del filtro de evacuación | **Filtro ULPA ($\mathbf{99,999\%}$ a $\mathbf{0,12\text{ }\mu\text{m}}$)** + carbón activo | Retiene partículas submicrónicas, hidrocarburos y virus (VPH/VHB) |
| **Resectoscopia Monopolar vs. Bipolar (RTU / Histero)** | Líquido de distensión y déficit crítico | Monopolar: **Glicina $1,5\%$** (déficit máx. **$1.000\text{ mL}$**) · Bipolar: **$\text{NaCl } 0,9\%$** ($2.500\text{ mL}$) | El uso de $\text{NaCl } 0,9\%$ en bipolar evita la **hiponatremia dilucional post-RTU** |

### 5.2. Puntos Críticos y Trampas Habituales de Examen

1. **Trampa de test sobre por qué se usa $\text{CO}_2$ en laparoscopia:** Si una opción afirma que el $\text{CO}_2$ se emplea «porque es un gas inerte que no se absorbe por el peritoneo», es **FALSA**. El $\text{CO}_2$ **sí se absorbe intensamente** a través del peritoneo (produciendo hipercapnia y acidosis respiratoria leve que el anestesiólogo compensa hiperventilando al paciente); precisamente su **altísima solubilidad sanguínea** ($\approx 20\times$ superior al $\text{O}_2$) junto con su carácter **incombustible y no comburente** son las dos razones por las que se utiliza, ya que impide la explosión con el electrobisturí y evita la embolia gaseosa letal.
2. **Trampa sobre Resectoscopia Monopolar vs. Bipolar y el Suero Fisiológico:** En un resector **monopolar** NUNCA puede utilizarse suero fisiológico ($\text{NaCl } 0,9\%$), porque los iones $\text{Na}^+$ y $\text{Cl}^-$ conducen y dispersan la corriente de radiofrecuencia por toda la cavidad vesical/uterina impidiendo que se forme el arco de corte en el asa. Por ello el monopolar exige medios no electrolíticos (glicina/sorbitol), con el consiguiente peligro de **síndrome de intravasación hiponatrémica** si el déficit hídrico supera $1.000\text{ mL}$. En cambio, el resector **bipolar** exige obligatoriamente **suero fisiológico ($\text{NaCl } 0,9\%$)** para generar la corona de plasma, eliminando el riesgo de hiponatremia.
3. **Trampa sobre la medición de presión del insuflador:** Un insuflador convencional de un solo tubo **no puede medir la presión intraabdominal real mientras está inyectando flujo alto**, porque mediría la sobrepresión de resistencia de la tubuladura y del trócar ($P = P_{\text{abd}} + R\cdot\dot{V}$). Debe interrumpir cíclicamente el flujo ($\dot{V}=0$) para medir la presión estática, salvo que utilice un trócar triaxial con línea sensora dedicada (*AirSeal*).
4. **Trampa sobre el acoplamiento capacitivo en laparoscopia:** Los trócares **híbridos** (cánula metálica interior introducida dentro de un retractor plástico fijado a la pared abdominal) son los **más peligrosos** ante el acoplamiento capacitivo monopolar, porque la cánula metálica capta por capacitancia la corriente de RF del instrumento y, al estar aislada de la pared abdominal por el plástico, no puede disiparla en una superficie amplia, descargándola puntualmente sobre un asa intestinal con quemadura transmural fuera del campo de visión de la cámara.
