# Bloque 05 — Electromedicina de Cuidados Críticos, Bloque Quirúrgico, Ventilación Mecánica, Anestesia, Monitorización, Desfibrilación, Endoscopia y Robótica Quirúrgica

> **Temas de la Parte Específica cubiertos íntegramente en este bloque (11 temas):**
> - **Tema 20:** Caracterización y funcionamiento de los sistemas de endoscopia diagnóstica y terapéutica. Componentes técnicos, mecánicos y electrónicos.
> - **Tema 21:** Ventilación mecánica. Definición y principios físicos de la ventilación mecánica. Modos de la ventilación mecánica. Ventilación invasiva y no invasiva. Ventilación en neonatología. Ventilación en anestesia.
> - **Tema 22:** Caracterización y funcionamiento de los sistemas de anestesia. Equipamiento asociado.
> - **Tema 23:** Caracterización y funcionamiento de los sistemas de monitorización de pacientes. Parámetros, principios físicos y sensores.
> - **Tema 25:** Caracterización y funcionamiento de los sistemas de endoscopia quirúrgica. Componentes y tecnologías.
> - **Tema 26:** Robotización quirúrgica. Principios, tipos y tecnologías.
> - **Tema 28:** Caracterización y funcionamiento del equipamiento de neonatología. Cunas térmicas. Incubadoras. Transporte neonatal.
> - **Tema 31:** Desfibrilación. Fundamentos y tipos de desfibriladores. Soporte vital.
> - **Tema 35:** Caracterización y funcionamiento de las fuentes de energía para uso quirúrgico o intervencionista. Equipamiento asociado.
> - **Tema 36:** Caracterización y funcionamiento del equipamiento electromédico de consultas y salas de técnicas.
> - **Tema 37:** Equipamiento estándar bloque quirúrgico: columnas de suministro, mesas quirúrgicas e iluminación.
>
> **Currículo Oficial base en [`01_normativa_oficial/`](../01_normativa_oficial/):**
> - [`Base_Temas_01_a_73_RD_838_2015_Titulo_TS_Electromedicina_Clinica.pdf`](../01_normativa_oficial/Base_Temas_01_a_73_RD_838_2015_Titulo_TS_Electromedicina_Clinica.pdf)

---

## 1. Tema 21: Ventilación Mecánica (Principios Físicos, Modos, VNI, Neonatología y Anestesia)

### 1.1. Principios Físicos: La Ecuación del Movimiento del Sistema Respiratorio
En ventilación con presión positiva, la presión aplicada en la vía aérea ($P_{\text{aw}}$) junto con la presión muscular del paciente ($P_{\text{mus}}$) debe vencer la **presión elástica** (retroceso elástico pulmonar y torácico) más la **presión resistiva** (fricción del flujo de gas en las vías aéreas) sobre la presión teleespiratoria basal (**PEEP**):
$$P_{\text{aw}}(t) + P_{\text{mus}}(t) = \frac{V(t)}{C} + R \cdot \dot{V}(t) + \text{PEEP}$$
- **Compliancia o Distensibilidad Estática ($C_{\text{st}}$, en $\text{ml/cmH}_2\text{O}$):**
  $$C_{\text{st}} = \frac{V_T}{P_{\text{meseta (Plateau)}} - \text{PEEP}_{\text{total}}}$$
  *(Mide la elasticidad parenquimatosa; se calcula haciendo una **pausa teleinspiratoria de $0,5\text{–}2\text{ s}$** con flujo $\dot{V} = 0$. Valor normal en adulto intubado: **$50\text{–}100\text{ ml/cmH}_2\text{O}$**; disminuye en SDRA, fibrosis o edema pulmonar).*
- **Resistencia de la Vía Aérea ($R_{\text{aw}}$, en $\text{cmH}_2\text{O}/(\text{L/s})$):**
  $$R_{\text{aw}} = \frac{P_{\text{pico (Peak)}} - P_{\text{meseta (Plateau)}}}{\dot{V}_{\text{inspiratorio}}}$$
  *(Aumenta en broncoespasmo/EPOC, secreciones o acodamiento del tubo endotraqueal).*
- **Constante de Tiempo Espiratoria ($\tau$):** $\tau = R \times C$ (en segundos). Se necesitan **$3 \cdot \tau$** para vaciar el **$95\%$** del volumen corriente; si el tiempo espiratorio es menor que $3\tau$, se produce **atrapamiento aéreo o Auto-PEEP (PEEP intrínseca)**.

