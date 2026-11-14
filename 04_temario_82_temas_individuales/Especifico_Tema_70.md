# Tema 70 — Logística de productos sanitarios. Cadena de suministros.

> - **Parte del Programa:** Parte Específica (74 Temas · Orden DOG #70 de 74) — Ejercicio 1.º Eliminatorio
> - **Bloque Temático SERGAS:** Bloque 07 — Salud Digital, Sistemas Corporativos, Interoperabilidad, HCE, Analítica, IoMT, Citación y Logística (`Fase 2: Subir Nota · Relación 1:1`)
> - **Marco Normativo y Técnico Nuclear:** **Reglamento (UE) 2017/745 (`MDR`)** (Arts. 13, 14, 18, 25, 27 y Anexo VI: Trazabilidad en la cadena de suministro, obligaciones de importadores/distribuidores, sistema **`UDI`** y registro electrónico de implantables Clase III) y **Real Decreto 192/2023** (Art. 26: Registro de comercialización y trazabilidad); **Real Decreto 838/2015 y Orden EFP/1216/2019 (Módulo Profesional 1594**: *Gestión del montaje y mantenimiento de sistemas de electromedicina*, bloque `c)` *Elaboración del programa de aprovisionamiento y catálogo de repuestos: gestión del aprovisionamiento, ciclo de compras, organización de almacenes, stock de repuestos, duplicidad de equipos y métodos FIFO, LIFO y PMP*); Estándares internacionales **`GS1`** (`GTIN`, `GLN`, `SSCC`, `GS1-128`, **`GS1 DataMatrix` [`ISO/IEC 16022`]**) e **`ISO/IEC 18000-63`** (`RFID UHF EPC Gen2`); Norma **`UNE-EN ISO 13485`** (apartados 7.5.8 Identificación, 7.5.9 Trazabilidad y 7.5.11 Preservación del producto).
> - **Sistemas y Entorno SERGAS:** **`LOGAS`** (Sistema corporativo ERP de Gestión Logística, Compras, Almacenes y Cadena de Suministros del SERGAS), **Plataforma Logística Sanitaria de Galicia en Negreira (A Coruña)**, almacenes periféricos de planta por **Doble Cajetín Kanban con `RFID UHF`**, armarios inteligentes de alto coste en Quirófanos/Hemodinámica, `SILICON` y gestión de almacén técnico de repuestos biomédicos en **`XMAO`**.

---

## 🎯 0. Alcance Oficial del Epígrafe y Cruce con Otras Oposiciones del SERGAS

El **Tema 70** del programa oficial de Ingeniero/a Biomédico/a (Subgrupo A1, DOG núm. 67, de 13 de abril de 2026) aborda de forma monográfica la **ingeniería logística hospitalaria, la gestión matemática de inventarios y almacenes, la automatización de la cadena de suministros y la trazabilidad regulatoria** tanto de los productos sanitarios asistenciales (fungibles, prótesis e implantes activos) como del almacén técnico de repuestos y accesorios de electromedicina (**Módulo Profesional 1594 de la `Orden EFP/1216/2019`**):
1. **Arquitectura de la Cadena de Suministros Sanitaria (*Healthcare Supply Chain*) y ciclo de aprovisionamiento:** eslabones desde el fabricante hasta el punto de cuidado (*Point-of-Care*), tipología de suministros biomédicos, compras centralizadas, intercambio electrónico de datos (`EDI` / `EDIFACT`) y gestión de **depósitos/consigna quirúrgica**.
2. **Modelos matemáticos de gestión de stocks y valoración de almacenes:** derivación y aplicación de la **Fórmula de Wilson del Lote Económico de Pedido (`EOQ`)**, cálculo del **Stock de Seguridad (`SS`)**, **Punto de Pedido (`PP`)**, **Índice de Rotación (`IR`)** y **Cobertura**, matriz combinada **`ABC` (Ley de Pareto) $\times$ `VEN` (*Vital, Esencial, No esencial*)**, métodos contables **`PMP` y `FIFO`** (frente a `LIFO`) y criterio físico obligatorio **`FEFO` (*First Expired, First Out*)**.
3. **Tecnologías de automatización logística intrahospitalaria:** almacenes de planta por *pacto de consumo*, sistema **Kanban de Doble Cajetín con etiquetas pasivas `RFID UHF` (`ISO/IEC 18000-63`)**, carruseles verticales/horizontales (*Goods-to-Person*), **armarios inteligentes `RFID` de alto coste** en quirófano y hemodinámica, tubo neumático y robots móviles autónomos (**`AGV` / `AMR`**).
4. **Trazabilidad regulatoria (`MDR 2017/745`, `UDI`, `GS1 DataMatrix`), condiciones de conservación (`ISO 13485` y `ESD`) y arquitectura logística del SERGAS (`LOGAS` y Plataforma Central de Negreira)**.

### Cruce Verificado con Otras Oposiciones del SERGAS (`cruce_temarios_sergas.md`)

| Categoría SERGAS con Solapamiento | Grado de Solapamiento | Epígrafes Equivalentes y Orientación de Tribunal |
| :--- | :--- | :--- |
| **Grupo Técnico / Gestión TIC (Subgrupos A1, A2 y C1)**<br><br>**Ingeniero/a Técnico/a (Subgrupo A2)** | **Alto (75%) con TIC**: Cubre sistemas de gestión económica y de suministros/logística (LOGAS/ERP) en el SERGAS.<br>**Medio (55%) con Ing. Técnico**: Cubre gestión y control de almacenes y suministros técnicos. | • **TIC Superior (A1):** Tema 23. Sistemas de información para la salud pública. Sistemas de Información y sistemas de gestión de pacientes en atención primaria y hospitales. Sistema poblacional y tarjeta sanitaria. Sistemas de gestión de recursos humanos. Sistemas de gestión económica y suministros. y Tema 17. Sistemas CRM (Customer Relationship Management) y ERP (Enterprise Resource Planning). La informatización de los procedimientos. BPM (Business Process Management). Sistemas de gestión documental.<br>• **TIC Gestión (A2):** Tema 15 y Tema 10.<br>• **TIC Especialista (C1):** Tema 10.<br>• **Ingeniero/a Técnico/a:** Tema 69. Talleres: oficios, organización y control. Almacén: gestión y control. |

---

## 📖 1. Arquitectura de la Cadena de Suministros Sanitaria (*Healthcare Supply Chain*) y Ciclo de Aprovisionamiento (`Módulo 1594`)

### 1.1. Eslabones de la Cadena de Suministros de Productos Sanitarios: Del Fabricante a la Cama del Paciente

La **Cadena de Suministros Sanitaria (*Healthcare Supply Chain*)** comprende la red integrada de agentes económicos, infraestructuras logísticas, flujos físicos de materiales, flujos de información digital y flujos financieros que garantizan la disponibilidad del producto sanitario o repuesto correcto, en el lugar preciso, en el momento oportuno, en óptimas condiciones de conservación/esterilidad y al menor coste total posible (*Regla de los 7 Correctos de la Logística*).

Se estructura en **dos grandes tramos logísticos**:
1. **Cadena de Suministro Externa (*Upstream / Macrologística*):**
   - **Fabricante Legal (`Manufacturer`) y Representante Autorizado en la UE (`EC REP`, Arts. 10 y 11 `MDR 2017/745`):** Diseña, fabrica, asigna el identificador único **`UDI`** y libera el lote.
   - **Importador y Distribuidor (Arts. 13 y 14 `MDR 2017/745`):** Verifican el marcado CE, la declaración UE de conformidad, el etiquetado en español y garantizan que durante el transporte y almacenamiento bajo su responsabilidad se cumplan las condiciones ambientales fijadas por el fabricante.
   - **Plataforma Logística Centralizada del Servicio de Salud (Almacén Central Reguladores — en el SERGAS, la Plataforma de Negreira):** Concentra la recepción de proveedores, el control de calidad de entrada, el almacenamiento masivo robotizado y la preparación de expediciones consolidadas (*cross-docking* y *picking*) hacia los hospitales y centros de atención primaria.
2. **Cadena de Suministro Interna o Intrahospitalaria (*Downstream / Micrologística Hospitalaria*):**
   - **Muelle de Recepción y Almacén General del Hospital:** Recepción administrativa y técnica de carros/palés procedentes de la plataforma central o de entregas directas de proveedor (material en tránsito o implantes urgentes).
   - **Almacenes Periféricos de Unidad Asistencial (*Point-of-Use* / Botiquines de Planta, UCI, Urgencias y Bloque Quirúrgico):** Puntos de almacenamiento intermedio situados en los propios servicios clínicos, abastecidos regularmente según su **pacto de consumo** o consumo real.
   - **Punto de Cuidado (*Point-of-Care*) e Imputación al Paciente:** Utilización o implantación del producto sobre el paciente, cerrando el ciclo con la lectura del código `UDI`/`GS1` para su registro en la Historia Clínica Electrónica (`IANUS 5`) y la imputación analítica de costes por episodio (`SIHGA`/`LOGAS`).

### 1.2. Tipología de Productos Sanitarios y Repuestos Biomédicos en la Gestión Logística Hospitalaria

A efectos de ingeniería logística y de aprovisionamiento, el catálogo de artículos de un área sanitaria (más de $25.000\text{–}40.000$ referencias activas) se divide en cuatro grandes familias con modelos de gestión diferenciados:
1. **Material Fungible Sanitario General y de Cuidados (Clase I / IIa `MDR`):**
   - Gasas, compresas, guantes quirúrgicos y de examen, jeringas, agujas, catéteres venosos periféricos, sondas vesicales, sistemas de suero, apósitos y material de protección. Se caracteriza por un **elevado volumen físico, alta rotación diaria, bajo coste unitario y carácter multi-proveedor (homologable)**. Se gestiona mediante compras centralizadas en Acuerdo Marco, stock en Plataforma Logística Central y reposición por **Doble Cajetín Kanban** en planta.
2. **Productos Sanitarios Implantables y Material Específico de Alto Coste (Clases IIb y III `MDR`):**
   - Marcapasos, desfibriladores automáticos implantables (`DAI`), electrodos intracavitarios, válvulas cardíacas transcatéter (`TAVI`), *stents* coronarios y periféricos, endoprótesis aórticas, prótesis articulares de cadera y rodilla, material de osteosíntesis vertebral, lentes intraoculares, suturas mecánicas/endograpadoras e instrumental reposicionable de **cirugía robótica (*EndoWrist*)**. Se caracteriza por un **altísimo coste unitario** (desde cientos hasta $> 18.000\text{ €}$ por unidad), amplia variedad de tallas/medidas anatómicas necesarias en el acto quirúrgico y **exigencia legal de trazabilidad unitaria paciente–lote/número de serie (Art. 27.9 `MDR`)**. Se gestiona mayoritariamente mediante **Depósito o Consigna Quirúrgica** y **Armarios Inteligentes `RFID`**.
3. **Reactivos de Diagnóstico *In Vitro* (`IVD` bajo `Reglamento (UE) 2017/746 IVDR`) y Fungibles Cautivos de Equipamiento Biomédico:**
   - Reactivos, calibradores y controles de cadenas robotizadas de laboratorio (`Core Lab`), microbiología y anatomía patológica, así como fungibles específicos cautivos de equipos electromédicos (sensores de $\text{SpO}_2$, circuitos respiratorios de anestesia/UCI, filtros hidrofóbicos, casetes de bombas de infusión, líneas y dializadores de hemodiálisis, jeringas de alta presión para inyectores de contraste de TC/RM). Muchos requieren **cadena de frío estricta ($2\text{–}8\text{ }^\circ\text{C}$ o $-20\text{ }^\circ\text{C}$)** y programación de entregas acoplada a la actividad asistencial.
4. **Repuestos, Accesorios, Transductores y Equipos de Reserva del Servicio de Electromedicina (`Módulo 1594 Orden EFP/1216/2019`):**
   - **Accesorios y consumibles técnicos de alta rotación:** cables de paciente de ECG, latiguillos y manguitos de PANI, celdas galvánicas de $\text{O}_2$, sensores de flujo expiratorio, baterías recargables de $\text{Li-ion}$ para monitores/desfibriladores/bombas y papel termosensible milimetrado.
   - **Repuestos críticos de mantenimiento correctivo y preventivo:** kits anuales de mantenimiento preventivo de respiradores y mesas de anestesia (membranas, juntas tóricas, válvulas espiratorias), placas electrónicas, fuentes de alimentación, sondas/transductores ecográficos, tubos de rayos X y detectores *Flat Panel*.

### 1.3. Ciclo de Compras, Intercambio Electrónico de Datos (`EDI`) y Régimen de Depósito/Consigna

Conforme al **Módulo Profesional 1594 (`Orden EFP/1216/2019`)**, el **Ciclo de Aprovisionamiento** encadena seis fases: 1) Detección de la necesidad y solicitud de compra, 2) Licitación y adjudicación conforme a la `Ley 9/2017 (LCSP)`, 3) Emisión del pedido en firme al adjudicatario, 4) Seguimiento y recepción física/administrativa del albarán, 5) Conformación de la factura contra albarán recepcionado (*Three-Way Matching*: Pedido $=$ Albarán $=$ Factura) y 6) Pago y contabilización analítica.

