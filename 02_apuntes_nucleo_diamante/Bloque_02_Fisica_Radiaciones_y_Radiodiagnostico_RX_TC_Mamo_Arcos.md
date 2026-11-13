# Bloque 02 — Física de las Radiaciones, Electromagnetismo y Equipos de Radiodiagnóstico por Rayos X (Salas Digitales, TC, Mamografía, Portátiles e Intervencionismo)

> **Temas de la Parte Específica cubiertos íntegramente en este bloque (8 temas):**
> - **Tema 2:** Caracterización de la radiación en el ámbito sanitario. Radiación ionizante y no ionizante: naturaleza física, interacción con la materia y efectos biológicos relevantes. Magnitudes y unidades radiológicas de uso sanitario.
> - **Tema 3:** Fundamentos del electromagnetismo. Conceptos y aplicaciones en el ámbito médico.
> - **Tema 4:** Componentes y funcionamiento de los equipos de radiología digital. El tubo de rayos X: componentes y funcionamiento. Receptores de imagen.
> - **Tema 5:** Caracterización y funcionamiento de las salas de radiología digital.
> - **Tema 6:** Caracterización y funcionamiento de los equipos de tomografía computarizada. Imagen tomográfica y componentes de los equipos. Adquisición: helicoidal, multicorte, volumétrica y espectral.
> - **Tema 7:** Mamografía. Caracterización y funcionamiento de los equipos de mamografía digital. Diagnóstico e intervencionismo.
> - **Tema 8:** Caracterización y funcionamiento de los equipos de radiología portátil. Diagnóstico e intervencionismo.
> - **Tema 9:** Caracterización y funcionamiento de los sistemas de intervencionismo vascular y cardiológico. Quirófanos híbridos.

---

## 1. Tema 2 y Tema 3: Naturaleza Física de la Radiación, Electromagnetismo, Interacción y Magnitudes

### 1.1. Espectro Electromagnético y Frontera Ionizante vs. No Ionizante (Temas 2 y 3)
- **Ecuación fundamental de Planck-Einstein:**
  $$E = h \cdot \nu = \frac{h \cdot c}{\lambda}$$
  Donde $h = 6,626 \times 10^{-34}\text{ J}\cdot\text{s}$ y $c \approx 3 \times 10^8\text{ m/s}$. En energía atómica: $E\text{ (keV)} = \frac{1,24}{\lambda\text{ (nm)}}$.
- **Ecuaciones de Maxwell (Tema 3):**
  1. **Ley de Gauss eléctrica:** $\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}$ (las cargas eléctricas son fuentes/sumideros del campo eléctrico).
  2. **Ley de Gauss magnética:** $\nabla \cdot \mathbf{B} = 0$ (no existen monopolos magnéticos; las líneas de campo magnético son cerradas).
  3. **Ley de Faraday-Lenz (Inducción electromagnética):** $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$ (un campo magnético variable en el tiempo induce una fuerza electromotriz; **base física de las antenas receptoras de RM, transformadores de alta tensión de RX y carga inductiva de implantes**).
  4. **Ley de Ampère-Maxwell:** $\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}$.
- **Frontera entre Radiación No Ionizante e Ionizante:**
  - En el ámbito biológico/sanitario, el umbral de ionización del agua y moléculas biológicas se sitúa en torno a **$10\text{–}12,4\text{ eV}$** ($\lambda \approx 100\text{ nm}$, en el **ultravioleta extremo UV-C**).
  - **Radiaciones No Ionizantes ($E < 12\text{ eV}$):** Campos estáticos y de baja frecuencia (ELF), Radiofrecuencia (RF: **Resonancia Magnética** $10\text{–}300\text{ MHz}$, **Diatermia de Onda Corta** $27,12\text{ MHz}$), Microondas ($2.450\text{ MHz}$ en rehabilitación/ablación), Infrarrojo (termoterapia), Luz visible (endoscopia, fototerapia neonatal azul $450\text{–}470\text{ nm}$ para hiperbilirrubinemia) y Láseres médicos. Sus efectos biológicos son principalmente **térmicos** (absorción medida mediante **SAR — *Specific Absorption Rate*** en $\text{W/kg}$) y de **estimulación neuromuscular** (corrientes inducidas).
  - **Radiaciones Ionizantes ($E > 12\text{ eV}$):**
    - **Directamente ionizantes (partículas cargadas):** Electrones ($\beta^-$, haces de aceleradores lineales), Positrones ($\beta^+$ en PET), Partículas alfa ($\alpha$, núcleos de $^{4}_{2}\text{He}^{2+}$), Protones ($p^+$) e Iones de carbono (protonterapia/hadronterapia). Interactúan continuamente por fuerzas coulombianas y tienen un alcance finito con un máximo de deposición de dosis al final de su traza (**Pico de Bragg** en protones/iones).
    - **Indirectamente ionizantes (fotones y neutrones):** **Rayos X** (origen extranuclear/cortical: frenado o salto electrónico en las capas K, L, M) y **Rayos Gamma ($\gamma$)** (origen intranuclear por desintegración radiactiva, ej. $^{99\text{m}}\text{Tc}$ a $140\text{ keV}$ o $^{60}\text{Co}$ a $1,17\text{ y }1,33\text{ MeV}$).

