# Bloque 06 — Equipamiento de Diálisis y Tratamiento de Agua, Esterilización, Laboratorio, Rehabilitación, Farmacia Hospitalaria, Hospitalización e Impresión 3D

> **Temas de la Parte Específica cubiertos íntegramente en este bloque (7 temas):**
> - **Tema 24:** Caracterización y funcionamiento del equipamiento de laboratorio en los centros sanitarios del Servicio Gallego de Salud.
> - **Tema 27:** Caracterización y funcionamiento del equipamiento de rehabilitación y fisioterapia.
> - **Tema 29:** Equipamiento de pacientes. Hospitalización y movilización.
> - **Tema 30:** Caracterización y funcionamiento del equipamiento de diálisis. Tratamiento de agua asociado a la hemodiálisis.
> - **Tema 34:** Impresión 3D en el ámbito sanitario. Aplicación y tecnología.
> - **Tema 57:** Caracterización y funcionamiento del equipamiento de farmacia hospitalaria. Dispensación.
> - **Tema 58:** Procesos de esterilización. Trazabilidad.

---

## 1. Tema 30: Equipamiento de Diálisis y Planta de Tratamiento de Agua para Hemodiálisis (`UNE-EN 60601-2-16` e `ISO 23500`)

### 1.1. Principios Físicos del Transporte a través de la Membrana Semipermeable del Dializador
En hemodiálisis, la sangre del paciente y el líquido de diálisis (*dializado*) circulan en **sentidos opuestos (contracorriente)** a ambos lados de los miles de capilares semipermeables del **dializador (filtro capilar de polisulfona, polietersulfona o poliamida)**:
1. **Difusión (Conducción):** Paso de solutos de **bajo peso molecular (urea, creatinina, ácido úrico, potasio $\text{K}^+$)** desde donde están más concentrados (sangre) hacia donde están menos concentrados (dializado) por **gradiente de concentración** (Ley de Fick).
2. **Convección (Ultrafiltración — UF):** Paso de **agua plasmática arrastrando solutos de mediano peso molecular ($\beta_2$-microglobulina)** a través de la membrana por **gradiente de Presión Transmembrana ($\text{PTM}$)**:
   - **Hemodiálisis convencional (HD):** Predomina la **difusión** + ultrafiltración solo del exceso de peso líquido del paciente ($1\text{–}4\text{ L/sesión}$).
   - **Hemofiltración (HF):** Exclusivamente **convección** (sin líquido de diálisis; se ultrafiltran grandes volúmenes de plasma que se reponen con líquido de sustitución estéril).
   - **Hemodiafiltración en línea (*On-Line HDF* — Estándar de alta eficacia en los hospitales del SERGAS):** Combina simultáneamente **difusión + alta convección ($> 20\text{–}23\text{ L/sesión}$)** produciendo el propio monitor el líquido de sustitución infusible apirógeno *in situ* mediante doble/triple etapa de **filtros de líquido ultrapuro (endotoxinas $< 0,03\text{ UE/ml}$)**.

### 1.2. Circuito Extracorpóreo de Sangre y Circuito Hidráulico del Monitor de Hemodiálisis
1. **Circuito Sanguíneo Extracorpóreo (Parte Aplicable Tipo CF — `UNE-EN 60601-2-16`):**
   - Línea arterial (desde la fístula arteriovenosa o catéter venoso central) $\rightarrow$ **Monitor de presión arterial pre-bomba** (negativa: $-100\text{ a }-250\text{ mmHg}$) $\rightarrow$ **Bomba peristáltica de rodillos** (flujo sanguíneo $Q_b = 250\text{ a }450\text{ ml/min}$) $\rightarrow$ **Bomba de jeringa de Heparina** $\rightarrow$ **Dializador** $\rightarrow$ **Cámara atrapaburbujas venosa con monitor de presión venosa de retorno** (positiva: $+50\text{ a }+200\text{ mmHg}$) $\rightarrow$ **Detector Ultrasónico de Aire y Espuma + Pinza (*Clamp*) Venosa Electromagnética de seguridad** (si detecta una microburbuja de aire en la línea venosa, **para instantáneamente la bomba de sangre y cierra el *clamp* venoso** para evitar una embolia gaseosa mortal).
