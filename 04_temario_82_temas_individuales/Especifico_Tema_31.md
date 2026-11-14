# Tema 31 — Desfibrilación. Fundamentos y tipos de desfibriladores. Soporte vital.

## 📖 1. Electrofisiología de la Fibrilación Ventricular y Teoría de la Masa Crítica

### 1.1. Electrofisiología de la Fibrilación Ventricular y Teoría de la Masa Crítica

En condiciones fisiológicas normales, el impulso eléctrico cardíaco nace en el **nodo sinusal (marcapasos natural, $60\text{–}100\text{ lpm}$)**, se propaga ordenadamente por las aurículas, sufre un retardo fisiológico en el nodo auriculoventricular y despolariza sincrónicamente ambos ventrículos a través del haz de His y la red de Purkinje, generando una contracción mecánica eficaz (sístole ventricular).

En la **Fibrilación Ventricular (FV)** —causa eléctrica más frecuente de muerte súbita cardíaca extrahospitalaria en el adulto—, múltiples frentes de onda eléctricos caóticos de microrreentrada ($400\text{–}600\text{ impulsos/min}$ desorganizados) recorren simultáneamente el miocardio ventricular. En el ECG desaparecen los complejos QRS normales, sustituidos por ondulaciones irregulares de amplitud y morfología cambiantes; mecánicamente, el ventrículo tiembla sin llegar a contraerse, cayendo el **gasto cardíaco a cero ($GC = 0\text{ L/min}$)** y produciendo pérdida de consciencia en $10\text{–}15\text{ segundos}$ y daño neuronal irreversible si no se revierte en $4\text{–}6\text{ minutos}$ (la supervivencia cae un $7\%\text{–}10\%$ por cada minuto de retraso en la desfibrilación sin RCP).

**Fundamento Biofísico de la Desfibrilación (Hipótesis de la Masa Crítica de Zipes y Límites de Vulnerabilidad):**
La desfibrilación eléctrica consiste en el paso brusco a través del tórax (o directamente del corazón) de una **densidad de corriente eléctrica transmiocárdica suficiente ($J \ge 20\text{–}30\text{ mA/cm}^2$) durante un intervalo breve ($5\text{ a }15\text{ milisegundos}$)** con el objetivo de:
1. **Despolarizar de forma simultánea al menos el $75\%\text{ a }90\%$ de la masa miocárdica ventricular («Masa Crítica»)**, llevando a todos los cardiomiocitos al **período refractario absoluto** al mismo tiempo.
2. **Extinguir los circuitos caóticos de reentrada** y crear una breve pausa eléctrica (asistolia post-choque transitoria) que permita al marcapasos natural con mayor automatismo (**el nodo sinusal**) retomar el mando del ritmo cardíaco.

> **Concepto clave de examen:** Lo que realmente despolariza la membrana del cardiomiocito es la **corriente eléctrica ($I$, en Amperios)** y su densidad espacial ($J$), **no los Julios por sí solos**. La **Energía ($E$, en Julios)** seleccionada en el equipo es simplemente la integral de la potencia entregada a lo largo de la duración del pulso ($t_d$) sobre la **impedancia transtorácica del paciente ($Z_p$)**:
> $$E = \int_{0}^{t_d} V(t) \cdot I(t)\, dt = \int_{0}^{t_d} I^2(t) \cdot Z_p\, dt = \int_{0}^{t_d} \frac{V^2(t)}{Z_p}\, dt$$
> Por tanto, para una misma energía fijada en Julios, un paciente con una **impedancia transtorácica muy elevada ($Z_p = 150\text{ }\Omega$)** recibirá una **corriente pico mucho menor** ($I = V / Z_p$) que un paciente de baja impedancia ($Z_p = 40\text{ }\Omega$), salvo que el desfibrilador incorpore un sistema electrónico activo de **compensación de impedancia**.

### 1.2. Marco Reglamentario Europeo, Estatal y Autonómico Gallego

1. **Reglamento (UE) 2017/745 (MDR) — Diferenciación Crítica de Clases de Riesgo (¡Pregunta de examen!):**
   - **Desfibriladores Externos Automatizados (DEA / DESA):** Aunque son equipos externos no invasivos, el MDR introdujo en su Anexo VIII la **Regla 22**, que establece que *«los productos terapéuticos activos con una función diagnóstica integrada o incorporada que determinan significativamente la gestión del paciente por el producto, tales como los sistemas automatizados de circuito cerrado o los desfibriladores externos automatizados, se clasificarán en la **Clase III**»*.
   - **Monitores-Desfibriladores Externos Manuales (uso hospitalario por médicos):** En modo manual el diagnóstico lo realiza el médico y no el algoritmo cerrado del equipo, clasificándose como **Clase IIb** (**Regla 9** del Anexo VIII del MDR, equipos terapéuticos activos que administran energía de forma potencialmente peligrosa), si bien al incorporar modo DEA semiautomático la plataforma completa suele certificarse como Clase III.
   - **Desfibriladores Automáticos Implantables (DAI / ICD):** Productos sanitarios **implantables activos**, clasificados en la máxima categoría de riesgo **Clase III** (**Regla 8** del Anexo VIII del MDR y regulados en España por el Real Decreto 192/2023).
