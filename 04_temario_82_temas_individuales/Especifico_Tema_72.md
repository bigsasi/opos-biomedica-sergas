# Esp. Tema 72 — Gestión del mantenimiento y planes de mantenimiento en el ámbito biomédico.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 1: Núcleo Diamante (💎 Núcleo Diamante)  
> **Bloque de Estudio Completo:** [`Bloque_09_Mantenimiento_XMAO_Base_Instalada_UNE209001_FENIN_COCIR_y_LCSP.md`](../02_apuntes_nucleo_diamante/Bloque_09_Mantenimiento_XMAO_Base_Instalada_UNE209001_FENIN_COCIR_y_LCSP.md)

## 🎯 Cruce con Otras Oposiciones del SERGAS

- **Categorías con solapamiento:** **Ingeniero/a Técnico/a** |  | **TS Imagen para el Diagnóstico** |  | **TS Radioterapia**
- **Grado de solapamiento:** **Total (95%)**: Cubre concepto y tipos de mantenimiento, planes de mantenimiento integral y organización del mantenimiento en una unidad de electromedicina (UNE 209001 IN).<br><br>**Medio (60%)**: Incluye control de calidad del equipamiento y programa de mantenimiento.<br><br>**Medio (60%)**: Incluye control de calidad de la equipación y programa de mantenimiento.
- **Epígrafes equivalentes:**
  • Tema 67. El mantenimiento. Concepto. Tipos de mantenimiento.
  • Tema 70. Planes de mantenimiento integral. Gestión y contratación de servicios técnicos.
  • Tema 74. Organización de una unidad de electromedicina: UNE 209001 IN.
  
  • Tema 4. Programa de garantía de calidad en el servicio de radiología y medicina nuclear. Control de calidad en aspectos clínicos. Control de calidad del equipamiento. Programa de mantenimiento.
  
  • Tema 5. Criterios de calidad en radioterapia. Control de calidad de los instrumentos de medida. Control de calidad en aspectos clínicos. Control de calidad de la equipación. Programa de mantenimiento.

---

## 📖 Desarrollo Técnico y Normativo del Tema

### 1. Tema 71, Tema 72 y Tema 73: Gestión del Mantenimiento Biomédico, Base Instalada, Ciclo de Vida y Norma `UNE 209001 IN`

> **¡EL BLOQUE MÁS IMPORTANTE PARA LOS SUPUESTOS PRÁCTICOS!**
> El documento de referencia nacional para los servicios de Ingeniería Biomédica y Electromedicina en España es el informe/norma **`UNE 209001 IN` (*Guía para la gestión y el mantenimiento de productos sanitarios activos no implantables — PSANI*)**, complementado por la norma **`UNE-EN 62353` (*Equipos electromédicos. Ensayos recurrentes y ensayos después de la reparación del equipo electromédico*)** y la Circular de la **AEMPS** sobre asistencia técnica de productos sanitarios.

### 1.1. Ciclo de Vida Completo de un Equipo Biomédico en el Hospital (`UNE 209001 IN` — Tema 73)
El ciclo de vida de cualquier activo biomédico en la **Base Instalada** del SERGAS consta de **7 fases obligatorias**:
1. **Fase 1 — Planificación y Detección de Necesidad:** Evaluación técnica/clínica, estudio de viabilidad e inclusión en el Plan de Inversiones (Tema 61).
2. **Fase 2 — Adquisición / Contratación (`LCSP`):** Redacción del **Pliego de Prescripciones Técnicas (PPT)** definiendo requisitos clínicos, de integración `DICOM`/`HL7`, ciberseguridad, suministro de manuales de servicio/claves de mantenimiento, formación técnica y condiciones de garantía.
3. **Fase 3 — Recepción, Instalación y Pruebas de Aceptación (*Acceptance Testing* — ¡Pregunta fija de examen!):**
   - **Ningún equipo biomédico nuevo, en demostración, cesión o depósito puede entrar en uso clínico con pacientes sin haber superado antes la Recepción y Prueba de Aceptación** por la Unidad de Ingeniería Biomédica / Electromedicina (y por Radiofísica / SPR si emite radiaciones ionizantes).
   - **¿Qué se hace en la Recepción y Aceptación (`UNE 209001 IN`)?**
     1. Comprobación administrativa del albarán frente al pedido, **Marcado CE**, Declaración UE de Conformidad, manual de usuario y manual técnico en español.
     2. **Alta en el Inventario de la Base Instalada en el `XMAO`** y colocación de la **Etiqueta de Identificación Única (Código de Activo / Código de Barras / QR)** en lugar visible del equipo.
     3. **Inspección visual y ensayo de Seguridad Eléctrica inicial (`UNE-EN 62353`)** + verificación funcional con simuladores/analizadores de parámetros para establecer el **Estado de Referencia Inicial**.
     4. **Acta de Recepción Formal y Formación inicial** al personal clínico usuario y al personal técnico.
