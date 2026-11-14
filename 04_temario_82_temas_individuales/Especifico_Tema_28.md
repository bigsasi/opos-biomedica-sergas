# Tema 28 — Caracterización y funcionamiento del equipamiento de neonatología. Cunas térmicas. Incubadoras. Transporte neonatal.

> - **Parte del Programa:** Parte Específica (74 Temas · Orden DOG #28 de 74) — Ejercicio 1.º Eliminatorio
> - **Bloque Temático SERGAS:** Bloque 05 — Electromedicina de Cuidados Críticos, Quirófano, Ventilación, Anestesia, Monitorización, Endoscopia y Robótica
> - **Marco Normativo y Técnico Nuclear:** Real Decreto 838/2015 y Orden EFP/1216/2019 (Módulos 1586, 1587, 1589 y 1591), Reglamento (UE) 2017/745 (MDR), Real Decreto 192/2023, UNE-EN IEC 60601-2-19 (Incubadoras para bebés), UNE-EN IEC 60601-2-20 (Incubadoras de transporte para bebés), UNE-EN IEC 60601-2-21 (Calentadores radiantes / Cunas térmicas para bebés), UNE-EN IEC 60601-2-50 (Equipos de fototerapia para bebés), UNE-EN 1789 (Ambulancias de transporte sanitario), UNE-EN 62353
> - **Sistemas y Entorno SERGAS:** Unidades de Cuidados Intensivos Neonatales (UCIN), Unidades de Neonatología y Paritorios de las 7 Áreas Sanitarias del SERGAS, Transporte Neonatal Crítico (FPUSG-061 Galicia), IANUS, GACELA y XMAO

---

## 🎯 0. Alcance Oficial del Epígrafe y Cruce con Otras Oposiciones del SERGAS

El **Tema 28** de la Parte Específica del programa oficial de **Ingeniero/a Biomédico/a (Subgrupo A1)** del Servicio Gallego de Salud (SERGAS), publicado en el *Diario Oficial de Galicia* (DOG núm. 67, de 13 de abril de 2026), desarrolla de forma íntegra la biofísica de la termorregulación del recién nacido y la ingeniería electromédica del **equipamiento de neonatología**: **incubadoras neonatales cerradas (`UNE-EN IEC 60601-2-19`)**, **cunas térmicas o calentadores radiantes abiertos con módulo de reanimación (`UNE-EN IEC 60601-2-21`)**, **incubadoras híbridas**, **incubadoras de transporte neonatal terrestre y aéreo (`UNE-EN IEC 60601-2-20`)** y **equipos de fototerapia para hiperbilirrubinemia neonatal (`UNE-EN IEC 60601-2-50`)**, así como su verificación metrológica mediante analizadores multiparamétricos de incubadoras.

Su contenido técnico responde a los currículos oficiales del **Real Decreto 838/2015** y la **Orden EFP/1216/2019**:
- **Módulo Profesional 1589 (*Sistemas de monitorización, registro y cuidados críticos*):** Incluye explícitamente la **incubadora** dentro de los equipos de soporte de cuidados críticos, detallando sus lazos de control de temperatura (modo aire y modo piel servocontrolado), humedad activa, concentración de oxígeno, nivel acústico y los ensayos preventivos con **analizador de incubadoras**, medidor de $\text{O}_2$ y analizador de seguridad eléctrica (`UNE-EN 62353`).
- **Módulo Profesional 1587 (*Sistemas electrónicos y fotónicos*):** Sensores de temperatura por termistores NTC dobles, calentadores infrarrojos de cuarzo y cerámicos, fuentes de luz LED de nitruro de galio en banda azul ($430\text{–}490\text{ nm}$) y radiometría óptica.
- **Módulo Profesional 1591 (*Sistemas de rehabilitación y pruebas funcionales*):** Uso del **radiómetro de fototerapia** y fotómetro para cuantificación de irradiancia espectral.

### Cruce Verificado con Otras Categorías del SERGAS (`cruce_temarios_sergas.md`)

- **Categorías con solapamiento:** **Ingeniero/a Técnico/a**
- **Grado de solapamiento:** **Medio (45%)**: Relación con equipamiento de unidades críticas (UCI neonatal), ventilación y monitorización.
- **Epígrafes equivalentes:**
  - `• Tema 46. El bloque quirúrgico: instalaciones y equipos. Circuitos. UCIs y unidades de reanimación post-anestésica: instalaciones y equipos. Inspección y mantenimiento.`
  - `• Tema 47. Monitorización. Desfibriladores. Bisturís. Equipos de ventilación.`

---

## 📖 1. Fundamentos Conceptuales, Físicos o Jurídicos y Marco Normativo

### 1.1. Fisiopatología de la Termorregulación Neonatal y el Ambiente Térmico Neutro (ATN)

El recién nacido —y de manera extrema el **recién nacido prematuro ($< 37\text{ semanas}$ de gestación)** y el **gran prematuro de muy bajo peso al nacer ($< 1.500\text{ g}$) o extremo bajo peso ($< 1.000\text{ g}$)**— presenta una vulnerabilidad crítica al estrés por frío debido a cuatro factores anatómicos y fisiológicos:
1. **Elevadísima relación Superficie Corporal / Masa Corporal ($A / m$):** Un neonato a término de $3,2\text{ kg}$ tiene una relación superficie/masa **3 veces superior** a la de un adulto, y en un prematuro de $800\text{ g}$ es hasta **5 a 6 veces superior**, exponiendo una gran área de intercambio calórico frente a una masa metabólica productora de calor muy reducida.
2. **Inmadurez del estrato córneo epidérmico:** Antes de las $30\text{–}32\text{ semanas}$ de gestación, la epidermis carece de queratinización completa, provocando una **Pérdida Transepidérmica de Agua (*Transepidermal Water Loss* — TEWL)** hasta $10\text{–}15$ veces mayor que la del adulto, con el consiguiente enfriamiento evaporativo masivo y deshidratación hipernatrémica.
3. **Escasez de panículo adiposo subcutáneo aislante y reservas limitadas de Grasa Parda:** El neonato no puede generar calor mediante escalofríos musculares (*shivering*) y depende de la **termogénesis química no tiritante** por oxidación de lípidos en el tejido adiposo pardo (rico en mitocondrias con termogenina UCP1), cuyas reservas son mínimas en el prematuro.
4. **Consecuencias clínicas de la hipotermia neonatal ($T_{\text{central}} < 36,0\text{ }^\circ\text{C}$):** El estrés por frío dispara el consumo de oxígeno ($\dot{V}\text{O}_2$) y de glucosa para intentar mantener la temperatura, desencadenando **hipoglucemia, hipoxia tisular, acidosis metabólica láctica, vasoconstricción pulmonar con hipertensión pulmonar persistente (cortocircuito derecha-izquierda), inhibición de la síntesis de surfactante pulmonar (empeorando el síndrome de distrés respiratorio)** y aumento exponencial de la mortalidad neonatal.

Por ello, el objetivo de todo el equipamiento térmico neonatal es mantener al paciente dentro de su **Ambiente Térmico Neutro (ATN — *Neutral Thermal Environment*)**, definido como el rango estrecho de temperatura y humedad ambiental en el cual el neonato mantiene una temperatura corporal central normal (**$36,5\text{ }^\circ\text{C a }37,5\text{ }^\circ\text{C}$**) con un **consumo metabólico de oxígeno ($\dot{V}\text{O}_2$) y gasto calórico mínimos**.

### 1.2. Ecuación del Balance Térmico y los 4 Mecanismos Físicos de Transferencia de Calor

La tasa de variación del calor almacenado en el cuerpo del neonato ($Q_{\text{neto}}$) viene regida por el Primer Principio de la Termodinámica aplicado a la bioingeniería térmica:
$$Q_{\text{neto}} = Q_{\text{met}} - \left( Q_{\text{conv}} + Q_{\text{rad}} + Q_{\text{evap}} + Q_{\text{cond}} \right)$$
Donde $Q_{\text{met}}$ es la tasa de producción metabólica interna de calor ($\text{W/m}^2$) y los cuatro sumandos del paréntesis representan los **cuatro mecanismos físicos de transferencia de calor** entre la piel del neonato y su entorno, cada uno de los cuales es neutralizado mediante una solución de ingeniería específica en las incubadoras y cunas térmicas:

1. **Convección ($Q_{\text{conv}}$ — Ley de Enfriamiento de Newton):**
   Transferencia térmica entre la superficie cutánea del neonato ($T_{\text{piel}}$) y la corriente de aire circulante que la rodea ($T_{\text{aire}}$):
   $$Q_{\text{conv}} = h_c \cdot A_c \cdot \left( T_{\text{piel}} - T_{\text{aire}} \right)$$
   Donde el coeficiente de película convectivo $h_c$ crece con la raíz cuadrada de la velocidad del aire ($h_c \propto \sqrt{v_{\text{aire}}}$).
   - **Solución de Ingeniería:** En la **incubadora cerrada**, se calienta el aire del habitáculo hasta igualar el ATN ($32\text{–}37\text{ }^\circ\text{C}$), se limita la velocidad del flujo de aire sobre el colchón a **$< 0,10\text{–}0,35\text{ m/s}$** y se generan **cortinas aerodinámicas de aire caliente** frente a los portillos de acceso cuando el personal los abre. En la **cuna térmica abierta**, se colocan paredes laterales abatibles cortavientos y film plástico transparente sobre el prematuro.
2. **Radiación ($Q_{\text{rad}}$ — Ley de Stefan-Boltzmann):**
   Intercambio neto de ondas electromagnéticas en el infrarrojo térmico ($\lambda \approx 5\text{–}15\text{ }\mu\text{m}$) entre la piel del neonato y las superficies sólidas circundantes a distancia (las paredes de polimetilmetacrilato PMMA de la cúpula de la incubadora o las paredes del paritorio a temperatura $T_{\text{pared}}$ en Kelvin), **sin que intervenga la temperatura del aire intermedio**:
   $$Q_{\text{rad}} = \varepsilon_{\text{piel}} \cdot \sigma \cdot F_{1\rightarrow 2} \cdot A_r \cdot \left( T_{\text{piel}}^4 - T_{\text{pared}}^4 \right)$$
   Donde $\sigma = 5,67 \times 10^{-8}\text{ W/(m}^2\cdot\text{K}^4)$ es la constante de Stefan-Boltzmann y $\varepsilon_{\text{piel}} \approx 0,98$.
   - **Trampa física clásica:** Si una incubadora de **pared simple** está situada en una UCI fría o cerca de una ventana, el aire interior puede estar a $36\text{ }^\circ\text{C}$, pero la pared única de metacrilato se enfría en contacto con el exterior (ej. a $24\text{ }^\circ\text{C}$) y el neonato **pierde calor masivamente por radiación hacia la cúpula fría** a pesar de que el termómetro de aire marque $36\text{ }^\circ\text{C}$.
   - **Solución de Ingeniería:** **Incubadoras de Doble Pared (Cúpula de doble acrilato)** separadas por una cámara de aire por la que circula aire caliente impulsado por la turbina, manteniendo la pared interna a la misma temperatura que el aire del habitáculo ($T_{\text{pared\_int}} \approx T_{\text{aire}}$), o bien el **calefactor infrarrojo superior** en la **cuna térmica radiante** ($Q_{\text{rad}} < 0$, ganancia radiante neta).
3. **Evaporación ($Q_{\text{evap}}$ — Calor Latente de Vaporización del Agua):**
   Pérdida energética por el cambio de fase líquido-vapor del agua que difunde a través de la epidermis inmadura (TEWL), del líquido amniótico tras el parto y de la mucosa respiratoria. Cada gramo de agua que se evapora sobre la piel sustrae un **calor latente de vaporización $\Delta H_{\text{vap}} \approx 2.427\text{ Julios/g}$ ($0,58\text{ kcal/g}$)**:
   $$Q_{\text{evap}} = \dot{m}_{\text{H}_2\text{O}} \cdot \Delta H_{\text{vap}} \propto A_e \cdot \left( P_{v,\text{piel}} - \text{HR} \cdot P_{v,\text{sat}}(T_{\text{aire}}) \right)$$
   Donde la tasa de evaporación es directamente proporcional al déficit de presión parcial de vapor de agua entre la piel saturada y el aire ambiente.
   - **Solución de Ingeniería:** **Humidificación activa servocontrolada por vapor estéril** en el interior de la incubadora hasta alcanzar una **Humedad Relativa ($\text{HR}$) del $\mathbf{60\%\text{ al }85\%\text{–}95\%}$** durante la primera semana de vida del gran prematuro (anulando el gradiente de presión de vapor), además del secado inmediato en paritorio y humidificación activa de los gases respiratorios ($37\text{ }^\circ\text{C}$, $44\text{ mg H}_2\text{O/L}$).
4. **Conducción ($Q_{\text{cond}}$ — Ley de Fourier):**
   Transferencia de calor por contacto directo entre la piel de la espalda del neonato y la superficie sólida del colchón ($T_{\text{colchón}}$) de espesor $d$ y conductividad térmica $k$:
   $$Q_{\text{cond}} = k \cdot A_{\text{contacto}} \cdot \frac{T_{\text{piel}} - T_{\text{colchón}}}{d}$$
   - **Solución de Ingeniería:** Empleo de **colchones viscoelásticos radiotransparentes de muy baja conductividad térmica ($k$ mínimo, espuma de poliuretano/silicona)** o **colchones térmicos conductivos calefactados por gel/polímero** a $36,5\text{–}37\text{ }^\circ\text{C}$.

### 1.3. Marco Normativo Particular de la Serie `UNE-EN IEC 60601-2-XX` y MDR 2017/745

En el **Reglamento (UE) 2017/745 (MDR)**, las incubadoras neonatales, incubadoras de transporte y cunas térmicas radiantes se clasifican como productos sanitarios activos de **Clase IIb** (**Regla 9** del Anexo VIII, por administrar e intercambiar energía térmica con el cuerpo humano de forma potencialmente peligrosa en pacientes críticos), mientras que los equipos de fototerapia neonatal se clasifican generalmente como **Clase IIa** (o IIb según integración).

| Norma Internacional Armonizada | Equipo Regulado | Requisitos Técnicos y de Seguridad Esenciales Clave |
| :--- | :--- | :--- |
| **`UNE-EN IEC 60601-2-19`** | **Incubadoras para bebés** (Hospitalarias estacionarias) | Estabilidad térmica en 5 puntos del colchón ($\pm 0,5\text{ }^\circ\text{C}$), doble pared, alarma de fallo de circulación de aire, temperatura superficial máxima de partes en contacto y **ruido interno $\le 60\text{ dBA}$** (clínico $\le 45\text{ dBA}$) |
| **`UNE-EN IEC 60601-2-20`** | **Incubadoras de transporte para bebés** | Alimentación AC/DC ($12\text{–}28\text{ V DC}$), **autonomía de batería $\ge 90\text{ min}$** a máxima demanda, retención mecánica ante impacto (`UNE-EN 1789`: $10\text{–}20\text{ G}$) y estabilidad térmica con ambiente externo de $0\text{–}10\text{ }^\circ\text{C}$ |
| **`UNE-EN IEC 60601-2-21`** | **Calentadores radiantes para bebés (Cunas térmicas)** | Uniformidad de irradiancia sobre el colchón, precisión del servocontrol cutáneo ($\pm 0,2\text{ }^\circ\text{C}$) y **alarma obligatoria cada $15\text{ minutos}$ en Modo Manual** con reducción/corte de potencia si no se confirma |
| **`UNE-EN IEC 60601-2-50`** | **Equipos de fototerapia para bebés** | Espectro eficaz para bilirrubina (**$400\text{–}550\text{ nm}$, banda azul óptima $430\text{–}490\text{ nm}$**), supresión estricta de radiación ultravioleta ($< 400\text{ nm}$) e infrarroja ($> 700\text{ nm}$) |

---

## ⚙️ 2. Arquitectura Técnica, Componentes y Principios de Funcionamiento

### 2.1. La Incubadora Neonatal Cerrada (`UNE-EN IEC 60601-2-19`)

La incubadora neonatal cerrada crea una cámara microclimática aislada de pared doble en acrilato transparente (PMMA) con portillos ovalados de acceso con manguitos iris y puertas abatibles con cortina de aire cálido. Su bloque técnico inferior (módulo de acondicionamiento bajo el lecho) integra los siguientes subsistemas:

```
[Aire Exterior] ──► [Filtro Submicrónico HEPA] ──► [Turbina Centrífuga Brushless Silenciosa]
                                                            │
      ┌─────────────────────────────────────────────────────┴────────────────────────────────────┐
      ▼                                                     ▼                                    ▼
[1. Calefactor PID / SSR]                 [2. Calderín Ebullición Vapor Estéril >100°C]   [3. Servocontrol O2]
 (Modo Aire ATC 28-39°C /                  (Humedad Relativa Activa 30% a 95% HR          (Válvula Proporcional +
  Modo Piel ITC 34-38°C con Sonda NTC)      con Sensor Capacitivo y Tubo Calefactado)      Doble Celda Galvánica)
      │                                                     │                                    │
      └─────────────────────────────────────────────────────┼────────────────────────────────────┘
                                                            ▼
                     [Cúpula de Doble Pared (Aire en Cortina, v < 0,10 m/s, Ruido <= 45 dBA)]
                     [Lecho con Báscula Electrónica (±2 g), Trendelenburg ±12° y Portachasis DR]
```

#### 1. Subsistema Aerodinámico y Filtración Microbiológica
Una turbina centrífuga con motor DC sin escobillas (*brushless*) aspira aire del exterior a través de un **filtro submicrónico de alta eficiencia (HEPA, retención $> 99,9\%$ de partículas $\ge 0,3\text{ }\mu\text{m}$)** renovando continuamente una fracción del caudal mientras recircula el resto a través del calefactor y el humidificador. Un **sensor de flujo de aire (termistor anemométrico o sensor óptico de giro del rodete)** vigila permanentemente que la turbina esté girando: **si el ventilador se detiene, el sistema corta inmediatamente la alimentación de la resistencia calefactora y dispara una alarma de prioridad alta**, evitando el sobrecalentamiento por convección natural y la acumulación de $\text{CO}_2$ espirado por el neonato.

#### 2. Los Dos Modos de Control Térmico (Controlador PID con Relés de Estado Sólido — SSR)
La potencia entregada a la resistencia calefactora se modula sin ruido mecánico mediante **relés de estado sólido (SSR / Triacs con disparo por paso por cero)** gobernados por un microcontrolador PID con doble canal de seguridad:
- **Modo Aire (*Air Temperature Control* — ATC):**
  El operador selecciona la temperatura deseada del aire del habitáculo. El lazo PID se cierra utilizando el sensor de temperatura de aire suspendido en el interior de la cúpula:
  - Rango estándar de ajuste: **$28,0\text{ }^\circ\text{C a }37,0\text{ }^\circ\text{C}$**.
  - **Modo *Override* (Rango extendido $> 37\text{ }^\circ\text{C}$):** Para superar los $37,0\text{ }^\circ\text{C}$, la norma `IEC 60601-2-19` exige que el operador pulse explícitamente una tecla de desbloqueo (`> 37 °C Override`), permitiendo ajustar desde **$37,0\text{ }^\circ\text{C hasta }39,0\text{ }^\circ\text{C}$** con un indicador luminoso encendido.
- **Modo Piel o Servocontrolado por el Paciente (*Infant / Skin Temperature Control* — ITC):**
  Es el modo de elección en neonatos inestables o grandes prematuros. Se adhiere sobre la piel del **abdomen (hipocondrio derecho, sobre el área hepática, evitando prominencias óseas) o región lumbar si está en prono** una **sonda cutánea con doble termistor NTC encapsulado** (exactitud **$\pm 0,1\text{ }^\circ\text{C}$**), cubierta obligatoriamente por un **parche adhesivo de hidrogel con lámina exterior reflectante de aluminio** (para que el sensor mida exclusivamente la temperatura de la piel del bebé y no el calor del aire o de una lámpara de fototerapia).
  - Rango de consigna de temperatura cutánea: **$34,0\text{ }^\circ\text{C a }37,5\text{ }^\circ\text{C}$** (valor fisiológico objetivo **$36,5\text{ }^\circ\text{C}$**, con *override* hasta $38,0\text{ }^\circ\text{C}$).
  - El microprocesador compara continuamente $T_{\text{piel}}$ con la consigna y regula la temperatura del aire: si el bebé se enfría, eleva la potencia del calefactor; si el bebé tiene fiebre o se calienta, reduce la calefacción (de ahí el peligro clínico de que el servocontrol **enmascare la fiebre de una sepsis neonatal**, manifestándose como una caída progresiva de la temperatura del aire de la incubadora para mantener la piel en $36,5\text{ }^\circ\text{C}$).
  - Muchas incubadoras incorporan un **segundo canal de temperatura periférica ($T_2$ en planta del pie)** para monitorizar de forma continua el **gradiente térmico central-periférico ($\Delta T = T_{\text{central}} - T_{\text{periférica}}$)**: un incremento de $\Delta T > 2,0\text{–}3,0\text{ }^\circ\text{C}$ es un signo precoz de vasoconstricción periférica por **shock hipovolémico, estrés por frío o sepsis neonatal**.

#### 3. Subsistema de Humidificación Activa Estéril por Ebullición
Las incubadoras antiguas utilizaban bandejas pasivas de agua tibia o nebulizadores ultrasónicos, los cuales generaban microgotas líquidas (aerosoles) que actuaban como vectores directos de infección nosocomial grave por bacilos Gram-negativos hidrofílicos (***Pseudomonas aeruginosa*, *Klebsiella*, *Serratia***).
- En las incubadoras modernas (`IEC 60601-2-19`), el subsistema de humedad funciona mediante **evaporación térmica por ebullición a alta temperatura ($\ge 100\text{ }^\circ\text{C}$)**: el agua destilada estéril pasa de un depósito extraíble a una pequeña caldera eléctrica donde hierve, destruyendo cualquier microorganismo y generando **vapor de agua molecular puro (gas, libre de gotículas transportadoras de bacterias)** que se mezcla con la corriente de aire antes de entrar al habitáculo.
- Un **higrómetro capacitivo** en la cúpula cierra el lazo de servocontrol mantendo la humedad relativa entre el **$30\%$ y el $95\%\text{ HR}$**, e incluye una función automática anticondensación que ajusta la relación humedad/temperatura para evitar el empañamiento de la doble pared.

#### 4. Subsistema de Servocontrol de Oxígeno, Báscula, Inclinación y Acústica
- **Servocontrol de $\text{O}_2$ ($21\%\text{ a }65\%$):** Una electroválvula proporcional inyecta $\text{O}_2$ en el habitáculo controlada por una **doble celda electroquímica galvánica (o sensor paramagnético)** redundante (alarma si la lectura difiere en $> \pm 3\%\text{ de }\text{FiO}_2$).
- **Lecho basculante y Báscula integrada:** El soporte del colchón permite inclinación suave motorizada o mecánica en **Trendelenburg y Anti-Trendelenburg ($\pm 12^\circ$)** sin abrir la cúpula, incorpora **báscula electrónica de células de carga (galgas extensiométricas, resolución $1\text{ a }5\text{ g}$)** con compensación de tara de cables/tubuladuras, y una **bandeja inferior portachasis radiotransparente** que permite introducir el detector digital plano (*Flat Panel*) de rayos X portátil sin abrir los portillos ni tocar al neonato.
- **Protección Acústica y Neurodesarrollo (`IEC 60601-2-19`):** La cóclea inmadura del prematuro es sumamente sensible al trauma acústico (que además sinergiza con fármacos ototóxicos como los aminoglucósidos). Aunque el límite máximo normativo de la `IEC 60601-2-19` en funcionamiento normal sin alarmas es de **$\le 60\text{ dBA}$**, las guías de cuidados centrados en el desarrollo (NIDCAP / AAP) y los pliegos técnicos del SERGAS exigen un nivel de presión sonora basal en el interior del habitáculo **$\le 45\text{ dBA}$** (idealmente $38\text{–}42\text{ dBA}$).

---

### 2.2. La Cuna Térmica Radiante (`UNE-EN IEC 60601-2-21`) y el Módulo de Reanimación Neonatal

La **Cuna Térmica (o Calentador Radiante Abierto)** está diseñada para situaciones que exigen **acceso inmediato, libre y simultáneo de varios profesionales al neonato** (estabilización y reanimación neonatal en sala de partos y quirófano de cesáreas, canalización de catéteres umbilicales venoso/arterial, intubación endotraqueal, drenaje pleural o intervenciones quirúrgicas en la propia UCIN).

1. **Principio Físico de Calentamiento por Radiación Infrarroja:**
   - Un cabezal superior situado a $70\text{–}90\text{ cm}$ sobre el colchón aloja un **elemento emisor infrarrojo (tubo de cuarzo, elemento cerámico o resistencia Calrod)** en el foco de un **reflector parabólico de aluminio anodizado** que proyecta un haz uniforme de **radiación infrarroja media/lejana ($\lambda \approx 2,5\text{ a }6\text{ }\mu\text{m}$)** sobre toda la superficie del colchón (irradiancia máxima limitada normativamente a $\le 10\text{–}30\text{ mW/cm}^2$).
   - Esta longitud de onda es absorbida en los primeros $0,5\text{ mm}$ de la epidermis convirtiéndose en calor sin calentar el aire ambiente de la sala. El cabezal suele ser **pivotante ($\pm 60^\circ\text{ a }90^\circ$)** para dejar paso al cabezal del equipo portátil de rayos X sin dejar de enfocar e irradiar calor lateralmente al neonato.
2. **Modos de Control y el Temporizador de Seguridad de 15 Minutos (`IEC 60601-2-21` — ¡Pregunta fija!):**
   - **Modo Precalentamiento (*Pre-warm*):** Mantiene el colchón tibio al $25\text{–}30\%$ de potencia sin alarmas antes de que nazca el bebé.
   - **Modo Servocontrolado por Piel (Automático):** Idéntico al de la incubadora; una sonda cutánea con parche reflectante de aluminio regula la potencia radiante ($0\text{–}100\%$) para mantener $T_{\text{piel}} = 36,5\text{ }^\circ\text{C}$. **Es el modo obligatorio cuando el neonato permanece en la cuna térmica**.
   - **Modo Manual ($0\text{ a }100\%$ de potencia fija):** Se utiliza únicamente durante los primeros minutos de la reanimación en paritorio mientras se seca al recién nacido y aún no se ha colocado la sonda de piel. Dado que en modo manual el calefactor emite calor continuo sin retroalimentación de la temperatura del bebé (con altísimo riesgo de **hipertermia maligna iatrogénica y quemaduras graves**), la norma **`UNE-EN IEC 60601-2-21`** exige un **temporizador de seguridad estricto de $15\text{ minutos}$**:
     - Al cumplirse **$15\text{ minutos}$** en Modo Manual, el equipo emite una **alarma acústica y visual**.
     - Si el operador no la reconoce, o transcurridos $15\text{ minutos}$ (según fabricante, a los $12\text{–}15\text{ min}$), el equipo **desconecta automáticamente el calefactor o reduce su potencia a un nivel seguro ($\le 25\%$)**.
3. **Módulo de Reanimación Neonatal Integrado (Pieza en T — *Neopuff*):**
   En la columna de la cuna térmica se integran los equipos exigidos por las guías de reanimación neonatal (SENeo / ERC):
   - **Cronómetro de Apgar** con avisos acústicos al **minuto 1, minuto 5 y minuto 10** de vida.
   - **Mezclador aire/oxígeno (*Blender*)** regulable del **$21\%$ al $100\%$ de $\text{FiO}_2$** (la reanimación del recién nacido a término se inicia con $\text{FiO}_2 = 21\%$ [aire ambiente], y en prematuros $< 32\text{ semanas}$ con $21\text{–}30\%$ guiada por pulsioximetría preductal en mano/muñeca derecha).
   - **Aspirador de secreciones por vacío regulado** con manómetro limitado a **$\le 80\text{–}100\text{ mmHg}$** ($10\text{–}13\text{ kPa}$).
   - **Reanimador neonatal de flujo continuo con Pieza en T (tipo *Neopuff*):** A diferencia de la bolsa autoinflable (Ambu), donde la presión pico depende de la fuerza de la mano del reanimador y no mantiene PEEP constante sin válvula adicional, el **reanimador con pieza en T** recibe un flujo de gas fresco ($5\text{–}15\text{ L/min}$) y dispone de dos válvulas mecánicas preajustadas:
     1. **Válvula de PEEP en la pieza en T distal** (ajustada habitualmente en **$5\text{ cmH}_2\text{O}$** para reclutar los alvéolos y evitar el colapso pulmonar al final de la espiración).
     2. **Válvula de Presión Inspiratoria Pico (PIP)** (ajustada en **$20\text{–}25\text{ cmH}_2\text{O}$**) y **válvula de alivio de presión máxima de seguridad** (tarada a **$30\text{–}40\text{ cmH}_2\text{O}$**) que se activa cuando el clínico ocluye con el dedo el orificio de la pieza en T, evitando el barotrauma/neumotórax neonatal.

---

## 🔬 3. Modalidades Avanzadas, Parámetros Técnicos, Prestaciones y Aplicaciones Clínicas/Asistenciales

### 3.1. Incubadoras Híbridas o Duales (Incubadora Cerrada + Cuna Térmica en un solo Equipo)

En el cuidado del gran prematuro extremo ($< 28\text{ semanas}$, $< 1.000\text{ g}$), el traslado físico del paciente desde una incubadora cerrada a una cuna térmica para realizar una cirugía (ej. cierre de ductus o drenaje) o canalizar una vía central provoca estrés térmico, desaturación y riesgo de hemorragia intraventricular (HIV).

Las **Incubadoras Híbridas** (ej. *GE Giraffe OmniBed* o *Dräger Babyleo IncuWarmer*) integran **ambas tecnologías en un único chasis**:
- Operan como **incubadora cerrada de doble pared** con calefacción convectiva y humidificación estéril hasta el $95\%$.
- Al pulsar un pedal o botón, el **dosel superior se eleva verticalmente en pocos segundos** mediante columnas telescópicas motorizadas y, de forma sincronizada y sin interrupción térmica, el sistema **desactiva la calefacción convectiva y enciende automáticamente el calefactor radiante infrarrojo superior** (más el colchón térmico conductivo en modelos de triple fuente de calor), transformándose en una **cuna térmica abierta** sin tocar ni desconectar al neonato.

### 3.2. Incubadora de Transporte Neonatal (`UNE-EN IEC 60601-2-20`)

Diseñada para el traslado intrahospitalario (paritorio a UCIN, UCIN a RM/quirófano) y el **transporte interhospitalario crítico terrestre (ambulancia SVA medicalizada `UNE-EN 1789`) o aéreo (helicóptero sanitario `UNE-EN 13718`)**:
- **Integración estructural y resistencia a impactos:** Chasis montado sobre camilla plegable de aluminio con interfaz de anclaje certificado que soporta aceleraciones y deceleraciones de choque de **$10\text{ G a }20\text{ G}$** en los tres ejes espaciales (`UNE-EN 1789`), con correas de sujeción acolchadas internas para el neonato.
- **Autonomía Energética y Neumática:**
  - Fuente de alimentación conmutada universal ($100\text{–}240\text{ V AC}$, $50/60\text{ Hz}$) e inversor de corriente continua para toma de vehículo/aeronave (**$12\text{ V DC / }24\text{–}28\text{ V DC}$**).
  - Baterías internas recargables (iones de litio o plomo-ácido selladas VRLA) que garantizan por norma **`UNE-EN IEC 60601-2-20`** una **autonomía mínima de $\mathbf{90\text{ minutos}}$** (en equipos actuales **$2\text{ a }4\text{ horas}$**) manteniendo el interior a $36\text{ }^\circ\text{C}$ con una temperatura ambiente exterior de $0\text{ a }10\text{ }^\circ\text{C}$.
  - Alojamiento inferior para **2 botellas de gases medicinales de alta presión ($200\text{ bar}$, de $2\text{ a }5\text{ L}$ de capacidad de agua, fibra de carbono/aluminio)** de Oxígeno ($\text{O}_2$) y Aire Medicinal. El cálculo del tiempo de autonomía de gas ($t_{\text{min}}$) que debe realizar el ingeniero o clínico antes del traslado sigue la ley de Boyle:
    $$V_{\text{disponible (L)}} = V_{\text{botella (L)}} \cdot \left( P_{\text{manométrica (bar)}} - P_{\text{seguridad (20 bar)}} \right) \quad \Longrightarrow \quad t_{\text{autonomía (min)}} = \frac{V_{\text{disponible (L)}}}{\dot{V}_{\text{consumo\_ventilador (L/min)}}}$$
- **Equipamiento Electromédico Integrado:** Incorpora en su frontal un **respirador neonatal de transporte** (capaz de ventilar en CMV, SIMV, PSV y nCPAP no invasiva), **monitor multiparamétrico neonatal** (ECG, $\text{SpO}_2$ Masimo resistente al movimiento de la ambulancia, PANI neonatal, capnografía y 2 temperaturas), aspirador autónomo y soporte con **2 a 4 bombas de jeringa** para aminas vasoactivas y prostaglandinas.

### 3.3. Equipos de Fototerapia Neonatal para Hiperbilirrubinemia (`UNE-EN IEC 60601-2-50`)

Más del $60\%$ de los recién nacidos a término y el $80\%$ de los prematuros desarrollan **ictericia neonatal** por aumento de la **bilirrubina indirecta (no conjugada, liposoluble)** debido a la hemólisis fisiológica de hematíes fetales y a la inmadurez de la enzima hepática glucuroniltransferasa (UGT1A1). Si la bilirrubina libre atraviesa la barrera hematoencefálica inmadura y se deposita en los ganglios basales, provoca encefalopatía bilirrubínica aguda irreversible (**Kernicterus**).

1. **Principio Fotoquímico y Espectro de Acción Óptimo (`IEC 60601-2-50`):**
   - La **fototerapia neonatal** irradia la piel del bebé con luz visible en la **banda azul-verde de $\mathbf{430\text{ a }490\text{ nm}}$, con pico de absorción óptimo de la bilirrubina en $\mathbf{450\text{–}460\text{ nm}}$**.
   - Los fotones azules de $450\text{–}460\text{ nm}$ penetran en el plexo capilar dérmico y transforman la molécula nativa de bilirrubina ($4Z, 15Z\text{-bilirrubina}$, apolar e insoluble en agua) mediante dos reacciones fotoquímicas simultáneas:
     - **Fotoisomerización configuracional ($4Z, 15E$)** y, sobre todo, **Fotoisomerización estructural irreversible a Lumirrubina (ciclación intramolecular)**: la **lumirrubina** es un isómero **hidrosoluble** que **se excreta directamente por la bilis y por la orina sin necesidad de conjugación hepática**.
2. **Tecnologías de Fuentes de Fototerapia e Irradiancia Espectral:**
   - **Lámparas de Diodos Emisores de Luz Azul (LEDs de Nitruro de Galio e Indio — InGaN):** Han desplazado por completo a los antiguos tubos fluorescentes y lámparas halógenas porque emiten un espectro estrecho centrado exactamente en **$455\text{–}465\text{ nm}$**, **carecen por completo de radiación ultravioleta ($< 400\text{ nm}$, evitando eritema actínico y daño al ADN)** y **carecen de radiación infrarroja ($> 700\text{ nm}$, evitando hipertermia y pérdida insensible de agua)**, con una vida útil $> 20.000\text{–}50.000\text{ horas}$.
   - **Mantas de Fototerapia de Fibra Óptica (*Biliblanket*):** Almohadillas flexibles tejidas con fibras ópticas acopladas a una fuente LED externa que se colocan directamente bajo la espalda del neonato (permitiendo aplicar **fototerapia doble** superior + inferior sin interrumpir el contacto piel con piel ni la lactancia).
   - **Niveles de Irradiancia Espectral ($\mu\text{W} \cdot \text{cm}^{-2} \cdot \text{nm}^{-1}$ a $30\text{–}40\text{ cm}$ de distancia):**
     - **Fototerapia convencional estándar:** $10\text{ a }30\text{ }\mu\text{W}/(\text{cm}^2 \cdot \text{nm})$.
     - **Fototerapia intensiva de alta dosis (recomendación AAP):** **$\mathbf{\ge 30\text{ }\mu\text{W}/(\text{cm}^2 \cdot \text{nm})}$** sobre la máxima superficie corporal posible (desnudo salvo pañal mínimo y **antifaz opaco de protección ocular obligatorio** para prevenir daño fototóxico retiniano).

---

## 🛡️ 4. Ingeniería Hospitalaria, Seguridad, Control de Calidad y Mantenimiento

### 4.1. Verificación Metrológica con Analizador de Incubadoras y Cunas Térmicas (`Módulo 1589`)

El mantenimiento preventivo y control de calidad anual (o post-reparación de turbina, calefactor o tarjeta de control) de incubadoras y cunas térmicas en los Servicios de Electromedicina del SERGAS se realiza empleando un **Analizador Multiparamétrico de Incubadoras certificado** (ej. *Fluke Biomedical INCU II*), que se coloca en el centro del colchón de la incubadora reproduciendo exactamente la geometría de ensayo de la norma **`UNE-EN IEC 60601-2-19`**:

```
     Vista Superior del Colchón de la Incubadora (Ensayo IEC 60601-2-19 a 10 cm de altura)
     ┌───────────────────────────────┬───────────────────────────────┐
     │              T1               │              T2               │
     │      (Centro Cuadrante 1)     │      (Centro Cuadrante 2)     │
     ├───────────────────────────────┼───────────────────────────────┤
     │                               T5 (M / Centro)                 │
     │      (Centro Cuadrante 4)     │  + Anemómetro + Sonómetro     │
     │              T4               │  + Higrómetro    T3           │
     └───────────────────────────────┴───────────────────────────────┘
```

Los parámetros y tolerancias normativas verificados en el ensayo son:
1. **Temperatura de la Incubadora ($T_{\text{inc}}$) y Tiempo de Calentamiento (*Warm-up Time*):** Se mide en el punto central **T5 (M)** situado a **$10\text{ cm}$ por encima del centro del colchón**. El tiempo para subir $11\text{ }^\circ\text{C}$ desde la temperatura ambiente debe coincidir en $\pm 20\%$ con el especificado por el fabricante.
2. **Estabilidad en Régimen Estacionario (*Steady Temperature Condition*):** Una vez estabilizada durante $1\text{ hora}$, la temperatura en T5 no debe variar en más de **$\pm 0,5\text{ }^\circ\text{C}$** respecto a la media, y la lectura del indicador de la incubadora no debe diferir de la temperatura media medida por el analizador en más de **$\pm 0,8\text{ }^\circ\text{C}$**.
3. **Uniformidad Espacial del Colchón (Puntos T1, T2, T3 y T4):** La temperatura media medida en el centro de los cuatro cuadrantes del colchón (T1 a T4, a $10\text{ cm}$ de altura) no debe diferir de la temperatura central T5 en más de **$\pm 0,8\text{ }^\circ\text{C}$** (o $\pm 1,0\text{ }^\circ\text{C}$ con el colchón inclinado en Trendelenburg).
4. **Sobrepico Térmico (*Overshoot*) y Precisión del Sensor de Piel:** Al pasar de $32\text{ }^\circ\text{C}$ a $36\text{ }^\circ\text{C}$, el sobrepico transitorio no debe superar **$2,0\text{ }^\circ\text{C}$** y debe restablecerse en $< 15\text{ min}$. La exactitud del sensor cutáneo NTC sumergido en baño termostático patrón a $36,0\text{ }^\circ\text{C}$ debe ser **$\le \pm 0,3\text{ }^\circ\text{C}$** (y la alarma de desviación de piel debe saltar a $\pm 0,5\text{–}1,0\text{ }^\circ\text{C}$).
5. **Velocidad de Aire, Humedad, Ruido y Seguridad Eléctrica (`UNE-EN 62353`):**
   - Velocidad de aire sobre el colchón: **$\le 0,35\text{ m/s}$** (anemómetro térmico del analizador).
   - Exactitud de humedad relativa: **$\pm 10\%\text{ HR}$** respecto al higrómetro patrón.
   - Nivel sonoro interno: **$\le 60\text{ dBA}$** normativo (**$\le 45\text{ dBA}$** objetivo clínico).
   - Seguridad eléctrica (`UNE-EN 62353`): Resistencia de tierra de protección $\le 0,3\text{ }\Omega$ y corriente de fuga de parte aplicable (sondas cutáneas y sensores de $\text{SpO}_2$/ECG integrados de **Tipo BF o CF**).

---

## 🏥 5. Implantación, Integración y Casuística en el Servicio Gallego de Salud (SERGAS)

### 5.1. Dotación en UCIN, Paritorios de Maternidad y Transporte Neonatal Crítico (061 Galicia)

En las **7 Áreas Sanitarias del SERGAS**, los hospitales materno-infantiles de referencia (Hospital Teresa Herrera en el CHUAC de A Coruña, Hospital Clínico del CHUS en Santiago, Hospital Álvaro Cunqueiro del CHUVI en Vigo, HULA en Lugo, CHUO en Ourense, Hospital Provincial/Novo Montecelo en Pontevedra y Hospital Arquitecto Marcide en Ferrol) estructuran su equipamiento neonatal en tres niveles asistenciales:
1. **Salas de Partos, Quirófanos de Obstetricia y Puertas de Urgencias Pediátricas:** Dotadas de **cunas térmicas radiantes (`IEC 60601-2-21`) con módulo de reanimación con pieza en T (*Neopuff*)**, mezclador de gases $\text{O}_2$/Aire, pulsioxímetro preductal de extracción de señal en baja perfusión y **dos incubadoras de transporte precalentadas a $35\text{–}36\text{ }^\circ\text{C}$** permanentemente conectadas a la red y a las tomas de gases para el traslado inmediato a UCIN.
2. **Boxes de Cuidados Intensivos Neonatales (UCIN Nivel III):** Equipados con **incubadoras híbridas duales (*OmniBed / Babyleo*)** para grandes prematuros $< 1.500\text{ g}$, equipos de **hipotermia terapéutica servocontrolada ($33,5\text{ }^\circ\text{C}$ durante $72\text{ horas}$)** para recién nacidos con encefalopatía hipóxico-isquémica perinatal (con monitorización de EEG integrado por amplitud — aEEG) y fototerapia LED intensiva.
3. **Transporte Neonatal Crítico Interhospitalario (`FPUSG-061` y Equipos de Transporte Pediátrico/Neonatal):** Coordina el traslado de neonatos críticos desde los hospitales comarcales (Barbanza, Cee, Burela, Monforte, Verín, Valdeorras, O Salnés) hacia las UCIN de referencia en ambulancias de soporte vital avanzado o helicópteros medicalizados del 061 con incubadoras de transporte certificadas `UNE-EN IEC 60601-2-20` y `UNE-EN 1789`.

### 5.2. Integración en `IANUS`, `GACELA` y Gestión en `XMAO`

Las incubadoras híbridas y monitores neonatales de las UCIN del SERGAS exportan sus variables microclimáticas ($T_{\text{aire}}$, $T_{\text{piel central}}$, $T_{\text{periférica}}$, $\% \text{HR}$, $\% \text{FiO}_2$ y peso diario de la báscula integrada) a través de pasarelas HL7 (`IHE PCD-01`) hacia la gráfica electrónica de cuidados críticos de **`IANUS`** y **`GACELA`**. En **`XMAO`**, las incubadoras y cunas térmicas están catalogadas como equipos de **Soporte Vital / Prioridad Alta**, exigiendo sustitución periódica preventiva de filtros HEPA cada $3\text{–}6\text{ meses}$, celdas de $\text{O}_2$ anuales y protocolo estricto de desmontaje y desinfección de alto nivel del calderín de humidificación entre pacientes.

---

## ⚡ 6. Síntesis de Alto Rendimiento, Tabla Resumen y Puntos Críticos de Examen A1

### 6.1. Tabla Maestra de Cifras, Umbrales y Artículos Clave

| Equipo / Parámetro Técnico Neonatal | Norma / Magnitud Oficial | Valor / Cifra Exacta de Examen A1 | Implicación Clínica o de Ingeniería Biomédica |
| :--- | :--- | :--- | :--- |
| **Normas particulares de neonatología** | Serie `UNE-EN IEC 60601-2-XX` | **`2-19` (Incubadora) · `2-20` (Transporte) · `2-21` (Cuna térmica) · `2-50` (Fototerapia)** | Clasificación MDR: **Clase IIb** (Regla 9) para incubadoras y cunas térmicas |
| **Los 4 mecanismos de pérdida de calor** | Convección, Radiación, Evaporación, Conducción | Radiación ($T^4$): **Doble pared** · Evaporación ($2.427\text{ J/g}$): **Humedad $60\text{–}95\%$** | Una incubadora de pared simple en sala fría pierde calor por **radiación** |
| **Modos de control térmico en incubadora** | Modo Aire (ATC) vs. Modo Piel (ITC) | Aire: **$28\text{–}37\text{ }^\circ\text{C}$** (*override* $39\text{ }^\circ\text{C}$) · Piel: **$36,5\text{ }^\circ\text{C}$** (NTC $\pm 0,1\text{ }^\circ\text{C}$) | El servocontrol de piel puede **enmascarar la fiebre** bajando $T_{\text{aire}}$ |
| **Humidificación activa en incubadora** | Tecnología microbiológicamente segura | **Ebullición de vapor estéril ($\ge 100\text{ }^\circ\text{C}$)** | Prohibida la nebulización fría por riesgo de ***Pseudomonas aeruginosa*** |
| **Nivel máximo de ruido interno e flujo de aire** | Acústica y aerodinámica (`IEC 60601-2-19`) | Normativo **$\le 60\text{ dBA}$** (clínico **$\mathbf{\le 45\text{ dBA}}$**) · Velocidad aire **$\le 0,35\text{ m/s}$** | Previene hipoacusia neurosensorial y pérdidas convectivas |
| **Seguridad en Modo Manual de Cuna Térmica** | Temporizador obligatorio (`IEC 60601-2-21`) | **Alarma cada $\mathbf{15\text{ minutos}}$** y corte/reducción de potencia ($\le 25\%$) | Evita hipertermia maligna y quemaduras si se olvida sin sonda de piel |
| **Reanimador neonatal con Pieza en T (*Neopuff*)** | Parámetros de presión en paritorio | Control exacto de **PIP ($20\text{–}25\text{ cmH}_2\text{O}$)** y **PEEP ($5\text{ cmH}_2\text{O}$)** | Evita el atelectrauma y el barotrauma neonatal frente al Ambu |
| **Incubadora de Transporte Neonatal** | Autonomía mínima y choque (`2-20` / `EN 1789`) | Batería **$\ge 90\text{ min}$** (real $2\text{–}4\text{ h}$) · Anclaje de impacto **$10\text{–}20\text{ G}$** | Alimentación dual $230\text{ V AC} / 12\text{–}28\text{ V DC}$ + respirador neonatal |
| **Fototerapia para ictericia neonatal** | Longitud de onda e irradiancia (`2-50`) | **Luz azul LED de $\mathbf{430\text{ a }490\text{ nm}}$ (pico $\mathbf{450\text{–}460\text{ nm}}$)** · Intensiva **$\ge 30\text{ }\mu\text{W/cm}^2\text{/nm}$** | Convierte la bilirrubina indirecta en **lumirrubina hidrosoluble** |
| **Ensayo con Analizador de Incubadoras** | Puntos de medida sobre el colchón | **5 sensores de temperatura (T1–T5 a $10\text{ cm}$ de altura)** | Uniformidad espacial $\le \pm 0,8\text{ }^\circ\text{C}$ y estabilidad $\le \pm 0,5\text{ }^\circ\text{C}$ |

### 6.2. Puntos Críticos y Trampas Habituales de Tribunal (Tipo Test y Supuestos Prácticos)

1. **Trampa de test sobre el desprendimiento de la sonda cutánea en Modo Piel (Servocontrol):** Si la sonda de temperatura cutánea se despega accidentalmente del abdomen del neonato y cae sobre el colchón o queda al aire, el sensor leerá una temperatura más baja que los $36,5\text{ }^\circ\text{C}$ de consigna. El controlador interpretará erróneamente que el bebé está hipotérmico y **subirá la calefacción al máximo ($100\%$)**, pudiendo provocar una **hipertermia mortal** al neonato si las alarmas de desviación ($\pm 0,5\text{–}1,0\text{ }^\circ\text{C}$) están mal configuradas. Por el contrario, si se coloca la sonda sin el **parche reflectante de aluminio** bajo una cuna térmica, el infrarrojo calentará directamente el sensor, que leerá $> 38\text{ }^\circ\text{C}$ y **apagará el calefactor dejando al bebé en hipotermia**.
2. **Trampa sobre Fototerapia y Radiación Ultravioleta:** La fototerapia para la ictericia neonatal **NO utiliza luz ultravioleta (UV)**. Utiliza **luz visible azul ($430\text{–}490\text{ nm}$, pico en $450\text{–}460\text{ nm}$)**; de hecho, la norma `UNE-EN IEC 60601-2-50` obliga a filtrar y suprimir cualquier emisión ultravioleta ($< 400\text{ nm}$).
3. **Trampa sobre los 4 mecanismos de transferencia de calor:**
   - La **doble pared** de la incubadora reduce las pérdidas por **RADIACIÓN** (no por convección).
   - La **humedad relativa alta ($80\%$)** reduce las pérdidas por **EVAPORACIÓN** transepidérmica.
   - El **calentamiento del aire interior** reduce las pérdidas por **CONVECCIÓN**.
4. **Trampa sobre el enmascaramiento de la sepsis en Modo Piel:** En un neonato en Modo Piel servocontrolado a $36,5\text{ }^\circ\text{C}$ que desarrolla fiebre por una sepsis, la temperatura del bebé seguirá marcando $36,5\text{ }^\circ\text{C}$, pero el signo de alarma en la gráfica de `IANUS` será un **descenso inexplicado de la temperatura del aire de la incubadora** y un aumento del gradiente central-periférico ($\Delta T > 2\text{ }^\circ\text{C}$).
