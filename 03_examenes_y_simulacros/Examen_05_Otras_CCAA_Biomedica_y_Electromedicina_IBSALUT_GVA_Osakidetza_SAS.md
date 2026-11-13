# Examen 05: Preguntas Oficiales y Adaptadas de Otras CCAA (IB-SALUT, GVA, Osakidetza y SAS)

> **Fuente y alcance**: Recopilación de **30 preguntas tipo test de alto rendimiento** (preguntas 104 a 133 del banco global) y **3 casos prácticos integrales** (casos 10 a 12) extraídos y adaptados de los procesos selectivos y baterías oficiales de:
> - **Illes Balears (IB-SALUT)**: *Ingeniero/a Superior — Especificidad Biomedicina* (`SSCC 2026-1`, `BOIB n.º 67 de 28/05/2026`, examen celebrado en verano de 2026).
> - **Comunitat Valenciana (Conselleria de Sanitat — GVA)**: *Cuerpo Superior Técnico de Ingeniería Biomédica `A1-S05-04`* (`Cód. 3206`, `DOGV 2026`) e *Ingeniero/a de Aplicaciones y Sistemas de Electromedicina*.
> - **País Vasco (Osakidetza)**: Batería oficial de preguntas de *Técnico/a Especialista en Instalaciones de Electromedicina* (`OPE 2023-2024-2025`, `BOPV n.º 101 de 01/06/2026`).
> - **Andalucía (Servicio Andaluz de Salud — SAS)**: Exámenes oficiales de *Técnico/a Especialista en Electromedicina* (`OEP 2021-2025`, `BOJA`).

---

## Parte I: Cuestionario Tipo Test (30 Preguntas con Cruce al Temario SERGAS)

### Pregunta 104 — [T31 / T49] (Específico — Seguridad Eléctrica e Instalaciones (Osakidetza / SAS))
**[Osakidetza / SAS] Según la instrucción técnica complementaria ITC-BT-38 del REBT para instalaciones eléctricas en quirófanos y salas de intervención, ¿cuál es el valor máximo permitido para la diferencia de potencial entre las partes metálicas accesibles y el embarrado de equipotencialidad (EE) en condiciones normales?**

- **A)** 10 mV eficaces en corriente alterna o continua.
- **B)** 24 V eficaces en ambientes secos y 12 V en húmedos.
- **C)** 50 mV eficaces.
- **D)** 100 mV eficaces.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **A**
- **Explicación**: La ITC-BT-38 exige una red de equipotencialidad suplementaria en quirófanos y salas de intervención (locales de Grupo 2) tal que la diferencia de potencial entre cualquier parte metálica accesible y el embarrado de equipotencialidad (EE) no supere los 10 mV eficaces en condiciones normales, con una resistencia máxima de los conductores de equipotencialidad de 0,1 ohmios (o 0,2 ohmios incluyendo las uniones).
</details>

---

### Pregunta 105 — [T31] (Específico — Seguridad Eléctrica e Instalaciones (Osakidetza / SAS))
**[Osakidetza / SAS] En el sistema de alimentación eléctrica mediante transformador de aislamiento (esquema IT médico) exigido por la ITC-BT-38 en un quirófano, el vigilador permanente de aislamiento (VPA) debe activar una alarma óptica y acústica cuando la resistencia de aislamiento descienda por debajo de:**

- **A)** 5 kOhmios.
- **B)** 50 kOhmios.
- **C)** 500 kOhmios.
- **D)** 1 MOhmio.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **B**
- **Explicación**: Conforme a la ITC-BT-38 y la norma UNE-EN 61557-8, el dispositivo vigilador permanente de aislamiento (VPA) de un esquema IT médico debe señalizar el primer defecto de aislamiento cuando la resistencia de aislamiento entre cualquier fase y tierra caiga por debajo de 50 kOhmios (sin cortar el suministro en el primer defecto para no interrumpir el acto quirúrgico).
</details>

---

### Pregunta 106 — [T49] (Específico — Seguridad Eléctrica de Equipos Electromédicos (SAS / Osakidetza))
**[SAS / Osakidetza] De acuerdo con la norma UNE-EN 60601-1, un equipo electromédico cuya parte aplicable está aislada eléctricamente de tierra (flotante) y es apta para aplicación cardíaca directa (conductores intravasculares o intracardíacos) se clasifica e identifica con el símbolo de:**

- **A)** Tipo B.
- **B)** Tipo BF.
- **C)** Tipo CF.
- **D)** Clase II con tierra funcional.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **C**
- **Explicación**: En la norma UNE-EN 60601-1, las partes aplicables Tipo CF (Cardiac Floating) son las únicas homologadas para contacto eléctrico directo con el corazón, exigiendo los límites más estrictos de corriente de fuga de paciente y corriente auxiliar de paciente (<= 10 uA en condición normal y <= 50 uA en condición de primer defecto en CA).
</details>

---

### Pregunta 107 — [T49 / T40] (Específico — Ensayos Recurrentes de Seguridad Eléctrica (SAS / IB-SALUT))
**[SAS / IB-SALUT] Cuando el Servicio de Ingeniería Biomédica realiza la verificación periódica de seguridad eléctrica tras una reparación en el hospital (in-house), ¿qué norma internacional regula específicamente los ensayos recurrentes y posreparación, y cuál es el límite máximo de resistencia del conductor de tierra de protección para un equipo con cable de red separable de hasta 3 m?**

- **A)** UNE-EN 62353; límite máximo de 0,3 ohmios (equipo + cable de alimentación).
- **B)** UNE-EN 60601-1-2; límite máximo de 1,0 ohmio.
- **C)** ISO 14971; límite máximo de 0,05 ohmios.
- **D)** UNE-EN 62304; límite máximo de 0,5 ohmios.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **A**
- **Explicación**: La norma UNE-EN 62353 regula los ensayos recurrentes y después de la reparación del equipamiento electromédico (evitando ensayos destructivos de rigidez dieléctrica de fábrica de la 60601-1). Establece una resistencia máxima de tierra de protección de 0,1 ohmios para el cable de red, 0,2 ohmios para el chasis del equipo sin cable, y 0,3 ohmios para el conjunto completo (equipo + cable de alimentación).
</details>

---

### Pregunta 108 — [T13 / T14] (Específico — Instrumentación y Monitorización Fisiológica (Osakidetza))
**[Osakidetza] En un electrocardiógrafo (ECG) de 12 derivaciones, ¿cómo se forma el terminal central de Wilson (V_W) que sirve como potencial de referencia para las derivaciones precordiales unipolares (V1 a V6)?**

