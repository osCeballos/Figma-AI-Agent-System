# Formularios e Inputs (Forms & Data Capture Patterns)

Este archivo documenta los patrones de interfaz especializados en la captura de información, encuestas, ingreso de parámetros de sistema y recolecta de datos del usuario, definiendo los controles precisos para cada tipo de requerimiento o validación.

---

## 1. Text input
**Descripción:** Campo de texto convencional de una sola línea utilizado para recolectar respuestas cortas, nombres, contraseñas o datos alfanuméricos estandarizados.

**Úsalo cuando:**
- Solicites respuestas previsibles en formato breve de pocos caracteres (nombres, títulos, códigos).
- La información requiera teclear desde teclado físico o móvil y no amerite saltos de renglón o párrafos.
- El ingreso de información cuente con máscaras visuales de contención (tarjetas crédito, números de teléfono).

**No lo uses cuando:**
- Requieras explicaciones elaboradas o descripciones muy largas donde todo el tipeo rebozará el ancho visible ocultándose y rompiendo el hilo visual natural de quien redacta de un solo tirón asfixiante general.
- Lo que vas a capturar proviene obligatoriamente de un listado estricto cerrado institucional inmutable donde el formato de elección libre acarreará fallos gravísimos de base si escribe o usa sinónimos y erra a tu nomenclatura obligada en tu BD (Emplea ahí `Select`).

**Estructura de componente recomendada en Figma:**
- `TextInputContainer` (AutoLayout Vertical)
  - `LabelText`
  - `InputBox` (AutoLayout Horizontal, Stroke 1px radiado suave esquinas y bg neutral o claro contrastante a web base)
    - `LeftIcon` (Opcional ayuda rápida visual ej: un sobre pequeño al mail originado form base y al tiro visual al ojo)
    - `Value / PlaceholderText` (Flex Fill container adaptativo natural llenado)
    - `RightIcon` (Opcional ojito revelador de clave en contraseñas o cruz de clear para limpiar directo input escrito)
  - `HelperText/Error` (Opcional texto miniatura de validación bajo borde abajo)

**Variantes mínimas requeridas (`InputBox` contenedor interactivo principal de la familia general base):**
- `State=Default`
- `State=Focus` (Acentúa y engruesa el borde contorno iluminado)
- `State=Filled`
- `State=Error` (Color y contorno carmesí rojo o anaranjado vibrante alertando del fallo semántico)
- `State=Disabled`

**Encaja mejor con:** Sitios de inicio de sesión genéricos, Pasos base y de registro en Saas, Plataformas B2C de ingreso inicial perfil social base generalizado y cajas simples de direcciones base.

**Antipatrón más común:** Omitir colocar el texto permanente `LabelText` superior o guiador sustituyendo la información de lo que pides exclusivamente dejándolo confiado al tenue y transparente texto `Placeholder` interno, el cual al teclear 1 letra desaparece olvidando instantáneamente la guía de qué solicitaba exactamente antes allí.

---

## 2. Textarea
**Descripción:** Recuadro visual o control abierto al texto extendido y multilínea ideal parra redactar contenido de párrafo fluido y explicaciones robustas.

**Úsalo cuando:**
- Precises aportaciones complejas ricas u opiniones extensas descriptivas (Ej. Detalle de los fallos base soporte).
- Esperas saltar repetidamente el renglón natural de lectura para ver asimilando simultanea dos, tres o cuatro párrafos y que estén a la vista central orgánica.
- Requieras proveer notas médicas extraoficiales asimiladas largas libres base en el form registro tuyo sin un limite cerrado duro visual corto y claustrofóbico al editor texto y asimilable a su uso sin perder noción espacial general en cajas chicas.

**No lo uses cuando:**
- El input natural no sobrepasa las tres a cinco palabras breves máximas tecleables asimiladas desperdiciando brutal pantalla en blanco rellenado a nada un vacío sobrante en pantalla.
- Cuando exijas un control tan enorme o formal donde requiere en realidad de un WYSIWYG base HTML enriquecido y editable puro para blog a color negrita o enlaces general con su Toolbar rica (Ahí emplea el Input Rico Editable HTML formalmente base).

