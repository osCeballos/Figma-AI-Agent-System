# Overlays y Diálogos (Overlay Patterns)

Este archivo documenta los patrones de superposición, ventanas modales y contenido flotante para la interfaz de usuario.

---

## 1. Modal de confirmación
**Descripción:** Un diálogo bloqueante que exige la atención y confirmación explícita del usuario para una acción crítica, a menudo destructiva.

**Úsalo cuando:**
- El usuario va a realizar una acción irreversible (ej. eliminar datos o cancelar una suscripción).
- Existe un riesgo importante económico o de pérdida sustancial.
- Es indispensable informar sobre las consecuencias exactas antes de que la acción sea procesada y completada.

**No lo uses cuando:**
- Se trata de notificar información sobre un desenlace sin gravedad (usa Toast / Snackbar).
- La acción cuenta con un medio simple para deshacerse o restaurar como la existencia de una papelera rápida.
- Como fórmula publicitaria para interponer ventas forzadas al inicio del recorrido del perfil, distrayéndolos.

**Estructura de componente recomendada en Figma:**
- `ModalWrapper` (Background Overlay, color negro/neutro con opacidad)
  - `DialogBox` (AutoLayout Vertical, centrado en pantalla, shadow profunda visible)
    - `Header` (Opcional Icono Alerta + Título Principal)
    - `Body` (Texto descriptivo del impacto directo de la acción)
    - `Footer` (AutoLayout Horizontal alineado a la derecha: Cancelar + Botón Destructivo Confirmar)

**Variantes mínimas requeridas (`DialogBox`):**
- `Type=Destructive`
- `Type=Informative` (Si aplica para alertas estándar)
- `HasIcon=True/False`

**Encaja mejor con:** Plataformas SaaS, Herramientas de Administración de BDs, Entornos E-commerce en eliminación de artículos.

**Antipatrón más común:** Emplear etiquetas vagas en los botones ("Sí", "No", "Aceptar") en lugar del verbo descriptivo preciso de la acción como ("Eliminar cuenta", "Conservar cuenta").

---

## 2. Modal de contenido
**Descripción:** Ventana centrada superpuesta enfocada a interacciones acotadas y rellenado rápido de ciertos datos que no ameritan su página web única.

**Úsalo cuando:**
- Vas a recabar pocos datos (menos de 4 o 5 inputs) interrumpiendo fluidamente sin arrancar la página atrás por los suelos del contexto en la memoria a corto plazo visual.
- Permites la creación o edición aislada de una entidad hija, donde su existencia es un trámite directo para un logro local.
- Necesitas invitar a un usuario a tu grupo empresarial, de un pantallazo rápido, regresándolo inmediatamente con un clic atrás a su tablero sin un cambio agresivo en el router.

**No lo uses cuando:**
- Tienes frente a ti un formulario multipart de 4 secciones completas separadas, el cual precisa de una página o Stepper extenso.
- Para exhibir comparativas donde necesitas sí o sí dejar ver la sección inferior de un vistazo general como apunte base a comparar.

**Estructura de componente recomendada en Figma:**
- `ModalWrapper` (Background Overlay semi-transparente)
  - `ContentModalBox` (Layout: AutoLayout Vertical, Width Max definido)
    - `Header` (Título + IconButton Dismiss 'X')
    - `Content` (Bloque con su interior de form vertical scrollable al llegar a un límite relativo)
    - `Footer` (Botones de Guardar / Cancelar)

**Variantes mínimas requeridas (`ContentModalBox`):**
- `Size=Small`
- `Size=Medium`
- `Size=Large`

**Encaja mejor con:** Tableros SaaS, Paneles B2B, Paneles de administración internos y plataformas web de escritorio.

**Antipatrón más común:** Abrir modales dentro de otros modales en formato "matrioska rusa", encerrando al sujeto en capas infinitas de las que le es difícil escapar sin sentirse extraviado y cerrarlo todo con la cruz principal frustrantemente perdiendo cambios de fondo si olvidó guardar su avance.

---

## 3. Drawer derecho
**Descripción:** Panel expansivo y lateral emergido desde el extremo derecho configurado para edición minuciosa que mantiene todo el plano de contexto intacto.

**Úsalo cuando:**
- Editas objetos complejos leyendo de soslayo visualmente la tabla inferior base ubicada al centro, preservando la información para comprobaciones cruzadas.
- Resulta muy largo tu contenido empujando los requerimientos hacia un formato naturalmente adaptativo a lo largo y alto vertical (listas descriptivas asimétricas con scroll largo).
- Hay configuración secundaria adjunta y propiedades de metadatos infinitos de filas que solo valen revisar de uno en uno como Detalle de inspección.