- **A)** Conectando directamente el electrodo de la pierna derecha (RL) a la entrada inversora del amplificador.
- **B)** Promediando los potenciales de los electrodos de brazo derecho (RA), brazo izquierdo (LA) y pierna izquierda (LL) a través de tres resistencias iguales (típicamente >= 5 kOhmios).
- **C)** Restando el potencial de brazo izquierdo (LA) menos el potencial de brazo derecho (RA).
- **D)** Promediando únicamente RA y LA para obtener la derivación aVF.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **B**
- **Explicación**: El terminal central de Wilson (CTW) se obtiene uniendo los tres electrodos de los miembros activos (RA, LA y LL) mediante tres resistencias idénticas a un nodo común, cuyo potencial representa el promedio de los tres vértices del triángulo de Einthoven: V_W = (Phi_RA + Phi_LA + Phi_LL) / 3. Las derivaciones aumentadas de Goldberger (aVR, aVL, aVF) desconectan la resistencia del propio miembro medido para incrementar la amplitud un 50 %.
</details>

---

### Pregunta 109 — [T13 / T14] (Específico — Instrumentación y Bioseñales (Osakidetza / GVA))
**[Osakidetza / GVA] ¿Cuál es el ancho de banda estándar diagnóstico (modo filtro diagnóstico) exigido por la norma IEC 60601-2-25 para un electrocardiógrafo clínico con el fin de evitar tanto la deriva de línea base como la distorsión del segmento ST?**

- **A)** 0,05 Hz a 150 Hz.
- **B)** 0,5 Hz a 40 Hz.
- **C)** 1 Hz a 35 Hz.
- **D)** 20 Hz a 500 Hz.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **A**
- **Explicación**: En electrocardiografía diagnóstica (IEC 60601-2-25), la banda pasante debe extenderse desde 0,05 Hz (corte paso alto para no distorsionar la repolarización lenta del segmento ST y la onda T) hasta al menos 150 Hz (corte paso bajo para preservar la morfología de los complejos QRS estrechos y espículas). El modo monitorización en UCI reduce el ancho de banda a 0,5–40 Hz para minimizar artefactos de movimiento y ruido muscular (EMG).
</details>

---

### Pregunta 110 — [T15] (Específico — Monitorización Multiparamétrica (Osakidetza / SAS))
**[Osakidetza / SAS] El principio físico de funcionamiento de un pulsioxímetro convencional para la determinación no invasiva de la saturación arterial de oxígeno (SpO2) se basa en la ley de Beer-Lambert utilizando dos longitudes de onda específicas emitidas por diodos LED:**

- **A)** Luz ultravioleta (380 nm) y luz azul (450 nm).
- **B)** Luz roja (aprox. 660 nm, donde absorbe más la hemoglobina reducida Hb) y luz infrarroja cercana (aprox. 940 nm, donde absorbe más la oxihemoglobina HbO2).
- **C)** Dos haces infrarrojos de 4.260 nm para medir la absorción del CO2.
- **D)** Ultrasonidos de 2 MHz basados en el efecto Doppler.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **B**
- **Explicación**: La pulsioximetría mide el cociente de absorbancias pulsátiles (AC/DC) en dos longitudes de onda: rojo (~660 nm, mayor coeficiente de extinción molar para la desoxihemoglobina Hb) e infrarrojo cercano (~940 nm, mayor absorción por la oxihemoglobina HbO2). Un cociente R = (AC_660/DC_660)/(AC_940/DC_940) igual a 1,0 se corresponde empíricamente con una SpO2 aproximada del 85 %.
</details>

---

### Pregunta 111 — [T16] (Específico — Monitorización Hemodinámica (Osakidetza / SAS))
**[Osakidetza / SAS] En los monitores automáticos de presión arterial no invasiva (PANI / NIBP) basados en el método oscilométrico, ¿qué parámetro mide de forma directa el algoritmo a partir del punto de máxima amplitud de las oscilaciones de presión en el manguito?**

- **A)** La presión arterial sistólica (PAS).
- **B)** La presión arterial diastólica (PAD).
- **C)** La presión arterial media (PAM), estimándose la sistólica y diastólica mediante razones de amplitud fraccionaria propias del fabricante.
- **D)** La presión venosa central (PVC).

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **C**
- **Explicación**: El método oscilométrico no utiliza micrófono de Korotkoff; registra la envolvente de oscilaciones de presión pulsatil transmitidas por la arteria al manguito durante el desinflado. El punto donde la envolvente de oscilación alcanza su amplitud máxima corresponde físicamente a la Presión Arterial Media (PAM), mientras que PAS y PAD se calculan algorítmicamente en los puntos donde la amplitud cae a un porcentaje determinado del máximo.
</details>

---

### Pregunta 112 — [T17] (Específico — Capnografía y Monitorización Respiratoria (Osakidetza))
**[Osakidetza] En un capnógrafo clínico por espectroscopía de absorción infrarroja no dispersiva (NDIR), ¿cuál es la diferencia operativa fundamental entre un sensor de flujo principal (Mainstream) y uno de flujo lateral (Sidestream)?**

- **A)** El sensor Mainstream se intercala directamente en la tubuladura del circuito del paciente (menor tiempo de respuesta, sin línea de muestreo aspirativa), mientras que el Sidestream aspira continuamente una muestra de gas (50-200 ml/min) hacia una celda de medida interna.
- **B)** El sensor Mainstream solo puede utilizarse en pacientes no intubados y el Sidestream solo en intubados.
- **C)** El sensor Sidestream utiliza espectrometría de masas y el Mainstream utiliza electrodos de Clark.
- **D)** El sensor Mainstream presenta un retardo de tránsito superior a 5 segundos.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **A**
- **Explicación**: El capnógrafo Mainstream sitúa la cubeta óptica con el emisor/detector IR (banda de absorción del CO2 a 4,26 um) directamente en el conector en Y del tubo endotraqueal, ofreciendo respuesta instantánea sin consumo de gas pero añadiendo peso y espacio muerto. El Sidestream aspira una fracción del gas espirado mediante una bomba a través de un tubo capilar (Nafion), lo que permite usarlo también en pacientes no intubados pero introduce un tiempo de retardo de tránsito y riesgo de obstrucción por condensación o secreciones.
</details>

---

### Pregunta 113 — [T23 / T24] (Específico — Ventilación Mecánica y Anestesia (Osakidetza / SAS))
**[Osakidetza / SAS] En una máquina de anestesia con circuito circular semicerrado, ¿cuál es la función de la cal sodada contenida en el cánister absorbedor y cuál es su componente principal?**

- **A)** Absorber el exceso de vapor de sevoflurano mediante carbón activo.
- **B)** Neutralizar el dióxido de carbono (CO2) exhalado por el paciente mediante una reacción exotérmica con hidróxido de calcio Ca(OH)2 (75-80 %), permitiendo la reinhalación de los gases frescos y anestésicos.
- **C)** Secar completamente el gas inspirado eliminando toda la humedad antes de llegar al pulmón.
- **D)** Generar óxido nitroso (N2O) a partir de nitrógeno ambiental.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **B**
- **Explicación**: En los circuitos circulares de anestesia, la cal sodada (compuesta mayoritariamente por un ~80 % de hidróxido de calcio Ca(OH)2, un ~15 % de agua, un 1-4 % de NaOH/KOH como activadores y un indicador de pH como violeta de etilo) retiene el CO2 espirado formando carbonato cálcico (CaCO3), agua y calor. Esto evita la hipercapnia por reinhalación y permite trabajar con bajos flujos de gas fresco.
</details>

