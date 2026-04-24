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

## Reglas para Agentes

1. **Aplicar directamente:** Calcular el ratio con la fórmula anterior usando los valores RGBA obtenidos de `get_node_info` o del `variableMap` del State.
2. **No inventar herramientas:** No intentar llamar a `calc_wcag_contrast` como tool MCP. No existe.
3. **Corrección automática:** Si el ratio no pasa AA (< 4.5):
   - **Prioridad 1:** Buscar un stop alternativo en la rampa de color del @design-subagent.
   - **Prioridad 2:** Ajustar luminosidad del foreground (oscurecer sobre fondo claro, aclarar sobre fondo oscuro) en incrementos del 10% hasta cumplir.
4. **Registro obligatorio:** Documentar en el reporte todo ajuste realizado:
   `⚠️ CORREGIDO: [nombre] ([#original] → [#ajustado]) | Ratio: [X.X:1]`