**No lo uses cuando:**
- Te sirve puramente como navegación maestra para viajar entre entidades completamente ajenas (En cuyo esquema va Drawer izquierdo de sidebar o navbar).
- Se requiere obligatoriamente enviar de manera bloqueante una urgencia. (Para eso un modal centrado con oscuro base lo enfocará).

**Estructura de componente recomendada en Figma:**
- `OverlayWrapper` (Opcional, Overlay dim)
  - `DrawerRightPanel` (Constraint Derecho Top/Bottom auto, Height Full, Shadow lateral fuerte para aislarlo cortando de izquierda)
    - `Header` (IconX, Entidad Título)
    - `ScrollContent` (Vertical List de opciones, forms o datos expandidos de información estática y chat de revisión de logs)
    - `Footer` (Acciones persistentes al ras inferior base Guardar/Descartar Edit panel)

**Variantes mínimas requeridas (`DrawerRightPanel`):**
- `Width=Default` (e.g. 400px)
- `Width=Wide` (e.g. 640px o superior)
- `HasFooter=True/False`

**Encaja mejor con:** Visualización de logs Master-Detail, CRMs densos de contactos y soporte Tickets de clientes.

**Antipatrón más común:** Abandonar la disposición de las acciones primarias de guardar, ocultándolas bajo un scroll perpetuo en vez de dejarlas atadas inamovibles al rodapiés inferior anclado.

---

## 4. Drawer izquierdo
**Descripción:** Panel auxiliar izquierdo que revela opciones relativas a navegar entre filtros transversales o el viaje superior móvil mediante slide lateral.

**Úsalo cuando:**
- Contiene los enlaces macro de una top Navbar ocultos en modo responsive bajo su icono hamburguesa que revela tu mapa lateral.
- Debes poner a disposición filtros inmensos tipo acordeones jerarquizados para plataformas Ecommerce en resoluciones reducidas o apartados ocultables como sidebars de menú persistentes colapsables en vistas desktop.

**No lo uses cuando:**
- La acción es para examinar a detalle puntual el ítem extraído de una tabla de bases.
- Debes lanzar avisos puntuales de status alertados a usuarios o diálogos directos en espera de ejecución de botones destructivos.

**Estructura de componente recomendada en Figma:**
- `OverlayDimmer` (Fondo Negro con 40% o 50% transparencia)
  - `DrawerLeftPanel` (Constraints Left Top/Bottom. Diseño de Vertical AutoLayout total)
    - `Header` (Branding, Logo, Icon X Dismiss)
    - `NavContent` (AutoLayout Vertical o grupos funcionales check)

**Variantes mínimas requeridas (`DrawerLeftPanel`):**
- `Type=Navigation`
- `Type=Filters`

**Encaja mejor con:** Menús Móviles de toda web en universal, Directorios de Tiendas en línea con facetas y Dashboards que empleen sidebars retraíbles y expansibles flotantes.

**Antipatrón más común:** Forzar siempre cerrar haciendo un clic en el estrecho botón en vez de integrar la interactividad base automática para salirse si se hace un tap difuso a oscuras fuera de allí o el Overlay vacío.

---

## 5. Bottom sheet
**Descripción:** Panel de arrastre inferior que se eleva revelando listados y opciones auxiliares nativas, originado visualmente atado al área ergonómica.

**Úsalo cuando:**
- Ocurre totalmente o adaptativamente focalizado a un smartphone y usabilidad de una mano usando los pulgares al alcance en distancias cortas.
- Requieres compartir opciones (Share Panel iOS/Android) entre herramientas terceras.
- Contienen opciones adicionales al contexto que necesitan tomar de entre un tercio de ventana hasta pantalla casi completa escalable en tirones hacia arriba.

**No lo uses cuando:**
- Estás diseñado la App exclusivamente sobre plataformas Desktop extensas con cursor de mouse, puesto que sale descabellado en anchuras de monitores arrastrar sábanas por su pie, siendo los Drawer y Popovers mucho mejor ideados al marco mental base del origen del ratón y cursor.

**Estructura de componente recomendada en Figma:**
- `OverlayWrapper` (Background Dark, Fill parent)
  - `BottomSheetCanvas` (Constraints Bottom, escalado a todo el Left/Right. Background White, superior radio de borde top curvos `Radius` redondeados altos)
    - `DragHandle` (Píldora delgada indicadora gris visual como asidero deslizable al medio top)
    - `Header` (Titular e icon opcional)
    - `ListContent` (AutoLayout V scroll vertical)

**Variantes mínimas requeridas (`BottomSheetCanvas`):**
- `Height=Half`
- `Height=Full`

**Encaja mejor con:** Tareas y flujos intermedios puramente Móviles (Redes Sociales compartir, Apps Mapas locales que revelan descripción, apps financieras de tarjeta selector de transacciones PWA nativas).

**Antipatrón más común:** Incluir un scroll horizontal de listado infinito cruzado alojado en conjunción paralela al natural scroll vertical propio deslizable que activa en gestos y crea conflictos trágicos con el swipe descendente del cerrar final.