La comunicación transaccional entre el ERP logístico del servicio de salud (**`LOGAS`**) y los sistemas de los proveedores sanitarios se automatiza sin papel mediante el estándar internacional **`EDI` (*Electronic Data Interchange*, norma `UN/EDIFACT` / `GS1 EANCOM`)** a través de cuatro mensajes electrónicos fundamentales:
- **`ORDERS`:** Orden de pedido electrónico enviada automáticamente por `LOGAS` al proveedor cuando el stock alcanza el Punto de Pedido o cuando se consume un implante en depósito.
- **`DESADV` (*Despatch Advice*):** Aviso previo de expedición o albarán electrónico enviado por el proveedor antes de que llegue el camión, detallando los bultos (`SSCC`), códigos `GTIN`, lotes y fechas de caducidad de la mercancía en camino.
- **`RECADV` (*Receiving Advice*):** Confirmación electrónica de recepción emitida por la plataforma logística tras escanear y validar la mercancía en el muelle de descarga.
- **`INVOIC`:** Factura electrónica estructurada (integrada con **`FACe` / `SEFAGA`** en la Xunta de Galicia).

En el caso de las **prótesis traumatológicas, marcapasos, *stents* y válvulas**, dado que el cirujano necesita tener físicamente en el quirófano toda la gama de diámetros y longitudes (p. ej., 80 medidas de vástagos y cotilos de cadera) pero solo implantará una medida en el paciente, comprar y mantener en propiedad todas las tallas inmovilizaría millones de euros con alto riesgo de obsolescencia. Por ello se aplica el **Contrato de Suministro con Stock en Depósito (Consigna)**:
- El proveedor deposita la colección completa de medidas en el almacén quirúrgico o armario `RFID` del hospital; **la propiedad jurídica de la mercancía sigue siendo del proveedor** mientras permanece en el estante (no genera gasto presupuestario ni inmovilizado para el SERGAS).
- En el instante en que el implante se abre e implanta en el paciente (y se lee su código **`UDI`** en quirófano), se produce simultáneamente: **1)** la transmisión de propiedad y generación automática del pedido de compra + albarán de consumo (`ORDERS`/`RECADV`) para su facturación, y **2)** la orden de **reposición automática de otra unidad idéntica** para restituir el depósito quirúrgico en $< 24\text{–}48\text{ horas}$.

