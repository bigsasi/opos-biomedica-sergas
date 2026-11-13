# Bloque 03 — Resonancia Magnética, Ultrasonidos, Radioterapia (Externa, Braquiterapia, Protonterapia, Planificación) y Medicina Nuclear (Ciclotrón, PET, SPECT)

> **Temas de la Parte Específica cubiertos íntegramente en este bloque (10 temas):**
> - **Tema 10:** Caracterización de los equipos de resonancia magnética. Generación de la señal electromagnética. Componentes, equipos e imanes.
> - **Tema 11:** Protocolos de actuación en resonancia magnética. Seguridad de las exploraciones, usos diagnósticos y terapéuticos de la RM. Reconstrucción y artefactos.
> - **Tema 12:** Caracterización y funcionamiento de los equipos de ultrasonido. Interacción de los ultrasonidos con el medio. Equipos y transductores. Usos diagnósticos y terapéuticos. Ecografía y artefactos.
> - **Tema 13:** Caracterización y funcionamiento de los equipos de radioterapia externa. Elementos de una instalación.
> - **Tema 14:** Caracterización y funcionamiento de los equipos de braquiterapia. Elementos de una instalación.
> - **Tema 15:** Caracterización y funcionamiento de los equipos de protonterapia. Elementos de una instalación.
> - **Tema 16:** Caracterización y funcionamiento de los sistemas de planificación para radioterapia y protonterapia. Equipamiento asociado.
> - **Tema 17:** Sistema de producción de fármacos para medicina nuclear. Ciclotrón.
> - **Tema 18:** Caracterización y funcionamiento de los equipos PET. Imagen híbrida: PET-TC y PET-RM.
> - **Tema 19:** Caracterización y funcionamiento de los equipos SPECT-TC.

---

## 1. Tema 10 y Tema 11: Equipos de Resonancia Magnética (RM), Seguridad, Reconstrucción y Artefactos

### 1.1. Fundamento Físico y Ecuación de Larmor (Tema 10)
- Los núcleos atómicos con número impar de protones y/o neutrones poseen momento angular intrínseco (**espín $I \neq 0$**) y momento magnético $\boldsymbol{\mu} = \gamma \mathbf{I}$. El núcleo utilizado en clínica es el **protón de Hidrógeno ($^1\text{H}$)** por su abundancia en agua/grasa y su elevada relación giromagnética.
- Al someter al paciente a un campo magnético estático intenso $B_0$ (eje $Z$), los espines precesan alrededor de $B_0$ a la **Frecuencia de Larmor**:
  $$\omega_0 = \gamma \cdot B_0 \quad \Longleftrightarrow \quad f_0\text{ (MHz)} = \frac{\gamma}{2\pi} \cdot B_0\text{ (T)}$$
  - **Dato fijo de examen:** Para el protón ($^1\text{H}$), $\frac{\gamma}{2\pi} = \mathbf{42,58\text{ MHz/Tesla}}$.
    - En un imán de **$1,5\text{ T}$** $\rightarrow f_0 \approx \mathbf{63,87\text{ MHz}}$ (banda de Radiofrecuencia VHF — **radiación NO ionizante**).
    - En un imán de **$3,0\text{ T}$** $\rightarrow f_0 \approx \mathbf{127,74\text{ MHz}}$.
- **Excitación y Relajación ($T_1$, $T_2$ y $T_2^*$):**
  - Un pulso de radiofrecuencia ($B_1$) a la frecuencia exacta de Larmor abate el vector de magnetización neta $\mathbf{M}$ hacia el plano transversal $XY$ (pulso de $90^\circ$ o $180^\circ$).
  - Al cesar el pulso RF, la magnetización en rotación induce por **Ley de Faraday** una señal eléctrica (**FID — *Free Induction Decay*** o eco) en la bobina receptora mientras regresa al equilibrio mediante dos procesos independientes:
    1. **Relajación Longitudinal ($T_1$ o Espín-Red):** Tiempo necesario para recuperar el **$63\%$** de la magnetización longitudinal $M_z$ entregando energía térmica a la red molecular. *(En imágenes potenciadas en **$T_1$**, la **grasa brilla** [T1 corto] y el **líquido/LCR se ve negro** [T1 largo]; tiempos cortos de TR y TE).*
    2. **Relajación Transversal ($T_2$ o Espín-Espín):** Tiempo en que la magnetización transversal $M_{xy}$ cae al **$37\%$** ($1/e$) de su valor inicial por pérdida de coherencia de fase entre espines vecinos ($T_2^*$ incluye además las inhomogeneidades del campo magnético estático $B_0$). *(En imágenes potenciadas en **$T_2$**, el **líquido/LCR/edema brilla** [T2 largo]; tiempos largos de TR y TE).*

### 1.2. Componentes de un Equipo de Resonancia Magnética (Tema 10)
1. **Imán Principal (Generador del campo estático $B_0$):**
   - **Imanes Superconductores (el estándar hospitalario en $1,5\text{ T}$ y $3,0\text{ T}$):** Bobinas de aleación de **Niobio-Titanio ($\text{NbTi}$)** sumergidas en un **criostato con Helio líquido ($\text{He}$ a $4,2\text{ K} = -269\text{ }^\circ\text{C}$)** con **refrigerador criogénico (*Cold Head* / *Zero Boil-Off*)** que recondensa el helio evitando pérdidas en operación normal. *(Los equipos modernos de «bajo helio» sellados usan apenas $7\text{ litros}$ de $\text{He}$ frente a los $1.500\text{ litros}$ clásicos).*
   - **Imanes Permanentes o Resistivos:** Abiertos de bajo campo ($0,2\text{ a }0,5\text{ T}$) para claustrofobia o extremidades.
   - **Bobinas de Homogeneización (*Shimming*):** Pasivas (placas ferromagnéticas) y activas (bobinas superconductoras/resistivas) para garantizar una homogeneidad de campo del orden de **$< 1\text{ ppm}$ (partes por millón)** en el volumen de exploración.
   - **Blindaje Magnético Activo:** Bobinas superconductoras de polaridad opuesta en el exterior del imán que confinan las líneas de dispersión (**línea de los $5\text{ Gauss} = 0,5\text{ mT}$**) dentro de la propia sala de exploración.
