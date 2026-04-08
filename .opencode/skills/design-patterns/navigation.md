# Navegación (Navigation Patterns)

Este archivo documenta los patrones de diseño de interfaz para sistemas de navegación, pasos y jerarquías.

---

## 1. Tabs horizontales
**Descripción:** Navegación entre conjuntos de vistas o contenidos relacionados dentro del mismo nivel jerárquico.

**Úsalo cuando:**
- Necesitas mostrar múltiples secciones de contenido al mismo nivel en una vista.
- Los nombres de las secciones son cortos y predecibles.
- Hay entre 2 y 6 opciones o secciones.
- Quieres evitar recargar la página entera al cambiar de contexto visual principal.

**No lo uses cuando:**
- Los nombres de los apartados son muy largos y no caben en una sola línea.
- Tienes más de 6 opciones, en cuyo caso podrían solaparse.
- Se trata de una jerarquía de paso a paso secuencial (usa stepper en su lugar).

**Estructura de componente recomendada (Capas y Propiedades Figma):**
- `TabGroup` (Layout: AutoLayout Horizontal)
  - `TabItem` (Layout: AutoLayout Horizontal o Vertical)
    - `Icon` (opcional)
    - `Label`
    - `ActiveIndicator` (línea inferior o fondo).

**Variantes mínimas requeridas (`TabItem`):**
- `State=Default`
- `State=Hover`
- `State=Active`
- `State=Disabled`

**Encaja mejor con:** SaaS, Dashboards, Web Apps complejas, Formularios multi-sección en desktop.

**Antipatrón más común:** Usar tabs para iniciar acciones (ej. "Guardar") en vez de cambiar de vista, o agrupar pestañas que abren contextos radicalmente distintos no relacionados entre sí.

---

## 2. Tabs verticales / Sidebar
**Descripción:** Navegación lateral persistente para alternar entre las secciones principales de una aplicación.

**Úsalo cuando:**
- La aplicación tiene muchas secciones principales (más de 6).
- Necesitas una navegación persistente que no consuma espacio vertical (ideal en pantallas desktop de formato ancho).
- Las secciones pueden incluir sub-secciones agrupadas jerárquicamente en menús acordeón.

**No lo uses cuando:**
- Es una vista móvil o de pantalla estrecha (usa un menú hamburguesa o bottom nav).
- Necesitas maximizar el espacio horizontal para datos de máxima información visual.

**Estructura de componente recomendada (Capas y Propiedades Figma):**
- `Sidebar` (Layout: AutoLayout Vertical)
  - `Header` (Logo, Nombre)
  - `NavList` (AutoLayout Vertical)
    - `NavItem`
      - `Icon`
      - `Label`
  - `Footer` (Usuario, Ajustes)

**Variantes mínimas requeridas (`NavItem`):**
- `State=Default`
- `State=Hover`
- `State=Active`
- `Hierarchy=Parent`
- `Hierarchy=Child`

**Encaja mejor con:** Dashboards, SaaS, Herramientas de administración, Software de uso exhaustivo y profesional.

**Antipatrón más común:** Menús infinitamente anidados ocultos tras múltiples clicks, que impiden al usuario saber dónde se encuentra en el mapa de la aplicación.

---

## 3. Breadcrumbs
**Descripción:** Rutas lógicas visuales que muestran la ubicación actual dentro de una jerarquía profunda para orientar.

**Úsalo cuando:**
- El sistema tiene 3 o más niveles de profundidad jerárquica.
- El usuario necesita poder retroceder fácilmente hasta un nivel intermedio o nivel padre.
- La navegación principal no basta para comprender el camino contextual actual o cómo se llegó hasta ahí.

**No lo uses cuando:**
- El sitio es completamente plano (sólo niveles primarios).
- Estás en un proceso lineal como puede ser un checkout.