---

## 6. Popover
**Descripción:** Información y configuraciones flotantes ancladas mediante dependencia a un activador disparador (trigger).

**Úsalo cuando:**
- Precisa integrar inputs muy sutiles dentro y datos ricos (Minicalendarios intermedios o Selectores Color Palletes en interfaces base o mini calculadoras atadas a tablas).
- Ofrendas detalles enriquecidos inmediatos adyacentes vinculados en contexto inteligente en relación con las cajas y avatares del desencadenante pulsado origen (Notificaciones integradas a un Icon campanita que bajan de la Navbar un tablero rico).

**No lo uses cuando:**
- Las opciones que se ofertarán son excesivamente largas arriesgando cruzarse forzosamente al exterior de los márgenes nativos y romper las áreas con cortes anti-layout. (Ahí emplea Modales centralizados para rescatar el marco sin peligro de colisiones desobedientes o comportamientos imprevistos al girar y caer a los lados).

**Estructura de componente recomendada en Figma:**
- `PopoverContainer` (AutoLayout V/H, Sombra drop envolvente intensa)
  - `ArrowTail/Caret` (El Polígono opcional o vector indicativo, apuntador flechilla unida lógicamente a su base que lo originó e inspiró clic)
  - `ContentBox` (Vertical stack flexible interior para texto, input radio box y detalles extras enriquecidos temporales).

**Variantes mínimas requeridas (`PopoverContainer`):**
- `Position=Top`
- `Position=Bottom`
- `HasArrow=True`
- `HasArrow=False`

**Encaja mejor con:** Interfaz detallada y compleja Desktop orientada en la condensación de información rápida transaccionalmente local sin forzar reloads de las pantallas SaaS web panel completas, o como los filtros de cabeceras dinámicas incrustadas de data-tables en las métricas en red de las app analíticas.

**Antipatrón más común:** Incorporar opciones de acción primarias irreversibles (como Guardar Definitivamente Formatos o Eliminar Tableros Complejos) expuestos al accidente trágico constante al disolverse e irse la estructura si tu clic de ratón vuela un milímetro cruzadas fuera.

---

## 7. Tooltip
**Descripción:** Explicación textual micro adjunta, efímera, flotante atada, disparada bajo hover visual simple originado al pasar focal sobre acciones ambiguas minúsculas en un botón.

**Úsalo cuando:**
- El origen disparador primario no tiene espacio propio explícito escrito por lo que una base textual o texto base del nombre en Icono necesita revelarlo flotante.
- Buscas apoyar al entendimiento descriptivo contextual en formato breve al acercar para brindar ayudas extra referenciales sin recargar masivamente de textos instructivos la capa inicial fija permanentemente y agobiando para los power users.

**No lo uses cuando:**
- Tu app enfoca e interactúa esencialmente bajo tactilidad con un interfaz móvil nativo de Touch Screens que no admiten Hover intermitente pre-ejecución dejando al tooltip sordo oculto al sistema siempre, solo logrando hacer click sobre botones o celdas perdiendo ese mensaje flotante no adaptado.

**Estructura de componente recomendada en Figma:**
- `Tooltip` (AutoLayout Cortísimo y apretado)
  - `Background` (Fill dark invirtiendo temas de fondo de 90%)
  - `TextLabel` (Corto sin cortes grandes y fuente contrastante clara a una o dos líneas)
  - `Pointer Cúspide` (Flecha hacia el origin anchor visual trigger icon).

**Variantes mínimas requeridas (`Tooltip`):**
- `Position=Top`
- `Position=Bottom`
- `Position=Left`
- `Position=Right`

**Encaja mejor con:** Herramientas y Dashboards densos para B2B Enterprise de extrema condensación informativa o botones utilitarios del toolbar superior o de editor gráfico interno.

**Antipatrón más común:** Intentar hacer insertables Links activos e interiores que se pretenden apuntar pulsando bajo un tool tip pero en sí imposibilita llegar porque la evaporación y borrado inmediato en el traslado entre tu origen Hover original al Pop out volando del texto Tooltip te rompe inalcanzable esfumando.

---

## 8. Dropdown menu
**Descripción:** Menú descendente de cascadas con listado llano lineal para exponer múltiples opciones con acciones extra limitadas como un panel alternador temporal.

**Úsalo cuando:**
- Ocultas una botonera alternativa anclada y de baja frecuencia uniendo en un icono "..." o hamburguesa local.
- Aplicas listas genéricas que alternan selección visual pero inmediatas para el mismo elemento general contextualizado temporal e integradas en opciones como "Renombrar, Bajar, Duplicar, Compartir, Remover".