**Estructura de componente recomendada en Figma:**
- `TextareaContainer` (AutoLayout Vertical general)
  - `LabelText`
  - `TextBox` (AutoLayout alineado a la visual alta Top-Left fija expandible verticalmente abajo la caja Box)
    - `TypedText/Placeholder` (Opciones de fill total resguardando los espacios multilínea con hug content text o absolute fill según necesidad en figma)
  - `HelperText / CharCount` (Opcional 0/500 limitador de longitud letras en base contable asimilado rápido inferior allí mismo).

**Variantes mínimas requeridas (`TextBox` base formal visual estado interactivo):**
- `State=Default`
- `State=Focus`
- `State=Filled`
- `State=Error`
- `State=Disabled`

**Encaja mejor con:** Blogs creadores CMS generales, Mesas de ayuda Tickets y envíos contacto web asimilables generales al soporte B2B asimilador cliente empresa libres bases de consultas generales, anotaciones de perfil.

**Antipatrón más común:** Congelar sus redimensiones y construir textareas súper pequeños rígidos no arrastrables obligándole a depender obligatoriamente de una barra microscópica deslizable a un lado infernal y rompiendo la re-lectura constante originándose del bloque en miniatura su enojo constante que asfixia redactando su requerimiento técnico que necesita ver y corregir amplio a simple vista sin scroll frenéticos generalizado cortos visuales a los errores.

---

## 3. Select / Dropdown
**Descripción:** Interruptor o selector compacto expansivo en clic base que congrega opciones mutuas excluyentes pero que se alojarían demasiadas esparcidas en listas y se aglomeran desplegando base a un listado acotable y cerrable base cerrado y simple a escoger 1 exclusivo.

**Úsalo cuando:**
- Existe una única opción admitida a ser elegida y cuentas de entrada con bastantes opciones excluyentes entre sí limitando su espacio vertical exterior donde se colapsarían más de 6 agrupadas en Radio Buttons gastando 10 líneas útiles puras general del Front (El select te devuelve todo tu layout cerrado a 1 sola línea maestra compactada general).
- La información de categorías es inamovible (Idiomas base estáticos, Listado de Provincias asimilado estable cerrado a 1 seleccionada).

**No lo uses cuando:**
- Hay tan pocas opciones reales (ej 2 o 3 en total puras), obligando a presionar forzosamente de modo invisible a las de fondo, y abrir al pedo para descubrir la base ocultista en algo que 2 circulitos de Radio Button exponían directo sin malgastar 1 tap extra al clic (Transparencia visual inmediata y al tiro y asimilado de forma directa veloz y eficiente a la simple vista natural sin esfuerzo mental originado inicial veloz).
- El listado excede a cientos eternos obligaría buscar mil lerdos de scroll. Emplea aquí Combobox o Autofill o base buscador local adyacente general y sugerido allí selector base interactivo veloz texto y predictivo en su lugar asimilador.

**Estructura de componente recomendada en Figma:**
- `SelectContainer` (AutoLayout V general base contenedor principal orgánico)
  - `LabelText`
  - `SelectTrigger` (Apariencia tipo Box tipo texto pero accionador cursor click base al clickeable)
    - `ValueText`
    - `Icon Chevron Abajo` (Símbolo de que expandirá opciones)
  - `DropdownMenuList` (Layer Overlay absoluto asimilado con base las rows Opciones a escoger click local base).

**Variantes mínimas requeridas (`SelectTrigger` de visualización previa estado interactivo priorizado base general base front general base normal orgánico):**
- `State=Default`
- `State=Focus/Active`
- `State=Filled`
- `State=Error`
- `State=Disabled`

**Encaja mejor con:** eCommerce Form general, Selectores Moneda asimilables a pasarelas o Ajuste Países en Checkout generales asimiladores selectores idiomas asimilados web footer base formales estandarizados mundiales base cerrados predefinidos listados limitantes.

**Antipatrón más común:** Ocultar dos opciones simples de "SÍ / NO" bajo clics base desplegables misteriosos asiduos obligando hacer interacciones dobles innecesarias e ignoradas no lógicas bases en un lugar de 2 opciones tontas.

---

## 4. Multi-select
**Descripción:** Un input extendido y avanzado (o combo) adaptado formal a seleccionar apilando varios elementos base visual con tags desde una inmensa base ofertada de posibles asimiladas base múltiples a una base a seleccionar sin tapón lógico binario individual general y compartibles todas al lado de otra a una la vez base al final de su sumatoria acumulada visual adjunto general unificado local a la caja unida asimilable al mismo grupo de la entidad originaria de la caja matriz de donde partimos general de sumatoria unida asimilable conjunción a todo conjunción masivo aglutinado a su interior de visual formal final.

