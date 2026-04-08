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

### Sizing (Dimensionamiento Responsivo)

| CSS | Figma API | Notas |
|-----|-----------|-------|
| `width: fit-content` | `layoutSizingHorizontal: 'HUG'` | El frame se ajusta al contenido horizontalmente |
| `height: fit-content` | `layoutSizingVertical: 'HUG'` | El frame se ajusta al contenido verticalmente |
| `width: [valor fijo]` | `layoutSizingHorizontal: 'FIXED'` + `width: valor` | Tamaño horizontal bloqueado |
| `height: [valor fijo]` | `layoutSizingVertical: 'FIXED'` + `height: valor` | Tamaño vertical bloqueado |
| `width: 100%` | `layoutSizingHorizontal: 'FILL'` | Llena el espacio del padre (Flex: 1 en el eje X) |
| `height: 100%` | `layoutSizingVertical: 'FILL'` | Llena el espacio del padre (Flex: 1 en el eje Y) |
| `flex-grow: 1` | Depende del eje: `layoutSizing(H|V): 'FILL'` | |
| `min-width: valor` | `minWidth: valor` | |
| `max-width: valor` | `maxWidth: valor` | |

### Flexbox — Dirección y distribución

| CSS | Figma API |
|-----|-----------|
| `flex-direction: row` | `layoutMode: 'HORIZONTAL'` |
| `flex-direction: column` | `layoutMode: 'VERTICAL'` |
| `flex-wrap: wrap` | `layoutWrap: 'WRAP'` |
| `flex-wrap: nowrap` | `layoutWrap: 'NO_WRAP'` |
| `gap: valor` | `itemSpacing: valor` |
| `column-gap: valor` | `itemSpacing: valor` (eje principal HORIZONTAL) |
| `row-gap: valor` | `counterAxisSpacing: valor` |

### Flexbox — Alineación del contenedor

| CSS | Figma API |
|-----|-----------|
| `justify-content: flex-start` | `primaryAxisAlignItems: 'MIN'` |
| `justify-content: center` | `primaryAxisAlignItems: 'CENTER'` |
| `justify-content: flex-end` | `primaryAxisAlignItems: 'MAX'` |
| `justify-content: space-between` | `primaryAxisAlignItems: 'SPACE_BETWEEN'` |
| `align-items: flex-start` | `counterAxisAlignItems: 'MIN'` |
| `align-items: center` | `counterAxisAlignItems: 'CENTER'` |
| `align-items: flex-end` | `counterAxisAlignItems: 'MAX'` |
| `align-items: baseline` | `counterAxisAlignItems: 'BASELINE'` |

### Flexbox — Propiedades de hijos

| CSS | Figma API | Aplicar en el nodo hijo |
|-----|-----------|------------------------|
| `align-self: stretch` | Si eje secundario: `layoutSizing(H|V): 'FILL'` | Sí |
| `align-self: center` | `layoutAlign: 'CENTER'` | Sí |
| `align-self: flex-start` | `layoutAlign: 'MIN'` | Sí |
| `align-self: flex-end` | `layoutAlign: 'MAX'` | Sí |
| `position: absolute` | `layoutPositioning: 'ABSOLUTE'` | Sí |

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