2. **Sistema de Gradientes Magnéticos ($G_x, G_y, G_z$):**
   - Tres pares de bobinas resistivas que suman una variación lineal al campo $B_0$ en los tres ejes espaciales para realizar la **codificación espacial de la señal**:
     - **Gradiente de Selección de Corte ($G_{ss}$)**
     - **Gradiente de Codificación de Fase ($G_{pe}$)**
     - **Gradiente de Codificación de Frecuencia o Lectura ($G_{ro}$)**
   - **Parámetros técnicos de los gradientes:** **Amplitud máxima** ($\text{mT/m}$, típicamente $33\text{–}80\text{ mT/m}$) y **Velocidad de subida (*Slew Rate*)** ($\text{T/m/s}$ o $\text{mT/m/ms}$, típicamente $120\text{–}200\text{ T/m/s}$). Son los responsables del **intenso ruido acústico ($> 90\text{–}110\text{ dB}$)** por fuerzas de Lorentz al conmutar corriente dentro del campo $B_0$.
3. **Sistema de Radiofrecuencia (Antenas / Bobinas de RF y Jaula de Faraday):**
   - **Bobina de Cuerpo (*Body Coil*):** Integrada en el gantry (transmisora/receptora).
   - **Antenas o Bobinas de Superficie y en Fase (*Phased-Array* multicanal de $16, 32\text{ o }64\text{ canales}$):** Se colocan pegadas a la región anatómica (cráneo, columna, mama, rodilla) para maximizar la **relación señal-ruido (SNR)** y permitir técnicas de **adquisición en paralelo (SENSE, GRAPPA, ARC)** que reducen el tiempo de exploración.
   - **Jaula de Faraday (Blindaje de Radiofrecuencia):** Revestimiento continuo de **cobre, aluminio o acero inoxidable** en paredes, suelo, techo, puerta y ventana (con malla conductora) de la sala de exploración que aísla de las ondas electromagnéticas externas (emisoras de radio FM, telefonía, bisturís eléctricos). Todas las tuberías de gases y cables que atraviesan la jaula deben pasar por el **Panel de Penetración** con **filtros de paso y guías de onda (*waveguides*)**.

### 1.3. Reconstrucción (*Espacio K*), Artefactos y Seguridad en RM (Tema 11)
1. **El Espacio K y la Transformada de Fourier 2D/3D:**
   - Las señales de eco digitales se almacenan en una matriz de frecuencias espaciales llamada **Espacio K**:
     - El **centro del Espacio K** (bajas frecuencias espaciales) contiene la información de **contraste y brillo general** de la imagen.
     - La **periferia del Espacio K** (altas frecuencias espaciales) contiene los **bordes finos y la resolución espacial (detalle)**.
   - Aplicando la **Transformada Rápida de Fourier Inversa (2D/3D-IFFT)** al Espacio K se obtiene la imagen anatómica final.
2. **Artefactos Clásicos de RM (¡Muy preguntados en test!):**
   - **Artefacto de Superposición o *Aliasing* (*Wrap-around*):** Ocurre cuando el campo de visión (**FOV**) es menor que el tamaño anatómico del paciente; la anatomía exterior al FOV se pliega en el lado opuesto de la imagen (se corrige aumentando el FOV o aplicando *oversampling* / bandas de saturación).
   - **Artefacto por Desplazamiento Químico (*Chemical Shift*):** Los protones de la **grasa y del agua precesan con una diferencia de frecuencia de $3,5\text{ ppm}$** ($\approx 220\text{ Hz}$ en $1,5\text{ T}$ y $440\text{ Hz}$ en $3\text{ T}$), generando una banda blanca y otra negra en las interfases grasa-agua en la dirección de codificación de frecuencia.
   - **Artefacto de Susceptibilidad Magnética:** Distorsión y vacío de señal alrededor de objetos metálicos o interfases aire-hueso (peor en secuencias Eco de Gradiente $T_2^*$ que en Spin-Eco).
   - **Artefacto de Truncación o de Gibbs (*Ringing*):** Líneas paralelas alternantes brillantes/oscuras junto a bordes de alto contraste (ej. médula espinal-LCR) por muestreo insuficiente de altas frecuencias en el espacio K.
   - **Artefacto en Cremallera (*Zipper artifact*):** Línea brillante transversal provocada por una **fuga en la Jaula de Faraday** (ej. puerta de la sala de RM mal cerrada o bombilla defectuosa).
   - **Artefacto de Ángulo Mágico ($54,7^\circ$):** Hiperintensidad artificial en tendones/ligamentos cuando sus fibras de colágeno forman un ángulo de $\approx 55^\circ$ con el campo $B_0$ en secuencias de TE corto.