### 1.2. Interacción de los Fotones (Rayos X y Gamma) con la Materia (¡Pregunta fija de test!)
La atenuación exponencial de un haz monoenergético estrecho sigue la **Ley de Beer-Lambert**:
$$I(x) = I_0 \cdot e^{-\mu \cdot x} \quad \Longrightarrow \quad \text{CHR (Capa Hemirreductora o HVL)} = \frac{\ln 2}{\mu} \approx \frac{0,693}{\mu}$$

| Mecanismo de Interacción | Rango de Energía en Tejido Blando | Dependencia con $Z$ (Nº atómico) y $E$ | Importancia en Imagen Médica y Radioterapia |
| :--- | :--- | :--- | :--- |
| **1. Dispersión Coherente (Rayleigh / Thomson)** | Muy bajas energías ($< 10\text{ keV}$) | Probabilidad $\propto Z^2 / E$ | El fotón cambia de dirección **sin perder energía ni ionizar**. No aporta contraste útil (solo ligero velo). |
| **2. Efecto Fotoeléctrico ($\tau$)** | Bajas energías (**dominante en radiodiagnóstico $< 30\text{ keV}$ y mamografía**) | **$\tau \propto \frac{Z^3}{E^3}$** | El fotón desaparece entregando toda su energía a un electrón cortical ($E_c = h\nu - E_{\text{enlace}}$). **Es el responsable del contraste radiológico natural entre hueso ($Z_{\text{ef}} \approx 13,8$), tejido blando ($Z_{\text{ef}} \approx 7,4$) y grasa ($Z_{\text{ef}} \approx 6$)**, y del uso de contrastes yodados ($Z=53$, borde K a $33\text{ keV}$) y baritados ($Z=56$). Maximiza la dosis absorbida por el paciente. |
| **3. Efecto Compton o Dispersión Incoherente ($\sigma$)** | Energías medias y altas (**dominante en tejido blando entre $30\text{ keV}$ y $25\text{ MeV}$**: RX alto kVp, TC, Medicina Nuclear y Radioterapia) | **Independiente de $Z$**; proporcional a la **densidad electrónica ($\rho_e$)** y decrece suavemente con $E$ ($\propto 1/E$) | El fotón choca con un electrón libre/externo, lo expulsa (electrón Compton) y sale desviado un ángulo $\theta$ con menor energía. **Es la fuente principal de radiación dispersa** (degrada el contraste de la imagen y **es la causa principal de exposición radiológica del personal sanitario** en fluoroscopia/intervencionismo). |
| **4. Producción de Pares ($\kappa$)** | Altas energías (**Umbral absoluto: $E \ge 1,022\text{ MeV} = 2 m_e c^2$**) | $\kappa \propto Z^2 \cdot \ln E$ | En presencia del campo nuclear, el fotón se materializa en un **electrón ($e^-$) y un positrón ($e^+$)**. Al frenarse el positrón, se aniquila con un electrón produciendo **2 fotones de $511\text{ keV}$ en direcciones opuestas ($180^\circ$)** (*principio físico del PET*). Relevante en **Radioterapia externa de megavoltaje ($\ge 6\text{ MV}$)**. |
| **5. Reacción Fotodesintegración (Fotonuclear)** | Muy altas energías (**Umbral $\ge 8\text{–}10\text{ MeV}$**) | Relevante en aceleradores lineales operando a **$\ge 10\text{–}15\text{ MV}$** | El fotón es absorbido por el núcleo y expulsa un **neutrón (fotoneutrones)**. Obliga a diseñar puertas con **parafina borada / polietileno borado y laberinto** en los búnkeres de aceleradores de alta energía. |

### 1.3. Magnitudes y Unidades Radiológicas (Sistema Internacional SI vs. Antiguas)