---

### Pregunta 114 — [T21] (Específico — Electrocirugía y Bisturí Eléctrico (Osakidetza / SAS))
**[Osakidetza / SAS] En una unidad de electrocirugía de alta frecuencia (bisturí eléctrico), ¿por qué se emplean corrientes alternas en el rango de radiofrecuencia (típicamente entre 300 kHz y 3 MHz) y qué función cumple el sistema REM/CQM en la placa neutra de paciente?**

- **A)** Para estimular la contracción muscular; el sistema REM mide la temperatura rectal.
- **B)** Para evitar la estimulación neuromuscular (efecto farádico) y la fibrilación ventricular; el sistema REM/CQM monitoriza la impedancia de contacto entre las dos mitades de una placa neutra partida (split-pad) para prevenir quemaduras térmicas si se despega.
- **C)** Para reducir el efecto pelicular; el sistema REM inyecta suero salino frío.
- **D)** Porque a frecuencias inferiores a 300 kHz no se cumple la ley de Joule.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **B**
- **Explicación**: Por encima de 100 kHz (típicamente 300 kHz – 5 MHz según IEC 60601-2-2), las membranas excitables de nervios y miocardio no pueden seguir las inversiones de polaridad (desaparece el efecto farádico), produciéndose únicamente calentamiento por efecto Joule (Q = I^2·R·t). El sistema REM (Return Electrode Monitoring) inyecta una pequeña corriente de interrogación entre las dos zonas conductoras de una placa neutra partida; si la impedancia sale del rango seguro (p. ej. 5–135 ohmios o aumenta > 40 % por despegamiento parcial), inhibe el generador evitando quemaduras por alta densidad de corriente.
</details>

---

### Pregunta 115 — [T20] (Específico — Desfibrilación y Cardioversión (Osakidetza / SAS))
**[Osakidetza / SAS] Al realizar una cardioversión eléctrica en un paciente con taquicardia ventricular con pulso o fibrilación auricular mediante un desfibrilador bifásico, ¿en qué fase del ciclo cardíaco debe activarse obligatoriamente el modo SINCRONIZADO (SYNC) y por qué?**

- **A)** Sobre el pico de la onda T, para aprovechar el período refractario relativo.
- **B)** Sobre el complejo QRS (onda R), para evitar descargar durante el período vulnerable de repolarización ventricular (onda T) e inducir una fibrilación ventricular (fenómeno R sobre T).
- **C)** Sobre la onda P, para despolarizar únicamente el nodo sinusal.
- **D)** En cualquier instante del segmento PR.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **B**
- **Explicación**: En la cardioversión eléctrica sincronizada, el desfibrilador detecta la onda R del complejo QRS y sincroniza la descarga dentro de los primeros 20–60 ms de dicha onda. Si la descarga cayera sobre la rama ascendente o el pico de la onda T (período vulnerable ventricular), desencadenaría una fibrilación ventricular iatrogénica (fenómeno R sobre T).
</details>

---

### Pregunta 116 — [T26] (Específico — Hemodiálisis y Tratamiento de Agua (Osakidetza / SAS))
**[Osakidetza / SAS] En un monitor de hemodiálisis y su planta de tratamiento de agua asociada según las normas ISO 23500 / UNE 111301, ¿cuál es el rango normal de conductividad final del líquido de diálisis (dializado) antes de entrar al dializador y qué alarma de seguridad actúa si se sale de límites?**

- **A)** Entre 13,0 y 15,0 mS/cm (típicamente ~14 mS/cm); si se desvía fuera de los límites de seguridad (p. ej. +/- 5 %), el monitor activa el modo Bypass derivando el líquido a drenaje para evitar hemólisis o síndrome de desequilibrio osmótico.
- **B)** Menos de 0,1 uS/cm en el dializado final tras mezclar los concentrados ácido y bicarbonato.
- **C)** Entre 100 y 200 mS/cm.
- **D)** Exactamente 1,0 mS/cm.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **A**
- **Explicación**: Mientras que el agua purificada de ósmosis inversa debe tener una conductividad muy baja (típicamente < 5–10 uS/cm), el líquido de diálisis final (tras el sistema proporcional que mezcla ~34 partes de agua ultrapura con 1 parte de concentrado ácido y ~1,8 partes de bicarbonato) tiene una concentración electrolítica fisiológica (~138-140 mEq/L de Na+) que se traduce en una conductividad de 13,5 a 14,5 mS/cm. Una célula de conductividad redundante abre la válvula de Bypass hacia desagüe si la mezcla es hipoosmolar (riesgo de hemólisis masiva) o hiperosmolar.
</details>

---

### Pregunta 117 — [T55 / T56] (Específico — Radiología Convencional y Tubos de Rayos X (Osakidetza / SAS))
**[Osakidetza / SAS] En un tubo de rayos X de ánodo rotatorio, ¿en qué consiste el 'efecto talón' (heel effect) y cómo debe orientarse el tubo en estudios de espesor anatómico desigual (como columna dorsal o fémur)?**

- **A)** La intensidad del haz de rayos X es menor en el lado del ánodo debido a la autoabsorción de fotones en el bisel de tungsteno; por ello, el lado del CÁTODO (mayor intensidad) debe orientarse hacia la parte anatómica de MAYOR espesor.
- **B)** La intensidad del haz es mayor en el lado del ánodo; el ánodo debe colocarse hacia la parte más gruesa del paciente.
- **C)** Es el calentamiento del filamento del cátodo por efecto Edison.
- **D)** Es la dispersión Compton producida en la rejilla antidifusora Potter-Bucky.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **A**
- **Explicación**: Debido a la inclinación del blanco anódico (ángulo anódico de 7° a 17°), los rayos X emitidos en dirección hacia el lado del ánodo deben atravesar un mayor espesor del propio material del blanco (tungsteno-renio), sufriendo mayor atenuación (efecto talón anódico). En consecuencia, la intensidad del haz es hasta un 25-40 % superior en el lado del cátodo (aunque el foco efectivo es menor en el lado del ánodo), por lo que el cátodo se coloca hacia la región anatómica más densa o gruesa.
</details>

---

### Pregunta 118 — [T58] (Específico — Tomografía Computarizada (Osakidetza / GVA))
**[Osakidetza / GVA] En un equipo de Tomografía Computarizada (TC) helicoidal multicorte, si el colimador total del haz en el isocentro es de 40 mm (64 coronas de 0,625 mm) y la mesa avanza 60 mm por cada rotación completa de 360° del tubo, ¿cuál es el factor de paso (Pitch) y qué efecto tiene sobre la dosis y la resolución espacial longitudinal?**