2. **Circuito Hidráulico de Líquido de Diálisis ($Q_d = 500\text{ a }800\text{ ml/min}$):**
   - Toma **agua tratada ultrapura** $\rightarrow$ desgasificador (vacío) y calentador ($36\text{–}37\text{ }^\circ\text{C}$ con termostato de seguridad que corta a $> 41\text{ }^\circ\text{C}$ porque **a $\ge 42\text{ }^\circ\text{C}$ se produce hemólisis térmica masiva**) $\rightarrow$ **Bombas dosificadoras volumétricas de Concentrado Ácido y de Bicarbonato ($\text{NaHCO}_3$)** en proporción $1:34\text{ o }1:44$ controlada en lazo cerrado por **Células de Conductividad eléctrica (rango normal del dializado: $13,5\text{ a }14,5\text{ mS/cm}$, equivalente a $\text{Na}^+ \approx 138\text{–}140\text{ mEq/L}$)** $\rightarrow$ **Cámara de Balance Volumétrico / Coriómetro de Ultrafiltración** $\rightarrow$ Dializador $\rightarrow$ **Detector Óptico de Fuga de Sangre (*Blood Leak Detector*)** en el efluente (fotodiodo bicolor que detecta rotura de capilares si pasa hemoglobina al dializado $> 0,35\text{ ml/min}$).

### 1.3. Planta de Tratamiento de Agua para Hemodiálisis (¡Caso práctico clásico de Ingeniero Técnico / Biomédico!)
Un paciente en hemodiálisis está expuesto a **$120\text{–}180\text{ litros de agua por sesión}$** ($> 20.000\text{ litros/año}$) directamente a través de una membrana semipermeable (frente a los $14\text{ L/semana}$ que bebe una persona sana por vía digestiva). Por ello, el agua de red potable debe transformarse en **Agua Purificada / Ultrapura para Hemodiálisis (`UNE-EN ISO 23500` / Guía SEN)** siguiendo exactamente este **tren de pretratamiento y tratamiento en serie**:

```
[Agua Red] -> 1. Cloración/Depósito -> 2. Filtro Multicapa (Arena/Antracita: turbidez >10 um)
           -> 3. Descalcificador Doble en Alternancia (Resinas de intercambio catiónico Na+: elimina Ca2+ y Mg2+)
           -> 4. Doble Filtro de Carbón Activo Granular en Serie (Decloración: elimina Cloro libre y Cloraminas)
           -> 5. Microfiltración de Guarda (5 um / 1 um: protege las membranas)
           -> 6. DOBLE ETAPA DE ÓSMOSIS INVERSA EN SERIE (Membranas de Poliamida TFC a 10-18 bar)
           -> 7. Anillo de Distribución en PEX-a o Acero Inoxidable 316L (sin fondos de saco, v > 1 m/s, UV y Termodesinfección a >85 ºC)
```

- **Tres preguntas fijas de examen sobre la Planta de Agua de Diálisis:**
  1. **¿Qué hace el Carbón Activo y por qué van dos columnas en serie?** Elimina por adsorción/reducción catalítica el **cloro libre y las cloraminas** (tiempo de contacto en lecho vacío $\text{EBCT} \ge 10\text{ min}$: $5\text{ min} + 5\text{ min}$). Es el punto más crítico porque **el cloro destruye irreversiblemente las membranas de poliamida de la ósmosis inversa** y, si pasa al paciente, provoca **anemia hemolítica aguda (metahemoglobinemia y hemólisis)** (límite máximo de cloro total: **$< 0,1\text{ mg/L}$**).
  2. **¿Qué retiene la Ósmosis Inversa (OI)?** Rechaza **$> 98\text{–}99\%$ de los iones divalentes y monovalentes** (aluminio, calcio, magnesio, flúor, nitratos, sulfatos) y el **$> 99,9\%$ de bacterias, virus y endotoxinas** (peso molecular $> 150\text{–}200\text{ Da}$).
  3. **Criterios de calidad del Agua Purificada vs. Agua Ultrapura (`ISO 23500` / Guía SEN):**
     - **Conductividad a la salida de la doble ósmosis:** Típicamente **$< 5\text{–}10\text{ }\mu\text{S/cm}$**.
     - **Agua Purificada estándar:** Bacterias **$< 100\text{ UFC/ml}$** y Endotoxinas **$< 0,25\text{ UE/ml}$**.
     - **Agua Ultrapura (obligatoria para HDF en línea y alto flujo):** Bacterias **$< 0,1\text{ UFC/ml}$** y Endotoxinas **$< 0,03\text{ UE/ml}$**.
     - **Diseño del anillo de distribución hasta los monitores:** Tubería de **acero inoxidable farmacéutico AISI 316L orbital o Polietileno Reticulado (PEX-a) / PVDF**, en **lazo cerrado continuo sin tramos muertos ni fondos de saco**, con retorno continuo a velocidad turbulenta **$> 1\text{ m/s}$** y **desinfección térmica periódica automatizada a $> 80\text{–}85\text{ }^\circ\text{C}$** para impedir la formación de **biopelícula (*biofilm*)**.

---

## 2. Tema 58: Procesos de Esterilización y Trazabilidad en Central de Esterilización (RUMED)

