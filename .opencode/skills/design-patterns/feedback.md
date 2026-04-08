# Feedback y Estados (Feedback & States Patterns)

Este archivo documenta los patrones de diseño orientados a notificaciones, estados del sistema en espera o vacíos y la comunicación asíncrona tras las acciones directas del usuario.

---

## 1. Toast / Snackbar
**Descripción:** Notificación dinámica flotante y efímera de tamaño reducido que informa lateralmente el resultado o confirmación inmediata de un éxito o error de acción originada previamente.

**Úsalo cuando:**
- El usuario acaba de completar una acción asíncrona o en segundo plano (ej. "Enlace copiado al portapapeles", "Correo archivado satisfactoriamente").
- Precisas dar acuse de confirmación de un resultado tranquilizador, pero no quieres forzar una intervención imperativa urgente paralizante de su layout en foco primario de atención constante en base de forma forzosa sobre él.
- Aceptas una disipación a los pocos segundos por desvanecimiento desatendido propio pasivo sin forzar interrupciones destructivas temporizadas autónomas (3 a 5 segs de vida util total media).

**No lo uses cuando:**
- Contiene y atesora información fundamental imperdible que, si volatiliza, provocará desastres insalvables graves en cadena ignorada.
- Arrastra copiosas cantidades de 3 a más renglones descriptivos textuales sobre lo sucedido que sobrepasan su legibilidad rápida fugaz y capacidad corta temporal en formato rápido humano de lectura temporal asimilada sobre él mismo y sus latencias estéticas visuales de desaparición en vista normal de 5 segundos.
- Requiere anunciar alteraciones pasivas globales atadas o desconectadas totalmente e independientes a un botón de su pantalla actual y particular (usando en su lugar los Banners Globales para los cortes generales de todo en plataforma web master).

**Estructura de componente recomendada en Figma:**
- `ToastContainer` (AutoLayout Horizontal de altura mínima, position Fixed u Overlay atada visual Bottom-center / Top-right y BoxShadow difusa suave media/alta desprendida)
  - `StatusIcon` (Checkmark, Error sign o Info mark colorizados correspondientes)
  - `Message` (Texto semibold directo)
  - `ActionLink` (Opcional Acción text button Deshacer Undo)
  - `DismissIcon` (Opcional IconButton "X" cruz de cierre temprano)

**Variantes mínimas requeridas (`ToastContainer`):**
- `Type=Success`
- `Type=Error`
- `Type=Info`
- `Type=Warning`

**Encaja mejor con:** Suites Digitales completas universales B2B, App Móviles nativas interactivas en todo entorno general como pilar visual central.

**Antipatrón más común:** Disparar cuatro o cinco Toasts identicamente apilados todos al instante creando un edificio gigantesco abrumador de bloques en la zona de las esquinas o ubicarlo ocultando sin miramientos los botones Flotantes (FABs) importantisimos inferiores al anclarlo abajo sin respeto a una grid general coordinada a nivel global impidiendo seguir operando con el dedo libre sobre interfaz táctil sobre capas sin taparse torpemente entre sí mismos sin layout estricto de evasión coordinada inferior.

---

## 2. Banner de sistema
**Descripción:** Banda de mensaje global persistente insertada anclada orgánicamente desde arriba de todo para reportar a la cuenta o sitio una condición master obligada transitoria alterada y su impacto sistémico absoluto final temporal adyacente en general al sistema master del sitio entero sobre cualquier sitio puntual de allí interno donde ingrese allí sin importar ruta hija anidada final.

**Úsalo cuando:**
- Segmentos mayores están inoperativos (mantenimiento en base de datos pronto inminente el fin de semana alertado días antes a su fin).
- Detectas caída temporal forzosa y la plataforma cambió offline.
- Quieres advertir un status alterado del pago sobre vencimientos "Tu versión Trail acabará en 3 horas" obligados u avisar términos corporativos cambiados que todos y no se le escurra por las pestañas sin que se salde su alerta a todos central a tope total en global visual.

**No lo uses cuando:**
- Solo requieres de dar informes aislados de error puntual en "Contraseña Inexacta" (Donde aplica el Inline Alert menor focal estricto y en línea con su contexto de base particular).
- Como anuncio de marketing excesivo estorbando constante taponando interfaces y agobiando las tareas serias persistiendo 5 meses.