3. **Seguridad en RM: Las 4 Zonas ACR, Riesgos y el *Quench* (¡Caso práctico estrella!):**
   - **Los 3 Campos y sus Riesgos Biológicos/Físicos:**
     1. **Campo Estático ($B_0$):** **Efecto Proyectil (Misil)** por atracción violenta de objetos ferromagnéticos (botellas de acero de $\text{O}_2$, camillas, tijeras) y desplazamiento/torsión de clips de aneurisma ferromagnéticos o mal funcionamiento de marcapasos antiguos. **El imán superconductor SIEMPRE ESTÁ ENCENDIDO ($24\text{ h} / 365\text{ días}$)**.
     2. **Gradientes variables en el tiempo ($dB/dt$):** **Estimulación Nerviosa Periférica (PNS)** (hormigueo/espasmos musculares), inducción de corrientes en cables/implantes y **ruido acústico** (obligatorio protectores auditivos al paciente).
     3. **Pulsos de Radiofrecuencia ($B_1$):** **Calentamiento tisular (medido por el SAR en $\text{W/kg}$, límite normal IEC $< 2\text{ W/kg}$ cuerpo entero y $< 4\text{ W/kg}$ en modo controlado de primer nivel)** y riesgo de **quemaduras térmicas por efecto antena/bucle** en cables de ECG, sensores o contacto piel con piel.
   - **Las 4 Zonas de Seguridad en RM (Guía ACR):**
     - **Zona I:** Acceso libre al público general (fuera del entorno de RM).
     - **Zona II:** Recepción, anamnesis y **cribado de seguridad (*screening*)** de pacientes antes de pasar al área controlada.
     - **Zona III:** Sala de control y pasillo previo al imán. **Acceso estrictamente restringido** con control físico (cerradura/tarjeta); prohibida la entrada de objetos ferromagnéticos y personal no formado.
     - **Zona IV:** **La Sala del Imán** (dentro de la Jaula de Faraday). Todo el equipamiento que entre en Zona IV (monitores, bombas, respiradores de anestesia, camillas, extintores de $\text{CO}_2$ en aluminio/antimagnéticos) debe tener marcado **`MR Safe` (Seguro en RM — cuadrado verde)** o **`MR Conditional` (Condicional en RM — triángulo amarillo)**.
   - **El *Quench* (Pérdida súbita de la superconductividad):**
     - Si el bobinado superconductor sube por encima de su temperatura crítica, pasa a estado resistivo y el calor **evapora súbitamente todo el Helio líquido** ($1\text{ litro de He líquido} \rightarrow \mathbf{750\text{ litros de gas}}$), que debe evacuarse al exterior del edificio por el **Tubo de Quench**.
     - **¿Qué ocurre si falla o se obstruye el Tubo de Quench?** El helio gaseoso entra en la sala del imán provocando: **1) Asfixia por desplazamiento del oxígeno** (por eso es obligatorio un **oxímetro ambiental con alarma cuando $\text{O}_2 < 18\text{–}19\%$**), **2) Sobrepresión en la sala** que puede impedir abrir la puerta si abre hacia dentro (más sistema de extracción de emergencia), y **3) Hipotermia/congelación y niebla densa**.
     - **Protocolo ante Parada Cardiorrespiratoria en Zona IV:** **NUNCA meter el carro de paradas ni el desfibrilador convencional en la Sala del Imán (Zona IV)**; se saca inmediatamente al paciente en la camilla antimagnética a la **Zona III o Zona II** en $< 30\text{ segundos}$ y allí se desfibrila y reanima (el botón de *Quench de Emergencia* solo se pulsa si una persona ha quedado **atrapada físicamente contra el imán** con riesgo vital por un objeto ferromagnético).

---

## 2. Tema 12: Equipos de Ultrasonido (Ecografía): Transductores, Doppler y Artefactos

### 2.1. Física de los Ultrasonidos e Interacción con el Medio
- **Ultrasonido:** Onda mecánica longitudinal de presión acústica con frecuencia **$f > 20\text{ kHz}$** (**NO es radiación electromagnética y requiere un medio material elástico para propagarse; no se propaga en el vacío**).
- **Frecuencias en Diagnóstico Médico:** **$2\text{ a }18\text{ MHz}$** (hasta $20\text{–}50\text{ MHz}$ en ecografía intravascular IVUS/dermatológica/oftálmica).
  - **Compromiso fundamental de examen (Frecuencia vs. Penetración):**
    - **Alta frecuencia ($7,5\text{ a }15\text{ MHz}$, sonda lineal):** **Mayor resolución axial y lateral**, pero **mayor atenuación y menor penetración** (estructuras superficiales: tiroides, mama, musculoesquelético, vasos superficiales, pediatría).
    - **Baja frecuencia ($2\text{ a }5\text{ MHz}$, sonda convex/sectorial):** **Menor resolución espacial**, pero **mayor penetración en profundidad** (abdomen adultos, obstetricia, ecocardiografía).
- **Velocidad de propagación media en tejidos blandos ($c$):** El ecógrafo asume por calibración un valor constante de **$c = \mathbf{1.540\text{ m/s}}$** (en aire $c \approx 330\text{ m/s}$; en hueso $c \approx 4.080\text{ m/s}$).
- **Impedancia Acústica ($Z$) y Coeficiente de Reflexión ($R$):**
  $$Z = \rho \cdot c \quad (\text{en Rayls} = \text{kg}/(\text{m}^2\cdot\text{s})) \quad \Longrightarrow \quad R = \left(\frac{Z_2 - Z_1}{Z_2 + Z_1}\right)^2$$
  - Cuanto mayor es la **diferencia de impedancia acústica ($\Delta Z$)** en una interfase entre dos medios, **mayor es el eco reflejado** y menor el haz transmitido.
  - En las interfases **Tejido Blando–Aire** y **Tejido Blando–Hueso/Calcio**, se refleja casi el **$99\text{–}99,9\%$** del ultrasonido $\rightarrow$ por eso es obligatorio usar **gel acoplador acústico** (elimina la capa de aire entre transductor y piel) y por eso el hueso/cálculo y el gas producen **sombra acústica**.