4. **Fase 4 — Uso Clínico y Formación Continua:** Operación segura conforme a la finalidad prevista del fabricante.
5. **Fase 5 — Mantenimiento (Preventivo, Técnico-Legal, Conductivo, Correctivo y Predictivo) y Control de Calidad:** Registrado íntegramente en el **`XMAO`**.
6. **Fase 6 — Vigilancia de Productos Sanitarios:** Gestión de notas de seguridad de la AEMPS, alertas y **Acciones Correctivas de Seguridad en Campo (`FSCA`)** / actualizaciones (*upgrades*).
7. **Fase 7 — Baja de Inventario, Desinstalación y Gestión Ambiental (`RAEE`):**
   - Causas de baja: obsolescencia técnica o clínica, pérdida de soporte de repuestos por el fabricante (*End-of-Support* / *End-of-Life*), avería antieconómica o inseguridad.
   - **Protocolo obligatorio de Baja (`UNE 209001 IN`):** **1) Descontaminación/desinfección biológica**, **2) Borrado seguro de todos los datos personales de pacientes almacenados en la memoria/disco duro del equipo (cumplimiento RGPD/LOPDGDD)**, **3) Retirada de fuentes radiactivas si las hubiera**, **4) Certificado de Baja en el `XMAO`** y **5) Entrega a gestor autorizado de residuos `RAEE`**.

### 1.2. Gestión de la Base Instalada e Inventario: El Índice de Fennigkoh y Smith (Priorización Basada en el Riesgo — Tema 72 y 73)
Para gestionar miles de equipos biomédicos y decidir la periodicidad de mantenimiento preventivo e inclusión en el plan de calidad, se aplica el modelo clásico de **Fennigkoh y Smith (recomendado por la OMS y ECRI)**, que calcula el **Número de Gestión del Equipo (`EM` — *Equipment Management Number*)** sumando 3 factores:
$$\text{EM} = \text{Función del Equipo (1 a 10)} + \text{Riesgo Físico / Aplicación Clínica (1 a 5)} + \text{Requisitos de Mantenimiento (1 a 5)}$$
1. **Función ($F$, de $1\text{ a }10$):**
   - **Terapéuticos:** Soporte vital (**$10$**: respirador, anestesia, desfibrilador, hemodiálisis, incubadora); Quirúrgicos y cuidados intensivos (**$9$**: electrobisturí, láser); Terapia física y tratamiento (**$8$**).
   - **Diagnósticos:** Monitorización quirúrgica y de UCI (**$7$**);Otros equipos de monitorización fisiológica y diagnóstico (**$6$**).
   - **Analíticos:** Analizadores de laboratorio (**$5$**); Accesorios de laboratorio (**$4$**); Ordenadores y relacionados (**$3$**).
   - **Otros:** Relacionados con el paciente (**$2$**: camas eléctricas, grúas); No relacionados con paciente (**$1$**).
2. **Riesgo Físico asociado al fallo ($R$, de $1\text{ a }5$):**
   - **$5$:** Posible **muerte del paciente**.
   - **$4$:** Posible **lesión grave** del paciente o del operador.
   - **$3$:** Terapia inapropiada o **diagnóstico erróneo**.
   - **$2$:** Daño al equipo o pérdida de datos sin riesgo directo grave.
   - **$1$:** Sin riesgo significativo identificado.
