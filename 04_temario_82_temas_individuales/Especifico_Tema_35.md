# Esp. Tema 35 — Caracterización y funcionamiento de las fuentes de energía para uso quirúrgico o intervencionista. Equipamiento asociado.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 1: Núcleo Diamante (💎 Núcleo Diamante)  
> **Bloque de Estudio Completo:** [`Bloque_05_Electromedicina_Criticos_Quirofano_Ventilacion_Anestesia_Monitorizacion.md`](../02_apuntes_nucleo_diamante/Bloque_05_Electromedicina_Criticos_Quirofano_Ventilacion_Anestesia_Monitorizacion.md)

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

### 7. Tema 35 y Tema 37: Fuentes de Energía Quirúrgica (Electrobisturís, Ultrasonidos, Selladores, Láser) y Equipamiento del Bloque Quirúrgico

### 7.1. Tema 35: Fuentes de Energía para Uso Quirúrgico (Electrocirugía de Alta Frecuencia — `UNE-EN 60601-2-2`)
1. **¿Por qué un Electrobisturí trabaja en Alta Frecuencia ($300\text{ kHz a }5\text{ MHz}$, típicamente $300\text{–}500\text{ kHz}$) y no a $50\text{ Hz}$? (¡Pregunta fija de examen!):**
   - Porque por encima de **$100\text{ kHz}$** la corriente alterna **deja de despolarizar las membranas de los nervios y del músculo cardíaco (no produce efecto farádico de electrocución ni fibrilación ventricular)** y produce exclusivamente **efecto térmico (Efecto Joule: $Q = I^2 \cdot R \cdot t$)** en el punto de alta densidad de corriente de la punta del electrodo activo.
2. **Modalidad MONOPOLAR vs. Modalidad BIPOLAR:**
   - **Monopolar:** La corriente sale del generador por el **electrodo activo** (mango de bisturí con punta fina $\rightarrow$ altísima densidad de corriente $J = I/S$), atraviesa el cuerpo del paciente y regresa al generador por la **Placa de Paciente (Electrodo Neutro o de Retorno)** de gran superficie ($> 100\text{ cm}^2$, baja densidad de corriente sin calentamiento).
     - **Seguridad contra quemaduras bajo la placa (Sistema REM — *Return Electrode Monitoring*):** Utiliza **placas partidas (divididas en dos mitades)** por las que el bisturí mide continuamente la impedancia de contacto piel-placa (rango aceptable típico $5\text{ a }135\text{ }\Omega$); si la placa se despega parcialmente, el sistema corta el disparo y emite alarma antes de producir una quemadura.
   - **Bipolar:** Las dos ramas de la pinza son el electrodo activo y el de retorno; la corriente **solo atraviesa el milímetro de tejido pinzado entre ambas puntas** (**no requiere placa de paciente**, ideal en neurocirugía, microcirugía y **mucho más seguro en pacientes portadores de marcapasos o DAI**).
3. **Formas de Onda de Corte vs. Coagulación:**
   - **Corte Puro (*Cut*):** Onda **senoidal continua al $100\%$ del ciclo de trabajo** de menor voltaje pico; sube instantáneamente la temperatura intracelular a $> 100\text{ }^\circ\text{C}$ **vaporizando y haciendo estallar las células** sin apenas hemostasia.
   - **Coagulación (*Coag / Fulguración*):** Onda **pulsada/amortiguada intermitente** (activa solo el $6\text{–}10\%$ del tiempo, enfriándose el resto) pero de **muy alto voltaje pico ($3.000\text{–}5.000\text{ V}$)**; calienta el tejido a $60\text{–}90\text{ }^\circ\text{C}$ desnaturalizando las proteínas y desecando el vaso sin cortar.
   - **Mezcla (*Blend*):** Ciclo de trabajo intermedio ($25\text{–}80\%$) que combina corte con hemostasia.
4. **Otras Fuentes de Energía Quirúrgica:**
   - **Coagulación con Plasma de Argón (APC):** Ioniza un chorro de gas Argón creando un arco conductor sin contacto físico para coagular hemorragias difusas superficiales en mucosas o hígado con penetración limitada ($1\text{–}3\text{ mm}$).
   - **Sistemas Bipolares Avanzados de Sellado Vascular (*LigaSure*, *EnSeal*):** Miden en lazo cerrado la impedancia del vaso mientras aplican presión mecánica calibrada y radiofrecuencia bipolar para fusionar el colágeno y elastina de vasos de hasta **$7\text{ mm}$ de diámetro**.
   - **Bisturí Armónico / Ultrasónico (*Harmonic*):** La hoja de titanio vibra mecánicamente a **$55.500\text{ Hz}$ ($55,5\text{ kHz}$)** mediante un transductor piezoeléctrico en el mango, cortando y coagulando simultáneamente a menor temperatura ($50\text{–}100\text{ }^\circ\text{C}$) y **sin paso de corriente eléctrica por el paciente**.
   - **Aspirador Ultrasónico Quirúrgico (*CUSA* — Neurocirugía y Cirugía Hepática):** Fragmenta selectivamente por cavitación ultrasónica ($23\text{–}36\text{ kHz}$) el parénquima rico en agua (tumor cerebral, parénquima hepático) respetando los vasos sanguíneos y nervios ricos en colágeno, mientras irriga y aspira.