**No lo uses cuando:**
- Almacena acciones de tamaño extremo donde una vista precisa datos extras formales, lo cual demanda Popover integrables o Panel Formulario.
- Se hace excesivamente colosal largo con lo que un usuario tendría perder su tiempo en scroll y amerita preferible un selector `Combox Search Select`.

**Estructura de componente recomendada en Figma:**
- `DropdownContainer` (AutoLayout Vertical, Outline + Shadow ligera sin oscurecer o fondo tapar por overlay base oscuro para evitar taponado inmenso la Web y Layout)
  - `DropdownItem` (Row AutoLayout Vertical Stack)
    - `Icon` (Opcional ayuda rápida visual iconográfica)
    - `LabelText`
    - `Shortcut` (Ej. atajos de teclado tipo Cmd+X en texto de la derecha extrema opcional)

**Variantes mínimas requeridas (`DropdownItem`):**
- `State=Default`
- `State=Hover`
- `State=Active`
- `Type=Destructive` (General colorización ROJA o señalada para Alertar eliminar)

**Encaja mejor con:** Iconos Más Opciones de tres puntos en Tablas base UI genéricas de gestión, Avatar Dropdowns de opciones Perfil personales Log Out centralizados y Menús superiores de navegación desktop expandiendo listas básicas sin descripciones y de botones inmediatos.

**Antipatrón más común:** Colocar listas interminables gigantes ocultando el texto vital final mediante puntos elipsos escondidos porque el ancho fijo de menú asume poco y revienta fuera y rompe al salir limitando el despliegue al usuario.

---

## Tabla de Comparación: Modal vs Drawer vs Bottom Sheet

| Criterio | Modal / Dialog | Drawer Lateral | Bottom Sheet |
|---|---|---|---|
| **Interrupción del Flujo** | Alta (Bloquea resto) | Media (Contexto base persiste y coexiste lateralmente) | Media/Alta |
| **Tamaño de Contenido** | Pequeño o Mediano (Centrado) | Muy Alto (Abarca verticalmente la pantalla casi completa) | Mediano (Mitad o tres cuartos inferiores) |
| **Contexto Preservado** | Pobre (Exige concentración en la capa sin ver detalles externos) | Excelente (Perfecto para cruce de verificaciones lado a lado) | Bueno (Si se deja manipular arriba y puede convivir en fondo) |
| **Plataforma Recomendada** | Universal Desktop/Web preferentemente | Desktop / Tablet (Espacios y lienzos extensos horizontales) | Móvil Nativo Exclusivamente/PWA Tactil Táctil |

---

## Árbol de Decisión para Patrones Overlay

¿Qué patrón usar? Sigue paso a paso el árbol para determinar lo ideal:

1. **¿Requiere una acción o decisión explícita del usuario?**
   - **NO (Solo busca informar rápidamente sin entorpecer):** 👉 **Tooltip**.
   - **SÍ:** Pasa a la Pregunta 2.

2. **¿Debe bloquear e interrumpir completamente la interfaz obligando a confirmar para evitar daño grave o continuar forzadamente?**
   - **SÍ:** 👉 **Modal de confirmación**.
   - **NO (Deseamos algo no intrusivo total, o contextual):** Pasa a la Pregunta 3.

3. **¿La información está anclada obligatoriamente sobre un elemento base visual concreto (como el icono campanita o tres botones ...) que la dispara local?**
   - **SÍ:**
       - ¿Son puros listados y acciones estándar textuales clickeables rápidas una con una al pulsar? 👉 **Dropdown menu**.
       - ¿Es un formato enriquecido visual de tarjeta con calendarios insertables visuales o input integrados complejos ricos en una placa flotante elegante? 👉 **Popover**.
   - **NO (Es de uso genérico libre sin anclajes flechita puntuales fijos originadores relativos estrechos por UI directo y sale con identidad su propia sección separada):** Pasa a la Pregunta 4.

4. **¿A qué entorno primariamente va dirigida la usabilidad de este recurso y entorno del sujeto?**
   - **Es pantalla MÓVIL nativa o entorno ergonómico de 1 mano:** 👉 **Bottom sheet**.
   - **Es pantalla DESKTOP de escritorio y Web app responsiva en formato abierto y amplio:**
       - ¿Sirve la navegación global o revela los macro filtros en tu web para tu listado y dejas que abran paso desplazando desde el inicio central para ver las opciones completas sin moverte del lugar del inicio? 👉 **Drawer izquierdo**.
       - ¿Contiene detalles super super extensos paralelos para verificar a la par una entidad comparándola y configurando de arriba a abajo largos inputs de texto laterales a la tabla base central compartida? 👉 **Drawer derecho**.
       - ¿Precisa ingresar rápidos y minúsculos campos de información local breves como un form encapsulado que no merezca de hecho apartar a otra web router aislada al usuario e incomunicarlo de su avance al fondo un paso base? 👉 **Modal de contenido**.