### 1.2. Arquitectura Neumática/Electrónica de un Respirador de Cuidados Críticos (UCI)
1. **Entradas de gases de alta presión ($3,5\text{–}5\text{ bar}$):** Tomas murales de **Oxígeno ($\text{O}_2$ — color blanco)** y **Aire Medicinal (blanco/negro)** (o turbina/soplante interna de alta velocidad en respiradores de transporte/subagudos).
2. **Mezclador electrónico proporcional (*Blender*):** Dosifica la $\text{FiO}_2$ ($21\%\text{ a }100\%$) mediante **válvulas solenoides proporcionales o servoválvulas** y mide la concentración real con una **celda galvánica o sensor paramagnético de $\text{O}_2$**.
3. **Sensores de Flujo ($\dot{V}$) Inspiratorio y Espiratorio (¡Pregunta frecuente de Electromedicina!):**
   - **Anemómetro de Hilo Caliente (*Hot-Wire*):** Mide el enfriamiento de un filamento de platino calentado eléctricamente al pasar el gas (muy baja resistencia y respuesta rápida).
   - **Neumotacógrafo de Presión Diferencial (Fleisch o de orificio variable):** Mide la caída de presión $\Delta P$ a través de una resistencia laminar conocida ($\dot{V} \propto \Delta P$).
   - **Sensor de Flujo Ultrasónico:** Mide la diferencia de tiempo de tránsito de pulsos ultrasónicos a favor y en contra del flujo (no tiene partes móviles ni filamentos que se rompan).
4. **Válvula Espiratoria Activa (Proporcional/Electromagnética):** Regula la **PEEP** ($0\text{ a }30\text{ cmH}_2\text{O}$) y permite al paciente exhalar incluso durante la fase inspiratoria en modos bifásicos (APRV / BiLevel).

### 1.3. Variables de Fase y Modos Ventilatorios (Clasificación de Chatburn)
Todo ciclo respiratorio se divide en **4 fases controladas por 4 variables**:
1. **Variable de Disparo (*Trigger* — ¿Qué inicia la inspiración?):**
   - **Por Tiempo:** Controlado por la máquina según la frecuencia respiratoria programada ($f$).
   - **Por el Paciente (Asistido):** **Trigger por Flujo** (el más sensible y de menor trabajo respiratorio: sensibilidad típica $1\text{ a }3\text{ L/min}$ sobre un flujo base continuo *bias flow*) o **Trigger por Presión** (caída de $-0,5\text{ a }-2\text{ cmH}_2\text{O}$ bajo la PEEP), o bien **Trigger Neural (NAVA)** mediante catéter esofágico que mide la actividad eléctrica del diafragma ($\text{Edi}$).
2. **Variable de Límite / Control (¿Qué controla la entrega de gas durante la inspiración?):**
   - **Controlado por Volumen (VCV):** Entrega un **Volumen Corriente ($V_T$) constante** con onda de flujo cuadrada o decelerada; la **presión en vía aérea es variable** (depende de la compliancia y resistencia del paciente $\rightarrow$ vigilar alarma de presión pico alta).
   - **Controlado por Presión (PCV):** Mantiene una **Presión Inspiratoria constante** (flujo decelerado exponencial); el **volumen corriente ($V_T$) es variable** ($\rightarrow$ vigilar alarma de volumen minuto bajo).
   - **Doble Control (PRVC — *Volumen Garantizado / Presión Regulada con Control de Volumen*):** Respira con curva de presión (flujo decelerado), pero el microprocesador ajusta automáticamente el nivel de presión respiración a respiración para garantizar el $V_T$ objetivo con la mínima presión posible.
3. **Variable de Ciclado (¿Qué termina la inspiración y abre la válvula espiratoria?):**
   - **Ciclado por Tiempo:** En modos controlados por presión (**PCV**) y en **VCV con pausa inspiratoria**.
   - **Ciclado por Volumen:** En **VCV puro** cuando se alcanza el $V_T$ pautado.
   - **Ciclado por Flujo (¡Pregunta clásica de test!):** Es el ciclado propio de la **Presión de Soporte (PSV — *Pressure Support Ventilation*)**: todas las respiraciones son disparadas por el paciente, limitadas por presión y **ciclan a espiración cuando el flujo inspiratorio del paciente cae a un porcentaje del flujo pico inicial (típicamente el $25\%$)**.
4. **Variable Basal:** Nivel de presión durante la espiración (**PEEP / CPAP**, que evita el colapso alveolar teleespiratorio o *atelectrauma* y mejora la oxigenación).

### 1.4. Ventilación No Invasiva (VNI), Ventilación Neonatal y Ventilación en Anestesia
- **Ventilación No Invasiva (VNI):** Sin intubación endotraqueal (interfaz mediante máscara facial total, oronasal, nasal o casco *Helmet*). Emplea modos **CPAP** o **BiPAP (IPAP / EPAP)** con respiradores específicos con **compensación automática de fugas** y circuito de rama única con puerto exhalatorio intencional (o respiradores de UCI en modo VNI de doble rama).
- **Ventilación en Neonatología:**
  - Volúmenes corrientes diminutos ($2\text{ a }20\text{ ml}$, $4\text{–}6\text{ ml/kg}$) que exigen un **sensor de flujo proximal en la pieza en «Y»** (junto al tubo endotraqueal) de espacio muerto mínimo ($< 1\text{ ml}$) para descontar la compliancia del circuito.
  - **Modos neonatales específicos:** **nCPAP** (con generador de flujo variable tipo *Infant Flow* por efecto Coanda), **PCV con Volumen Garantizado (VG)** y **Ventilación de Alta Frecuencia Oscilatoria (VAFO / HFOV)**: aplica una presión media en vía aérea continua ($P_{\text{media}}$) sobre la que un pistón o membrana oscila a **$3\text{ a }15\text{ Hz}$ ($180\text{ a }900\text{ ciclos/min}$)** con volúmenes corrientes **menores que el espacio muerto anatómico ($V_T < V_D$)** y **espiración ACTIVA**.
