# Esp. Tema 8 — Caracterización y funcionamiento de los equipos de radiología portátil. Diagnóstico e intervencionismo.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 1: Núcleo Diamante (💎 Núcleo Diamante)  
> **Bloque de Estudio Completo:** [`Bloque_02_Fisica_Radiaciones_y_Radiodiagnostico_RX_TC_Mamo_Arcos.md`](../02_apuntes_nucleo_diamante/Bloque_02_Fisica_Radiaciones_y_Radiodiagnostico_RX_TC_Mamo_Arcos.md)

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

### 5. Tema 8 y Tema 9: Radiología Portátil, Arcos Quirúrgicos, Salas de Intervencionismo Vascular/Hemodinámica y Quirófanos Híbridos

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
