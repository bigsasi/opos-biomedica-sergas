# Esp. Tema 22 — Caracterización y funcionamiento de los sistemas de anestesia. Equipamiento asociado.

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

### 2. Tema 22: Sistemas de Anestesia y Equipamiento Asociado (Estación de Trabajo de Anestesia — `UNE-EN ISO 80601-2-13`)

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
