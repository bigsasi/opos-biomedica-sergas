# Esp. Tema 31 — Desfibrilación. Fundamentos y tipos de desfibriladores. Soporte vital.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 1: Núcleo Diamante (💎 Núcleo Diamante)  
> **Bloque de Estudio Completo:** [`Bloque_05_Electromedicina_Criticos_Quirofano_Ventilacion_Anestesia_Monitorizacion.md`](../02_apuntes_nucleo_diamante/Bloque_05_Electromedicina_Criticos_Quirofano_Ventilacion_Anestesia_Monitorizacion.md)

## 🎯 Cruce con Otras Oposiciones del SERGAS

- **Categorías con solapamiento:** **Ingeniero/a Técnico/a** |  | **TS Imagen para el Diagnóstico** |  | **TS Radioterapia**
- **Grado de solapamiento:** **Alto (85%)**: Incluye explícitamente «Desfibriladores» en el Tema 47 de ingeniería clínica y electromedicina.<br><br>**Medio (50%)**: Solapa en actuaciones ante parada cardíaca y soporte vital en servicios sanitarios.<br><br>**Medio (50%)**: Solapa en actuaciones ante parada cardíaca y soporte vital.
- **Epígrafes equivalentes:**
  • Tema 47. Monitorización. Desfibriladores. Bisturís. Equipos de ventilación.
  
  • Tema 30. Primeros auxilios en el servicio de radiología y medicina nuclear. Actuaciones ante situaciones de emergencia: parada cardíaca, hemorragias, reacciones alérgicas y responsabilidad del/de la técnico en radiología.
  
  • Tema 4. Primeros auxilios en el servicio de radioterapia. Actuaciones ante situaciones de emergencia: parada cardíaca, hemorragias, reacciones alérgicas y responsabilidad del técnico especialista en radioterapia.

---

## 📖 Desarrollo Técnico y Normativo del Tema

### 6. Tema 31: Desfibriladores (Fundamentos, Onda Monofásica vs. Bifásica y Soporte Vital)

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
