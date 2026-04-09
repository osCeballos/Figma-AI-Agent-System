---
name: GLOSSARY
description: Glosario Técnico del Figma Agent Ecosystem
mode: subagent
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
**Definición:** Una propiedad declarada en un componente maestro de Figma que permite personalizar instancias sin romper el vínculo con el componente original. Existen exactamente 4 tipos soportados por la API:
- **BOOLEAN:** Controla la visibilidad de una capa hija (true = visible, false = oculto).
- **TEXT:** Permite sobrescribir el contenido de texto de una capa hija en la instancia. **Importante:** El valor por defecto siempre debe ser un string explicito (ej. `"Label"`).
- **INSTANCE_SWAP:** Permite reemplazar un componente hijo por otro componente diferente en la instancia.
- **VARIANT (Conceptual):** Define estados discretos del componente (ej: State=Default, State=Hover). **Nota técnica:** En este sistema, las variantes se crean mediante nomenclatura de nodos maestros y la herramienta `combine_as_variants`, no mediante `add_component_property`.
- **Términos obsoletos:** "Prop", "Propiedad de variante", "Override".
- **Uso:** "Añadir una Component Property de tipo BOOLEAN llamada HasIcon al componente Button."

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
**Definición:** La función comunicativa asignada a un color dentro del sistema, independiente de su valor concreto. Los roles estándar del sistema son: brand-primary, brand-secondary, background, surface, text-primary, text-secondary, success, warning, error.
- **Uso:** Ningún token de color puede crearse sin asignarle un rol semántico.

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
**Definición:** Estrategia de diseño que consiste en mover la validación de accesibilidad a las fases más tempranas del proceso (Fase A: Tokens). Esto garantiza que los cimientos del diseño sean accesibles antes de construir layouts o componentes, evitando correcciones costosas en fases finales.