- **A)** Pitch = 1,5; las hélices están separadas sin solapamiento, lo que reduce la dosis al paciente y acorta el tiempo de barrido a costa de ensanchar el perfil de sensibilidad de corte (menor resolución en el eje Z).
- **B)** Pitch = 0,67; existe solapamiento del haz y aumenta la dosis.
- **C)** Pitch = 2,4; el estudio no es reconstruible.
- **D)** Pitch = 1,0; barrido contiguo sin huecos ni solapamientos.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **A**
- **Explicación**: El factor de desplazamiento o Pitch en TC multicorte se define como el cociente entre el avance de mesa por rotación (I = 60 mm) y el espesor total de colimación del haz en el isocentro (W = N x T = 64 x 0,625 mm = 40 mm): Pitch = 60 / 40 = 1,5. Un Pitch > 1 implica estiramiento de la hélice, disminuyendo el CTDIvol (CTDIvol = CTDIw / Pitch) y la dosis recibida.
</details>

---

### Pregunta 119 — [T60] (Específico — Resonancia Magnética y Criogenia (Osakidetza / IB-SALUT))
**[Osakidetza / IB-SALUT] En un equipo de Resonancia Magnética (RM) con imán superconductor de 1,5 T o 3,0 T refrigerado por helio líquido a 4,2 K, ¿qué ocurre durante un evento de 'Quench' y qué requisito crítico de ingeniería debe cumplir la sala del imán?**

- **A)** El helio líquido pasa súbitamente a estado gaseoso expandiendo su volumen unas 700-760 veces al perderse la superconductividad de la bobina de NbTi; requiere un tubo de Quench (venteo al exterior) dimensionado y un sensor de oxigenación (oxímetro ambiental) con extracción de emergencia por riesgo de asfixia.
- **B)** Se rompe la jaula de Faraday de cobre entrando radiofrecuencia externa.
- **C)** Aumenta la frecuencia de Larmor de 63,87 MHz a 300 MHz.
- **D)** El helio líquido se solidifica dentro del criostato sin variar la presión.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **A**
- **Explicación**: Un Quench es la pérdida abrupta del estado superconductor del devanado de Niobio-Titanio (NbTi), disipando la energía magnética almacenada en forma de calor por efecto Joule y provocando la ebullición masiva del helio líquido (4,2 K). Dado que 1 litro de helio líquido se expande a ~750 litros de gas frío, debe evacuarse al exterior mediante el tubo de Quench. Si fallase el disco de ruptura o el conducto hacia la sala, desplazaría el oxígeno causando asfixia e hipotermia.
</details>

---

### Pregunta 120 — [T59] (Específico — Ecografía y Ultrasonidos (Osakidetza / SAS))
**[Osakidetza / SAS] En un ecógrafo clínico, ¿cuál es la relación entre la frecuencia central del transductor piezoeléctrico (p. ej. sonda lineal de 12 MHz frente a sonda convex de 3,5 MHz), la resolución axial y la profundidad de penetración en los tejidos blandos?**

- **A)** A mayor frecuencia (12 MHz), menor longitud de onda y MEJOR resolución axial, pero MAYOR atenuación ultrasónica (aprox. 0,5-0,7 dB/cm·MHz) y por tanto MENOR profundidad de penetración.
- **B)** A mayor frecuencia (12 MHz), mayor profundidad de penetración y peor resolución axial.
- **C)** La resolución axial no depende de la frecuencia ni de la longitud espacial del pulso (SPL).
- **D)** Las sondas de 12 MHz se emplean para ecografía abdominal profunda en pacientes obesos.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **A**
- **Explicación**: La resolución axial en ecografía es igual a la mitad de la longitud espacial del pulso (SPL / 2 = N · lambda / 2). Al aumentar la frecuencia f (con c ≈ 1.540 m/s en tejidos blandos), disminuye la longitud de onda lambda = c / f y mejora la resolución axial. Sin embargo, la atenuación acústica en tejido blando crece linealmente con la frecuencia (~0,5 dB/cm/MHz), limitando las sondas de alta frecuencia (10-15 MHz) a estructuras superficiales (tiroides, mama, vascular) y requiriendo 2,5-5 MHz para abdomen profundo.
</details>

---

### Pregunta 121 — [T01 / T48 / T50] (Específico — Regulación Europea de Productos Sanitarios (IB-SALUT / GVA))
**[IB-SALUT / GVA] Según la Regla 11 del Anexo VIII del Reglamento (UE) 2017/745 (MDR), un software que funciona como producto sanitario (SaMD) destinado a proporcionar información que se utiliza para tomar decisiones con fines diagnósticos o terapéuticos se clasifica como mínimo en:**

- **A)** Clase I (autocertificación del fabricante sin Organismo Notificado).
- **B)** Clase IIa, salvo que tales decisiones puedan causar la muerte o un deterioro irreversible del estado de salud (Clase III) o un deterioro grave o intervención quirúrgica (Clase IIb).
- **C)** Exento del Reglamento MDR por no tener soporte físico.
- **D)** Siempre Clase III independientemente de su finalidad prevista.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **B**
- **Explicación**: La Regla 11 del Anexo VIII del MDR 2017/745 introdujo una clasificación específica mucho más rigurosa para el software médico (SaMD): por defecto, todo software destinado a aportar información para decisiones diagnósticas o terapéuticas, o a monitorizar procesos fisiológicos, es al menos Clase IIa (requiriendo evaluación de Organismo Notificado), escalando a Clase IIb si puede causar deterioro grave de la salud o si monitoriza parámetros vitales cuya variación suponga peligro inmediato, y a Clase III si puede causar la muerte o deterioro irreversible.
</details>

---

### Pregunta 122 — [T01 / T48 / T51] (Específico — Normativa Nacional de Productos Sanitarios (IB-SALUT / GVA))
**[IB-SALUT / GVA] Conforme al artículo 9 del Real Decreto 192/2023 por el que se regulan los productos sanitarios en España, la fabricación 'in house' de productos sanitarios por parte de hospitales para su uso exclusivo en el propio centro:**

- **A)** Está permitida libremente para cualquier producto Clase III e implantable sin comunicación previa.
- **B)** Exige comunicación previa a la AEMPS, sistema de gestión de calidad apropiado, justificación de que las necesidades del grupo de pacientes no pueden satisfacerse con un producto equivalente comercializado con marcado CE, y está prohibida para los productos Clase III (que requieren autorización expresa) o a escala industrial.
- **C)** Permite vender los productos fabricados a otros hospitales privados de la misma provincia.
- **D)** No requiere documentación técnica ni vigilancia poscomercialización.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **B**
- **Explicación**: El art. 5.5 del MDR 2017/745 desarrollado por el art. 9 del RD 192/2023 regula la fabricación 'in house' en centros sanitarios (p. ej. impresión 3D hospitalaria o desarrollos propios de Ingeniería Biomédica): prohíbe su transferencia a otra entidad jurídica, prohíbe la fabricación a escala industrial, exige declaración pública y sistema de calidad, restringe la fabricación a Clase I, IIa y IIb mediante comunicación previa a la AEMPS, y exige autorización previa expresa de la AEMPS para Clase III.
</details>