| Magnitud | Símbolo / Fórmulas | Unidad SI | Unidad Antigua y Equivalencia | Qué mide exactamente |
| :--- | :---: | :---: | :--- | :--- |
| **Actividad ($A$)** | $A = \frac{dN}{dt} = \lambda N$ | **Becquerel ($\text{Bq}$)** ($1\text{ desintegración/s}$) | **Curio ($\text{Ci}$)**: $1\text{ Ci} = 3,7 \times 10^{10}\text{ Bq}$ ($1\text{ mCi} = 37\text{ MBq}$) | Velocidad de desintegración de un radionucleido (Medicina Nuclear / Braquiterapia). |
| **Exposición ($X$)** | $X = \frac{dQ}{dm}$ (solo fotones en aire) | $\text{C/kg}$ | **Roentgen ($\text{R}$)**: $1\text{ R} = 2,58 \times 10^{-4}\text{ C/kg}$ | Carga eléctrica de iones de un signo producida por fotones por unidad de masa de aire. |
| **Kerma ($K$)** | $K = \frac{dE_{\text{tr}}}{dm}$ | **Gray ($\text{Gy}$)** ($\text{J/kg}$) | — | Energía cinética inicial transferida por radiación indirectamente ionizante (fotones/neutrones) a partículas cargadas por unidad de masa. *(En equilibrio electrónico, $K_{\text{col}} \approx D$).* |
| **Dosis Absorbida ($D$)** | $D = \frac{d\bar{\varepsilon}}{dm}$ | **Gray ($\text{Gy}$)** ($1\text{ Gy} = 1\text{ J/kg}$) | **Rad**: $1\text{ Gy} = 100\text{ rad}$ ($1\text{ cGy} = 1\text{ rad}$) | Energía media depositada en cualquier medio por unidad de masa. Magnitud básica en **Radioterapia y efectos deterministas**. |
| **Dosis Equivalente en un órgano ($H_T$)** | $H_T = \sum_R w_R \cdot D_{T,R}$ | **Sievert ($\text{Sv}$)** ($\text{J/kg}$) | **Rem**: $1\text{ Sv} = 100\text{ rem}$ ($1\text{ mSv} = 100\text{ mrem}$) | Pondera la dosis absorbida en el tejido $T$ por el **Factor de Ponderación de la Radiación ($w_R$)** según su calidad biológica:<br>• Fotones (RX, $\gamma$) y electrones/positrones: **$w_R = 1$**.<br>• Protones: **$w_R = 2$**.<br>• Partículas $\alpha$, fragmentos de fisión e iones pesados: **$w_R = 20$**.<br>• Neutrones: función continua de la energía ($w_R = 2,5\text{ a }20$). |
| **Dosis Efectiva ($E$)** | $E = \sum_T w_T \cdot H_T$ ($\sum w_T = 1$) | **Sievert ($\text{Sv}$)** | **Rem** | Suma de las dosis equivalentes en todos los órganos ponderadas por el **Factor de Ponderación Tisular ($w_T$, ICRP 103)** según su sensibilidad al riesgo estocástico:<br>• **$w_T = 0,12$:** Médula ósea roja, colon, pulmón, estómago, mama y resto de tejidos.<br>• **$w_T = 0,08$:** Gónadas.<br>• **$w_T = 0,04$:** Vejiga, esófago, hígado, tiroides.<br>• **$w_T = 0,01$:** Superficie ósea, cerebro, glándulas salivales, piel. |

### 1.4. Efectos Biológicos de las Radiaciones Ionizantes (Pregunta clásica de examen)

| Característica | Efectos Deterministas (Reacciones Tisulares) | Efectos Estocásticos (Probabilísticos / Aleatorios) |
| :--- | :--- | :--- |
| **Mecanismo biológico** | Muerte o esterilización de un gran número de células de un tejido/órgano. | Mutación subletal del ADN en una sola célula (transformación neoplásica o mutación germinal). |
| **Dosis Umbral** | **SÍ tienen dosis umbral** (por debajo del umbral no aparecen). | **NO tienen dosis umbral** (modelo lineal sin umbral *LNT*). |
| **Relación con la Dosis** | Al aumentar la dosis **aumenta la GRAVEDAD** del efecto. | Al aumentar la dosis **aumenta la PROBABILIDAD** de aparición, pero **la gravedad es independiente de la dosis**. |
| **Tiempo de aparición** | Generalmente precoces o a medio plazo (salvo cataratas). | Tardíos (años o décadas de período de latencia). |
| **Ejemplos clínicos** | Eritema cutáneo ($>2\text{–}3\text{ Gy}$), depilación, esterilidad, **cataratas en el cristalino** (umbral ICRP 118: $0,5\text{ Gy}$), síndrome de irradiación aguda, necrosis. | **Cáncer radioinducido** (efecto somático) y **enfermedades hereditarias** en la descendencia (efecto genético). |
| **Cómo los previene la PR** | Imponiendo **Límites de Dosis Equivalente en órganos** (cristalino, piel, extremidades). | Aplicando el principio de **Optimización (ALARA)** y **Límites de Dosis Efectiva** ($20\text{ mSv/año}$ en trabajadores expuestos). |

---

## 2. Tema 4 y Tema 5: Equipos y Salas de Radiología Digital (Tubo de Rayos X, Generadores y Receptores)

### 2.1. El Tubo de Rayos X: Componentes y Funcionamiento (Tema 4)
1. **Ampolla envolvente de vidrio borosilicatado o metal-cerámica al alto vacío ($< 10^{-5}\text{ Pa}$)** dentro de una **carcasa o coraza plomada** rellena de aceite dieléctrico (aislamiento eléctrico + disipación térmica; la radiación de fuga de la coraza a $1\text{ metro}$ operando a máxima potencia no debe superar **$1\text{ mGy/h}$**).
2. **Cátodo (Polo negativo):**
   - **Filamento de tungsteno (wolframio, $Z=74$, punto de fusión $3.422\text{ }^\circ\text{C}$)** dopado con un $1\text{–}2\%$ de torio, que emite electrones por **efecto termoiónico (Ley de Richardson-Dushman)** al pasar la corriente de calefacción ($I_f \approx 3\text{–}6\text{ A}$, baja tensión $\approx 10\text{ V}$).
   - **Copa de enfoque (de níquel o molibdeno):** Cargada negativamente para focalizar por repulsión electrostática la nube electrónica hacia la mancha focal del ánodo.
   - Los tubos diagnósticos suelen tener **doble foco**: **foco fino** ($0,3\text{–}0,6\text{ mm}$, mayor resolución espacial para hueso/detalle) y **foco grueso** ($1,0\text{–}1,2\text{ mm}$, soporta mayor carga térmica/mA para exposiciones ultracortas de tórax/abdomen).