### 2.1. Conceptos Fundamentales y el Nivel de Aseguramiento de Esterilidad (SAL $10^{-6}$)
- **Limpieza:** Eliminación física por arrastre (detergente enzimático/alcalino + acción mecánica/ultrasónica + temperatura) de la materia orgánica e inorgánica. *(Regla de oro de examen: **«No se puede esterilizar lo que no está previamente limpio y seco»**).*
- **Desinfección (Clasificación de Spaulding):**
  - **Material No Crítico** (contacto con piel intacta: fonendoscopio, manguito PNI) $\rightarrow$ **Desinfección de Bajo/Medio Nivel**.
  - **Material Semicrítico** (contacto con mucosas o piel no intacta: endoscopios digestivos, palas de laringoscopio) $\rightarrow$ **Desinfección de Alto Nivel (DAN)** (ej. ácido peracético, ortoftalaldehído OPA) o esterilización.
  - **Material Crítico** (penetra en tejido estéril, cavidades estériles o sistema vascular: instrumental quirúrgico, implantes, agujas, ópticas de laparoscopia) $\rightarrow$ **ESTERILIZACIÓN obligatoria**.
- **Esterilización (`UNE-EN 556-1`):** Proceso validado que destruye toda forma de vida microbiana, incluidas las **esporas bacterianas altamente resistentes**. Un producto solo puede etiquetarse como **«ESTÉRIL»** cuando el **Nivel de Aseguramiento de la Esterilidad (SAL — *Sterility Assurance Level*)** alcanza una probabilidad teórica de encontrar un microorganismo viable **$\le 10^{-6}$ (como máximo $1\text{ entre }1.000.000$)**.

### 2.2. Métodos de Esterilización de Alta y Baja Temperatura (¡Tabla comparativa fija de examen!)

| Método de Esterilización | Temperatura / Ciclo | Agente Esterilizante y Mecanismo | Indicador Biológico (Espora de control) | Aplicaciones y Limitaciones |
| :--- | :--- | :--- | :--- | :--- |
| **1. Calor Húmedo — Autoclave de Vapor con Prevacío Fraccionado** *(Alta Temperatura — Norma `UNE-EN 285`)* | • **$134\text{ }^\circ\text{C}$** durante **$3\text{–}5\text{ min}$** ($\approx 2,1\text{ bar}$ rel.) *(o **$134\text{ }^\circ\text{C}$ durante $18\text{ min}$** para ciclo antipriones / Creutzfeldt-Jakob)*.<br>• **$121\text{ }^\circ\text{C}$** durante **$15\text{–}20\text{ min}$** ($\approx 1,1\text{ bar}$). | **Vapor de agua saturado puro** (desnaturalización y coagulación de proteínas por transferencia de calor latente de condensación). Requiere bomba de vacío para eliminar el aire. | ***Geobacillus stearothermophilus*** | **Método de primera elección (>85% de todo el material hospitalario):** rápido, económico, atóxico y sin residuos. **Para todo el instrumental metálico, textil, vidrio y caucho termorresistente**. |
| **2. Gas Plasma de Peróxido de Hidrógeno ($\text{H}_2\text{O}_2$)** *(Baja Temperatura — *Sterrad* / *V-Pro*)* | **$45\text{ a }55\text{ }^\circ\text{C}$** (ciclo rápido de $28\text{ a }55\text{ min}$). | Vapor de **Peróxido de Hidrógeno al $58\text{–}59\%$** en alto vacío (+ radiofrecuencia en plasma) que oxida membranas y ADN; sus únicos subproductos finales son **agua y oxígeno (no requiere aireación)**. | ***Geobacillus stearothermophilus*** | **Estándar actual en quirófanos y centrales para material termosensible** (ópticas, cables de fibra, cámaras de endoscopia, motores, cables de robot *Da Vinci*). **¡Incompatibilidad de examen!** **PROHIBIDO introducir celulosa (papel, gasas, textil)** ni líquidos o lúmenes ciegos muy largos, porque la celulosa absorbe el $\text{H}_2\text{O}_2$ y aborta el ciclo. |
| **3. Óxido de Etileno (OE / EtO)** *(Baja Temperatura)* | **$37\text{ a }55\text{ }^\circ\text{C}$** ($2\text{–}5\text{ h}$ de exposición + **$8\text{ a }12\text{ h}$ de aireación forzada obligatoria**). | Gas alquilante (**$\text{C}_2\text{H}_4\text{O}$**). Alta capacidad de penetración en lúmenes largos y plásticos. | ***Bacillus atrophaeus*** *(antes B. subtilis var. niger)* | En desuso hospitalario (restringido a nivel industrial o centros muy concretos) por ser **tóxico, mutagénico, carcinógeno e inflamable** y exigir largos tiempos de desorción/aireación. |
| **4. Vapor a Baja Temperatura con Formaldehído (VBTF / *Matachana*)** | **$50\text{ a }78\text{ }^\circ\text{C}$** ($2\text{–}4\text{ h}$). | Formaldehído al $2\%$ en presencia de vapor de agua subatmosférico. | ***Geobacillus stearothermophilus*** | Alternativa de baja temperatura compatible con celulosa y lúmenes largos. |
| **5. Ácido Peracético Líquido ($\text{CH}_3\text{COOOH}$)** | **$50\text{ a }56\text{ }^\circ\text{C}$** ($25\text{–}30\text{ min}$ por inmersión automatizada). | Oxidante líquido en procesadores automáticos cerrados para **endoscopios flexibles** de uso inmediato (**no almacenable** tras el ciclo). | *Geobacillus stearothermophilus* | Uso inmediato en unidades de endoscopia/quirófano. |