2. **Norma Técnica Particular `UNE-EN 60601-2-4`:** Especifica los requisitos particulares para la seguridad básica y el funcionamiento esencial de todos los desfibriladores cardíacos externos (tiempos máximos de carga, precisión de energía entregada en todo el rango de impedancias, aislamiento de alta tensión, recuperación del monitor de ECG en $\le 5\text{ s}$ y sincronización en cardioversión).
3. **Legislación Autonómica de Galicia — `Decreto 38/2017, de 23 de marzo`:**
   En desarrollo del marco básico estatal, el **Decreto 38/2017** regula la instalación y el uso de desfibriladores externos automatizados (DEA/DESA) fuera del ámbito sanitario en la Comunidad Autónoma de Galicia:
   - Establece los espacios obligados y recomendados de cardioprotección, los requisitos de formación acreditada y el mantenimiento obligatorio del equipo y de los parches/baterías conforme a las instrucciones del fabricante.
   - Crea el **Registro de Desfibriladores Externos de Galicia**, adscrito a la Consellería de Sanidade y **conectado operativamente con la Central de Coordinación de Urxencias Sanitarias de Galicia-061 (`FPUSG-061`)**, exigiendo que los DEA dispongan de **sistema de comunicación/activación automática o inmediata con el teléfono 061** al abrir la vitrina o encender el dispositivo, y obligando a remitir al 061 el registro documental y los datos almacenados en la memoria interna del DEA (ECG y eventos de descarga) tras cada utilización clínica.

---

## ⚙️ 2. Electrónica de Potencia del Circuito de Carga y Descarga Capacitiva y Evolución de las Formas de Onda

### 2.1. Electrónica de Potencia del Circuito de Carga y Descarga Capacitiva

Un desfibrilador externo debe ser capaz de almacenar entre **$1\text{ y }360\text{ Julios}$** a partir de una batería de baja tensión ($12\text{–}24\text{ V DC}$) o de la red ($230\text{ V AC}$) y liberarlos en menos de $15\text{ ms}$ con picos de tensión de **$1.500\text{ a }4.000\text{ V}$** y corrientes de pico de **$20\text{ a }60\text{ Amperios}$**. Su arquitectura electrónica consta de cinco bloques:

```
[Batería Li-Ion / Red 230 V] ──► [1. Convertidor DC-DC Flyback Alta Tensión (1.500 - 4.000 V)]
                                                  │
                         ┌────────────────────────┼────────────────────────┐
                         ▼                        ▼                        ▼
              [2. Condensador C]        [3. Resistencia Interna]    [4. Puente en H de 4 IGBTs]
               (30 a 200 uF HV)          de Desarmado (Bleeder)     (Inversión Polaridad Fase 1/2
                                                  │                  + Medida Impedancia Zp)
                                                  └────────────────────────┤
                                                                           ▼
                                                  [5. Palas / Parches Adhesivos ──► Paciente (Zp ~ 50 Ω)]
```

1. **Etapa de Carga de Alta Tensión (Convertidor DC-DC *Flyback* Elevador):**
   Un oscilador conmutado eleva la tensión continua de la batería ($14,4\text{ V}$) mediante un transformador de ferrita de alta relación de espiras y un rectificador de alta tensión, cargando en **$t_{\text{carga}} < 5\text{ a }10\text{ segundos}$** el condensador principal hasta la tensión $V_0$ correspondiente a la energía seleccionada por el usuario.
2. **Condensador de Almacenamiento ($C$):**
   Condensador de película de polipropileno metalizado autorregenerable o electrolítico de alta densidad energética, con capacidad típica **$C \in [30\text{ }\mu\text{F},\, 200\text{ }\mu\text{F}]$**. La **energía potencial electrostática almacenada ($E_{\text{alm}}$)** responde a la ecuación fundamental:
   $$E_{\text{almacenada}} = \frac{1}{2} \cdot C \cdot V_0^2 \quad \Longleftrightarrow \quad V_0 = \sqrt{\frac{2 \cdot E_{\text{almacenada}}}{C}}$$
   *Ejemplo numérico de examen A1:* Si un desfibrilador tiene un condensador de $C = 100\text{ }\mu\text{F} = 10^{-4}\text{ F}$ y se carga para almacenar $E = 200\text{ J}$, la tensión entre las placas del condensador será:
   $$V_0 = \sqrt{\frac{2 \times 200\text{ J}}{10^{-4}\text{ F}}} = \sqrt{4 \times 10^6} = \mathbf{2.000\text{ Voltios}}$$
