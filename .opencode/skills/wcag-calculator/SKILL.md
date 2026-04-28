# Skill: WCAG Contrast Calculator (Fórmula Inline)

Esta skill documenta el motor de cálculo de contraste utilizado por los subagentes para garantizar la accesibilidad WCAG AA.

> [!WARNING]
> **Esta skill NO es una herramienta MCP invocable.** No existe ningún tool llamado `calc_wcag_contrast` en el servidor MCP de Figma. Los agentes deben aplicar la fórmula directamente con los valores RGBA disponibles.

## Objetivo
Proveer la fórmula estándar W3C para que los subagentes calculen el contraste de forma nativa, sin depender de herramientas externas.

## Fórmula Técnica (W3C WCAG 2.1)

### Paso 1: Linealización del canal sRGB
Para cada canal (R, G, B) con valores en rango 0–1:

```
Si C <= 0.04045:
  Clinear = C / 12.92
Si no:
  Clinear = ((C + 0.055) / 1.055) ^ 2.4
```

> **Nota:** Si los valores vienen en rango 0–255, dividir por 255 primero.

### Paso 2: Luminancia relativa
```
L = 0.2126 * Rlinear + 0.7152 * Glinear + 0.0722 * Blinear
```

### Paso 3: Ratio de contraste
```
Ratio = (max(L1, L2) + 0.05) / (min(L1, L2) + 0.05)
```

### Paso 4: Veredicto
- **WCAG AA (texto normal):** Ratio >= 4.5
- **WCAG AA (texto grande, >=18pt o >=14pt bold):** Ratio >= 3.0
- **WCAG AAA:** Ratio >= 7.0

## Algoritmo de Corrección (Pseudo-código)

Si el ratio es **< 4.5**, el agente debe ejecutar uno de estos dos flujos de remediación:

### Flujo A: Con Paleta Disponible (Recomendado)
Si el `@design-subagent` ha provisto una rampa de colores (`state.design.palette`):
1. Filtrar los colores de la rampa que tengan un **Ratio >= 4.5** contra el fondo.
2. De los candidatos, seleccionar aquel cuya **luminancia relativa sea la más cercana** al color original.
3. Este método preserva la intención cromática del diseño original.

### Flujo B: Sin Paleta (Ajuste por Luminancia)
Si no hay rampa disponible, realizar un ajuste matemático iterativo:
1. Definir dirección:
   - Si `L_fondo > L_original`: **Oscurecer** (reducir luminancia).
   - Si `L_fondo < L_original`: **Aclarar** (aumentar luminancia).
2. Iterar (máximo 10 veces):
   - Modificar canales R, G, B en incrementos de **±0.1 (10%)**.
   - Re-calcular ratio.
   - Si `Ratio >= 4.5` → DETENER e informar.
3. Fallback Final: Si tras 10 iteraciones no se cumple:
   - Fondo claro (`L > 0.5`) → Usar **Negro Puro** `{r:0, g:0, b:0, a:1}`.
   - Fondo oscuro (`L <= 0.5`) → Usar **Blanco Puro** `{r:1, g:1, b:1, a:1}`.

## Reglas para Agentes

1. **Cálculo Nativo:** Ejecutar el algoritmo anterior internamente. **No invocar herramientas MCP inexistentes.**
2. **Prioridad de Corrección:** Seguir siempre el **Flujo A** si hay paleta. Solo usar el **Flujo B** como último recurso.
3. **Registro de Transparencia:** Cada corrección debe reportarse al Director en el reporte textual y en el bloque `manual_actions` si requiere revisión humana especial.
4. **Respeto de Roles:** No cambiar el color de fondo (`bg`) para arreglar el contraste; el ajuste siempre se realiza sobre el color de frente (`fg`) a menos que el brief indique lo contrario.