---

## ⚙️ 2. Modelos Matemáticos de Gestión de Stocks, Clasificación `ABC/VEN` y Valoración de Inventarios (`EOQ`, `PP`, `SS`, `FEFO`)

### 2.1. Modelo Matemático de Gestión de Inventarios: Fórmula de Wilson (`EOQ`), Stock de Seguridad (`SS`), Punto de Pedido (`PP`) y Rotación

En la gestión científica de almacenes sanitarios y de repuestos biomédicos, existen dos fuerzas económicas contrapuestas: si se realizan pedidos enormes muy espaciados, se minimiza el coste administrativo de pedir y el riesgo de rotura, pero se dispara el **coste de posesión/almacenamiento** (espacio climatizado, capital inmovilizado, seguro y riesgo de caducidad/obsolescencia); por el contrario, si se piden lotes minúsculos continuamente, el coste de almacenamiento baja pero se multiplica el **coste de emisión y transporte de pedidos**.

#### 1. Ecuación del Coste Total Anual de Inventario y Lote Económico de Pedido (`EOQ` — Modelo de Wilson)
Definimos las variables fundamentales del modelo determinista de Wilson:
- $D$: Demanda o consumo anual total del artículo (en unidades/año).
- $C$: Coste o precio de adquisición unitario del producto ($\text{€/unidad}$).
- $Q$: Tamaño del lote de cada pedido (en unidades por pedido, por lo que el número de pedidos al año es $N_{\text{pedidos}} = D / Q$ y el stock medio de ciclo es $Q / 2$).
- $S$ (o $K$): Coste fijo de emisión, tramitación, transporte y recepción de un pedido ($\text{€/pedido}$).
- $H = i \cdot C$: Coste anual de almacenamiento o posesión de una unidad durante un año ($\text{€ / [unidad}\cdot\text{año]}$), siendo $i$ la tasa anual de mantenimiento del stock (coste financiero + espacio + obsolescencia, típicamente $i \approx 15\text{–}25\%$).

El **Coste Total Anual de Gestión de Stock ($CT$)** viene dado por la suma del coste de adquisición, el coste anual de emisión de pedidos y el coste anual de posesión:
$$CT(Q) = \underbrace{D \cdot C}_{\text{Coste de compra}} + \underbrace{\frac{D}{Q} \cdot S}_{\text{Coste anual de emisión}} + \underbrace{\frac{Q}{2} \cdot H}_{\text{Coste anual de posesión (con } SS=0\text{)}}$$
Para hallar el **Lote Económico de Pedido óptimo ($Q^*$ o `EOQ` — *Economic Order Quantity*)** que minimiza el coste total, derivamos $CT(Q)$ respecto a $Q$ e igualamos a cero ($\frac{d\,CT}{dQ} = -\frac{D \cdot S}{Q^2} + \frac{H}{2} = 0$, punto en el que el coste anual de emisión iguala exactamente al coste anual de posesión):
$$\mathbf{Q^* = \text{EOQ} = \sqrt{\frac{2 \cdot D \cdot S}{H}} = \sqrt{\frac{2 \cdot D \cdot S}{i \cdot C}}}$$
A partir de $Q^*$ se obtienen directamente el **Número Óptimo de Pedidos al Año ($N^*$)** y el **Tiempo de Reaprovisionamiento entre Pedidos ($T^*$)**:
$$N^* = \frac{D}{Q^*} \qquad \text{y} \qquad T^*\text{ (días)} = \frac{365}{N^*} = \frac{365 \cdot Q^*}{D}$$

#### 2. Stock de Seguridad ($SS$) y Punto de Pedido ($PP$ — *Reorder Point*) bajo Incertidumbre Estocástica
En la práctica hospitalaria real, ni el consumo diario ($d$) ni el plazo de entrega del proveedor (*Lead Time* $L$, en días) son constantes, sino variables aleatorias con media $\bar{d}$, desviación típica del consumo diario $\sigma_d$, plazo medio de entrega $\bar{L}$ y desviación típica del plazo de entrega $\sigma_L$. Para proteger al hospital frente a una **rotura de stock (*Stock-out*)** durante el tiempo que tarda en llegar el pedido, se mantiene un colchón permanente denominado **Stock de Seguridad ($SS$)**:
- **Caso A (Plazo de entrega $L$ constante y demanda diaria variable normal $\mathcal{N}(\bar{d}, \sigma_d)$):**
  $$\mathbf{SS = Z_{1-\alpha} \cdot \sigma_d \cdot \sqrt{L}}$$
- **Caso B (Tanto la demanda diaria como el plazo de entrega son variables aleatorias independientes):**
  $$\mathbf{SS = Z_{1-\alpha} \cdot \sqrt{\bar{L} \cdot \sigma_d^2 + \bar{d}^2 \cdot \sigma_L^2}}$$
  donde **$Z_{1-\alpha}$ es el factor de seguridad (cuantil de la distribución normal estándar)** asociado al **Nivel de Servicio de Ciclo ($1 - \alpha$, probabilidad de NO sufrir rotura de stock)**:
  - Para Nivel de Servicio del **$90\%$** $\rightarrow Z = 1,28$.
  - Para Nivel de Servicio del **$95\%$** $\rightarrow Z = \mathbf{1,65}$ *(o $1,645$)*.
  - Para Nivel de Servicio del **$97,5\%$** $\rightarrow Z = 1,96$.
  - Para Nivel de Servicio del **$99\%$** (productos vitales/críticos) $\rightarrow Z = \mathbf{2,33}$.
  - Para Nivel de Servicio del **$99,9\%$** $\rightarrow Z = 3,09$.

