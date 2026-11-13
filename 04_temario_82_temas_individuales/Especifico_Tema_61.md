# Esp. Tema 61 — Plan de necesidades. Plan de inversión. Planes de alta tecnología. Metodología.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 1: Núcleo Diamante (💎 Núcleo Diamante)  
> **Bloque de Estudio Completo:** [`Bloque_08_Ingenieria_Hospitalaria_REBT_ITC38_Ambiente_Controlado_Planes_Directores_Calidad.md`](../02_apuntes_nucleo_diamante/Bloque_08_Ingenieria_Hospitalaria_REBT_ITC38_Ambiente_Controlado_Planes_Directores_Calidad.md)

## 🎯 Cruce con Otras Oposiciones del SERGAS

- **Categorías con solapamiento:** **Ingeniero/a Técnico/a** |  | **Grupo Técnico / Gestión TIC**
- **Grado de solapamiento:** **Alto (70%)**: Relacionado con la planificación de inversiones en Planes Directores de hospitales y gestión de unidades de electromedicina.<br><br>**Medio (50%)**: Cubre propuestas de inversión/proyectos (business case), análisis de costes/beneficios y planificación.
- **Epígrafes equivalentes:**
  • Tema 72. Planes directores de hospitales. Metodología. Etapas del plan director.
  • Tema 74. Organización de una unidad de electromedicina: UNE 209001 IN.
  
  • Superior (A1): Tema 1. Gobernanza de las TIC. Planificación, dirección y control de las TIC. CoBIT (Control Objectives for Information and Related Technology), objetivos de control y métricas. Propuestas de proyectos (casos de negocio o business case), análisis de costes/beneficios, análisis de riesgos, factores críticos de éxito. Val IT. Análisis de negocio (BABOK).

---

## 📖 Desarrollo Técnico y Normativo del Tema

### 3. Temas 61, 63, 65, 66 y 68: Plan Funcional, Plan Director de Hospitales, Plan de Necesidades/Inversión e Integración en Infraestructuras

> **Cómo se relacionan estos 5 temas en un único flujo cronológico (¡Muy preguntado en examen!):**
> $$\text{1. Análisis Demográfico y Cartera de Servicios} \longrightarrow \text{2. PLAN FUNCIONAL (Tema 63 y 65: Necesidades, Dimensionamiento y Flujos)} \longrightarrow \text{3. PLAN DIRECTOR ARQUITECTÓNICO POR FASES (Tema 66)} \longrightarrow \text{4. PLAN DE NECESIDADES Y PLAN DE INVERSIÓN DE EQUIPAMIENTO / ALTA TECNOLOGÍA (Tema 61)} \longrightarrow \text{5. PREINSTALACIÓN E INTEGRACIÓN DE EQUIPOS EN OBRA (Tema 68)}$$

### 3.1. Tema 63 y Tema 65: El Plan Funcional de un Centro Sanitario y Diseño de Flujos
- **¿Qué es el Plan Funcional? (Tema 63):** Es el **documento técnico-asistencial previo a cualquier proyecto arquitectónico** que traduce la demanda sanitaria de una población y la **Cartera de Servicios** del hospital en una relación cuantificada de **Unidades Funcionales**, su actividad prevista (consultas, ingresos, estancias medias, cirugías, exploraciones), la **organización de recursos humanos y tecnológicos**, y el **Programa Funcional de Superficies** (metros cuadrados útiles y construidos de cada local y sus relaciones de proximidad/flujos).
- **Metodología de Dimensionamiento de un Plan Funcional (Fórmulas de cálculo en supuestos prácticos):**
  1. **Dimensionamiento de Camas de Hospitalización:**
     $$\text{Estancias anuales previstas} = \text{Ingresos anuales} \times \text{Estancia Media (EM)}$$
     $$\text{Nº de Camas necesarias} = \frac{\text{Estancias anuales previstas}}{365 \times \text{Índice de Ocupación objetivo (IO, típicamente } 0,80\text{ a }0,85)}$$
  2. **Dimensionamiento de Quirófanos (o Salas de TC / RM / Consultas):**
     $$\text{Nº de Quirófanos} = \frac{\text{Nº de Intervenciones anuales} \times \text{Duración media por intervención (horas)}}{\text{Jornada hábil anual de un quirófano (días/año } \times \text{ horas/día)} \times \text{Rendimiento Quirúrgico objetivo (}0,75\text{–}0,80\text{)}}$$