- **Ventilación en Anestesia:** Utiliza un **circuito circular semicerrado con reinhalación de gases espirados** previo paso por un **canister absorbedor de $\text{CO}_2$ (cal sodada)** para ahorrar gases frescos y agentes anestésicos halogenados.

---

## 2. Tema 22: Sistemas de Anestesia y Equipamiento Asociado (Estación de Trabajo de Anestesia — `UNE-EN ISO 80601-2-13`)

Una **Estación de Anestesia** integra en un único sistema tres subsistemas: **1) Sistema de suministro y mezcla de gases frescos, 2) Vaporizadores de agentes anestésicos volátiles y 3) Sistema respiratorio circular con ventilador de anestesia y evacuación de gases (AGSS)**.

### 2.1. Subsistema de Alta y Baja Presión y Seguridades Anti-Hipoxia (¡Muy preguntado!)
1. **Conexiones de gases medicinales (`UNE-EN ISO 9170` / `ISO 7396-1`):**
   - **Oxígeno ($\text{O}_2$, blanco)**, **Óxido Nitroso / Protóxido de nitrógeno ($\text{N}_2\text{O}$, azul)** y **Aire Medicinal (blanco/negro)** a $3,5\text{–}5\text{ bar}$ desde la red centralizada + **cilindros de reserva** en yugo con **sistema de índice de pines (*Pin Index Safety System* — PISS)** y conectores **NIST** (*Non-Interchangeable Screw-Threaded*) que impiden físicamente intercambiar las mangueras de gases.
2. **Sistemas de Seguridad Anti-Hipoxia obligatorios en toda máquina de anestesia:**
   - **Corte automático de $\text{N}_2\text{O}$ por fallo de presión de $\text{O}_2$ (*Fail-Safe Valve*):** Si cae la presión de suministro de oxígeno, se cierra automáticamente el paso de protóxido ($\text{N}_2\text{O}$) y suena alarma acústica.
   - **Sistema Guarda-Hipoxia (*Hypoxic Guard* / *Link-25* mecánico, neumático o electrónico):** Vincula los caudalímetros de $\text{O}_2$ y $\text{N}_2\text{O}$ de modo que **nunca pueda suministrarse una mezcla con una concentración de $\text{O}_2 < 21\text{–}25\%$** aunque el anestesista abra al máximo el $\text{N}_2\text{O}$.
   - **Botón de Flujo Rápido de Oxígeno (*$\text{O}_2$ Flush*):** Entrega oxígeno puro directo a la salida común de gases a **$35\text{–}75\text{ L/min}$** puenteando los caudalímetros y los vaporizadores.

### 2.2. Vaporizadores Anestésicos y Circuito Circular con Absorbedor de $\text{CO}_2$
1. **Vaporizadores de Agentes Halogenados (Sevoflurano [amarillo], Isoflurano [morado], Desflurano [azul]):**
   - Son **específicos de agente** y con sistema de **bloqueo *Selectatec / Interlock*** que impide abrir dos vaporizadores a la vez.
   - **Vaporizadores de Sevoflurano e Isoflurano:** De **cortocircuito variable (*variable bypass*) y compensados térmicamente** (lámina bimetálica).
   - **Caso especial de examen — El Vaporizador de DESFLURANO (Tec 6):** Como el **Desflurano tiene un punto de ebullición de $22,8\text{ }^\circ\text{C}$** (hierve a temperatura ambiente de quirófano) y una presión de vapor altísima ($669\text{ mmHg}$ a $20\text{ }^\circ\text{C}$), **NO puede usar un vaporizador pasivo de bypass variable**: requiere un **vaporizador calentado eléctricamente a $39\text{ }^\circ\text{C}$ y presurizado a $2\text{ atm}$** que inyecta vapor puro electrónicamente según el flujo de gas fresco.
2. **Circuito Circular, Cal Sodada y Concertina (*Bellows*) o Pistón:**
   - **Válvulas unidireccionales inspiratoria y espiratoria**, bolsa reservorio manual, válvula limitadora de presión ajustable (**APL**) y **canister de Cal Sodada** ($\approx 80\%\text{ Ca(OH)}_2 + \text{NaOH} + \text{H}_2\text{O} + \text{indicador de pH violeta de etilo}$ que vira de blanco a violeta cuando se agota al absorber $\text{CO}_2$ formando carbonato cálcico $\text{CaCO}_3$ con desprendimiento de calor y agua).
   - **Ventilador de anestesia:** Tradicionalmente de **concertina (fuelle ascendente o descendente) impulsada neumáticamente (*bag-in-bottle*)**, de **pistón accionado por motor eléctrico** o de **turbina/reflector de volumen** que permiten trabajar en **anestesia de bajos flujos ($< 1\text{ L/min}$) y flujos mínimos ($< 0,5\text{ L/min}$)**.
