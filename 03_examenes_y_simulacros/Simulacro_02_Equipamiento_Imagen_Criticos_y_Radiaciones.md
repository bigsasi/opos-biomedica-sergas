# 🔬 Simulacro Oficial #2 — Equipamiento Electromédico, Diagnóstico por Imagen, Radioterapia, Críticos y Protección Radiológica

> **29 Preguntas Tipo Test + 2 Supuestos Prácticos Desglosados** con respuestas desplegables comentadas (Bloques 02, 03, 04, 05 y 06).

---

### Pregunta 46 — `Tema 2 y Tema 3 (Física Radiaciones)`

**¿Cuál es el efecto físico predominante en la interacción de los fotones de rayos X con los tejidos blandos humanos para energías propias del radiodiagnóstico convencional alto (70–120 kVp) y responsable principal de la radiación dispersa que recibe el personal sanitario?**

- **A)** Efecto fotoeléctrico, cuya probabilidad es inversamente proporcional a Z³.
- **B)** Dispersión incoherente o efecto Compton, donde el fotón incidente colisiona con un electrón cortical libre o débilmente ligado cediendo parte de su energía y desviándose.
- **C)** Producción de pares electrón-positrón, que ocurre a partir de un umbral de 1,022 keV.
- **D)** Dispersión coherente o de Rayleigh, que produce ionización masiva sin cambio de dirección.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Efecto Compton (dispersión incoherente):** Predomina en tejidos blandos ($Z$ bajo) entre $30\text{ keV}$ y $20\text{ MeV}$ y es la fuente principal de **radiación dispersa**. El efecto fotoeléctrico ($\propto Z^3/E^3$) da el contraste óseo a bajas energías y la creación de pares exige un umbral de **$1,022\text{ MeV}$**.

</details>

---

### Pregunta 47 — `Tema 4 y Tema 5 (Radiología Digital)`

**En los detectores planos (Flat Panel) de radiología digital directa (DR directo) frente a los de conversión indirecta (DR indirecto), ¿qué materiales y principio físico se emplean?**

- **A)** DR directo emplea un centelleador de Yoduro de Cesio (CsI:Tl) acoplado a fotodiodos de silicio amorfo (a-Si).
- **B)** DR directo emplea un fotoconductor de Selenio amorfo (a-Se) que convierte directamente los fotones de rayos X en pares electrón-hueco sin pasar por luz visible, logrando mayor MTF (resolución espacial).
- **C)** DR directo emplea láminas fotoestimulables de fluorohaluro de bario (PSP) leídas por un láser helio-neón.
- **D)** DR directo emplea pantallas intensificadoras de tierras raras (Gadolinio).

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **DR Directo = Selenio amorfo (`a-Se`):** Convierte directamente fotones RX en carga eléctrica (pares electrón-hueco) leída por la matriz TFT, evitando la dispersión lateral de luz visible y ofreciendo **mayor resolución espacial (`MTF`)** (ideal en mamografía). El `CsI:Tl + a-Si` es **DR Indirecto**, y las placas PSP son **CR (Radiología Computarizada)**.

</details>

---

### Pregunta 48 — `Tema 6 (Tomografía Computarizada)`

**En un equipo de Tomografía Computarizada (TC) multicorte en adquisición helicoidal, si el operador selecciona un colimador total de haz de 40 mm, un avance de mesa por rotación de 60 mm y un tiempo de rotación de 0,5 s, ¿cuál es el factor de paso (Pitch) y qué efecto tiene sobre la dosis y la resolución longitudinal?**

- **A)** Pitch = 0,67; existe solapamiento de cortes y mayor dosis al paciente.
- **B)** Pitch = 1,5; las hélices están separadas (sin solapamiento), disminuyendo la dosis al paciente a costa de ensanchar el perfil de sensibilidad de corte (menor resolución en eje Z).
- **C)** Pitch = 3,0; se duplica la dosis respecto a Pitch = 1.
- **D)** Pitch = 1,0; los cortes son contiguos.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Cálculo de Pitch:** $\text{Pitch} = \frac{\text{Avance de mesa por rotación}}{\text{Colimación total del haz}} = \frac{60\text{ mm}}{40\text{ mm}} = \mathbf{1,5}$ (no depende del tiempo de rotación). Al ser $\text{Pitch} > 1$, se estira la hélice reduciendo la dosis ($\text{CTDI}_{\text{vol}} = \text{CTDI}_w / \text{Pitch}$), pero requiere interpolación con ensanchamiento del espesor efectivo de corte.

</details>

---

### Pregunta 49 — `Tema 7 (Mamografía Digital)`

**¿Por qué los equipos de mamografía digital utilizan bajas tensiones de pico (24–32 kVp), combinaciones ánodo/filtro específicas (Mo/Mo, Mo/Rh, W/Rh) y el «efecto talón» orientado con el cátodo hacia la pared torácica de la paciente?**

- **A)** Porque a bajas energías predomina el efecto Compton y el lado del ánodo tiene mayor intensidad de radiación.
- **B)** Porque a bajas energías (17–23 keV) se maximiza el contraste por efecto fotoeléctrico entre tejido glandular y microcalcificaciones, y el lado del cátodo presenta mayor intensidad de haz para atravesar la zona más gruesa (pared costal).
- **C)** Para producir radiación de frenado de alta energía (> 100 keV) y evitar la compresión mamaria.
- **D)** Porque el berilio de la ventana de salida actúa como filtro de aluminio de 2,5 mm equivalentes.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** En **Mamografía (`Tema 7`)**: se usan $24\text{–}32\text{ kVp}$ y radiación característica $K$ del Molibdeno ($17,5\text{ y }19,6\text{ keV}$) o Rodio ($20,2\text{ keV}$) para maximizar el **efecto fotoeléctrico** ($\propto Z^3/E^3$). Por el **efecto talón (Heel effect)**, la intensidad del haz es mayor en el lado del **cátodo**, que se coloca hacia la **pared torácica** (parte más espesa de la mama).

</details>

---

### Pregunta 50 — `Tema 8 y Tema 9 (Arcos en C e Intervencionismo)`

**En una sala de angiografía intervencionista o hemodinámica, ¿qué regla de oro de protección radiológica operacional debe cumplirse respecto a la posición del tubo de rayos X y del detector plano?**