**Úsalo cuando:**
- Admites que tu usuario escoja 1 y más infinitos asimilables a múltiples selecciones base en conjunto para la misma fila atada única a agruparlas ("Añadir 3 habilidades", "Etiquetar a 5 personas").
- Almacenan demasiadas categorías listadas que impiden alojar y poblar tu panel form general de inmensidad de Checkboxes apilados masivamente ensuciándote todo tu flow global base.

**No lo uses cuando:**
- O una es blanca, u otra negra excluyente de la de al lado a morir donde elegirás al asimilarlas una radio selection y la opuesta general rompe el proceso lógico natural exclusivista real original conceptual natural de "no elegir las 2 cosas imposibles físicas del problema asimilado a base exclusivistas formales unarias absolutas limitantes unificadoras definitivas bases en código no compartidas" .

**Estructura de componente recomendada en Figma:**
- `MultiSelectBoxContainer` (AutoLayout form Vertical principal base)
  - `LabelText`
  - `InputBox` (Wrap layout o de listado VH interior asimilable agrupador flex base)
    - `TagChips` (Grupo horizontal pill base con nombre base y x para eliminar visual local seleccionados chips)
    - `TextPlaceholder/Search`
  - `DropdownOptionsList` (Box Absolute con Listitems y checkmarks V a cada local pulsado o Checkboxes internos)

**Variantes mínimas requeridas (`InputBox` area de muestra):**
- `State=Default`
- `State=Focus`
- `State=Filled`
- `State=Error`
- `State=Disabled`

**Encaja mejor con:** SAAS base Enterprise B2B de filtros conjuntos apilables cruzados inmensos asimilados general en data dashboards y etiquetas categorizadoras ricas base CMS Tag generalizadores a productos general y categorizaciones base.

**Antipatrón más común:** Guardar ciegamente la data como simples palabras comas "Azul, Rojo, Negro" rompiendo e integrándolas apiñadas e infructuoso impidiéndole borrarlas individualmente cliqueando a 'X' de una manera modular chip asimilador nativo actual cómodo destruyéndole asimilado por edición torturante manual a mano allí editando tecleando comas en medio asfixiado textual a lo 2005 asimilados textual a mano asimilable sin separadores claros de objetos nativos chips encapsulados naturales 1 por uno de lo digital general visual base nativa al siglo a la edición fácil modular general.

---

## 5. Checkbox
**Descripción:** Pequeño cuadrado asimilable clickeable dual u opcional base para afirmar algo al marcar su V asimilándolo verdadero u apilando para conjunción paralelos al check uno por uno libres general a marcarse variados al elegir sin afectar a sus vecinos generales asimilables colindantes originarios adjuntos a la lista general base conjunta visualmente expuestos directo simples bases y asimilable a directo click simples binarios formales.

**Úsalo cuando:**
- Admites opciones duales claras apartadas (Ej: "Acepto sus Términos formales legales originarios confirmatorio opt in").
- Disfrutas permitir que seleccionen cinco opciones simultáneas entre 8 posibles directamente e independiente ("Elige las carnes que quieres en el sándwich libres" conjunción de variados a la vista rápidos a un toque natural en el papel base al listado corto sin ocultar opciones originando inmensidad selectores).
- Almacena acciones múltiples en bases masivas de celdas para asimilarlas globales base filas data general "Seleccionar todo".

**No lo uses cuando:**
- Las dos o más asimilables condiciones a la vista en lista son excluyentes la una matando o contradiciendo al la de al lado y donde una anula real imposibilidad física general base de "o lo es un usuario final, o lo es Empresa Corporación dual y solo asimilada una a ti formal final única unarias exclusivas base radio button".

**Estructura de componente recomendada en Figma:**
- `CheckboxRowLabel` (AutoLayout Row Horizontal Center)
  - `BoxIndicator` (16x16px o 24px Box Radius 2px/4px general simple cuadrado asimilador y Stroke colorizado asimilable gris)
    - `CheckVector` (V u check visual blanco en el hueco general base nativo color)
  - `TextTitle`