3. **Sistema de Evacuación de Gases Anestésicos Residuales (AGSS / SEGA):** Conectado a la toma mural específica de vacío/extracción de gases anestésicos para evitar la exposición laboral del personal de quirófano al $\text{N}_2\text{O}$ y halogenados.
4. **Equipamiento asociado en anestesia:** **Analizador multigas por infrarrojos (NDIR)** (mide $\text{CO}_2$, $\text{N}_2\text{O}$ y concentración inspirada/espirada de halogenados junto con la **CAM — Concentración Alveolar Mínima**), **Monitor de Profundidad Anestésica (BIS — *Índice Biespectral* o Entropía del EEG**, rango objetivo en anestesia quirúrgica general: **$\text{BIS} = 40\text{ a }60$**) y **Monitor de Relajación Neuromuscular (TOF — *Train of Four*** por aceleromiografía del nervio cubital; para extubar con seguridad el cociente $\text{T4/T1}$ debe ser $\ge 0,90$).

---

## 3. Tema 23: Sistemas de Monitorización de Pacientes (Parámetros, Principios Físicos y Sensores)

| Parámetro Fisiológico | Principio Físico del Sensor / Transductor | Detalles Técnicos Clave de Examen |
| :--- | :--- | :--- |
| **1. Electrocardiograma (ECG)** | Biopotenciales eléctricos cardíacos en piel ($\approx 0,5\text{ a }5\text{ mV}$) captados con electrodos de **$\text{Ag/AgCl}$ (Plata / Cloruro de Plata)** y amplificador diferencial de instrumentación con alto rechazo al modo común (**$\text{CMRR} > 100\text{ dB}$**). | • **Parte aplicable Tipo CF protegida contra desfibrilación**.<br>• **Bandas de filtrado en el monitor:**<br>  - **Modo Monitorización:** **$0,5\text{ a }40\text{ Hz}$** (elimina deriva de línea base por respiración y ruido muscular EMG/red $50\text{ Hz}$).<br>  - **Modo Diagnóstico:** **$0,05\text{ a }100\text{–}150\text{ Hz}$** (necesario para ver elevaciones/descensos reales del segmento ST sin distorsión de fase).<br>• **Triángulo de Einthoven y Ley de Einthoven:** $\text{II} = \text{I} + \text{III}$. Con **3 latiguillos** (RA, LA, LL) se obtienen I, II, III; con **5 latiguillos** (RA, LA, LL, RL [neutro/pierna derecha] + V) se obtienen **7 derivaciones simultáneas** (I, II, III, aVR, aVL, aVF y 1 precordial V); con **10 latiguillos** se obtienen las **12 derivaciones estándar**. |
| **2. Frecuencia Respiratoria por Impedancia** | **Neumografía por Impedancia Transtarácica** a través de los propios electrodos de ECG (derivación I o II). | Inyecta una corriente alterna de alta frecuencia ($50\text{–}100\text{ kHz}$) e intensidad imperceptible ($< 100\text{ }\mu\text{A}$) y mide el cambio de impedancia torácica ($\Delta Z \approx 0,1\text{–}3\text{ }\Omega$) al entrar y salir aire de los pulmones. |
| **3. Pulsioximetría ($\text{SpO}_2$)** | **Espectrofotometría óptica (Ley de Beer-Lambert)** + **Fotopletismografía pulsátil** con dos LEDs y un fotodiodo detector. | • **Las 2 longitudes de onda exactas (¡Pregunta fija!):**<br>  - **Luz Roja ($\lambda_1 = \mathbf{660\text{ nm}}$):** La hemoglobina reducida/desoxigenada ($\text{Hb}$) absorbe más luz que la oxihemoglobina ($\text{HbO}_2$).<br>  - **Luz Infrarroja ($\lambda_2 = \mathbf{940\text{ nm}}$):** La oxihemoglobina ($\text{HbO}_2$) absorbe más luz que la desoxihemoglobina.<br>• Aísla solo la **componente pulsátil arterial ($\text{AC}$)** frente a la no pulsátil venosa/tisular ($\text{DC}$), calculando el cociente $R = \frac{\text{AC}_{660}/\text{DC}_{660}}{\text{AC}_{940}/\text{DC}_{940}}$.<br>• *Limitación clásica:* Los pulsioxímetros convencionales de 2 longitudes de onda no distinguen la **carboxihemoglobina ($\text{COHb}$, intoxicación por CO)** (que absorbe a $660\text{ nm}$ igual que la $\text{HbO}_2$, dando una **$\text{SpO}_2$ falsamente normal/alta del $98\text{–}100\%$**); para medir $\text{COHb}$ y metahemoglobina se requiere un **Co-oxímetro de múltiples longitudes de onda ($\ge 7\text{–}8\text{ }\lambda$)**. |
| **4. Presión Arterial No Invasiva (PANI / NIBP)** | **Método Oscilométrico** automatizado con manguito neumático inflado por compresor y válvula de desinflado escalonado. | • El transductor piezoresistivo mide las oscilaciones de presión de la pared arterial transmitidas al manguito.<br>• **¡Pregunta fija de test!** ¿Qué valor mide directamente el método oscilométrico y cuáles calcula por algoritmo?<br>  - Mide directamente la **Presión Arterial Media (PAM)**, que corresponde al **punto de máxima amplitud de las oscilaciones**.<br>  - La **Presión Sistólica (PAS)** y la **Presión Diastólica (PAD)** se estiman algorítmicamente a partir de las envolventes de subida y bajada respecto a la PAM. |
| **5. Presión Arterial Invasiva (PAI / IBP) y Presiones Intracavitarias** | Catéter intraarterial relleno de suero heparinizado presurizado a **$300\text{ mmHg}$** ($3\text{ ml/h}$) conectado a un **transductor de presión de galgas extensiométricas (*strain gauge* piezoresistivo en Puente de Wheatstone)**. | • **Calibración del «Cero» hidrostático:** El transductor debe nivelarse a la altura del **eje flebostático** (aurícula derecha: $4^\circ$ espacio intercostal en línea axilar media) y ponerse a cero frente a la presión atmosférica.<br>• Mide en tiempo real PAS, PAD, PAM, Presión Venosa Central (**PVC**), Presión de Arteria Pulmonar (**Catéter de Swan-Ganz**, que además mide el **Gasto Cardíaco por Termodilución**) o Presión Intracraneal (**PIC**). |
| **6. Capnografía ($\text{EtCO}_2$)** | **Espectroscopía de absorción Infrarroja No Dispersiva (NDIR)** en la banda de absorción específica del $\text{CO}_2$ (**$\lambda = \mathbf{4,26\text{ }\mu\text{m}}$**). | • **Dos configuraciones de sensor:**<br>  1. ***Mainstream* (Flujo principal):** Sensor óptico colocado directamente en el adaptador del tubo endotraqueal (respuesta instantánea sin retardo, sin extracción de gas).<br>  2. ***Sidestream* (Flujo lateral o aspirativo):** Aspira una muestra continua de $50\text{–}150\text{ ml/min}$ por una línea capilar hacia el monitor (útil también en pacientes no intubados; ligero retardo temporal de $1\text{–}2\text{ s}$). |
| **7. Temperatura Corporal** | **Termistores (NTC — coeficiente de temperatura negativo)** en sondas cutáneas, esofágicas, rectales o vesicales, o **piroelectricidad infrarroja** timpánica. | Los termistores NTC presentan una gran variación exponencial de resistencia con la temperatura en el rango clínico ($30\text{–}42\text{ }^\circ\text{C}$), logrando precisiones de $\pm 0,1\text{ }^\circ\text{C}$. |

