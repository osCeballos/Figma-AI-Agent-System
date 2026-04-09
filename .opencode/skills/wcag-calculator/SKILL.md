# Skill: WCAG Calculator (Native)

Esta skill documenta el motor de cálculo de contraste nativo utilizado por los subagentes para garantizar la accesibilidad WCAG AA.

## Objetivo
Delegar el cálculo de contraste a una función nativa de alta velocidad para evitar la latencia de simulación en lenguaje natural.

## Lógica Técnica
El cálculo sigue el estándar W3C para luminancia relativa:
1.  **Linearización**: Conversión de sRGB a espacio lineal.
2.  **Luminancia (L)**: `0.2126*R + 0.7152*G + 0.0722*B`.
3.  **Ratio**: `(L1 + 0.05) / (L2 + 0.05)`.

## Uso como herramienta (MCP Tool)
`calc_wcag_contrast({ fg: ColorRGBA, bg: ColorRGBA })`

### Salida (Output)
- **ratio**: Valor numérico del contraste (ej: `4.56`).
- **passes_AA**: Booleano indicando cumplimiento del umbral 4.5:1.
- **suggested_fix**: Color hexadecimal sugerido en caso de fallo para cumplimiento inmediato.

## Reglas para Agentes
1.  **Preferencia de Tool**: Siempre llamar a la herramienta `calc_wcag_contrast` antes de emitir un veredicto de accesibilidad.
2.  **Confianza en Veredicto**: No intentar "corregir" o "re-calcular" manualmente el resultado devuelto por la herramienta.
3.  **Uso de Suggested Fix**: Si `passes_AA` es `false`, el agente debe proponer o aplicar directamente el `suggested_fix` proporcionado por el motor.

---
*Implementación técnica disponible en `./wcag-contrast-tool.js`*