---

### Pregunta 123 — [T05 / T06 / T07] (Específico — Interoperabilidad Clínica e Imagen Médica (IB-SALUT / GVA))
**[IB-SALUT / GVA] En un flujo de trabajo radiológico integrado según el perfil IHE Scheduled Workflow (SWF), ¿qué servicio DICOM utiliza la modalidad de adquisición (p. ej. un TC o ecógrafo) para descargar automáticamente del RIS la lista de pacientes citados con sus datos demográficos y el identificador del estudio (Accession Number)?**

- **A)** DICOM C-STORE.
- **B)** DICOM Modality Worklist (MWL, basado en el comando DIMSE C-FIND).
- **C)** DICOM Print Management.
- **D)** HL7 FHIR Observation.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **B**
- **Explicación**: El servicio DICOM Modality Worklist (MWL) utiliza el comando DIMSE-C `C-FIND` en el que la modalidad actúa como SCU (Service Class User) consultando al servidor RIS/PACS Broker (SCP) la lista de trabajo programada. De este modo, el técnico selecciona al paciente directamente en la consola del equipo sin teclear a mano el nombre ni el NHC, evitando errores de identificación.
</details>

---

### Pregunta 124 — [T10 / T11 / T12] (Específico — Ciberseguridad de Dispositivos Médicos (GVA / IB-SALUT))
**[GVA / IB-SALUT] Al conectar una flota de bombas de infusión y monitores multiparamétricos a la red hospitalaria de un servicio autonómico de salud, ¿qué norma internacional aborda la gestión de riesgos de redes de TI que incorporan dispositivos médicos y qué arquitectura de red se exige por ciberseguridad (ENS RD 311/2022 y guía MDCG 2019-16)?**

- **A)** IEC 80001-1; segmentación en VLANs específicas de electromedicina con control de acceso 802.1X/NAC y cortafuegos perimetrales que restrinjan el tráfico estrictamente a los puertos/IPs de las pasarelas clínicas autorizadas.
- **B)** UNE-EN 60601-2-24; conexión directa a la red Wi-Fi pública de invitados del hospital.
- **C)** ISO 7396-1; asignación de direcciones IP públicas en cada monitor.
- **D)** UNE 100713; desactivación de todo cifrado TLS para reducir la latencia.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **A**
- **Explicación**: La serie de normas IEC 80001-1 regula la aplicación de la gestión de riesgos a las redes de TI que incorporan productos sanitarios (responsabilidad compartida entre fabricante, Ingeniería Biomédica y TI hospitalaria). En cumplimiento del Esquema Nacional de Seguridad (RD 311/2022) y la guía europea MDCG 2019-16, los equipos electromédicos deben aislarse en VLANs dedicadas (microsegmentación), con listas de control de acceso (ACL), autenticación de puerto/MAC y monitorización pasiva de tráfico.
</details>

---

### Pregunta 125 — [T40 / T41 / T42] (Específico — Gestión de Mantenimiento (GMAO) y KPIs (IB-SALUT / GVA / SAS))
**[IB-SALUT / GVA / SAS] Un acelerador lineal de radioterapia ha estado programado para operar 2.000 horas durante el último año. En ese período ha sufrido 4 averías correctivas que han supuesto un tiempo total de parada por reparación de 40 horas. ¿Cuáles son sus valores de MTBF, MTTR y Disponibilidad Intrínseca?**

- **A)** MTBF = 490 h; MTTR = 10 h; Disponibilidad = 98,0 %.
- **B)** MTBF = 500 h; MTTR = 40 h; Disponibilidad = 92,6 %.
- **C)** MTBF = 10 h; MTTR = 490 h; Disponibilidad = 95,0 %.
- **D)** MTBF = 2.000 h; MTTR = 4 h; Disponibilidad = 99,8 %.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **A**
- **Explicación**: El tiempo operativo real (Uptime) es 2.000 h - 40 h = 1.960 horas. Con 4 fallos: MTBF = Tiempo operativo / N_fallos = 1.960 / 4 = 490 horas. MTTR = Tiempo total de reparación / N_fallos = 40 / 4 = 10 horas. La Disponibilidad Intrínseca es A = MTBF / (MTBF + MTTR) = 490 / (490 + 10) = 490 / 500 = 0,98 (98,0 %).
</details>

---

### Pregunta 126 — [T40 / T41] (Específico — Priorización Basada en Riesgo de Equipos (IB-SALUT / GVA))
**[IB-SALUT / GVA] Según el modelo clásico de Fennigkoh y Smith (adoptado por la OMS y las guías de Gestión de Equipamiento Electromédico) para calcular el Número de Gestión de Equipos (EM = Función + Riesgo Físico + Requerimiento de Mantenimiento), ¿qué equipos obtienen la máxima puntuación en Función (10 puntos) y deben incluirse al 100 % en el plan de mantenimiento preventivo?**

- **A)** Los equipos de soporte vital (ventiladores mecánicos, máquinas de anestesia, desfibriladores, incubadoras, hemodiálisis).
- **B)** Los equipos de diagnóstico de rutina sin contacto invasivo (negatoscopios, básculas, tensiómetros manuales).
- **C)** El mobiliario clínico no electrificado.
- **D)** Los ordenadores administrativos de admisión.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **A**
- **Explicación**: En el algoritmo de Fennigkoh y Smith, el índice de gestión EM = F + R + M suma la Función del equipo (F: de 2 para apoyo analítico hasta 10 para soporte vital), el Riesgo asociado a su fallo (R: de 1 a 5, siendo 5 muerte potencial del paciente) y los requisitos de Mantenimiento (M: de 1 a 5). Todo equipo con EM >= 12 o con función de soporte vital (F = 10) se incluye obligatoriamente en el programa de mantenimiento preventivo con prioridad máxima.
</details>

---

### Pregunta 127 — [T44 / T45 / T46] (Específico — Contratación Pública de Tecnología Sanitaria (IB-SALUT / GVA))
**[IB-SALUT / GVA] Al redactar el Pliego de Prescripciones Técnicas (PPT) para la licitación de un ecógrafo de alta gama conforme a la Ley 9/2017 de Contratos del Sector Público (art. 126 LCSP), ¿cómo debe proceder el Ingeniero Biomédico respecto a las especificaciones técnicas?**