El **Punto de Pedido (`PP` o *Reorder Point* `ROP`)** es el nivel exacto de existencias físicas/disponibles en el que el sistema `LOGAS` debe disparar automáticamente la emisión de un nuevo pedido de tamaño $Q^*$:
$$\mathbf{PP = \bar{d} \cdot \bar{L} + SS}$$
*(Con stock de seguridad, el **Stock Medio en el almacén** pasa a ser $\overline{\text{Stock}} = \frac{Q^*}{2} + SS$, y el **Stock Máximo teórico** es $\text{Stock}_{\max} = Q^* + SS$).*

#### 3. Índice de Rotación de Stock ($\text{IR}$) y Periodo Medio de Cobertura
- **Índice de Rotación Anual ($\text{IR}$):** Número de veces que el inventario medio se renueva completamente a lo largo de un año (cuanto mayor es el $\text{IR}$ sin caer en rotura de stock, más eficiente es la gestión logística):
  $$\mathbf{\text{IR} = \frac{\text{Consumo Anual } (D)}{\text{Stock Medio } (\overline{\text{Stock}})}} = \frac{D}{\frac{Q}{2} + SS}$$
- **Cobertura del Stock (en días):** Número de días de consumo autónomo que puede cubrir el hospital con las existencias actuales si se interrumpiera el suministro externo:
  $$\mathbf{\text{Cobertura (días)} = \frac{\text{Stock Actual (o Medio)}}{\text{Consumo Medio Diario } (\bar{d})} = \frac{365}{\text{IR}}}$$

### 2.2. Clasificación Combinada `ABC` (Ley de Pareto) $\times$ Criticidad Clínica `VEN` y Duplicidad en Electromedicina (`Módulo 1594`)

En un almacén hospitalario o de electromedicina no se puede aplicar el mismo esfuerzo de control a una caja de depresores linguales de $0,02\text{ €}$ que a una válvula cardíaca TAVI de $18.000\text{ €}$ o a una membrana de respirador neonatal de soporte vital. Por ello se construye una **Matriz Bidimensional cruzando el Análisis Económico `ABC` (Ley de Pareto 80/20) con el Análisis de Criticidad Asistencial `VEN` (*Vital, Esencial, No esencial*)**:

| Categoría `ABC` (Valor de Consumo Anual $= D_i \times C_i$) | % de Referencias del Catálogo | % del Coste Económico Anual | Cruce con Criticidad Clínica `VEN` (*Vital, Esencial, No esencial*) y Estrategia de Gestión en el SERGAS |
| :--- | :---: | :---: | :--- |
| **Artículos Clase `A`** | **$\approx 10\text{–}20\%$** de las referencias | **$\approx 70\text{–}80\%$** del importe total | • Incluye prótesis, implantes activos (`DAI`, marcapasos), *stents*, válvulas, tubos de RX y detectores digitales.<br>• **Política de control:** Revisión continua unitaria ($s, Q$), trazabilidad estricta por **número de serie y lote (`UDI`)**, negociación centralizada de precios, stock propio mínimo y gestión en **depósito/consigna** con armarios `RFID`. |
| **Artículos Clase `B`** | **$\approx 20\text{–}30\%$** de las referencias | **$\approx 15\text{–}20\%$** del importe total | • Incluye fungibles específicos de electromedicina, sensores reutilizables, cables de ECG, circuitos de ventilación, baterías y repuestos preventivos.<br>• **Política de control:** Revisión periódica/continua automatizada mediante Punto de Pedido ($PP$) y Lote Económico ($EOQ$) con stock de seguridad intermedio. |
| **Artículos Clase `C`** | **$\approx 50\text{–}70\%$** de las referencias | **$\approx 5\text{–}10\%$** del importe total | • Incluye material fungible general de consumo masivo (gasas, jeringas, guantes, electrodos desechables, tornillería/fusibles).<br>• **Política de control:** Automatización total mediante **Doble Cajetín Kanban `RFID`** para reducir a cero el tiempo administrativo y de enfermería dedicado a contar unidades. |

Al cruzar la clasificación `ABC` con la criticidad **`VEN` (*Vital* `[V]`: su falta impide una prestación de soporte vital o para un equipo crítico sin alternativa; *Esencial* `[E]`: necesario pero con alternativa temporal; *No esencial* `[N]`: auxiliar)**, la ingeniería biomédica presta especial atención a la **celda crítica `C-V` (Bajo coste económico pero Criticidad Vital)**: por ejemplo, una **válvula espiratoria, un sensor de flujo neonatal o un fusible especial de un respirador de UCI** cuesta pocos euros (Clase `C`), pero si se agota deja inoperativo un equipo de soporte vital de $35.000\text{ €}$ (Categoría `V`). Para estos elementos, el **Módulo Profesional 1594 (`Orden EFP/1216/2019`)** exige dos medidas obligatorias:
1. **Stock de Seguridad Reforzado de Repuestos Críticos (`Categoría V`):** Mantener en el taller propio de Electromedicina del hospital un stock mínimo permanente con nivel de servicio $\ge 99,9\%$ para todos los kits preventivos, sensores, baterías y tarjetas de equipos de soporte vital (UCI, Quirófano, Reanimación, Urgencias, Hemodiálisis y Neonatología).
2. **Duplicidad y Parque de Reserva de Equipos Biomédicos (*Back-up Pool*):** Disponer de un porcentaje calculado de **equipos completos en reserva operativa inmediata** (típicamente un $5\text{–}10\%$ adicional sobre la dotación instalada en bombas de infusión volumétricas/jeringa, monitores multiparamétricos de transporte, desfibriladores y respiradores) listos, cargados y verificados para sustituir en $< 15\text{ minutos}$ cualquier unidad que sufra una avería en planta o UCI mientras se repara en el taller.

### 2.3. Métodos de Valoración Contable de Inventarios (`PMP`, `FIFO`, `LIFO`) frente al Criterio Físico de Expedición (`FEFO`)

El **Módulo Profesional 1594 (`Orden EFP/1216/2019`)** incluye explícitamente en su currículo los tres métodos clásicos de **valoración contable de salidas de almacén** cuando han entrado lotes sucesivos a precios de compra diferentes ($P_1, P_2, \dots, P_n$), los cuales no deben confundirse con el flujo físico de las cajas:
1. **Método `PMP` (*Precio Medio Ponderado* — El estándar utilizado en `LOGAS` y contabilidad pública hospitalaria):**
   - Cada vez que entra una nueva recepción de $q_{\text{nueva}}$ unidades a un precio $P_{\text{nuevo}}$, se recalcula el valor unitario medio ponderado de todo el stock disponible:
     $$\mathbf{\text{PMP}_{\text{nuevo}} = \frac{\left(Q_{\text{anterior}} \cdot \text{PMP}_{\text{anterior}}\right) + \left(q_{\text{nueva}} \cdot P_{\text{nuevo}}\right)}{Q_{\text{anterior}} + q_{\text{nueva}}}}$$
   - Todas las salidas de almacén hacia las plantas o hacia órdenes de trabajo en `XMAO` se imputan a este `PMP` vigente, amortiguando las fluctuaciones bruscas de precios de mercado.