**Estructura de componente recomendada en Figma:**
- `SystemBanner` (Layout Full Width ancho extendido top general, Background Flat y Tint color de severidad generalizado base con texto)
  - `ContentBox` (AutoLayout Horizontal envuelto central)
    - `Icon`
    - `TextLabel` (Explicación global y enlace hipertexto integrado incrustado adentro para aprender o accionar para salvar la advertencia global base del asunto completo base y vital).
  - `CloseButton` (Descartable cruz Icon "X" lateral opcional derecha)

**Variantes mínimas requeridas (`SystemBanner`):**
- `Type=Info`
- `Type=Warning`
- `Type=Critical/Error`

**Encaja mejor con:** Sitios Web masivos generales en actualización, Interfaces Plataformas B2B SaaS en sus paneles, Herramientas Administrativas, Tiendas avisadas con retrasos COVID masivos en inicio y avisos estáticos constantes visuales del centro logístico general en la web a publico abierto global.

**Antipatrón más común:** Insertar banners rojo intenso perpetuos sin proveer medio obvio asimilado para descartarlo en X para ocultarlo permanentemente y emponzoñando todo el espacio a todos o rompiendo por mala Grid AutoLayout ocultando parte del Menú Navbar originario dejándolos atascados solapándose por el absolute position sin empujar layout Z originario abajo como debería.

---

## 3. Inline alert
**Descripción:** Segmentos o cajas alertadoras anidadas orgánicamente adjuntas de aviso incrustadas contiguamente al campo que lo detona, en formato pasivo de acompañamiento permanente mientras perviva la desviación sin cubrir por overalay.

**Úsalo cuando:**
- Necesitas indicar mensajes de fallo puntuales locales dentro de un Input mal introducido que no puede procesarse porque erróneas lógicas puntuales.
- Previenes que el subcampo introducido va a durar el doble cargando sin alarmar sobre sistemas generales "Su render tomará más minutos que lo general de media base por el peso inestable general al que someta ahora pero se logrará el asunto no pierda paciencia".
- Explicas consejos atados al instante para lograr mayor asimilación del lugar visual en el instante inmediato con apoyo de texto con advertencia visual suave.

**No lo uses cuando:**
- Sientas que fue un error general de todo como si se perdió conexión (Banner master usa allí entonces)
- Acabas de recibir de manera veloz un ok o éxito por el server instantáneo al presionar (para dar alivio con un Toast efímero). No ensucies la hoja entera dejando cajas verdes exitosas pegadas por siempre.

**Estructura de componente recomendada en Figma:**
- `InlineAlertBox` (AutoLayout Horizontal contiguo en layout flow con borderRadius, BG del 5 al 10% de opacidad y borde 1px Stroke sólido 100% de la familia del color y semántica iconográfica de la base del estilo de urgencia)
  - `Icon`
  - `MessageContent`
  - `LinkAction` (Boton texto interno anidado en linea a la derecha)

**Variantes mínimas requeridas (`InlineAlertBox`):**
- `Type=Warning`
- `Type=Error`
- `Type=Info`
- `Type=Success` (Únicamente si requiere resumen final de un flujo de varios pasos completados persistir pegado y con recibo estático para lectura sosegada pos-confirmatoria global local en pantalla asimilable en base como su panel propio "Pedido Completado").

**Encaja mejor con:** Formatos grandes anidados de Configuración general Settings de paneles, Páginas largas de Facturación checkouts, Pasos de Steppers Form complejos y detallados de usuarios asiduo e ingreso denso a la información.

**Antipatrón más común:** Aplicar la intensidad semántica roja alarmista para indicar simplemente avisos neutros orientativos provocando pánico injustificado del tipo "Recuerde añadir nombre (Rojo Peligro) o amarillo chillón a notas pasivas normales" sobre-estimando su impacto o de no saber balancear la urgencia y asimilar lo pacífico en los colores pálidos de info del espectro base del azul.

---