- **A)** El tubo de rayos X debe situarse encima del paciente y el detector debajo de la mesa para mejorar la ergonomía.
- **B)** El tubo de rayos X debe situarse debajo de la mesa y el detector plano encima del paciente lo más próximo posible a su piel, minimizando la magnificación geométrica, la dosis al paciente y la radiación retrodispersada hacia el cristalino del operador.
- **C)** El detector debe alejarse al máximo del paciente (técnica de entrehierro) en todos los estudios.
- **D)** La rejilla antidifusora debe retirarse siempre en pacientes adultos obesos.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Geometría en Intervencionismo (`Tema 8 y 9`):** Tubo **debajo de la mesa** y detector **encima y pegado al paciente**. La mayor tasa de radiación dispersa se produce por retrodispersión en la superficie de entrada del haz en el paciente; con el tubo abajo, esa dispersión se dirige hacia el suelo y es frenada por las faldillas plomadas inferiores de la mesa.

</details>

---

### Pregunta 51 — `Tema 10 y Tema 11 (Resonancia Magnética)`

**Sabiendo que la constante giromagnética del protón de hidrógeno (¹H) es γ/2π = 42,58 MHz/Tesla, ¿a qué frecuencia de Larmor deben emitir los pulsos de radiofrecuencia (RF) en un equipo de Resonancia Magnética de 1,5 Teslas y de 3,0 Teslas, respectivamente?**

- **A)** A 21,29 MHz en 1,5 T y a 42,58 MHz en 3,0 T.
- **B)** A 63,87 MHz en 1,5 T y a 127,74 MHz en 3,0 T.
- **C)** A 100 MHz en 1,5 T y a 200 MHz en 3,0 T.
- **D)** A 42,58 kHz en ambos casos porque la frecuencia no depende del campo magnético B₀.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Ecuación de Larmor (`Tema 10`):** $f_0 = (\gamma / 2\pi) \cdot B_0$. Para $1,5\text{ T}$: $42,58 \times 1,5 = \mathbf{63,87\text{ MHz}}$. Para $3,0\text{ T}$: $42,58 \times 3,0 = \mathbf{127,74\text{ MHz}}$.

</details>

---

### Pregunta 52 — `Tema 11 (Espacio K y Artefactos RM)`

**En la matriz de datos brutos (Espacio K) de un equipo de Resonancia Magnética, ¿qué información contienen las líneas centrales frente a las líneas periféricas, y cómo se transforma el Espacio K en la imagen anatómica final?**

- **A)** El centro del Espacio K contiene los bordes finos y la periferia el contraste; se transforma mediante retroproyección filtrada.
- **B)** El centro del Espacio K (bajas frecuencias espaciales) determina el contraste y la relación señal-ruido (SNR) de la imagen, mientras que la periferia (altas frecuencias espaciales) define la resolución espacial (bordes y detalles finos); se transforma mediante la Transformada Rápida de Fourier bidimensional inversa (2D-FFT).
- **C)** Cada punto del Espacio K corresponde píxel a píxel a la misma coordenada anatómica sin transformación matemática.
- **D)** El Espacio K solo se utiliza en ecografía Doppler color.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Propiedad fundamental del Espacio K (`Tema 11`):** **Centro = Contraste y SNR** (bajas frecuencias espaciales); **Periferia = Resolución espacial y bordes** (altas frecuencias espaciales). El paso del Espacio K al dominio de la imagen se realiza mediante la **Transformada de Fourier 2D/3D (`FFT`)**.

</details>

---

### Pregunta 53 — `Tema 12 (Ecografía y Ultrasonidos)`

**En ecografía clínica, ¿cómo influye la frecuencia de emisión del transductor piezoeléctrico (p. ej., sonda lineal de 12 MHz frente a sonda convex de 3,5 MHz) en la resolución axial y en la profundidad de penetración?**

- **A)** A mayor frecuencia (12 MHz), mayor penetración en tejidos profundos y menor resolución axial.
- **B)** A mayor frecuencia (12 MHz), menor longitud de onda y mejor resolución axial y lateral, pero mayor coeficiente de atenuación (en dB/cm·MHz) y por tanto menor profundidad de penetración (ideal para estructuras superficiales).
- **C)** La frecuencia no afecta a la atenuación ultrasónica, que es constante e igual a 1.540 m/s.
- **D)** En Doppler pulsado (PW), el límite de Nyquist permite medir velocidades infinitas sin aliasing.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Compromiso Frecuencia vs. Penetración en Ecografía (`Tema 12`):** La atenuación en tejidos blandos es $\approx 0,5\text{–}1\text{ dB/(cm}\cdot\text{MHz)}$. Por tanto, **mayor frecuencia ($10\text{–}15\text{ MHz}$) = mejor resolución axial** (pulsos más cortos, menor $\lambda$) pero **menor penetración** (estructuras superficiales/vasculares); **menor frecuencia ($2\text{–}5\text{ MHz}$) = mayor penetración** (abdomen/obstetricia).

</details>

---

### Pregunta 54 — `Temas 13, 14, 15 y 16 (Radioterapia y Protonterapia)`

**¿Cuál es la ventaja física diferencial de un haz de protones (Protonterapia) frente a un haz de fotones megavoltaje de un LINAC convencional, y qué significan las siglas GTV, CTV y PTV de los informes ICRU en los sistemas de planificación (TPS)?**

- **A)** Los protones depositan su dosis máxima en la piel y decaen exponencialmente; GTV es el margen geométrico de incertidumbre.
- **B)** Los protones depositan una dosis baja a la entrada y liberan casi toda su energía a una profundidad precisa final denominada «Pico de Bragg» con caída brusca a cero detrás del tumor; GTV es el volumen tumoral macroscópico, CTV añade la enfermedad subclínica microscópica y PTV añade el margen de incertidumbre geométrica y de movimiento.
- **C)** Los protones se generan en tubos de rayos X de 150 kVp; PTV es menor que GTV.
- **D)** La braquiterapia HDR utiliza actividades inferiores a 0,4 Gy/h con semillas permanentes.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Protonterapia (`Tema 15`) e ICRU (`Tema 16`):** Las partículas pesadas cargadas (protones) presentan el **Pico de Bragg** (máxima cesión de energía al frenarse al final de su alcance, sin dosis de salida distal). En planificación TPS (`ICRU 50/62/83`): **$GTV \subset CTV \subset PTV$** (Gross $\rightarrow$ Clinical $\rightarrow$ Planning Target Volume).