3. **Ánodo (Polo positivo — Fijo o Rotatorio de $3.000\text{ a }10.000\text{ rpm}$):**
   - Pista focal de **aleación de Tungsteno-Renio ($90\%\text{ W} + 10\%\text{ Re}$)** (el renio evita el agrietamiento térmico superficial) sobre cuerpo de molibdeno y grafito, accionado por un **motor de inducción asíncrono** con estator exterior a la ampolla y rotor interior sobre rodamientos de bolas de plata/plomo o **cojinetes de metal líquido (galio-indio-estaño)** en tubos de TC e intervencionismo de alta carga.
   - **Rendimiento de producción de rayos X:** Solo **$< 1\%$** de la energía cinética de los electrones se convierte en rayos X (**radiación de frenado o *Bremsstrahlung*** de espectro continuo con $E_{\text{máx}} = e \cdot \text{kVp}$ + **radiación característica** de líneas discretas cuando el electrón arranca electrones de la capa K del blanco); el **$99\%$ restante se transforma en calor**.
   - **Principio del Foco Lineal (Goetze) y Efecto Talón (Efecto Anódico — *Heel Effect*):**
     - La pista anódica está inclinada un **ángulo anódico $\theta$ ($7^\circ\text{ a }17^\circ$)** para conseguir un **foco efectivo pequeño** ($\text{Foco efectivo} = \text{Foco real} \cdot \sin\theta$, mejorando la nitidez geométrica) mientras se reparte el calor sobre una superficie real grande.
     - **Efecto Talón:** Debido a la autoabsorción de los fotones en el propio talón del ánodo, **la intensidad del haz de rayos X es MAYOR en el lado del CÁTODO y MENOR en el lado del ÁNODO**. *(Aplicación práctica en examen: colocar siempre la parte anatómica **más gruesa o densa del paciente hacia el lado del CÁTODO**, ej. en columna torácica, fémur o mamografía con la pared costal bajo el cátodo).*

### 2.2. Generadores de Alta Tensión y Control Automático de Exposición (CAE / AEC)
- **Generadores de Alta Frecuencia (*Inverter* de $20\text{ a }100\text{ kHz}$):** Rectifican la red trifásica a continua, la invierten a alta frecuencia, la elevan y rectifican obteniendo un **rizado de tensión $< 1\%$** (potencial prácticamente constante), lo que reduce la dosis al paciente para la misma densidad óptica y acorta los tiempos de exposición a $< 1\text{ ms}$.
- **Exposímetro Automático (CAE / AEC):** Cámaras de ionización planas o detectores de estado sólido situados entre el paciente y el receptor de imagen que cortan el disparo automáticamente cuando el receptor ha recibido la dosis óptima prefijada.

### 2.3. Receptores de Imagen Digital: CR vs. DR Indirecto vs. DR Directo (Tema 4 y 5 — ¡Tabla clave de examen!)

| Tecnología | Siglas / Tipo | Principio físico de conversión de los Rayos X | Material clave | Ventajas / Aplicaciones típicas |
| :--- | :--- | :--- | :--- | :--- |
| **Radiografía Computarizada** | **CR** (*Computed Radiography*) | **2 pasos con chasis extraíble:**<br>1. Los RX excitan electrones a trampas metaestables (imagen latente).<br>2. Un lector barre la placa con un **láser rojo ($\text{He-Ne}$ o diodo)** produciendo **luminiscencia fotoestimulable (PSL)** azul-violeta leída por un fotomultiplicador (PMT), y luego se borra con luz blanca intensa. | Fósforos fotoestimulables de **Fluorohaluro de Bario activado con Europio ($\text{BaFBr:Eu}^{2+}$)**. | Permite digitalizar salas antiguas y portátiles sin cambiar el bucky, pero tiene **menor DQE ($\approx 25\text{–}35\%$)** y flujo de trabajo más lento que DR. |
| **Panel Plano (Flat Panel) de Conversión INDIRECTA** | **DR Indirecto** (FPD Centelleador + Fotodiodo + TFT) | **2 etapas en tiempo real:**<br>1. Un **centelleador** convierte los fotones de RX en **luz visible (verde $\approx 550\text{ nm}$)**.<br>2. Una matriz de **fotodiodos de silicio amorfo ($\text{a-Si}$)** convierte la luz en carga eléctrica leída por una matriz de transistores de película delgada (**TFT**). | Centelleador de **Yoduro de Cesio dopado con Talio ($\text{CsI:Tl}$)** estructurado en agujas/columnas (canaliza la luz evitando dispersión lateral) o **Oxisulfuro de Gadolinio ($\text{Gd}_2\text{O}_2\text{S:Tb}$ / Gadox)**. | **El más usado en salas de radiología digital general, portátiles DR, telemandos y arcos quirúrgicos**. Alta **DQE ($60\text{–}75\%$)** y menor dosis. |
| **Panel Plano (Flat Panel) de Conversión DIRECTA** | **DR Directo** (Fotoconductor + TFT) | **1 sola etapa (sin luz intermedia):** Los fotones de RX inciden directamente sobre una capa fotoconductora sometida a un alto campo eléctrico ($\approx 10\text{ V/}\mu\text{m}$), generando pares **electrón-hueco** que viajan en línea recta hacia los electrodos colectores del **TFT**. | **Selenio amorfo ($\text{a-Se}$, $Z=34$)**. | **Máxima resolución espacial intrínseca (sin dispersión óptica lateral)**. Es el estándar de oro en **Mamografía Digital (FFDM) y Tomosíntesis de mama**. |

