---
name: css-to-figma-api
description: Traduce propiedades CSS modernas (Flexbox, Grid, sizing, alignment) a sus equivalentes en la API de Figma. Fuente única de verdad para el mapeo CSS-Figma. Usar en lugar de hardcodear traducciones en los prompts de los subagentes.
---

# Skill: Traducción CSS → API de Figma

## Propósito

Centralizar el mapeo de propiedades CSS a la API de Figma para evitar errores
y asegurar consistencia entre todos los subagentes.

## Cómo usar este skill

```
skill({ name: "css-to-figma-api" })
```

---

## Tabla de traducción completa (Modern AutoLayout)

> [!IMPORTANT]
> **Mapeo de herramientas MCP:** Esta tabla traduce CSS → propiedades de la API de Figma. Pero **no todas las propiedades se configuran con la misma herramienta MCP:**
> - **`set_auto_layout`** acepta: `layoutMode`, `paddingTop/Bottom/Left/Right`, `itemSpacing`, `primaryAxisAlignItems`, `counterAxisAlignItems`, `layoutWrap`.
> - **`set_node_properties`** acepta: `layoutSizingHorizontal`, `layoutSizingVertical`, `counterAxisSpacing`, `layoutAlign`, `layoutPositioning`, `minWidth`, `maxWidth`, `visible`, `locked`, `opacity`.
> - **`set_corner_radius`** acepta: `radius`, `corners[]`.
>
> Si una propiedad no está disponible en ninguna de estas herramientas, se marca con ⚠️ en la tabla.

### Sizing (Dimensionamiento Responsivo)

| CSS | Figma API | Herramienta MCP | Notas |
|-----|-----------|----------------|-------|
| `width: fit-content` | `layoutSizingHorizontal: 'HUG'` | `set_node_properties` | El frame se ajusta al contenido horizontalmente |
| `height: fit-content` | `layoutSizingVertical: 'HUG'` | `set_node_properties` | El frame se ajusta al contenido verticalmente |
| `width: [valor fijo]` | `layoutSizingHorizontal: 'FIXED'` + `width: valor` | `set_node_properties` | Tamaño horizontal bloqueado |
| `height: [valor fijo]` | `layoutSizingVertical: 'FIXED'` + `height: valor` | `set_node_properties` | Tamaño vertical bloqueado |
| `width: 100%` | `layoutSizingHorizontal: 'FILL'` | `set_node_properties` | Llena el espacio del padre |
| `height: 100%` | `layoutSizingVertical: 'FILL'` | `set_node_properties` | Llena el espacio del padre |
| `flex-grow: 1` | Depende del eje: `layoutSizing(H|V): 'FILL'` | `set_node_properties` | |
| `min-width: valor` | `minWidth: valor` | `set_node_properties` | |
| `max-width: valor` | `maxWidth: valor` | `set_node_properties` | |

### Flexbox — Dirección y distribución

| CSS | Figma API | Herramienta MCP |
|-----|-----------|-----------------|
| `flex-direction: row` | `layoutMode: 'HORIZONTAL'` | `set_auto_layout` |
| `flex-direction: column` | `layoutMode: 'VERTICAL'` | `set_auto_layout` |
| `flex-wrap: wrap` | `layoutWrap: 'WRAP'` | `set_auto_layout` |
| `flex-wrap: nowrap` | `layoutWrap: 'NO_WRAP'` | `set_auto_layout` |
| `gap: valor` | `itemSpacing: valor` | `set_auto_layout` |
| `column-gap: valor` | `itemSpacing: valor` (eje principal HORIZONTAL) | `set_auto_layout` |
| `row-gap: valor` | `counterAxisSpacing: valor` | `set_node_properties` |

### Flexbox — Alineación del contenedor

| CSS | Figma API | Herramienta MCP |
|-----|-----------|-----------------|
| `justify-content: flex-start` | `primaryAxisAlignItems: 'MIN'` | `set_auto_layout` |
| `justify-content: center` | `primaryAxisAlignItems: 'CENTER'` | `set_auto_layout` |
| `justify-content: flex-end` | `primaryAxisAlignItems: 'MAX'` | `set_auto_layout` |
| `justify-content: space-between` | `primaryAxisAlignItems: 'SPACE_BETWEEN'` | `set_auto_layout` |
| `align-items: flex-start` | `counterAxisAlignItems: 'MIN'` | `set_auto_layout` |
| `align-items: center` | `counterAxisAlignItems: 'CENTER'` | `set_auto_layout` |
| `align-items: flex-end` | `counterAxisAlignItems: 'MAX'` | `set_auto_layout` |
| `align-items: baseline` | `counterAxisAlignItems: 'BASELINE'` | ⚠️ No disponible en `set_auto_layout` (solo MIN/CENTER/MAX) |

### Flexbox — Propiedades de hijos

| CSS | Figma API | Herramienta MCP | Aplicar en el nodo hijo |
|-----|-----------|-----------------|------------------------|
| `align-self: stretch` | Si eje secundario: `layoutSizing(H|V): 'FILL'` | `set_node_properties` | Sí |
| `align-self: center` | `layoutAlign: 'CENTER'` | `set_node_properties` | Sí |
| `align-self: flex-start` | `layoutAlign: 'MIN'` | `set_node_properties` | Sí |
| `align-self: flex-end` | `layoutAlign: 'MAX'` | `set_node_properties` | Sí |
| `position: absolute` | `layoutPositioning: 'ABSOLUTE'` | `set_node_properties` | Sí |

---

## Reglas de Oro de Sizing

1. **PROHIBIDO** usar `primaryAxisSizingMode` y `counterAxisSizingMode`. Se consideran obsoletos para este agente.
2. **FILL** (`layoutSizingHorizontal: 'FILL'`) solo es válido si el nodo está dentro de un contenedor AutoLayout.
3. **HUG** (`layoutSizingHorizontal: 'HUG'`) requiere que el nodo tenga hijos.
4. **FIXED** es el valor por defecto si no se especifica dimensionamiento responsivo.

---

---

## Cuadrícula Responsiva y Envoltorio (Wrapping)

| CSS | Figma API | Notas |
|-----|-----------|-------|
| `flex-wrap: wrap` | `layoutMode: 'HORIZONTAL'` + `layoutWrap: 'WRAP'` | Activa el salto de línea |
| `display: grid` | **Simulación:** `layoutMode: 'HORIZONTAL'` + `layoutWrap: 'WRAP'` | **PROHIBIDO** usar el modo GRID nativo |
| `gap: valor` (en wrap) | `itemSpacing: valor` + `counterAxisSpacing: valor` | Aplica gap en ambos ejes |
| `repeat(auto-fit, ...)`| Hijos con `layoutSizingHorizontal: 'FILL'` | Emula el crecimiento hasta llenar fila |

---

## Casos especiales e Instrucciones de Seguridad

1. **Intercepción de 'Grid'**: Si el usuario o el Director solicitan un 'Grid', el agente debe aplicar silenciosamente la combinación `layoutMode: 'HORIZONTAL'` + `layoutWrap: 'WRAP'`. Esto garantiza que la operación sea compatible con el servidor MCP.
2. **`width: 100%`** mapea siempre a **`layoutSizingHorizontal: 'FILL'`** (nunca a `layoutAlign: 'STRETCH'`).
3. **`position: absolute`** en Figma saca el nodo del flujo del AutoLayout pero lo mantiene dentro del padre.
4. **Validación de Gaps**: Tanto `itemSpacing` como `counterAxisSpacing` deben validarse con la skill `figma-grid-calculus` antes de la aplicación.
