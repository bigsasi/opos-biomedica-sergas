# Bloque 09 — Gestión del Mantenimiento Biomédico (`UNE 209001 IN`), XMAO, Base Instalada/Ciclo de Vida, Renovación Tecnológica (`FENIN` / `COCIR`) y Contratación Pública (`Ley 9/2017 LCSP`)

> **Temas de la Parte Específica cubiertos íntegramente en este bloque (5 temas estrella de Supuestos Prácticos):**
> - **Tema 56:** Ley 9/2017, de 8 de noviembre, de contratos del sector público, por la que se trasponen al ordenamiento jurídico español las directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014: libros I y II. Procesos de contratación de tecnología sanitaria.
> - **Tema 60:** Perfil tecnológico hospitalario y propuesta para la renovación de tecnologías sanitarias: FENIN y COCIR.
> - **Tema 71:** Sistema de gestión de mantenimiento asistido por ordenador (XMAO).
> - **Tema 72:** Gestión del mantenimiento y planes de mantenimiento en el ámbito biomédico.
> - **Tema 73:** Gestión de la base instalada. Inventario. Ciclo de vida.
>
> **PDF Oficial en [`01_normativa_oficial/`](../01_normativa_oficial/):**
> - [`T56_Ley_9_2017_Contratos_Sector_Publico_LCSP.pdf`](../01_normativa_oficial/T56_Ley_9_2017_Contratos_Sector_Publico_LCSP.pdf)

---

## 1. Tema 71, Tema 72 y Tema 73: Gestión del Mantenimiento Biomédico, Base Instalada, Ciclo de Vida y Norma `UNE 209001 IN`

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

## 2. Tema 60: Perfil Tecnológico Hospitalario y Propuesta para la Renovación de Tecnologías Sanitarias (`FENIN` y `COCIR`)

> **¡PREGUNTA LITERAL Y SEGURA DE EXAMEN!**
> El **Tema 60** pide explícitamente los criterios de **FENIN** (*Federación Española de Empresas de Tecnología Sanitaria*, informes *«Perfil Tecnológico Hospitalario en España»*) y de **COCIR** (*European Coordination Committee of the Radiological, Electromedical and Healthcare IT Industry*, documento *«Age Profile Medical Devices y Golden Rules»*). **Memoriza la Regla 60 / 30 / 10 de COCIR y la tabla de vidas útiles de FENIN**, porque caen siempre en tipo test y en supuestos prácticos.

### 2.1. Las 3 «Reglas de Oro» (*Golden Rules*) de `COCIR` / `FENIN` sobre la Edad del Parque Tecnológico (**Regla 60 / 30 / 10**)
Para evitar la obsolescencia tecnológica, el exceso de dosis de radiación y las averías en un servicio de salud, **COCIR y FENIN** establecen que la distribución por edades de la base instalada de **cada familia de equipamiento biomédico** debe cumplir simultáneamente estas **3 reglas**:

| Tramo de Edad del Equipamiento | Regla de Oro `COCIR` / `FENIN` | Significado e Acción Requerida |
| :--- | :--- | :--- |
| **1ª Regla — Equipos Jóvenes ($\mathbf{\le 5\text{ años}}$ de antigüedad)** | **Al menos el $\mathbf{60\%}$ de los equipos instalados deben tener $\mathbf{5\text{ años o menos}}$** ($\ge 60\%$). | Garantiza que la mayoría de los pacientes se beneficien de la tecnología actual (menor dosis de radiación, mayor velocidad diagnóstica e IA/reconstrucción iterativa). |
| **2ª Regla — Equipos de Edad Media ($\mathbf{entre\text{ }6\text{ y }10\text{ años}}$)** | **No más del $\mathbf{30\%}$ de los equipos deben tener entre $\mathbf{6\text{ y }10\text{ años}}$** ($\le 30\%$). | Equipos maduros que requieren vigilancia activa de mantenimiento y planificación de actualizaciones (*upgrades*) o renovación a medio plazo. |
| **3ª Regla — Equipos Obsoletos ($\mathbf{> 10\text{ años}}$ de antigüedad)** | **No más del $\mathbf{10\%}$ de los equipos instalados deben superar los $\mathbf{10\text{ años}}$ de antigüedad** ($\le 10\%$). | **Umbral crítico de obsolescencia (10 años):** A partir de los $10\text{ años}$ los equipos son difíciles de mantener, carecen de las funciones obligatorias de control de dosis del `RD 601/2019` y **deben ser sustituidos/renovados de forma prioritaria**. |