## 4. Empty state
**Descripción:** Plantilla frontal ilustrada insertada con mimo al centro en espacios listables que acarea resultados al estar temporalmente vírgenes supliendo y curando al terrible miedo del silencio o de una fractura.

**Úsalo cuando:**
- Presentas su herramienta vacía pura de estreno a nuevos sin poblar para invitar o incitar onboarding amigables cálidos sin rechazo inicial del panel central desértico sin vida al entrar allí vacío inmensamente blanco central de inicio.
- Lanzaste la red de búsquedas y no extrajo combinaciones (Filtro Zero Resultados visualizados pero no rotos en general y operando correcto la base técnica del filtro en si y avisando sanamente a su creador el resultado inofensivo de su búsqueda limpia en base real actual).
- Lograste el afamado Inbox Zero (Archivando todo felizmente sin estancados en tu check to-do global vaciando la vista y debes festejar la nada gloriosa con una meta terminada a la que premiar a tu observador general del inicio libre ahora vacío ameno).

**No lo uses cuando:**
- Ocurrió una caída violenta temporal global destructiva y literal ha fallado la carga HTTP donde deben aflorar los "Error States / Error Pages" masivos explícitos del técnico sin medias tintas engañosamente amigables, dejando ver el problema o desastre real directo del origen servidor no de tu falta local en pantalla.

**Estructura de componente recomendada en Figma:**
- `EmptyStateContainer` (AutoLayout Vertical, centrado absolute y visual en espacio vacío total de la grilla 100% disponible base del lugar blanco central, alineamiento Center H/V)
  - `Graphic` (Icono vector escalado extra grande 64px o 120px / Ilustración suave tenue a los grises sutil de la gama color neutra central del Branding marca al 40%)
  - `TitleLabel` (Aviso contundente de la situación tipo "Sin Tareas")
  - `BodyCopy` (Orientación como guía de dónde originar el click mágico salvador)
  - `CTAButton` (Botón principal invitacional rellenador + Crear Ahora nuevo)

**Variantes mínimas requeridas (`EmptyStateContainer`):**
- `Type=Initial` (Para dar paso al inicio onboarding "Crear Nuevo X primario")
- `Type=SearchNoResults` (Vacio asimilado a búsquedas donde el Boton es "Eliminar los Filtros Incompatibles pidiendo reset" en base al error inofensivo sin colapsos de listados del filtrador inofensivo originado normal y limpio orgánicamente al 100%)
- `Type=DoneAll` (Finalizador amistoso de tareas aliviantes para bandejas al día "Felicidades" Inbox zero asimilado sano)

**Encaja mejor con:** Trello similares sin paneles rellenos inicialmente o paneles limpios, Dashboards e-commerce del catálogo vírgenes vacíos a iniciar, Paneles del historial vaciados temporal libres, Tablas vacas SaaS base de tablas nulas pidiendo añadir la data manual primera y de cero central inicial absoluto.

**Antipatrón más común:** Limitarse meramente en escribir en el pixel más recóndito superior microscópico con las letras de "0 encontrados" oscuramente y dejando una hoja o folio 100% hueco gigantesca dando sensación tétrica a Bug crasheado absoluto o colgado sin terminar que deja abandonada e intimida a intentar de nuevo adivinar qué rompió del panel o sin llamadas a acción CTA para retornar de nuevo vivo adentro de lo estético.

---

## 5. Loading skeleton
**Descripción:** Geometrías difusoras de contorno que tintinean para simular cajas y estructuras asimilando exactamente de inicio las casillas idénticas a donde rellenarán un segundo y cargarán sus datos latentes venideros.

**Úsalo cuando:**
- Anticipas una petición asíncrona real y su resolución inminente menor a tres o cinco segundos que rellenará piezas masivas exactas (como Feed Cards o Tablas complejas densas pidiendo espera).
- Estructuras en bloques o imágenes con siluetas reconocibles de base (textos perfil, circulo avatar) logrando evitar los saltos destructivos CLS bruscos salvaguardando sin que brinque loco todo el scroll hacia arriba reacomodando la carga espasmódica.
- Debes disipar drásticamente visualmente que está lento y cargando de un modo que calma distrayendo en la ilusión y anticipación armónica de "ver llegar y componerse y entrar todo".

