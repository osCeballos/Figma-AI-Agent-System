# Auditoría del Sistema Multiagente Figma AI

**Arquitecto:** Antigravity (Auditor Principal)
**Fecha:** 28 de Abril de 2026
**Estado del Sistema:** ALERTA (Requiere remediación de arquitectura y sincronización)

---

## 1. RESUMEN DE HALLAZGOS

El sistema presenta una arquitectura robusta en su intención (Single Source of Truth, validación WCAG temprana), pero adolece de problemas críticos de sincronización de datos y condiciones de carrera en el flujo paralelo que impedirían su correcto funcionamiento en un entorno de producción real.

### Tabla Resumen de Problemas

| ID | Título del Problema | Severidad | Archivo Principal |
|---|---|---|---|
| ID-01 | Desfase de Nomenclatura en Pipeline | GRAVE | `figma-director.md` |
| ID-02 | Condición de Carrera Fase 2A/2B | **CRÍTICO** | `figma-director.md` |
| ID-03 | Ausencia de `wcag-contrast-tool.js` | MODERADO | `skills/wcag-calculator/` |
| ID-04 | Inconsistencia Estructura State | GRAVE | `design-subagent.md` |
| ID-05 | Discrepancia Herramientas MCP | MODERADO | `css-to-figma-api/SKILL.md` |
| ID-06 | Configuración MCP Inválida | GRAVE | `opencode.json` |
| ID-07 | Límite de Entorno Restrictivo | MODERADO | `figma-director.md` |
| ID-08 | Contradicción de Binding en Auditor | LEVE | `auditor-subagent.md` |
| ID-09 | Nombres de Color (camel vs kebab) | LEVE | `user-preferences.json` |
| ID-10 | Protocolo Huérfano: Fase 0.5 | LEVE | `memory-subagent.md` |

---

## 2. DETALLE DE PROBLEMAS CRÍTICOS Y GRAVES

### [ID-02] Condición de Carrera en Fase 2 (Arquitectura Paralela)
**Severidad:** CRÍTICO
**Archivos implicados:** `figma-director.md` (162-188), `layout-subagent.md` (19, 31, 173)
**Descripción:** El Director lanza las Fases 2A (Tokens) y 2B (Layout) en paralelo. Sin embargo, el `layout-subagent` (2B) requiere los `variableId` generados en la Fase 2A para realizar el `Binding de variable`. Al operar sobre el mismo snapshot inicial del State, el layout-subagent recibirá un `variableMap` vacío.
**Impacto en runtime:** Fallo masivo en la aplicación de colores. Los nodos se crearán sin bindings, rompiendo la coherencia con el sistema de diseño.
**Solución propuesta:** Modificar el flujo del Director para que sea secuencial: Fase 2A → Sincronización → Fase 2B.

### [ID-01] Desfase de Nomenclatura en el Pipeline
**Severidad:** GRAVE
**Archivos implicados:** `figma-director.md`, `memory-subagent.md`, `design-subagent.md`
**Descripción:** Inconsistencia terminológica. El Director usa `Fase 0-4`, mientras subagentes usan `Fase A` o `Fase 0.5`.
**Impacto en runtime:** Errores de validación de checkpoints y pérdida de trazabilidad en el State central.
**Solución propuesta:** Normalizar todos los prompts a la nomenclatura numérica de `figma-director.md`.

### [ID-04] Inconsistencia en Estructura de State (Palette/Typography)
**Severidad:** GRAVE
**Archivos implicados:** `figma-director.md`, `design-subagent.md`, `memory-subagent.md`
**Descripción:** El State central define campos planos, pero el `@design-subagent` devuelve deltas anidados (`palette.color.default.r`).
**Impacto en runtime:** El Director rechazará los deltas en el "Guard de Integridad", bloqueando el pipeline tras la Fase 1.
**Solución propuesta:** Unificar el esquema del State en `GLOSSARY.md` (se recomienda adoptar la estructura anidada).

### [ID-06] Configuración de MCP Inválida para `design-md-cli`
**Severidad:** GRAVE
**Archivos implicados:** `opencode.json`
**Descripción:** Registro de un CLI (`npx @google/design.md`) como servidor MCP local sin serlo.
**Impacto en runtime:** El sistema OpenCode fallará al intentar conectar con el servidor inexistente, impidiendo el arranque.
**Solución propuesta:** Eliminar el registro de `mcpServers` y asegurar acceso vía herramienta `shell`.

---

## 3. PROBLEMAS MODERADOS Y LEVES

### [ID-03] Ausencia del Archivo `wcag-contrast-tool.js`
**Severidad:** MODERADO
**Descripción:** Referencia a un archivo inexistente en el disco.
**Solución:** Consolidar el uso de la fórmula inline en `SKILL.md`.

### [ID-05] Discrepancia de Herramientas en `css-to-figma-api`
**Severidad:** MODERADO
**Descripción:** `counterAxisSpacing` se asigna a herramientas distintas en el Skill y en el Subagente de Layout.
**Solución:** Sincronizar el prompt del Layout con el Skill técnico.

### [ID-07] Límite de Entorno Restrictivo
**Severidad:** MODERADO
**Descripción:** El Director se prohíbe a sí mismo acceder a la raíz donde reside `DESIGN.md`.
**Solución:** Ampliar el límite de entorno en `GLOSSARY.md` para incluir la raíz del proyecto.

---

## 4. CONCLUSIÓN Y RECOMENDACIÓN

El sistema requiere una intervención inmediata en el **Figma Director** para resolver la condición de carrera de la Fase 2 y unificar el esquema de datos del **State Central**. Una vez resueltos estos puntos, el sistema tiene el potencial de ser uno de los orquestadores de diseño más precisos del ecosistema.

---
*Reporte generado automáticamente por la unidad de Auditoría Antigravity.*