3. **Relación entre Energía Almacenada ($E_{\text{alm}}$) y Energía Realmente Entregada al Paciente ($E_{\text{ent}}$):**
   En todo desfibrilador existen pérdidas resistivas internas ($R_{\text{int}}$, suma de la resistencia serie equivalente del condensador, bobina e IGBTs, típicamente $2\text{–}8\text{ }\Omega$). Por divisor resistivo con la impedancia transtorácica del paciente ($Z_p$):
   $$E_{\text{entregada}} = E_{\text{almacenada}} \cdot \left( \frac{Z_p}{R_{\text{int}} + Z_p} \right)$$
   La norma **`UNE-EN 60601-2-4`** obliga a que todos los selectores e indicadores de energía del desfibrilador muestren siempre la **Energía Entregada ($E_{\text{entregada}}$) sobre una carga resistiva normalizada de $\mathbf{50\text{ }\Omega}$**, y **nunca** la energía bruta almacenada en el condensador.
4. **Circuito de Desarmado Interno de Seguridad (*Internal Dump / Bleeder Resistor*):**
   Si el operador carga el condensador pero decide no administrar el choque (o si transcurren **$30\text{ a }60\text{ segundos}$** sin pulsar los botones de descarga, o al apagar el equipo / cambiar el selector de energía), un relé de alta tensión conecta automáticamente el condensador a una **resistencia cerámica interna de potencia ($R_{\text{dump}} \approx 5\text{–}10\text{ k}\Omega$)**, disipando los Julios en forma de calor dentro del chasis de forma segura sin pasar por las palas.

---

### 2.2. Evolución de las Formas de Onda: Onda Monofásica vs. Onda Bifásica (BTE y RLB)

El diseño de la forma de onda de corriente determina la eficacia clínica del primer choque y el grado de lesión miocárdica post-descarga:

#### 1. Ondas Monofásicas (Tecnología Histórica Obsoleta)
La corriente eléctrica fluye únicamente en **una sola dirección (polaridad única)** desde un electrodo hacia el otro:
- **Monofásica Senoidal Amortiguada (*Monophasic Damped Sine* — MDS, circuito RLC de Edmark):** Un inductor en serie ($L \approx 20\text{–}50\text{ mH}$) con resistencia interna ($R_i$) y el condensador ($C$) generan con la impedancia del paciente ($Z_p$) un pulso senoidal subamortiguado o críticamente amortiguado de $\approx 5\text{ a }10\text{ ms}$. Su forma y duración se deformaban gravemente si $Z_p$ era alta.
- **Monofásica Exponencial Truncada (MTE):** Descarga RC truncada electrónicamente.
- **Desventaja crítica:** Para lograr una eficacia $> 85\%$ en FV, las ondas monofásicas exigían **energías muy altas de $\mathbf{360\text{ Julios}}$** (o secuencia antigua $200\text{ J} \rightarrow 300\text{ J} \rightarrow 360\text{ J}$), con corrientes pico de $50\text{–}65\text{ A}$ que provocaban **aturdimiento miocárdico (*myocardial stunning*), disfunción ventricular post-parada, bloqueos AV y quemaduras dérmicas**.

#### 2. Ondas Bifásicas Conmutadas por Puente en H de IGBTs (Estándar Actual Universal)
Todos los desfibriladores modernos utilizan **ondas bifásicas** generadas mediante un **Puente en «H» de 4 transistores IGBT (*Insulated Gate Bipolar Transistors*) o tiristores SCR de alta tensión**:
- **Fase 1 (Positiva, duración $t_1 \approx 5\text{ a }8\text{ ms}$):** Se cierran los IGBTs diagonales $Q_1$ y $Q_4$; la corriente fluye del electrodo esternal al apical despolarizando las membranas de los cardiomiocitos:
  $$V(t) = V_0 \cdot e^{-\frac{t}{R_{\text{eq}} \cdot C}}$$
- **Fase 2 (Negativa / Inversión de Polaridad, duración $t_2 \approx 3\text{ a }5\text{ ms}$, típicamente $t_1 / t_2 \approx 60\% / 40\%$):** Se abren $Q_1, Q_4$ y en menos de $200\text{ }\mu\text{s}$ se cierran los IGBTs opuestos $Q_2$ y $Q_3$, **invirtiendo el sentido de la corriente** a través del tórax antes de truncar definitivamente la descarga a cero.
- **Mecanismo electrofisiológico (*Charge-Burping Theory*):** La primera fase positiva carga las capacidades de membrana de todas las células despolarizándolas, y la **segunda fase negativa actúa «barriendo» y neutralizando las cargas residuales** de las células que quedaron al borde del umbral de excitación, impidiendo que vuelvan a disparar un frente de onda fibrilatorio (**evita la refibrilación inmediata**).