**No lo uses cuando:**
- Cargas procesos imperceptibles y mas rápidos de una décima (0.1 segs) introduciendo parpadeos y flasheos horrorosos psicodélicos perjudiciales para los sujetos frente tuyo sin ganar ni amortizar nada visible de ayuda o aporte al cerebro sobre ellos y sí distrayendo el ritmo real.

**Estructura de componente recomendada en Figma:**
- `SkeletonCard` (AutoLayout igual a la versión final Card real, Fill color claro 200 gray, animación shimmer prototipado)
  - `SkeletonShape` (Avatar/círculo o Imagen base rectangular 100% adaptativa llena base)
  - `SkeletonTitleItem` (Rectángulo bordeado esquinas altura 16 o 24 según texto y 80% o 60% randómico de width total adaptativo)
  - `SkeletonLineItem` (Para el body textos parrafos falsos base difuso grisáceos)

**Variantes mínimas requeridas (`SkeletonItem` asimilables base):**
- `Type=Avatar`
- `Type=TextBlock`
- `Type=ImageHeader`

**Encaja mejor con:** NextJs o frameworks orientados y SPAs con carga retrasada o Lazy Loads, Medios fotográficos en grilla densas como Pinterest clones asimilados o Youtube Video thumbs simulados asimilados amables en las latencias y Dashboard gráficos dinámicos base densa general de módulos visualizadores gráficos puros listados y ordenados continuos.

**Antipatrón más común:** Reemplazar groseramente y de repente por Skeletons y en proporciones tan disparatadas donde nada concuerda visual o miden distinto con su contenedor gemelo final al que pretenden ayudar o en su fase nativa o final real produciendo peores temblores espasmódicos brutales en tu layout o saltos base que si simplemente usarían un aburrido spinner de 1999 de icono circular de viejo origen.

---

## 6. Progress bar
**Descripción:** Cinta gradual explícita progresiva determinable que se expande hacia su final marcando visible los pasos y latencia predecible de procesados temporales amplificados.

**Úsalo cuando:**
- Sabes determinar, extraer y visualizar porcentualmente o en pasos reales asimilables el tramo total (35 / 100 MB totales o el porcentaje 40%) matemáticamente controlable desde 0 y 100%.
- Obligas a tiempos altos al sujeto en sus esperas de gran escala sobrellevando frustración sin que apague forzadamente refrescando (Importaciones GigaBytes a BD, subida base archivos, renders AI 30 segs general) requiriendo saber explícitamente "Si faltan minutos o no se atascó general o si respira".

**No lo uses cuando:**
- Es matemáticamente imposible asegurar porcentajes (El backend no responde info alguna salvo el Ok general final en si o no a la nada). Úsalo aquí `Indeterminate Loaders Circular Spinners` si fuera latencia sin meta segura medible.
- Sucederán mini micro cargas latencias que requerían de los "Skeletons" general visual asimilable masivos o la aparición rápida directa al completado sub un par de segundos. (Los parpadeos sin sentido base perjudicial).

**Estructura de componente recomendada en Figma:**
- `ProgressBarContainer` (AutoLayout Vertical para dar espacio al texto acompañante general del llenado horizontal del Progress base Track)
  - `ProgressTextAndValue` (Opcional, en Top Row espacio between label "Subiendo .." y valor "45%")
  - `TrackBackground` (La calle riel vacío en gris suave)
    - `IndicatorBar/Fill` (Color principal azul rellenando interno base general por encima porcentual total)

**Variantes mínimas requeridas (`ProgressBarComponent` base):**
- `State=Determinate` (Relleno en porcentaje numérico del avance llenado predecible y seguro calculable en código)
- `State=Indeterminate` (Para casos donde la barra rebota de lado a lado infinitamente donde avisas estar trabajando ciegamente de cantidad temporal pero que sin atascos el proceso no está colgado aún pero infinito)

**Encaja mejor con:** Modal interactivo para Upload/Importación pesadas subidas general base masiva o Conversiones Multimedia directas generales o instaladores web nativos empaquetados pesados base masivos de red lentos o de 1 minuto 10 esperados tolerables sin abandono masivos.