### 7.2. Tema 37: Equipamiento Estándar del Bloque Quirúrgico (Columnas, Mesas e Iluminación)
1. **Columnas de Suministro de Techo (Colgantes Quirúrgicos y de UCI — `UNE-EN ISO 11197`):**
   - Brazos articulados sencillos o dobles (con frenos neumáticos o electromagnéticos) que separan el **lado de anestesia** y el **lado de cirugía** dejando el suelo libre de cables y mangueras:
   - Dotación estándar: tomas rápidas de gases medicinales (`ISO 9170`: **$\text{O}_2$, Aire medicinal, $\text{N}_2\text{O}$, Vacío, Aire motor quirúrgico a $7\text{–}8\text{ bar}$, toma AGSS de evacuación de gases anestésicos y $\text{CO}_2$** para laparoscopia), tomas eléctricas diferenciadas por color (red normal, SAI y red de transformador de aislamiento de quirófano), tomas equipotenciales y tomas de datos RJ45 / vídeo fibra óptica.
2. **Mesas Quirúrgicas (`UNE-EN 60601-2-46`):**
   - Columna electrohidráulica o electromecánica (fija al suelo, móvil o de **tableros intercambiables con carros de transferencia**) con tableros modulares articulados y **radiotransparentes** (fibra de carbono para permitir el paso del arco en C).
   - Movimientos motorizados con mando y batería de respaldo: elevación/descenso, **Trendelenburg** (cabeza abajo) / **Anti-Trendelenburg**, inclinación lateral (*tilt*), desplazamiento longitudinal (*sliding* para el arco en C), *flex/reflex* (quiebre renal/pilórico) y accesorios específicos (tracción traumatológica, cabezal de Mayfield para neurocirugía, perneras de litotomía).
3. **Lámparas Quirúrgicas (Iluminación de Quirófano — `UNE-EN 60601-2-41` — ¡Datos numéricos fijos de examen!):**
   - **Iluminancia central ($E_c$) a $1\text{ metro}$ del cabezal:** Debe estar comprendida entre **$40.000\text{ y }160.000\text{ lux}$** (**nunca puede superar los $160.000\text{ lux}$** para evitar deslumbramiento y desecación tisular).
   - **Temperatura de color correlacionada ($T_c$):** Entre **$3.000\text{ K y }6.700\text{ K}$** (típicamente ajustable entre $3.800\text{ K}$ [cálida, resalta tejidos profundos/rojos] y $5.000\text{ K}$ [luz día fría]).
   - **Índice de Reproducción Cromática ($R_a$ o CRI):** Entre **$85\text{ y }100$** (en lámparas LED actuales **$R_a \ge 95$** e índice de rojo profundo $R_9 > 90$ para distinguir tonos de sangre arterial y venosa).
   - **Efecto Scialítico (Supresión de sombras):** Múltiples matrices de lentes/reflectores LED dispuestos en cúpula aerodinámica (compatible con el **flujo laminar de techo**) de modo que aunque la cabeza o manos del cirujano tapen parte de la lámpara, el campo quirúrgico permanece iluminado sin sombras oscuras.
   - **Irradiancia total (Calor radiante):** No debe superar **$1.000\text{ W/m}^2$** para no secar ni quemar los tejidos expuestos.
   - **Alimentación de emergencia (`ITC-BT-38`):** Ante un corte de red, el suministro especial complementario (baterías) debe alimentar la lámpara de quirófano con un tiempo de conmutación **$\le 0,5\text{ segundos}$** y una autonomía mínima de **$2\text{ horas}$**.

### 7.3. Tema 36: Equipamiento Electromédico de Consultas Externas y Salas de Técnicas
- **Cardiología / Medicina Interna / Atención Primaria:** Electrocardiógrafos de 12 derivaciones con interpretación automática, **Holter de ECG** (24–72 h) y **MAPA** (Monitorización Ambulatoria de Presión Arterial), **Ergómetros** (cinta rodante con protocolo de Bruce o cicloergómetro) y espirómetros (neumotacógrafo o turbina para medir **CVF, $\text{FEV}_1$ e índice de Tiffeneau $\text{FEV}_1/\text{CVF}$**).
- **Oftalmología:** Lámpara de hendidura (biomicroscopio), tonómetro de aplanación de Goldmann o de aire (presión intraocular), autorrefractómetro-queratómetro, campímetro computerizado (Humphrey), biómetro óptico/ecográfico, **Tomografía de Coherencia Óptica (OCT)** retiniana, láser YAG/Argón y **facoemulsificador** ultrasónico para cirugía de cataratas.
- **Otorrinolaringología (ORL):** Unidad de sillón ORL con microscopio otomicroscópico, nasofibroscopio, **audiómetro tonal/verbal** en cabina insonorizada, **impedanciómetro/timpanómetro** y equipos de **potenciales evocados auditivos de tronco cerebral (PEATC)** y **otoemisiones acústicas (OEA)** para cribado de hipoacusia neonatal.
- **Ginecología y Obstetricia:** Ecógrafo con sonda transvaginal y abdominal 3D/4D, **colposcopio**, histeroscopio de consulta y **cardiotocógrafo (Monitor Fetal — RCTG)** con dos transductores abdominales: **1) Transductor Doppler ultrasónico** para la frecuencia cardíaca fetal (FCF) y **2) Tocodinamómetro** (galga de presión) para la dinámica uterina (contracciones).
- **Neurofisiología Clínica:** **Electroencefalógrafo (EEG)** (sistema internacional 10–20 de colocación de electrodos, sensibilidad de microvoltios $\mu\text{V}$), **Electromiógrafo (EMG) y Electroneyrógrafo (ENG)** (velocidad de conducción nerviosa) y **Polisomnógrafo** (unidad del sueño).
