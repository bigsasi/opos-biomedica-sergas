# Esp. Tema 33 — Diseño de elementos y dispositivos biomédicos. Conceptos generales. Fases y legislación como parte de la I+D+i biomédica.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 3: Ficha Específica Biomédica (Complementario)  
> **Bloque de Estudio Completo:** [`Bloque_01_Productos_Sanitarios_MDR_AEMPS_Implantables.md`](../02_apuntes_nucleo_diamante/Bloque_01_Productos_Sanitarios_MDR_AEMPS_Implantables.md)

## 🎯 Cruce con Otras Oposiciones del SERGAS

- **Categorías con solapamiento:** **Sin equivalencia directa en las 5 categorías analizadas**
- **Grado de solapamiento:** **Nulo / Muy Bajo (10%)**: Diseño de dispositivos e I+D+i biomédica es exclusivo de esta categoría.
- **Epígrafes equivalentes:**
  • N/A (Contenido específico de Ingeniería Biomédica)

---

## 📖 Desarrollo Técnico y Normativo del Tema

### 8. Tema 33: Diseño de Dispositivos Biomédicos e I+D+i Biomédica

El ciclo de vida de diseño y desarrollo de un dispositivo biomédico desde la idea hasta el hospital se rige por **4 normas internacionales armonizadas con el MDR 2017/745** (muy preguntadas en test):

| Norma | Título / Objeto | Conceptos clave en el diseño biomédico |
| :--- | :--- | :--- |
| **`UNE-EN ISO 13485`** | **Sistemas de gestión de la calidad para productos sanitarios** | Marco obligatorio de diseño y fabricación. Exige mantener el **Archivo de Diseño y Desarrollo (*Design History File* — DHF)** y el **Registro Maestro del Dispositivo (*Device Master Record* — DMR)**. |
| **`UNE-EN ISO 14971`** | **Aplicación de la gestión de riesgos a los productos sanitarios** | Análisis de peligros a lo largo de todo el ciclo de vida (**AMFE / FMEA**, árbol de fallos **FTA**). Matriz de **Probabilidad $\times$ Severidad**, medidas de control de riesgos (1º diseño inherentemente seguro, 2º medidas de protección/alarmas en el equipo, 3º información de seguridad/formación) y evaluación de la **relación beneficio-riesgo global residual**. |
| **`UNE-EN 62366-1` (IEC 62366)** | **Ingeniería de la aptitud de uso (Usabilidad) aplicada a los productos sanitarios** | Evaluación formativa y sumativa de la interfaz de usuario para prevenir **errores de uso** inducidos por un mal diseño ergonómico o cognitivo. |
| **`UNE-EN 62304` (IEC 62304)** | **Procesos del ciclo de vida del software de dispositivos médicos** | Clasifica la seguridad del software biomédico en **3 clases**:<br>• **Clase A:** No puede producir lesiones ni daños a la salud.<br>• **Clase B:** Puede producir lesiones **no graves**.<br>• **Clase C:** Puede producir la **muerte o lesiones graves**. |
| **`Serie UNE-EN ISO 10993`** | **Evaluación biológica de productos sanitarios (Biocompatibilidad)** | Ensayos preclínicos de citotoxicidad (ISO 10993-5), sensibilización, irritación, toxicidad sistémica, genotoxicidad y hemocompatibilidad según la naturaleza y duración del contacto con el tejido. |
| **`UNE-EN ISO 14155`** | **Investigación clínica de productos sanitarios en humanos (Buenas Prácticas Clínicas — BPC)** | Equivalente a las BPC de ensayos clínicos de medicamentos pero específico para investigaciones clínicas de dispositivos biomédicos (Capítulo VI, Arts. 61 a 82 del MDR 2017/745). |

### Fases del Diseño y Desarrollo Biomédico (Modelo en Cascada / «V» de la FDA e ISO 13485)
1. **Fase 1 — Identificación de la necesidad clínica y Planificación del diseño:** Especificación de necesidades del usuario (*User Needs*).
2. **Fase 2 — Entradas de diseño (*Design Inputs*):** Traducción de las necesidades clínicas en requisitos técnicos cuantificables, normativos y de seguridad (`ISO 14971`, `IEC 60601-1`).
3. **Fase 3 — Salidas de diseño (*Design Outputs*) y Prototipado:** Planos CAD, esquemas electrónicos, código fuente (`IEC 62304`), selección de biomateriales (`ISO 10993`).
4. **Fase 4 — Verificación del diseño (*Design Verification*):** Responde a la pregunta **«¿Hemos diseñado el producto correctamente?»** (ensayos de laboratorio, seguridad eléctrica, compatibilidad electromagnética `IEC 60601-1-2`, ensayos mecánicos y preclínicos respecto a los *Design Inputs*).
5. **Fase 5 — Validación del diseño (*Design Validation*) y Evaluación/Investigación Clínica:** Responde a la pregunta **«¿Hemos diseñado el producto correcto para el paciente y usuario?»** (ensayos de usabilidad `IEC 62366`, Evaluación Clínica según Anexo XIV del MDR e Investigaciones Clínicas `ISO 14155` con autorización de CEIm y AEMPS).
6. **Fase 6 — Transferencia del diseño (*Design Transfer*), Evaluación de la Conformidad (Marcado CE con Organismo Notificado) y Seguimiento Poscomercialización (PMS / PMCF).**