### 2.4. Parámetros de Calidad de Imagen Digital (Pregunta frecuente de Radiofísica / Biomédica)
- **MTF (*Modulation Transfer Function* — Función de Transferencia de Modulación):** Mide la **resolución espacial** del sistema en función de la frecuencia espacial ($\text{pares de líneas/mm}$).
- **NPS (*Noise Power Spectrum* — Espectro de Potencia de Ruido) o Wiener Spectrum:** Caracteriza el ruido en función de la frecuencia espacial.
- **DQE (*Detective Quantum Efficiency* — Eficiencia Cuántica de Detección):**
  $$\text{DQE}(f) = \frac{\text{SNR}_{\text{salida}}^2}{\text{SNR}_{\text{entrada}}^2}$$
  Es el **indicador global más importante de un receptor digital**: mide la eficiencia con la que el detector transfiere la relación señal/ruido del haz de rayos X a la imagen digital. A **mayor DQE, menor dosis de radiación necesita el paciente** para obtener la misma calidad de imagen ($\text{DR } \text{CsI} > \text{DR } \text{Gadox} > \text{CR} > \text{Película-Pantalla}$).
- **Índice de Exposición (EI / DI — Estándar IEC 62494-1):** Como los detectores digitales tienen un amplio rango dinámico ($10^4:1$) y corrigen automáticamente el brillo en pantalla, la sobreexposición no «quema» la imagen sino que reduce el ruido (**fenómeno de *Dose Creep* o deriva de dosis**). El **Deviation Index (DI)** indica en pantalla si la dosis al detector ha sido la correcta ($\text{DI} = 0$), subexpuesta ($\text{DI} < 0$) o sobreexpuesta ($\text{DI} > 0$).

### 2.5. Caracterización de una Sala de Radiología Digital (Tema 5)
Una sala de radiología digital convencional consta de:
1. **Mesa radiográfica flotante motorizada** (tablero radiotransparente de fibra de carbono con baja atenuación equivalente $< 0,8\text{ mm Al}$) con **Bucky de mesa** (rejilla antidifusora oscilante Potter-Bucky de relación $r = h/D = 8:1\text{ a }12:1$, cámaras CAE y detector Flat Panel integrado o inalámbrico).
2. **Estativo mural vertical (Bucky mural)** para tórax, columna y estudios en bipedestación (con capacidad de **telemetría/costura automática — *stitching*** de columna completa y miembros inferiores).
3. **Suspensión de techo telescópica robotizada o columna suelo-techo** del tubo de rayos X, con **autosincronización (*auto-tracking*)** respecto al bucky mural o de mesa y **colimador luminoso automático** con cámara de medida de **Producto Dosis-Área (DAP / PKA)** integrada a la salida del colimador.
4. **Cabina de control plomada** con visor de vidrio plomado (equivalente típico $\ge 2\text{ mm Pb}$), consola de adquisición DICOM (Worklist + MPPS + PACS) e intercomunicador con el paciente.

---

## 3. Tema 6: Equipos de Tomografía Computarizada (TC): Helicoidal, Multicorte, Volumétrica y Espectral

### 3.1. Principio Físico y Unidades Hounsfield (UH / CT Number)
El TC mide los perfiles de transmisión de un haz de rayos X colimado en abanico/cono que gira $360^\circ$ alrededor del paciente, y reconstruye el coeficiente de atenuación lineal $\mu(x,y,z)$ de cada **vóxel**, expresándolo en la escala normalizada de **Unidades Hounsfield (UH)**:
$$\text{UH} = 1000 \times \frac{\mu_{\text{tejido}} - \mu_{\text{agua}}}{\mu_{\text{agua}}}$$
- **Valores fijos de examen:**
  - **Aire:** **$-1000\text{ UH}$** ($\mu_{\text{aire}} \approx 0$).
  - **Grasa:** $-100\text{ a }-50\text{ UH}$.
  - **Agua:** **$0\text{ UH}$** (por definición; tolerancia de control de calidad en maniquí de agua: **$0 \pm 4\text{ UH}$**).
  - **Líquido cefalorraquídeo (LCR):** $+5\text{ a }+15\text{ UH}$.
  - **Parénquima tejidos blandos / sangre:** $+20\text{ a }+70\text{ UH}$.
  - **Hueso cortical denso:** **$+1000\text{ a }+3000\text{ UH}$**.

### 3.2. Componentes Técnicos del Gantry de un TC Moderno
1. **Anillos rozantes (*Slip Rings* de baja y alta tensión):** Permitieron eliminar los cables entre el estator y el rotor, haciendo posible el giro continuo unidireccional (**TC Helicoidal**, velocidades de rotación actuales de **$0,23\text{ a }0,35\text{ s/vuelta}$**, soportando fuerzas centrífugas de hasta $30\text{–}40\text{ G}$).
2. **Tubo de rayos X de alta capacidad térmica ($6\text{ a }8\text{ MHU}$ o tubos de ánodo giratorio tipo *Straton* con enfriamiento directo del ánodo en aceite y deflexión magnética del punto focal — *Flying Focal Spot*)** y generador de alta frecuencia embarcado en el gantry ($60\text{–}120\text{ kW}$, $70\text{–}140\text{ kVp}$).
3. **Filtros de forma (*Bowtie Filters* o filtros en pajarita):** Atenúan más la periferia del haz (donde el espesor del cuerpo es menor) que el centro, homogeneizando el flujo de fotones que llega al detector y reduciendo la dosis superficial y el endurecimiento del haz.
4. **Arco de Detectores de Estado Sólido (Multicorte / MDCT):**
   - Formado por **centelleadores cerámicos ultrarrápidos** (ej. **Oxisulfuro de Gadolinio $\text{Gd}_2\text{O}_2\text{S}$ cerámico [UFC]** o **granates basados en tierras raras / GemStone** con mínimo *afterglow* o luminiscencia residual) acoplados a fotodiodos de silicio y electrónica integrada.

