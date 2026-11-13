# Esp. Tema 21 — Ventilación mecánica. Definición y principios físicos de la ventilación mecánica. Modos de la ventilación mecánica. Ventilación invasiva y no invasiva. Ventilación en neonatología. Ventilación en anestesia.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 1: Núcleo Diamante (💎 Núcleo Diamante)  
> **Bloque de Estudio Completo:** [`Bloque_05_Electromedicina_Criticos_Quirofano_Ventilacion_Anestesia_Monitorizacion.md`](../02_apuntes_nucleo_diamante/Bloque_05_Electromedicina_Criticos_Quirofano_Ventilacion_Anestesia_Monitorizacion.md)

## 🎯 Cruce con Otras Oposiciones del SERGAS

- **Categorías con solapamiento:** **Ingeniero/a Técnico/a**
- **Grado de solapamiento:** **Alto (75%)**: Incluye explícitamente «Equipos de ventilación» e instalaciones/equipos de UCI, reanimación y bloque quirúrgico.
- **Epígrafes equivalentes:**
  • Tema 47. Monitorización. Desfibriladores. Bisturís. Equipos de ventilación.
  • Tema 46. El bloque quirúrgico: instalaciones y equipos. Circuitos. UCIs y unidades de reanimación post-anestésica: instalaciones y equipos. Inspección y mantenimiento.

---

## 📖 Desarrollo Técnico y Normativo del Tema

### 1. Tema 21: Ventilación Mecánica (Principios Físicos, Modos, VNI, Neonatología y Anestesia)

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
