# Esp. Tema 5 — Caracterización y funcionamiento de las salas de radiología digital.

> **Parte del Programa:** Parte Específica  
> **Prioridad Estratégica:** Fase 1: Núcleo Diamante (💎 Núcleo Diamante)  
> **Bloque de Estudio Completo:** [`Bloque_02_Fisica_Radiaciones_y_Radiodiagnostico_RX_TC_Mamo_Arcos.md`](../02_apuntes_nucleo_diamante/Bloque_02_Fisica_Radiaciones_y_Radiodiagnostico_RX_TC_Mamo_Arcos.md)

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

### 2. Tema 4 y Tema 5: Equipos y Salas de Radiología Digital (Tubo de Rayos X, Generadores y Receptores)

### 2.1. El Tubo de Rayos X: Componentes y Funcionamiento (Tema 4)
1. **Ampolla envolvente de vidrio borosilicatado o metal-cerámica al alto vacío ($< 10^{-5}\text{ Pa}$)** dentro de una **carcasa o coraza plomada** rellena de aceite dieléctrico (aislamiento eléctrico + disipación térmica; la radiación de fuga de la coraza a $1\text{ metro}$ operando a máxima potencia no debe superar **$1\text{ mGy/h}$**).
2. **Cátodo (Polo negativo):**
   - **Filamento de tungsteno (wolframio, $Z=74$, punto de fusión $3.422\text{ }^\circ\text{C}$)** dopado con un $1\text{–}2\%$ de torio, que emite electrones por **efecto termoiónico (Ley de Richardson-Dushman)** al pasar la corriente de calefacción ($I_f \approx 3\text{–}6\text{ A}$, baja tensión $\approx 10\text{ V}$).
   - **Copa de enfoque (de níquel o molibdeno):** Cargada negativamente para focalizar por repulsión electrostática la nube electrónica hacia la mancha focal del ánodo.
   - Los tubos diagnósticos suelen tener **doble foco**: **foco fino** ($0,3\text{–}0,6\text{ mm}$, mayor resolución espacial para hueso/detalle) y **foco grueso** ($1,0\text{–}1,2\text{ mm}$, soporta mayor carga térmica/mA para exposiciones ultracortas de tórax/abdomen).
3. **Ánodo (Polo positivo — Fijo o Rotatorio de $3.000\text{ a }10.000\text{ rpm}$):**
   - Pista focal de **aleación de Tungsteno-Renio ($90\%\text{ W} + 10\%\text{ Re}$)** (el renio evita el agrietamiento térmico superficial) sobre cuerpo de molibdeno y grafito, accionado por un **motor de inducción asíncrono** con estator exterior a la ampolla y rotor interior sobre rodamientos de bolas de plata/plomo o **cojinetes de metal líquido (galio-indio-estaño)** en tubos de TC e intervencionismo de alta carga.
   - **Rendimiento de producción de rayos X:** Solo **$< 1\%$** de la energía cinética de los electrones se convierte en rayos X (**radiación de frenado o *Bremsstrahlung*** de espectro continuo con $E_{\text{máx}} = e \cdot \text{kVp}$ + **radiación característica** de líneas discretas cuando el electrón arranca electrones de la capa K del blanco); el **$99\%$ restante se transforma en calor**.
   - **Principio del Foco Lineal (Goetze) y Efecto Talón (Efecto Anódico — *Heel Effect*):**
     - La pista anódica está inclinada un **ángulo anódico $\theta$ ($7^\circ\text{ a }17^\circ$)** para conseguir un **foco efectivo pequeño** ($\text{Foco efectivo} = \text{Foco real} \cdot \sin\theta$, mejorando la nitidez geométrica) mientras se reparte el calor sobre una superficie real grande.
     - **Efecto Talón:** Debido a la autoabsorción de los fotones en el propio talón del ánodo, **la intensidad del haz de rayos X es MAYOR en el lado del CÁTODO y MENOR en el lado del ÁNODO**. *(Aplicación práctica en examen: colocar siempre la parte anatómica **más gruesa o densa del paciente hacia el lado del CÁTODO**, ej. en columna torácica, fémur o mamografía con la pared costal bajo el cátodo).*

### 2.2. Generadores de Alta Tensión y Control Automático de Exposición (CAE / AEC)
- **Generadores de Alta Frecuencia (*Inverter* de $20\text{ a }100\text{ kHz}$):** Rectifican la red trifásica a continua, la invierten a alta frecuencia, la elevan y rectifican obteniendo un **rizado de tensión $< 1\%$** (potencial prácticamente constante), lo que reduce la dosis al paciente para la misma densidad óptica y acorta los tiempos de exposición a $< 1\text{ ms}$.
- **Exposímetro Automático (CAE / AEC):** Cámaras de ionización planas o detectores de estado sólido situados entre el paciente y el receptor de imagen que cortan el disparo automáticamente cuando el receptor ha recibido la dosis óptima prefijada.

### 2.3. Receptores de Imagen Digital: CR vs. DR Indirecto vs. DR Directo (Tema 4 y 5 — ¡Tabla clave de examen!)

