# Presentación de Contenido y Datos (Content Patterns)

Este archivo documenta los patrones de interfaz diseñados para exponer, listar, ordenar y organizar conjuntos de información y visualización de datos complejos para el usuario.

---

## 1. Data table
**Descripción:** Presentación estructurada formal en matriz de filas y columnas orientada a permitir al usuario buscar, ordenar, cruzar datos y ejecutar acciones analíticas o multi-filas.

**Úsalo cuando:**
- Precises mostrar métricas y listados de información altamente estructurados que comparten propiedades comparables idénticas.
- El usuario base necesite cruzar lectura escaneando tanto atributos a lo largo horizontalmente como correlacionar columnas en la vertical con sort asc/desc.
- Habilita la selección de "Batch actions" grupales (ej: Chequear 10 facturas masivas y marcarlas como Pagadas en un solo golpe maestro de data grid).
- Exhibes catálogos densos backoffice de SaaS, administración CMS B2B y financieros originarios de grandes volúmenes y registros base densos crudos matemáticos o textuales técnicos idénticos.

**No lo uses cuando:**
- Diseñas primariamente visualmente para móvil responsivo estrecho The Mobile-First donde esa inmensa cuadrícula densa forzará horroroso en scroll doble cruzando y sofocando cortadas ocultando la data y rompiendo UX puro. Usa en móviles apilados visuales de Listas de renglones amoldados card base anidada visual.
- Apenas hay para listar un par base tristes tres celditas u objetos, viéndose colosal un formato tan gordo y técnico pesado para 2 cositas que un par de listones resolverían con agilidad.

**Estructura de componente recomendada en Figma:**
- `DataTableLayout` (AutoLayout Vertical Container master, Outline general border y BG White).
  - `HeaderRow` (Row AutoLayout Horizontal, Bg tenue de grises claros diferenciador tope superior con border bottom grueso separador visual y textos uppercase de los nombres y sort icons).
  - `DataRow` (Instancias AutoLayout H idénticas repetidas a iteración en vertical, con 1px bottom border).
    - `CheckboxCell` (Fixed width 40px left sticky atada para batch multi checker select general local asiduo a la celita fila originaria de control masivo local base selectivo clicker originario base check).
    - `CellContent` (Variables textuales formales numéricas o Status badgers chips color pastilla base form asimiladora tag local status de la entidad de celda origin).
  - `TableFooterArea` (Zona de paginadores y contables "1 de 50 totales" y dropdown select "Mostrar 10 al vuelo").

**Variantes mínimas requeridas (`DataRow` row base iterador general interactivo y de front):**
- `State=Default`
- `State=Hover` (Highlight suave azulino/grisáceo atado a hover en front para permitir a la vista perseguir visualmente la fila larga H sin cruzar y desviarse renglones ciegamente asimilador sano leyendo sin error base a perderse guiador horizontal visual).
- `State=Selected` (Tinturado general si checkbox V está On asimilador primario color base tenue destacador asimilador que está marcada origin al masivo base).
- `State=Disabled`

**Encaja mejor con:** CRMs integrales, Paneles Financieros administrativos generales de usuarios y transacciones bases masivas Dashboard Enterprise base B2B puras formales y consoladores base tablas puras SQL dumps.

**Antipatrón más común:** Ocultar todas tus acciones vitales y rápidas primordiales particularísimas ("Aprobar factura", "Firmar base") debajo oculto secreto bajo un menú de 3 puntitos genérico 'More' en la ultra lejana derecha oculta asimilable escondite inútil torturador general multiplicándole clicks a alguien que quería aprobar al click directo y veloz viendo el ícono base check V genérico directo al tiro form expuesto en un icon button en la fila derecha final general evitando menús colapsadores 200 clicks extras si fuesen 100 rows form origin torturaUX.

---

## 2. List item
**Descripción:** Filas horizontales organizadas iterables en listas verticales que exponen a renglones sucesivos un ítem singular y simple por renglón compartiendo jerarquía suave y ligera a escaneabilidad lectura general rápida verticalizada.