### 2.3. Controles de Calidad y Trazabilidad en la Central de Esterilización (`UNE-EN ISO 17665` y `ISO 11140`)
1. **Arquitectura de Barrera Sanitaria y Presiones Diferenciales en la Central de Esterilización (RUMED):**
   - Diseño unidireccional estricto sin cruces: **1) Zona Sucia (Recepción y Lavado/Descontaminación — Presión NEGATIVA)** $\rightarrow$ paso a través de **lavadoras-termodesinfectoras de doble puerta (*pass-through*, que desinfectan térmicamente a $90\text{–}93\text{ }^\circ\text{C}$ y calculan el valor $A_0 \ge 600\text{ o }3000$)** $\rightarrow$ **2) Zona Limpia (Inspección, Empaquetado y Carga de Autoclaves — Presión POSITIVA)** $\rightarrow$ paso a través de **autoclaves de doble puerta (barrera física)** $\rightarrow$ **3) Zona Estéril (Descarga y Almacén Estéril — Presión POSITIVA máxima)**.
2. **Los 3 Tipos de Controles de Esterilización:**
   - **Controles Físicos / Paramétricos (en cada ciclo):** Registro impreso y digital independiente de **Temperatura, Presión y Tiempo**.
   - **Controles Químicos (`UNE-EN ISO 11140-1`):**
     - **Clase 1 (Indicadores de Proceso):** Cinta adhesiva exterior del paquete (solo indica si el paquete ha pasado por el autoclave).
     - **Clase 2 (Para ensayos específicos — *Test de Bowie-Dick*):** **¡Pregunta fija de examen!** El **Test de Bowie-Dick** se realiza **todos los días al inicio de la jornada con la cámara vacía** ($134\text{ }^\circ\text{C}$ durante $3,5\text{ min}$) y sirve para **comprobar la eficacia de la extracción de aire (bomba de vacío) y la penetración uniforme del vapor** (y detectar fugas de aire o gases no condensables).
     - **Clase 4, 5 (Integradores) y 6 (Emuladores):** Se colocan **en el interior de cada paquete o contenedor quirúrgico** para verificar que el agente esterilizante ha penetrado dentro.
   - **Controles Biológicos (`UNE-EN ISO 11138`):** Contienen esporas vivas ($10^6$ esporas de *Geobacillus stearothermophilus* en vapor/peróxido); son los **únicos que certifican biológicamente la letalidad del ciclo** y son **obligatorios en todas las cargas que contengan IMPLANTES quirúrgicos** (no se libera el implante hasta tener lectura negativa del indicador biológico, hoy de lectura rápida por fluorescencia en $15\text{–}60\text{ min}$).
3. **Trazabilidad Informática Integral:** Cada contenedor o pieza de instrumental lleva grabado un código **DataMatrix láser (UDI)** o etiqueta de código de barras que vincula informáticamente en la HCE del paciente (**IANUS**) el lote del ciclo de lavado, la persona que empaquetó, el número de lote y gráfica del autoclave, el control biológico y el paciente en cuya cirugía se utilizó.

---

## 3. Tema 24: Equipamiento de Laboratorio en los Centros Sanitarios del SERGAS

### 3.1. Automatización Total de Laboratorio (*Core Lab* — Cadena Robotizada) y Principales Analizadores
1. **Fase Preanalítica Robotizada:** Clasificadores automáticos de tubos por código de barras, **centrífugas refrigeradas robotizadas**, destaponadoras, alicuotadoras y transporte por cinta magnética hacia los analizadores.
2. **Bioquímica Clínica e Inmunoensayo:**
   - **Espectrofotometría de Absorción Molecular UV-Visible (Ley de Beer-Lambert: $A = -\log(I/I_0) = \varepsilon \cdot b \cdot c$):** Mide glucosa, urea, creatinina, colesterol, transaminasas, bilirrubina y proteínas a longitudes de onda de $340\text{ a }800\text{ nm}$.
   - **Potenciometría con Electrodos Selectivos de Iones (ISE — Ecuación de Nernst):** Mide electrolitos séricos y urinarios (**$\text{Na}^+$ [membrana de vidrio/corona], $\text{K}^+$ [membrana de valinomicina], $\text{Cl}^-$, $\text{Ca}^{2+}$ iónico y $\text{pH}$**).
   - **Inmunoensayo por Quimioluminiscencia (CLIA) o Electroquimioluminiscencia (ECLIA):** Mide hormonas (TSH, T4), marcadores tumorales (PSA, CEA, CA-125), troponina cardíaca ultrasensible y serología infecciosa con sensibilidad de picogramos ($\text{pg/ml}$).