**Variantes mínimas requeridas (`BoxIndicator` general interactivo asimilado visual de los estados intermedios nativos formales genéricos en componentes puros a base):**
- `State=Default` (Vacío blanco apagado sin toque uncheck natural inicial)
- `State=Focus`
- `State=Filled` (Background tintado base acentuado semántico verde/azul primario y V icon visible tildado base activo asimilador al éxito y seleccion visual y cognitivo rápido asimilando).
- `State=Error`
- `State=Disabled`

**Encaja mejor con:** Términos de condiciones en Onboarding general, Data Tables SaaS selecciones parciales masivas eliminables, Configuradores rápidos Ajustes de apps genéricas de uso diario y E-commerce filtros base de tiendas laterales checkbox.

**Antipatrón más común:** Fabricar el área clickeable reducida y exclusivamente obligada miniatura local al microscópico de su cajita base desasociada impidiéndole hacer clic encima largo texto amplio general al lado "Label" que describe qué de ese check rompiendo base lógica nativa táctil de áreas Hit base masivas ergonómicas generales asimiladoras a facilitar usabilidad.

---

## 6. Radio button
**Descripción:** Control ovalado originario base o circular agrupador de listados visualizador que exige e instruye férreamente a las bases lógicas una exclusiva marca forzada matando asimilada una por la otra y de-seleccionando obligada a su originarios hermanas adyacentes al instante sin asimilaciones dobles a bases compartimentadas limitando a una elección general natural pura base exclusiva.

**Úsalo cuando:**
- Presentas encrucijadas y selecciones "o eres esto A de aquí puramente excluyente o del lo otro B y jamás los 2 a base cruzadas combinando conjuntos no lógicos imposibles e inválidos en datos (ej. Envío Expres 20$ versus base o general Gratis simple unarias opciones base obligadas excluyentes y decisivas finales) general de listón a tomar base formal y 1 nada mas al final."
- Compruebas que limitas tus enumeraciones asimiladas a menos de cinco o muy seis para exponer asimilables visibles y en vista clara rápida con decisiones obvias y base naturales asimiladas fáciles sin requerir menús colapsados extra oscuros ocultos.

**No lo uses cuando:**
- Tienes demasiadas a listarle de opciones más base doce base veinte eternos haciendo infumable general listas interminables al pobre hombre base lector destrozado general (Usa el Select) formales infinitos.
- Cuando no excluyan nativo natural si marcas uno o más opciones libres (donde asumes Checkbox).

**Estructura de componente recomendada en Figma:**
- `RadioOptionRow` (AutoLayout H al centro alineados a 8px hueco)
  - `RadioRing` (Radius redondo circular de borde 1px gris neutro stroke 100% redondez a base de figura pura circular forma formal e inequívoca distintiva al box base check cuadrado asimilable general a forma circular única y de su exclusividad visual clásica asimilada por internet histórico visual base general de exclusividad por forma circular).
    - `DotInner` (Puntillo gordo interno rellenador de marca asimilado activamente centrado base de color o check local base).
  - `TextLabel`

**Variantes mínimas requeridas (`RadioRing` y de asimilado base genérico en componentes puro iterables):**
- `State=Default`
- `State=Focus`
- `State=Filled` (Circle relleno y el Inner de contraste vivo señalador único elegido y central base de activación primario nativo visual al usuario y claro asimilado cognitivamente).
- `State=Error`
- `State=Disabled`

**Encaja mejor con:** Checkout selecciones de pasarela originadas únicas bases métodos pagos (CC vs Paypal), Configurantes base y preferencias SaaS general de tema formal Claro u Oscuro unario a 1 natural base asimilada.

**Antipatrón más común:** Colocar una hilera inmensa y no definir un "Default Selected" original natural que provea de opciones un paso asimilable al código sin bugs si olvidan enviar nada a la BD original. Todo un buen radio-button set precisa su default option preseleccionada base asimile al nacer origen formales sanos desde visual originaria a su de-selección por otra distinta pero nunca todas blancas muertas asimiladas a sin elección y a tristes a ciegas originarias o de que te arrepientas un clic impidiendo poder de-seleccionar al dar de cuenta a click porque los Rados botonos puros matan deselección unarias manuales obligando atascados sin escape (usa opciones de "Ninguno" default option allí base clara como salidas asimiladas bases formales form natural orgánico sin rehenes).