3. **Requisitos de Mantenimiento ($M$, de $1\text{ a }5$):**
   - **$5$:** Extensivo / Muy alto (equipos neumáticos, mecánicos o de fluidos que requieren calibración frecuente: respiradores, máquinas de anestesia, hemodiálisis).
   - **$4$:** Superior a la media.
   - **$3$:** Medio (equipos electrónicos con pruebas de funcionamiento).
   - **$2$:** Inferior a la media.
   - **$1$:** Mínimo (inspección visual básica).
- **Criterio de inclusión:** Los equipos con **$\text{EM} \ge 12$** se consideran **Críticos / Prioritarios** y deben tener mantenimiento preventivo programado estricto (semestral o anual); los equipos de soporte vital ($F=10$ o $R=5$) tienen prioridad absoluta en tiempos de respuesta ante averías.

### 1.3. Tipos de Mantenimiento e Indicadores Clave de Gestión (`KPIs`: `MTBF`, `MTTR`, Disponibilidad — Tema 71 y 72)

1. **Tipos de Mantenimiento (`UNE-EN 13306` y `UNE 209001 IN`):**
   - **Mantenimiento Conductivo (De Uso / Primer Nivel):** Realizado a diario por el propio usuario o técnico de guardia (limpieza externa, test diario de autochequeo de máquina de anestesia o desfibrilador, test de Bowie-Dick en autoclave).
   - **Mantenimiento Preventivo (Sistemático / Programado):** Intervenciones programadas a intervalos predeterminados (sustitución de kits de mantenimiento de horas/año: baterías, células de $\text{O}_2$, filtros, membranas, calibración con simuladores y test de seguridad eléctrica `UNE-EN 62353`) para reducir la probabilidad de fallo.
   - **Mantenimiento Técnico-Legal (Reglamentario):** Obligatorio por normativa industrial o sanitaria (`RD 1085/2009` y `RD 1976/1999` en Rayos X, `ITC-BT-38` en quirófanos, `UNE 171340` en salas de ambiente controlado, reglamento de equipos a presión `REP RD 809/2021` en autoclaves de vapor).
   - **Mantenimiento Correctivo (No programado / Averías):** Tras la detección de un fallo para devolver el equipo a su estado operativo, seguido obligatoriamente de **verificación funcional y ensayo de seguridad `UNE-EN 62353` antes de devolverlo a planta**.
   - **Mantenimiento Predictivo (Basado en la Condición — CBM):** Monitorización continua o remota de variables físicas (corriente de filamento y arcos en tubos de TC, presión y nivel de helio en RM, vibraciones, temperatura) para intervenir justo antes de que se produzca la rotura.
2. **Los 3 Indicadores Matemáticos de Fiabilidad, Mantenibilidad y Disponibilidad (¡Preguntas fijas de cálculo en test y supuestos!):**
   - **1) `MTBF` (*Mean Time Between Failures* — Tiempo Medio Entre Fallos $\rightarrow$ mide la FIABILIDAD):**
     $$\text{MTBF} = \frac{\text{Tiempo total operativo de funcionamiento (Horas de buen funcionamiento)}}{\text{Número de fallos (averías) en ese período}}$$
   - **2) `MTTR` (*Mean Time To Repair* — Tiempo Medio de Reparación $\rightarrow$ mide la MANTENIBILIDAD):**
     $$\text{MTTR} = \frac{\text{Tiempo total de parada por reparación correctiva (Horas de indisponibilidad por avería)}}{\text{Número de fallos (averías) reparados}}$$
   - **3) Disponibilidad Operativa Intrínseca ($D$ o *Uptime* $\rightarrow$ objetivo en Alta Tecnología y Críticos $\ge \mathbf{95\text{–}98\%}$):**
     $$D = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}} \times 100\%$$
   - *(Ejemplo rápido de examen: Si un TC tiene un $\text{MTBF} = 490\text{ horas}$ y un $\text{MTTR} = 10\text{ horas}$, su Disponibilidad es $D = \frac{490}{490 + 10} = \frac{490}{500} = \mathbf{98\%}$).*

