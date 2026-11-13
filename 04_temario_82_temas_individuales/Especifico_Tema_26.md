# Esp. Tema 26 — Robotización quirúrgica. Principios, tipos y tecnologías.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 3: Ficha Específica Biomédica (Complementario)  
> **Bloque de Estudio Completo:** [`Bloque_05_Electromedicina_Criticos_Quirofano_Ventilacion_Anestesia_Monitorizacion.md`](../02_apuntes_nucleo_diamante/Bloque_05_Electromedicina_Criticos_Quirofano_Ventilacion_Anestesia_Monitorizacion.md)

## 🎯 Cruce con Otras Oposiciones del SERGAS

- **Categorías con solapamiento:** **Ingeniero/a Técnico/a**
- **Grado de solapamiento:** **Bajo (25%)**: Relación tangencial dentro del equipamiento del bloque quirúrgico; tema de nueva incorporación tecnológica en Biomédica.
- **Epígrafes equivalentes:**
  • Tema 46. El bloque quirúrgico: instalaciones y equipos. Circuitos. UCIs y unidades de reanimación post-anestésica: instalaciones y equipos. Inspección y mantenimiento.

---

## 📖 Desarrollo Técnico y Normativo del Tema

### 4. Tema 20, Tema 25 y Tema 26: Endoscopia Diagnóstica/Terapéutica, Endoscopia Quirúrgica (Torre de Laparoscopia) y Robotización Quirúrgica

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
