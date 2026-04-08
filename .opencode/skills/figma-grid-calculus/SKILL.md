---
name: figma-grid-calculus
description: Calcula y valida que cualquier valor dimensional (padding, gap, width, height, border-radius) sea múltiplo exacto de 8. Redondea valores al múltiplo de 8 más cercano y devuelve el resultado corregido listo para usar en la API de Figma.
---

# Skill: Aritmética del Sistema de Cuadrícula 8px

## Propósito

Garantizar que todos los valores dimensionales en Figma sean múltiplos exactos de 8,
cumpliendo con el sistema de cuadrícula universal del proyecto.

## Cómo usar este skill

Cuando necesites validar o calcular un valor dimensional, invoca:
```
skill({ name: "figma-grid-calculus" })
```
Luego aplica las reglas siguientes.

---

## Algoritmo de redondeo

```js
/**
 * Redondea un valor al múltiplo de 8 más cercano.
 * @param {number} value - valor a redondear
 * @returns {number} múltiplo de 8 más cercano
 */
const snapToGrid = (value) => Math.round(value / 8) * 8;

// Ejemplos:
// snapToGrid(13) → 16
// snapToGrid(5)  → 8
// snapToGrid(20) → 24
// snapToGrid(28) → 32
// snapToGrid(4)  → 0  ← ojo: si da 0, usa 8 como mínimo
const snapToGridMin8 = (value) => Math.max(8, Math.round(value / 8) * 8);
```

## Valores válidos de referencia rápida

| Múltiplo | Valor |
|----------|-------|
| ×1 | 8 |
| ×2 | 16 |
| ×3 | 24 |
| ×4 | 32 |
| ×5 | 40 |
| ×6 | 48 |
| ×8 | 64 |
| ×12 | 96 |
| ×16 | 128 |

## Validación antes de crear un nodo

Antes de ejecutar cualquier `create_frame` o `set_node_properties`, verifica:

```js
const isValidGrid = (value) => value % 8 === 0;

// Lista de propiedades a validar:
const propsToCheck = [
  'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom',
  'itemSpacing', 'width', 'height', 'cornerRadius'
];

// Si alguna falla → aplicar snapToGrid antes de asignar
```

## Regla para border-radius

`cornerRadius` puede ser 0, 4 (excepción permitida para radios sutiles), 8, 16, 24...
El valor 4 es la única excepción a la regla de múltiplos de 8, aceptada para radios pequeños.
