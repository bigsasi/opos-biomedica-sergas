# Esp. Tema 30 — Caracterización y funcionamiento del equipamiento de diálisis. Tratamiento de agua asociado a la hemodiálisis.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 2: Subir Nota (Relación 1:1) (Complementario)  
> **Bloque de Estudio Completo:** [`Bloque_06_Equipamiento_Dialisis_Laboratorio_Esterilizacion_Rehabilitacion_Farmacia.md`](../02_apuntes_nucleo_diamante/Bloque_06_Equipamiento_Dialisis_Laboratorio_Esterilizacion_Rehabilitacion_Farmacia.md)

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

### 1. Tema 30: Equipamiento de Diálisis y Planta de Tratamiento de Agua para Hemodiálisis (`UNE-EN 60601-2-16` e `ISO 23500`)

### 1.1. Principios Físicos del Transporte a través de la Membrana Semipermeable del Dializador
En hemodiálisis, la sangre del paciente y el líquido de diálisis (*dializado*) circulan en **sentidos opuestos (contracorriente)** a ambos lados de los miles de capilares semipermeables del **dializador (filtro capilar de polisulfona, polietersulfona o poliamida)**:
1. **Difusión (Conducción):** Paso de solutos de **bajo peso molecular (urea, creatinina, ácido úrico, potasio $\text{K}^+$)** desde donde están más concentrados (sangre) hacia donde están menos concentrados (dializado) por **gradiente de concentración** (Ley de Fick).
2. **Convección (Ultrafiltración — UF):** Paso de **agua plasmática arrastrando solutos de mediano peso molecular ($\beta_2$-microglobulina)** a través de la membrana por **gradiente de Presión Transmembrana ($\text{PTM}$)**:
   - **Hemodiálisis convencional (HD):** Predomina la **difusión** + ultrafiltración solo del exceso de peso líquido del paciente ($1\text{–}4\text{ L/sesión}$).
   - **Hemofiltración (HF):** Exclusivamente **convección** (sin líquido de diálisis; se ultrafiltran grandes volúmenes de plasma que se reponen con líquido de sustitución estéril).
   - **Hemodiafiltración en línea (*On-Line HDF* — Estándar de alta eficacia en los hospitales del SERGAS):** Combina simultáneamente **difusión + alta convección ($> 20\text{–}23\text{ L/sesión}$)** produciendo el propio monitor el líquido de sustitución infusible apirógeno *in situ* mediante doble/triple etapa de **filtros de líquido ultrapuro (endotoxinas $< 0,03\text{ UE/ml}$)**.

### 1.2. Circuito Extracorpóreo de Sangre y Circuito Hidráulico del Monitor de Hemodiálisis
1. **Circuito Sanguíneo Extracorpóreo (Parte Aplicable Tipo CF — `UNE-EN 60601-2-16`):**
   - Línea arterial (desde la fístula arteriovenosa o catéter venoso central) $\rightarrow$ **Monitor de presión arterial pre-bomba** (negativa: $-100\text{ a }-250\text{ mmHg}$) $\rightarrow$ **Bomba peristáltica de rodillos** (flujo sanguíneo $Q_b = 250\text{ a }450\text{ ml/min}$) $\rightarrow$ **Bomba de jeringa de Heparina** $\rightarrow$ **Dializador** $\rightarrow$ **Cámara atrapaburbujas venosa con monitor de presión venosa de retorno** (positiva: $+50\text{ a }+200\text{ mmHg}$) $\rightarrow$ **Detector Ultrasónico de Aire y Espuma + Pinza (*Clamp*) Venosa Electromagnética de seguridad** (si detecta una microburbuja de aire en la línea venosa, **para instantáneamente la bomba de sangre y cierra el *clamp* venoso** para evitar una embolia gaseosa mortal).
2. **Circuito Hidráulico de Líquido de Diálisis ($Q_d = 500\text{ a }800\text{ ml/min}$):**
   - Toma **agua tratada ultrapura** $\rightarrow$ desgasificador (vacío) y calentador ($36\text{–}37\text{ }^\circ\text{C}$ con termostato de seguridad que corta a $> 41\text{ }^\circ\text{C}$ porque **a $\ge 42\text{ }^\circ\text{C}$ se produce hemólisis térmica masiva**) $\rightarrow$ **Bombas dosificadoras volumétricas de Concentrado Ácido y de Bicarbonato ($\text{NaHCO}_3$)** en proporción $1:34\text{ o }1:44$ controlada en lazo cerrado por **Células de Conductividad eléctrica (rango normal del dializado: $13,5\text{ a }14,5\text{ mS/cm}$, equivalente a $\text{Na}^+ \approx 138\text{–}140\text{ mEq/L}$)** $\rightarrow$ **Cámara de Balance Volumétrico / Coriómetro de Ultrafiltración** $\rightarrow$ Dializador $\rightarrow$ **Detector Óptico de Fuga de Sangre (*Blood Leak Detector*)** en el efluente (fotodiodo bicolor que detecta rotura de capilares si pasa hemoglobina al dializado $> 0,35\text{ ml/min}$).