### 3.3. Evolución de las Modalidades de Adquisición (Tema 6)
1. **Adquisición Helicoidal (Espiral) y el Factor de Paso (*Pitch*):**
   - El tubo gira continuamente mientras la mesa avanza a velocidad constante.
   - **Definición exacta de *Pitch* (IEC):**
     $$\text{Pitch} = \frac{\text{Desplazamiento de la mesa por rotación ($I$)}}{\text{Anchura total del haz colimado en el isocentro ($N \times T$)}}$$
     - **$\text{Pitch} = 1$:** Hélices contiguas sin solapamiento ni huecos.
     - **$\text{Pitch} < 1$ (ej. $0,2\text{–}0,8$):** Hélices solapadas (**mayor dosis**, mayor calidad/muestreo longitudinal; obligatorio en **TC cardíaco sincronizado con ECG**).
     - **$\text{Pitch} > 1$ (ej. $1,2\text{–}1,5$):** Hélices estiradas (**menor dosis** al paciente y adquisición más rápida).
2. **TC Multicorte (MDCT — *Multidetector CT*) y TC Volumétrico (Haz Cónico Amplio):**
   - Disponen de $16, 64, 128, 256\text{ o }320\text{ filas de detectores}$ en el eje longitudinal $Z$ (espesor de corte submilimétrico de $0,5\text{–}0,625\text{ mm}$), logrando **vóxeles isotrópicos** (igual resolución en los 3 planos: axial, coronal y sagital).
   - Un **TC volumétrico de 256–320 cortes** cubre **$16\text{ cm}$ de anatomía en una sola rotación de $0,27\text{ s}$** sin mover la mesa, permitiendo adquirir el **corazón entero en un solo latido** o estudios de perfusión cerebral completa 4D.
3. **TC Espectral / Doble Energía (DECT — *Dual-Energy CT*) y TC con Contaje de Fotones (*Photon-Counting CT*):**
   - **Fundamento del TC Espectral:** Adquiere datos a **dos espectros energéticos distintos** (ej. $80\text{ kVp}$ y $140\text{ kVp}$), lo que permite separar materiales con igual UH pero distinto número atómico $Z$ aprovechando la diferencia entre el efecto fotoeléctrico y el Compton (**mapas de yodo, imágenes virtuales sin contraste VNC, caracterización de cálculos renales de ácido úrico vs. calcio, eliminación de artefactos metálicos e imágenes monoenergéticas virtuales keV**).
   - **Las 4 tecnologías de TC Espectral comercializadas:**
     1. **Doble Fuente (*Dual Source* — dos tubos y dos detectores a $\sim 90^\circ$)** operando a diferentes kVp (además logra resolución temporal de $66\text{ ms}$).
     2. **Conmutación ultrarrápida de kVp (*Fast kVp Switching*)** en un único tubo (alterna entre $80\text{ y }140\text{ kVp}$ en $< 0,5\text{ ms}$).
     3. **Detector de Doble Capa (*Dual-Layer Detector*):** Un solo tubo polícromo y un detector con dos capas superpuestas (la capa superior de $\text{ZnSe}$/itrio absorbe los fotones de baja energía y la inferior de $\text{GOS}$ los de alta energía).
     4. **TC por Contaje de Fotones (*Photon-Counting Detector CT* — PCCT):** Usa detectores semiconductores directos de **Telururo de Cadmio-Zinc ($\text{CdZnTe}$ / CZT)** que cuentan cada fotón individual y miden su energía exacta en múltiples umbrales espectrales, eliminando el ruido electrónico y duplicando la resolución espacial.
4. **Algoritmos de Reconstrucción y Magnitudes de Dosis en TC:**
   - **Reconstrucción:** De la clásica **Retroproyección Filtrada (FBP)** se ha pasado a la **Reconstrucción Iterativa Estadística/Basada en Modelos (IR: ASIR, iDose, SAFIRE/ADMIRE, AIDR)** y **Reconstrucción por Aprendizaje Profundo (*Deep Learning Reconstruction* — DLR)**, que reducen el ruido y permiten bajar la dosis un $40\text{–}70\%$.
   - **Magnitudes dosimétricas obligatorias en consola de TC (Tema 6 y Tema 51):**
     - **$\text{CTDI}_{\text{vol}}$ (*Índice de Dosis en TC Volumétrico*, en $\text{mGy}$):**
       $$\text{CTDI}_w = \frac{1}{3}\text{CTDI}_{100,\text{centro}} + \frac{2}{3}\text{CTDI}_{100,\text{periferia}} \quad \Longrightarrow \quad \text{CTDI}_{\text{vol}} = \frac{\text{CTDI}_w}{\text{Pitch}}$$
     - **DLP (*Dose-Length Product* — Producto Dosis-Longitud, en $\text{mGy}\cdot\text{cm}$):**
       $$\text{DLP} = \text{CTDI}_{\text{vol}} \times L\text{ (longitud explorada en cm)}$$