**Estructura de componente recomendada (Capas y Propiedades Figma):**
- `Breadcrumbs` (Layout: AutoLayout Horizontal)
  - `CrumbItem` + `Link`
  - `Separator` (Icono chevron, slash)
  - `CrumbItem` + `Link`
  - `Separator`
  - `CrumbItem` (Estado actual, texto en negrita, sin link)

**Variantes mínimas requeridas (`CrumbItem`):**
- `State=Default`
- `State=Hover`
- `State=Current`

**Encaja mejor con:** E-commerce (directorios y categorías profundas), Sitios web institucionales densos, Gestores de archivos en nube.

**Antipatrón más común:** Usarlos como reemplazo de la navegación principal para sitios planos, o repetir innecesariamente un título que ya aparece como encabezado grande en la página.

---

## 4. Stepper horizontal
**Descripción:** Indicador visual paso a paso para desglosar flujos de tareas lineales en bloques manejables numerados.

**Úsalo cuando:**
- Un proceso complejo se puede dividir en pasos cognitivamente más simples y coherentes (entre 3 y 5).
- El usuario necesita saber su progreso general y cuánto tramo o esfuerzo falta antes de la finalización.
- Los pasos deben, en la gran mayoría, suceder en un orden secuencial inamovible.

**No lo uses cuando:**
- El número de tareas es excesivo, trivial, o variables impredecibles causen que superen los 6 pasos.
- Son vistas diferentes u opciones excluyentes y no pasos iterativos para llegar al éxito final.

**Estructura de componente recomendada (Capas y Propiedades Figma):**
- `StepperGroup` (Layout: AutoLayout Horizontal)
  - `StepItem` (AutoLayout Vertical/Horizontal)
    - `StepIndicator` (Círculo con número o check)
    - `StepLabel`
  - `DividerLine` (Línea que conecta pasos adyacentes)

**Variantes mínimas requeridas (`StepItem`):**
- `Status=Pending`
- `Status=Active`
- `Status=Completed`
- `Status=Error`

**Encaja mejor con:** Pasarelas de pago y Checkout, Formularios estructurados largos, Procesos de Alta, Wizards y Onboarding paso a paso.

**Antipatrón más común:** Ocultar el botón general de "Atrás/Siguiente" dentro del stepper ignorando la interfaz macro, o no indicar nunca que ha ocurrido un error si el usuario salta pasos.

---

## 5. Stepper vertical
**Descripción:** Alternativa de flujo detallado en escalera donde el contenido de cada paso se expande hacia abajo de forma orgánica.

**Úsalo cuando:**
- Hay definiciones largas de pasos o dependencias en las selecciones de cada salto.
- Quieres que el usuario complete campos o inputs en el propio proceso evitando cambiar de pestaña, consolidándolo en un panel expansible simple.
- El panel o diseño es predominantemente móvil o insertado como módulo angosto adaptado.

**No lo uses cuando:**
- El flujo es muy corto y un stepper horizontal optimiza mejor una vista amplia de web o desktop.
- Las tareas requieren una densidad tan alta de información en cada paso que abrir uno genera barridos visuales de kilométricos scrolls por panel.

**Estructura de componente recomendada (Capas y Propiedades Figma):**
- `VerticalStepper` (Layout: AutoLayout Vertical)
  - `StepSection`
    - `StepHeader` (Indicador + Título)
    - `StepContent` (Contenedor abierto y anidado de inputs)
  - `ConnectorLine` (vertical conectora con márgenes izquierdo y derecho)

**Variantes mínimas requeridas (`StepSection`):**
- `Status=Pending`
- `Status=Active`
- `Status=Completed`

**Encaja mejor con:** Interfaz Móvil y apps de ajustes, Configuración e instalaciones en steps, Flujos KYC de validación con inputs inyectados.

**Antipatrón más común:** Generar acordeón anidado sobre acordeón causando pérdida total de la estructura principal, y no dar pistas visuales que delimiten dónde termina o empieza el Stepper Vertical como sección unificada.

---

## 6. Bottom navigation bar
**Descripción:** Barra fija situada en el extremo inferior de una pantalla móvil con accesos clave persistentes.