</details>

---

### Pregunta 55 — `Temas 17, 18 y 19 (Medicina Nuclear: PET y SPECT)`

**Compare un equipo PET-TC frente a una gammacámara SPECT-TC en cuanto al radionúclido más utilizado, la energía de los fotones detectados y el mecanismo de colimación:**

- **A)** PET-TC utiliza ⁹⁹ᵐTc (140 keV) con colimador mecánico de plomo; SPECT-TC utiliza ¹⁸F (511 keV) sin colimador.
- **B)** PET-TC utiliza emisores de positrones como ¹⁸F-FDG (T₁/₂ = 110 min) detectando en coincidencia electrónica dos fotones de aniquilación antiparalelos de 511 keV (colimación electrónica sin colimador de plomo); SPECT-TC utiliza emisores gamma simples como ⁹⁹ᵐTc (140 keV, T₁/₂ = 6 h) con colimadores físicos de plomo.
- **C)** Ambos detectan fotones de 511 keV producidos en un generador de Molibdeno-99.
- **D)** En PET-RM se utiliza un tubo de rayos X rotatorio dentro del imán para corregir la atenuación.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Diferencia clave PET vs. SPECT (`Temas 17–19`):** **PET** = emisores $\beta^+$ ($^{18}\text{F}$, $T_{1/2}=110\text{ min}$, producido en **ciclotrón**) $\rightarrow$ aniquilación positrón-electrón $\rightarrow$ **2 fotones de $511\text{ keV}$ a $180^\circ$** detectados en ventana temporal de **coincidencia electrónica** (sin colimador físico). **SPECT** = emisores $\gamma$ ($^{99\text{m}}\text{Tc}$, $140\text{ keV}$, $T_{1/2}=6\text{ h}$, de generador $^{99}\text{Mo}/^{99\text{m}}\text{Tc}$) con **colimador mecánico de plomo**.

</details>

---

### Pregunta 56 — `Temas 51, 52, 53 y 54 (Protección Radiológica)`

**Conforme al Real Decreto 1029/2022 (Reglamento sobre protección de la salud contra los riesgos derivados de las radiaciones ionizantes), ¿cuál es el límite de dosis efectiva y el límite de dosis equivalente en el cristalino para un trabajador expuesto, y a partir de qué valores se clasifica en Categoría A?**

- **A)** Límite de dosis efectiva: 50 mSv/año y cristalino 150 mSv/año; Categoría A si supera 1 mSv/año.
- **B)** Límite de dosis efectiva: 20 mSv por año oficial y límite en cristalino: 20 mSv por año oficial (piel y extremidades: 500 mSv/año); es Categoría A quien pueda recibir una dosis efectiva > 6 mSv/año o una dosis equivalente > 15 mSv/año en cristalino o > 150 mSv/año en piel/extremidades.
- **C)** Límite de dosis efectiva: 100 mSv/año; Categoría A usa solo dosimetría de área.
- **D)** En trabajadoras embarazadas el límite al feto es de 6 mSv desde la declaración del embarazo.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **RD 1029/2022 (`Arts. 9, 10 y 21`):** Rebajó el límite anual en **cristalino de $150\text{ mSv}$ a $20\text{ mSv/año}$** (igualando el límite de dosis efectiva de **$20\text{ mSv/año}$**). **Categoría A** (dosímetro individual mensual obligatorio y examen médico anual): susceptible de recibir **$> 6\text{ mSv/año}$** efectivos o **$> 15\text{ mSv/año}$ en cristalino** ($3/10$ de los límites de piel/extremidades = $150\text{ mSv/año}$). Feto = **$\le 1\text{ mSv}$**.

</details>

---

### Pregunta 57 — `Tema 52 (RD 1085/2009 Rayos X Diagnóstico)`

**Según el artículo 16 y Anexo III del Real Decreto 1085/2009 sobre instalaciones de rayos X de diagnóstico médico, ¿cómo se clasifican las instalaciones y con qué periodicidad deben ser vigiladas y certificadas por una UTPR o SPR?**

- **A)** Clase 1 (Dental intraoral), Clase 2 (TC y Mamografía) y Clase 3 (Medicina Nuclear); vigilancia cada 5 años.
- **B)** Clase 1 (TC, Mamografía, Quirófanos, Intervencionismo y Portátiles: vigilancia ANUAL), Clase 2 (Radiodiagnóstico general, panorámica dental y densitometría: vigilancia ANUAL) y Clase 3 (Dental intraoral y podología: vigilancia BIENAL cada 2 años).
- **C)** Todas las instalaciones de rayos X requieren autorización previa del Consejo de Ministros.
- **D)** Las instalaciones de Clase 1 solo se revisan cada 3 años.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Clasificación RD 1085/2009 (`Tema 52`):** **Clase 1** (TC, Mamografía, Intervencionismo/Hemodinámica, Arcos quirúrgicos y Portátiles) y **Clase 2** (RX convencional general, ortopantomografía, densitometría ósea) tienen revisión y certificado de conformidad **ANUAL**. **Clase 3** (RX dental intraoral y podológico) tiene periodicidad **BIENAL (cada 2 años)**.

</details>

---

### Pregunta 58 — `Tema 21 (Ventilación Mecánica)`

**En un paciente intubado en ventilación mecánica invasiva controlada por volumen (VCV) con flujo inspiratorio constante, se realiza una pausa inspiratoria (flujo cero) de 2 segundos. Si la presión pico (Ppico) es de 35 cmH₂O, la presión meseta (Pplat) es de 20 cmH₂O, la PEEP es de 5 cmH₂O y el volumen corriente (Vt) es de 450 mL, ¿cuánto vale la compliancia estática (Cst) del sistema respiratorio y qué indica una subida aislada de Ppico sin cambio en Pplat?**

