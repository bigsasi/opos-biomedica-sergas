# Esp. Tema 12 — Caracterización y funcionamiento de los equipos de ultrasonido. Interacción de los ultrasonidos con el medio. Equipos y transductores. Usos diagnósticos y terapéuticos. Ecografía y artefactos.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 1: Núcleo Diamante (💎 Núcleo Diamante)  
> **Bloque de Estudio Completo:** [`Bloque_03_RM_Ecografia_Radioterapia_Protonterapia_y_Medicina_Nuclear.md`](../02_apuntes_nucleo_diamante/Bloque_03_RM_Ecografia_Radioterapia_Protonterapia_y_Medicina_Nuclear.md)

## 🎯 Cruce con Otras Oposiciones del SERGAS

- **Categorías con solapamiento:** **Ingeniero/a Técnico/a** |  | **Radiofísica Hospitalaria** |  | **TS Imagen para el Diagnóstico**
- **Grado de solapamiento:** **Alto (80%)**: Cubre específicamente equipos, instalaciones y salas de radiodiagnóstico y digitalización.<br><br>**Alto (75%)**: Cubre características de los equipos/salas de radiodiagnóstico y diseño de instalaciones.<br><br>**Medio (65%)**: Cubre equipamiento de radiología convencional y sistemas digitales.
- **Epígrafes equivalentes:**
  • Tema 50. Diagnóstico por imagen. Equipos y salas de radiodiagnóstico. RNM. TAC. Instalaciones. Procesado de placas. Digitalización de imágenes.
  
  • Tema 26. Equipos. Tubos y generadores de rayos X. Propiedades. Cadena de imagen: a) placa radiográfica, características de la película radiográfica, pantallas de refuerzo, procesadoras, negatoscopios, b) intensificadores de imagen, c) sistemas receptores de imagen digital: cR, detectores de panel plano, etc. Características de los equipos de radiodiagnóstico: radiográficos, tomógrafos convencionales, mamógrafos, equipos dentales, telemandos, arcos quirúrgicos, equipos vasculares y de hemodinámica, tomógrafos computadorizados (TC).
  • Tema 10. Regulaciones, recomendaciones y normas. Administración y organización de la protección radiológica. Organizaciones y normas nacionales e internacionales. Legislación nacional e internacional. Diseño de instalaciones. Cálculo de blindajes. Gestión de la seguridad radiológica.
  
  • Tema 9. Equipamientos de diagnóstico por imagen: radiología convencional intervencionista, tomografía computerizada, resonancia magnética y ultrasonografía. Principios de tomografía computerizada y resonancia magnética: fundamentos físicos, aplicaciones e indicaciones. Estudios y técnicas de exploración con TC y RMN. Ultrasonografía. Bases y fundamentos físicos. Ultrasonografía en 2, 3 y 4 dimensiones. Ventajas. Inconvenientes.
  • Tema 14. Sistemas de imagen en la radiología convencional. Película radiográfica: revelado y fijado. Sistemas digitales de imagen.

---

## 📖 Desarrollo Técnico y Normativo del Tema

### 2. Tema 12: Equipos de Ultrasonido (Ecografía): Transductores, Doppler y Artefactos

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