**Úsalo cuando:**
- La aplicación principal es diseño nativo móvil, PWA o variante de vista celular principal.
- Requiere poseer accesos core constantes que siempre deben estar presentes de forma ergonómica en un touch para pulgares rápidos.
- El rango principal de apartados absolutos está entre los 3 y 5 máximos.

**No lo uses cuando:**
- El caso exige que haya más de 5 secciones prioritarias para poder subsistir y funcionar.
- La visualización está renderizada en un portal de escritorio ancho, donde el bottom navigation queda totalmente fuera de sentido visual.

**Estructura de componente recomendada (Capas y Propiedades Figma):**
- `BottomNav` (Layout: AutoLayout Horizontal, Constraints: Bottom / Left-Right stretch)
  - `NavItem` (AutoLayout Vertical, Fill container)
    - `Icon`
    - `Label` (Opcional)
    - `ActiveIndicator`

**Variantes mínimas requeridas (`NavItem`):**
- `State=Default`
- `State=Active`
- `HasBadge=True` (Para alertas o notificaciones)
- `HasBadge=False`

**Encaja mejor con:** Aplicaciones móviles nativas iOS / Android, PWAs de alta interacción y utilidad personal, Interfaces portátiles B2C de alta rotación.

**Antipatrón más común:** Incorporar opciones de acción principal como un Floating Action Button (+ Crear, Editar) mezclado e indistinguible con las rutas de cambios de entorno de vistas, sin diferenciar su rol, o saturar el espacio con etiquetas multilinea.

---

## 7. Pagination
**Descripción:** Un controlador interactivo que permite avanzar dividiendo colecciones ingentes de datos repetitivos (registros, cards) en porciones de página accesibles.

**Úsalo cuando:**
- Se presentan listas de resultados y bases de datos que superan claramente el espacio digerible por un usuario (más de 50 ítems).
- El sistema de búsqueda precisa permitir saltos inmediatos o accesos a URL concretas hacia pedazos exactos del flujo o datos históricos.
- Se hace imperativo evitar una carga del servidor y del DOM pesada, por tanto la solicitud debe partir la petición en "lotes".

**No lo uses cuando:**
- Es preferible que un usuario consuma en continuo, buscando inmersión por exploración pasiva (usando el patrón en su lugar de Scroll Infinito).
- El volumen listado de datos carece del peso para ser paginado y cabría holgadamente sin ser partido.

**Estructura de componente recomendada (Capas y Propiedades Figma):**
- `PaginationGroup` (Layout: AutoLayout Horizontal)
  - `ControlButton` (Prev, First flechas icono)
  - `PageList` (AutoLayout Horizontal)
    - `PageItem` (Número numérico o elipsis '...')
  - `ControlButton` (Next, Last flechas icono)

**Variantes mínimas requeridas (`PageItem`):**
- `State=Default`
- `State=Hover`
- `State=Active` (Current Page)
- `Type=Number`
- `Type=Ellipsis`

**Encaja mejor con:** Sitios de E-commerce, Bases de Datos, Repositorios de Archivo documental, Tablas densas en Dashboards de B2B, Buscadores.

**Antipatrón más común:** Mostras series de miles de páginas ininterrumpidas generadas en tira `1, 2, 3... 1045` sin proveer agrupadores y elipses o sin incorporar controles para último / primero, arrinconando la gestión.

---

## 8. Navbar / Top bar
**Descripción:** Barra estructural anclada a la zona superior universal para agrupar identidad, búsqueda, cuenta, configuración y enlaces macro.

**Úsalo cuando:**
- Corresponde a la navegación estructural básica y persistente que el sujeto percibe como la brújula y zona segura a donde retornar a inicio.
- Se ha de compactar en la misma franja horizontal superior el logo representativo, campos extra y los enlaces maestros del sitio completo.
- Sirve de techo visual estructurador al formato web general que actúa como delimitador superior.