---

## 4. Tema 20, Tema 25 y Tema 26: Endoscopia Diagnóstica/Terapéutica, Endoscopia Quirúrgica (Torre de Laparoscopia) y Robotización Quirúrgica

### 4.1. Endoscopia Flexible Diagnóstica y Terapéutica (Tema 20: Digestiva, Bronquial, Urológica)
1. **Evolución tecnológica:** De los antiguos *fibroscopios* (haces coherentes de fibra óptica que transmitían la imagen con patrón en panal de abeja) se pasó a los **Videoendoscopios Electrónicos Distales (*Chip-on-the-Tip*)**: en la punta distal del tubo de inserción se aloja un sensor **CCD o CMOS miniatura** con lentes objetivo que convierte la imagen óptica directamente en señal eléctrica digital de alta definición (HD / 4K), mientras que la **iluminación fría** sigue llegando hasta la punta mediante haces de fibra óptica o LEDs distales.
2. **Estructura mecánica e interna de un Videoendoscopio Flexible:**
   - **Conector universal (umbilical):** Se enchufa al procesador de vídeo y fuente de luz; integra las conexiones de aire, agua, aspiración y vídeo.
   - **Cuerpo de mando proximal:** Ruedas de angulación mecánica por **cables Bowden** (**Arriba/Abajo** hasta $180\text{–}210^\circ$ y **Derecha/Izquierda** hasta $100\text{–}160^\circ$) con frenos, botones de **insuflación de aire/$\text{CO}_2$ y lavado de lente con agua**, botón de **aspiración** y **entrada del canal de trabajo / biopsia** ($2,0\text{ a }4,2\text{ mm}$ de diámetro para pinzas, asas de polipectomía, agujas de esclerosis o fibra láser).
   - **Tecnologías de Cromoendoscopia Virtual Óptica/Digital:** **NBI (*Narrow Band Imaging*)**: filtra la luz blanca dejando pasar solo dos bandas estrechas (**azul $415\text{ nm}$ y verde $540\text{ nm}$**), que coinciden con los picos de absorción de la hemoglobina, resaltando los capilares mucosos superficiales y vasos submucosos para detectar displasias y tumores precoces.
   - **Ecoendoscopia (USE) y Cápsula Endoscópica Inalámbrica.**
   - **Mantenimiento crítico:** **Test de Estanqueidad (Prueba de Fugas)** obligatorio tras cada uso y antes de sumergir el endoscopio en la lavadora-termodesinfectora para evitar que entre líquido al canal de cables y destruya el CCD/CMOS.