- **A)** Cst = 15 mL/cmH₂O; indica un edema agudo de pulmón o síndrome de distrés respiratorio (SDRA).
- **B)** Cst = 30 mL/cmH₂O (450 / [20 − 5]); un aumento de Ppico manteniendo Pplat constante indica un aumento de la resistencia de la vía aérea (broncoespasmo, secreciones o acodamiento del tubo endotraqueal).
- **C)** Cst = 22,5 mL/cmH₂O; indica neumotórax a tensión.
- **D)** Cst = 90 mL/cmH₂O; la presión de conducción (Driving Pressure) es de 30 cmH₂O.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Mecánica Ventilatoria (`Tema 21`):** $\text{Driving Pressure (}\Delta P\text{)} = P_{\text{plat}} - \text{PEEP} = 20 - 5 = 15\text{ cmH}_2\text{O}$. Compliancia estática: $C_{st} = \frac{V_t}{P_{\text{plat}} - \text{PEEP}} = \frac{450\text{ mL}}{15\text{ cmH}_2\text{O}} = \mathbf{30\text{ mL/cmH}_2\text{O}}$. Si sube $P_{\text{pico}}$ pero $P_{\text{plat}}$ no cambia, el problema es **puramente resistivo** ($R_{aw} = (P_{\text{pico}} - P_{\text{plat}}) / \dot{V}$): secreciones, tapón mucoso o broncoespasmo.

</details>

---

### Pregunta 59 — `Tema 22 (Estación de Anestesia)`

**En una estación de trabajo de anestesia (`UNE-EN ISO 80601-2-13`), ¿por qué el vaporizador de Desflurano requiere calefacción eléctrica a 39 °C y presurización electrónica a 2 atmósferas, a diferencia de los vaporizadores de Sevoflurano o Isoflurano?**

- **A)** Porque el Desflurano es sólido a temperatura ambiente (punto de fusión 50 °C).
- **B)** Porque el Desflurano tiene una presión de vapor extremadamente alta (669 mmHg a 20 °C) y un punto de ebullición de 22,8 °C (cercano a la temperatura ambiente del quirófano), por lo que herviría de forma incontrolada en un vaporizador de cortocircuito variable convencional.
- **C)** Porque el Desflurano reacciona con el óxido nitroso produciendo gas mostaza.
- **D)** Para regenerar la cal sodada del absorbedor de CO₂.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Vaporizador de Desflurano (`Tema 22`):** El **Desflurano** hierve a **$22,8\text{ }^\circ\text{C}$** ($P_v = 669\text{ mmHg}$ a $20\text{ }^\circ\text{C}$). En un quirófano a $23\text{ }^\circ\text{C}$ entraría en ebullición. Por ello emplea un vaporizador electrónico especial calentado a **$39\text{ }^\circ\text{C}$ y presurizado a $\approx 2\text{ bar}$** que inyecta vapor puro dosificado electrónicamente.

</details>

---

### Pregunta 60 — `Tema 23 (Monitorización de Pacientes)`

**¿Qué principio físico e instrumental utilizan, respectivamente, un pulsioxímetro (SpO₂), un capnógrafo (EtCO₂) y el método oscilométrico de presión arterial no invasiva (PANI)?**

- **A)** SpO₂: absorción infrarroja a 4,26 μm; EtCO₂: fotopletismografía a 660 y 940 nm; PANI: ruidos de Korotkoff por micrófono.
- **B)** SpO₂: ley de Beer-Lambert con dos longitudes de onda (rojo 660 nm e infrarrojo 940 nm) y fotopletismografía pulsátil; EtCO₂: absorción de radiación infrarroja no dispersiva (NDIR) a λ = 4,26 μm por las moléculas de CO₂; PANI oscilométrica: medición directa de la Presión Arterial Media (PAM) en el punto de máxima amplitud de oscilación del manguito y cálculo algorítmico de PAS y PAD.
- **C)** SpO₂: puente de Wheatstone; EtCO₂: ultrasonidos Doppler; PANI: catéter arterial radial.
- **D)** En PANI oscilométrica se mide directamente la presión sistólica y diastólica y se calcula la media como (PAS+PAD)/2.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Tres preguntas clásicas de examen en una (`Tema 23`):** 1) **Pulsioximetría (`SpO2`):** Rojo **$660\text{ nm}$** (absorbido por Hb reducida) e Infrarrojo **$940\text{ nm}$** (absorbido por $\text{HbO}_2$). 2) **Capnografía (`EtCO2`):** Absorción IR específica del $\text{CO}_2$ a **$4,26\text{ }\mu\text{m}$**. 3) **PANI oscilométrica:** Lo único que mide físicamente con exactitud el transductor del manguito es la **PAM (máxima oscilación)**; PAS y PAD se estiman por algoritmo.

</details>

---

### Pregunta 61 — `Temas 20, 25 y 26 (Endoscopia y Robótica Quirúrgica)`

**En una torre de cirugía laparoscópica (`Tema 25`), ¿qué gas se emplea en el insuflador automático para crear el neumoperitoneo, a qué presión intraabdominal estándar trabaja en adultos y por qué se elige ese gas?**

- **A)** Oxígeno puro a 50 mmHg, para oxigenar el peritoneo.
- **B)** Dióxido de carbono (CO₂) de grado médico a una presión intraabdominal regulada de 12–15 mmHg, porque es incombustible (no explota al usar el electrobisturí) y altamente soluble en sangre (se elimina rápidamente por vía pulmonar reduciendo el riesgo de embolia gaseosa).
- **C)** Aire comprimido medicinal a 2 bar de presión.
- **D)** Gas Argón a 30 mmHg, porque coagula los tejidos simultáneamente.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Insuflador de Laparoscopia (`Tema 25`):** Utiliza **$\text{CO}_2$ medicinal** a **$12\text{–}15\text{ mmHg}$** en adultos (caudal hasta $40\text{–}50\text{ L/min}$) por dos razones de seguridad vital: **1) No es comburente ni inflamable** (compatible con electrocirugía intracavitaria) y **2) Es $20$ veces más soluble en sangre que el $\text{O}_2$ o el $\text{N}_2$**, difundiéndose y eliminándose por los pulmones si pasa al torrente venoso.

</details>

---

### Pregunta 62 — `Tema 28 (Neonatología)`

**En el equipamiento de neonatología (`Tema 28`), ¿en qué espectro de longitud de onda emiten las lámparas LED de fototerapia para el tratamiento de la hiperbilirrubinemia neonatal (ictericia) y cuál es el límite máximo de nivel sonoro permitido dentro del habitáculo de una incubadora neonatal según `UNE-EN 60601-2-19`?**

