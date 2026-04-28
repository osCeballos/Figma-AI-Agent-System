---
name: GLOSSARY
description: Glosario Técnico del Figma Agent Ecosystem
mode: all
---

# Glosario Técnico — Figma Agent Ecosystem

Este documento define la terminología estándar utilizada por el Director y los subagentes para garantizar la precisión semántica y evitar colisiones de conceptos.

## Conceptos Core

### 1. Binding (Oficial)
**Definición:** El acto de conectar una propiedad de un nodo (ej. `fills`, `opacity`, `visible`) con una variable del Design System (`variableId`) o una propiedad de componente (`componentPropertyId`).
- **Términos obsoletos:** "Vincular", "Aplicar variable", "Set variable reference".
- **Uso:** "Realizar **Binding de variable** de color al nodo hijo 'Background'."

### 2. Token
**Definición:** La unidad mínima de decisión de diseño almacenada en una variable de Figma. Puede ser de tipo `COLOR`, `FLOAT`, `STRING` o `BOOLEAN`.

### 3. Frame Base
**Definición:** El contenedor inicial creado por el `@layout-subagent` que sirve como "molde" para la posterior creación de componentes. Posee propiedades de AutoLayout.

### 4. Component Set
**Definición:** El contenedor que agrupa múltiples variantes de un componente maestro (ej. un set de botones con estados Hover, Default y Disabled).

### 5. Slot
**Definición:** Un área designada dentro de un componente padre que permite la inyección de instancias de otros componentes o contenido dinámico.

### 6. Component Property
**Definición:** Una propiedad declarada en un componente maestro de Figma que permite personalizar instancias sin romper el vínculo con el componente original. 

**Tipos soportados vía API (3):**
- **BOOLEAN:** Controla la visibilidad de una capa hija (true = visible, false = oculto).
- **TEXT:** Permite sobrescribir el contenido de texto de una capa hija en la instancia. **Importante:** El valor por defecto siempre debe ser un string explícito (ej. `"Label"`).
- **INSTANCE_SWAP:** Permite reemplazar un componente hijo por otro componente diferente en la instancia.

**Tipo simulado (1):**
- **VARIANT:** Define estados discretos del componente (ej: State=Default, State=Hover). **Nota técnica:** En este sistema, las variantes se implementan estrictamente mediante nomenclatura de nodos maestros y la herramienta `create_component_set`, **NO** mediante `add_component_property` (la cual no soporta variantes en el MCP actual).

- **Términos obsoletos:** "Prop", "Propiedad de variante", "Override".
- **Uso:** "Añadir una Component Property de tipo BOOLEAN llamada HasIcon al componente Button."

### 7. Variable Mode (Modo)
**Definición:** Un contexto de valor alternativo para una misma colección de variables. Una colección puede tener uno o múltiples modos (ej. `Light`, `Dark`, `High Contrast`). Cuando una colección tiene múltiples modos, **DEBE** definirse un valor específico para *cada* modo existente al crear o actualizar un token. El `modeId` indica en qué contexto se está evaluando o aplicando el valor.
- **Uso:** "El `@tokens-subagent` debe proveer valores para todos los modos listados en el `State` al invocar la herramienta de creación de variables."

---

## Convenciones de Nomenclatura

- **Propiedades de Componente:** Siempre en formato `PropName=Value`.
- **Rutas de Memoria:** Relativas a la raíz del proyecto (ej: `agents/memory/user-preferences.json`).
- **Ids de Nodos:** Tratados como strings únicos e inalterables proporcionados por el servidor MCP.

---

## Conceptos de Diseño UX/UI

### 7. Armonía Cromática
**Definición:** La relación estructural entre los colores de una paleta basada en su posición en el círculo cromático. El sistema soporta cinco tipos: Complementaria (colores opuestos), Análoga (colores adyacentes), Tríadica (tres colores equidistantes), Split-complementaria (un color base más los dos adyacentes a su complementario) y Monocromática (variaciones de saturación y luminosidad de un solo hue).
- **Uso:** Toda paleta debe declarar su armonía antes de registrar tokens de color.

### 8. Rol Semántico de Color
**Definición:** La función comunicativa asignada a un color dentro del sistema, independiente de su valor concreto. Los roles estándar canónicos del sistema son:
- **Base:** `brand-primary`, `brand-secondary`
- **Superficies:** `background`, `surface`
- **Contenido:** `text-primary`, `text-secondary`, `icon`, `border`
- **Feedback:** `success`, `warning`, `error`
- **Interacción:** `brand-primary-hover`, `disabled-bg`, `disabled-text`
- **Uso:** Ningún token de color puede crearse sin asignarle explícitamente uno de estos roles semánticos.

### 9. Escala Tipográfica
**Definición:** El conjunto ordenado de tamaños y pesos de texto que define la jerarquía visual del sistema. Niveles estándar: display, heading, body, caption, label.
- **Uso:** Todo nodo de texto debe usar un nivel de la escala aprobada, nunca valores arbitrarios.

### 10. Peso Visual
**Definición:** La prominencia perceptual de un elemento en la composición, determinada por la combinación de tamaño, color, contraste y peso tipográfico. Un componente no debe superar 3 niveles de peso visual simultáneos.
- **Uso:** Criterio de auditoría de coherencia visual.