Existen **dos variantes tecnológicas principales de onda bifásica** en el mercado hospitalario:

| Característica Técnica | Onda Bifásica Exponencial Truncada (**BTE**) | Onda Bifásica Rectilínea (**RLB**) |
| :--- | :--- | :--- |
| **Perfil temporal de corriente** | Decaimiento exponencial RC en Fase 1 y Fase 2 truncado por IGBTs | Primera fase de **corriente prácticamente constante (meseta cuadrada)** seguida de Fase 2 exponencial |
| **Mecanismo de compensación de impedancia ($Z_p$)** | Mide $Z_p$ al inicio del choque y **ajusta el voltaje inicial ($V_0$) y/o alarga la duración de las fases ($t_1, t_2$)** hasta $15\text{–}20\text{ ms}$ en pacientes de alta impedancia | Incorpora un **banco de resistencias digitales en serie dentro del desfibrilador** que se conmutan en microsegundos para mantener la suma $(R_{\text{interna\_variable}} + Z_p) = \text{constante}$, manteniendo la corriente constante |
| **Energía habitual en adulto (1.ª descarga)** | **$150\text{ a }200\text{ Julios}$** (escalable hasta $360\text{ J}$) | **$120\text{ a }200\text{ Julios}$** (máximo $200\text{ J}$) |
| **Corriente pico y daño miocárdico** | Menor corriente pico que la monofásica ($< 30\text{–}40\text{ A}$) | Mínima corriente pico inicial en pacientes de baja impedancia (evita picos de sobrecorriente) |

### 2.3. Impedancia Transtorácica ($Z_p$): Factores Determinantes y Medida por Portadora de Alta Frecuencia

La **impedancia transtorácica ($Z_p$)** de un adulto humano oscila entre **$25\text{ }\Omega$ y $175\text{ }\Omega$** (valor medio en adultos **$70\text{–}80\text{ }\Omega$**; **carga patrón normativa de laboratorio $= \mathbf{50\text{ }\Omega}$**).
- Antes de disparar (y para detectar si los parches adhesivos están bien pegados o si un cable está suelto), el desfibrilador inyecta a través de los parches una **corriente alterna senoidal subumbral de alta frecuencia ($20\text{ a }60\text{ kHz}$ y $< 100\text{ }\mu\text{A}$)** y mide la caída de tensión para calcular $Z_p$ continuamente.
- **Factores que determinan la impedancia transtorácica ($Z_p$):**
  1. **Interfaz electrodo-piel (gel conductor):** Es el factor más crítico; usar palas metálicas desnudas sin gel conductor o con gel ultrasónico no conductor multiplica $Z_p$ y produce quemaduras graves y fallo de desfibrilación.
  2. **Presión firme sobre las palas manuales:** En palas rígidas de adulto debe aplicarse una fuerza equivalente a **$\ge 8\text{ kgf}$ ($\approx 80\text{ N}$)** ($5\text{ kgf}$ en palas pediátricas) para expulsar el aire y reducir la impedancia cutánea.
  3. **Superficie de los electrodos:** En adultos se emplean electrodos de **$8\text{ a }12\text{ cm}$ de diámetro ($\approx 50\text{ a }100\text{ cm}^2$)**; en lactantes $< 10\text{ kg}$ se usan palas/parches pediátricos de $4,5\text{ cm}$.
  4. **Fase ventilatoria:** El aire es un aislante eléctrico; la impedancia transtorácica es **mínima al final de la espiración** (menor volumen de aire interpuesto en los pulmones).

---

## 🔬 3. Modos Operativos y Tipología Completa de Equipos Desfibriladores y Marcapasos Transcutáneo

### 3.1. Modos Operativos: Desfibrilación Asíncrona vs. Cardioversión Eléctrica Sincronizada (¡Trampa de Examen!)

