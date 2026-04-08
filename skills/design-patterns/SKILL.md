---
name: design-patterns
description: Skill de patrones UI/UX. Define cuándo usar cada patrón de interfaz y su estructura de componente recomendada. Consultar obligatoriamente antes de decidir qué tipo de componente crear. Contiene 5 categorías en archivos separados.
---

# Skill: Design Patterns UI/UX

## Propósito
Evitar decisiones arbitrarias de arquitectura de interfaz. Antes de crear cualquier componente, el agente debe consultar este skill para elegir el patrón correcto según el contexto.

## Cómo usar este skill

Paso 1: Identifica la categoría del componente que necesitas:

| Si necesitas... | Consulta este archivo |
|---|---|
| Navegar entre secciones, pasos o jerarquías | skills/design-patterns/navigation.md |
| Mostrar contenido sobre la interfaz actual | skills/design-patterns/overlays.md |
| Comunicar estados, errores o confirmaciones | skills/design-patterns/feedback.md |
| Capturar datos o input del usuario | skills/design-patterns/forms.md |
| Mostrar conjuntos de datos o contenido | skills/design-patterns/content.md |

Paso 2: Lee el archivo de categoría correspondiente.
Paso 3: Aplica el árbol de decisión de ese archivo para seleccionar el patrón exacto.
Paso 4: Usa la estructura de componente recomendada como base para la Fase B.

## Regla de uso obligatorio

> [!IMPORTANT]
> El @design-subagent y el @layout-subagent tienen PROHIBIDO elegir un patrón de componente sin haber consultado primero el archivo de categoría correspondiente. Si el patrón requerido no está documentado en ninguna categoría, reportarlo al Director como gap del skill antes de improvisar.

## Cuándo NO consultar este skill
- Para componentes atómicos sin lógica de interacción (iconos, dividers, badges simples)
- Cuando el usuario especifica explícitamente el patrón que quiere usar
