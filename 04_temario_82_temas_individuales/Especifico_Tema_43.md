# Esp. Tema 43 — Gestión del dato sanitario desde la perspectiva funcional y organizativa: conceptos generales de captura, calidad, interoperabilidad y gobierno del dato en el ámbito sanitario.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 1: Núcleo Diamante (💎 Núcleo Diamante)  
> **Bloque de Estudio Completo:** [`Bloque_07_Salud_Digital_HIS_RIS_PACS_Interoperabilidad_HCE_CMBD_BI_IoMT.md`](../02_apuntes_nucleo_diamante/Bloque_07_Salud_Digital_HIS_RIS_PACS_Interoperabilidad_HCE_CMBD_BI_IoMT.md)

## 🎯 Cruce con Otras Oposiciones del SERGAS

- **Categorías con solapamiento:** **Grupo Técnico / Gestión TIC**
- **Grado de solapamiento:** **Alto (75%)**: Cubre gobernanza TIC, gestión de sistemas de información sanitaria e interoperabilidad.
- **Epígrafes equivalentes:**
  • Superior (A1): Tema 1. Gobernanza de las TIC. Planificación, dirección y control de las TIC. CoBIT (Control Objectives for Information and Related Technology), objetivos de control y métricas. Propuestas de proyectos (casos de negocio o business case), análisis de costes/beneficios, análisis de riesgos, factores críticos de éxito. Val IT. Análisis de negocio (BABOK)., Tema 23. Sistemas de información para la salud pública. Sistemas de Información y sistemas de gestión de pacientes en atención primaria y hospitales. Sistema poblacional y tarjeta sanitaria. Sistemas de gestión de recursos humanos. Sistemas de gestión económica y suministros. y Tema 25. Interoperabilidad en el entorno sanitario. Estándares tecnológicos en el ámbito sanitario: DICOM, HL7, CDA, IHE, CIEN TC/251, AEN/CTN 139, IEEE Continua alliance. Implementación de mensajería HL7 sobre buses de integración.
  • Gestión (A2): Tema 15. Sistemas de información para la salud pública. Sistemas de información y sistemas de gestión de pacientes en atención primaria y hospitales. Sistema poblacional y tarjeta sanitaria. Sistemas de gestión de recursos humanos. Sistemas de gestión económica y suministros. y Tema 17. Interoperabilidad en el entorno sanitario. Estándares tecnológicos en el ámbito sanitario: DICOM, HL7, CDA, IHE, CIEN, TC/251, AEN/CTN 139, IEEE Continua alliance. Implementación de mensajería HL7 sobre buses de integración.

---

## 📖 Desarrollo Técnico y Normativo del Tema

### 1. Mapa de Sistemas de Información Corporativos del SERGAS (¡Imprescindible para el Examen!)

En los exámenes del SERGAS (tanto teóricos como supuestos prácticos), preguntan constantemente los **nombres propios de los sistemas corporativos gallegos** y cómo se integran con el equipamiento biomédico:

| Acrónimo SERGAS | Nombre / Función en el Servicio Gallego de Salud | Temas donde entra |
| :--- | :--- | :--- |
| **`IANUS` / `IANUS 5`** | **Historia Clínica Electrónica única** del SERGAS (integra Atención Primaria + Atención Hospitalaria + Sociosanitaria; regulada por el **Decreto 29/2009, de 5 de febrero**). | Temas 38, 40, 67 + Común T7 |
| **`É-Saúde`** | Plataforma digital de salud para la ciudadanía/pacientes (acceso a historia clínica, informes, citas, carpeta personal). | Temas 40, 47, 67 |
| **`TELEA`** | **Plataforma de Teleasistencia y Telemonitorización Domiciliaria (IoMT)** del SERGAS integrada en `IANUS` para pacientes crónicos (insuficiencia cardíaca, EPOC, diabetes, HTA, post-infarto). | **Tema 47** |
| **`PACS Corporativo` / `Anello Radiolóxico Galego`** | Sistema centralizado de archivo y comunicación de imagen médica digital del SERGAS (integra imagen DICOM y objetos no-DICOM mediante **VNA — *Vendor Neutral Archive***). | **Tema 38 y 39** |
| **`SILICON`** | Sistema de información corporativo de **Farmacia Hospitalaria** (prescripción electrónica hospitalaria, validación farmacéutica y conexión con carruseles y armarios `Pyxis`). | **Tema 57** |
| **`SIHGA` / `XIDE`** | Sistemas de gestión de pacientes (**HIS**: admisión, urgencias, hospitalización, bloque quirúrgico, citación de consultas externas) y **`XIDE`** (*Xestión Integrada da Demanda en Equipo* en Atención Primaria). | **Temas 38 y 67** |
| **`LOGAS`** | Sistema corporativo de **Gestión Logística, Compras, Almacenes y Cadena de Suministros** del SERGAS (basado en plataforma ERP, plataformas logísticas como la de Negreira y carruseles/kanban con RFID en planta). | **Tema 70** |
| **`HEXE`** | Herramienta corporativa de **Explotación de Información y Cuadros de Mando (Business Intelligence)** del SERGAS. | **Temas 43 y 44** |
| **`XMAO` (GMAO Corporativo)** | Sistema corporativo de **Gestión de Mantenimiento Asistido por Ordenador** (inventario de base instalada biomédica e industrial, órdenes de trabajo preventivas/correctivas). | **Temas 71, 72 y 73** |

---

---