- **Unidades Funcionales y Diseño de Flujos / Circulaciones (Tema 65):**
  - **Separación estricta de circulaciones externas e internas (Verticales [ascensores/montacargas] y Horizontales [pasillos]):**
    1. **Circulación Externa / Ambulatoria:** Pacientes ambulatorios (Consultas Externas, Extracciones, Hospital de Día, Gabinetes) y visitantes $\rightarrow$ no deben cruzar nunca las circulaciones internas de hospitalización ni de críticos.
    2. **Circulación Interna Técnica / Asistencial:** Personal sanitario y **pacientes encamados** (entre Urgencias, Diagnóstico por Imagen, Bloque Quirúrgico, UCI y Hospitalización).
    3. **Circulación Logística (Limpio vs. Sucio):** Suministros limpios (farmacia, comida, lencería limpia, material estéril) separados de los circuitos de evacuación de sucio (residuos sanitarios, ropa sucia, cadáveres).
  - **Criterios de Humanización y Sostenibilidad (Tema 65 y 69):** Habitaciones individuales o dobles con luz natural y vistas al exterior, control acústico nocturno en UCI/hospitalización, señalética accesible universal (lectura fácil/braille), arquitectura biofílica y certificaciones ambientales de edificación sostenible (**BREEAM / LEED / VERDE**).

### 3.2. Tema 66: Planes Directores de Hospitales (Metodología y Etapas)
Un **Plan Director** es el instrumento estratégico de planificación física, funcional, tecnológica y económica a **medio y largo plazo ($5\text{ a }15\text{ años}$)** que ordena la **reforma, ampliación y modernización por fases de un hospital en funcionamiento** (o la construcción de uno nuevo) **garantizando en todo momento la continuidad de la actividad asistencial sin interrumpir el servicio del hospital**.
- **Las 6 Etapas Metodológicas de un Plan Director (¡Pregunta literal del Tema 66 de Biomédica y Tema 72 de Ing. Técnico!):**
  1. **Etapa 1 — Análisis de la Situación Actual (Diagnóstico de partida):** Estudio demográfico y epidemiológico del Área Sanitaria, análisis de la actividad histórica, auditoría del estado arquitectónico, estructural, de instalaciones industriales y del **inventario/obsolescencia del parque tecnológico biomédico**.
  2. **Etapa 2 — Definición del Modelo Asistencial y Plan Funcional Futuro:** Definición de la cartera de servicios horizonte, proyecciones de demanda a $10\text{–}15\text{ años}$ (potenciando ambulatorización, CMA, Hospital de Día y telemedicina) y cálculo del programa de necesidades de espacios.
  3. **Etapa 3 — Zonificación y Ordenación General Arquitectónica (*Master Plan*):** Contraste entre la superficie actual y la futura; diseño de la matriz de relaciones funcionales entre bloques (Urgencias $\leftrightarrow$ Imagen $\leftrightarrow$ Críticos/Quirófanos) y reserva de espacios de crecimiento futuro (*espacios pulmón*).
  4. **Etapa 4 — Planificación de Fases de Ejecución y Gestión de Traslados («Efecto Dominó»):** Es la etapa más crítica en la reforma de un hospital vivo: diseña la secuencia constructiva (**Fase 0 de obras previas/edificio nuevo $\rightarrow$ traslado de unidades $\rightarrow$ demolición/reforma de zonas liberadas en Fase 1, Fase 2...**) minimizando el ruido, el polvo (*protocolo de bioseguridad frente a Aspergillus en obras hospitalarias*) y las interferencias asistenciales.
  5. **Etapa 5 — Plan de Equipamiento y Alta Tecnología + Valoración Económica y Financiera (Plan de Inversiones plurianual).**
  6. **Etapa 6 — Licitación de Proyectos, Dirección de Obra, Comisionado (*Commissioning*), Puesta en Marcha y Evaluación Post-Ocupacional.**

### 3.3. Tema 61 y Tema 68: Plan de Necesidades, Plan de Inversión, Alta Tecnología e Integración en Instalaciones
1. **Clasificación del Equipamiento en un Plan de Inversión / Montaje de Hospitales (Grupos I, II y III — ¡Pregunta clásica!):**
   - **Grupo I (Obra civil e instalaciones fijas ligadas al edificio):** Incluido en el presupuesto de ejecución de la obra (climatización, gases medicinales, cuadros eléctricos, lámparas y columnas si van en obra, tubos neumáticos).
   - **Grupo II (Mobiliario clínico y general, equipamiento electromédico estándar y de diagnóstico):** Camas, mesas quirúrgicas, monitores, respiradores, ecógrafos, autoclaves, equipamiento de laboratorio.
   - **Grupo III (Alta Tecnología Sanitaria / Grandes Equipos pesados):** Aceleradores lineales, Protonterapia, PET-TC, PET-RM, SPECT-TC, Resonancias Magnéticas, TC, Salas de Angiografía/Hemodinámica, Robots Quirúrgicos.