| Criterio Clínico y Técnico | 1. Desfibrilación Manual (Modo ASÍNCRONO) | 2. Cardioversión Eléctrica (Modo SINCRONIZADO — `SYNC`) |
| :--- | :--- | :--- |
| **Estado hemodinámico del paciente** | **Parada Cardiorrespiratoria (PCR): paciente inconsciente y SIN PULSO** | **Paciente CON PULSO** pero con taquiarritmia rápida (inestable hemodinámicamente o electiva bajo sedación) |
| **Ritmos ECG indicados** | **1) Fibrilación Ventricular (FV)**<br>**2) Taquicardia Ventricular sin pulso (TVsp)**<br>*(¡Asistolia y AESP NUNCA se desfibrilan!)* | **Taquiarritmias con complejo QRS identificable:**<br>• Fibrilación Auricular (FA) y Flutter Auricular<br>• Taquicardia Supraventricular (TSV)<br>• Taquicardia Ventricular monomorfa **con pulso** |
| **Instante de disparo de la descarga** | **Inmediato (Asíncrono):** al pulsar simultáneamente ambos botones de descarga, sin esperar al ECG | **Sincronizado con el pico de la Onda R del complejo QRS** (retardo máximo **$\le 60\text{ ms}$** tras el pico R según `IEC 60601-2-4`) |
| **Justificación electrofisiológica crítica** | En la FV no existen complejos QRS ni ondas T organizadas con las que sincronizar | **Evitar disparar sobre el período vulnerable de la repolarización ventricular (rama ascendente/pico de la Onda T)**, ya que un choque sobre la onda T desencadenaría una **Fibrilación Ventricular (fenómeno R sobre T)** |
| **Energías bifásicas habituales (ERC)** | Adulto: **$150\text{–}200\text{ J}$** ($1.^\text{er}$ choque) y $200\text{–}360\text{ J}$ sucesivos · Pediatría: **$\mathbf{4\text{ J/kg}}$** | Flutter / TSV: **$70\text{–}120\text{ J}$** · TV con pulso: **$120\text{–}150\text{ J}$** · Fibrilación Auricular: **$120\text{–}200\text{ J}$** |

> **Regla operativa de seguridad en Cardioversión:** Si un paciente está siendo cardiovertido en modo `SYNC` y, como consecuencia de la arritmia o del choque, entra en **Fibrilación Ventricular (FV)**, el operador **debe desactivar inmediatamente el botón `SYNC`** (aunque muchos equipos se resetean a modo asíncrono tras cada disparo), porque si el modo `SYNC` permanece activo durante una FV, el desfibrilador buscará indefinidamente una onda R inexistente y **no disparará nunca la descarga salvadora**.

### 3.2. Tipología Completa de Equipos Desfibriladores y Marcapasos Transcutáneo

1. **Monitor-Desfibrilador Manual / Multiparamétrico de Cuidados Críticos y Emergencias (ej. *Zoll X-Series / R-Series*, *Stryker Lifepak 15 / 20e*, *Mindray BeneHeart D60*, *Philips Tempus / Efficia*):**
   Integra en un solo chasis portátil:
   - Desfibrilación manual asíncrona, cardioversión sincronizada y modo DEA opcional.
   - Monitor multiparamétrico de 12 derivaciones de ECG (con algoritmos de diagnóstico de **IAMCEST / elevación del ST** y transmisión telemática a la alerta de hemodinámica), $\text{SpO}_2$, PANI, PAI y **Capnografía $\text{EtCO}_2$** (imprescindible en RCP avanzada para confirmar la intubación endotraqueal, evaluar la calidad del masaje cardíaco [$\text{EtCO}_2 > 15\text{–}20\text{ mmHg}$] y detectar el **Retorno de la Circulación Espontánea — RCE** por una subida brusca de $\text{EtCO}_2 > 35\text{–}40\text{ mmHg}$).
   - **Módulo de Marcapasos Transcutáneo No Invasivo (*External Pacing*):** A través de los mismos parches adhesivos multifunción aplica **pulsos rectangulares monofásicos de corriente constante** (ajustables entre **$0\text{ y }140\text{–}200\text{ mA}$**, con anchura de pulso larga de **$20\text{ a }40\text{ ms}$** y frecuencia de **$30\text{ a }180\text{ lpm}$**) en modo **A Demanda (VVI)** (se inhibe si detecta QRS intrínseco) o **Modo Fijo (Asíncrono VOO)** para tratar bradicardias extremas con compromiso hemodinámico o bloqueos AV de tercer grado hasta implantar un marcapasos transvenoso.
2. **Desfibrilador Externo Automatizado (DEA / AED) y Semiautomático (DESA):**
   - Incorpora un microprocesador con un **algoritmo de reconocimiento de arritmias** que analiza en intervalos de $5\text{–}10\text{ s}$ (exigiendo no tocar al paciente para evitar artefactos de movimiento) la frecuencia, pendiente ($dV/dt$), espectro de frecuencias (FFT/Wavelets) y ausencia de líneas isoeléctricas del ECG captado por los dos parches (colocados en posición **anterolateral / infraclavicular derecha – apical axilar izquierda**).
   - La norma `UNE-EN 60601-2-4` exige al algoritmo una **sensibilidad $> 90\%$ para Fibrilación Ventricular gruesa** ($> 200\text{ }\mu\text{V}$), **$> 75\%$ para TV rápida**, y una **especificidad $> 99\%$ para ritmo sinusal normal** ($> 95\%$ para asistolia y otros ritmos no desfibrilables).
   - En el **DESA (Semiautomático)** —el más extendido en espacios públicos—, si el algoritmo detecta ritmo desfibrilable, carga el condensador automáticamente y ordena por voz e iluminación al reanimador **pulsar el botón de descarga**; en el **DEA (Totalmente Automático)**, realiza una cuenta atrás audible de $3\text{ segundos}$ y libera la descarga sin que el usuario pulse botón alguno.
   - Para uso en **niños de $1\text{ a }8\text{ años}$ ($< 25\text{ kg}$)**, los DEA incorporan una **llave o parches pediátricos con red resistiva atenuadora** que reduce la energía entregada de $150\text{–}200\text{ J}$ a **$50\text{ Julios}$**.