### 2.2. Transductores, Modos Ecográficos y Artefactos
- **Efecto Piezoeléctrico Directo e Inverso (Pierre y Jacques Curie):** Cristales cerámicos polarizados de **Titanato-Circonato de Plomo (PZT)** o monocristales compuestos que vibran al aplicarles un pulso eléctrico (emisor) y generan voltaje al recibir el eco mecánico (receptor, trabajando el $>99\%$ del tiempo como receptor). Constan de: capa amortiguadora posterior (*backing* que acorta el pulso mejorando la **resolución axial**), cristal PZT y **capa de adaptación de cuarto de onda ($\lambda/4$)** en la cara frontal.
- **Tipos de sondas electrónicas:** **Lineal** (campo rectangular, alta frecuencia), **Cónvex / Curvilínea** (campo trapezoidal amplio para abdomen/obstetricia), **Sectorial *Phased-Array*** (huella pequeña para pasar entre las costillas en **ecocardiografía** y ventana transcraneal) e **Intracavitarias** (endovaginal, transrectal, transesofágica ETE).
- **Modos Ecográficos:** **Modo A** (amplitud, biometría ocular), **Modo B** (brillo 2D en escala de grises), **Modo M** (movimiento en el tiempo de válvulas cardíacas), **Modo Doppler** ($f_D = \frac{2 f_0 v \cos\theta}{c}$; **ángulo Doppler óptimo entre $30^\circ\text{ y }60^\circ$**; si $\theta = 90^\circ$, $\cos 90^\circ = 0$ y no hay señal Doppler: Continuo CW, Pulsado PW, Color y Power Doppler), **Armónicos Tisulares (THI)** y **Elastografía** (mide la rigidez/fibrosis tisular).
- **Artefactos Ecográficos (¡Muy preguntados!):**
  - **Sombra acústica posterior:** Zona negra detrás de una estructura muy reflectante/atenuante (**litiasis biliar/renal, hueso, calcificaciones**).
  - **Refuerzo acústico posterior:** Zona hiperecogénica brillante detrás de una estructura que atenúa muy poco el sonido (**quistes simples, vejiga urinaria llena, vesícula biliar**).
  - **Reverberación y Cola de Cometa / *Ring-down*:** Ecos múltiples paralelos entre dos interfases muy reflectantes (aire, pleura, cuerpos extraños metálicos).
  - **Imagen en espejo:** Duplicación virtual de una lesión al otro lado de un reflector especular curvo intenso como el **diafragma**.
  - **Anisotropía:** Variación de la ecogenicidad de un tendón según el ángulo de incidencia del haz (debe ser perpendicular a $90^\circ$).
- **Usos Terapéuticos e Índices de Seguridad (MI y TI):**
  - **Índices en pantalla:** **Índice Térmico (TI: TIS, TIB, TIC)** e **Índice Mecánico ($\text{MI} = P_{\text{neg}} / \sqrt{f}$, riesgo de cavitación)**.
  - **Ultrasonidos Terapéuticos:** Fisioterapia ($1\text{ y }3\text{ MHz}$), **Litotricia Extracorpórea por Ondas de Choque (LEOC)** y **HIFU (*High-Intensity Focused Ultrasound*)** para ablación térmica focal no invasiva de tumores (próstata, miomas, tálamo guiado por RM).

---

## 3. Temas 13, 14, 15 y 16: Radioterapia Externa (LINAC), Braquiterapia, Protonterapia y Sistemas de Planificación (TPS)

### 3.1. Tema 13: Equipos de Radioterapia Externa e Instalación (Acelerador Lineal — LINAC)
1. **Acelerador Lineal de Electrones (ALE / LINAC) de Uso Médico:**
   - **Cañón de electrones (cátodo termoiónico triodo)** $\rightarrow$ inyecta electrones en la **Guía de Ondas Aceleradora** (cavidades resonantes de cobre al alto vacío alimentadas por microondas de alta potencia en banda S a **$2.998\text{ MHz} \approx 3\text{ GHz}$** generadas por un **Magnetrón** [energías bajas/medias] o un **Klystron** [altas energías]).
   - **Sistema de Transporte y Deflexión Magnética del Haz ($270^\circ$ acromático o *slalom*):** Dirige el haz de electrones hacia el paciente en el **Gantry isocéntrico** (distancia fuente-isocentro estándar **$\text{SAD} = 100\text{ cm}$**).
   - **Cabezal de Tratamiento del LINAC (Doble modalidad: Fotones MV o Electrones MeV):**
     - **Para tratar con FOTONES (Rayos X de alta energía, ej. $6\text{ MV}, 10\text{ MV}, 15\text{ MV}$):** El haz de electrones choca contra un **Blanco (*Target*) de Tungsteno** produciendo rayos X por frenado (*Bremsstrahlung*), que atraviesan el **Colimador Primario**, el **Filtro Aplanador** (o modo **FFF — *Flattening Filter Free*** sin filtro aplanador para altísimas tasas de dosis en SBRT/SRS), las **Cámaras Monitoras de Ionización dobles e independientes** (miden las **Unidades Monitor — UM**, simetría y planicidad), las **Mandíbulas secundarias ($X, Y$)** y el **Colimador Multiláminas (MLC, de $80\text{ a }160\text{ láminas motorizadas de tungsteno}$)** que conforma el haz para técnicas **3D-CRT, IMRT y VMAT**.
     - **Para tratar con ELECTRONES directos (ej. $4, 6, 9, 12, 15\text{ MeV}$ para lesiones superficiales):** Se **retira el blanco de tungsteno y el filtro aplanador**, se interpone una **Lámina Dispersora (*Scattering Foil*)** para abrir el haz de electrones y se coloca un **Cono Aplicador de Electrones** cerca de la piel.
   - **Sistemas de Radioterapia Guiada por Imagen (IGRT) embarcados en el LINAC:**
     - **Portal electrónico de megavoltaje (EPID)** + **Sistema de imagen de kilovoltaje ortogonal y TC de Haz Cónico (*Cone-Beam CT* — kV-CBCT)** montado en el propio gantry para verificar la posición milimétrica del tumor antes de cada sesión.