**Antipatrón más común:** Las barras fantasmas tramposas no mapeadas al código que se rellenan ficticiamente e irrumpidas al 99% y se tasan ahí estacadas petrificadas eternamente y congeladas engañando frustrantemente el progreso, imposibilitándonos saber cuánto o qué pasó al ocultarse sin poder Cancelar la barra X base manual opcional lateral o dar información sobre retenciones verdaderas sobre los fallos internos o colapsados que la paralizaron ahí rotas base sin aviso rojo.

---

## 7. Error page (404 / 500)
**Descripción:** Plantillas de Vistas Aisladas completas de salvaguarda destinadas para enrutar impactos globales mortales y trágicos donde una página o dato masivo entero faltó de sus servidores en absoluto rompiéndolo central con caída frontal libre y ruidosa impalpable total base irreparable allí.

**Úsalo cuando:**
- Experimentan catástrofes irremediables (URLs inexistentes, páginas desfasadas 404 puras perdidas sin rastro re-etiquetas).
- Las API Server principales crujen internamente (Errores 50X no autorizados o fallos de compilación general en código base general rotos expuestos masivamente en entorno general de renderizado local que debe ocultarse base con la pared allí gráfica bonita final visual segura cortafuegos frontal y salvarlo).

**No lo uses cuando:**
- Ocurran detalles como de que subaste en mal formato tu PNG en tu Modal base (No mates toda tu web redirigiendo al 500 sin avisos Toast e Inline forms rojos).
- Apenas tu widget secundario de clima local inferior izquierdo falló al servidor lateral extra tuyo de ese mini componente fallido (Deben rellenarlo Skeleton Error Empty particular anidado y no masacrar ni esconder tu Layout total general general solo por eso rompiéndole todo su paseo visual fluido master por un simple extra mal herido sin red externa fallado o demorado un extra secundario colgado lateral).

**Estructura de componente recomendada en Figma:**
- `ErrorLayoutBase` (View Height 100vh centralizado V y H y aisaldo o solo acompañado del header centralizado al nav universal base de su dominio general limpio asimilable y estético)
  - `Graphic` (Gran Ilustrador dramático lindo amigable del robot caído o perro despistado 404 base al % opacidad)
  - `NumberCode` (Error literal masivo o genérico semi opaco "404" / "No connection")
  - `Headline` ("Página extraviada o no encontramos el tesoro escondido base o roto servidor actual" de forma llanamente empática comunicativa humana sana asertiva).
  - `PrimaryCTA` ("Regresar seguro a Home Raíz / Reintentar F5 button")

**Variantes mínimas requeridas (`ErrorLayoutBase` integradas):**
- `Type=404_NotFound`
- `Type=500_ServerDie`
- `Type=No_Internet_Offline`

**Encaja mejor con:** Cualquier Ecosistema digital web de enlaces abiertos hipervínculos intercambiables públicos que están expuestos permanentemente a caducar o teclear mal directo por la gente errático, Portales Corporativos base asimilando marcas grandes con tonos empáticos gráficos o Ecommerce con descatalogados absolutos 100% que mueren anualmente sin redirección masiva 301 en SEO masivos indexados en buscadores caídos generales a rotos finales.

**Antipatrón más común:** Arrojar a la basura visual dejando la horrible hoja terminal gris NGINX de sistema puro Unix o Vercel crudo a tus perfiles no técnicos originándole que sienta que explotó internet de hackers y cierre masivo todas sus pestañas por siempre creyendo virus, o también de carecer de ningún simple lazo "Volver atrás seguro" forzando clics del navegador externos no de interfase tuyas bases directos propios perdiendo control asimilado y abandono global base SEO.

---

## 8. Confirmation state
**Descripción:** Retroalimentación unitaria y localizada microscópica morfológica sobrepunteada atada in situ interactiva directamente donde pulsa lograda asíncrona pero mutada interna atada al mismo control del desencadenante que lo originó transformando un check y ok de la mutación.