### 4.2. Sistemas de Endoscopia Quirúrgica — La Torre de Laparoscopia / Artroscopia / Histeroscopia (Tema 25)
Una **Torre de Cirugía Endoscópica / Laparoscópica** consta de **5 módulos esenciales**:
1. **Óptica Rígida (Laparoscopio / Artroscopio):** Tubo metálico rígido con **sistema de lentes cilíndricas de barra de cuarzo de Hopkins (*Rod-Lens System*)** que maximiza la transmisión luminosa y el campo de visión, con ángulos de visión de **$0^\circ$ (frontal), $30^\circ$ o $45^\circ$ (oblicuos)** y haz periférico de fibra óptica para la luz. *(Esterilizable en autoclave a $134\text{ }^\circ\text{C}$ o peróxido de hidrógeno).*
2. **Cabezal de Cámara y Procesador de Vídeo Quirúrgico (Full HD / 4K / 3D / Fluorescencia NIR-ICG):**
   - Cabezal con **3 sensores CMOS/CCD (3-Chip: uno para Rojo, otro para Verde y otro para Azul mediante prisma dicroico)** para máxima fidelidad cromática del tejido y sangrado.
   - **Imagen guiada por fluorescencia en Infrarrojo Cercano (NIR / ICG — Verde de Indocianina, excitación a $\approx 780\text{–}805\text{ nm}$ y emisión a $\approx 830\text{ nm}$):** Permite visualizar en tiempo real la perfusión vascular de anastomosis intestinales, la vía biliar o el ganglio centinela.
3. **Fuente de Luz Fría (LED o Xenón de $180\text{–}300\text{ W}$):** Filtra la radiación infrarroja (calor) y se conecta a la óptica mediante cable de fibra óptica o gel líquido.
4. **Insuflador Electrónico de $\text{CO}_2$ (Neumoperitoneo en Laparoscopia):**
   - Insufla **Dióxido de Carbono ($\text{CO}_2$ medicinal)** en la cavidad abdominal para crear el espacio quirúrgico de trabajo.
   - **¿Por qué se usa $\text{CO}_2$ y no aire u oxígeno? (¡Pregunta fija de test!):** Porque el $\text{CO}_2$ **1) NO es inflamable ni comburente** (permite usar electrobisturí dentro del abdomen sin riesgo de explosión) y **2) Es altamente soluble en la sangre y se elimina rápidamente por ventilación pulmonar**, minimizando el riesgo de embolia gaseosa mortal.
   - **Parámetros regulados por el insuflador:** **Presión intraabdominal preseleccionada** (en adulto típicamente **$12\text{ a }15\text{ mmHg}$**) y **Flujo de insuflación** ($1\text{ a }40\text{–}50\text{ L/min}$), con calefacción/humidificación del gas y válvula de descompresión automática por sobrepresión.
5. **Bomba de Irrigación-Aspiración (Artroscopia / Histeroscopia / Laparoscopia):** Regula la presión de distensión articular o uterina con suero salino (o glicina/sorbitol no conductor si se usa electrocirugía monopolar).

### 4.3. Tema 26: Robotización Quirúrgica (Principios, Tipos y Tecnologías)
1. **Clasificación de los Robots Quirúrgicos según su Grado de Autonomía y Arquitectura:**
   - **Sistemas Telemanipulados Maestro-Esclavo (Telecirugía asistida por robot — Estándar en cirugía de tejidos blandos: *Da Vinci*, *Hugo RAS*, *Versius*):** El robot **NO opera de forma autónoma**; traduce en tiempo real los movimientos de las manos del cirujano en la consola maestra a los instrumentos robóticos intracorpóreos.
   - **Sistemas Guiados por Imagen / Navegación y Brazo Robótico Semiautónomo con Restricción Háptica (Ortopedia/Prótesis de rodilla y cadera [*Mako*, *ROSA*] y Columna/Neurocirugía [*Mazor*, *ExcelsiusGPS*]):** Planifican sobre el TC 3D preoperatorio o intraoperatorio la trayectoria exacta de los tornillos pediculares o los planos de corte óseo y el brazo robótico impide físicamente que la fresa del cirujano se salga de los límites de seguridad (*haptic boundary*).
2. **Los 3 Componentes de un Sistema Quirúrgico Telemanipulado (ej. *Da Vinci*):**
   1. **Consola del Cirujano (*Master Console*):** Visor estereoscópico **3D-HD inmersivo** + mandos maestros (*Master Controllers*) + pedales de embrague (*clutch*), cambio de brazo y activación de energía monopolar/bipolar/sellador.
   2. **Carro del Paciente (*Patient-Side Cart*):** Dispone de **4 brazos robóticos electromecánicos** (1 para el endoscopio 3D y 3 para instrumentos quirúrgicos) que pivotan siempre alrededor de un **Centro Remoto de Movimiento fijo (*Remote Center of Motion* — RCM)** situado exactamente en la pared abdominal (trócar), para **no ejercer palanca ni desgarrar la pared abdominal del paciente**.
   3. **Torre de Visión (*Vision Cart*):** Unidad central de procesamiento óptico, fuente de luz, generador electroquirúrgico integrado y pantalla táctil para el equipo de enfermería/ayudante.