2. **Elementos de una Instalación de Teleterapia (Búnker de Radioterapia):**
   - **Instalación Radiactiva de 2ª Categoría** (autorizada por el Ministerio/Comunidad Autónoma previo informe preceptivo y vinculante del **CSN**).
   - **Búnker de hormigón de alta densidad (baritado/magnetita o convencional de $1,5\text{ a }2,5\text{ m}$ de espesor):**
     - **Barreras Primarias:** Muros, techo y suelo sobre los que puede incidir directamente el haz útil del acelerador.
     - **Barreras Secundarias:** Muros que solo reciben **radiación de fuga del cabezal** y **radiación dispersada por el paciente**.
   - **Laberinto de acceso y Puerta blindada motorizada:** Si el acelerador opera a **$> 10\text{ MV}$**, produce **fotoneutrones**, por lo que la puerta debe incluir **polietileno borado / parafina borada** (moderación de neutrones rápidos en el hidrógeno + captura en el Boro-10) además de plomo.
   - **Enclavamientos de seguridad obligatorios:** Botones de parada de emergencia, enclavamiento de puerta (corta la irradiación si se abre la puerta), botón de «último hombre fuera» (*Search & Evacuate*), indicadores luminosos (rojo = irradiando) y acústicos, CCTV e intercomunicador con el paciente, y **láseres de posicionamiento isocéntricos** (sagital, coronal y transversal con tolerancia $\le 1\text{–}2\text{ mm}$).

### 3.2. Tema 14: Equipos de Braquiterapia e Instalación
La **Braquiterapia** consiste en colocar fuentes radiactivas encapsuladas dentro o en contacto inmediato con el tumor, aprovechando la caída rápida de dosis por la **ley de la inversa del cuadrado de la distancia ($1/r^2$)**.
1. **Clasificación según la Tasa de Dosis (ICRU 38):**
   - **Baja Tasa de Dosis (LDR — *Low Dose Rate*):** **$0,4\text{ a }2\text{ Gy/h}$** (ej. implantes permanentes de semillas de **Yodo-125 [$^{125}\text{I}$, $T_{1/2} = 59,4\text{ días}$, $E \approx 28\text{ keV}$]** en cáncer de próstata o placas oftálmicas de Rutenio-106).
   - **Media Tasa de Dosis (MDR):** $2\text{ a }12\text{ Gy/h}$.
   - **Alta Tasa de Dosis (HDR — *High Dose Rate*):** **$> 12\text{ Gy/h}$** (el estándar actual en los hospitales del SERGAS). Utiliza una única microfuente de alta actividad ($\approx 10\text{ Ci} = 370\text{ GBq}$) de **Iridio-192 ($^{192}\text{Ir}$, $T_{1/2} = 73,8\text{ días}$, $E_{\gamma\text{ media}} \approx 380\text{ keV}$)** o **Cobalto-60 ($^{60}\text{Co}$, $T_{1/2} = 5,27\text{ años}$)**.
   - **Tasa de Dosis Pulsada (PDR):** Pulsos cortos cada hora que simulan radiobiológicamente la LDR usando un equipo de carga diferida.
2. **Equipos de Carga Diferida Automática Remota (*Remote Afterloading* HDR):**
   - Primero se colocan en el paciente los **aplicadores/catéteres vacíos (no radiactivos)** en quirófano (ginecológicos tipo Fletcher/anillo, agujas intersticiales, bronquiales, esofágicos), se realiza la imagen de planificación (TC/RM/Ecografía) y, con el personal **fuera del búnker**, el equipo hace avanzar la microfuente de $^{192}\text{Ir}$ soldada a la punta de un cable de acero mediante motores paso a paso hasta las posiciones programadas (*dwell positions*) durante los tiempos calculados (*dwell times*), comprobando antes cada canal con un **cable simulado (*dummy source*)**.
   - **Calibración de la fuente:** Obligatoria en el hospital antes de su uso clínico mediante una **Cámara de Ionización de Pozo (Tipo Pozo)** expresando la intensidad de la fuente como **Tasa de Kerma en Aire de Referencia ($\text{RAKR}$ en $\mu\text{Gy}\cdot\text{m}^2/\text{h} = \text{Unidades } \text{U}$)**.