### 11. Tono Emocional
**Definición:** La respuesta emocional que el diseño busca provocar en el usuario, inferida del tipo de producto y audiencia. Guía las decisiones de color, tipografía y espaciado del @design-subagent.
- **Ejemplos:** Confianza (fintech), Energía (fitness), Calma (salud), Innovación (tech).

### 12. Shift-left WCAG
**Definición:** Estrategia de diseño que consiste en mover la validación de accesibilidad a las fases más tempranas del proceso. En este sistema, la validación se realiza en la **Fase 1** (Design) mediante la **Matriz de Contraste**, antes incluso de crear tokens. Esto elimina la necesidad de re-validar colores en fases posteriores.

### 13. Matriz de Contraste
**Definición:** Tabla pre-computada por el @design-subagent que contiene el ratio WCAG AA para cada par funcional de colores (foreground vs background). Se almacena en `state.design.contrastMatrix` y sirve como fuente de verdad para que los subagentes downstream (tokens, auditor) puedan omitir la re-validación individual de colores. Cada entrada contiene estrictamente estos 6 campos: `{ fg, bg, ratio, passesAA, adjusted, originalRatio }`.
- **Uso:** Si la matriz existe y un color está cubierto por ella, el tokens-subagent crea la variable sin re-calcular. El auditor solo re-audita colores que NO aparecen en la matriz (delta).
- **Ejemplo de entrada:** `{ "fg": "text-primary", "bg": "background", "ratio": 4.5, "passesAA": true, "adjusted": true, "originalRatio": 3.8 }`

---

## Arquitectura Transaccional

### 14. Delta
**Definición:** Bloque JSON parcial y estandarizado que cada subagente devuelve al finalizar su tarea. El Director fusiona este Delta en el `State` central.
- **Uso:** Contiene solo los cambios pertinentes a la fase (ej. nuevos tokens, referencias a frames creados, acciones manuales). El Director realiza un **Guard de Integridad** sobre su estructura antes de aplicarlo.

### 15. Dry-Run
**Definición:** Ejecución simulada de un plan de diseño contra el estado actual de Figma. Genera un "Diff de Ejecución" sin modificar el canvas.
- **Uso:** Empleado para prevenir efectos destructivos o duplicidades. Detiene el proceso (PUNTO DE BLOQUEO) hasta que el usuario revisa el diff y aprueba la mutación real transaccional.

### 16. Conflicto Estructural (`[CONFLICTO_ESTRUCTURAL]`)
**Definición:** Clasificación asignada durante el Dry-Run cuando el plan del subagente colisiona con el estado actual de Figma de manera que el MCP no puede resolver automáticamente (ej. renombres masivos, eliminar colecciones).
- **Uso:** Cualquier conflicto de este tipo aborta el despliegue automático y exige que el usuario lo resuelva en Figma, reportándose en el array `manual_actions`.

### 17. Pre-Flight Check
**Definición:** Fase inicial (Guard) donde un subagente valida la integridad del entorno y del `State` entrante ANTES de planificar o interactuar con Figma.
- **Uso:** Verifica que existan parámetros clave (`channelId`, `palette`), normaliza datos a formato canónico (ej. RGBA), y aborta inmediatamente si el input es malformado.

### 18. Checkpoint
**Definición:** Marcador transaccional persistido en el `State` central (`checkpoints.lastCompletedPhase` y `timestamp`) por el Director tras completar una fase con éxito.
- **Uso:** Constituye la única fuente de verdad para el **Protocolo de Re-entrabilidad**. Permite reanudar el flujo exactamente donde se interrumpió sin intentar adivinar el estado de Figma.

### 19. get_variables (Herramienta Core)
**Definición:** Herramienta del servidor MCP de Figma que recupera la lista completa de colecciones y variables (incluyendo las locales del archivo activo).
- **Uso:** Es la fuente de verdad principal para la extracción de tokens en la Fase 1 y para la validación de duplicados en la Fase 2A.

---

## Reglas Globales de Seguridad

### 19. Límite de Entorno (Filesystem)
**Definición:** Tu acceso al sistema de archivos local está **ESTRICTAMENTE LIMITADO** a la carpeta del proyecto actual (`.opencode/`).
- **Prohibición Absoluta:** **NUNCA** debes intentar explorar, listar, buscar (`grep_search`, `rg`, `find`), o ejecutar comandos en el disco duro general del usuario (ej: `C:\`, `Documentos`, carpetas de sistema).
- **Prohibición de Permisos:** **NUNCA** pidas permiso al usuario para acceder a carpetas restringidas fuera de tu entorno de proyecto, sin importar la tarea solicitada.
- **Herramienta Permitida:** La única herramienta permitida para verificar el Filesystem es `list_dir` con una ruta explícita dentro del proyecto.

**Excepción autorizada:** El archivo DESIGN.md en la raíz del proyecto es accesible por todos los agentes para lectura. El extract-subagent tiene autorización de escritura exclusiva sobre este archivo. Ningún otro agente puede escribir en la raíz del proyecto.