| Tecnología | Siglas / Tipo | Principio físico de conversión de los Rayos X | Material clave | Ventajas / Aplicaciones típicas |
| :--- | :--- | :--- | :--- | :--- |
| **Radiografía Computarizada** | **CR** (*Computed Radiography*) | **2 pasos con chasis extraíble:**<br>1. Los RX excitan electrones a trampas metaestables (imagen latente).<br>2. Un lector barre la placa con un **láser rojo ($\text{He-Ne}$ o diodo)** produciendo **luminiscencia fotoestimulable (PSL)** azul-violeta leída por un fotomultiplicador (PMT), y luego se borra con luz blanca intensa. | Fósforos fotoestimulables de **Fluorohaluro de Bario activado con Europio ($\text{BaFBr:Eu}^{2+}$)**. | Permite digitalizar salas antiguas y portátiles sin cambiar el bucky, pero tiene **menor DQE ($\approx 25\text{–}35\%$)** y flujo de trabajo más lento que DR. |
| **Panel Plano (Flat Panel) de Conversión INDIRECTA** | **DR Indirecto** (FPD Centelleador + Fotodiodo + TFT) | **2 etapas en tiempo real:**<br>1. Un **centelleador** convierte los fotones de RX en **luz visible (verde $\approx 550\text{ nm}$)**.<br>2. Una matriz de **fotodiodos de silicio amorfo ($\text{a-Si}$)** convierte la luz en carga eléctrica leída por una matriz de transistores de película delgada (**TFT**). | Centelleador de **Yoduro de Cesio dopado con Talio ($\text{CsI:Tl}$)** estructurado en agujas/columnas (canaliza la luz evitando dispersión lateral) o **Oxisulfuro de Gadolinio ($\text{Gd}_2\text{O}_2\text{S:Tb}$ / Gadox)**. | **El más usado en salas de radiología digital general, portátiles DR, telemandos y arcos quirúrgicos**. Alta **DQE ($60\text{–}75\%$)** y menor dosis. |
| **Panel Plano (Flat Panel) de Conversión DIRECTA** | **DR Directo** (Fotoconductor + TFT) | **1 sola etapa (sin luz intermedia):** Los fotones de RX inciden directamente sobre una capa fotoconductora sometida a un alto campo eléctrico ($\approx 10\text{ V/}\mu\text{m}$), generando pares **electrón-hueco** que viajan en línea recta hacia los electrodos colectores del **TFT**. | **Selenio amorfo ($\text{a-Se}$, $Z=34$)**. | **Máxima resolución espacial intrínseca (sin dispersión óptica lateral)**. Es el estándar de oro en **Mamografía Digital (FFDM) y Tomosíntesis de mama**. |

### 2.4. Parámetros de Calidad de Imagen Digital (Pregunta frecuente de Radiofísica / Biomédica)
- **MTF (*Modulation Transfer Function* — Función de Transferencia de Modulación):** Mide la **resolución espacial** del sistema en función de la frecuencia espacial ($\text{pares de líneas/mm}$).
- **NPS (*Noise Power Spectrum* — Espectro de Potencia de Ruido) o Wiener Spectrum:** Caracteriza el ruido en función de la frecuencia espacial.
- **DQE (*Detective Quantum Efficiency* — Eficiencia Cuántica de Detección):**
  $$\text{DQE}(f) = \frac{\text{SNR}_{\text{salida}}^2}{\text{SNR}_{\text{entrada}}^2}$$
  Es el **indicador global más importante de un receptor digital**: mide la eficiencia con la que el detector transfiere la relación señal/ruido del haz de rayos X a la imagen digital. A **mayor DQE, menor dosis de radiación necesita el paciente** para obtener la misma calidad de imagen ($\text{DR } \text{CsI} > \text{DR } \text{Gadox} > \text{CR} > \text{Película-Pantalla}$).
- **Índice de Exposición (EI / DI — Estándar IEC 62494-1):** Como los detectores digitales tienen un amplio rango dinámico ($10^4:1$) y corrigen automáticamente el brillo en pantalla, la sobreexposición no «quema» la imagen sino que reduce el ruido (**fenómeno de *Dose Creep* o deriva de dosis**). El **Deviation Index (DI)** indica en pantalla si la dosis al detector ha sido la correcta ($\text{DI} = 0$), subexpuesta ($\text{DI} < 0$) o sobreexpuesta ($\text{DI} > 0$).

### 2.5. Caracterización de una Sala de Radiología Digital (Tema 5)
Una sala de radiología digital convencional consta de:
1. **Mesa radiográfica flotante motorizada** (tablero radiotransparente de fibra de carbono con baja atenuación equivalente $< 0,8\text{ mm Al}$) con **Bucky de mesa** (rejilla antidifusora oscilante Potter-Bucky de relación $r = h/D = 8:1\text{ a }12:1$, cámaras CAE y detector Flat Panel integrado o inalámbrico).
2. **Estativo mural vertical (Bucky mural)** para tórax, columna y estudios en bipedestación (con capacidad de **telemetría/costura automática — *stitching*** de columna completa y miembros inferiores).
3. **Suspensión de techo telescópica robotizada o columna suelo-techo** del tubo de rayos X, con **autosincronización (*auto-tracking*)** respecto al bucky mural o de mesa y **colimador luminoso automático** con cámara de medida de **Producto Dosis-Área (DAP / PKA)** integrada a la salida del colimador.
4. **Cabina de control plomada** con visor de vidrio plomado (equivalente típico $\ge 2\text{ mm Pb}$), consola de adquisición DICOM (Worklist + MPPS + PACS) e intercomunicador con el paciente.

---