### 2.2. Vida Útil Máxima Recomendada por `FENIN` por Familia de Equipamiento
En los informes de Perfil Tecnológico Hospitalario de **FENIN**, las vidas útiles de referencia recomendadas son:
- **Equipos de Diagnóstico por Imagen Pesados (TC, RM, Salas de Angiografía/Hemodinámica, Mamógrafos, PET-TC, SPECT-TC) y Radioterapia (Aceleradores Lineales):** **$8\text{ a }10\text{ años}$** (máximo absoluto $10\text{–}12\text{ años}$ con actualización intermedia *upgrade* a los $5\text{–}6\text{ años}$).
- **Ecógrafos, Equipos de Radiología Portátil y Arcos Quirúrgicos en C:** **$7\text{ a }8\text{ años}$**.
- **Equipos de Soporte Vital y Cuidados Críticos (Respiradores de UCI, Estaciones de Anestesia, Monitores Multiparamétricos, Desfibriladores, Incubadoras, Monitores de Hemodiálisis y Bombas de Infusión):** **$7\text{ a }10\text{ años}$** ($8\text{ años}$ media para respiradores/monitores/desfibriladores; $7\text{–}8\text{ años}$ para bombas de infusión y hemodiálisis por desgaste intensivo de horas de uso).
- **Endoscopia Flexible (Gastroscopios, Colonoscopios, Broncoscopios):** **$5\text{ a }7\text{ años}$**.

---

## 3. Tema 56: Ley 9/2017 de Contratos del Sector Público (`LCSP`): Libros I y II Aplicados a la Contratación de Tecnología Sanitaria

### 3.1. Estructura de los Libros I y II de la Ley 9/2017 (LCSP)
- **Libro Primero (Arts. 1 a 114):** Configuración general de la contratación del sector público y elementos estructurales de los contratos (objeto y principios de **libertad de acceso, publicidad, transparencia, no discriminación e igualdad de trato**, integridad y **mejor relación calidad-precio**; ámbito subjetivo [Administraciones Públicas — **el SERGAS es Administración Pública a efectos de la LCSP**]; tipos de contratos; partes; objeto, **presupuesto base de licitación [PBL con IVA]**, **valor estimado del contrato [VEC sin IVA, incluyendo prórrogas y modificados previstos]** y precio; garantías provisional y definitiva [$5\%$ del precio de adjudicación sin IVA]).
- **Libro Segundo (Arts. 115 a 315):** De los contratos de las Administraciones Públicas:
  - **Título I:** Actuaciones relativas a la contratación (expediente de contratación, Pliego de Cláusulas Administrativas Particulares [**PCAP**] y Pliego de Prescripciones Técnicas [**PPT**], procedimientos de adjudicación, criterios de adjudicación, ejecución, modificación [máximo **$20\%$ del precio inicial** si está previsto en el pliego, Art. 204], resolución).
  - **Título II:** De los distintos tipos de contratos de las Administraciones Públicas (Obras, Concesión de obras, Concesión de servicios, **Suministros** y **Servicios**).

### 3.2. Tipos de Contratos Aplicables en Ingeniería Biomédica (Arts. 12 a 18 LCSP)
1. **Contrato de Suministro (Art. 16 LCSP):** Adquisición, el **arrendamiento financiero (*leasing*)**, o el **arrendamiento (*renting*), con o sin opción de compra**, de productos o bienes muebles (**compra de un TC, ecógrafos, monitores, fungibles, reactivos de laboratorio con cesión de analizador o adquisición de licencias de software estándar comercial**).
   - *Regla de plazo máximo (Art. 29 LCSP):* Los contratos de suministros y de servicios de prestación sucesiva tendrán un **plazo máximo de duración de 5 AÑOS, incluyendo las posibles prórrogas**. *(Excepción: si exige inversiones cuyo período de recuperación supere los 5 años).*
2. **Contrato de Servicios (Art. 17 LCSP):** Prestaciones de hacer consistentes en el desarrollo de una actividad (**contrato de mantenimiento integral o preventivo/correctivo de equipamiento electromédico, servicios de dosimetría o desarrollo de software a medida**).
3. **Contrato Mixto (Art. 18 LCSP — Muy frecuente en Alta Tecnología):** Contiene prestaciones de dos o más clases (ej. **Suministro de una Resonancia Magnética + Obra de adecuación de la sala/Jaula de Faraday + Servicio de mantenimiento posterior**).
   - **¿Qué régimen jurídico rige la adjudicación de un Contrato Mixto? (¡Pregunta fija de test!):** Se atiende al **carácter de la prestación PRINCIPAL**, que se determina en función de cuál de las prestaciones tenga el **mayor Valor Estimado** (normalmente el **Suministro** del equipo de alta tecnología supera el valor de la obra de adecuación).

### 3.3. Umbrales Cuantitativos (Contratos Menores vs. SARA) y Procedimientos de Adjudicación

