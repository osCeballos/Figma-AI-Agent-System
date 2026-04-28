# Design System Reference

Este documento define la fuente de verdad y las reglas de diseño globales que todos los subagentes deben seguir para garantizar la consistencia en Figma.

## Reglas Globales

Antes de ejecutar cualquier tarea, lee el archivo `DESIGN.md` de la raíz del proyecto.
Este archivo contiene el sistema de diseño real extraído del archivo Figma. Es tu fuente de verdad. Todos los valores que uses deben venir de los tokens definidos en él.

**Reglas obligatorias:**
- **Colores** → usa únicamente tokens de `colors.*`. Nunca escribas un hex directamente.
- **Tipografía** → usa únicamente tokens de `typography.*`. Nunca especifiques font-size o font-family sin referenciar un token.
- **Espaciado** → usa únicamente valores de `spacing.*`. Todos deben ser múltiplos de 8px (excepción: 4px para micro-ajustes internos).
- **Border radius** → usa únicamente valores de `rounded.*`.
- **Componentes** → comprueba `components.*` antes de crear un componente desde cero. Si ya está definido, úsalo como base.

## Fallback de Seguridad

Si no existe `DESIGN.md`:
Informa al `figma-director` antes de continuar. No ejecutes la tarea sin contexto de diseño.