3. **Gasometría Arterial y Equilibrio Ácido-Base (Analizador de Gases en Sangre / *Point-of-Care*):**
   - Utiliza **3 electrodos electroquímicos clásicos (¡Pregunta fija de examen!)**:
     1. **Electrodo de $\text{pH}$ (Sanz / Vidrio):** Potenciométrico.
     2. **Electrodo de $\text{pCO}_2$ (Severinghaus):** Electrodo de $\text{pH}$ sumergido en una solución de bicarbonato sódico separada de la sangre por una membrana permeable al $\text{CO}_2$ gas (potenciométrico).
     3. **Electrodo de $\text{pO}_2$ (Clark):** **Amperométrico (polarográfico)**: cátodo de platino y ánodo de $\text{Ag/AgCl}$ polarizados a $-0,65\text{ V}$; el $\text{O}_2$ atraviesa una membrana de polipropileno y se reduce en el cátodo generando una corriente eléctrica directamente proporcional a la presión parcial de oxígeno ($\text{pO}_2$).
4. **Hematología y Coagulación:**
   - **Contadores Hematológicos / Citómetros de Flujo (Hemograma completo y fórmula leucocitaria de 5 poblaciones):**
     - **Principio Coulter (Impedancia eléctrica volumétrica):** Las células sanguíneas pasan de una en una por un microorificio con corriente constante; cada célula produce un pulso eléctrico cuyo **número indica el recuento celular** y cuya **amplitud es proporcional al volumen de la célula** (eritrocitos, plaquetas, VCM).
     - **Citometría de Flujo con Dispersión Óptica Láser (*Forward Scatter* [tamaño] + *Side Scatter* [complejidad interna/granularidad]) y Fluorescencia:** Clasifica las 5 subpoblaciones leucocitarias (neutrófilos, linfocitos, monocitos, eosinófilos, basófilos) y reticulocitos.
   - **Coagulómetros:** Miden el tiempo de formación del coágulo de fibrina (TP/INR, TTPA, fibrinógeno, dímero D) por método **coagulométrico óptico (turbidimetría)** o **mecánico (viscosidad electromagnética de bola de acero)**, más métodos cromogénicos e inmunológicos.