**Úsalo cuando:**
- Pulsan una acción ultra rápida binaria pequeña de baja fricción secundaria o atajo masivo veloz ("Botón simple Copiar -> Copiado Icon" o Estrella Favorito -> Corazón Lleno latiendo verde en miniatura central a un mini salto y rebote confirmable mini sin estridencias enormes del layout) a fin y general general confirmatoria).
- Evitar spam de notificaciones base tipo Toast flotando aglomerados locos si en vez aprietas veinte items checkbox seguidos donde no ocuparía todo ensuciado su layout entero (un icono animado check individualizado de morphin silencioso es la cura al colapso de un Toast por cada Fav listado masivo tuit fav) para ataduras minúsculas asimiladas locales microscópicas directas asíncronas rápidas de salvado sin latencias gigantescas bases de bloque general al panel lateral izquierdo del card.

**No lo uses cuando:**
- Ocurren en realidad cambios destructivos definitivos del panel base total ("Eliminar base de datos general") u originó fallos irreparables no silenciosos asimilables locales sino colapsos con rojos sin textos asimilables al explicarte tu problema exacto en miniatura no visible 100% base en lugar exacto en lugar atado pequeño sin descripción posible asimilable por el lugar escaso diminuto incomprensible de icono cruz rojo al fallo allí asimilando de fondo de error atado atorado oculto.
- Las variables y acciones ameritan largos explicativos verbales imposibles sobrepasar en el espacio atado confinado en el estado miniatura asimilado sin su campo textual libre explicativo lateral de alert del error general.

**Estructura de componente recomendada en Figma:**
- `Button` o `ActionIcon` (Componente variante de sus mismas bases compartidas pero configuradas al final en Prototypes Interactions delays base o status properties y auto close en reset timers).

**Variantes mínimas requeridas (`ActionButton` state variant base):**
- `State=Default` (Copiando Base o Corazón Hueco o Icon base original neutro)
- `State=Working` (Circulito Loading spinner remplazando origin central)
- `State=Success` (Verde V Check icono de logrado de forma inmediata local para desvanecer a neutro a los segundos base temporal interactivo y reusar el toggle).

**Encaja mejor con:** Micro interacciones base (Redes favs tuit likes directos e instantes interactivos masivos), Data-tables SaaS Listados de guardados asíncronos puntuales por celda editadas pequeñas (copias atajos al vuelo click portapapeles clipboard) con guardados instantáneos de red eficientes sin guardado global central botó base a bajo.

**Antipatrón más común:** Dejar mudo el sistema al presionar creyendo este la plataforma que los botones que realizan backend calls velocísimos debieran omitirse, originando del usuario furiosos 20 clicks y taps de rebote y duda constante "No funciona el Favorite o copiador repetidamente general creyendo base muerta atascada sin feedback inmediato mínimo asimilado a base en su reacción confirmatoria inicial.

---

## Árbol de Decisión para Patrones de Feedback y Estados

Sigue estos criterios concatenados lógicamente para identificar el patrón requerido en pantalla de todo lo concerniente a un estado comunicacional e informativo de alertas sobre cambios sistémicos:

**1. ¿El mensaje es la resultante y feedback por culpa de un clic de acción del usario previa y su resultado allí directo o su latencia de backend asíncrono atado y causado por su acción?**
- **Sí:**
    - ¿La tarea es muy pesada / tardía al subir base temporal masivo controlable porcentual determinístico (más de 10 segs u originando un import base masivo numérico)? 👉 **Progress bar**.
    - ¿Es instantáneo en fracción efímera lograda al pulsar o con un éxito asíncrono efímero general del sitio? 👉 **Toast / Snackbar**.
    - ¿Es un clic repetitivo microscópico de listados infinitos y de micro interacciones rápidas y botones copy asíncronos rápidos en botones unitarios que cambiarán in situ morfológicamente allí con iconos check mini de confirmación estática o animada fugaz mínima local sobre el mismo lugar y nada más? 👉 **Confirmation state**.
- **No (No lo originó a clics previos y asíncronamente sino de situaciones latentes de estado general inactivo u alertas orientando un estatus general de las infraestructuras de tu carga de base):** Continúa al bloque 2.