- **A)** Debe indicar la marca y el modelo exacto del fabricante preferido por el servicio clínico para acelerar la compra.
- **B)** Las prescripciones técnicas deben formularse en términos de rendimiento o exigencias funcionales y normas técnicas, estando prohibido mencionar una fabricación, procedencia o marca determinada que favorezca o descarte a ciertas empresas, salvo que sea indispensable y se acompañe de la mención 'o equivalente'.
- **C)** Puede exigir certificados exclusivos que solo posea un único distribuidor nacional sin justificación.
- **D)** En los contratos sujetos a regulación armonizada (SARA) no existe obligación de publicar el PPT.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **B**
- **Explicación**: El artículo 126 de la LCSP (Ley 9/2017) garantiza la libre concurrencia e igualdad de trato: prohíbe que los Pliegos de Prescripciones Técnicas hagan referencia a una marca, patente o tipo concreto que dirija la adjudicación hacia un único producto. Las especificaciones deben definirse por parámetros funcionales, clínicos y normativos objetivos (y, excepcionalmente cuando no sea posible describir el objeto de forma suficientemente precisa, deberá añadirse obligatoriamente la expresión 'o equivalente').
</details>

---

### Pregunta 128 — [T32] (Específico — Gases Medicinales e Instalaciones (Osakidetza / SAS))
**[Osakidetza / SAS] Según la norma UNE-EN ISO 7396-1 para sistemas de canalización de gases medicinales comprimidos y vacío en hospitales, ¿cuál es la presión nominal de distribución en las tomas murales de planta/quirófano para el oxígeno medicinal (O2) y el aire medicinal de respiración, y qué sistema impide conectar por error una manguera de óxido nitroso en una toma de oxígeno?**

- **A)** Presión nominal de 400 a 500 kPa (4–5 bar) para gases medicinales de respiración (y 700–800 kPa para aire motriz quirúrgico); la no intercambiabilidad mecánica se garantiza mediante conectores específicos de gas (sistema NIST o tomas rápidas AFNOR/DIN específicas de cada gas).
- **B)** Presión nominal de 200 bar en las tomas murales de cabecera de cama.
- **C)** Presión nominal de 50 kPa (0,5 bar) en todas las tomas murales.
- **D)** Todas las tomas murales tienen exactamente la misma geometría mecánica y solo se distinguen por una pegatina de color.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **A**
- **Explicación**: La norma UNE-EN ISO 7396-1 establece una presión nominal de suministro de segunda etapa de 400–500 kPa (4–5 bar manométricos) para O2, N2O, Aire medicinal y CO2, y de 700–800 kPa (7–8 bar) para Aire instrumental/motriz de herramientas quirúrgicas, mientras que el vacío opera con una presión absoluta <= 60 kPa (depresión >= 40 kPa en toma). La seguridad contra cruces de gases se asegura físicamente mediante tomas murales y racores NIST (Non-Interchangeable Screw-Threaded) o DISS con geometría específica e incompatible entre gases distintos.
</details>

---

### Pregunta 129 — [T33] (Específico — Climatización y Salas de Ambiente Controlado (GVA / IB-SALUT))
**[GVA / IB-SALUT] De acuerdo con la norma UNE 100713 sobre instalaciones de acondicionamiento de aire en hospitales, un quirófano de alta tecnología (Clase I, tipo A: trasplantes, cirugía cardíaca o neurocirugía) debe mantener respecto a los locales adyacentes:**

- **A)** Presión negativa (-15 Pa) para que el aire del pasillo entre al quirófano.
- **B)** Sobrepresión positiva (+15 a +25 Pa aprox.), tres etapas de filtración con filtro terminal absoluto HEPA H13/H14 en el techo difusor de flujo unidireccional/laminar y al menos un 100 % de aire exterior o >= 20 renovaciones/hora.
- **C)** Únicamente un filtro grueso G4 sin control de humedad relativa.
- **D)** Recirculación del aire compartido con otros tres quirófanos infecciosos.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **B**
- **Explicación**: La norma UNE 100713 clasifica los quirófanos como locales de Clase I (exigencias muy elevadas de asepsia), con tres niveles de filtración (F5/M5 -> F9/ePM1 -> filtro absoluto HEPA H13 o H14 en el terminal de impulsión), sobrepresión positiva escalonada respecto a las zonas sucias y pasillos adyacentes para impedir la entrada de bioaerosoles, temperatura de 18–26 °C y humedad relativa del 45–55 %.
</details>

---

### Pregunta 130 — [T27] (Específico — Esterilización Hospitalaria (Osakidetza / SAS))
**[Osakidetza / SAS] En una central de esterilización hospitalaria (RUMED), ¿qué verifica exactamente el test diario de Bowie-Dick realizado a 134 °C durante 3,5 minutos en un autoclave de vapor con prevacío fraccionado (UNE-EN 285)?**

- **A)** La muerte de esporas de Geobacillus stearothermophilus mediante incubación biológica.
- **B)** La correcta penetración rápida y uniforme del vapor y la ausencia de bolsas de aire residual o gases no condensables en la cámara tras los pulsos de vacío.
- **C)** La concentración de peróxido de hidrógeno en el plasma gas.
- **D)** La calibración del manómetro de presión atmosférica.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **B**
- **Explicación**: El ensayo de Bowie-Dick (indicador químico Clase 2 según ISO 11140-1) se ejecuta diariamente con la cámara vacía (solo el paquete de prueba en la zona inferior próxima al desagüe) a 134 °C durante 3,5 min. No es un control biológico de letalidad, sino un ensayo físico-químico que comprueba la eficacia de la bomba de vacío en la extracción del aire y la ausencia de fugas o gases no condensables que crearían una burbuja aislante en el centro del paquete.
</details>

---

### Pregunta 131 — [T53 / T54] (Específico — Protección Radiológica y Control de Calidad (IB-SALUT / GVA))
**[IB-SALUT / GVA] Según el Real Decreto 1029/2022 (Reglamento sobre protección de la salud contra los riesgos derivados de las radiaciones ionizantes), ¿cuál es el nuevo límite de dosis equivalente en el CRISTALINO del ojo para los trabajadores expuestos de categoría A?**

- **A)** 150 mSv por año oficial.
- **B)** 20 mSv en un único año oficial (o 100 mSv a lo largo de cinco años consecutivos con un máximo de 50 mSv en un único año).
- **C)** 500 mSv por año oficial, igual que para la piel y extremidades.
- **D)** 1 mSv por año oficial.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **B**
- **Explicación**: El RD 1029/2022 (que transpone la Directiva 2013/59/Euratom y deroga el RD 783/2001) redujo drásticamente el límite de dosis equivalente en el cristalino para trabajadores expuestos desde los antiguos 150 mSv/año hasta 20 mSv por año oficial (igualándolo al límite de dosis efectiva de cuerpo entero de 20 mSv/año), lo que tiene gran impacto en radiología intervencionista y cardiología hemodinámica.
</details>

---

### Pregunta 132 — [T25] (Específico — Bombas de Infusión y Seguridad del Paciente (Osakidetza / SAS))
**[Osakidetza / SAS] En las bombas de infusión inteligentes ('Smart Pumps') utilizadas en UCI y Oncología bajo la norma UNE-EN 60601-2-24, ¿qué son las bibliotecas de fármacos ( sistemas DERS — Dose Error Reduction Systems) con límites 'blandos' (soft limits) y 'duros' (hard limits)?**