2. **Método `FIFO` (*First In, First Out* — Primero en Entrar, Primero en Salir):**
   - Contablemente valora las unidades que salen al precio del lote más antiguo en almacén hasta agotarlo, pasando luego al siguiente lote; las existencias finales quedan valoradas a los precios más recientes. (Admitido junto al `PMP` por el Plan General de Contabilidad español y las normas internacionales `NIC 2`).
3. **Método `LIFO` (*Last In, First Out* — Último en Entrar, Primero en Salir):**
   - Valora las salidas al precio del último lote que entró en el almacén, quedando el inventario remanente valorado a precios antiguos. *(Nota de examen A1: Aunque se estudia teóricamente en el Módulo 1594 para comparar su efecto en épocas de inflación —donde `LIFO` sobrevalora el coste del consumo y subvalora el stock final—, **su uso contable está prohibido por las normas internacionales `NIIF/NIC 2` y el Plan General Contable**, y físicamente es inaplicable en sanidad porque dejaría caducar los lotes del fondo del estante).*
4. **Criterio Físico Obligatorio en Almacenes de Productos Sanitarios: `FEFO` (*First Expired, First Out* — Primero en Caducar, Primero en Salir):**
   - En los almacenes de productos sanitarios estériles, implantes, reactivos `IVD` y farmacia, el orden físico de expedición y consumo **no se rige simplemente por la fecha de entrada (`FIFO`), sino estrictamente por la Fecha de Caducidad del lote (`FEFO`)**: puede ocurrir que un proveedor entregue hoy un lote cuya fecha de caducidad sea anterior a la de un lote recibido el mes pasado; el sistema `LOGAS` y los carruseles/armarios inteligentes obligan a consumir primero el lote con vencimiento más próximo.

---

## 🔬 3. Tecnologías de Automatización Logística Intrahospitalaria: `Kanban RFID`, Carruseles, Armarios Inteligentes y Transporte Automatizado

### 3.1. Almacenes Periféricos de Unidad por Pacto de Consumo y Sistema `Kanban` de Doble Cajetín con `RFID UHF` (`ISO/IEC 18000-63`)

Históricamente, las supervisoras y enfermeras de las plantas de hospitalización dedicaban horas semanales a contar cajas en el almacén de la unidad y teclear pedidos manuales a suministros, generando además «almacenes ocultos» por miedo al desabastecimiento. La ingeniería logística moderna sustituye este modelo por la **Gestión por Pacto de Consumo con Sistema `Kanban` de Doble Cajetín (*Two-Bin System*) automatizado por Radiofrecuencia (`RFID`)**:
1. **Establecimiento del Pacto de Consumo:** Entre la Dirección de Enfermería y Logística se dimensiona para cada unidad asistencial el catálogo exacto de artículos necesarios y su cantidad pactada en función de la actividad histórica y la frecuencia de reposición (p. ej., reposición lunes-miércoles-viernes o martes-jueves).
2. **Ingeniería del Doble Cajetín (`Primary Bin` + `Secondary Bin`):**
   - Cada artículo en las estanterías modulares (`ISO 600 × 400 mm`) de la planta se divide físicamente en **dos compartimentos o cajetines (o delante/detrás separados por un divisor)**:
     - El **Cajetín Primario (delantero)** contiene la cantidad de consumo habitual del ciclo ($Q_{\text{cajetín}}$).
     - El **Cajetín Secundario (trasero o de reserva)** contiene exactamente el consumo necesario para cubrir el tiempo de reposición más el stock de seguridad ($\bar{d} \cdot L_{\text{reposición}} + SS$).
3. **Captura Automática de Necesidad mediante Etiquetas Pasivas `RFID UHF` (`ISO/IEC 18000-63` / `EPCglobal Gen2` en banda europea `ETSI 865–868 MHz`):**
   - Cada cajetín lleva adherida una tarjeta identificativa dotada de un **transpondedor pasivo `RFID UHF`** (sin batería, alimentado por la onda electromagnética del lector, capaz de leerse a varios metros de distancia sin línea de visión directa y de forma masiva anticolisión).
   - **Operativa de «Tiempo Cero de Enfermería»:** El personal sanitario toma el material siempre del **primer cajetín**. En el instante en que extrae la última unidad del primer cajetín, retira la tarjeta `RFID` y la deposita en el **Buzón / Panel Lector `RFID` de Pared** situado en la entrada del almacén de planta (pasando a consumir inmediatamente del segundo cajetín).
   - La antena del buzón `RFID` lee en tiempo real el código `EPC` de la tarjeta y transmite automáticamente por la red del hospital al ERP **`LOGAS`** la orden de reposición de un lote $Q_{\text{cajetín}}$ para esa planta concreta. El pedido llega preparado desde la Plataforma Logística Central y el personal de logística (no la enfermería) repone el cajetín vacío colocándolo detrás (garantizando la rotación **`FEFO`**) y devuelve la tarjeta a su soporte.

### 3.2. Sistemas de Almacenamiento Automatizado (*Goods-to-Person*) y Armarios Inteligentes `RFID` de Alto Coste en Quirófano y Hemodinámica

1. **Carruseles Verticales (*Paternoster*), Lanzaderas Verticales (*Vertical Lift Modules — VLM*) y Carruseles Horizontales:**
   - Aplican el principio de **«Mercancía al Operario» (*Goods-to-Person*)**: en lugar de que el celador de almacén recorra kilómetros de pasillos buscando estanterías (*Person-to-Goods*, que representa el $60\%$ del tiempo de *picking*), el software de gestión de almacenes (**`SGA` / `WMS`**) mueve automáticamente las bandejas motorizadas hasta la ventana ergonómica de dispensación, iluminando mediante puntero láser o barra **`Pick-to-Light` / `Put-to-Light`** el compartimento exacto y las unidades a extraer, aprovechando hasta el **$70\%$ del volumen vertical** de la nave y reduciendo los errores de preparación por debajo del $< 0,1\%$.
