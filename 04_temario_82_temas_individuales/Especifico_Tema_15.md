# Esp. Tema 15 — Caracterización y funcionamiento de los equipos de protonterapia. Elementos de una instalación.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 3: Ficha Específica Biomédica (Complementario)  
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

### 3. Temas 13, 14, 15 y 16: Radioterapia Externa (LINAC), Braquiterapia, Protonterapia y Sistemas de Planificación (TPS)

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