3. **Desfibrilador Interno Quirúrgico (Cirugía Cardíaca Abierta):**
   - Utiliza **palas internas cóncavas metálicas tipo «cuchara» esterilizables en autoclave** que el cirujano cardiovascular aplica directamente abrazando el epicardio ventricular (con el tórax abierto tras esternotomía y salida de circulación extracorpórea).
   - Al no existir la impedancia de la piel ni de la caja torácica ($Z_{\text{miocardio}} \approx 15\text{–}30\text{ }\Omega$), una energía de $200\text{ J}$ necrosaría el corazón. Por ello, **al conectar el cable de palas internas, la norma `UNE-EN 60601-2-4` obliga a que el desfibrilador limite y bloquee automáticamente la energía máxima seleccionable a $\mathbf{\le 50\text{ Julios}}$** (empleándose habitualmente entre **$5\text{ y }20\text{–}30\text{ Julios}$**).
4. **Desfibrilador Automático Implantable (DAI / ICD — `UNE-EN ISO 14708-2`) y Desfibrilador Subcutáneo (S-ICD):**
   - Generador hermético de titanio con batería de **Litio-Plata-Óxido de Vanadio ($\text{Li/SVO}$) o $\text{Li/CF}_x$** y condensadores electrolíticos planos de tantalio/aluminio que suministran **terapia antitaquicardia por sobreestimulación (ATP)** indolora o descargas endocavitarias bifásicas de **$30\text{ a }40\text{ Julios}$** a través de una bobina en ventrículo derecho (o subcutánea paraesternal en el S-ICD de $80\text{ J}$).

### 3.3. Algoritmos de Soporte Vital (ERC / ILCOR) y Retroalimentación de Calidad de RCP

La **Cadena de Supervivencia** integra el reconocimiento precoz y alerta al 061, la **RCP precoz de alta calidad**, la **desfibrilación precoz** y los cuidados post-resucitación:
- **Parámetros biomecánicos de RCP de alta calidad en el adulto (Guías ERC):**
  - Relación compresiones : ventilaciones (sin vía aérea avanzada): **$30 : 2$**.
  - **Frecuencia de compresiones torácicas:** **$100\text{ a }120\text{ compresiones/minuto}$** ($1,67\text{ a }2,0\text{ Hz}$).
  - **Profundidad de compresión en el tercio inferior del esternón:** **$5\text{ a }6\text{ cm}$** (sin superar nunca los $6\text{ cm}$), permitiendo la **reexpansión torácica completa** tras cada compresión y minimizando las pausas pre y post-choque ($< 5\text{ segundos}$ de pausa para desfibrilar).
- **Sensores de Retroalimentación de RCP en Tiempo Real (*Real-Time CPR Feedback*):** Los parches de desfibrilación avanzados incorporan en el centro del esternón un **acelerómetro triaxial MEMS y un sensor de fuerza** ($a(t) = d^2z/dt^2$). Mediante **doble integración numérica temporal de la aceleración** ($\Delta z = \iint a(t)\,dt^2$), el monitor-desfibrilador calcula y muestra en pantalla en cada compresión la profundidad exacta en centímetros, la frecuencia en $\text{cpm}$ y el índice de fracción de compresión torácica ($> 60\text{–}80\%$), además de filtrar adaptativamente el artefacto de masaje (*See-Thru CPR*) para visualizar el ritmo subyacente.

---

## 🛡️ 4. Ensayos Normativos y Tolerancias con Analizador de Desfibriladores

### 4.1. Ensayos Normativos y Tolerancias con Analizador de Desfibriladores

En los Servicios de Ingeniería Biomédica y Electromedicina del servicio de salud, la verificación preventiva semestral/anual de los monitores-desfibriladores se ejecuta con un **Analizador de Desfibriladores y Marcapasos Transcutáneos certificado** (ej. *Fluke Biomedical Impulse 7000DP / 7010* con módulo de cargas variables *7010*).