5. **Microbiología, Biología Molecular y Anatomía Patológica:**
   - **Termocicladores de PCR en Tiempo Real (qPCR / RT-PCR):** Ciclos térmicos rápidos con efecto Peltier (desnaturalización a $95\text{ }^\circ\text{C}$, hibridación/*annealing* a $55\text{–}60\text{ }^\circ\text{C}$ y extensión con Taq polimerasa a $72\text{ }^\circ\text{C}$) con lectura óptica de fluorescencia ciclo a ciclo (umbral $C_t$).
   - **Espectrometría de Masas MALDI-TOF:** Identificación bacteriana y fúngica en minutos por huella peptídica ribosomal.
   - **Cabinas de Seguridad Biológica (CSB — Norma `UNE-EN 12469` — ¡Pregunta fija de examen!):**
     - **Clase I:** Abierta frontalmente; protege al **operador y al ambiente**, pero **NO protege a la muestra/producto** (entra aire sin filtrar del laboratorio).
     - **Clase II (Tipo A2 o B2 — El estándar en laboratorios hospitalarios, Microbiología y Farmacia):** Cortina de **flujo laminar vertical con filtro HEPA/ULPA** que protege simultáneamente a **los 3 elementos: Operador + Producto/Muestra + Medio Ambiente** (en Tipo A2 el $70\%$ del aire recircula por HEPA y el $30\%$ se expulsa por HEPA).
     - **Clase III:** Cabina hermética totalmente cerrada en presión negativa con guantes integrados (*aislador*) para patógenos de **Nivel de Bioseguridad 4 (BSL-4)**.

---

## 4. Tema 27: Equipamiento de Rehabilitación y Fisioterapia

| Modalidad Física | Equipos y Parámetros Técnicos Exactos | Efectos Fisiológicos y Contraindicaciones de Examen |
| :--- | :--- | :--- |
| **1. Electroterapia de Baja Frecuencia ($0\text{ a }1.000\text{ Hz}$)** | • **Corriente Galvánica (Continua pura):** Flujo constante unidireccional.<br>• **TENS (*Estimulación Eléctrica Nerviosa Transcutánea*, $2\text{ a }150\text{ Hz}$):** Pulsos bifásicos asimétricos compensados (media cero sin efecto galvánico).<br>• **Corrientes de Trabert ($142\text{ Hz}$), Diadinámicas de Bernard ($50\text{ y }100\text{ Hz}$) y Exponenciales/Farádicas** (electroestimulación neuromuscular NMES). | • **Galvánica:** Efecto polar bajo los electrodos (ácido en ánodo $+$, básico/cáustico en cátodo $-$) utilizado para **Iontoforesis** (introducir fármacos ionizados a través de la piel colocando el fármaco bajo el electrodo de su mismo signo para que sea repelido hacia el tejido). Riesgo de **quemadura química**.<br>• **TENS:** Analgesia por la **Teoría de la Compuerta de Melzack y Wall (*Gate Control*, $80\text{–}100\text{ Hz}$)** o por liberación de endorfinas ($2\text{–}10\text{ Hz}$). |
| **2. Electroterapia de Media Frecuencia ($1.000\text{ a }10.000\text{ Hz}$)** | • **Corrientes Interferenciales de Nemec ($4.000\text{ Hz}$):** Se cruzan de forma tetrapolar dos circuitos de media frecuencia (ej. $4.000\text{ Hz}$ y $4.100\text{ Hz}$) que tienen muy baja impedancia cutánea.<br>• **Corrientes de Kotz (Corrientes Rusas a $2.500\text{ Hz}$ moduladas a $50\text{ Hz}$)**. | En el interior profundo del tejido las dos ondas interfieren produciendo una **frecuencia modulada de batido (AMF) de baja frecuencia ($1\text{ a }100\text{ Hz}$)** sin dolor cutáneo ni riesgo de quemadura química. |
| **3. Diatermia de Alta Frecuencia (Termoterapia Profunda — Radiofrecuencia y Microondas)** *(Tema 3 y Tema 27)* | • **Onda Corta:** Frecuencia ISM asignada de **$\mathbf{27,12\text{ MHz}}$** ($\lambda = 11\text{ m}$), por método **capacitivo** (placas/electrodos) o **inductivo** (bobina).<br>• **Microondas (Radaroterapia):** Frecuencia de **$\mathbf{2.450\text{ MHz}}$** ($\lambda = 12,2\text{ cm}$), emitida por un **magnetrón** con antena direccional.<br>• **Tecarterapia / Radiofrecuencia capacitiva-resistiva:** $0,45\text{ a }1\text{ MHz}$. | Calentamiento endógeno profundo ($3\text{–}5\text{ cm}$) en músculos y articulaciones (modo continuo = térmico; modo pulsado = atérmico antiinflamatorio).<br>• **¡Contraindicaciones absolutas de examen!** **Portadores de marcapasos/DAI**, **implantes metálicos u osteosíntesis** en la zona (se calientan intensamente quemando el tejido interno), **embarazo**, tumores malignos, epífisis de crecimiento en niños y ojos/testículos. |
| **4. Ultrasonoterapia y Ondas de Choque** | • **Ultrasonidos de Fisioterapia:** Frecuencias de **$1\text{ MHz}$** (profundo: hasta $4\text{–}5\text{ cm}$) y **$3\text{ MHz}$** (superficial: $1\text{–}2\text{ cm}$), intensidad de $0,5\text{ a }3\text{ W/cm}^2$ en modo continuo (térmico) o pulsado (mecánico/micromasaje).<br>• **Ondas de Choque Extracorpóreas (ESWT):** Radiales (neumáticas) o Focales (electrohidráulicas/piezoeléctricas/electromagnéticas) para tendinopatías calcificantes y fascitis plantar. | Requiere gel de contacto o aplicación subacuática y movimiento continuo del cabezal para evitar ondas estacionarias y quemaduras periósticas. |
| **5. Laserterapia, Magnetoterapia y Mecanoterapia/Robótica** | • **Láser de Baja/Media Potencia (LLLT / Fotobiomodulación):** $\text{He-Ne}$ ($632,8\text{ nm}$), $\text{GaAs}$ ($904\text{ nm}$) o $\text{GaAlAs}$ ($780\text{–}830\text{ nm}$) y Láser de Alta Potencia ($\text{Nd:YAG}$). Clasificación de seguridad láser **Clase 3B o Clase 4** (`UNE-EN 60825-1`, obligatorio gafas de protección con densidad óptica específica para la longitud de onda $\lambda$).<br>• **Magnetoterapia (ELF):** Bobinas solenoides de baja frecuencia ($1\text{ a }100\text{ Hz}$) e intensidad de $1\text{ a }100\text{ Gauss}$ para estimular la **consolidación de fracturas óseas y pseudoartrosis** (por efecto piezoeléctrico óseo, **permitida incluso con escayola o placas de osteosíntesis no ferromagnéticas**).<br>• **Mecanoterapia y Robótica de Rehabilitación:** Movilizadores pasivos continuos (**CPM** de rodilla/hombro), grúas de bipedestación y **exoesqueletos robóticos de marcha (*Lokomat*)**. | — |

---

## 5. Tema 57, Tema 29 y Tema 34: Farmacia Hospitalaria, Equipamiento de Hospitalización/Movilización e Impresión 3D Sanitaria

### 5.1. Tema 57: Equipamiento de Farmacia Hospitalaria y Sistemas Automatizados de Dispensación
1. **Salas Blancas de Elaboración de Medicamentos Estériles y Citostáticos (Norma GMP / Guía de Buenas Prácticas del Ministerio de Sanidad):**
   - **Preparación de Nutrición Parenteral y Mezclas Intravenosas No Peligrosas:** Se realiza en **Campana de Flujo Laminar Horizontal o Vertical (Grado A / ISO 5)** dentro de un entorno limpio **Grado B o C con Presión POSITIVA** (para proteger la esterilidad del preparado).
   - **Preparación de Medicamentos Peligrosos (Citostáticos / Quimioterapia antineoplásica — ¡Pregunta fija de examen!):** Se realiza obligatoriamente en una **Cabina de Seguridad Biológica Clase II Tipo B2 (100% de extracción al exterior sin recirculación) o Clase III (Aislador)**, situada dentro de una sala limpia **Grado B con PRESIÓN NEGATIVA respecto a la esclusa** (para evitar que los vapores o aerosoles citotóxicos salgan al servicio de farmacia y protegiendo simultáneamente la esterilidad del fármaco y la salud del trabajador), o bien mediante **robots de preparación intravenosa de citostáticos (*APOTECAchemo*, *Kiro Oncology*)** con control gravimétrico y visión artificial.
2. **Automatización de Almacenamiento, Reenvasado y Dispensación (Trazabilidad en el SERGAS con `SILICON`):**
   - **Carruseles Horizontales y Verticales Robotizados ( Farmacia Central):** Almacenamiento de alta densidad guiado por software (*pick-to-light*) conectado al sistema de gestión farmacoterapéutica del SERGAS (**SILICON**).
   - **Robots de Almacén de Cajas (tipo *Rowa* / *Apostore*) y Reenvasadoras Automáticas de Dosis Unitaria:** Reenvasan comprimidos/blísteres en **unidosis individuales con código DataMatrix** (lote, caducidad, principio activo) para los carros de **Sistema de Distribución de Medicamentos en Dosis Unitaria (SDMDU)**.
   - **Sistemas Automatizados de Dispensación (SAD / *Pyxis*, *Omnicell*) en Unidades de Hospitalización, Urgencias, UCI y Quirófanos:** Armarios inteligentes descentralizados con acceso por huella biométrica o tarjeta profesional e **integrados con la prescripción electrónica de IANUS/SILICON**: solo abren el cajetín del medicamento pautado para ese paciente concreto, registran automáticamente el consumo, controlan estupefacientes y lanzan el pedido de reposición a Farmacia.
   - **Cadena de Frío de Medicamentos Termolábiles ($+2\text{ }^\circ\text{C a }+8\text{ }^\circ\text{C}$):** Cámaras frigoríficas farmacéuticas con sondas PT100 calibradas y monitorización continua en red 24/7 con alarmas SMS/correo.

### 5.2. Tema 29: Equipamiento de Pacientes: Hospitalización y Movilización
1. **Camas Hospitalarias Eléctricas Articuladas (`UNE-EN 60601-2-52`):**
   - Somier de **4 planos (3 articulaciones)** accionado por actuadores lineales eléctricos (protección IPX4/IPX6 frente a lavado, batería de respaldo): elevación en altura variable ($35\text{–}80\text{ cm}$ para prevención de caídas y ergonomía del personal), respaldo (Fowler), tramo femoral y vascular (piernas), **Trendelenburg / Anti-Trendelenburg** y **palanca mecánica rápida de posición de RCP (pone el respaldo a $0^\circ$ instantáneamente)**.
   - En camas de **UCI**: incorporan **báscula electrónica integrada** de 4 células de carga (para balance hídrico diario), **lateralización continua rotacional** ($20\text{–}30^\circ$ para fisioterapia respiratoria y prevención de atelectasias) y tablero radiotransparente.
2. **Superficies Especiales para el Manejo de la Presión (SEMP — Prevención de Úlceras por Presión [UPP]):**
   - **Estáticas:** Colchones viscoelásticos de espuma de alta densidad.
   - **Dinámicas (Activas):** **Colchones de aire de presión alternante motorizados** con compresor silencioso que infla y desinfla secuencialmente las celdas impares y pares cada $5\text{–}10\text{ min}$, garantizando que ningún punto de apoyo óseo (sacro, talones, trocánteres) supere la **presión de cierre capilar ($\approx 32\text{ mmHg}$)** de forma sostenida.
3. **Equipamiento de Movilización y Transferencia de Pacientes (Prevención de trastornos musculoesqueléticos según `ISO 10535`):**
   - **Grúas de movilización pasiva (de suelo o de raíles de techo)** con arnés de suspensión y **grúas de bipedestación/cambiapañales** (activas para pacientes con tono parcial).
   - **Transfer de rodillos (*rollboard*) y colchones de transferencia por colchón de aire (*HoverMatt*)** para pasar al paciente de la cama a la mesa quirúrgica o al TC sin esfuerzo lumbar.

### 5.3. Tema 34: Impresión 3D (Fabricación Aditiva) en el Ámbito Sanitario (`ISO/ASTM 52900`)
1. **Flujo de Trabajo Digital Completo (*Point-of-Care 3D Printing* en el Hospital):**
   $$\text{1. Adquisición Imagen (TC corte fino }\le 1\text{ mm / RM en DICOM)} \longrightarrow \text{2. Segmentación Anatómica (Umbralizado UH / IA)} \longrightarrow \text{3. Mallado 3D y Diseño CAD (archivos .STL / .OBJ / .3MF)} \longrightarrow \text{4. Laminado (Slicing -> G-Code)} \longrightarrow \text{5. Impresión 3D, Posprocesado y Esterilización}$$
2. **Las 4 Tecnologías Principales de Impresión 3D en Medicina (¡Muy preguntadas!):**
   - **FDM / FFF (*Modelado por Deposición Fundida*):** Extrusión de filamento termoplástico fundido (**PLA, ABS, PETG, TPU flexible o PEEK implantable de grado médico**). Económica; usada para **biomodelos anatómicos básicos de planificación prequirúrgica y ortesis externas**.
   - **SLA / DLP / MSLA (*Estereolitografía y Fotopolimerización en Cuba*):** Un láser UV ($355\text{–}405\text{ nm}$) o proyector digital solidifica capa a capa **resinas líquidas fotopolimerizables biocompatibles (Clase I / Clase IIa certificadas `ISO 10993` y esterilizables en autoclave)**. Es la tecnología estándar en hospitales para **Guías Quirúrgicas de corte y perforación personalizadas** (cirugía maxilofacial, ortopedia, implantes dentales) y biomodelos de alta precisión.
   - **SLS (*Sinterizado Selectivo por Láser*) y MJF (*Multi Jet Fusion*):** Un láser sinteriza polvo de **poliamida (Nylon PA12) o PEEK** sin necesidad de estructuras de soporte. Ideal para **prótesis externas definitivas, corsés ortopédicos y modelos funcionales**.
   - **SLM / DMLS / EBM (*Fusión Selectiva por Láser o por Haz de Electrones en Lecho de Polvo Metálico*):** Funde polvo de **Titanio médico ($\text{Ti-6Al-4V}$ ELI) o Cromo-Cobalto** creando **implantes definitivos a medida con estructuras trabeculares porosas** que imitan el hueso esponjoso y favorecen la osteointegración (reconstrucciones craneales, mandibulares, cotilos acetabulares complejos y cajas vertebrales).
   - **Bioimpresión 3D (*Bioprinting*):** Extrusión o *inkjet* de **biotintas (*bioinks*: hidrogeles de alginato, colágeno o ácido hialurónico cargados con células vivas del paciente)** para ingeniería tisular y medicina regenerativa.
3. **Regulación Legal de la Impresión 3D en Hospitales (`MDR 2017/745` y `Art. 9 del RD 192/2023`):**
   - Un **biomodelo anatómico** usado para tomar decisiones diagnósticas/quirúrgicas o una **guía quirúrgica de corte** que entra en contacto con el hueso durante la cirugía **SON PRODUCTOS SANITARIOS** (el software de segmentación/planificación es **Clase IIa / IIb por Regla 11**, y la guía quirúrgica invasiva pasajera es **Clase IIa por Regla 6**).
   - Si el hospital los fabrica para sus propios pacientes, se acoge al régimen de **Fabricación *In-House* (Art. 5.5 MDR y Art. 9 RD 192/2023)** (comunicación a la AEMPS, sistema de calidad `ISO 13485` y prohibición de venta a terceros) o bien a **Licencia de Fabricante de Productos a Medida**.