- **A)** Perfiles farmacológicos preconfigurados en el servidor central que alertan al clínico si programa una dosis/velocidad fuera de rango: el límite blando puede ser confirmado y superado justificadamente por el usuario, mientras que el límite duro bloquea físicamente la programación por ser potencialmente letal.
- **B)** Sensores mecánicos que miden la dureza del tubo de silicona.
- **C)** Alarmas de batería baja y batería agotada.
- **D)** Filtros antibacterianos situados en la vía venosa.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **A**
- **Explicación**: Los sistemas de reducción de errores de medicación (DERS) en bombas de infusión inteligentes cargan por red (Wi-Fi/Ethernet) una farmacoteca consensuada entre Farmacia, UCI e Ingeniería Biomédica. Definen límites inferiores y superiores para cada fármaco y área clínica: un 'soft limit' emite una advertencia que requiere confirmación consciente, mientras que un 'hard limit' impide iniciar la infusión hasta reprogramar dentro del margen seguro.
</details>

---

### Pregunta 133 — [T02 / T08 / T71] (Específico — Evaluación de Tecnologías Sanitarias e IA Médica (IB-SALUT / GVA))
**[IB-SALUT / GVA] Un hospital evalúa incorporar un algoritmo de Inteligencia Artificial de ayuda al diagnóstico de retinopatía diabética en imagen de fondo de ojo. En el estudio de validación clínica presenta una Sensibilidad del 95 % y una Especificidad del 90 %. Si se aplica en una campaña de cribado poblacional donde la prevalencia real de la enfermedad es baja (2 %), ¿qué ocurrirá con el Valor Predictivo Positivo (VPP) según el teorema de Bayes?**

- **A)** El VPP será también del 95 % porque no depende de la prevalencia.
- **B)** El VPP será bajo (aprox. 16,2 %), ya que con baja prevalencia el número absoluto de falsos positivos (10 % del 98 % sano) supera ampliamente al de verdaderos positivos (95 % del 2 % enfermo), en cambio el Valor Predictivo Negativo (VPN) será altísimo (> 99,8 %).
- **C)** El VPP será del 100 % y el VPN del 50 %.
- **D)** La especificidad caerá al 2 %.

<details><summary><strong>Ver respuesta correcta y justificación técnica</strong></summary>

- **Respuesta correcta**: **B**
- **Explicación**: Por el teorema de Bayes: VPP = (S · P) / [S · P + (1 - E) · (1 - P)] = (0,95 x 0,02) / (0,95 x 0,02 + 0,10 x 0,98) = 0,019 / (0,019 + 0,098) = 0,019 / 0,117 = 16,24 %. Es una pregunta clásica de exámenes A1 (IB-SALUT / GVA / SERGAS T02 y T71): en cribados de baja prevalencia, incluso un algoritmo con alta sensibilidad y especificidad genera muchos falsos positivos (bajo VPP), pero ofrece un excelente Valor Predictivo Negativo (VPN = 99,89 %) para descartar patología.
</details>

---

## Parte II: Supuestos Prácticos de Otras CCAA (Casos 10 a 12)

### Caso Práctico 10 (Modelo IB-SALUT / GVA A1): Licitación, TCO e Integración de Central de Monitorización UCI

**Escenario clínico-técnico:**
El Servicio Corporativo de Ingeniería Biomédica debe redactar el Pliego de Prescripciones Técnicas (PPT) y el informe de valoración económica para renovar 24 puestos de monitorización multiparamétrica de UCI y su Central de Monitorización, integrándolos con la Historia Clínica Electrónica (IANUS / Orion Clinic / Millennium) y garantizando la ciberseguridad según el ENS (RD 311/2022). El presupuesto base de inversión inicial (CAPEX) de la Oferta A es de 360.000 € con fungibles propietarios de 1.200 €/cama/año y mantenimiento posgarantía (años 3 a 7) de 28.000 €/año; la Oferta B tiene un CAPEX de 410.000 €, fungibles compatibles de 600 €/cama/año y mantenimiento posgarantía (años 3 a 7) de 22.000 €/año.

**Cuestiones planteadas por el Tribunal:**
- 1. Calcule el Coste Total de Propiedad (TCO / LCC sin actualización financiera) a 7 años para las 24 camas en ambas ofertas (incluyendo los 7 años de fungibles y los 5 años de mantenimiento tras los 2 años de garantía legal) y determine cuál es económicamente más ventajosa.
- 2. Especifique la arquitectura de interoperabilidad (perfiles IHE PCD / HL7 / sincronización horaria NTP) para volcar automáticamente constantes vitales a la gráfica de enfermería de UCI con validación clínica.
- 3. Defina los requisitos de seguridad eléctrica (UNE-EN 60601-1) y de red (IEC 80001-1 / ENS) que deben exigirse en el PPT.

<details><summary><strong>Ver resolución técnica pautada</strong></summary>

**1. Cálculo del TCO a 7 años (24 camas):**
- **Oferta A**: $\text{CAPEX} = 360.000\text{ €}$; $\text{Fungibles (7 años)} = 24 \times 1.200 \times 7 = 201.600\text{ €}$; $\text{Mantenimiento (5 años)} = 28.000 \times 5 = 140.000\text{ €}$. **$\text{TCO}_A = 360.000 + 201.600 + 140.000 = 701.600\text{ €}$**.
- **Oferta B**: $\text{CAPEX} = 410.000\text{ €}$; $\text{Fungibles (7 años)} = 24 \times 600 \times 7 = 100.800\text{ €}$; $\text{Mantenimiento (5 años)} = 22.000 \times 5 = 110.000\text{ €}$. **$\text{TCO}_B = 410.000 + 100.800 + 110.000 = 620.800\text{ €}$**.
- **Conclusión LCSP (art. 145 y 148)**: Aunque la Oferta B tiene un precio de compra 50.000 € mayor, ahorra **80.800 €** en el ciclo de vida de 7 años gracias al menor coste cautivo de fungibles y mantenimiento.

**2. Interoperabilidad IHE PCD (Patient Care Device):**
- Uso del perfil **IHE PCD-01 (Device Enterprise Communication - DEC)** mediante mensajería `HL7 v2.6 ORU^R01` o recursos `HL7 FHIR Observation` desde la pasarela de la central hacia el motor de integración del hospital (Mirth/Rhapsody).
- Asociación paciente-monitor mediante lectura de código de barras de pulsera (`ADT^A01/A02`) y sincronización estricta por **NTP** de todos los monitores y la central para trazabilidad médico-legal.

**3. Seguridad Eléctrica y Ciberseguridad:**
- Entradas de ECG/presión invasiva/gasto cardíaco clasificadas como **Tipo CF a prueba de desfibrilación** (`UNE-EN 60601-1`).
- Segmentación en **VLAN exclusiva de monitorización crítica**, doble red redundante para telemetría/central, cifrado TLS 1.2/1.3, gestión de parches validada por el fabricante y ausencia de sistemas operativos en fin de soporte (EoL).
</details>

---