3. **Ventajas Técnicas Clave de la Robótica Quirúrgica frente a la Laparoscopia Convencional (¡Pregunta de examen!):**
   - **Instrumentos articulados distales (*EndoWrist*) con 7 grados de libertad** (superan la articulación de la muñeca humana frente a los 4 grados de libertad de las pinzas laparoscópicas rígidas).
   - **Eliminación del «Efecto Fulcro» (inversión de movimiento):** En laparoscopia convencional, para mover la punta a la derecha el cirujano debe mover la mano a la izquierda; el robot corrige cinemáticamente esta inversión haciendo el movimiento intuitivo.
   - **Filtrado digital del temblor fisiológico** de las manos del cirujano ($6\text{–}12\text{ Hz}$).
   - **Escalado de movimiento (*Motion Scaling*, ej. $3:1$ o $5:1$):** Un desplazamiento de $3\text{ cm}$ en los dedos del cirujano se traduce en un movimiento micrométrico de $1\text{ cm}$ en la punta del instrumento.
   - **Visión tridimensional (3D) real estable** controlada por el propio cirujano y ergonomía sedente.

---

## 5. Tema 28: Equipamiento de Neonatología (Incubadoras, Cunas Térmicas, Fototerapia y Transporte)

El recién nacido (especialmente el prematuro) es extremadamente vulnerable a la hipotermia por su alta relación superficie/masa corporal, escasa grasa parda y epidermis inmadura, perdiendo calor por **4 mecanismos físicos (`UNE-EN IEC 60601-2-19` Incubadoras y `60601-2-21` Cunas térmicas)**:
1. **Convección:** Hacia el aire circulante más frío ($\rightarrow$ se controla calentando el aire de la incubadora).
2. **Evaporación:** Pérdida transepidérmica de agua y por vía respiratoria ($\rightarrow$ se controla manteniendo una **humedad relativa alta del $60\text{–}85\%$** dentro de la incubadora).
3. **Radiación:** Hacia las paredes frías de metacrilato de la incubadora ($\rightarrow$ se minimiza con **incubadoras de doble pared** o con el calefactor infrarrojo de la cuna térmica).
4. **Conducción:** Hacia el colchón ($\rightarrow$ colchón atérmico o colchón térmico de gel).

### 5.1. Incubadora Neonatal Cerrada vs. Cuna Térmica Radiante vs. Incubadora Híbrida
- **Incubadora Neonatal Cerrada (`IEC 60601-2-19`):**
  - Crea un microclima cerrado con circulación forzada de aire filtrado (**filtro HEPA**), resistencia calefactora, **humidificador servocontrolado por ebullición/vapor estéril** (evita aerosoles bacterianos como *Pseudomonas*), sensor de $\text{O}_2$, báscula integrada en el lecho y bandeja portachasis de rayos X bajo el colchón.
  - **Dos modos de control térmico:** **1) Modo Aire (Manual):** mantiene constante la temperatura del aire del habitáculo ($30\text{–}39\text{ }^\circ\text{C}$); **2) Modo Piel (Servocontrolado por el paciente):** una sonda cutánea con termistor pegada en el abdomen/hígado del neonato regula automáticamente el calefactor para mantener la temperatura cutánea en $36,5\text{ }^\circ\text{C}$.
  - **Requisito acústico crítico:** El nivel de ruido en el interior del habitáculo de la incubadora en funcionamiento normal debe ser **$< 45\text{–}60\text{ dBA}$** (recomendación clínica $< 45\text{ dBA}$ para evitar daño coclear y estrés neonatal).
- **Cuna Térmica o Calentador Radiante Abierto (`IEC 60601-2-21`):**
  - Lecho abierto para **reanimación neonatal en paritorio, canalización de vías y procedimientos urgentes**. Calienta al neonato por **radiación infrarroja** emitida por un cabezal superior cerámico o de cuarzo con reflector parabólico, operando obligatoriamente en **Modo Servocontrolado por sonda de piel** (si se opera en modo manual al $100\%$, salta alarma cada $15\text{ minutos}$ para evitar hipertermia/quemaduras). Incorpora módulo de reanimación con **reanimador con pieza en T (*Neopuff*)** (regula PIP y PEEP), mezclador $\text{O}_2$/Aire, aspirador y cronómetro de Apgar.
- **Incubadora Híbrida (Doble función):** Su cúpula se eleva motorizadamente transformándose en segundos de incubadora cerrada a cuna térmica abierta sin tener que mover al prematuro extremo.
- **Incubadora de Transporte Neonatal (`IEC 60601-2-20`):** Montada en camilla de ambulancia/helicóptero con **baterías de autonomía $\ge 2\text{–}4\text{ horas}$**, botellas de $\text{O}_2$ y aire medicinal, respirador neonatal integrado y monitor multiparamétrico.
- **Lámpara / Manta de Fototerapia Neonatal (`IEC 60601-2-50`):** Emite **luz azul de alta intensidad en el espectro de $\mathbf{430\text{ a }490\text{ nm}}$ (pico óptimo en $\mathbf{450\text{–}460\text{ nm}}$)** con LEDs azules que fotoisomerizan la bilirrubina no conjugada de la piel en **lumirrubina hidrosoluble** excretable sin necesidad de conjugación hepática (con irradiancia espectral $\ge 30\text{ }\mu\text{W}/(\text{cm}^2\cdot\text{nm})$ en fototerapia intensiva y protección ocular obligatoria al neonato).