| Figura / Procedimiento | Umbral de Valor Estimado del Contrato (`VEC`, siempre SIN IVA) | Características Clave para Examen |
| :--- | :--- | :--- |
| **Contrato Menor** (`Art. 118 LCSP`) | • **Obras:** **$\text{VEC} < \mathbf{40.000\text{ €}}$**.<br>• **Suministros y Servicios:** **$\text{VEC} < \mathbf{15.000\text{ €}}$** *(hasta $50.000\text{ €}$ solo en contratos específicos de agentes públicos del Sistema Español de Ciencia, Tecnología e Innovación para proyectos de investigación)*. | • Duración máxima **1 año** y **NO admiten prórroga** ni revisión de precios.<br>• Adjudicación directa previo informe de necesidad del órgano de contratación justificativo de que no se está alterando el objeto del contrato para evitar los umbrales + aprobación del gasto y factura. |
| **Procedimiento Abierto Supersimplificado (Abreviado)** (`Art. 159.6 LCSP`) | • **Obras:** $\text{VEC} < 80.000\text{ €}$.<br>• **Suministros y Servicios:** **$\text{VEC} < \mathbf{60.000\text{ €}}$**. | • **100 % criterios evaluables automáticamente mediante fórmulas** (sin sobre de juicio de valor).<br>• Exento de garantía definitiva y tramitación ultrarrápida (plazo de ofertas mín. $10\text{ días hábiles}$). |
| **Procedimiento Abierto Simplificado** (`Art. 159.1 LCSP`) | • **Obras:** $\text{VEC} \le 2.000.000\text{ €}$.<br>• **Suministros y Servicios:** **$\text{VEC} \le \text{Umbral SARA}$** ($143.000\text{ €}$ AGE / $221.000\text{ €}$ CCAA-SERGAS) **y que los criterios sujetos a juicio de valor no superen el $25\%$ del total** ($45\%$ en prestaciones intelectuales/ingeniería). | Plazo mínimo de presentación de ofertas: **$15\text{ días naturales}$** en suministros/servicios ($20\text{ días}$ en obras). Obligatoria inscripción en el **ROLECE / Registro General de Contratistas de Galicia**. |
| **Contratos Sujetos a Regulación Armonizada (`SARA` — Publicación obligatoria en el Diario Oficial de la Unión Europea `DOUE`)** (`Arts. 20 a 22 LCSP`, umbrales vigentes UE) | • **Obras y Concesiones:** **$\text{VEC} \ge \mathbf{5.538.000\text{ €}}$**.<br>• **Suministros y Servicios en CCAA / SERGAS:** **$\text{VEC} \ge \mathbf{221.000\text{ €}}$** *(en Administración General del Estado es $143.000\text{ €}$)*. | • Plazo general de presentación de ofertas en Procedimiento Abierto SARA: **mínimo $35\text{ días naturales}$** desde el envío del anuncio al `DOUE` (reducible a **$15\text{ días}$** si se publicó anuncio de información previa o a **$30\text{ días}$** si se presentan ofertas por medios electrónicos).<br>• Susceptibles de **Recurso Especial en Materia de Contratación (Art. 44 LCSP)** (que se puede interponer en suministros y servicios desde **$\text{VEC} > 100.000\text{ €}$** y en obras desde **$> 3.000.000\text{ €}$**). |
| **Procedimiento Negociado Sin Publicidad por Exclusividad Técnica** (`Art. 168.a.2º LCSP`) | Sin límite de cuantía cuando se acredite que **solo puede encomendarse a un empresario determinado por no existir competencia por razones técnicas o de protección de derechos exclusivos (propiedad industrial/intelectual)**. | **¡Caso clásico de Ingeniería Biomédica!** Es el procedimiento que se utiliza cuando el **mantenimiento oficial o un repuesto/actualización de software exclusivo de un equipo de alta tecnología (ej. Robot *Da Vinci*, Acelerador Lineal o RM)** solo puede ser prestado por el fabricante original (**OEM**) y se acredita documentalmente que no existe alternativa razonable. |
| **Asociación para la Innovación y Compra Pública de Innovación (`CPI`: `CPP` y `CPTI`)** (`Art. 177 LCSP`) | Procedimiento específico cuando el hospital necesita **desarrollar productos, servicios u obras innovadores que aún no existen en el mercado** y adquirir ulteriormente los suministros resultantes. | El **SERGAS es referente europeo en Compra Pública de Innovación (CPI)** (proyectos *Hospital 2050*, *InnovaSaúde*, *Código 100*, *Innova MicroLab*, *PRECISAÚDE*). |

### 3.4. Regla de Oro al Redactar el Pliego de Prescripciones Técnicas (`PPT` — Art. 126 LCSP)
> **¡Pregunta fija de examen y de supuesto práctico!**
> Según el **Artículo 126.6 de la LCSP**, las prescripciones técnicas **NO podrán mencionar una fabricación o una procedencia determinada, o un procedimiento concreto, ni hacer referencia a una marca, a una patente o a un tipo**, con la finalidad de favorecer o descartar ciertas empresas o ciertos productos.
> *Excepción legal:* Tal mención o referencia solo se autorizará, con carácter excepcional, cuando no sea posible hacer una descripción lo bastante precisa e inteligible del objeto del contrato, en cuyo caso **irá obligatoriamente acompañada de la expresión «o equivalente»**.
