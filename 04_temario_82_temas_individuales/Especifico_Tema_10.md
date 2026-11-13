# Esp. Tema 10 — Caracterización de los equipos de resonancia magnética. Generación de la señal electromagnética. Componentes, equipos e imanes.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 1: Núcleo Diamante (💎 Núcleo Diamante)  
> **Bloque de Estudio Completo:** [`Bloque_03_RM_Ecografia_Radioterapia_Protonterapia_y_Medicina_Nuclear.md`](../02_apuntes_nucleo_diamante/Bloque_03_RM_Ecografia_Radioterapia_Protonterapia_y_Medicina_Nuclear.md)

## 🎯 Cruce con Otras Oposiciones del SERGAS

- **Categorías con solapamiento:** **Radiofísica Hospitalaria** |  | **TS Imagen para el Diagnóstico** |  | **Ingeniero/a Técnico/a**
- **Grado de solapamiento:** **Total (95%)**: Cubre campo magnético e imanes, propiedades magnéticas, excitación/relajación de la señal y componentes de un equipo de RM.<br><br>**Alto (75%)**: Cubre equipamiento y fundamentos físicos de la resonancia magnética.<br><br>**Medio (50%)**: Incluye RNM e instalaciones asociadas.
- **Epígrafes equivalentes:**
  • Tema 36. Fundamentos de resonancia magnética. Campo magnético e imanes, propiedades magnéticas de la materia. Conducta de un núcleo atómico bajo un campo magnético, excitación y relajación. Obtención de imágenes, artefactos. Aplicaciones clínicas. Espectroscopia. Efectos biológicos y seguridad. Componentes de un equipo de resonancia magnética. Garantía y control de calidad.
  
  • Tema 9. Equipamientos de diagnóstico por imagen: radiología convencional intervencionista, tomografía computerizada, resonancia magnética y ultrasonografía. Principios de tomografía computerizada y resonancia magnética: fundamentos físicos, aplicaciones e indicaciones. Estudios y técnicas de exploración con TC y RMN. Ultrasonografía. Bases y fundamentos físicos. Ultrasonografía en 2, 3 y 4 dimensiones. Ventajas. Inconvenientes.
  
  • Tema 50. Diagnóstico por imagen. Equipos y salas de radiodiagnóstico. RNM. TAC. Instalaciones. Procesado de placas. Digitalización de imágenes.

---

## 📖 Desarrollo Técnico y Normativo del Tema

### 1. Tema 10 y Tema 11: Equipos de Resonancia Magnética (RM), Seguridad, Reconstrucción y Artefactos

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
