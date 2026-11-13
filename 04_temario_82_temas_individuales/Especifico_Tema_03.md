# Esp. Tema 3 — Fundamentos del electromagnetismo. Conceptos y aplicaciones en el ámbito médico.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 1: Núcleo Diamante (💎 Núcleo Diamante)  
> **Bloque de Estudio Completo:** [`Bloque_02_Fisica_Radiaciones_y_Radiodiagnostico_RX_TC_Mamo_Arcos.md`](../02_apuntes_nucleo_diamante/Bloque_02_Fisica_Radiaciones_y_Radiodiagnostico_RX_TC_Mamo_Arcos.md)

## 🎯 Cruce con Otras Oposiciones del SERGAS

- **Categorías con solapamiento:** **Radiofísica Hospitalaria**
- **Grado de solapamiento:** **Alto (75%)**: Cubre campos magnéticos, propiedades magnéticas de la materia y radiaciones electromagnéticas no ionizantes (onda corta, microondas, láser) en medicina.
- **Epígrafes equivalentes:**
  • Tema 1. Ampliación de física de radiaciones. Estructura de la materia. Radiaciones ionizantes y no ionizantes. Radiactividad. Interacción de la radiación con la materia (fotones y partículas). Efectos físicos de la radiación.
  • Tema 36. Fundamentos de resonancia magnética. Campo magnético e imanes, propiedades magnéticas de la materia. Conducta de un núcleo atómico bajo un campo magnético, excitación y relajación. Obtención de imágenes, artefactos. Aplicaciones clínicas. Espectroscopia. Efectos biológicos y seguridad. Componentes de un equipo de resonancia magnética. Garantía y control de calidad.
  • Tema 37. Otros usos de las radiaciones en el ámbito hospitalario. Radiaciones ionizantes en los laboratorios y centros de investigación asociados a los hospitales. Radiaciones no ionizantes en fisioterapia y rehabilitación: fundamentos sobre las radiaciones utilizadas (onda corta, microondas...) y fundamentos de los equipos de rayos láser. Tipos de equipos, aplicaciones terapéuticas, riesgos y seguridad y garantía de calidad.

---

## 📖 Desarrollo Técnico y Normativo del Tema

### 1. Tema 2 y Tema 3: Naturaleza Física de la Radiación, Electromagnetismo, Interacción y Magnitudes

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