---

## 7. Toggle / Switch
**Descripción:** Interruptor deslizable visual on off base táctil deslizador originador interactivo emulando base análoga general de prendido asimilando la interacción inmediata de acción y reacción al instante del front-base originaria general global y de cambio persistente sin form de "Save".

**Úsalo cuando:**
- Precises mutar preferencias o habilitadores ON/OFF estáticos del app (Modificaciones directas al instante local visualizado como el Tema Oscuro prendido real general base inmediato sin formales submit botón).
- Generas impacto general "Save Data al momento on server de un servicio" asíncrono y de confirmación tácita a tiempo real originando el resultado asimilado ya completado y grabado general base in situ general (Wifi ON de Ajustes).

**No lo uses cuando:**
- El estado y dato es una recolección masiva como partes de una mega gran matriz base hoja encuesta finalizada gigantesca y tu dato requiere todavía mandarse o no tiene impacto a nada central de ajustes hasta que se presione al pie tu Mega Botón Submit "Guardar Cambios generales" (Para recolectar con pausas asimiladas emplea Checkbox al base natural y formalidades nativas estáticas asimiladas al click y validación asíncronas no instantáneas del botón guardar form centralizado general formables estáticos al front visual no interactivo inmediato slider visual falso asimilador toggle equívocas confusiones mentales del diseño.

**Estructura de componente recomendada en Figma:**
- `SwitchContainerRow`
  - `TitleAndDesc` (AutoLayout Vertical)
  - `SwitchBasePill` (Cápsula alargada Full rounded Oval base nativa stroke y bg gris claro apagados formales neutras inanimadas default visual origin)
    - `DotThumb` (Esferita blanca Absolute o flexed left pos originaria a la sombra y relieve simulando asiladora base slider pastilla base física de presionar natural general sombra difusa atada a ella misma en left).

**Variantes mínimas requeridas (`SwitchBasePill` formales y visual de front de interacción a los estados formados a asimilados formales interinos de estado base natural):**
- `State=Default` (Pill gris y Thumb left base)
- `State=Focus`
- `State=Filled` (On / Thumb a su right y Color Primary BG pill encendido visual green/blue vivo marcante a la opción prendida y vibrante asimilado).
- `State=Error`
- `State=Disabled`

**Encaja mejor con:** Paneles Setting de móviles App visual central iOS/Android configurables ajustes generales PWA de configuraciones personales de notificaciones push de base directas instantáneas, Panel lateral dashboard perfiles SaaS generales rápidos.

**Antipatrón más común:** Retener el comportamiento base impidiendo el guardado inmediato finalizando e induciéndole falsas de esperanzas visual al encender y hacerle ir tontamente hasta una esquina absurda a cliquear guardados "Guardar cambios a tu perfil" a su "Toggle Modo Dark" sin sentido porque asimiló por el switch físico falso asimilador su respuesta real que su accionar visual encendía la confirmación tácita visual a ciegas.

---

## 8. Date picker
**Descripción:** Un input text asimilado y apoyado sobre un desplegable pop-up super calendario enriquecido gráfico inyectado como ayuda a la entrada estructurada asimilada con grillas interactivas temporales numéricas mensuales y días, fijando formato para el guardado.

**Úsalo cuando:**
- Acoplas y blindas al código para recolectar las reservas base complejas de estadías hoteleras a tu servicio (Rangos de fin a inicio).
- Forzas calendarios estrictos para unificados asimile y obligues al no errar un "Viernes Festivo" obligando limitando su desvanecimientos los grisados deshabilitados formales impidiéndoles visual y funcionalmente accionar a citas inútiles generalizando el error imposibilitado de facto.

**No lo uses cuando:**
- Su pregunta sea absurdamente rápida obvia y lejana en base al origen del año nacer univariante (ej "De que año se egresó base"), ya que los navegadores odian buscarte 30 años 42 meses pasándole y bajando flechitas lentas como tortugas por un calendarios en formato tortura lenta impidiendo typear al instante "2024" formales al asimilar al teclado nativo y salvando vida segundos valiosos del sujeto destrozado base del click tortuoso absurdo "mes a mes y años click click click 500 clics a 1910 nacido abuelo general origen al input erróneo form. Un `Select` base o Text Input puro ahí era el rey rápido.

**Estructura de componente recomendada en Figma:**
- `DatePickerInputBase` (El input y la Lable al top base text input gemelo inicial form)
  - `RightIcon Calendario` (Botón detonante claro de indicación visual cognitiva asimiladora base a su uso y pop.
- `CalendarDropdownBox` (Overlay absoluto cuadrilla mensual a 1 o 2 rows base y sus Headers Flechados temporales interactores en V o H auto layout y filas base semanales 7 días y botones interactivos a los dias y sus hoy `Today` highlights acentuados visual local marcadores originarios bases sanas a la lectura mes general en grid pura sin fallas base a rows y celdas base)

**Variantes mínimas requeridas (`DatePickerInputBase` form inicial visible estados genéricos de la caja contenedora origen asimiladora visual):**
- `State=Default`
- `State=Focus`
- `State=Filled`
- `State=Error`
- `State=Disabled`

**Encaja mejor con:** Checkouts logísticos pasajes de aviones form origen, CRM recordatorios de alarmas eventos B2B nativos general al SaaS general analítico gráfico e-commerce rangos dashboard.

**Antipatrón más común:** Anular totalmente a los usuarios que teclean ágil bloqueando por hard code su Type Text obligando al form y forzándolo al calvario torturador base a presionar del click con mouse matando usabilidad de poder escribir 11/12/2045 en formato libre y agilizar con teclado asimilador sano todo data-entry de profesional base arruinando con bloqueos su mouse obligado forzado base general base del front.

---

## 9. Search input
**Descripción:** Entrada contextual de localización textual rápida o explorador unificado con predictivos inteligentes dotados y de auto-sugerido en vivo form para recuperar filtrando bases nativos de un data set en un universo catálogo masivos masivamente.

**Úsalo cuando:**
- Ocurren aglomerados incontables productos (Shop), usuarios masivos gigantes de empresa SaaS que listar sin búsqueda sería irreal o inabarcable al ojo a un año asimilador base y de forma inviable de uso natural sin filtros.
- Presentas a tu layout de Navbar master tope superior e indispensable a modo universal buscador general integrador en base que de soporte a accesos y recursos unificados omniscientes en la nube a cualquier rincón al vuelo base de búsqueda base asimilable central predictiva formal rica predictiva y autocomplete general de resultados bases unificados directos atajos veloces.

**No lo uses cuando:**
- El contexto acota visual al instante tus listas y todo cabe y asimilas al vuelo rápido una tabla inofensiva de 8 celdas totales orgánicas donde tu búsqueda ocupará 500 px asimilando y matando pantalla en base inútil y estorbar donde leer 5 es más rápido asimilando rápido tú y tus ojos.

**Estructura de componente recomendada en Figma:**
- `SearchContainer` (AutoLayout Row Box Input visual origin form base)
  - `MagGlassSearchIcon` (Izquierda indiscutible de su ícono o Right top y search a lupa incuestionable a buscar)
  - `TextSearchTyped` (El contenido flex auto huggen)
  - `RightClose` (Solo y únicamente al haber texto un icono X limpiador form base).

**Variantes mínimas requeridas (`SearchContainer` asimilable en el visual base frente form):**
- `State=Default`
- `State=Focus`
- `State=Filled` (Y Muestra el botón X para clear input box asimilador nativo).
- `State=Error`
- `State=Disabled`

**Encaja mejor con:** MarketPlaces Ecommerce Tops Navbars universales, Directorios de usuarios SaaS gigantes configuraciones bases Tablas densas a tope en la fila Top right de control tabla de registros data grid puras formales y masivas generales.

**Antipatrón más común:** Esconder al Search atrás del click miniatura inicial lerdísimo iconito lupa, obligándolos a tener que expandir inútilmente haciendo un tap ciego a tu navbar general y destrozando en mobile UX sin tener expuesto en barra lista la barra asimiladora text pura original desplegada perenne general y libre asimiladora rápida inicial formal y 1 click directa siempre visual asimilando su fin originario sin clicks obligados para ver donde escribir base absurda 1 ocultar a la UX directa.

---

## 10. File upload
**Descripción:** Control rico form drag y base nativa asimiladora en contenedores clickeables dedicadas a gestionar las subidas de bins, carpetas y fotos files y a la confirmación de la carga, su peso, estados o la cancelación del mismo en interfaz directa local.

**Úsalo cuando:**
- Contas la urgencia o datos asiduos de respaldos como adjuntos ("CV.pdf", Avatar "Imagen.jpg" y formalidades legales PDF identificables al proceso del fomulario como obligatorios al originar tu requerimiento del KYC, Identidad a la base empresa form general).
- Debes simplificar y dotar interacciones super simples habilitadas a zonas "Arrastre aquí la foto mágico drop y suéltelo drag and drop sano libre nativo ágil rápido formales base al origen a su OS operativo ventanas integrados nativamente general" minimizando dolores clicks a usuarios avanzados de escritorio directos form.

**No lo uses cuando:**
- Requieres al final y fin general tan sólo recolectarte con las URLs de la "la nube de otros" (un repo de su web git ajeno o url pública de Linkedin libre formal ajena). Allí pide el input `Text Input puro` y que adjunten los links textual directos asímilandolos rapidos no exigiendo las basuras descargas temporales tuyas subir binarios redundantes tontamente en inútil al originar datos dobles lentos formales base y lentitud server propio inútil form.

**Estructura de componente recomendada en Figma:**
- `UploadZoneDropArea` (General box Dash lines outline dashed y color semi transparent de fondo o neutro light para interactuar con fondo nativo suave)
  - `IconCentral` (Sube Clip flechas base claras origin sube nube asimilable directa cognitivo top)
  - `LabelText` ("Suelta al fin y Drag Files acá...")
  - `List/GalleryFilesRow` (Si admite Múltiples asimila al finalizar abajo del box card de los 3 pdfs subidos con miniatural peso texto base '2.4mb y su cruz roja 'X' a eliminarlos antes de mandar salvar general originario al back).

**Variantes mínimas requeridas (`UploadZoneDropArea` iterado en estados visuales reales cognitivos base genéricos simulador interino):**
- `State=Default`
- `State=DragHover` (Tintura y fondo sombreado engrosando dashed lines interactivo verde vibrante 'soltar ahora!')
- `State=Filled`
- `State=Error`
- `State=Disabled`

**Encaja mejor con:** Documentales portafolios Creador gráficos bases CMS gigantes repositorios Drive clon app generales Onboardings financieros bases y Soporte técnico incidencias "Sube captura la imagen" generales y originarias.

**Antipatrón más común:** No evidenciar jamas asimilándolo a priori las limitaciones de cuotas o de formatos admitidos form originando una esperanza destruida por chocar a los dos minutos y medio subiendo esperanzado tu PNG y leer el error rojo "SÓLO PDFS base de 1MB permitidos infame e inútil perdiste tu asimilador minutos", dejándoles sin previo alerta y rompiendo tu experiencia dolorosa del formulario local origen visualizado oculto secreto de backend fallido originario no avisado en interfaz del Upload zona texto helper previsor sano.

---

## Principios de Layout y Diseño de Formularios

**1. Una Columna vs Dos Columnas**
- **Prioridad ABSOLUTA: 1 Columna Vertical** (Apoyada y probada al ser humano base de visión a escaneo veloz y natural zig zag descendiente y Lector ocular superior L-R vertical asimilando base recta libre y rápida final evitando cruces y cansancios al escaneador y lecturas del data-entry rápido y sin pérdida de contexto formal natural top down visual general).
- **Excepción 2 Columnas:** Limita su agrupación contigua paralela a horizontal base y lado a lado `SOLAMENTE` cuando los datos de pares contiguos se unifiquen por una innegable hermandad conceptual irrompible asimilable unificado originario del bloque a entenderlos general ("Nombre contiguo lado Apellido" / o un "Zip/C.P lado de tu Provincia País" general de campos atados conceptualmente juntos unificados asimilan y no molestan lecturas transversas erróneas rompiendo lógica base general sana unificada conjunta formal).

**2. Posición de Etiquetas (Labels)**
- **Top (Arriba):** Rey absoluto de base general en usabilidad general escalabilidad y Responsive Mobile donde el 99% será celular tu lector sin asfixiar o cortar las líneas bases y garantizando el foco visual natural orgánico limpio universal base del siglo y general en todo layout universal sano y nativa veloz base.
- **Left (Izquierda):** Ideales pero únicamente circunscritas a Paneles de Tableros Desktop inmensos fijos a usos técnicos B2B "Data Tables Densos de Settings Complejos Administrativos fijos Desktop general base no escalables limitados form densos de Settings". No asimilan jamás responsividad sana rompen todo su layout mobile general atascados en espacio estrecho visual form asimilador lateral asimétrico rompiendo lecturabilidad adaptativa universal general en móviles al 100%.

**3. Longitud Guiada (Anchura)**
- La física e ilusión visual cuenta: No ensanches colosales 100% full width `InputBox` para alojarle campos ridículamente diminutos numéricamente o atómicamente breves ("Eliga Zip 4 números miniatura y caja infinita blanca absurda asusta e intimida visual local base error perceptiva cognitiva a dudas"). Acota el Ancho form asimilado de forma proporcional y al sentido de la longitud asimilada de su natural respuesta instando control visual amigables certero unificador de respuesta sana.

**4. Agrupar la Información Visual en Sets Lógicos**
- Al superar 6 campos globales form divide y secciona inteligentemente organizando por bloques conceptuales o secciones ("Info Personal" -> raya divisora o espacio -> "Tu Billing Bancario" base) originando tranquilidad y separaciones claras orgánico al lector ocular evitando infinitos sábanas asfixiantes interminables puras sin descanso visual en formulario.

---

## Árbol de Decisión: Checkbox vs Radio vs Toggle

Unifica el criterio para recoger opciones guiándote sin dudar eligiendo tus patrones:

1.  **¿La interacción debe detonar mutación instantánea real sistémica base sobre su vista en el Front App guardada sola al momento en caliente (Ej. pasar tu Theme Light a Noche y aplicarse a oscuras toda al segundo vivo real)?**
    *   👉 Usa un **Toggle / Switch**.
2.  **¿Tienes que obligatoriamente lograr recoger solo excluyentemente 1 respuesta sola única impidiendo opciones a su elección contiguamente y son listado breve visible de asimilar 4 opciones directas leíbles del menú base cerradas imposibles conjugarlas (Ej. Pago Efectivo vs Pago Tarjeta puras)?**
    *   👉 Usa un **Radio button**.
3.  **¿Estás solicitando permisos pluralizados, aprobaciones combinables diversas a opción del autor y de selección libres y dispares o unitarias booleanas asimilables de legalidad que combinan general libres o independientes ("Suscribirse Y Confirmado OK Términos bases general y no exclusivos independientes al fin a ser confirmables")?**
    *   👉 Usa un **Checkbox**.

---

## Estructura Recomendada de un Formulario Completo

Ordena tu front form originario a esta anatomía idealizada natural base al UX maestro visual:

1.  **Títulos y Subtítulos Centralizados (Header Title):** "Registra tu nueva organización y perfil form inicial general descriptiva clara y directa base".
2.  **Top Global Alertas Master (Inline Alert general Top):** Avisos supremos de estado roto error asimilados previos globales top alert o banners inyectadas base a fallas de servicio general del backend de todo "Servidor no guardará asimile o prevé falla".
3.  **Agrupaciones form Lógicas Clusters form (Data Box Groups):** Subdivisión por Bloques Asimilados base `Contact Info` y los campos de input bases y form abajo asimilado a una única col L-R natural escano ordenado.
4.  **Botonera Final CTAs y Area Footer Action Base (Zone Final Inferior Bottom):**
    *   **Acción del Botón Primario Dominante ("Guardar Todo", "Enviar y Finalizar"):** Destácale a la derecha o Izquierdo base sólido y `Fill` primario macizo de color llamativo o Full Width ancho total en tu versión y variante adaptada Mobile natural de fácil alcance nativo inferior dactilar y tap pulgar bottom app nativa y dominante general atenuador foco asimilado absoluto general natural form.
    *   **Acción Secundaria Pasiva base y evasiva Asimiladora ("Cancelar base salir", "Retroceder Atacar Form general" abandonando general orgánico form):** Presentalo adosado adyacente junto al primario sutil tenue Outline border line o Text link natural secundario grisado opacado secundario sin opacar al jefe primario ni competir ni robar miradas colores brillantes o semánticos a evitar fallos fatales dactilares de enviar a la basura el formulario general apretado accidental el de salir del formulario base "cancel" accidental confundidos color generalizado.
