<div align="center">

# Figma AI Agent System

![Demostración del sistema en acción: un agente de IA recibe una petición en texto y construye automáticamente un diseño en Figma Desktop](https://github.com/user-attachments/assets/df079c92-b51d-42ca-9935-e51dff5d520c)

<br>

[![Node.js ≥ 20 requerido](https://img.shields.io/badge/Node.js-≥20-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-3178C6?style=flat-square)](LICENSE)
[![Compatible con Figma Desktop](https://img.shields.io/badge/Figma-Desktop-F24E1E?style=flat-square&logo=figma&logoColor=white)](https://www.figma.com/downloads/)
[![Powered by Opencode](https://img.shields.io/badge/Powered_by-Opencode-8B5CF6?style=flat-square)](https://opencode.ai/)

<br>

> Describe un diseño con palabras y un equipo de agentes de IA lo construye en Figma por ti —respetando grids, tipografía, accesibilidad y sistemas de componentes.

</div>

---

## ¿Qué hace este sistema?

Este proyecto automatiza tu flujo de trabajo en Figma mediante un sistema multiagente controlado por lenguaje natural. En lugar de renderizar imágenes estáticas, este equipo de agentes genera maquetas reales directamente en tu archivo de Figma Desktop, configurando AutoLayout, variables de color, tokens tipográficos y ejecutando una auditoría de accesibilidad WCAG 2.1 AA en tiempo real.

El sistema genera elementos listos para producción:

- Estructuras complejas: Diseña tarjetas, formularios y layouts completos usando AutoLayout real, no vectores sueltos.
- Paletas de color inteligentes: Crea esquemas de color con validación de contraste automatizada integrada.
- Sistemas de tokens nativos: Traduce tus decisiones de diseño (color, espaciado, tipografía) en variables nativas de Figma.
- Componentes interactivos: Desarrolla componentes reutilizables con variantes de estado configuradas (Default, Hover, Disabled).

---

## Arquitectura del sistema

El sistema sigue un **pipeline secuencial por fases**, orquestado por el `figma-director`. Cada fase es ejecutada por un subagente especializado. El Director mantiene un objeto de estado central (State JSON) que se actualiza con los deltas que devuelve cada subagente.

```
figma-director
  ├── @memory-subagent      → Fase 0:  Contexto evolutivo (preferencias del usuario)
  ├── @design-subagent      → Fase 1:  Propuesta visual (paleta, tipografía, Matriz de Contraste)
  ├── @tokens-subagent      → Fase 2A: Variables y tokens en Figma
  ├── @layout-subagent      → Fase 2B: Frames y AutoLayout (requiere 2A completada)
  ├── @components-subagent  → Fase 3:  Componentización y variantes
  └── @auditor-subagent     → Fase 4:  Auditoría WCAG y coherencia del sistema de diseño
```

**Canal de comunicación:** Opencode → MCP Server (`claude-talk-to-figma-mcp`) → WebSocket (puerto 3055) → Plugin Figma Desktop

### Subagentes y responsabilidades

| Agente | Fase | Responsabilidad |
|---|---|---|
| `figma-director` | Orquestador | Conecta, planifica, delega e integra los deltas de cada subagente |
| `memory-subagent` | 0 | Lee y escribe `user-preferences.json`, `learning-log.md` y `performance_history.json` |
| `design-subagent` | 1 | Propone paleta cromática, tipografía y Matriz de Contraste; requiere aprobación del usuario antes de continuar |
| `tokens-subagent` | 2A | Crea la colección de variables de Figma y devuelve el `variableMap` |
| `layout-subagent` | 2B | Crea frames con AutoLayout; depende del `variableMap` de la Fase 2A |
| `components-subagent` | 3 | Componentiza los frames creados; reutiliza componentes existentes si los hay |
| `auditor-subagent` | 4 | Verifica contrastes WCAG AA y coherencia del design system; puede auto-corregir |
| `extract-subagent` | Auxiliar | Extrae el sistema de diseño de Figma y genera `DESIGN.md` |
| `validator-subagent` | Auxiliar | Valida la estructura y consistencia del `DESIGN.md` |

### Mecanismos clave

- **Estado central transaccional:** el Director mantiene un único objeto JSON con checkpoints por fase. Si el pipeline se interrumpe, se reanuda desde la última fase completada con éxito.
- **Aprobación humana obligatoria en Fase 1:** el sistema nunca escribe en Figma sin que el usuario haya aprobado la propuesta visual.
- **Secuencia garantizada 2A → 2B:** el `layout-subagent` no se lanza hasta que el `variableMap` de la Fase 2A esté integrado en el State. Esto elimina la condición de carrera de las versiones anteriores.
- **Cálculo WCAG inline:** el ratio de contraste se calcula con la fórmula de luminancia relativa (L = 0.2126·R + 0.7152·G + 0.0722·B) directamente por el agente, sin depender de herramientas externas.
- **Protección anti-duplicados:** el Director filtra el inventario de componentes existentes antes de delegar la Fase 3.

---

## Requisitos previos

| Herramienta | Versión mínima | Instalación |
|---|---|---|
| [Node.js](https://nodejs.org/) | ≥ 20 LTS | Descarga el instalador LTS de nodejs.org |
| [Git](https://git-scm.com/) | Cualquier versión reciente | git-scm.com/download (Windows) o `git --version` (Mac instala automáticamente) |
| [Figma Desktop](https://www.figma.com/downloads/) | Versión actual | figma.com/downloads — **la versión web no funciona** |
| [Opencode](https://opencode.ai/) | Versión actual | Ver instrucciones abajo |

También necesitas:
- Una **cuenta activa de Figma**
- Una **API key del proveedor de IA** que uses con Opencode (por defecto, Anthropic). Créala en [console.anthropic.com](https://console.anthropic.com/)
- Un **Personal Access Token de Figma** (Figma → Settings → Security → Personal access tokens)

---

## Instalación

### 1. Instala Node.js

1. Ve a [nodejs.org](https://nodejs.org/) y descarga la versión **LTS**
2. Instala con todas las opciones por defecto
3. Verifica:

```bash
node --version
# Debe mostrar v20.x.x o superior
```

### 2. Instala Git

- **Windows:** [git-scm.com/download/win](https://git-scm.com/download/win), instalación con opciones por defecto
- **Mac:** ejecuta `git --version` en la terminal; si no está instalado, el sistema ofrece instalarlo

### 3. Instala Figma Desktop

Descarga e instala desde [figma.com/downloads](https://www.figma.com/downloads/). Abre la app e inicia sesión.

### 4. Instala Opencode

```bash
# Opción 1 (recomendada)
curl -fsSL https://opencode.ai/install | bash

# Opción 2 (si la anterior falla)
npm i -g opencode-ai
```

Verifica:

```bash
opencode --version
```

### 5. Clona el repositorio

```bash
git clone https://github.com/osCeballos/figma-ai-agent-system.git
cd figma-ai-agent-system
```

El repositorio no tiene dependencias npm propias. No es necesario ejecutar `npm install`.

---

## Configuración

El único archivo de configuración que necesitas crear o ajustar es `opencode.json` en la raíz del proyecto. El repositorio ya incluye una plantilla funcional:

```json
{
  "name": "Figma AI Agent System",
  "mcpServers": {
    "figma": {
      "type": "local",
      "command": "npx",
      "args": ["-y", "claude-talk-to-figma-mcp"],
      "enabled": true,
      "environment": {
        "FIGMA_PAT": "pega-aquí-tu-token"
      }
    },
    "filesystem": {
      "type": "local",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "."],
      "enabled": true
    }
  }
}
```

**Pasos:**

1. Abre `opencode.json` con cualquier editor de texto
2. Sustituye `"pega-aquí-tu-token"` por tu **Personal Access Token de Figma**
3. Guarda el archivo

> [!WARNING]
> Solo deben existir los servidores MCP `figma` y `filesystem`. No añadas ningún otro servidor.

---

## Uso

### Arrancar el servidor WebSocket

El plugin de Figma se comunica con los agentes a través de un servidor WebSocket local incluido en el paquete `claude-talk-to-figma-mcp`. Arráncalo con:

```bash
npx -y claude-talk-to-figma-mcp
```

> [!IMPORTANT]
> Este proceso debe permanecer activo mientras trabajas. Si lo cierras, el plugin pierde la conexión.

### Instalar el plugin en Figma Desktop

1. Abre **Figma Desktop** (la app, no el navegador)
2. Haz clic en el logo de Figma → **Plugins → Development → Import plugin from manifest...**
3. Selecciona el archivo:

```
.opencode/skills/svg-library/SKILL.md
```

> [!NOTE]
> El repositorio no incluye una carpeta `src/claude_mcp_plugin/`. El plugin se gestiona a través del paquete npm `claude-talk-to-figma-mcp`.

### Conectar y diseñar

1. Abre cualquier archivo en Figma Desktop
2. Ejecuta el plugin: **Plugins → Development → Figma AI Agent** → anota el **número de canal** (en verde)
3. En la terminal, dentro de la carpeta del proyecto, lanza Opencode:

```bash
opencode
```

4. En el chat de Opencode, indica el número de canal:

```
Conecta con Figma, canal [número que ves en el plugin]
```

5. Escribe tu petición de diseño. El agente presentará una propuesta visual y esperará tu aprobación antes de escribir nada en Figma.

**Ejemplos de peticiones:**

```
Crea una tarjeta de producto para una tienda de ropa.
Necesita imagen, nombre del producto, precio y botón de compra.
```

```
Diseña una pantalla de inicio de sesión con campo de email,
contraseña y botón. Estilo moderno y minimalista.
```

### Script de inicio rápido (opcional)

Para arrancar el servidor y Opencode con un doble clic:

**Windows — `iniciar.bat`:**

```batch
@echo off
start cmd /k "npx -y claude-talk-to-figma-mcp"
start cmd /k "opencode"
```

**Mac — `iniciar.command`:**

```bash
#!/bin/bash
cd "$(dirname "$0")"
osascript -e 'tell application "Terminal" to do script "cd \"'$(pwd)'\"; npx -y claude-talk-to-figma-mcp"'
opencode
```

En Mac, tras crear el archivo, hazlo ejecutable:

```bash
chmod +x iniciar.command
```

### Cerrar el sistema

Pulsa <kbd>Ctrl</kbd> + <kbd>C</kbd> en cada ventana de terminal activa para detener los procesos.

---

## Estructura del proyecto

```
figma-ai-agent-system/
│
├── .opencode/
│   ├── agents/
│   │   ├── figma-director.md           ← Orquestador central del pipeline
│   │   ├── memory-subagent.md          ← Fase 0: Contexto evolutivo
│   │   ├── design-subagent.md          ← Fase 1: Propuesta visual
│   │   ├── tokens-subagent.md          ← Fase 2A: Variables y tokens
│   │   ├── layout-subagent.md          ← Fase 2B: Frames y AutoLayout
│   │   ├── components-subagent.md      ← Fase 3: Componentización
│   │   ├── auditor-subagent.md         ← Fase 4: Auditoría WCAG
│   │   ├── extract-subagent.md         ← Auxiliar: extracción de design system
│   │   ├── validator-subagent.md       ← Auxiliar: validación de DESIGN.md
│   │   ├── GLOSSARY.md                 ← Glosario técnico oficial del sistema
│   │   └── memory/
│   │       ├── user-preferences.json   ← Preferencias persistidas entre sesiones
│   │       ├── learning-log.md         ← Bitácora de aprendizaje continuo
│   │       └── performance_history.json← Historial de sesiones
│   │
│   └── skills/
│       ├── css-to-figma-api/
│       │   └── SKILL.md                ← Mapeo completo CSS → API de Figma
│       ├── wcag-calculator/
│       │   └── SKILL.md                ← Algoritmo WCAG 2.1 (fórmula de luminancia)
│       ├── figma-grid-calculus/
│       │   └── SKILL.md                ← Validador de múltiplos de 8px
│       ├── design-system-reference/
│       │   └── SKILL.md                ← Reglas globales compartidas por todos los agentes
│       ├── design-patterns/
│       │   ├── SKILL.md
│       │   ├── navigation.md
│       │   ├── forms.md
│       │   ├── overlays.md
│       │   ├── feedback.md
│       │   └── content.md
│       └── svg-library/
│           ├── registry.json           ← Índice de los 23 iconos disponibles
│           └── assets/icons/           ← Archivos SVG (24×24, currentColor)
│
├── logs/
│   └── corregidos/                     ← Logs de correcciones aplicadas
│
├── DESIGN.md                           ← Design system extraído (generado automáticamente)
├── SYSTEM_AUDIT_REPORT.md              ← Informe de auditoría de arquitectura
├── opencode.json                       ← Configuración de servidores MCP
├── .gitignore
└── README.md
```

> [!NOTE]
> `DESIGN.md` se genera y actualiza automáticamente mediante el `@extract-subagent` al inicio de cada sesión o bajo demanda. No lo edites a mano. Para regenerarlo, dile al agente: _"Actualiza el sistema de diseño"_.

---

## Iconos disponibles

La librería SVG incluye 23 iconos en formato 24×24 px con `currentColor`:

`alert` · `arrow-down` · `arrow-left` · `arrow-right` · `arrow-up` · `bell` · `check` · `chevron-down` · `chevron-left` · `chevron-right` · `close` · `copy` · `edit` · `external-link` · `eye` · `home` · `info` · `menu` · `plus` · `search` · `settings` · `trash` · `user`

---

## Créditos

- **Plugin de conexión con Figma:** [claude-talk-to-figma-mcp](https://github.com/arinspunk/claude-talk-to-figma-mcp) por arinspunk
- **Licencia:** MIT — puedes usar, modificar y distribuir libremente

---

<div align="center">

**Autor:** Oscar Ceballos Cano &nbsp;·&nbsp; **Año:** 2026

</div>