---

## 4. Tema 7: Mamografía Digital (FFDM), Tomosíntesis e Intervencionismo Mamario

La mamografía es la técnica radiológica más exigente porque debe lograr al mismo tiempo **máximo contraste entre tejidos blandos muy similares** (tejido fibroglandular vs. carcinoma vs. grasa) y **máxima resolución espacial** (para visualizar **microcalcificaciones de $50\text{–}100\text{ }\mu\text{m}$**) con la **mínima Dosis Glandular Media (DGM)**.

### Características Técnicas Exclusivas de un Mamógrafo Digital (¡Preguntas fijas de examen!)
1. **Baja energía del haz ($22\text{ a }35\text{ kVp}$):** Para potenciar al máximo el **efecto fotoeléctrico** ($\propto Z^3/E^3$) y diferenciar tejido glandular de tejido tumoral.
2. **Combinaciones Ánodo / Filtro específicas (Radiación Característica K):**
   - A diferencia de los tubos convencionales (Tungsteno + filtro de Aluminio), el mamógrafo aprovecha las líneas de radiación característica K y el borde de absorción K del filtro:
     - **Molibdeno / Molibdeno ($\text{Mo/Mo}$, $Z=42$):** Picos característicos a **$17,5\text{ y }19,6\text{ keV}$** (óptimo para mamas pequeñas/poco densas).
     - **Molibdeno / Rodio ($\text{Mo/Rh}$)** o **Rodio / Rodio ($\text{Rh/Rh}$, $Z=45$):** Picos a **$20,2\text{ y }22,7\text{ keV}$** (mayor penetración para mamas densas/gruesas).
     - **Tungsteno / Rodio ($\text{W/Rh}$) o Tungsteno / Plata ($\text{W/Ag}$):** Estándar en los **mamógrafos digitales directos modernos y en tomosíntesis**, ya que reduce significativamente la dosis glandular media manteniendo la relación contraste-ruido.
3. **Ventana de salida del tubo de Berilio ($\text{Be}, Z=4$):** En lugar de vidrio, porque el vidrio absorbería los fotones de baja energía ($17\text{–}20\text{ keV}$).
4. **Foco ultrafino:** **$0,3\text{ mm}$** para mamografía de contacto y **$0,1\text{ mm}$** para mamografía magnificada.
5. **Dispositivo de Compresión de la mama ($100\text{–}200\text{ N}$):** Imprescindible porque:
   - Reduce el espesor de la mama $\rightarrow$ **disminuye drásticamente la dosis glandular** y la **radiación dispersa** (mejorando el contraste).
   - Inmoviliza la mama (evita borrosidad cinética) y separa las estructuras tisulares superpuestas.
6. **Detector Digital Directo de Selenio Amorfo ($\text{a-Se}$):** Tamaño de píxel de **$50\text{ a }100\text{ }\mu\text{m}$** (resolución espacial de **$5\text{ a }10\text{ pl/mm}$** en digital).
7. **Tomosíntesis Digital de Mama (DBT) y Mamografía con Contraste (CESM):**
   - **Tomosíntesis (DBT):** El tubo de RX se desplaza en un arco angular ($15^\circ\text{ a }50^\circ$) realizando múltiples proyecciones de muy baja dosis que se reconstruyen en cortes milimétricos ($1\text{ mm}$), eliminando la superposición de tejido fibroglandular en mamas densas.
   - **Intervencionismo mamario:** Sistema de **biopsia estereotáxica** (localización 3D de la lesión mediante dos proyecciones anguladas a $+15^\circ\text{ y }-15^\circ$) o **biopsia guiada por tomosíntesis (sistema BAV — Biopsia Asistida por Vacío)**.

---

## 5. Tema 8 y Tema 9: Radiología Portátil, Arcos Quirúrgicos, Salas de Intervencionismo Vascular/Hemodinámica y Quirófanos Híbridos

### 5.1. Equipos de Radiología Portátil y Arcos en C Móviles (Tema 8)
1. **Equipos Portátiles de Radiografía Digital (Urgencias, UCI, Neonatología, Aislamiento):**
   - Carros motorizados alimentados por **baterías recargables de litio-hierro-fosfato o plomo-ácido** (o descarga de condensadores en modelos antiguos), con brazo articulado o columna telescópica, generador de alta frecuencia ($20\text{–}40\text{ kW}$) y **detector Flat Panel inalámbrico (Wi-Fi / UWB)** de $\text{CsI:Tl}$ con visualización inmediata en pantalla táctil integrada e integración DICOM por red inalámbrica hospitalaria.