### 1.4. Ensayos Eléctricos tras Reparación y Mantenimiento Preventivo (`UNE-EN 62353` vs. `UNE-EN 60601-1`)
> **Pregunta frecuente de Electromedicina:** ¿Qué norma se usa para los ensayos periódicos de mantenimiento en el hospital y por qué no se usa directamente la `UNE-EN 60601-1`?
> **Respuesta:** La `UNE-EN 60601-1` es la norma de **homologación y diseño en fábrica** (incluye ensayos destructivos de rigidez dieléctrica de alta tensión que deteriorarían el equipo si se repiten cada año). Para las **revisiones periódicas en el hospital y después de cada reparación** se aplica la norma **`UNE-EN 62353`**, que mide con un analizador de seguridad eléctrica:
1. **Inspección visual** (integridad de chasis, cables de red, latiguillos y etiquetado).
2. **Resistencia de la Tierra de Protección (en equipos Clase I eléctrica):** Con corriente de prueba $\ge 200\text{ mA}$: debe ser **$\le 0,3\text{ }\Omega$** para el equipo con cable de red desmontable o **$\le 0,2\text{ }\Omega$** solo el cable (y $\le 0,1\text{ }\Omega$ solo el chasis).
3. **Resistencia de Aislamiento** (a $500\text{ V DC}$).
4. **Corriente de Fuga del Equipo y Corriente de Fuga de la Parte Aplicable (Tipo B, BF y CF)** (por método directo, diferencial o alternativo).
5. **Prueba Funcional** con simulador de paciente (simulador de ECG/SpO2/PNI, pulmón de prueba en respiradores, medidor de energía con carga de $50\text{ }\Omega$ en desfibriladores, analizador de electrobisturís).

### 1.5. Tema 71: Sistema de Gestión de Mantenimiento Asistido por Ordenador (`XMAO` / `GMAO`)
El **`XMAO`** del SERGAS es la herramienta informática central que estructura toda la actividad de Ingeniería Biomédica y Mantenimiento:
- **Módulos funcionales del `XMAO`:**
  1. **Módulo de Inventario Técnico y Árbol Jerárquico de Ubicaciones:** Ficha maestra de cada activo (código único de inventario, denominación estandarizada **GMDN / EMDN** [Nomenclatura Europea de Dispositivos Médicos], marca, modelo, número de serie, **UDI**, clase de riesgo MDR, criticidad Fennigkoh, Área Sanitaria / Hospital / Planta / Local, fecha de puesta en marcha, fin de garantía, valor de adquisición, proveedor y contrato asociado).
  2. **Módulo de Gestión de Órdenes de Trabajo (OTs):**
     - **OTs Correctivas (Avisos de avería):** Abiertas desde cualquier PC de planta (`IANUS`/Intranet) con registro de fecha/hora de aviso, fecha/hora de respuesta, fecha/hora de resolución, diagnóstico del fallo, repuestos consumidos y tiempo de parada.
     - **OTs Preventivas, Técnico-Legales y de Control de Calidad:** Generadas automáticamente por calendario o por contador de horas de uso, con **gamas de mantenimiento y listas de chequeo (*checklists*) parametrizadas** según los manuales del fabricante y la `UNE 209001 IN`.
  3. **Módulo de Gestión de Almacén de Repuestos y Fungibles Técnicos:** Control de stock mínimo/crítico de repuestos (baterías, sensores de flujo, células de $\text{O}_2$, brazaletes, cables de ECG).
  4. **Módulo de Gestión de Contratos Externos y SLAs (*Service Level Agreements*):** Control del cumplimiento de los **Acuerdos de Nivel de Servicio (SLA)** de las empresas adjudicatarias (tiempo de respuesta presencial, tiempo máximo de resolución, porcentaje de disponibilidad anual garantizada $\ge 98\%$ y cálculo automático de penalizaciones contractuales).
  5. **Módulo de Cuadro de Mando e Indicadores Técnicos y Económicos:** Cálculo automático de `MTBF`, `MTTR`, disponibilidad, cumplimiento del plan preventivo ($\% \text{ OTs preventivas realizadas / programadas}$) y **ratio de coste acumulado de mantenimiento sobre valor de reposición** para alimentar el Plan de Renovación Tecnológica.

---