---

## 6. Tema 31: Desfibriladores (Fundamentos, Onda Monofásica vs. Bifásica y Soporte Vital)

### 6.1. Principio Físico y Circuito Interno de un Desfibrilador (`UNE-EN 60601-2-4`)
La desfibrilación consiste en hacer pasar a través del miocardio una corriente eléctrica intensa durante unos pocos milisegundos ($5\text{–}15\text{ ms}$) para despolarizar simultáneamente una masa crítica de fibras miocárdicas, interrumpiendo los circuitos caóticos de reentrada de la **Fibrilación Ventricular (FV)** o la **Taquicardia Ventricular sin pulso (TVsp)** para que el nodo sinusal retome el ritmo.
- **Circuito básico de almacenamiento y descarga:**
  1. Batería / Fuente de alimentación y **convertidor DC-DC elevador de alta tensión ($1.500\text{ a }4.000\text{ V}$)** que carga un **Condensador de almacenamiento de energía ($C \approx 30\text{–}200\text{ }\mu\text{F}$)**:
     $$E_{\text{almacenada}} = \frac{1}{2} C \cdot V^2$$
  2. **Puente en «H» de conmutación de estado sólido (transistores IGBT / tiristores)** e inductancia conformadora de onda que descarga el condensador hacia las palas o parches adhesivos a través de la **impedancia transtorácica del paciente ($Z_{\text{paciente}} \approx \mathbf{50\text{ }\Omega}\text{ de referencia en ensayo}$, rango real $25\text{ a }150\text{ }\Omega$)**.

### 6.2. Onda Monofásica vs. Onda Bifásica (¡Pregunta fija de test!)
- **Onda Monofásica (Antigua — Senoidal amortiguada de Edmark o Exponencial truncada):** La corriente circula en un único sentido de un electrodo al otro; requería energías altas de **$360\text{ Julios}$**, provocando mayor daño miocárdico y quemaduras cutáneas.
- **Onda Bifásica (Estándar actual — Bifásica Exponencial Truncada [BTE] o Bifásica Rectilínea [RLB]):**
  - Durante la primera fase ($\approx 6\text{ ms}$) la corriente fluye en sentido positivo, y en la segunda fase ($\approx 4\text{ ms}$) el puente en H **invierte la polaridad** haciendo circular la corriente en sentido opuesto (eliminando la carga residual de las membranas celulares).
  - **Ventajas de la onda bifásica:** Consigue igual o mayor eficacia de desfibrilación al primer choque con **casi la mitad de energía ($150\text{ a }200\text{ Julios}$ en adulto; en niños $4\text{ J/kg}$)**, menor daño miocárdico post-resucitación y **compensación automática de la impedancia transtorácica del paciente** (mide la impedancia en el primer milisegundo y ajusta la duración/voltaje de las fases).

### 6.3. Modos de Funcionamiento: Desfibrilación Asíncrona vs. Cardioversión Sincronizada (¡Trampa clásica de examen!)
1. **Desfibrilación (Modo ASÍNCRONO):** La descarga se libera inmediatamente al pulsar los botones de choque, sin esperar a ninguna onda del ECG.
   - **Indicaciones (Ritmos desfibrilables en PCR):** **Fibrilación Ventricular (FV)** y **Taquicardia Ventricular sin pulso (TVsp)**. *(Nota: La **Asistolia** y la **Actividad Eléctrica Sin Pulso — AESP** **NO son ritmos desfibrilables**).*
2. **Cardioversión Eléctrica (Modo SINCRONIZADO — Botón «SYNC»):**
   - El equipo detecta el complejo QRS del paciente y **sincroniza la descarga exactamente con la cima de la onda R del complejo QRS**, **evitando disparar sobre la rama ascendente/pico de la onda T (período vulnerable de repolarización ventricular)**, ya que un choque sobre la onda T induciría una **Fibrilación Ventricular (fenómeno R sobre T)**.
   - **Indicaciones:** Taquiarritmias **con pulso** y complejo QRS identificable (**Fibrilación Auricular, Flutter Auricular, Taquicardia Supraventricular, Taquicardia Ventricular monomorfa con pulso**).
3. **Marcapasos Transcutáneo Externo (integrado en los monitores-desfibriladores manuales):** Envía pulsos cuadrados de corriente constante ($40\text{–}140\text{ mA}$ y $20\text{–}40\text{ ms}$ de anchura) a través de los parches en bradicardias extremas o bloqueos AV completos hasta implantar un marcapasos endocavitario.
4. **Tipos de equipos:** **Manuales** (monitores-desfibriladores de carro de paradas/UCI/ambulancias), **Desfibriladores Externos Automatizados (DEA / DESA — Clase III en el MDR 2017/745 por Regla 22)** y **Desfibriladores Internos** (con cucharas estériles aplicadas directamente sobre el corazón en cirugía cardíaca abierta con energías de solo **$10\text{ a }50\text{ Julios}$**).

---

## 7. Tema 35 y Tema 37: Fuentes de Energía Quirúrgica (Electrobisturís, Ultrasonidos, Selladores, Láser) y Equipamiento del Bloque Quirúrgico

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