- **A)** Luz ultravioleta UV-C (254 nm) y ruido máximo de 80 dBA.
- **B)** Luz azul-verde de espectro estrecho entre 450 y 470 nm (pico óptimo ~460 nm, que fotoisomeriza la bilirrubina no conjugada en lumirrubina hidrosoluble sin radiación UV ni IR) y nivel de ruido interior ≤ 45 dBA (≤ 60 dBA durante el funcionamiento de alarmas).
- **C)** Luz infrarroja cercana (940 nm) para calentar e isomerizar la bilirrubina.
- **D)** Luz blanca fría de 100.000 lux idéntica a la lámpara scialítica de quirófano.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Fototerapia e Incubadoras (`Tema 28`):** La bilirrubina presenta su pico de absorción en la **luz azul ($450\text{–}470\text{ nm}$, óptimo $\approx 460\text{ nm}$)** con irradiancia intensiva $\ge 30\text{ }\mu\text{W/(cm}^2\cdot\text{nm)}$. En incubadoras (`IEC 60601-2-19`), el ruido de fondo en el colchón neonatal debe ser **$\le 45\text{ dBA}$** para evitar daño coclear en prematuros.

</details>

---

### Pregunta 63 — `Tema 31 (Desfibriladores)`

**Al utilizar un desfibrilador bifásico manual en un paciente con taquicardia supraventricular o fibrilación auricular inestable (con pulso), el médico activa el modo «Cardioversión Sincronizada» (SYNC). ¿En qué instante exacto del electrocardiograma (ECG) dispara el equipo la descarga y por qué?**

- **A)** Sobre la cúspide de la onda T, para aprovechar el período refractario relativo.
- **B)** Sincronizado con la onda R del complejo QRS (despolarización ventricular), evitando estrictamente descargar sobre el período vulnerable de repolarización ventricular (onda T), lo que induciría una fibrilación ventricular (fenómeno R sobre T).
- **C)** Sobre la onda P auricular.
- **D)** De forma asíncrona inmediata en el instante de pulsar los botones de las palas.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Cardioversión Sincronizada (`Tema 31`):** El circuito detector sincroniza la descarga con el **pico de la onda R (complejo QRS)** con un retardo $< 60\text{ ms}$, evitando caer sobre la **onda T** (repolarización ventricular), donde un choque eléctrico desencadenaría una **Fibrilación Ventricular (FV)**.

</details>

---

### Pregunta 64 — `Tema 35 y Tema 37 (Electrocirugía y Quirófano)`

**En una unidad electroquirúrgica de alta frecuencia (bisturí eléctrico — `UNE-EN 60601-2-2`), ¿por qué se utilizan corrientes alternas de radiofrecuencia entre 300 kHz y 3 MHz (típicamente ~500 kHz) y cómo funciona el sistema de seguridad REM/CQM de la placa neutra de retorno?**

- **A)** Porque a 500 kHz se produce máxima estimulación neuromuscular; la placa neutra es de plomo rígido monopolo.
- **B)** Porque por encima de 100 kHz la corriente alterna deja de despolarizar las membranas excitables nerviosas y miocárdicas (evitando el efecto farádico y la fibrilación ventricular a 50 Hz) produciendo únicamente efecto térmico Joule; el sistema REM utiliza una placa partida dual y mide continuamente la impedancia de contacto piel-placa (rango seguro ~5–135 Ω), bloqueando el disparo si detecta despegamiento parcial.
- **C)** Porque utiliza corriente continua galvánica de 4.000 V.
- **D)** En modo coagulación fulguración el ciclo de trabajo es del 100 % con onda senoidal pura de bajo voltaje.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Electrobisturí (`Tema 35` — `UNE-EN 60601-2-2`):** Opera a **$300\text{ kHz – }3\text{ MHz}$** para superar el umbral de excitación neuromuscular (evitando el **efecto farádico** de $50\text{ Hz}$). El sistema **REM (*Return Electrode Monitoring*)** emplea un electrodo neutro partido (*split-plate*) que vigila la impedancia de contacto con la piel del paciente para evitar quemaduras en la placa.

</details>

---

### Pregunta 65 — `Tema 30 (Hemodiálisis y Planta de Agua)`

**Según la norma `UNE-EN ISO 23500` y las guías de la SEN para el tratamiento de agua en hemodiálisis, ¿cuál es el orden correcto del pretratamiento antes de las membranas de Ósmosis Inversa y cuáles son los límites microbiológicos máximos para el «Agua Ultrapura» utilizada en hemodiafiltración en línea (HDF on-line)?**

- **A)** Carbón activo → Descalcificador → Cloración; Agua ultrapura: < 100 UFC/mL y < 0,25 UE/mL.
- **B)** Filtros de sedimentos → Descalcificador (resinas de intercambio catiónico que retienen Ca²⁺ y Mg²⁺ para proteger la membrana de ósmosis) → Filtro de Carbón Activo Granular (con EBCT ≥ 10 min para eliminar cloro libre y cloraminas que destruirían la membrana de poliamida y causarían anemia hemolítica) → Microfiltración → Doble etapa de Ósmosis Inversa; Agua ultrapura: < 0,1 UFC/mL y endotoxinas < 0,03 UE/mL.
- **C)** Destilación simple sin filtros de carbón; Agua ultrapura: conductividad > 14 mS/cm.
- **D)** El carbón activo se coloca después de la ósmosis inversa para añadir cloro al anillo de distribución.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Planta de Agua de Hemodiálisis (`Tema 30`):** 1) **Descalcificador** (elimina dureza $\text{Ca}^{2+}/\text{Mg}^{2+}$). 2) **Carbón Activo** (elimina **cloro total y cloraminas** $< 0,1\text{ mg/L}$; crucial tanto para el paciente como para no oxidar las membranas TFC de ósmosis). 3) **Doble Ósmosis Inversa** en anillo de acero INOX 316L / PVDF sin fondos de saco. **Agua Ultrapura (`ISO 23500`):** Bacterias **$< 0,1\text{ UFC/mL}$** y Endotoxinas **$< 0,03\text{ UE/mL}$**.

</details>

---

### Pregunta 66 — `Tema 58 (Esterilización y RUMED)`

**En una Central de Esterilización hospitalaria (RUMED), ¿qué indica un Nivel de Aseguramiento de Esterilidad (SAL) de 10⁻⁶, qué evalúa el test diario de Bowie-Dick en un autoclave de vapor con prevacío y qué esporas biológicas se utilizan para validar el vapor frente al peróxido de hidrógeno (gas plasma)?**