### 3.3. Tema 15: Equipos de Protonterapia e Instalación
1. **Ventaja Física y Radiobiológica de los Protones (El Pico de Bragg):**
   - A diferencia de los fotones (cuya dosis es máxima a pocos milímetros/centímetros de la piel y luego decae exponencialmente atravesando todo el paciente y dando dosis de salida a los órganos sanos posteriores), los **protones ($p^+$, partículas pesadas cargadas)** depositan una dosis baja a la entrada (**meseta de entrada**), frenan bruscamente a una profundidad exacta que depende de su energía inicial ($70\text{ a }250\text{ MeV}$) depositando el máximo de energía en el **Pico de Bragg**, y **después del Pico de Bragg la dosis cae prácticamente a CERO (sin dosis de salida)**.
   - Para cubrir el espesor total de un tumor se superponen haces de distintas energías creando un **Pico de Bragg Ensanchado (*Spread-Out Bragg Peak* — SOBP)**.
   - **Indicaciones clínicas clave:** **Tumores pediátricos** (minimiza segundos tumores radioinducidos y déficit neurocognitivo), tumores de base de cráneo/cordomas/condrosarcomas (junto a tronco cerebral y quiasma óptico), melanomas oculares y reirradiaciones.
2. **Elementos Técnicos de una Instalación de Protonterapia (¡Tema de actualidad en el SERGAS por el Centro de Protonterapia de Galicia en Santiago de Compostela!):**
   - **Acelerador de partículas ($70\text{–}250\text{ MeV}$):**
     - **Ciclotrón** (isócrono o sincrociclotrón superconductor compacto: emite haz continuo de energía fija máxima, ej. $230\text{–}250\text{ MeV}$, que luego se frena a la energía deseada mediante un **Degradador de Energía — *Energy Selection System* [ESS]** con cuñas de grafito/berilio), o bien
     - **Sincrotrón** (anillo de radio constante que acelera pulsos directamente a la energía exacta requerida para cada capa sin necesitar degradador pasivo).
   - **Línea de Transporte del Haz (*Beam Transport Line*):** Imanes dipolares (curvan el haz) y cuadrupolares (enfocan el haz) en alto vacío.
   - **Gantry Rotatorio Isocéntrico ($360^\circ$ o $190^\circ$):** Estructura mecánica de gran tonelaje ($100\text{–}200\text{ toneladas}$ y $10\text{ m}$ de diámetro en sistemas clásicos, o compacto en sistemas de una sola sala) con una **Boquilla de Tratamiento (*Nozzle*)** que aplica la técnica moderna de **Barrido Activo por Pincel (*Pencil Beam Scanning* — PBS / IMPT)**: dos imanes deflectores rápidos barren el tumor punto por punto en $(X,Y)$ mientras se cambia la energía para barrer en profundidad $(Z)$, sin necesidad de colimadores ni compensadores personalizados por paciente.
   - **Blindajes especiales:** Muros de hormigón de **$2\text{ a }4\text{ metros}$ de espesor** para frenar los **neutrones secundarios de alta energía** generados en el degradador y en la boquilla.

### 3.4. Tema 16: Sistemas de Planificación de Tratamiento (TPS) para Radioterapia y Protonterapia
1. **Equipamiento Asociado de Simulación e Inmovilización:**
   - **TC Simulador de Gran Apertura (*Big Bore CT*, diámetro de gantry de $80\text{–}90\text{ cm}$):** Permite escanear al paciente en la misma posición e inmovilización exacta del tratamiento (**tablero plano indexado de fibra de carbono**, máscaras termoplásticas craneales, colchones de vacío, planos inclinados de mama y **láseres externos móviles motorizados LAP** para tatuar el origen de coordenadas).
   - **Fusión Multimodal de Imágenes (Registro rígido y deformable):** Se fusiona el **TC de simulación** (imprescindible porque aporta el **mapa de densidad electrónica $\rho_e$ o Poder de Frenado Relativo [SPR en protones]** a partir de las Unidades Hounsfield para calcular la dosis) con **RM** (mejor delimitación de tejidos blandos y SNC) y **PET-TC** (volumen biológico tumoral activo).
2. **Definición Internacional de Volúmenes de Planificación (Informes ICRU 50, 62 y 83 — ¡Pregunta fija de examen!):**
   - **GTV (*Gross Tumor Volume* — Volumen Tumoral Macroscópico):** El tumor palpable o visible en las imágenes diagnósticas.
   - **CTV (*Clinical Target Volume* — Volumen Blanco Clínico):** $\text{GTV} + \text{enfermedad subclínica microscópica}$ que debe erradicarse.
   - **ITV (*Internal Target Volume* — Volumen Blanco Interno, ICRU 62):** $\text{CTV} + \text{margen interno (IM)}$ por movimientos fisiológicos de los órganos (ej. respiración en pulmón/hígado medido con TC 4D).
   - **PTV (*Planning Target Volume* — Volumen Blanco de Planificación):** Concepto geométrico ($\text{ITV} + \text{margen de configuración o Setup Margin [SM]}$ por incertidumbres diarias de posicionamiento). *(Nota: En **Protonterapia**, como el alcance del Pico de Bragg depende críticamente de las variaciones de densidad en el camino del haz, en lugar de un PTV geométrico isotrópico se emplea **Optimización Robusta** frente a incertidumbres de rango [$\pm 3\text{–}3,5\%$] y posicionamiento).*
   - **OAR (*Organs at Risk* — Órganos de Riesgo) y PRV (*Planning Organ at Risk Volume*):** Tejidos sanos críticos cuya dosis debe mantenerse por debajo de sus límites de tolerancia.
