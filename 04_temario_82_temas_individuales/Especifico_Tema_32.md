# Esp. Tema 32 — Caracterización, funcionamiento y gestión de los dispositivos biomédicos implantables. Dispositivos cardioimplantables, ortopédicos, neuroimplantables y otros dispositivos implantables.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 1: Núcleo Diamante (💎 Núcleo Diamante)  
> **Bloque de Estudio Completo:** [`Bloque_01_Productos_Sanitarios_MDR_AEMPS_Implantables.md`](../02_apuntes_nucleo_diamante/Bloque_01_Productos_Sanitarios_MDR_AEMPS_Implantables.md)

## 🎯 Cruce con Otras Oposiciones del SERGAS

- **Categorías con solapamiento:** **Radiofísica Hospitalaria**
- **Grado de solapamiento:** **Bajo (25%)**: Solapa únicamente en implantes radiactivos permanentes/temporales; el resto es específico de Ingeniería Biomédica.
- **Epígrafes equivalentes:**
  • Tema 21. Técnicas de tratamiento. Selección de fuentes. Preparación de fuentes. Procedimientos de trabajo. Aplicaciones de carga directa. Aplicaciones de carga diferida (manual y automática). Implantes permanentes y temporales. Aplicaciones estándar: implantes de baja tasa de dosis, sistemas de implantación y de cálculo de dosis clásicos: sistema de París, de Manchester... Extensión a otros tipos de implantes: HDR, PDR. Técnicas especiales: intracoronaria, implantes permanentes de semillas, implantes oftálmicos, implantes estereotáxicos.

---

## 📖 Desarrollo Técnico y Normativo del Tema

### 7. Tema 32 y Tema 50: Dispositivos Biomédicos Implantables (Caracterización, Funcionamiento y Gestión)

Todos los dispositivos implantables activos y los implantes críticos están clasificados como **Clase III** (Regla 8 del Anexo VIII del MDR).

### 7.1. Familias principales de dispositivos implantables (Tema 32)
1. **Dispositivos Cardioimplantables (Activos y No Activos):**
   - **Marcapasos cardíacos (MP):** Generador de impulsos hermético en carcasa de titanio con batería de **litio-yodo ($\text{Li/I}_2$)** (vida útil $8\text{–}15\text{ años}$) + electrodos endocavitarios o epicárdicos (unipolares o bipolares), o marcapasos sin cables (*leadless* intracavitarios).
     - **Código internacional NASPE/BWG de 5 letras (¡Pregunta clásica de test!):**
       - **1ª Letra:** Cámara **Estimulada** (*Paced*): `O` (ninguna), `A` (aurícula), `V` (ventrículo), `D` (dual: A+V).
       - **2ª Letra:** Cámara **Detectada / Sensada** (*Sensed*): `O`, `A`, `V`, `D`.
       - **3ª Letra:** **Respuesta al sensado**: `O` (ninguna / asíncrono), `I` (inhibido), `T` (disparado / *triggered*), `D` (dual: I+T).
       - **4ª Letra:** **Modulación de frecuencia** (*Rate modulation*): `R` (con sensor de actividad/frecuencia adaptativa: acelerómetro piezoeléctrico o impedancia minuto respiratoria).
       - **5ª Letra:** Estimulación **Multisitio** (*Terapia de Resincronización Cardíaca — TRC / CRT-P*): `A`, `V`, `D`.
   - **Desfibrilador Automático Implantable (DAI / ICD) y CRT-D:** Detecta taquicardia ventricular (TV) y fibrilación ventricular (FV), aplicando estimulación antitaquicardia (ATP) o descargas de cardioversión/desfibrilación bifásica interna de alta energía ($25\text{–}40\text{ J}$) mediante baterías de **litio-plata-óxido de vanadio (Li/SVO)** y condensadores electrolíticos/tantalio.
   - **Implantes cardiovasculares pasivos:** *Stents* coronarios/periféricos (metálicos *BMS* de cromo-cobalto/nitinol o farmacoactivos *DES* — **Clase III por Regla 8 y 14**), prótesis valvulares cardíacas (mecánicas de carbón pirolítico o biológicas/TAVI), endoprótesis aórticas y dispositivos de cierre septal.
2. **Dispositivos Ortopédicos y Traumatológicos:**
   - **Artroplastias (Prótesis totales/parciales de cadera, rodilla, hombro — Clase III):** Biomateriales biocompatibles de alta resistencia mecánica y tribológica: aleaciones de **titanio ($\text{Ti-6Al-4V}$)** (osteointegración por bajo módulo de Young más cercano al hueso), **cromo-cobalto-molibdeno ($\text{Co-Cr-Mo}$)**, cerámicas de **alúmina/circonia** y **polietileno de ultra alto peso molecular altamente entrecruzado (UHMWPE)** para los pares de fricción articular, con fijación cementada (**PMMA** — polimetilmetacrilato) o no cementada (recubrimiento poroso / **hidroxiapatita**).
   - **Osteosíntesis e implantes espinales:** Placas, clavos intramedulares, tornillos pediculares, cajas intersomáticas (*cages* de PEEK o titanio poroso).
3. **Dispositivos Neuroimplantables e Implantes Sensoriales (Activos — Clase III):**
   - **Implante Coclear:** Parte externa (micrófono, procesador de habla y bobina transmisora por radiofrecuencia transcutánea) + parte interna implantable (receptor-estimulador y haz de electrodos intracocleares en la rampa timpánica que estimulan directamente las fibras del nervio auditivo siguiendo la **organización tonotópica** de la cóclea).
   - **Estimulador Cerebral Profundo (DBS):** Generador subcutáneo infraclavicular + electrodos estereotáxicos en núcleos basales (núcleo subtalámico o globo pálido interno) para enfermedad de Parkinson, temblor esencial o distonía.
   - **Estimulador de Médula Espinal (SCS)** para dolor neuropático crónico y **Estimulador del Nervio Vago (VNS)** para epilepsia refractaria.
4. **Otros Dispositivos Implantables:**
   - **Bombas de infusión implantables programables** (intratecales de baclofeno/morfina o de insulina).
   - **Válvulas de derivación ventriculoperitoneal** para hidrocefalia (con regulación magnética de presión).
   - **Lentes intraoculares (LIO)**, implantes mamarios de silicona y mallas quirúrgicas.

### 7.2. Gestión Hospitalaria de Dispositivos Implantables en el SERGAS
- **Trazabilidad mediante UDI (*Unique Device Identification*):** Todo implante lleva código **UDI = UDI-DI** (identificador fijo de modelo y fabricante) + **UDI-PI** (identificador de producción: lote, número de serie, fecha de caducidad).
- **Gestión de Depósitos Asistenciales:** La mayoría de prótesis e implantes de alto coste funcionan en régimen de **depósito hospitalario** (consigna) gestionado en el sistema logístico corporativo del SERGAS (**LOGAS**) e integrado con el registro quirúrgico de **IANUS** y la **Tarjeta de Implante** del paciente.

---