- **A)** SAL 10⁻⁶ significa 6 bacterias por instrumento; Bowie-Dick mide la temperatura; ambos usan Escherichia coli.
- **B)** SAL 10⁻⁶ significa que la probabilidad teórica de encontrar un único microorganismo viable en un producto esterilizado es ≤ 1 entre 1.000.000; el test de Bowie-Dick (134 °C durante 3,5 min, Indicador Clase 2 ISO 11140) verifica la correcta extracción del aire residual y la penetración uniforme del vapor (ausencia de bolsas de aire o gases no condensables); las esporas biológicas son Geobacillus stearothermophilus (para Vapor y también Peróxido de Hidrógeno) y Bacillus atrophaeus (para Óxido de Etileno y Calor Seco).
- **C)** El ciclo de priones en autoclave de vapor se realiza a 121 °C durante 5 minutos.
- **D)** Las ópticas termosensibles de laparoscopia flexible se esterilizan siempre en autoclave de vapor a 134 °C.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Esterilización (`Tema 58`):** **SAL $10^{-6}$** = probabilidad $\le 10^{-6}$ de supervivencia microbiana. **Bowie-Dick (`ISO 11140 Clase 2`)** = prueba diaria en vacío ($134\text{ }^\circ\text{C}$, $3,5\text{ min}$) de **penetración de vapor y ausencia de aire/fugas**. **Ciclo de Priones (ECJ):** **$134\text{ }^\circ\text{C}$ durante $18\text{ minutos}$** (previa inmersión en NaOH 1N). **Indicadores biológicos (`ISO 11138`):** *Geobacillus stearothermophilus* (Vapor y $\text{H}_2\text{O}_2$) y *Bacillus atrophaeus* (Óxido de Etileno).

</details>

---

### Pregunta 67 — `Tema 24 (Laboratorio Clínico)`

**En el equipamiento de Laboratorio Clínico (`Tema 24`), ¿qué diferencia de protección existe entre una Cabina de Seguridad Biológica (CSB) de Clase I, Clase II (tipo A2/B2) y Clase III según la norma `UNE-EN 12469`?**

- **A)** La Clase I protege la muestra mediante flujo laminar pero escupe el aire hacia el operador.
- **B)** La Clase I protege al operador y al ambiente pero NO protege al producto/muestra de la contaminación ambiental; la Clase II (la más usada en microbiología/cultivos celulares) protege simultáneamente al operador (cortina frontal de entrada), al producto (flujo laminar vertical descendente filtrado por HEPA) y al ambiente (extracción por HEPA); la Clase III es una cámara hermética aislada con guantes en presión negativa para patógenos de nivel de bioseguridad P4 (BSL-4).
- **C)** Una campana extractora de gases químicos con filtro de carbón es equivalente a una Cabina de Seguridad Biológica Clase II.
- **D)** En citometría de flujo hematológica solo se utiliza impedancia eléctrica sin láser óptico.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Cabinas de Seguridad Biológica (`UNE-EN 12469` — `Tema 24`):** **Clase I** = protege operador y ambiente, **NO protege el producto**. **Clase II** ($70\%$ recirculado en **Tipo A2** / $100\%$ extraído al exterior en **Tipo B2**) = **triple protección: operador + producto + medio ambiente** mediante flujo laminar vertical HEPA y cortina de aire frontal. **Clase III** = cabina hermética con guantes (BSL-4).

</details>

---

### Pregunta 68 — `Tema 27, 29, 36 y 57 (Rehabilitación, Consultas y Farmacia)`

**Respecto al equipamiento de Rehabilitación (`Tema 27`) y Consultas Externas (`Tema 36`), señale la asociación correcta entre equipo y principio físico/frecuencia de operación:**

- **A)** Diatermia por Onda Corta: 27,12 MHz; Microondas de rehabilitación: 2.450 MHz; Ultrasonidos de fisioterapia: 1 MHz (profundo) y 3 MHz (superficial); Cardiotocógrafo fetal (RCTG): Doppler ultrasónico (FCF) + Tocodinamómetro de presión (dinámica uterina).
- **B)** Onda corta: 50 Hz; Ultrasonidos de fisioterapia: 100 MHz; OCT oftalmológica: rayos X de baja energía.
- **C)** Magnetoterapia: corrientes de alta frecuencia a 500 kHz.
- **D)** El espirómetro mide directamente el Volumen Residual (VR) pulmonar en una maniobra forzada simple.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **A**
- **Justificación:** **Cifras clásicas de examen (`Tema 27 y 36`):** En electroterapia de alta frecuencia: **Onda Corta = $27,12\text{ MHz}$**, **Microondas = $2.450\text{ MHz}$**, **Ultrasonidos terapéuticos = $1\text{ MHz}$ (profundo, $4\text{–}5\text{ cm}$) y $3\text{ MHz}$ (superficial, $1\text{–}2\text{ cm}$)**. Nota: un espirómetro simple **nunca puede medir el Volumen Residual (VR)** ni la Capacidad Pulmonar Total (CPT) (requieren pletismografía corporal o dilución de helio).

</details>

---

### Pregunta 69 — `Tema 32, 33 y 50 (Implantables y Diseño Biomédico)`

**En el código internacional de 5 letras NBG para marcapasos cardíacos implantables (`Tema 32`), ¿qué significan las tres primeras letras (por ejemplo, en un marcapasos programado en modo DDD o VVI-R)?**

- **A)** 1.ª letra: Fabricante; 2.ª letra: Tipo de batería (Litio-Yodo); 3.ª letra: Material del electrodo.
- **B)** 1.ª letra: Cámara estimulada (A = Aurícula, V = Ventrículo, D = Dual A+V); 2.ª letra: Cámara sensada/detectada (A, V, D, O); 3.ª letra: Respuesta al sensado (I = Inhibido, T = Disparo/Triggered, D = Dual I+T, O = Ninguna); y la 4.ª letra 'R' indica modulación de frecuencia adaptativa (Rate Modulation).
- **C)** 1.ª letra: Cámara sensada; 2.ª letra: Cámara estimulada; 3.ª letra: Choque de desfibrilación.
- **D)** Todos los marcapasos son Clase IIa según el Reglamento MDR.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Código NBG de Marcapasos (`Tema 32`):** **1.ª = Cámara Estimulada (*Paced*)**, **2.ª = Cámara Sensada (*Sensed*)**, **3.ª = Respuesta al sensado (*Response*: Inhibición `I` / Disparo `T` / Dual `D`)**, **4.ª = `R` (*Rate modulation*, sensor acelerométrico/ventilatorio)**, **5.ª = Estimulación multisitio**. Batería estándar: **Litio-Yodo ($\text{LiI}_2$, $2,8\text{ V}$)**.