3. **Algoritmos de Cálculo de Dosis y Evaluación del Plan:**
   - **Fotones y Electrones:** Algoritmos tipo **Pencil Beam**, **Convolución/Superposición (*Collapsed Cone*, AAA)**, **Acuros XB** (resuelve determinísticamente la ecuación de transporte lineal de Boltzmann) y **Monte Carlo** (el más exacto en heterogeneidades tejido-aire-hueso).
   - **Planificación Directa (3D-CRT) vs. Planificación Inversa (IMRT / VMAT / IMPT):** En planificación inversa el radiofísico introduce las **restricciones de dosis-volumen** en el optimizador matemático y el TPS calcula la modulación óptima de fluencia de las láminas del MLC o de los puntos del haz de protones.
   - **Herramientas de evaluación:** **Histogramas Dosis-Volumen (HDV / DVH)** acumulados y diferenciales, **Proyección Ojo de Haz (*Beam's Eye View* — BEV)** y **Radiografías Reconstruidas Digitalmente (DRR)**.

---

## 4. Temas 17, 18 y 19: Medicina Nuclear: Ciclotrón, PET-TC, PET-RM y SPECT-TC

> **Principio diferencial de la Medicina Nuclear:** Mientras que en Radiodiagnóstico el equipo **emite** rayos X que atraviesan al paciente (**imagen de transmisión morfológica**), en Medicina Nuclear se administra al paciente un **radiofármaco** (trazador fisiológico marcado con un radionucleido) y el equipo **detecta desde fuera** la radiación gamma o de aniquilación que emite el propio paciente (**imagen de emisión funcional y metabólica**).

### 4.1. Tema 17: Producción de Radiofármacos y el Ciclotrón
1. **Las 2 Vías de Obtención de Radionucleidos para Uso Hospitalario:**
   - **Generador de Radionucleidos ($^{99}\text{Mo}/^{99\text{m}}\text{Tc}$ — Emisores Gamma para SPECT):**
     - Columna cromatográfica de alúmina donde el padre **Molibdeno-99 ($^{99}\text{Mo}$, $T_{1/2} = 66\text{ h}$)** decae a **Tecnecio-99 metaestable ($^{99\text{m}}\text{Tc}$)**, que se eluye diariamente en la **Unidad de Radiofarmacia** con suero fisiológico ($\text{NaCl } 0,9\%$) en forma de pertecnetato sódico ($\text{Na}^{99\text{m}}\text{TcO}_4$).
     - **¿Por qué el $^{99\text{m}}\text{Tc}$ es el radionucleido ideal en Medicina Nuclear convencional (>80% de estudios)?**
       1. Emisor **gamma puro de $140\text{ keV}$** (energía ideal para ser colimada en plomo y absorbida con alta eficiencia en el cristal de $\text{NaI(Tl)}$ sin dar dosis beta inútil al paciente).
       2. **Semivida física corta ($T_{1/2} = \mathbf{6\text{ horas}}$)**, ajustada a la duración del estudio.
   - **Ciclotrón Biomédico (Acelerador cíclico de partículas — Emisores de Positrones $\beta^+$ para PET):**
     - **Principio físico (Lawrence):** Acelera iones negativos de hidrógeno ($\text{H}^-$) o deuterones ($\text{D}^-$) entre dos electrodos huecos semicirculares (**«Dees»**) sometidos a un voltaje alterno de radiofrecuencia (MHz) dentro de un campo magnético perpendicular constante $B$, describiendo una **trayectoria en espiral de radio creciente**. Al alcanzar el borde exterior ($11\text{ a }18\text{ MeV}$), pasan por una **lámina extractora de carbono (*stripper foil*)** que les arranca los 2 electrones convirtiéndolos en **protones ($p^+$)** que salen desviados hacia el **Blanco (*Target*)**.
     - **Reacción nuclear estrella para producir Flúor-18 ($^{18}\text{F}$):** Se bombardea un blanco líquido de **agua enriquecida en Oxígeno-18 ($\text{H}_2^{18}\text{O}$)** con protones mediante la reacción **$^{18}\text{O}(p,n)^{18}\text{F}$**.
     - **Módulos Automáticos de Síntesis Química en Celdas Blindadas (*Hot Cells* de $50\text{–}75\text{ mm Pb}$ en Sala Limpia GMP):** Incorporan el $^{18}\text{F}$ a la molécula de desoxiglucosa para sintetizar **$^{18}\text{F-FDG}$ (Fluorodesoxiglucosa)**, seguido de control de calidad fisicoquímico, radioquímico y microbiológico antes de su dispensación.
2. **Los 4 Radionucleidos Clásicos de Ciclotrón para PET (¡Memorizar semividas para el examen!):**
   - **Flúor-18 ($^{18}\text{F}$):** $T_{1/2} = \mathbf{109,8\text{ min} \approx 110\text{ min}}$ *(permite transporte por carretera a hospitales sin ciclotrón propio)*.
   - **Carbono-11 ($^{11}\text{C}$):** $T_{1/2} = \mathbf{20,4\text{ min}}$ *(requiere ciclotrón in situ)*.
   - **Nitrógeno-13 ($^{13}\text{N}$):** $T_{1/2} = \mathbf{10\text{ min}}$ (perfusión miocárdica con amoníaco $^{13}\text{NH}_3$).
   - **Oxígeno-15 ($^{15}\text{O}$):** $T_{1/2} = \mathbf{2\text{ min}}$.
   - *(Adicionalmente, el **Galio-68 [$^{68}\text{Ga}$, $T_{1/2} = 68\text{ min}$]** para PET de tumores neuroendocrinos y PSMA en próstata se obtiene de un **generador de $^{68}\text{Ge}/^{68}\text{Ga}$**).*

### 4.2. Tema 18: Equipos PET e Imagen Híbrida (PET-TC y PET-RM)
1. **Principio Físico de la Tomografía por Emisión de Positrones (PET):**
   - El radionucleido rico en protones (ej. $^{18}\text{F}$) emite un **positrón ($\beta^+$)**, que recorre $1\text{–}2\text{ mm}$ en el tejido hasta frenarse y **aniquilarse con un electrón ($e^-$)**, emitiendo simultáneamente **2 fotones gamma de exactamente $511\text{ keV}$ en sentidos opuestos ($180^\circ$)**.
   - **Colimación Electrónica por Detección en Coincidencia:** El anillo de detectores que rodea al paciente registra un **suceso verdadero** solo cuando dos detectores opuestos detectan sendos fotones de $511\text{ keV}$ dentro de una **ventana temporal de coincidencia ultracorta ($4\text{ a }12\text{ nanosegundos}$)**, trazando electrónicamente la **Línea de Respuesta (LOR)** **sin necesitar colimadores físicos de plomo** (lo que multiplica por $100$ la sensibilidad frente al SPECT).
   - **PET con Tiempo de Vuelo (*Time-of-Flight* — TOF-PET):** Mide la diferencia de picosegundos ($\Delta t \approx 200\text{–}400\text{ ps}$) entre la llegada de los dos fotones de $511\text{ keV}$ para localizar directamente el segmento exacto de la LOR donde se produjo la aniquilación ($\Delta x = \frac{c \cdot \Delta t}{2}$), mejorando drásticamente la relación señal/ruido.
2. **Cristales Centelleadores de los Equipos PET:**
   - Como los fotones de $511\text{ keV}$ son muy penetrantes y se requiere respuesta en picosegundos para TOF, no sirve el $\text{NaI(Tl)}$; se utilizan cristales de alta densidad ($Z$ alto) y centelleo ultrarrápido (**$\approx 40\text{ ns}$**): **Ortossilicato de Lutecio (LSO) o Lutecio-Itrio (LYSO:Ce)** (y antiguamente BGO), acoplados hoy en día a **Fotomultiplicadores de Silicio de Estado Sólido (SiPM — *PET Digital*)** en lugar de tubos fotomultiplicadores de vacío (PMT).
3. **Imagen Híbrida PET-TC y PET-RM:**
   - **PET-TC:** Combina en un mismo estativo secuencial un anillo **TC multicorte** y un anillo **PET**. El TC cumple una **doble función crítica**: **1) Fusión anatómico-metabólica precisa** y **2) Mapa de Corrección de Atenuación (CTAC)** de los fotones de $511\text{ keV}$ (escalando las UH a coeficientes de atenuación lineal a $511\text{ keV}$), lo que permite cuantificar el metabolismo tumoral mediante el **SUV (*Standardized Uptake Value* — Valor Estándar de Captación)**:
     $$\text{SUV} = \frac{\text{Concentración de actividad en el tejido (kBq/ml)}}{\text{Actividad inyectada (MBq)} / \text{Peso del paciente (kg)}}$$
   - **PET-RM (Adquisición Simultánea):** Fue posible gracias a sustituir los tubos fotomultiplicadores clásicos (que no funcionan dentro del campo magnético de la RM) por **Fotomultiplicadores de Silicio (SiPM) o Fotodiodos de Avalancha (APD) insensibles al campo magnético**, integrando el anillo PET dentro del túnel de un imán de RM de $3\text{ T}$.