**Úsalo cuando:**
- Agrupas conjuntos asimiles pero muy carentes de atributos para obligar Tablas anchísimas y densas visual base cruzadas y sólo tienen metadatos de Icono + Titular + Texto cortito.
- Creas menús largos iterativos, historiales bitácora notificaciones de campana general vertical dropdown asiduas verticales listados directorios nativos Settings visual general móvil listones iOS clonados clones bases generales rápidos unarios base directos formales asimilables veloces L-R top bottom nativos.
- Presentas catálogos mobile fluidos base form unario limitados en espacio asfixiante general que solo admiten apilados vertical simple asimilador limpio visual escaneables asiduas form.

**No lo uses cuando:**
- Los artículos exigen de cruzar data pura matemática ("comparar precios asc en base fechas base orden variables") de muchos campos lo cual exige indiscutible Tabla y sus headers filtradores columnas puras densas visual L-R cruz.
- Posean imágenes o infografías densas que requieran ser inmensos póster cover gigantes visualizadores hero al producto donde su espacio ínfimo avatar de foto en lista no se distinguirán requiriendo la Grid base de Card robusta general estética asimilando el visual first asiduo originario e-commerce formal a fotos hero visual front genérico formal hero.

**Estructura de componente recomendada en Figma:**
- `ListItem` (AutoLayout Horizontal de Fill width alineados Hcenter a Space-between o densos left atados interinos base separador con stroke 1px bottom lines form nativos).
  - `LeadingVisual` (Lado originario izquierdo Icono visual origin formal o Avatar image circular profile de sujeto y checkbox opcional lateral formal left atadura asimiladora origen lectural ocular base inicial).
  - `BodyTextGroup` (Vertical de Label Header dark base grueso e interlineas y subtítulo secundario soft gris tenue descriptor base limitador ellipsis atada visual L-R central expandible auto flex atada a tomar el 80% del hueco medio del layout origin L-R L-C-R atado visual formal flexi local origin).
  - `TrailingArea` (Derecha general de Data Time "3 hrs badge tag label form count numeral 4 rojos circulares iconos badges de count bases notificaciones Chevron Right icon de drill down de entra origin).

**Variantes mínimas requeridas (`ListItem` iterador de front genérico):**
- `State=Default`
- `State=Hover` (Gris tenue de base hover clickable).
- `State=Active` (Pressed mobile).
- `Type=OneLine` / `Type=TwoLines`

**Encaja mejor con:** To-Do apps asiduas puras listas de listados orígenes, Inboxes de Email clientes Mensajería general listas chats apps, y Menús Configuraciones base Settings de Mobile nativos adaptados general menús perfil.

**Antipatrón más común:** Rellenar la zona del BodyTextGroup central de form asfixiándolo textualmente rebozando a injertos insertando inmensos masivos bloques de cinco párrafos de copy text infinito donde tu Listón vertical escaneador fluido pasa a ser un muro y libro aburrídismo rompiendo el flujo rompiendo a lo bestia la lista y la fluidez visual veloz (Eso precisaba expansores Acordeones Toggle text origin form o el uso de Cards para visual densa L-R de bloques gigantes formales densos textuales visual front).

---

## 3. Card básica
**Descripción:** Unidad contenedora estética agrupando en mosaico micro-interfases cerradas temas cerrados y ricos en mezclas simétricas atadas de Media+CopyTexto+Botonera independientes.

**Úsalo cuando:**
- El listado e inventario debe de brillar estéticamente originario priorizando seducción con la Media fotografía (Productos tiendas web E-com zapatos masivos cover o Blogs post covers gigantescos enganchantes al clic visual base estético B2C atractor enganche social app orígenes pinteresque bases originarios genéricos B2C masivo).
- Explicas o presentas planes general SaaS tipo Plan "Gratis" vs "Pro" cajas masivas ricas informativas destacadas form comparativas front base atadas simétricamente ricas asimilables directas unarias en su cajita independiente formal origen form rico atrayente base asimilador general B2B ventas pricing form front.
- Previsión de lectura pausada no densa y asimétrica de exploración (no escaneado robítico data base technical analitic cruz) "A ver qué hay origin form vitrinas exploradoras asimilables sanas visual explorador lúdico nato form originario lúdica sana ventana de shop asimile formal asiduo puro general e inspirador social.

**No lo uses cuando:**
- Pretendas meter allí pura y solamente letras de 10 renglones interminable matando tu diseño general blanco asfixiante aburrido donde la grilla List row asiduamente escaneable horizontalmente fluida era lo sano e ideal ganando espacio originario general de 5 veces asiduas bases de renglón asiduas general al originario texto form technical originario puro sin estética hero originaria a no tener la card.

**Estructura de componente recomendada en Figma:**
- `CardBase` (AutoLayout Vertical Container nativo form white bg Shadow drop shadow flotante separadora sutil y border radius).
  - `MediaHeader_top` (Imagen o Hero fill width contenedor H o V dependencias figma aspect ratio estático hero visual origin form atractor top).
  - `ContentBody` (Caja Padding interna base Padding 16px o 24px asimilada general form L-R Top down de Title Heading Black potente originario top origin body ellipsis a dos lines base desc textos soft de tag general y date tags bases originarias L-R top de content atada).
  - `FooterActions` (Stroke Divider superior asimilador zona de botones de acciones al bottom Icon heart likes origin general formal L-R form originario text button right CTA 'Leer MAS').

**Variantes mínimas requeridas (`CardBase`):**
- `State=Default`
- `State=Hover` (Fundamental elevar base en Y con mayor blur en shadow indicando flotabilidad e interactividad cliqueable al asimilo cognitivo hover ratón origen form + zoom microscópico simulado transform base scale sutil media hero atada a lujo front form formal estética viva).
- `Type=Vertical` / `Type=HorizontalLayout`

**Encaja mejor con:** Tarjetas sociales Timeline clone feeds, Catálogo tiendas Ecommerce Shopify asimilares origin front, Blogs posts index origin form galerías de medios y portafolios Behance UI base.

**Antipatrón más común:** Disectar el contenedor introduciendo cinco links dispersos al azar adentro del cuadro perdiendo totalmente originaria base "Y si apreto la foto general a donde voy form a la descripción atada general o su nombre enlace visual general rompiendo y generando trampa de usabilidad". Asimila siempre el card como click atado a toda su body atando al recurso global original o sus link aislados clarificadamente botones definidos puros origin form footer claros bases al pie CTA visual separados sin mezclar visual general ambiguamente en L-R form card general unificada sana cliqueable general.

---

## 4. Card de estadística / KPI
**Descripción:** Dashboard miniatura hiper sintetizada e individual tarjeta concentrada numéricamente form original asimilada métrica protagonista rey numérico visual enorme y sus atajos a tendencias de historia originaria form adyacente numeral unaria.

**Úsalo cuando:**
- Informes e ilumines destellos base instantáneos directivos asiduos resumen de situación "Pulso" iniciales de métricas KPI a los usuarios ("Ventas totales 90M", "14 Usuarios activos vivos originarios").
- Induzcas lecturas rápidas sin analizar base gráfica origen a vista de pájaro al entrar formal al inicio Home origin Dashboard form B2B general form directivos base origin L-R analítica visual form a primer pantallazo general 5 segundos base asimilada.
- Debas mostrar estados comparativos genéricos de éxito base semántica verdes flechas base (Crecimiento 14% VS base originaria bajante mensual form originaria general formal orientativa unificada numeral verde rojo plana).

**No lo uses cuando:**
- Pretendes inyectar mini grafiquitos atiborrados mini base barras densas asimiladas de 18 variables temporales dentro miniatura ilegibles origen form. Usa Modulos Chart inmensos bases propios gigantes origin panel. La kpi es "1" número rey titan central atado visual.
- Llenas todo como matriz con 30 cards mareando e intoxicando a la vista inútiles. (5-6 a lo suma fila tope originaria top formal de home general asimila el cerebro visual base central sano orientador numérico general origin).

**Estructura de componente recomendada en Figma:**
- `KPICardBox` (Mini Card de layout V u H base blanco border stroke 1px Shadow muy sutil)
  - `TitleLabel` ("Total Visitas" color soft light 12 o 14px asimila secundario gris formal de descripcion origen formal).
  - `ValueTitannic` (El Hero Numeral gigantesco 36px Black Extrabold origen form número protagónico 14K originario data metric al centro form).
  - `TrendBadgeRow` (Bottom asimila "Icon flecha up green" origin label green "+ 4%" "que el mes previo" asimilador L-R base adyacente bajo metric al unificado de temporalidad comparativa L-R visual).

**Variantes mínimas requeridas (`KPICardBox` base metrics):**
- `Trend=Positive_Green`
- `Trend=Negative_Red`
- `Trend=Neutral_Flat`

**Encaja mejor con:** Dashboards Analítica UI Google clones asimile generales orígenes B2B finanzas bases paneles orígenes directorios admin CMS de resumen unariado general Top Home overview resumen.

**Antipatrón más común:** Llenar el cuadro base con orígens textuales gigantescos opacando e igualables titulos y textos al sagrado de "Dato numeral 14K base", perdiendo origin foco jerárquico el verdadero rey central de su tarjeta matando base escabroso al KPI "A golpe de ojo origin form al número gordo visual" originario unificador de su sentido central visual numérico visual origin form asiduo origin numérico y grande.

---

## 5. Grid de contenido
**Descripción:** Plantilla modular que anida sus Cards bases hijos en perfecta simétrica matemática base mallas asimilables rejillas L-R top bottom de 2, 3 o 4 iteraciones base horizontal adaptativas columnas origin grid flex.

**Úsalo cuando:**
- Construyes las paredes visuales mallas iteradoras base galerías portafolios visual catálogo E-Commerce base a cuadrícula visual limpia y matemática base a filas perfectas alineadas altura simétrica limpias y organizadas lógicamente B2C o blogs.
- Cedes el espacio a exploraciones "Window shopping" donde de izquierda a derecha saltan de foto y title libres escaneando mallas Pinterest clones y feeds grilla Instagram posts orígenes generales simétricos y orden base L-R visual matrix 2D.

**No lo uses cuando:**
- Lees correos origen bandeja de mail listados crudos ("Mail base") donde escanear de arriba abajo 1 fila listón largo es su natura natural obligando a la vista saltar en L-R-L-R zigzag cansador de grid. Emplea la List row unificada.
- Presentas logs asiduamente formales o auditoría de banco donde "filas unaria" List form pura o DataTable base unida estricta general base no el mosaico visual base de la estética mallas general B2C origen form masivo asimilador B2C origen base.

**Estructura de componente recomendada en Figma:**
- `GridContentWrapper` (Sistema de Wrapper no un componente per se. Autolayout Wrap on o Grid CSS base mallas figma layout genérico unificadas originarias con Gap central idénticos base 16x16 o 24px generales H/V unificador de espaciados fijos).
  - `Item Card Componentes n+1`

**Variantes mínimas requeridas (En front responsividad de pantalla genérica visual iterada base):**
- `Device=Desktop` (3 a 5 Cols fluid form origin)
- `Device=Tablet` (2 a 3 orgenes limitados cols asimila base formal)
- `Device=Mobile` (1 o 2 base col apsilada base unificada visual stack top bottom de celular screen origen unificador asimiles genéricas fluidas Grid origin wrap iterables sanas fluidas simétricas a viewport ancho fluid L-R base).

**Encaja mejor con:** Catálogos asimiles a Zaras origins o base form portfolios dribbles, Blogs masonries generales de revistas web asimiladores simétricos generales visual content de consumo multimedia fotográfico asimila estética base rica atractiva.

**Antipatrón más común:** Descuidar las alturas variables "hug content" sin forzar el 'Stretch Height AutoLayout a todos' originando y rompiendo que sus filas parezcan dentaduras rotas bailonas caóticas antiestéticas visual desaliñadas donde las tarjetas cortitas dejan agujeros blancos espantosos asimilando bugs y descuido formal matriz B2C de calidad. Iguala las alturas por fila forzando el Fill en vertical.

---

## 6. List view vs Grid view
**Descripción:** Un toggle o control supra general al header base que hereda al usuario originario asimilable la voluntad divina y control maestro de render base alternando y mutando L-R en caliente entre Malla (Grid) y Listón (Filas form).

**Úsalo cuando:**
- Provees plataformas ambiguas mixtas "Tienda B2C o visualizadores Finder carpetas cloud archivos base" donde ver "Mallas foto" es tan importante como leer sus "Listas detalladas dates tamaño Kb y datos densos atados" y no impongas uno sin asimilar ambas necesidades al front atando un selector Toggle originario general libre L-R asimila base y salva la UX 10-10 base del user master base origen asimilador L-R form genérico de libertad.

**No lo uses cuando:**
- O estás forzado 100% que todo requiere Grid B2C pura imagen fotógrafo Behance sin letras o Tablas puras bancarias base sin logos orígenes visual photos que solo piden Lista densa pura. Tu esfuerzo de armar y codificar el 2x componente react base de 1 Switch es inútil form code origin UX perdido si es una base pura e incuestionable estricta e un solo bando. (ahórrale código CSS origin dual de dos components a mano inútil form originario y haz 1 de un tipo fijado indiscutido base).

**Estructura de componente recomendada en Figma:**
- `HeaderToggleViewGroup` (AutoLayout Row ButtonGroup Segmented tab right align generally atado al Toolbar top base filter sort).
  - `GridIconBtn` (Cuadraditos 4 icon asimilador malla general)
  - `ListIconBtn` (3 rayitas asimilador unificado a lista originaria formal)

**Variantes mínimas requeridas (`HeaderToggleViewGroup` selector de modo estado L-R base orgánico L-R active form):**
- `ActiveMode=ListView`
- `ActiveMode=GridView`

**Encaja mejor con:** Exploradores archivos tipo OS Finder clones cloud storages asiduos de ver listones y mallas de thumb nails general unarios e-commerce ricos visual form tienda Amazon clones origin form.

**Antipatrón más común:** Inyectar esta capacidad de UX rica bajo tres menús en "Mis configuraciones - Pantalla base origen Toggle secreto general" privando de usarlo in situ al origin de volar volando arriba a derecha de los Sort options filter en inmediatez plena y tacto un click in situ allí general del master toolbar list origin del Front form base al tiro visual.

---

## 7. Accordion
**Descripción:** Panel de módulos apilados verticales compactador encogible base y expandible a la petición local cliqueable de sus Títulos orígenes asimilados ocultadores progresivos desplegando lectura origen visual sin romper scroll masivo B2C densos L-R originarios a asimilables.

**Úsalo cuando:**
- Te enfrentas a densos mamotretos FAQs y dudas ayuda base densísimas general y textos infinitos legales donde abruma inmensa lectura total topes abriendo en sabana matando tu scroll L-R general origen asimilador base y ahuyentando leer B2C al user asimila y condensa cerrando.
- Diseñas barras laterales Filters Sidebars de ecommerces form densísimos origin "Categoria/Precio/Año" cerrados acoplados para encoger origen de listones bases visual al user B2C general asimilador de scroll y optimización densa asimila lateral a los expanders toggleables sanamente organizados apilables L-R sanos de origin general.

**No lo uses cuando:**
- Pretendes ocultarlo textos obligatorios "Pasos legales form origen forzosos firmar" que de omitirse generan deudas y problemas origin y base inútil al esconder lo que a priori debe legal asimilar lógicamente ver y destrozando su seguridad asimila general no ocultables legales origen base general abiertos siempre base.

**Estructura de componente recomendada en Figma:**
- `AccordionRootBox` (AutoLayout V con gap 0 a 1px divisoras bases stroke L-R horizontals unificadoras generales)
  - `AccordionItem` (AutoLayout V asimilador al L-R atado visual asimilo origin wrapper completo de row)
    - `HeaderClickable` (Bg hover origin suave titulo Bold origin Icono flechas carets V al L-R derecho base a expander).
    - `BodyExpandedText` (Text puro container padding form atado L-R origen visual L-R base oculta o Mostrada general a state asimilada base).

**Variantes mínimas requeridas (`AccordionItem` de base L-R visual estados de frontend iterados L-R form genéricos front):**
- `State=Collapsed` (Cerrado default Icon v down y texto oculto base nulo altura zero layer L-R atado formal inactivo form).
- `State=Hover` (Gris tenue cliqueador L-R base)
- `State=Expanded` (Abierto Flecha icon Up texto exposed unario y relleno padding base natural visual leyendo).

**Encaja mejor con:** Menús orígenes sidebar filters masivas B2B y E-Com asiduas origin, Base faqs secciones landing B2C generales originativas de lecturas dudas FAQ condensadores UI bases L-R listados anidadas a Settings subpages.

**Antipatrón más común:** Carecer de animación suavizada en código asiduas css `transition:all ease L-R` y soltar de un chispazo y pop robótico rudo base "Salto y estirón" espasmódico rompiendo el ojo originario general de user "me perdí de origen al explotar origen al saltón sin expandirse y resbalar L-R suave origen formal sano moderno B2C slide down animado asimilado general".

---

## 8. Timeline
**Descripción:** Bitácora visual con listones verticales unidos simbióticamente atados originarios con hilo o tracks L-R verticales unificando base de línea su cronologías históricas narrando origen asimilo la vida L-R y pasos en vivo base y progreso al sujeto B2C orígen L-R origin B2C base visual asimile form.

**Úsalo cuando:**
- Relatas o registras de auditorias bases quién hizo u operó de a 1 o qué cosas en asiduos documentos B2B origen logs. ("Creado -> Firmada -> Expulsado origin track base logs L-R").
- Trackeas orígenes logísticos paquetería B2C envíos "Pedido Asimilado Sale bodega Vuelo Aca orígenes ruta track temporal base" al Ecosistema Ecom general originario form y su track B2C asiduo visual.

**No lo uses cuando:**
- Formas ToDos y Checklists asiduos base inútil a origen "Lista 3 cosas de súper: Pan L-R Leche origin asimile form". Allí List Items Listón unario de Check L-R normal. Aquí en Time Lines el orden de origen temporal asiduo inmodificable atado L-R form orgánico a ataduras de tiempo vital L-R.

**Estructura de componente recomendada en Figma:**
- `TimelineRoot` (AutoLayout Vertical orígenes wrappers generales contenedores unidos list)
  - `TimelineEventRow` (AutoLayout Horizontal H center align left origin base)
    - `TrackVisualizerLeft` (Dots Circlitos de colores Status y Line unificadora bajante atada base stroke origen a bottom next L-R origin form).
    - `EventBodyRight` (Padding, Títulos H4 orígenes, DateTime badge tag y descripción avatar mini creador origin L-R L-C originario L-R body base flexed flex).

**Variantes mínimas requeridas (`TimelineEventRow` item iterado states asimiles origen L-R general front asimilador de estatus vida L-R estados):**
- `Status=Done_Green`
- `Status=Current_Active`
- `Status=Pending_Ghost`
- `IsLast=True` (Cortando asimilable el "palito e hilo line" de L-R visual colgando al infierno para sellar limpio y formal atado sin colas sueltas origen visual origin sano al L-R atado visual de terminación form orígen formalizado L-R visual).

**Encaja mejor con:** Control bases asimilados B2B Logs historiales y rastreadores Tiendas Delivery bases unificadores atados y Status Procesos origen Onboardings steps verticales orígenes pasos visualizaciones unarias L-R orgánicas origin forms.

**Antipatrón más común:** Ignorar y olvidar construir de origen la asimila la variante final `Last=True` dejando asquerosamente asimilado colgado el rabito y línea asidua apuntadora L-R a nada al fono blanco del app general destrozando la pulcritud L-R visual de "cerré orígenes del ciclo" del UI form y generando dudas tipo "Falta algo ahí por cargar form base roto visual general origin roto?".

---

## Árbol de Decisión para Patrones de Contenido L-R

No te equivoques y usa este algoritmo asimilable a orígenes para decidir el contenedor de tus bases UI listas a exhibir L-R L-C atado a todo diseñador UX formal L-R:

1. **¿Tus orígenes L-R datos son de estructuras formales rígidas métricas comparables base "Nombres, Fechas, Costos B2B origen exacto cruces y necesitas escanear columnas contra filas a ojos cruzados form asimilador filtrado y buscar asimiles orden de menor a mayor columnales base form?**
    * 👉 Sí de lleno: Usa **Data Table** matriz central cruzada de excels clones origin.
    * No: Continúa a asimilar 2 form.
2. **¿Tu fin único asimilado al ojo origen superior visual es dar y asimilar al directivo B2B general origin 1 único número atado titánico inmenso a ver al primer segundo de inicio (Tus Ventas totales resumen Top origin general base atado visual a un pantallazo originario sano y form asiduo L-R general)?**
    * 👉 Sí indiscutible: **Card Estadística / KPI** numéricos bases origin form.
    * No: Pasa orígen a asimilar L-R 3.
3. **¿La vida e hílo conductor de tu visual origen asimilador data L-R prioriza la narración e historia ordenadora cronológica temporal donde saber qué pasó primero o 3do paso logístico en la vida log general es su rey form asimilado L-R time trackers form?**
    * 👉 Sí a muerte: **Timeline** tracks base de hilos unificadores L-R forms historiales y paso origen L-R visual form base origin.
    * No: Sigue form origin 4.
4. **¿Existen altísimas bases densidades textuales ricas de 6 renglones form origin descriptions o bellísimas fotografías inmensas y grandes L-R atractivas a escanear a nivel y vista casual social exploratoria o e-commerces B2C catálogos general a atajos locales CTAs propios bases unarios comprar form asimiladores B2C L-R general de masas y fotos sanas form origin?**
    * 👉 Sí fotos gigantes y CTAs propios unarios: Usa las **Cards / Grid de Contenido** form L-R atados B2C Pinterest o Zara form origen B2B visual origin fotos hero densas origin ricas.
    * 👉 No, puras letricas cortinas origin atadas de menú, settings, inboxes base de nombres simples a escanear verticales puras listas de a 1 línea asiduas densas L-R ligeradas: Usa **List items** asimiles form orígenes mobile listas formales iOS clones generalizadores listón base.

---

## Tabla Comparativa y Diferenciadora de Casos

Conclusión al rey de la visualización cruzada y bases:

| Criterio | List View (Item) | Grid / Card | Data Table (Tabla Grid) |
|---|---|---|---|
| **Formato e Ideal L-R Form base** | Densos, rápidos textuales L-R verticales bases atados a mobile views originarios nativos. | Densidad Fotográfica, exploradora base hero lúdicas catálogos B2C visual form y asimetría form origin estética visual prioritaria L-R. | Numéricos B2B cruce de lectura horizontal vertical L-R matemáticos excels filtradores analíticos base duros L-R origen. |
| **Densidad en Pantalla L-R form origin** | Altísima, caben 15 a 20 listones unificados L-R. | Baja, Colapsa fácil L-R sanos de 4 a 6 por fold scroll screen L-R visual atados lúdicos grandes B2C. | Bestiales L-R, Cincuenta líneas rows atiborradas y 20 cols cruzando data-grids origin B2B financiero a data dump puro. |
| **Botoneras, Controles y CTAs L-R interactivos front** | Mínimo L-R, un flechita y clickar todo para entrar origin drill down bases L-R form y tap area form. | Riquísima independiente. Cada tarjeta porta sus origin L-R Button Adds "Like origin Favoritos L-R atados local L-C locales botones asimilados orígenes visual de action". | Centrales masivos "Batch checkers Multioles checkbox borrar masivas bases origin form". Y ocultos 3 puntos rows origen L-R visual. |

---

## Principios de Jerarquía Visual dentro de una Tarjeta Módulo L-R

Entiende la teoría top de cómo anidar los Z-Index form asimiladores de lectura ocular escaneo humano 1..2..3.. adentro originario de 1 tarjeta B2C form asimiladora B2B asidua rica L-R form original:

**Nivel 1 L-R : El Magnetizador B2C Form (Lo Primero The Hook origin L-R)**
*   **Destinación originaria visual:** Atraer con asimilados pesos brutales e impactos estéticos origen visual form al primer segundo L-R de pasada de scrolling inatento origin B2C y B2B general asimila el ojo origin de la tarjeta. L-C unificadores L-R visual top.
*   **Recursos Inyectados origen form:** La Media de Portada visual de foto "Zapatos rojos B2C L-R origen foto central top". El Gran Titular Base Heading Black Weight orígenes (Título del libro origen). El KPI de Pricing grueso "US$ 500 origin verde vivo L-R".

**Nivel 2 L-R: El Subcontextual de aclaraciones origin L-R de soporte L-C (Lo Secundario form L-C)**
*   **Destinación originaria visual:** Desambiguar el titular en caso de L-R origen tener un subgénero L-R o precisar aclaración rápida L-R L-C lector asiduo que frenó ahí form.
*   **Recursos Inyectados form:** Autores base asimiladores grises opacos asimilables (Por: Jose Autor Origin), Los `Subtitle text de tags L-R "Categoría A"` atados y atajos asimilados a Descripciones de Base truncadas `Body Párrafos origin asimilados a 2 lines de Ellipsis text ... L-R`.

**Nivel 3 L-R: Creadores Atajos Datos de Acción finalizadores C-R L-C visual base.**
*   **Destinación:** Terminar todo origin L-R origin visual L-C rematando al bottom en un form asimilador click B2C y datos asiduos marginales C-R L-C origin form origen.
*   **Recursos Inyectados:** Fechas marginales dates "Lunes 18 base gris L-R atado margin" Status Chips verdes vivos "L-C En Stock Inmediato". Y los CTA "Botón Azul origin Leer artículo origin L-R Button atado al bottom L-C CTA origin base formal a salida asimilada CTA primary base L-C form L-R atado botonera base inferior".
