# Skill: SVG Asset Library

Este skill centraliza todos los activos vectoriales para el sistema de diseño en Figma.
Previene el código "spaghetti" (cadenas XML in-line) en los prompts de los agentes.

## Uso para Subagentes

Cuando necesites un icono o gráfico vectorial:

1.  **NO definas el SVG en tu prompt**.
2.  Consulta `skills/svg-library/registry.json` para encontrar la ruta del activo deseado.
3.  Usa `view_file` para leer el archivo `.svg` correspondiente.
4.  Pasa el contenido recuperado a la herramienta `createNodeFromSvg` de Figma.

## Herramientas principales

- `get_styles` — opcionalmente para mapear colores a los SVGs.
- `view_file` — para extraer la cadena XML del SVG desde el sistema de archivos.

## Ejemplo de Flujo

```
Agente: Necesito un icono de búsqueda.
Acción: view_file(RelativePath: "skills/svg-library/assets/icons/search.svg")
Respuesta: <svg ...>...</svg>
Acción: createNodeFromSvg({ svg: svgString, x: 0, y: 0 })
```

## Regla de Portabilidad Estricta

> [!CAUTION]
> **PROHIBIDO EL USO DE RUTAS ABSOLUTAS:** El agente jamás debe utilizar rutas locales absolutas (ej: `c:/Users/...`). Todas las referencias a archivos en prompts, ejemplos y llamadas a herramientas deben ser **rutas relativas** a la raíz del espacio de trabajo (`skills/...`, `agents/...`). Esto garantiza que el sistema de agentes pueda desplegarse en cualquier entorno OpenCode sin modificaciones adicionales.

## Convenciones de Activos (System Defaults)

- **Grid:** Todos los iconos deben ser `24x24` por defecto.
- **Color:** Usar `currentColor` en los strokes/fills para permitir la tematización dinámica en Figma.
- **Herramientas:** Usar siempre `view_file` para extraer la cadena XML; nunca incrustar XML in-line en el prompt.