**No lo uses cuando:**
- El ecosistema requiere una navegación profunda como un árbol de carpetas persistentes donde encaja imperativamente mejor una Sidebar (Dashboard Complejo).
- Las opciones que porta interfieren totalmente con opciones locales contextuales, volviendo una amalgama que ocupa el 30% de la zona vertical con menús sucesivos.

**Estructura de componente recomendada (Capas y Propiedades Figma):**
- `TopNavbar` (Layout: AutoLayout Horizontal, Space Between)
  - `BrandGroup` (Contenedor Logo)
  - `NavLinks` (AutoLayout Horizontal con `NavItem` anidados)
  - `ActionGroup` (Profile Avatar, Switch tema, Login/Signup action)

**Variantes mínimas requeridas (`TopNavbar`):**
- `Device=Desktop`
- `Device=Tablet`
- `Device=Mobile` (Generalmente donde se omite `NavLinks` usando Menú Hamburgo Toggle)

**Encaja mejor con:** Sitios Web transaccionales estándar, Portal SAAS frontal de Landing y producto, Blogs informativos de alta lectura, Institucionales y Catálogos.

**Antipatrón más común:** Obstruir la Navbar por exceso de `NavLinks` superpuestos que rompen en dos líneas y destrozan la interfaz gráfica sin usar desplegables contextuales de un nivel adicional o colapsar de forma antiestética el header sin adaptar la grilla Mobile.

---

## Árbol de Decisión para Patrones de Navegación

¿Qué patrón es el correcto? Para elegir acertadamente, recorre paso a paso el siguiente árbol de evaluación mental y obtén tu resultado:

**¿Es esta necesidad una navegación global y nivel maestro?**
- **SÍ:** → Siguiente pregunta (*Ir a Fase A*).
- **NO:** (Navegaciones parciales interrelacionadas o recorridos) → (*Ir a Fase B*).

**Fase A (Principales/Globales)**
1. **¿El display prioritario de esto es vista en Pantalla Móvil?**
   - **SÍ:** → ¿Vas a enlazar como máximo a 5 sitios base persistentes?
      - **SÍ:** 👉 **Bottom navigation bar**.
      - **NO:** 👉 **Navbar / Top bar** (adaptación a menú hamburguesa toggle para escalar los enlaces extras).
   - **NO:** (Es para Desktop/Tablet) →
2. **¿Existe una alta complejidad en toda la plataforma superando enormemente jerarquías anidadas?**
   - **SÍ:** 👉 **Tabs verticales / Sidebar** expandibles por su alta retención horizontal.
   - **NO:** (Es sitio llano, pocos destinos, o landing) 👉 **Navbar / Top bar**.

**Fase B (Secundarias/Flujos Internos)**
3. **¿La intención requerida se trata de forzar a finalizar o ejecutar acciones paso a paso progresivamente de A hacia B?**
   - **SÍ:** → ¿La naturaleza de lo que se rellenará en contenido y opciones en cada paso es de espacio altísimo provocando abultamientos densos que bloquean moverse lateral?
      - **SÍ:** 👉 **Stepper vertical**.
      - **NO:** 👉 **Stepper horizontal**.
   - **NO:** → Siguiente pregunta.
4. **¿Deduce un nivel que precise leer informaciones sinónimas y alternativas paralelas dentro de dicho foco (ej. Vistas del perfil o Pestañas de la ficha de artículo e-commerce)?**
   - **SÍ:** 👉 **Tabs horizontales**.
   - **NO:** → Siguiente pregunta.
5. **¿Refiere el caso a grandes catálogos sin fin, y bases extraídas de un servidor para búsqueda de cientos de hilos idénticos partiendo resultados masivos?**
   - **SÍ:** 👉 **Pagination**.
   - **NO:** → Siguiente pregunta.
6. **¿El usuario ya navegó muy adentro en las capas y es indispensable revelar cada click rastreable o categoría base desde el inicio padre sin perderse en esa dimensión?**
   - **SÍ:** 👉 **Breadcrumbs**.