**2. ¿Te refieres al status de red, al estado temporal del sistema de espera para traer la UI o al panel de tableros caídos centralizados originados temporal vacío?**
- **Sí:**
    - Hay vacíos en tableros y cero búsquedas reales orgánicas de cero inicio de tu plataforma virgen (no rotos): 👉 **Empty state**.
    - La carga está en camino en menos de dos segundos asimilando los tableros en red prearmados fantasmagóricos bonitos visuales para amortizar todo el relleno sin dar un quiebre de saltos layout shift o parpadear feo asustando al base al scroll user: 👉 **Loading skeleton**.
    - Ha crasheado rotundo en un 500 no link, 404 URL inexistente sin destino de datos destripando un link que no carga nada de nada: 👉 **Error page**.
- **No (Te refieres de estados alertadores explícitos a informar persistiendo):** Continúa en la 3.

**3. ¿Su alcance impacta persistente e inamovible alertando sobre todo en tu estado general o sobre solo fallos puntuales atados a solo un renglón?**
- Afecta con avisos de cuenta a punto de caducar global persistente arriba del Header masivo principal de atención o Modo De Plataforma Mantenimiento Global en Servidor para todos de forma global sistémica prioritaria: 👉 **Banner de sistema**.
- Impacta e inculpa a inputs de formularios de contraseñas u estatus de cajas mal rellenas asimilables adyacentes donde estallan las validaciones locales al error de lectura, para persistir al reparar el conflicto localizado central y vivir adjunto intermedio: 👉 **Inline alert**.

---

## Tabla de Severidades de Feedback

¿Cómo colorear y qué patrones se justifican ante la semántica o peso de una alerta base comunicativa hacia un sujeto base y el usuario observante? Matriz esencial referencial:

| Severidad/Tono | Color Semántico Representativo | Patrones Compatibles e Ideales para mapearlo y usar justificado su nivel de intromisión e interrupción aceptable |
|---|---|---|
| **Success (Éxito)** | Verde / Primario Resaltante / Ícono Checks List | **Toast** (Notifica que todo marchó súper asíncrono instantáneo o Guardado efímero de panel atípico). **Confirmation state** (Mini check verde o in-button transaccional local micro exitosa confirmando hechos menores sin obstaculizar la vista repetitivo in situ sin colapsos atascados layout general inferior global visualizando el guardado base mini exitoso natural asimilable directo). / **Inline alert** (Si perduran los mensajes pegados tipo "Pedido Confirmado Cód.XX"). |
| **Info / Neutro** | Azul / Purpuras Tints / Ícono ( i ) Info base | **Toast** (Recordatorios simples efímeros sin daños colaterales si pestañea o aviso final "Email movido"). **Banner** (Aviso Updates general estático atípicos del producto atípico en inicio). / **Empty States** (Sin estado de alerta y neutros blancos o minimalistas originando en paneles la incitación inicial o búsquedas sin resultado limpios no asustadizos orgánicamente limpios neutros asimilables neutral). |
| **Warning (Aviso / Precaución / Intermedia)** | Amarillo / Naranjas / Ícono Triángulo ! Atentos o Señales Advertencia Cuidado | **Inline alert** (Precauciones al rellenador de formularios tipo "Contraseña Media base"). / **Banner de sistema** ("Atención general pasiva general persistente atípica sin frenar aún totalmente de bloque: Su licencia expirará en 2 días y pasará a límites gratuitos de cuotas general base adyacente generalizada top origin). O **Toasts** efímeros naranjas de preaviso base temporal de redes inestables "Carga muy saturada". |
| **Error (Acción destructiva o rotas generales/ Fallos Críticos)** | Rojo Intenso / Magenta / Carmesí / Icono X Stop Asimilable Error General Blocked Negado Prohibido | **Error page 404/500** (Caída Estructural irreparable masiva rotas con cortafuegos asimilador empático rojo e ilustración o fondos sin acceso real URL base en caída final al barranco generalizada destrozando flujo o deteniéndolo forzado allí tope barrera impasable final base asimilada irrompiendo global). **Inline alert** ("Este correo ya existe u Obligatorio vacío rojo adjunto local forzado al lado"). **Toast** (Fallos base efímeros rojos "No pudimos conectar en este instante, intente luego la carga originaria temporal frustrada asimilada roja local y disolverse veloz del centro general del camino final). / **System Banner** (Alerta roja general de sistema "Plataforma entera Fuera de Servicio desconectada temporal base"). |