2. **Metodología de Elaboración del Plan de Necesidades y de Inversión (Tema 61):**
   - **Priorización multicriterio:** **1) Seguridad del paciente y cumplimiento normativo** (`RD 601/2019`, alertas AEMPS), **2) Obsolescencia tecnológica y fin de soporte técnico/repuestos (*End-of-Life* / criterios FENIN-COCIR)**, **3) Ratio coste de mantenimiento correctivo anual vs. valor de reposición** (si el gasto en averías supera el $15\text{–}20\%$ del valor de compra de un equipo nuevo), **4) Demanda asistencial / listas de espera** y **5) Retorno clínico e innovación tecnológica (Evaluación de Tecnologías Sanitarias — ETS / Avalia-t en Galicia)**.
   - **Análisis del Coste Total de Propiedad (*Total Cost of Ownership* — TCO / Ciclo de Vida):** No evalúa solo el precio de compra inicial (**CAPEX**), sino la suma de: $\text{CAPEX (Adquisición + Obras de preinstalación)} + \text{OPEX durante los 8–10 años de vida útil (Mantenimiento integral, fungibles cautivos, consumo energético/helio, licencias de software y desinstalación/baja)}$.
3. **Tema 68: Integración de Equipos Biomédicos en Instalaciones e Infraestructuras (*Guías de Preinstalación / Site Planning*):**
   Antes de recibir un equipo pesado (RM, TC, LINAC, Sala de Hemodinámica, Autoclave o Planta de Diálisis), el Ingeniero Biomédico debe coordinar con Ingeniería y Obras la **Guía de Preinstalación del fabricante (*Site Planning Guide*)** verificando **7 aspectos críticos**:
   1. **Cargas estructurales y Ruta de Acceso (*Rigging*):** Peso estático y dinámico del equipo (un imán de RM de $3\text{ T}$ pesa **$5\text{ a }8\text{ toneladas}$** y un gantry de TC $\approx 2\text{ toneladas}$ $\rightarrow$ cálculo de forjado y bancada antivibratoria), dimensiones de pasillos, resistencia del suelo al paso de tanquetas y **abertura o escotilla en fachada/cubierta** para introducir el imán con grúa.
   2. **Acometida Eléctrica y Calidad de Red:** Potencia aparente de pico ($\text{kVA}$, ej. $100\text{–}150\text{ kVA}$ en TC/Angiógrafo), **impedancia máxima de línea ($Z_{\text{red}}$ en $\text{m}\Omega$)** para evitar caídas de tensión durante el disparo de rayos X, protección diferencial superinmunizada Tipo B, transformador de aislamiento (`ITC-BT-38`) y SAI.
   3. **Climatización y Refrigeración por Agua Helada (*Chiller*):** Disipación térmica en sala técnica y sala de exploración ($\text{kW}$ térmicos) + circuito primario/secundario de **agua enfriada (*chiller* redundante)** para enfriar el compresor de helio de la RM, el intercambiador del tubo de TC o el klystron del acelerador lineal.
   4. **Blindajes Especiales:** Plomo o sulfato de bario en muros/puertas/visores para salas de RX y TC (`RD 1085/2009`); hormigón baritado y puerta con polietileno borado en búnker de acelerador; **Jaula de Faraday (RF) + Blindaje Magnético (acero al silicio) + Tubo de evacuación de Quench al exterior** en Resonancia Magnética.
   5. **Gases Medicinales y Vacío (`ISO 7396-1`):** Tomas de $\text{O}_2$, Aire medicinal, $\text{N}_2\text{O}$, Vacío, Aire motor y AGSS (en RM las cajas de tomas dentro de Zona IV deben ser **100% no ferromagnéticas**).
   6. **Fontanería, Agua Tratada y Desagües Termorresistentes:** Acometida de agua osmotizada y desagües resistentes a altas temperaturas ($> 90\text{ }^\circ\text{C}$ con enfriador de efluentes) en autoclaves y lavadoras de esterilización, o anillo de agua ultrapura en hemodiálisis.
   7. **Comunicaciones y Red de Datos:** Tomas de red Ethernet Gigabit/10GbE redundantes en VLAN médica segmentada, direccionamiento IP fijo y configuración de nodos `DICOM` (`AE Title`, puerto, `MWL`, `PACS`) y `HL7`.

---