</details>

---

## 📋 SUPUESTO PRÁCTICO 6: Recepción, Puesta en Marcha y Control de Calidad de un Equipo de Resonancia Magnética de 3 Teslas y un Acelerador Lineal (LINAC) (Temas 10, 11, 13, 16, 51, 53 y 54)

> **Enunciado del Caso:** En un Hospital Universitario del SERGAS se procede a la instalación simultánea de una nueva **Resonancia Magnética (RM) superconductora de 3,0 Teslas** en el Servicio de Radiodiagnóstico y un **Acelerador Lineal de Electrones (LINAC)** con imagen guiada (IGRT) en el Servicio de Oncología Radioterápica.

---

### Pregunta 70 — `Supuesto 6 — RM 3,0 T y Jaula de Faraday (Temas 10 y 11)`

**[Supuesto 6 — Pregunta 1] Para la instalación del imán superconductor de 3,0 T de la nueva Resonancia Magnética, ¿qué tres sistemas de blindaje e infraestructura específica deben proyectarse, cómo se divide la sala según las 4 Zonas de Seguridad del American College of Radiology (ACR) y qué ocurre si se activa el botón de emergencia «Quench»?**

- **A)** Blindaje de plomo de 15 mm, Zona IV de acceso libre y el Quench inyecta nitrógeno líquido al paciente.
- **B)** 1) Jaula de Faraday de cobre/aluminio en paredes, suelo, techo y ventana para atenuar (≥ 100 dB) las interferencias de radiofrecuencia (RF) externas; 2) Blindaje magnético activo/pasivo (acero al silicio) para contener la línea de campo marginal de 5 Gauss (0,5 mT, límite para portadores de marcapasos convencionales) dentro de la sala; 3) Tubo de Quench aislado hacia el exterior del edificio. La Zona III es el área de control restringida y la Zona IV es la sala del imán. Al pulsar el Quench, una resistencia calienta el bobinado de NbTi haciendo que pierda la superconductividad y evaporando súbitamente el Helio líquido criogénico (4,2 K = −269 °C; expansión 1 L líquido → ~760 L gas) por el tubo de venteo para extinguir el campo magnético en segundos ante un atrapamiento ferromagnético vital.
- **C)** El imán se apaga diariamente desde el interruptor magnetotérmico del cuadro eléctrico general sin perder helio.
- **D)** La línea de seguridad para marcapasos es de 500 Gauss (50 mT).

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Seguridad e Instalación de RM (`Temas 10, 11 y 68`):** **Jaula de Faraday** = blindaje de RF; **Línea de $5\text{ Gauss}$ ($0,5\text{ mT}$)** = límite de exclusión para marcapasos y público; **Helio líquido a $4,2\text{ K}$ ($-269\text{ }^\circ\text{C}$)** con relación de expansión volumétrica **$1:760$** evacuado por el **tubo de Quench**; **Zonas ACR:** Zona I (público), Zona II (recepción/cribado), Zona III (sala de control restringida), **Zona IV (sala del imán, prohibido todo material ferromagnético)**.

</details>

---

### Pregunta 71 — `Supuesto 6 — Búnker de LINAC e Instalación Radiactiva (Temas 13, 51, 53 y 54)`

**[Supuesto 6 — Pregunta 2] Respecto al nuevo Acelerador Lineal (LINAC) capaz de trabajar con haces de fotones de 6 MV y 15 MV, ¿cómo se clasifica legalmente esta instalación, quién otorga su autorización de puesta en marcha (notificación), qué fenómeno radiológico adicional aparece en el búnker al operar con energías ≥ 10 MV y para qué sirve la puerta del laberinto con boro/polietileno?**

- **A)** Es una instalación de rayos X de Clase 2 declarada ante la Xunta; por encima de 10 MV no hay neutrones.
- **B)** Es una Instalación Radiactiva de 2.ª Categoría (Reglamento de Instalaciones Nucleares y Radiactivas RD 1836/1999), que requiere autorización de funcionamiento previa informe preceptivo y vinculante del Consejo de Seguridad Nuclear (CSN). Al operar con fotones de energía ≥ 10 MV (como 15 MV), se superan las energías umbral de reacción fotonuclear (γ, n) en el cabezal de tungsteno/plomo generando contaminación de NEUTRONES rápidos y térmicos; por ello el laberinto y la puerta blindada incorporan moderador hidrogenado (polietileno) para termalizar los neutrones y material de alta sección eficaz de captura como Boro o Cadmio (además de plomo para los rayos gamma de captura).
- **C)** Es una instalación nuclear de 1.ª categoría que utiliza pastillas de Uranio-235.
- **D)** El plomo puro es el mejor moderador de neutrones rápidos.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Búnker de LINAC y Fotoneutrones (`Temas 13, 53 y 54`):** Un LINAC es una **Instalación Radiactiva de 2.ª Categoría** (autorizada con informe vinculante del **CSN**). Para energías **$\ge 10\text{ MV}$** se producen **fotoneutrones $(\gamma, n)$**, que NO son frenados eficazmente por el plomo, sino que requieren **núcleos ligeros ricos en hidrógeno (hormigón, polietileno para moderar/frenar)** seguidos de **Boro-10 o Cadmio (captura de neutrones térmicos)**.

</details>

---

### Pregunta 72 — `Supuesto 6 — Control de Calidad y RD 601/2019 (Temas 13, 16 y 51)`

**[Supuesto 6 — Pregunta 3] Antes del primer uso clínico del LINAC y del sistema de planificación (TPS), según el Real Decreto 601/2019 (`Tema 51`), ¿quién debe realizar la prueba de aceptación, quién establece el estado de referencia inicial y cuál es la tolerancia geométrica del isocentro mecánico/radiante en un LINAC dedicado a radiocirugía estereotáctica (SRS)?**