### 6. Tema 43 y Tema 44: Gobierno del Dato Sanitario, Analítica de Datos (BI, Datawarehouse, Big Data) y Uso Secundario en Investigación

### 6.1. Tema 43: Gestión y Gobierno del Dato Sanitario (*Data Governance* — Marco `DAMA-DMBOK` e `ISO/IEC 25012`)
1. **Ciclo de vida del dato sanitario:** Captura en origen (dato estructurado vs. texto libre no estructurado) $\rightarrow$ Validación e Integración $\rightarrow$ Almacenamiento $\rightarrow$ Explotación primaria (clínica) y secundaria (gestión/investigación) $\rightarrow$ Archivo/Conservación legal.
2. **Dimensiones de Calidad del Dato Sanitario (`ISO/IEC 25012`):**
   - **Exactitud (*Accuracy*):** El dato refleja el valor real clínico.
   - **Completitud (*Completeness*):** Ausencia de valores nulos o campos obligatorios vacíos.
   - **Consistencia / Coherencia (*Consistency*):** Sin contradicciones entre distintos sistemas (ej. sexo/edad coherente con el diagnóstico).
   - **Actualidad / Oportunidad (*Currentness / Timeliness*):** Registrado en el momento asistencial real.
   - **Trazabilidad y Credibilidad.**
3. **Gobierno del Dato (*Data Governance*):** Define roles (**Comité de Gobierno del Dato**, ***Data Owner* [Propietario del dato]**, ***Data Steward* [Custodio/Administrador de calidad del dato]** y ***Data Custodian* [TIC]**), el **Catálogo de Metadatos y Diccionario de Datos Maestro (MDM — *Master Data Management*)** y el linaje del dato (*Data Lineage*).

### 6.2. Tema 44: Analítica de Datos Sanitarios, Herramientas de Explotación (BI) y Uso Secundario en Investigación
1. **Arquitectura de Inteligencia de Negocio (*Business Intelligence* — BI en el SERGAS: `HEXE`):**
   - **Sistemas Transaccionales (`OLTP` — *On-Line Transaction Processing*):** Son los sistemas asistenciales del día a día (`IANUS`, `SIHGA`, `SILICON`, `LOGAS`), optimizados para inserciones/lecturas rápidas por paciente individual.
   - **Procesos `ETL` (*Extract, Transform, Load* — Extracción, Transformación/Limpieza y Carga):** Extraen por la noche o en casi tiempo real los datos de los sistemas `OLTP`, los limpian, normalizan y cargan en el almacén analítico.
   - **Almacén de Datos Corporativo (`Datawarehouse` — DWH) y `Data Marts` departamentales:** Repositorio histórico, integrado, temático y **no volátil** diseñado para consultas masivas (**`OLAP` — *On-Line Analytical Processing***) modelado en **Esquema en Estrella o Copo de Nieve** (una **Tabla de Hechos** central con métricas numéricas [estancias, dosis, costes, tiempos de espera] rodeada de **Tablas de Dimensión** [Tiempo, Centro/Servicio, Paciente/GMA, Diagnóstico CIE-10, Equipo Biomédico]) con operaciones OLAP de ***Drill-down* (desglosar detalle), *Roll-up* (agregar), *Slice & Dice* y *Pivot***.
   - **Arquitecturas modernas de Big Data y *Data Lake / Data Lakehouse*:** Para explotar datos masivos **no estructurados** (texto libre de notas clínicas mediante **Procesamiento del Lenguaje Natural — PLN/NLP**, señales continuas de monitores UCI en streaming e **imágenes DICOM para Radiómica e IA**).
2. **Los 4 Niveles de Analítica de Datos Sanitarios:**
   1. **Analítica Descriptiva (*¿Qué ha pasado?*):** Cuadros de mando (*Dashboards*), indicadores clave (**KPIs**), listas de espera, actividad quirúrgica.
   2. **Analítica Diagnóstica (*¿Por qué ha pasado?*):** Análisis de causa raíz, correlaciones y minería de procesos (*Process Mining*).
   3. **Analítica Predictiva (*¿Qué va a pasar?*):** Modelos de *Machine Learning* (predicción de reingreso hospitalario a 30 días, predicción de sepsis en UCI, **mantenimiento predictivo de tubos de TC o helio en RM**).
   4. **Analítica Prescriptiva (*¿Qué decisión debemos tomar?*):** Sistemas de Apoyo a la Decisión Clínica (**CDSS**) y optimización automática de agendas/quirófanos.
3. **Uso Secundario de Datos de Salud para Investigación e Innovación (Marco Legal — ¡Pregunta de examen!):**
   - **Disposición Adicional 17ª de la `LO 3/2018 (LOPDGDD)` y Reglamento Europeo del Espacio Europeo de Datos de Salud (`EHDS`):**
     - Distingue entre **Datos Anonimizados** (irreversibles; fuera del RGPD) y **Datos Seudonimizados** (reversibles solo mediante una clave custodiada separadamente por un tercero de confianza; **siguen siendo datos personales sujetos al RGPD**).
     - Para el uso secundario de datos clínicos seudonimizados en investigación biomédica se exige: **1) Dictamen favorable del Comité de Ética de la Investigación (CEI/CEIm)**, **2)Separación técnica y funcional estricta** entre el equipo investigador y quien posee la tabla de reidentificación, **3) Compromiso expreso de no reidentificar** a los pacientes y **4) Evaluación de Impacto en Protección de Datos (`EIPD`)**.

---