2. **Armarios Inteligentes `RFID` para Implantes y Material de Alto Coste en Bloque Quirúrgico, Hemodinámica y Radiología Intervencionista:**
   - En las salas de hemodinámica, electrofisiología, neurorradiología intervencionista y quirófanos, cada *stent* farmacoactivo, catéter balón, guía hidrofílica, marcapasos o válvula lleva asociada una etiqueta `RFID`.
   - El material en depósito se custodia dentro de **Armarios Inteligentes cerrados con antenas `RFID` internas y control de acceso biométrico o por tarjeta profesional**:
     - La enfermera circulante se identifica en la pantalla táctil, selecciona al paciente activo de la lista de trabajo quirúrgica (`SIHGA`/`IANUS`), abre la puerta del armario y retira los 3 o 4 catéteres/*stents* que el hemodinamista cree que puede necesitar.
     - Al terminar el procedimiento, la enfermera devuelve al armario los *stents* que no llegaron a abrirse. Al cerrarse la puerta, el armario realiza un **barrido `RFID` automático en $< 3\text{ segundos}$**, calcula por diferencia qué unidades exactas se han consumido en el paciente, **las imputa automáticamente al episodio clínico y centro de coste**, lanza la orden de compra y reposición de depósito en **`LOGAS`** y bloquea en pantalla cualquier lote cuya fecha de caducidad esté vencida o sobre el que la **AEMPS haya emitido una Alerta de Vigilancia de Productos Sanitarios (*Field Safety Notice / Recall*)**.

### 3.3. Automatización del Transporte Intrahospitalario: Tubo Neumático y Flotas de Robots `AGV` / `AMR`

En los hospitales modernos del SERGAS (como el Hospital Público Álvaro Cunqueiro de Vigo, el HULA de Lugo o las ampliaciones del CHUAC y CHUS), la distribución logística interna se automatiza mediante dos sistemas electromecánicos:
1. **Sistemas de Transporte por Tubo Neumático (*Pneumatic Tube Systems — PTS*):**
   - Red de tuberías de PVC/acero ($\varnothing\text{ }110\text{ o }160\text{ mm}$) con turbinas soplantes/aspirantes reversibles y desvíos electromecánicos controlados por PLC que conectan Urgencias, UCI, Quirófanos y Plantas con el **Laboratorio Central, Banco de Sangre y Farmacia** a velocidades de $3\text{ a }6\text{ m/s}$ (con modo de velocidad reducida y frenado suave por colchón de aire para el transporte de bolsas de hemoderivados y muestras sanguíneas evitando la **hemólisis por fuerzas de cizallamiento**).
2. **Vehículos de Guiado Automático (`AGV`) y Robots Móviles Autónomos (`AMR`):**
   - Plataformas robóticas de tracción eléctrica que circulan por galerías técnicas subterráneas y montacargas de uso exclusivo comunicándose por Wi-Fi con el sistema de control de ascensores y puertas automáticas para transportar carros pesados ($300\text{–}500\text{ kg}$) de **suministros logísticos (`LOGAS`), lencería limpia/sucia, carros de cocina termorregulados, cajas de esterilización y contenedores de residuos**, garantizando la separación física estricta entre **circuitos limpios y circuitos sucios**. Los `AMR` de última generación emplean navegación natural **`SLAM` (*Simultaneous Localization and Mapping*)** con escáneres láser **`LiDAR`** y cámaras 3D para esquivar obstáculos dinámicamente sin necesitar bandas magnéticas en el suelo.

---

## 🛡️ 4. Trazabilidad Regulatoria en la Cadena de Suministros (`MDR 2017/745`, `UDI`, `GS1`) y Condiciones de Conservación

### 4.1. El Sistema de Identificación Única del Producto (`UDI`) bajo el `MDR (UE) 2017/745` y Estándares `GS1`

El **`Reglamento (UE) 2017/745 (MDR)`** (Artículos 25, 27 y Anexo VI, Parte C) y el **`Real Decreto 192/2023`** (Artículo 26) imponen la **trazabilidad electrónica obligatoria** a lo largo de toda la cadena de suministro mediante el sistema **`UDI` (*Unique Device Identification*)**.

Todo producto sanitario (salvo los productos a medida y los productos en investigación) debe llevar en su etiqueta y en todos los niveles superiores de embalaje (excluidos los contenedores de transporte `SSCC`) un código **`UDI` en formato legible por personas (`HRI` — *Human Readable Interpretation*) y en formato de captura automática (`AIDC` — código de barras lineal, bidimensional `DataMatrix` o `RFID`)**, compuesto por dos partes:
$$\mathbf{\text{UDI} = \text{UDI-DI (Estático: Modelo y Fabricante)} \;+\; \text{UDI-PI (Dinámico: Producción / Lote / Serie / Caducidad)}}$$
1. **`UDI-DI` (*Device Identifier* — Identificador del Producto, estático):** Código numérico o alfanumérico único específico de un **fabricante y un modelo/versión de producto sanitario**, que actúa como clave de acceso en la base de datos europea **`EUDAMED`** (vinculado además al **`Basic UDI-DI`** que agrupa una familia de productos con la misma finalidad, clase de riesgo y diseño esencial).
2. **`UDI-PI` (*Production Identifier* — Identificador de Producción, dinámico):** Código variable que identifica la unidad concreta de producción e incluye, según proceda: el **Número de Lote**, el **Número de Serie** (obligatorio en implantables activos y equipos), la **Fecha de Caducidad (`AAAA-MM-DD`)**, la **Fecha de Fabricación** y, en el caso de **Software como Producto Sanitario (`SaMD`), la Versión del Software**.

La Comisión Europea ha designado como entidad emisora principal de códigos `UDI` a **`GS1`** (junto con `HIBCC`, `ICCBBA` —para sangre, tejidos y células— e `IFA`). En el estándar **`GS1`** (representado mediante códigos **`GS1-128`** o el símbolo matricial cuadrado **`GS1 DataMatrix` [`ISO/IEC 16022`]** con corrección de errores *Reed-Solomon*), la información se estructura mediante **Identificadores de Aplicación (`AI` — *Application Identifiers*) entre paréntesis** que todo Ingeniero Biomédico debe saber leer en un examen práctico:
- **`AI (01)`:** **`GTIN`** (*Global Trade Item Number*, de 14 dígitos) $\longrightarrow$ Corresponde exactamente al **`UDI-DI`**.
- **`AI (11)`:** **Fecha de Fabricación** (formato `AAMMDD`).
- **`AI (17)`:** **Fecha de Caducidad** (formato `AAMMDD`) $\longrightarrow$ Parte del **`UDI-PI`** (permite el bloqueo automático **`FEFO`** al escanear).
- **`AI (10)`:** **Número de Lote (*Batch/Lot Number*)** (hasta 20 caracteres alfanuméricos) $\longrightarrow$ Parte del **`UDI-PI`**.
- **`AI (21)`:** **Número de Serie (*Serial Number*)** (hasta 20 caracteres alfanuméricos) $\longrightarrow$ Parte del **`UDI-PI`**.
- *(Otros códigos logísticos GS1: **`GLN` [AI 414]** = *Global Location Number* para identificar físicamente un almacén, hospital o servicio; **`SSCC` [AI 00]** = *Serial Shipping Container Code* de 18 dígitos para identificar un palé o contenedor logístico; **`GIAI` [AI 8004]** = *Global Individual Asset Identifier* para inventariar activos de electromedicina en `XMAO`).*

### 4.2. Obligaciones de Trazabilidad de los Centros Sanitarios (Art. 27.9 `MDR`, Art. 18 Tarjeta de Implante y Art. 26 `RD 192/2023`)

1. **Registro Electrónico Obligatorio de `UDI` en Hospitales:** Según el **Art. 27.9 del `MDR (UE) 2017/745`**, las instituciones sanitarias **almacenarán y conservarán, preferiblemente por medios electrónicos, los `UDI` de los productos que hayan suministrado o que les hayan sido suministrados, cuando dichos productos pertenezcan a los productos implantables de la Clase III** (ampliable por normativa nacional a otros productos).
2. **Tarjeta de Implante e Información al Paciente (Art. 18 `MDR`):** El hospital debe facilitar por medios de acceso rápido a todo paciente al que se le haya implantado un producto la identidad del producto (nombre, número de serie/lote, **`UDI`**, fabricante) y entregarle la **Tarjeta de Implante** (en formato físico y accesible digitalmente en su historia clínica **`IANUS` / `É-Saúde`**), además de alimentar los **Registros Nacionales de Implantes de la AEMPS** (marcapasos, DAI, prótesis mamarias, válvulas cardíacas, etc.).
3. **Objetivo de Vigilancia Sanitaria (*Recalls* en Tiempo Real):** Gracias a la lectura del `UDI` en `LOGAS` y `IANUS`, si la AEMPS emite una alerta de seguridad ordenando la retirada inmediata de un lote defectuoso de un implante o fungible, el SERGAS puede identificar en **cuestión de minutos**: **a)** en qué almacenes o armarios de qué hospitales quedan unidades de ese lote para inmovilizarlas electrónicamente, y **b)** a qué pacientes concretos (con nombre, apellidos y teléfono) se les implantó una unidad de ese lote para citarlos a revisión clínica inmediata.

### 4.3. Condiciones Técnicas de Almacenamiento, Cadena de Frío, Esterilidad y Protección `ESD` (`ISO 13485` y `Módulo 1594`)

La preservación de la conformidad del producto sanitario durante su almacenamiento (`UNE-EN ISO 13485`, apdo. 7.5.11) exige controlar cuatro factores físicos:
1. **Control Termohigrométrico Ambiental:** Los almacenes generales de productos sanitarios deben mantenerse entre **$15\text{ }^\circ\text{C}\text{ y }25\text{ }^\circ\text{C}$** con una **humedad relativa $\text{HR} < 60\%$** (evitando la condensación y el deterioro del papel de grado médico de los envases estériles), protegidos de la radiación solar directa y con **sondas de temperatura y humedad conectadas por telemetría 24/7**.
2. **Gestión de la Cadena de Frío ($2\text{–}8\text{ }^\circ\text{C}$, $-20\text{ }^\circ\text{C}$ y $-80\text{ }^\circ\text{C}$):** Para reactivos diagnósticos `IVD`, hemoderivados, tejidos y productos biológicos, las cámaras frigoríficas y ultracongeladores disponen de registro gráfico continuo verificable, sondas calibradas con trazabilidad `ENAC` y **doble alarma acústica/remota** conectada con el centro de control de mantenimiento ante excursiones térmicas o fallo eléctrico (respaldado por grupo electrógeno).
3. **Preservación de Barreras Estériles:** En almacenes de material estéril, las estanterías deben ser de material no poroso y lavable (acero inoxidable o polímero técnico, nunca madera ni cartón bruto de transporte externo dentro de zona limpia), respetando distancias mínimas de seguridad (**$\ge 20\text{–}25\text{ cm}$ del suelo, $\ge 40\text{–}50\text{ cm}$ del techo y rociadores contra incendios, y $\ge 5\text{ cm}$ de las paredes exteriores**) para permitir la circulación laminar de aire y evitar contaminación por capilaridad o humedad.
4. **Protección frente a Descargas Electrostáticas (`ESD` — `UNE-EN 61340-5-1`) en el Almacén de Repuestos de Electromedicina (`Módulo 1594`):** Las tarjetas electrónicas de repuesto (`PCB`), microprocesadores, detectores digitales y cabezales ecográficos deben almacenarse y manipularse obligatoriamente dentro de **bolsas apantalladas antiestáticas (efecto jaula de Faraday)** y sobre bancadas con tapete disipativo y pulsera de puesta a tierra con resistencia de seguridad de $1\text{ M}\Omega$, evitando que descargas electrostáticas latentes ($< 100\text{ V}$, imperceptibles para el técnico) degraden las uniones semiconductoras CMOS antes de instalar el repuesto en el equipo médico.

---

## 🏥 5. Implantación, Integración y Casuística en el Servicio Gallego de Salud (SERGAS)

### 5.1. La Plataforma Logística Sanitaria de Galicia en Negreira y el Sistema Corporativo `LOGAS`

El Servicio Gallego de Salud ha implantado uno de los modelos de logística sanitaria centralizada más avanzados de Europa, sustentado en dos pilares corporativos:
1. **La Plataforma Logística Sanitaria de Galicia (situada en Negreira, A Coruña):**
   - Actúa como el **almacén central inteligente y regulador único para toda la Comunidad Autónoma de Galicia**, abasteciendo de forma capilar a la totalidad de los hospitales públicos y a los más de 450 centros de salud y puntos de atención continuada (`PAC`) de las **7 Áreas Sanitarias**.
   - Sus instalaciones cuentan con **silos transelevadores robotizados de gran altura** para palés, baterías de **carruseles horizontales y verticales guiados por luz (*Pick-to-Light*)**, cámaras frigoríficas de cadena de frío monitorizadas, zonas de recepción/expedición con lectura por radiofrecuencia y rutas de transporte diario optimizadas hacia cada centro sanitario gallego.
   - Este modelo centralizado permitió al SERGAS liberar miles de metros cuadrados de antiguos almacenes subterráneos en los hospitales para destinarlos a uso clínico/diagnóstico, reducir drásticamente el stock inmovilizado global por economía de escala y garantizar la equidad de suministro en todo el territorio.
2. **El Sistema Corporativo de Gestión Logística y Económica (`LOGAS`):**
   - Es el sistema ERP corporativo del SERGAS que gobierna de extremo a extremo el **Catálogo Único de Productos Sanitarios de Galicia**, la agregación de demanda para compras centralizadas, la gestión de expedientes de contratación, la emisión electrónica de pedidos (`EDI`), la gestión del almacén central de Negreira, los almacenes periféricos hospitalarios por **Doble Cajetín Kanban con `RFID UHF`** y los depósitos quirúrgicos.

### 5.2. Integración de `LOGAS` con `IANUS 5`, `SIHGA`, `SILICON` y `XMAO`

En la arquitectura de sistemas del SERGAS, **`LOGAS`** opera integrado bidireccionalmente a través del Bus Corporativo con:
- **`IANUS 5` y `SIHGA` (Trazabilidad Clínica de Implantes y Contabilidad Analítica por Paciente):** La lectura del código **`UDI` (`GS1 DataMatrix`)** o la extracción del implante del armario inteligente `RFID` en el quirófano registra automáticamente el dispositivo en la hoja quirúrgica de `IANUS 5` del paciente y genera en `LOGAS` el movimiento de consumo en firme de depósito y su imputación económica al episodio (`GRD`).
- **`XMAO` (Gestión del Mantenimiento de Equipamiento Biomédico):** Cuando un ingeniero o técnico de electromedicina registra en una Orden de Trabajo (`OT`) de **`XMAO`** la sustitución de un repuesto, transductor, celda de oxígeno o batería, el sistema descuenta la pieza del almacén técnico vinculado en `LOGAS`, valora el coste a **`PMP`** imputándolo al histórico del activo biomédico individual (clave para analizar el coste de ciclo de vida `LCC` y decidir la baja/renovación del equipo según criterios FENIN/COCIR del Tema 60) y lanza el reaprovisionamiento si el stock baja del Punto de Pedido.

---

## ⚡ 6. Síntesis de Alto Rendimiento, Tabla Resumen y Puntos Críticos de Examen A1

### 6.1. Tabla Maestra de Cifras, Umbrales y Artículos Clave

| Concepto / Modelo / Norma | Referencia Exacta | Fórmula / Identificador / Regla de Oro para Examen A1 |
| :--- | :--- | :--- |
| **Sistema Logístico Corporativo del SERGAS** | Entorno SERGAS | ERP **`LOGAS`** + **Plataforma Logística Centralizada en Negreira (A Coruña)** + **Doble Cajetín Kanban con `RFID UHF`** en plantas + Armarios Inteligentes en Quirófano/Hemodinámica. |
| **Lote Económico de Pedido (`EOQ`)** | Modelo de Wilson (`Módulo 1594`) | $$Q^* = \sqrt{\frac{2 \cdot D \cdot S}{H}} = \sqrt{\frac{2 \cdot D \cdot S}{i \cdot C}}$$ *(Minimiza el coste total igualando el coste anual de emisión al coste anual de posesión).* |
| **Stock de Seguridad (`SS`) y Punto de Pedido (`PP`)** | Gestión Estocástica de Stock | $$SS = Z_{1-\alpha} \cdot \sigma_d \cdot \sqrt{L} \quad (\text{con } Z_{95\%}=1,65\text{; } Z_{99\%}=2,33) \qquad PP = \bar{d} \cdot L + SS$$ |
| **Índice de Rotación (`IR`) y Cobertura** | Indicadores de Almacén | $$\text{IR} = \frac{\text{Consumo Anual}}{\text{Stock Medio}} \qquad \text{Cobertura (días)} = \frac{365}{\text{IR}} = \frac{\text{Stock Medio}}{\text{Consumo Diario}}$$ |
| **Clasificación `ABC` de Pareto y `VEN`** | Ley 80/20 + Criticidad Clínica | • **Clase A:** $10\text{–}20\%$ referencias $\rightarrow$ **$70\text{–}80\%$ del coste** (implantes, alta tecnología $\rightarrow$ depósito/consigna).<br>• **Clase B:** $\approx 30\%$ referencias $\rightarrow$ $15\text{–}20\%$ del coste.<br>• **Clase C:** $50\text{–}70\%$ referencias $\rightarrow$ **$5\text{–}10\%$ del coste** (fungible común $\rightarrow$ Doble Cajetín Kanban).<br>• **Cruce `C-V`:** Repuestos baratos pero **Vitales** para soporte vital $\rightarrow$ alto stock de seguridad en taller. |
| **Valoración Contable vs. Flujo Físico** | `Módulo 1594` / `PGC` | • **Valoración contable:** **`PMP`** ($\frac{Q_1 P_1 + q_2 P_2}{Q_1 + q_2}$) y **`FIFO`** (`LIFO` prohibido por NIIF/PGC).<br>• **Flujo físico de salida sanitaria:** **`FEFO` (*First Expired, First Out*)** según fecha de caducidad. |
| **Identificador Único del Producto (`UDI`)** | **Art. 27 y Anexo VI `MDR (UE) 2017/745`** | **`UDI` = `UDI-DI` (estático: modelo/fabricante) + `UDI-PI` (dinámico: lote, serie, caducidad)**. Obligatorio conservar electrónicamente en hospitales para **implantables de Clase III** (Art. 27.9 `MDR`). |
| **Identificadores de Aplicación `GS1`** | **`GS1 DataMatrix` (`ISO/IEC 16022`)** | **`(01)` GTIN (`UDI-DI`)** · **`(10)` Lote** · **`(11)` Fecha Fabricación** · **`(17)` Fecha Caducidad** · **`(21)` Número de Serie**. |
| **Radiofrecuencia en Kanban de Planta** | **`ISO/IEC 18000-63` (`RFID UHF`)** | Etiquetas pasivas **`RFID UHF EPC Gen2`** ($865\text{–}868\text{ MHz}$ en Europa): lectura sin línea de visión al depositar la tarjeta del primer cajetín vacío en el buzón lector. |

### 6.2. Puntos Críticos y Trampas Habituales de Tribunal (Tipo Test y Supuestos Prácticos)

1. **Problema Numérico Clásico de Examen A1 (Cálculo de `EOQ`, `PP`, `SS` y `PMP`):**
   - *Ejemplo de examen:* Un Servicio de Electromedicina consume anualmente $D = 1.800\text{ sensores}$ de flujo reutilizables. El coste de tramitar cada pedido es $S = 20\text{ €}$ y el coste anual de almacenar cada unidad es $H = 10\text{ €/(unidad}\cdot\text{año)}$. El plazo de entrega del proveedor es $L = 9\text{ días}$, el consumo medio diario es $\bar{d} = 5\text{ uds/día}$ con desviación típica $\sigma_d = 2\text{ uds/día}$ y se exige un nivel de servicio del $95\%$ ($Z = 1,65$).
     - **Lote Económico de Pedido (`EOQ`):** $Q^* = \sqrt{\frac{2 \times 1800 \times 20}{10}} = \sqrt{7200} \approx \mathbf{85\text{ unidades/pedido}}$ ($21,2\text{ pedidos/año}$).
     - **Stock de Seguridad (`SS`):** $SS = 1,65 \times 2 \times \sqrt{9} = 1,65 \times 2 \times 3 = \mathbf{9,9 \approx 10\text{ unidades}}$.
     - **Punto de Pedido (`PP`):** $PP = (5 \times 9) + 10 = \mathbf{55\text{ unidades}}$ (cuando el stock baje a 55 unidades, `LOGAS` lanza automáticamente un pedido de 85 unidades).
2. **Trampa entre `UDI-DI` y `UDI-PI` y los Identificadores `GS1`:**
   - Los tribunales suelen intercambiar el contenido del `UDI-DI` y del `UDI-PI`: recuerda que el **`UDI-DI` (*Device Identifier*, código `GS1 AI (01) GTIN`) es FIJO/ESTÁTICO** para todas las unidades de ese modelo de marcapasos o *stent*, mientras que el **`UDI-PI` (*Production Identifier*, códigos `GS1 AI (10)` Lote, `AI (17)` Caducidad y `AI (21)` N.º de Serie) es DINÁMICO/VARIABLE** para cada lote o unidad fabricada.
3. **Trampa entre `FIFO`, `LIFO`, `PMP` y `FEFO`:**
   - Si preguntan qué criterio determina qué caja física de catéteres estériles debe entregarse primero desde la Plataforma de Negreira a un hospital, la respuesta es **`FEFO` (*First Expired, First Out*: el lote que caduque antes sale primero)**. Si preguntan cómo valora contablemente el ERP el coste unitario medio de las existencias cuando entran compras a distinto precio, es el **`PMP` (*Precio Medio Ponderado*)**.
4. **Trampa sobre el funcionamiento del Doble Cajetín Kanban con `RFID`:**
   - En el sistema de Doble Cajetín de planta del SERGAS, la orden de reposición en `LOGAS` **NO se lanza cuando se agotan los dos cajetines** (eso produciría una rotura de stock en la unidad), sino **en el instante exacto en que se agota el PRIMER cajetín (cajetín primario)** y se coloca su tarjeta `RFID` en el buzón lector, mientras la enfermería continúa trabajando sin interrupción consumiendo el **segundo cajetín**.