El analizador dispone de dos platos metálicos de contacto que contienen una **resistencia de potencia no inductiva calibrada de $\mathbf{50\text{ }\Omega}$** (además de cargas conmutables de $25, 75, 100, 125, 150, 175\text{ y }200\text{ }\Omega$ para verificar la compensación bifásica de impedancia). Al descargar el desfibrilador sobre el analizador, un divisor de alta tensión y un conversor ADC de alta velocidad ($> 100\text{ kHz}$) digitalizan la onda $V(t)$ y calculan numéricamente la energía entregada, la corriente pico, el voltaje pico y la duración de las fases $t_1$ y $t_2$.

Los **4 umbrales reglamentarios de la norma `UNE-EN 60601-2-4`** que todo aspirante A1 debe dominar para el examen (objeto directo de pregunta en simulacros oficiales) son:

1. **Exactitud de la Energía Entregada ($\Delta E$):**
   Para cualquier nivel de energía seleccionado en todo el rango de impedancias (y específicamente sobre la carga patrón de **$50\text{ }\Omega$**), la energía realmente entregada medida por el analizador no debe diferir de la energía seleccionada en más de:
   $$\text{Tolerancia máxima} = \mathbf{\pm 15\%\text{ de la energía seleccionada ó }\pm 4\text{ Julios}\text{ (el valor que sea mayor)}}$$
   *(Nota técnica: en los protocolos internos de mantenimiento preventivo del servicio de salud suele exigirse además un criterio de alerta temprana de $\pm 10\%$ a $200\text{ J}$ sobre $50\text{ }\Omega$).*
2. **Tiempo Máximo de Carga hasta la Energía Máxima ($t_{\text{carga}}$):**
   Con baterías parcialmente descargadas (tras 15 descargas a energía máxima), el tiempo desde que se inicia la carga hasta que el condensador está listo para disparar a su energía máxima debe ser **$\mathbf{\le 15\text{ segundos}}$** (en equipos nuevos a red o batería plena suele ser $< 6\text{–}8\text{ s}$).
3. **Tiempo Máximo de Recuperación del Monitor de ECG tras una Descarga:**
   Cuando se aplica un pulso de desfibrilación de hasta $5\text{ kV}$, los descargadores de gas y diodos limitadores de la etapa de entrada del ECG (parte aplicable **Tipo CF a prueba de desfibrilación**) saturan momentáneamente el amplificador. La norma exige que **el trazado de ECG en pantalla se recupere y sea legible en $\mathbf{\le 5\text{ segundos}}$ tras el choque**.
4. **Verificación del Retardo de Sincronización en Cardioversión (`SYNC`) y del Marcapasos Transcutáneo:**
   - El analizador envía una onda simulada de ECG (complejo QRS) y mide el **tiempo de retardo ($\Delta t_{\text{sync}}$) entre la cima de la onda R y el inicio del pulso de descarga**, que debe ser **$\mathbf{\le 60\text{ ms}}$** (típicamente $20\text{–}40\text{ ms}$).
   - En el ensayo del **marcapasos transcutáneo**, se verifica sobre carga de $500\text{ }\Omega$ la exactitud de la corriente de pulso ($\pm 10\%$), frecuencia ($\pm 5\%$), anchura de pulso, sensibilidad de demanda VVI y el período refractario.

---

## ⚡ 5. Síntesis de Alto Rendimiento, Tabla Resumen y Puntos Críticos de Examen

### 5.1. Tabla Maestra de Cifras, Umbrales y Conceptos Clave