2. **Arcos Quirúrgicos Móviles en «C» (Fluoroscopia intraoperatoria en Traumatología, Urología, Cirugía Vascular, Marcapasos):**
   - Montados sobre un brazo en C isocéntrico o no isocéntrico con movimientos de **rotación orbital, angulación cráneo-caudal, paneo (*wig-wag*), elevación vertical y traslación horizontal**.
   - **Receptor de imagen:** Los equipos modernos sustituyen el antiguo *Intensificador de Imagen + cámara CCD* por un **Detector de Panel Plano Dinámico de $\text{CsI}$ o $\text{CMOS}$** (sin distorsión geométrica en cojín/*pincushion*, campo de visión cuadrado completo y menor perfil).
   - **Fluoroscopia pulsada ($1\text{ a }30\text{ pulsos/s}$) y retención de última imagen (*Last Image Hold* — LIH):** Técnicas obligatorias para reducir la dosis al paciente y al personal de quirófano.
   - **Regla de oro de Protección Radiológica en un Arco en C (¡Pregunta fija de supuesto práctico!):**
     > El **TUBO DE RAYOS X debe colocarse siempre DEBAJO de la mesa quirúrgica** y el **DETECTOR DE IMAGEN ENCIMA del paciente**. De este modo, la radiación retrodispersada (que es la más intensa a la entrada del haz en el paciente) se dirige hacia el suelo y **se reduce hasta en 3–5 veces la dosis en el cristalino y tiroides del cirujano**.

### 5.2. Sistemas de Intervencionismo Vascular, Hemodinámica y Electrofisiología (Tema 9)
- **Geometría del estativo:** Sistemas fijos de suelo, de techo o **Biplano** (dos arcos en C ortogonales simultáneos: frontal + lateral, imprescindibles en **Neurorradiología intervencionista** e **intervencionismo cardíaco pediátrico** porque permiten ver dos planos con **una sola inyección de contraste yodado**).
- **Tubo de rayos X de altísima capacidad térmica** con ánodo refrigerado por fluido y cojinete de metal líquido, **filtración adicional automática de Cobre ($\text{Cu}$ de $0,1\text{ a }0,9\text{ mm}$)** (elimina los fotones blandos que solo dan dosis en piel sin llegar al detector) y **Fluoroscopia / Cinefluorografía pulsada**.
- **Angiografía por Sustracción Digital (DSA — *Digital Subtraction Angiography*):**
  - Adquiere una **imagen máscara** previa a la llegada del contraste yodado y la resta digitalmente píxel a píxel de las imágenes con contraste, eliminando el hueso y los tejidos blandos estáticos para dejar visible únicamente el árbol vascular (**Roadmapping / Mapa vascular en tiempo real**).
- **Equipamiento asociado e integrado en la sala de Hemodinámica:**
  - **Inyector angiográfico de contraste sincronizado** con el disparo de rayos X (control de caudal en $\text{ml/s}$, volumen total y límite de presión en $\text{psi}$).
  - **Polígrafo de hemodinámica y electrofisiología** (registro de ECG intracavitario de 12 derivaciones, presiones invasivas aórtica/ventricular/pulmonar, gasto cardíaco y reserva de flujo fraccional **FFR**).
  - **Ecografía intravascular (IVUS) y Tomografía de Coherencia Óptica intracoronaria (OCT)**.
  - **Medición de Dosis en Piel en Tiempo Real:** Como los procedimientos complejos (ej. oclusiones coronarias crónicas CTO o embolizaciones) pueden superar el umbral de eritema/radiodermitis (**$> 2\text{–}3\text{ Gy}$ de dosis en piel en el punto de entrada — $K_{a,r}$**), el sistema calcula y muestra en pantalla el **Kerma en aire en el punto de referencia intervencionista ($K_{a,r}$ en $\text{mGy}$)** y el **Producto Dosis-Área ($\text{PKA}$)**.

### 5.3. Quirófanos Híbridos (Tema 9)
Un **Quirófano Híbrido** es una sala que combina en un único espacio las prestaciones y requisitos de **un quirófano de cirugía mayor de máxima asepsia (Clase I / ISO 5 según `UNE 100713`)** con un **sistema fijo de imagen angiográfica avanzada (Arco robotizado de suelo/techo con capacidad de TC de haz cónico *Cone-Beam CT* / *DynaCT*, o bien un TC sobre raíles o RM intraoperatoria)**.
- **Requisitos críticos de ingeniería de un Quirófano Híbrido (Pregunta de supuesto práctico):**
  1. **Superficie mínima recomendada:** **$65\text{ a }90\text{ m}^2$** (frente a los $40\text{–}45\text{ m}^2$ de un quirófano convencional), más sala de control con visor plomado y sala técnica de armarios electrónicos.
  2. **Integración de flujo laminar e iluminación quirúrgica con el arco angiográfico:** Los carriles de techo o el brazo robotizado del angiógrafo no deben interrumpir la cortina de **flujo unidireccional (laminar) de aire ultralimodio** sobre el campo quirúrgico.
  3. **Mesa quirúrgica-angiográfica integrada:** Tablero **totalmente flotante en fibra de carbono (radiotransparente $360^\circ$)** pero dotado de movimientos quirúrgicos completos (Trendelenburg, anti-Trendelenburg, inclinación lateral *tilt*) y **comunicación sincronizada anticolisión con el arco en C**.
  4. **Doble blindaje y seguridad:** Cumple simultáneamente el reglamento de **instalaciones de rayos X (`RD 1085/2009`)**, el **REBT `ITC-BT-38`** (esquema IT de transformadores de aislamiento de quirófano) y la norma de climatización de quirófanos de alta tecnología **`UNE 100713` (Clase I)**.