### 4.3. Tema 19: Equipos SPECT y SPECT-TC (Gammacámara Tomográfica)
1. **Arquitectura de la Gammacámara (Cámara de Anger) / SPECT:**
   - Equipos de **doble cabezal detector** (configurables a $180^\circ$ opuestos o a $90^\circ$ en «L» para SPECT cardíaco) que giran alrededor del paciente adquiriendo proyecciones planares que se reconstruyen en cortes tomográficos:
     1. **Colimador físico de Plomo (Imprescindible en SPECT):** Placa de plomo perforada por miles de canales que absorbe todos los fotones oblicuos y solo deja pasar los que viajan en la dirección de los agujeros:
        - **LEHR (*Low Energy High Resolution* — Agujeros paralelos de baja energía y alta resolución):** El más usado para $^{99\text{m}}\text{Tc}$ ($140\text{ keV}$).
        - **HEGP (*High Energy* — Alta energía):** Septos de plomo más gruesos para **Yodo-131 ($^{131}\text{I}$, $364\text{ keV}$)**.
        - **Colimador *Pinhole* (Estenopeico):** Un único orificio cónico que magnifica órganos pequeños superficiales (**tiroides**, articulaciones pediátricas).
     2. **Cristal de Centelleo de Yoduro de Sodio activado con Talio ($\text{NaI(Tl)}$)** de $3/8''$ ($9,5\text{ mm}$) de espesor (hidroscópico y frágil frente a cambios bruscos de temperatura $> 5\text{ }^\circ\text{C/h}$), o bien **detectores semiconductores directos de $\text{CZT}$ (Telururo de Cadmio-Zinc)** en los SPECT digitales de última generación.
     3. **Matriz hexagonal de Tubos Fotomultiplicadores (PMT, de $50\text{ a }90\text{ tubos}$)** y **red resistiva de posicionamiento de Anger $(X, Y)$** + **Analizador de Altura de Pulsos (PHA)** con **ventana energética del $\pm 10\%$ centrada en el fotopico ($140\text{ keV}$ para $^{99\text{m}}\text{Tc}$)** para rechazar los fotones dispersados por efecto Compton.
2. **Sistema Híbrido SPECT-TC:**
   - Acopla la gammacámara de doble cabezal con un **TC diagnóstico/localizador**, permitiendo realizar la **corrección de atenuación** de los fotones de $140\text{ keV}$ y localizar anatómicamente con precisión milimétrica focos hipercaptantes (ej. adenomas paratiroideos, ganglio centinela, metástasis óseas o defectos de perfusión miocárdica).
