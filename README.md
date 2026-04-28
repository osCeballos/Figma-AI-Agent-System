<div align="center">

# Figma AI Agent System v2.0

![Demostración del sistema en acción: un agente de IA recibe una petición en texto y construye automáticamente un diseño en Figma Desktop](https://github.com/user-attachments/assets/df079c92-b51d-42ca-9935-e51dff5d520c)

<br>

[![Node.js ≥ 20 requerido](https://img.shields.io/badge/Node.js-≥20-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-3178C6?style=flat-square)](LICENSE)
[![Compatible con Figma Desktop](https://img.shields.io/badge/Figma-Desktop-F24E1E?style=flat-square&logo=figma&logoColor=white)](https://www.figma.com/downloads/)
[![Powered by Opencode](https://img.shields.io/badge/Powered_by-Opencode-8B5CF6?style=flat-square)](https://opencode.ai/)
[![Estado del sistema](https://img.shields.io/badge/Sistema-Operatividad_Determinista-22C55E?style=flat-square)](./CHANGELOG.md)

<br>

> Describe un diseño con palabras y un equipo de agentes de IA lo construye en Figma por ti —respetando grids, tipografía, accesibilidad y sistemas de componentes.

<br>

**No necesitas saber programar.** Sigue cada paso en orden y funcionará.  
Si algo falla, ve directo a [Solución de problemas](#-solución-de-problemas).

</div>

---

## 📋 Contenidos

| #   | Sección                                                                        |
| --- | ------------------------------------------------------------------------------ |
| 1   | [¿Para qué sirve?](#-para-qué-sirve)                                           |
| 2   | [Cómo funciona](#-cómo-funciona)                                               |
| 3   | [Capacidades avanzadas](#-capacidades-avanzadas)                               |
| 4   | [Lo que vas a instalar](#-lo-que-vas-a-instalar)                               |
| 5   | [Instalación paso a paso](#-instalación-paso-a-paso)                           |
| 6   | [Tu primer diseño](#-tu-primer-diseño)                                         |
| 7   | [Instalación asistida con Antigravity](#-instalación-asistida-con-antigravity) |
| 8   | [Solución de problemas](#-solución-de-problemas)                               |
| 9   | [Inicio rápido](#-botón-de-inicio-rápido)                                      |
| 10  | [Cómo cerrar el sistema](#-cómo-cerrar-el-sistema)                             |
| 11  | [Estructura del proyecto](#-estructura-del-proyecto)                           |
| 12  | [Créditos](#-créditos)                                                         |

---

## 🧠 ¿Para qué sirve?

Imagina que puedes describir un diseño con palabras —igual que le explicarías algo a un compañero— y que un equipo de agentes de inteligencia artificial lo construye en Figma por ti.

**Eso es exactamente lo que hace este sistema.**

### ¿Qué puede crear?

- 🃏 Tarjetas, formularios, pantallas y layouts completos
- 🎨 Paletas de color con teoría cromática aplicada
- 🔠 Sistemas de tokens (color, espaciado, tipografía)
- 🧩 Componentes reutilizables con variantes

> [!NOTE]
> **🔒 Seguridad total.** El sistema siempre te pedirá confirmación antes de tocar tu archivo de Figma. Nunca modificará nada sin que tú lo apruebes.

---

## ⚙️ Cómo funciona

Este sistema no es una IA que "dibuja" cosas. Es un **ecosistema de agentes especializados** que colaboran entre sí, coordinados por un Director, para que el resultado sea profesional, accesible y coherente con tu estilo.

### El flujo de trabajo

![Diagrama de flujo del sistema: el usuario escribe una petición, el Director la recibe y coordina los agentes de Memoria, Diseño, Tokens, Layout, Componentes y Auditor, hasta entregar el diseño finalizado en Figma](https://github.com/user-attachments/assets/84bfd6c0-9520-4120-bf5d-77eb5997c83f)

### Tu equipo de diseño virtual

| Agente                     | Rol                | Responsabilidad                                                    |
| -------------------------- | ------------------ | ------------------------------------------------------------------ |
| 🎬 **figma-director**      | Jefe de proyectos  | Escucha tu petición, decide los pasos y reparte el trabajo         |
| 🧠 **memory-subagent**     | Historiador        | Recuerda tu estilo, colores preferidos y decisiones pasadas        |
| 🎨 **design-subagent**     | Director creativo  | Decide paleta, tipografía y look & feel con teoría del diseño real |
| 🔠 **tokens-subagent**     | Sistema de diseño  | Genera y gestiona los tokens de color, espaciado y tipografía      |
| 📐 **layout-subagent**     | Arquitecto         | Gestiona la estructura, grids y AutoLayout                         |
| 🧱 **components-subagent** | Constructor        | Crea botones, tarjetas y elementos con variantes                   |
| ✅ **auditor-subagent**    | Control de calidad | Verifica contrastes WCAG y coherencia del sistema de diseño        |

> [!TIP]
> **Tú tienes la última palabra.** El sistema no comenzará a construir hasta que apruebes la propuesta visual del agente de Diseño.

---

## 🚀 Capacidades avanzadas

### Eficiencia operativa: Modelo Antiguo vs. Modelo Actual

<img width="3058" height="977" alt="Frame 26" src="https://github.com/user-attachments/assets/c1ed94e6-8ef1-4e77-832f-fe44385c4a2f" />

<br>

<details>
<summary><strong>♿ Auto-corrección de Accesibilidad (WCAG 2.1 AA)</strong></summary>

<br>

El **Auditor Subagent** no solo detecta errores, tiene autoridad para **corregirlos automáticamente**:

- **Validación shift-left:** los errores se interceptan desde la Fase 1 (Diseño) mediante la Matriz de Contraste, antes de crear ningún token. El diseño nace accesible.
- **Cálculo por algoritmo:** el ratio WCAG se calcula con la fórmula de luminancia relativa (L = 0.2126·R + 0.7152·G + 0.0722·B) aplicada directamente por el agente, sin depender de herramientas externas.
- **Resolución inteligente:** si un texto no alcanza el ratio 4.5:1 requerido, el agente busca el stop más cercano en la rampa de color antes de ajustar por luminancia.
- **Auditoría por delta:** en la Fase 4, el auditor solo re-verifica los colores no cubiertos por la Matriz de Contraste pre-validada, evitando trabajo redundante.

</details>

<details>
<summary><strong>🔄 Protocolo de Estado Inteligente</strong></summary>

<br>

Latencia y coste de API reducidos mediante gestión de estados centralizada:

- **Objeto de estado único:** los agentes comparten una fuente de verdad en JSON consolidado.
- **Cero alucinaciones:** acceso directo al estado actual, sin depender de historiales largos.
- **Comunicación por deltas:** los subagentes informan mediante cambios mínimos, optimizando memoria.
- **Checkpoints transaccionales:** si el pipeline se interrumpe, el sistema reanuda exactamente desde la última fase completada con éxito, sin necesidad de repetir pasos.

</details>

<details>
<summary><strong>🛡️ Infraestructura reforzada (Arquitectura V2)</strong></summary>

<br>

- **Orquestación con Chain-of-Thought:** El Director razona explícitamente cada paso antes de delegar, evitando bloqueos si el usuario no responde.
- **Flujo secuencial garantizado:** Los tokens (Fase 2A) se crean antes que el layout (Fase 2B). Esto asegura que todos los bindings de variable están disponibles cuando el arquitecto los necesita, eliminando la condición de carrera de versiones anteriores.
- **Memoria con Resolución de Conflictos:** El sistema detecta y resuelve contradicciones en tus preferencias a lo largo del tiempo (ej. si cambias de estilo).
- **Single Source of Truth:** Glosario y reglas de seguridad centralizadas para evitar alucinaciones y ahorrar tokens.
- **Protección contra duplicados:** comprueba si un componente ya existe antes de crearlo.
- **Mantenimiento automático:** logs y registros se comprimen solos para evitar degradación.

</details>

---

## 📦 Lo que vas a instalar

| Programa          | Para qué sirve                                             |
| ----------------- | ---------------------------------------------------------- |
| **Node.js**       | El motor que hace funcionar el sistema en tu ordenador     |
| **Figma Desktop** | La versión de escritorio (la versión web no funciona)      |
| **Git**           | La herramienta para descargar este proyecto desde internet |
| **Opencode**      | La plataforma donde viven y se ejecutan los agentes de IA  |

> [!IMPORTANT]
> También necesitarás una **cuenta activa de Figma** y una **API key del proveedor de IA** que uses con Opencode (por defecto, Anthropic). Si aún no tienes una, créala en 👉 [console.anthropic.com](https://console.anthropic.com/) antes de empezar.

---

## 🛠️ Instalación paso a paso

### Antes de empezar: la terminal

Durante la instalación usarás la **terminal**: una ventana de texto donde escribes comandos directamente al ordenador. Es la misma herramienta que usan los equipos de diseño en empresas como Google o Anthropic.

**Cómo abrirla:**

- **Windows:** <kbd>Win</kbd> → escribe `PowerShell` → <kbd>Enter</kbd>
- **Mac:** <kbd>Cmd</kbd> + <kbd>Espacio</kbd> → escribe `Terminal` → <kbd>Enter</kbd>

Escribe los comandos exactamente como aparecen en esta guía y pulsa <kbd>Enter</kbd> tras cada uno.

---

### Paso 1 — Instala Node.js

1. Ve a 👉 [nodejs.org](https://nodejs.org/)
2. Descarga el botón grande **"LTS – Recommended for most users"**
3. Instálalo con todas las opciones por defecto
4. **Cierra y vuelve a abrir la terminal**
5. Verifica la instalación:

```bash
node --version
```

> [!TIP]
> ✅ Si ves algo como `v20.x.x`, perfecto. Si ves un error, reinstala Node.js.

---

### Paso 2 — Instala Figma Desktop

> Si ya tienes Figma Desktop instalado, ve al Paso 3.

1. Ve a 👉 [figma.com/downloads](https://www.figma.com/downloads/)
2. Descarga e instala la versión para tu sistema operativo
3. Ábrela e inicia sesión con tu cuenta

---

### Paso 3 — Instala Git

- **Windows:** ve a 👉 [git-scm.com/download/win](https://git-scm.com/download/win) e instala con opciones por defecto
- **Mac:** abre la terminal, escribe `git --version` y pulsa <kbd>Enter</kbd>. Si no está instalado, el sistema te ofrecerá hacerlo — acepta.

---

### Paso 4 — Instala Opencode

Ejecuta **uno de estos comandos** (si no sabes cuál usar, empieza por el primero):

```bash
# Opción 1 (recomendada)
curl -fsSL https://opencode.ai/install | bash
```

```bash
# Opción 2 (si la anterior falla)
npm i -g opencode-ai
```

```bash
# Opción 3 (Mac con Homebrew)
brew install anomalyco/tap/opencode
```

Verifica que se instaló correctamente:

```bash
opencode --version
```

> [!IMPORTANT]
> Opencode necesita una **API key** para conectarse al modelo de IA. La primera vez que lo abras te pedirá que elijas proveedor e introduzcas tu clave. Si usas Anthropic (recomendado), genera tu API key en 👉 [console.anthropic.com](https://console.anthropic.com/).

---

### Paso 5 — Descarga este proyecto

Ejecuta estos dos comandos **en orden**:

```bash
git clone https://github.com/osCeballos/figma-ai-agent-system.git
cd figma-ai-agent-system
```

Cuando vuelva a aparecer el cursor parpadeante, ha terminado.

---

### Paso 6 — Instala las dependencias

Con la terminal **dentro de la carpeta del proyecto** (la misma ventana del paso anterior):

```bash
npm install
```

Puede tardar entre 1 y 3 minutos. Cuando vuelva el cursor, continúa.

---

### Paso 7 — Crea el archivo de configuración

1. Abre la carpeta `figma-ai-agent-system` con cualquier editor de texto
2. Crea un archivo nuevo llamado exactamente **`opencode.json`**
3. Copia el contenido según tu sistema operativo:

<details>
<summary>🪟 <strong>Windows</strong> — haz clic para ver</summary>

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "figma": {
      "type": "local",
      "command": ["npx", "-y", "claude-talk-to-figma-mcp"],
      "enabled": true
    },
    "filesystem": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "C:\\Users\\TuNombre\\Desktop\\figma-ai-agent-system"
      ],
      "enabled": true
    }
  }
}
```

</details>

<details>
<summary>🍎 <strong>Mac</strong> — haz clic para ver</summary>

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "figma": {
      "type": "local",
      "command": ["npx", "-y", "claude-talk-to-figma-mcp"],
      "enabled": true
    },
    "filesystem": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/TuNombre/Desktop/figma-ai-agent-system"
      ],
      "enabled": true
    }
  }
}
```

</details>

4. **Sustituye `TuNombre`** por tu nombre de usuario real:
   - **Windows:** abre el Explorador → `C:\Users\` → mira el nombre de tu carpeta
   - **Mac:** abre el Finder → icono de casa (carpeta de inicio)
5. Guarda el archivo

> [!WARNING]
> El archivo `opencode.json` solo debe contener los servidores `figma` y `filesystem`. No añadas ningún otro servidor MCP. El validador de `DESIGN.md` se ejecuta internamente como comando de terminal.

---

### Paso 8 — Arranca el servidor de conexión

Este servidor es el puente entre los agentes y Figma. **Debes arrancarlo cada vez que uses el sistema.**

```bash
npm run socket
```

Verás un mensaje confirmando que está escuchando. **No cierres esta ventana** mientras trabajas.

---

### Paso 9 — Instala el plugin en Figma Desktop

1. Abre **Figma Desktop** (la app, no el navegador)
2. Haz clic en el logo de Figma (arriba a la izquierda)
3. Ve a **Plugins → Development → Import plugin from manifest...**
4. Navega hasta la carpeta del proyecto y selecciona:

```
src/claude_mcp_plugin/manifest.json
```

5. El plugin aparecerá en **Plugins → Development → Figma AI Agent**

> [!WARNING]
> Asegúrate de seleccionar el archivo dentro de `src/claude_mcp_plugin/` y no ningún otro.

---

### Paso 10 — Comprueba que todo funciona ✅

1. Confirma que el servidor del Paso 8 sigue corriendo
2. Abre cualquier archivo en Figma Desktop
3. Ve a **Plugins → Development → Figma AI Agent**
4. El plugin mostrará un **código de canal** (un número, en verde)
5. Desde la terminal, dentro de la carpeta del proyecto, abre Opencode:

```bash
opencode
```

**Si el agente confirma la conexión... ¡todo está listo! 🎉**

---

## 💬 Tu primer diseño

Una vez conectado, escribe en el chat de Opencode el número de canal que ves en el plugin:

```
Conecta con Figma, canal [el número que ves en el plugin]
```

Después, prueba con alguno de estos ejemplos:

```
Crea una tarjeta de producto para una tienda de ropa.
Necesita imagen, nombre del producto, precio y botón de compra.
```

```
Diseña una pantalla de inicio de sesión con campo de email,
contraseña y botón. Estilo moderno y minimalista.
```

```
Haz un componente de navegación con logo a la izquierda y 4 enlaces a la derecha.
```

El agente te mostrará una propuesta de estilo y esperará tu aprobación antes de crear nada en Figma. Puedes pedir cambios o darle el visto bueno.

---

## 🤖 Instalación asistida con Antigravity

Si tienes acceso a **Antigravity**, puede automatizar todo el proceso de configuración mientras tú supervisas seguridad y permisos.

> [!IMPORTANT]
> Antigravity puede automatizar la instalación, pero **tú debes confirmar cada comando**. Verifica rutas, tokens y permisos antes de aprobar cualquier acción.

<details>
<summary><strong>¿Qué necesita Antigravity para empezar?</strong></summary>

<br>

1. **Este archivo README.md** completo
2. **Ruta absoluta** donde clonar el proyecto (ej. `C:\Users\TuNombre\Desktop`)
3. **Sistema operativo** (Windows o Mac)
4. **Confirmación explícita** de que permites la ejecución de comandos

**Qué verificar tras la ejecución:**

- [ ] `node --version`, `git --version` y `opencode --version` devuelven versiones válidas
- [ ] El archivo `opencode.json` existe y apunta a la carpeta correcta
- [ ] `npm run socket` arranca sin errores
- [ ] El plugin está importado en Figma Desktop y conecta con el canal

</details>

<details>
<summary><strong>Prompt listo para copiar y pegar en Antigravity</strong></summary>

<br>

```text
Tarea: Montar y comprobar el proyecto "figma-ai-agent-system" en mi equipo.

Contexto: Tengo el README del proyecto (te lo adjunto). Quiero que ejecutes los
pasos necesarios para dejar el proyecto listo para usar con Figma Desktop y
Opencode. No ejecutes nada sin mi confirmación cuando se trate de pegar tokens,
modificar mi cuenta de Figma o tocar archivos de diseño.

Sistema operativo: Analiza el sistema operativo del usuario y continúa el proceso.
Ruta destino: La ruta proporcionada. Si no se asignó ninguna, crea una carpeta en
el escritorio del usuario.

Objetivos:
1. Comprobar e instalar (si falta) Node.js LTS, Git y Opencode.
2. Clonar https://github.com/osCeballos/figma-ai-agent-system.git en la ruta indicada.
3. Ejecutar `npm install` dentro de la carpeta del proyecto.
4. Crear `opencode.json` con la configuración correcta para mi SO, sustituyendo
   `TuNombre` por mi usuario real. Solo incluir los servidores MCP "figma" y
   "filesystem". No añadir ningún CLI externo como servidor MCP.
5. Arrancar el servidor con `npm run socket` y verificar que está escuchando.
6. Guiarme para importar el plugin en Figma Desktop.
7. Abrir Opencode y ayudarme a conectar con el canal del plugin.
8. Ejecutar comprobaciones finales: node, git, opencode --version y npm run socket.

Seguridad:
- Antes de pegar cualquier token o ejecutar comandos que modifiquen mi cuenta de
  Figma, pídeme confirmación explícita.
- Muéstrame cada comando antes de ejecutarlo y espera mi aprobación.
- Si algo falla, copia el error exacto y pídeme instrucciones.

Salida esperada:
- Lista de comandos ejecutados y su resultado.
- Archivos creados o modificados (con rutas).
- Instrucciones finales para conectar Figma con el agente.

Adjunto: README.md del proyecto.
```

</details>

---

## 🔧 Solución de problemas

| Síntoma                                | Causa probable                                     | Solución                                                                            |
| -------------------------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------- |
| El plugin no aparece en Figma          | Se seleccionó el archivo equivocado                | Repite el Paso 9. El archivo correcto está en `src/claude_mcp_plugin/manifest.json` |
| "Canal no encontrado"                  | El servidor no está corriendo                      | Ejecuta `npm run socket` desde la carpeta del proyecto                              |
| El plugin no muestra ningún número     | El plugin no está abierto                          | Ve a Plugins → Development → Figma AI Agent y ábrelo                                |
| El agente no recuerda tus preferencias | Ruta incorrecta en `opencode.json`                 | Revisa el Paso 7 y verifica que la ruta apunta a tu carpeta                         |
| Error al ejecutar `git clone`          | Git no está instalado                              | Instala Git (Paso 3) y reinicia la terminal                                         |
| Error al ejecutar `npm install`        | Node.js no instalado o muy antiguo                 | Instala Node.js LTS (Paso 1) y reinicia la terminal                                 |
| `"No FIGMA_PAT found"`                 | Falta el token de Figma                            | Revisa el Paso 7 y asegúrate de que el token está bien pegado                       |
| El agente no responde                  | Opencode no se lanzó desde la carpeta del proyecto | Ejecuta `cd figma-ai-agent-system` y luego `opencode`                               |
| Los tokens se crean sin color aplicado | `opencode.json` tiene servidores MCP incorrectos   | Verifica que solo existen los servidores `figma` y `filesystem`                     |
| La terminal se cierra con error rojo   | Falló algún comando                                | Copia el mensaje de error exacto y abre un [issue en GitHub][issues]                |

[issues]: https://github.com/osCeballos/figma-ai-agent-system/issues

---

## ⚡ Botón de inicio rápido

Para no tener que escribir comandos cada vez que quieras trabajar:

<details>
<summary>🪟 <strong>Windows</strong> — crear <code>iniciar.bat</code></summary>

<br>

1. Dentro de la carpeta del proyecto, clic derecho → **Nuevo → Documento de texto**
2. Renómbralo como `iniciar.bat` (asegúrate de que termine en `.bat`, no en `.txt`)
3. Clic derecho → **Editar** y pega:

```batch
@echo off
start cmd /k "npm run socket"
start cmd /k "opencode"
```

4. Guarda y cierra. Desde ahora, **doble clic** en `iniciar.bat` para arrancar todo.

</details>

<details>
<summary>🍎 <strong>Mac</strong> — crear <code>iniciar.command</code></summary>

<br>

1. Abre **TextEdit** en modo texto plano (<kbd>Formato</kbd> → Convertir en texto simple)
2. Pega este código:

```bash
#!/bin/bash
cd "$(dirname "$0")"
osascript -e 'tell application "Terminal" to do script "cd \"'$(pwd)'\"; npm run socket"'
opencode
```

3. Guárdalo en la carpeta del proyecto como `iniciar.command`
4. Abre la Terminal, escribe `chmod +x ` (con espacio al final), arrastra el archivo y pulsa <kbd>Enter</kbd>
5. Desde ahora, **doble clic** en `iniciar.command` para arrancar todo.

</details>

---

## 🔴 Cómo cerrar el sistema

1. En cada ventana de terminal activa, pulsa <kbd>Ctrl</kbd> + <kbd>C</kbd> para detener los procesos
2. Cierra las ventanas de terminal
3. Cierra el plugin de Figma desde dentro de la aplicación

---

## 📁 Estructura del proyecto

```
figma-ai-agent-system/
│
├── .opencode/
│   ├── figma-director.md             ← Orquestador central
│   ├── memory-subagent.md            ← Fase 0: Contexto evolutivo
│   ├── design-subagent.md            ← Fase 1: Criterio visual
│   ├── tokens-subagent.md            ← Fase 2A: Variables y tokens
│   ├── layout-subagent.md            ← Fase 2B: Frames y AutoLayout
│   ├── components-subagent.md        ← Fase 3: Componentización
│   ├── auditor-subagent.md           ← Fase 4: Auditoría WCAG
│   ├── extract-subagent.md           ← Auxiliar: extracción de design system
│   ├── validator-subagent.md         ← Auxiliar: validación de DESIGN.md
│   ├── GLOSSARY.md                   ← Glosario técnico oficial del sistema
│   │
│   └── skills/
│       ├── css-to-figma-api/         ← Mapeo completo CSS → API de Figma
│       ├── wcag-calculator/          ← Algoritmo WCAG 2.1 (fórmula de luminancia)
│       ├── figma-grid-calculus/      ← Validador de múltiplos de 8px
│       ├── design-system-reference/  ← Reglas globales compartidas por todos los agentes
│       ├── design-patterns/          ← Patrones UI: navigation, forms, overlays, feedback, content
│       └── svg-library/
│           ├── registry.json         ← Índice de los 22 iconos disponibles
│           └── assets/icons/         ← Archivos SVG (24×24, currentColor)
│
├── agents/memory/
│   ├── user-preferences.json         ← Preferencias del usuario entre sesiones
│   ├── learning-log.md               ← Bitácora de aprendizaje continuo
│   └── performance_history.json      ← Historial de sesiones
│
├── src/
│   └── claude_mcp_plugin/
│       └── manifest.json             ← Plugin de conexión con Figma Desktop
│
├── DESIGN.md                         ← Design system extraído (generado automáticamente)
├── opencode.json                     ← Tu archivo de configuración (lo creas en el Paso 7)
└── README.md
```

> [!NOTE]
> **Sobre `DESIGN.md`:** Este archivo se genera y actualiza automáticamente al inicio de cada sesión. No lo edites a mano. Si quieres regenerarlo, dile al agente: _"Actualiza el sistema de diseño"_.

---

## 🙏 Créditos

- **Plugin de conexión con Figma:** [claude-talk-to-figma-mcp](https://github.com/arinspunk/claude-talk-to-figma-mcp) por arinspunk
- **Auditoría de arquitectura v2.0:** Claude (Anthropic) + Antigravity (Google) — 10 hallazgos resueltos, sistema en estado de Operatividad Determinista
- **Licencia:** MIT — puedes usar, modificar y distribuir libremente

---

<div align="center">

**Autor:** Oscar Ceballos Cano &nbsp;·&nbsp; **Año:** 2026

</div>
