# Esp. Tema 6 — Caracterización y funcionamiento de los equipos de tomografía computarizada. Imagen tomográfica y componentes de los equipos. Adquisición: helicoidal, multicorte, volumétrica y espectral.

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

### 3. Tema 6: Equipos de Tomografía Computarizada (TC): Helicoidal, Multicorte, Volumétrica y Espectral

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