### Caso Práctico 11 (Modelo Osakidetza / SAS): Avería de Aislamiento IT en Quirófano y Derivación de Fuga en Bisturí Eléctrico

**Escenario clínico-técnico:**
Durante una intervención laparoscópica en el Quirófano 4, el Vigilador Permanente de Aislamiento (VPA) del cuadro eléctrico de quirófano emite alarma acústica y luminosa marcando una resistencia de aislamiento de 22 kOhmios. Simultáneamente, el cirujano refiere que el bisturí eléctrico monopolar corta con poca potencia y el anestesista observa interferencias de alta frecuencia en el trazado del ECG.

**Cuestiones planteadas por el Tribunal:**
- 1. ¿Debe suspenderse inmediatamente la intervención quirúrgica en curso al saltar la alarma de primer defecto del VPA a 22 kOhmios? Justifique según la ITC-BT-38.
- 2. Describa el protocolo sistemático para localizar el equipo causante del fallo de aislamiento y los límites de corriente de fuga según UNE-EN 62353.
- 3. Explique la causa técnica común de la pérdida de eficacia de corte monopolar combinada con artefactos en el ECG y cómo verificar el sistema REM y la potencia de salida.

<details><summary><strong>Ver resolución técnica pautada</strong></summary>

**1. Actuación inmediata ante el primer defecto IT (`ITC-BT-38`):**
- **NO se debe interrumpir la cirugía en curso**. Precisamente la finalidad del esquema IT médico (neutro aislado de tierra mediante transformador de separación) es que ante un **primer defecto de aislamiento** (< 50 k$\Omega$, en este caso 22 k$\Omega$), la corriente de defecto es tan pequeña (solo capacitiva, $< 1\text{ mA}$) que no saltan las protecciones magnetotérmicas ni existe riesgo de microshock. Se silencia la alarma acústica (manteniéndose la óptica) y, al finalizar la intervención, se diagnostica antes de iniciar la siguiente.

**2. Localización y ensayo `UNE-EN 62353`:**
- Desconexión secuencial de los equipos enchufados a las tomas alimentadas por el transformador IT hasta que el VPA recupere un valor $> 50\text{ k}\Omega$ (normalmente $> 200\text{ k}\Omega$).
- Retirada del equipo defectuoso al taller de Electromedicina y ensayo con analizador de seguridad eléctrica (`UNE-EN 62353`): resistencia de tierra de protección ($\le 0,3\text{ }\Omega$), resistencia de aislamiento ($\ge 2\text{ M}\Omega$ en Clase I) y corriente de fuga de equipo ($\le 500\text{ }\mu\text{A}$ método directo / $\le 1.000\text{ }\mu\text{A}$ método diferencial).

**3. Diagnóstico del bisturí eléctrico (`IEC 60601-2-2`):**
- Un contacto deficiente del cable de retorno o deterioro del aislamiento capacitivo del cable monopolar activo reduce la densidad de corriente en la punta quirúrgica y acopla radiofrecuencia (300–500 kHz) a través de los latiguillos del ECG.
- Verificación con **analizador de electrocirugía**: curva de potencia de salida (W) frente a cargas no inductivas (100 a 2.000 $\Omega$), corriente de fuga de alta frecuencia ($< 150\text{ mA}$) y comprobación de los umbrales de alarma del circuito **REM** (5 a 135 $\Omega$).
</details>

---

### Caso Práctico 12 (Modelo IB-SALUT / GVA / SERGAS): Recepción, Puesta en Marcha y Sala Blanca de una Resonancia Magnética de 3,0 Teslas

**Escenario clínico-técnico:**
El hospital adjudica el suministro e instalación llave en mano de una Resonancia Magnética de 3,0 Teslas en sustitución de un equipo de 1,5 T antiguo. Como Ingeniero/a Biomédico/a responsable de la dirección técnica del contrato, debe supervisar el proyecto de adecuación de sala y las pruebas de aceptación.

**Cuestiones planteadas por el Tribunal:**
- 1. ¿Qué cuatro subsistemas constructivos y de instalaciones críticas de la sala deben recalcularse al pasar de 1,5 T a 3,0 T?
- 2. ¿Cómo se articula el zonaje de seguridad magnética (Zonas I a IV del ACR) y qué dispositivos de detección deben instalarse en el acceso a la Zona IV?
- 3. ¿Qué pruebas de aceptación de calidad de imagen (SNR, homogeneidad de campo B0 en ppm, linealidad geométrica y atenuación de la jaula de Faraday en dB) deben firmarse en el Acta de Recepción?

<details><summary><strong>Ver resolución técnica pautada</strong></summary>

**1. Recálculo de instalaciones críticas (1,5 T $\rightarrow$ 3,0 T):**
- **Peso estático y vibraciones**: Verificación estructural del forjado (imán de 5 a 7 toneladas) y bancada antivibratoria.
- **Blindaje magnético pasivo (hierro al silicio) y línea de los 5 Gauss ($0,5\text{ mT}$)**: Al duplicar el campo estático $B_0$, la línea de seguridad de 5 Gauss (límite para marcapasos y público general) se expande; debe confinarse dentro de la sala o acotarse en plantas superior e inferior.
- **Tubo de Quench y ventilación de emergencia**: Verificación del diámetro y longitud equivalente del conducto de evacuación criogénica para el caudal de helio del nuevo imán, oxímetro ambiental tarado a $< 19,5\text{ \% }\text{O}_2$ y extracción forzada de emergencia ($\ge 12–20\text{ ren/h}$).
- **Enfriadora de agua (Chiller)**: Aumento de la potencia frigorífica para disipar el calor de los armarios de gradientes y amplificadores de RF de 3,0 T (típicamente 60–90 kW térmicos).

**2. Zonaje de seguridad ACR (Zonas I a IV):**
- **Zona I**: Acceso libre público. **Zona II**: Recepción y cribado (cuestionario de implantes ferromagnéticos). **Zona III**: Sala de consolas de control (acceso restringido con control físico). **Zona IV**: Sala del imán ($B_0$ siempre activo 24/7), equipada en su puerta con **arco detector ferromagnético pasivo** con alarma visual/sonora antes de cruzar el umbral y puerta con apertura hacia afuera.

**3. Pruebas de Aceptación y Acta de Recepción:**
- Certificación de **atenuación de la Jaula de Faraday**: $\ge 90–100\text{ dB}$ a la frecuencia de Larmor de 3,0 T ($f_0 = 42,58 \times 3,0 = 127,74\text{ MHz}$).
- **Homogeneidad del campo magnético principal ($B_0$)** tras el *shimming* activo/pasivo: $< 1–2\text{ ppm}$ en un volumen esférico de 40 cm (DSV).
- Ensayos con maniquí (phantom ACR): relación señal-ruido (**SNR**), uniformidad de imagen ($> 80\text{ \%}$), exactitud geométrica ($\pm 2\text{ mm}$) y ausencia de artefactos fantasma (*ghosting* $< 2,5\text{ \%}$).
</details>

---