### 1.3. Planta de Tratamiento de Agua para Hemodiálisis (¡Caso práctico clásico de Ingeniero Técnico / Biomédico!)
Un paciente en hemodiálisis está expuesto a **$120\text{–}180\text{ litros de agua por sesión}$** ($> 20.000\text{ litros/año}$) directamente a través de una membrana semipermeable (frente a los $14\text{ L/semana}$ que bebe una persona sana por vía digestiva). Por ello, el agua de red potable debe transformarse en **Agua Purificada / Ultrapura para Hemodiálisis (`UNE-EN ISO 23500` / Guía SEN)** siguiendo exactamente este **tren de pretratamiento y tratamiento en serie**:

```
[Agua Red] -> 1. Cloración/Depósito -> 2. Filtro Multicapa (Arena/Antracita: turbidez >10 um)
           -> 3. Descalcificador Doble en Alternancia (Resinas de intercambio catiónico Na+: elimina Ca2+ y Mg2+)
           -> 4. Doble Filtro de Carbón Activo Granular en Serie (Decloración: elimina Cloro libre y Cloraminas)
           -> 5. Microfiltración de Guarda (5 um / 1 um: protege las membranas)
           -> 6. DOBLE ETAPA DE ÓSMOSIS INVERSA EN SERIE (Membranas de Poliamida TFC a 10-18 bar)
           -> 7. Anillo de Distribución en PEX-a o Acero Inoxidable 316L (sin fondos de saco, v > 1 m/s, UV y Termodesinfección a >85 ºC)
```

- **Tres preguntas fijas de examen sobre la Planta de Agua de Diálisis:**
  1. **¿Qué hace el Carbón Activo y por qué van dos columnas en serie?** Elimina por adsorción/reducción catalítica el **cloro libre y las cloraminas** (tiempo de contacto en lecho vacío $\text{EBCT} \ge 10\text{ min}$: $5\text{ min} + 5\text{ min}$). Es el punto más crítico porque **el cloro destruye irreversiblemente las membranas de poliamida de la ósmosis inversa** y, si pasa al paciente, provoca **anemia hemolítica aguda (metahemoglobinemia y hemólisis)** (límite máximo de cloro total: **$< 0,1\text{ mg/L}$**).
  2. **¿Qué retiene la Ósmosis Inversa (OI)?** Rechaza **$> 98\text{–}99\%$ de los iones divalentes y monovalentes** (aluminio, calcio, magnesio, flúor, nitratos, sulfatos) y el **$> 99,9\%$ de bacterias, virus y endotoxinas** (peso molecular $> 150\text{–}200\text{ Da}$).
  3. **Criterios de calidad del Agua Purificada vs. Agua Ultrapura (`ISO 23500` / Guía SEN):**
     - **Conductividad a la salida de la doble ósmosis:** Típicamente **$< 5\text{–}10\text{ }\mu\text{S/cm}$**.
     - **Agua Purificada estándar:** Bacterias **$< 100\text{ UFC/ml}$** y Endotoxinas **$< 0,25\text{ UE/ml}$**.
     - **Agua Ultrapura (obligatoria para HDF en línea y alto flujo):** Bacterias **$< 0,1\text{ UFC/ml}$** y Endotoxinas **$< 0,03\text{ UE/ml}$**.
     - **Diseño del anillo de distribución hasta los monitores:** Tubería de **acero inoxidable farmacéutico AISI 316L orbital o Polietileno Reticulado (PEX-a) / PVDF**, en **lazo cerrado continuo sin tramos muertos ni fondos de saco**, con retorno continuo a velocidad turbulenta **$> 1\text{ m/s}$** y **desinfección térmica periódica automatizada a $> 80\text{–}85\text{ }^\circ\text{C}$** para impedir la formación de **biopelícula (*biofilm*)**.

---