- **A)** El proveedor realiza en solitario el estado de referencia inicial y la tolerancia del isocentro en SRS es de ± 10 mm.
- **B)** La prueba de aceptación la realiza el proveedor en presencia de un representante cualificado del titular (Especialista en Radiofísica Hospitalaria / Ingeniería Biomédica) para verificar el cumplimiento de las especificaciones contractuales; a continuación, el Especialista en Radiofísica Hospitalaria realiza las pruebas de puesta en marcha (comisionado) estableciendo el Estado de Referencia Inicial. En un LINAC con SRS (test de Winston-Lutz), la coincidencia del isocentro mecánico, láser y radiante debe ser ≤ 1 mm (± 2 mm en radioterapia convencional).
- **C)** En el RD 601/2019 no es obligatoria la presencia de un Especialista en Radiofísica Hospitalaria en radioterapia.
- **D)** Los Niveles de Referencia para Diagnóstico (NRD) son límites legales de dosis para tratamientos de radioterapia.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **RD 601/2019 y Comisionado de LINAC (`Temas 13, 16 y 51`):** 1) **Prueba de aceptación** (proveedor + representante del titular). 2) **Estado de Referencia Inicial** y dosimetría física/clínica: competencia exclusiva del **Especialista en Radiofísica Hospitalaria** (en Radioterapia y Medicina Nuclear terapéutica su participación es permanente y obligatoria). **Test de Winston-Lutz (Isocentro):** **$\le 1\text{ mm}$** en radiocirugía (SRS) y **$\le 2\text{ mm}$** en IMRT/convencional.

</details>

---

## 📋 SUPUESTO PRÁCTICO 7: Auditoría Técnica en UCI, Bloque Quirúrgico y Planta de Agua de Hemodiálisis (Temas 21, 22, 23, 30, 31, 35 y 58)

> **Enunciado del Caso:** El Servicio de Ingeniería Biomédica realiza la auditoría técnica anual del equipamiento crítico de soporte vital en la UCI, los quirófanos generales, la unidad de Hemodiálisis y la Central de Esterilización (RUMED).

---

### Pregunta 73 — `Supuesto 7 — Seguridad de Gases en Anestesia (Tema 22)`

**[Supuesto 7 — Pregunta 1] Durante la revisión preventiva de una estación de anestesia en quirófano (`UNE-EN ISO 80601-2-13`), el ingeniero biomédico comprueba las conexiones de gases medicinales, las botellas de reserva y el sistema anti-hipoxia. ¿Qué mecanismos físicos y neumáticos impiden conectar erróneamente una manguera o botella de N₂O en la entrada de O₂ y garantizan que nunca se administre al paciente una mezcla con FiO₂ < 21–25 %?**

- **A)** Todas las mangueras tienen la misma rosca universal y el anestesista vigila visualmente el rotámetro.
- **B)** 1)En tomas de pared y mangueras flexibles a 4–5 bar: el sistema NIST (Non-Interchangeable Screw-Threaded) y conectores rápidos específicos por gas y código de color ISO 32 (O₂ blanco, N₂O azul, Aire blanco/negro, Vacío amarillo); 2) En botellas de reserva de alta presión: el sistema de índice de pines (PISS — Pin Index Safety System: pines 2-5 para O₂ y 3-5 para N₂O); 3) En el bloque mezclador: el sistema guarda-hipoxia (Link-25 mecánico/neumático o mezclador electrónico) que acopla proporcionalmente el flujo de N₂O al de O₂ garantizando una concentración mínima de O₂ ≥ 25 %, cortando además el N₂O (válvula de corte por fallo de O₂) si cae la presión de oxígeno.
- **C)** El oxígeno medicinal en Europa se identifica con el color verde y el óxido nitroso con el color rojo.
- **D)** El botón de flujo rápido (O₂ Flush) pasa a través del vaporizador suministrando 50 L/min de gas anestésico al 8 %.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Seguridades de la Estación de Anestesia (`Tema 22` — `ISO 80601-2-13`):** 1) **NIST** en latiguillos de baja presión ($4\text{–}5\text{ bar}$). 2) **PISS (*Pin Index*)** en yugos de botellas. 3) **Código de colores `ISO 32` en Europa:** $\text{O}_2$ = **Blanco**, $\text{N}_2\text{O}$ = **Azul**, Aire = **Blanco/Negro**, Vacío = **Amarillo**. 4) **Guarda-hipoxia (*Link-25*)**: garantiza $\text{FiO}_2 \ge 25\%$. Nota: el botón **$\text{O}_2\text{ Flush}$ ($35\text{–}75\text{ L/min}$)** puentea (*by-pass*) siempre el vaporizador enviando $\text{O}_2$ puro.

</details>

---

### Pregunta 74 — `Supuesto 7 — Prueba de Descarga de Desfibrilador y Seguridad Eléctrica (Temas 1, 31 y 72)`

**[Supuesto 7 — Pregunta 2] Al verificar con un analizador de desfibriladores un monitor-desfibrilador bifásico de UCI seleccionado a 200 Julios sobre la carga patrón normalizada de 50 Ω (`UNE-EN 60601-2-4`), ¿qué tolerancia máxima de energía entregada admite la norma, qué clasificación de parte aplicable debe tener las palas/electrodos y cuál es el tiempo máximo de carga permitido hasta la energía máxima?**

- **A)** Tolerancia ± 50 %; parte aplicable Tipo B; tiempo de carga < 60 segundos.
- **B)** La energía entregada sobre 50 Ω debe estar dentro de ± 15 % del valor seleccionado (o ± 4 J, el que sea mayor); las entradas de ECG y palas deben ser Parte Aplicable Tipo CF a prueba de desfibrilación (con descargadores de gas / diodos Zener que protegen el preamplificador y recuperan el trazado de ECG en ≤ 5 segundos tras el choque); y el tiempo de carga hasta la energía máxima con batería al 90 % debe ser ≤ 10–15 segundos.
- **C)** La carga patrón de ensayo de un desfibrilador es de 1.000 Ω.
- **D)** Un desfibrilador no requiere batería interna si se usa en una UCI con grupo electrógeno.

<details>
<summary><b>✅ Ver respuesta correcta y explicación</b></summary>

- **Respuesta correcta:** **B**
- **Justificación:** **Verificación de Desfibriladores (`UNE-EN 60601-2-4` — `Tema 31`):** Ensayo sobre resistencia no inductiva de **$50\text{ }\Omega$** (y curva multi-impedancia $25\text{–}175\text{ }\Omega$). Exactitud de energía entregada: **$\pm 15\%$** (o $\pm 4\text{ J}$). Recuperación de la línea base del monitor ECG tras descarga de desfibrilación: **$\le 5\text{ segundos}$**.

</details>

---