| Concepto / Parámetro de Desfibrilación | Norma / Regla / Ecuación Oficial | Valor / Cifra Exacta de Examen A1 | Implicación Clínica o de Ingeniería Biomédica |
| :--- | :--- | :--- | :--- |
| **Norma particular de desfibriladores** | Norma `UNE-EN` / `IEC` | **`UNE-EN 60601-2-4`** | Seguridad básica y funcionamiento esencial de desfibriladores |
| **Clasificación en el MDR 2017/745** | Reglas 22, 9 y 8 del Anexo VIII | **DEA/DESA: Clase III (Regla 22)** · Manual: **Clase IIb** · DAI: **Clase III** | El DEA es Clase III por tomar decisiones terapéuticas en lazo cerrado |
| **Normativa autonómica de DEA en Galicia** | Decreto DOG y Registro | **`Decreto 38/2017, de 23 de marzo`** | Registro gallego de DEA conectado operativamente con el **061-Galicia** |
| **Ecuación de energía en el condensador** | Electrostática ($C \approx 30\text{–}200\text{ }\mu\text{F}$) | **$E_{\text{alm}} = \frac{1}{2} C \cdot V_0^2$** ($V_0 \approx 1.500\text{–}4.000\text{ V}$) | La energía indicada siempre es la **entregada sobre $\mathbf{50\text{ }\Omega}$** |
| **Onda Monofásica vs. Onda Bifásica (BTE / RLB)** | Conmutación por **Puente en H de IGBTs** | Monofásica: **$360\text{ J}$** · Bifásica: **$\mathbf{150\text{–}200\text{ J}}$** (niños **$4\text{ J/kg}$**) | La bifásica invierte la polaridad en Fase 2 y **compensa la impedancia $Z_p$** |
| **Ritmos desfibrilables (Modo Asíncrono)** | Guías ERC de Soporte Vital | **1) Fibrilación Ventricular (FV)** y **2) TV sin pulso (TVsp)** | **Asistolia y AESP NUNCA se desfibrilan** (se tratan con RCP + Adrenalina) |
| **Cardioversión Eléctrica (Modo `SYNC`)** | Sincronización temporal con el ECG | Disparo sobre el **pico de la Onda R del QRS** (retardo **$\le 60\text{ ms}$**) | **Evita la Onda T (período vulnerable)** para no inducir FV (fenómeno R sobre T) |
| **Desfibrilación Interna Quirúrgica** | Límite de seguridad con cucharas | **Bloqueo automático a $\mathbf{\le 50\text{ Julios}}$** (uso real $10\text{–}30\text{ J}$) | Aplicación directa epicárdica en cirugía cardíaca abierta |
| **Exactitud normativa de energía entregada** | Ensayo `UNE-EN 60601-2-4` sobre $50\text{ }\Omega$ | **$\mathbf{\pm 15\%\text{ del valor seleccionado ó }\pm 4\text{ J}}$ (el mayor)** | Medido con analizador de desfibriladores (barrido $25\text{–}175\text{ }\Omega$) |
| **Tiempo máximo de carga y recuperación ECG** | Requisitos `UNE-EN 60601-2-4` | Carga a $E_{\text{máx}}$: **$\mathbf{\le 15\text{ s}}$** · Recuperación ECG: **$\mathbf{\le 5\text{ s}}$** | Desarmado automático interno en $30\text{–}60\text{ s}$ sobre *bleeder resistor* |
| **Compresiones torácicas de alta calidad** | Algoritmo ERC de SVB / SVA | Frecuencia **$100\text{–}120\text{ cpm}$** · Profundidad **$5\text{–}6\text{ cm}$** · Relación **$30:2$** | Medida intra-RCP por acelerómetro MEMS y capnografía ($\text{EtCO}_2$) |

### 5.2. Puntos Críticos y Trampas Habituales de Examen

1. **Trampa clásica de test sobre la Asistolia («línea plana»):** En las películas se desfibrila la asistolia, pero en medicina e ingeniería clínica **la Asistolia y la Actividad Eléctrica Sin Pulso (AESP) SON RITMOS NO DESFIBRILABLES**. La desfibrilación no «arranca» un corazón parado, sino que **despolariza y silencia un corazón caótico (FV / TVsp)** para que el nodo sinusal retome el ritmo; aplicar un choque eléctrico a una asistolia solo quema miocardio e interrumpe el masaje cardíaco.
2. **Trampa sobre Cardioversión Sincronizada (Onda R vs. Onda T):** En la cardioversión eléctrica sincronizada (`SYNC`), el pulso **se dispara sobre la ONDA R (complejo QRS, despolarización ventricular)** con el objetivo de **EVITAR disparar sobre la ONDA T (repolarización ventricular)**. Si una opción de test dice que «se sincroniza para disparar sobre la onda T», es **FALSA**: disparar sobre la onda T provoca el fenómeno **R sobre T** e induce una Fibrilación Ventricular.
3. **Trampa sobre la Clasificación MDR de los DEA (Regla 22):** No debe confundirse la clase de un monitor-desfibrilador manual (Clase IIb por Regla 9) con la de un **Desfibrilador Externo Automatizado (DEA / DESA)**: bajo el **Reglamento (UE) 2017/745 (MDR), Regla 22**, todo DEA es **Clase III** por ser un sistema terapéutico activo con función diagnóstica integrada que determina en lazo cerrado la gestión crítica del paciente.
4. **Trampa de cálculo práctico (`Pregunta 74 Simulacro 02`):** Si el tribunal pide el rango de aceptación normativo `UNE-EN 60601-2-4` al ensayar un desfibrilador seleccionado a **$200\text{ J}$ sobre la carga patrón de $50\text{ }\Omega$**, el $\pm 15\%$ de $200\text{ J}$ son **$\pm 30\text{ J}$** (que es mayor que $\pm 4\text{ J}$), por lo que el rango normativo admisible es de **$170\text{ J a }230\text{ J}$** (mientras que a energías muy bajas, p. ej. $10\text{ J}$, el $\pm 15\%$ sería $\pm 1,5\text{ J}$, por lo que se aplica el umbral mayor de **$\pm 4\text{ J}$**, admitiéndose de $6\text{ J a }14\text{ J}$).
