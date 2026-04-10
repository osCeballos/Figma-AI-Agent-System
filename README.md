# 🎨 Figma AI Agent System

![Proyecto Cambiar el tamaño de un vídeo](https://github.com/user-attachments/assets/df079c92-b51d-42ca-9935-e51dff5d520c)

### Guía de instalación para alumnos

![Node](https://img.shields.io/badge/Node.js-≥20-green)
![License](https://img.shields.io/badge/Licencia-MIT-blue)
![Figma](https://img.shields.io/badge/Figma-Desktop-purple)

> **No necesitas saber programar.** Sigue cada paso en orden y funcionará. Si algo falla, ve directo a [Solución de problemas](#-solución-de-problemas).

---

## 📋 Índice

| # | Sección |
|---|---------|
| 1 | [¿Para qué sirve?](#-para-qué-sirve) |
| 2 | [Cómo funciona](#-cómo-funciona) |
| 3 | [Capacidades avanzadas](#-capacidades-avanzadas) |
| 4 | [Lo que vas a instalar](#-lo-que-vas-a-instalar) |
| 5 | [Instalación paso a paso](#-instalación-paso-a-paso) |
| 6 | [Tu primer diseño](#-tu-primer-diseño) |
| 7 | [Instalación asistida con Antigravity](#-instalación-asistida-con-google-antigravity) |
| 8 | [Solución de problemas](#-solución-de-problemas) |
| 9 | [Botón de inicio rápido](#-botón-de-inicio-rápido) |
| 10 | [Cómo cerrar el sistema](#-cómo-cerrar-el-sistema) |
| 11 | [Estructura del proyecto](#-estructura-del-proyecto) |
| 12 | [Créditos](#-créditos) |

---

## 🧠 ¿Para qué sirve?

Imagina que puedes describir un diseño con palabras —igual que le explicarías algo a un compañero— y que un equipo de agentes de inteligencia artificial lo construye en Figma por ti, respetando grids, tipografía, accesibilidad y sistemas de componentes.

**Eso es exactamente lo que hace este sistema.**

### ¿Qué puede crear?

- 🃏 Tarjetas, formularios, pantallas y layouts completos
- 🎨 Paletas de color con teoría cromática aplicada
- 🔠 Sistemas de tokens (color, espaciado, tipografía)
- 🧩 Componentes reutilizables con variantes

> **🔒 Seguridad total:** El sistema siempre te pedirá confirmación antes de tocar tu archivo de Figma. Nunca modificará nada sin que tú lo apruebes.

---

## ⚙️ Cómo funciona

Este sistema no es una simple IA que "dibuja" cosas. Es un **ecosistema de agentes especializados** que colaboran entre sí, coordinados por un Director, para asegurar que el resultado sea profesional, accesible y coherente con tu estilo.

### El flujo de trabajo

![Frame 29](https://github.com/user-attachments/assets/f504298b-b641-4809-a6ff-a172824cd885)

### Tu equipo de diseño virtual

| Agente | Rol | Responsabilidad |
|--------|-----|-----------------|
| 🎬 **figma-director** | Jefe de proyectos | Escucha tu petición, decide los pasos y reparte el trabajo |
| 🧠 **memory-subagent** | Historiador | Recuerda tu estilo, colores preferidos y decisiones pasadas |
| 🎨 **design-subagent** | Director creativo | Decide paleta, tipografía y look & feel con teoría del diseño real |
| 📐 **layout-subagent** | Arquitecto | Gestiona la estructura, grids y AutoLayout |
| 🧱 **components-subagent** | Constructor | Crea botones, tarjetas y elementos con variantes |
| ✅ **auditor-subagent** | Control de calidad | Verifica contrastes WCAG y nombres de capas |

> [!TIP]
> **Tú tienes la última palabra.** El sistema no comenzará a construir hasta que apruebes la propuesta visual del agente de Diseño.

---

## 🚀 Capacidades avanzadas

### Eficiencia operativa

![Frame 26](https://github.com/user-attachments/assets/b348e0a7-3384-41b3-8c36-5cfb6ee4ef31)

---

### ♿ Auto-corrección de Accesibilidad (WCAG 2.1 AA)

El **Auditor Subagent** no solo detecta errores, tiene autoridad para **corregirlos automáticamente**:

- **Cálculo nativo:** usa `calc_wcag_contrast`, una herramienta local ultra-rápida
- **Resolución inteligente:** si un texto no es legible, aplica el ajuste sugerido al instante
- **Validación shift-left:** los errores se interceptan desde la fase de tokens, el diseño nace accesible

### 🔄 Protocolo de Estado Inteligente

Latencia y coste de API reducidos mediante gestión de estados centralizada:

- **Objeto de estado único:** los agentes comparten una fuente de verdad en JSON consolidado
- **Cero alucinaciones:** acceso directo al estado actual, sin depender de historiales largos
- **Comunicación por deltas:** los subagentes informan mediante cambios mínimos, optimizando memoria

### 🛡️ Infraestructura reforzada

- **Protección contra duplicados:** comprueba si un componente ya existe antes de crearlo
- **Herramientas MCP nativas:** cálculos locales que no dependen de la nube
- **Mantenimiento automático:** logs y registros se comprimen solos para evitar degradación

---

## 📦 Lo que vas a instalar

| Programa | Para qué sirve |
|----------|---------------|
| **Node.js** | El motor que hace funcionar el sistema en tu ordenador |
| **Figma Desktop** | La versión de escritorio (la versión web no funciona para esto) |
| **Git** | La herramienta para descargar este proyecto desde internet |
| **Opencode** | La plataforma donde viven y se ejecutan los agentes de IA |

---

## 🛠️ Instalación paso a paso

### Antes de empezar: la terminal

Durante la instalación usarás la **terminal**: una ventana de texto donde escribes comandos directamente al ordenador. Es la misma herramienta que usan los equipos de diseño en empresas como Google o Anthropic.

**Cómo abrirla:**

- **Windows:** tecla `Windows` → escribe `PowerShell` → `Enter`
- **Mac:** `Cmd + Espacio` → escribe `Terminal` → `Enter`

Escribe los comandos exactamente como aparecen en esta guía y pulsa `Enter` tras cada uno. Eso es todo.

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

✅ Si ves algo como `v20.x.x`, perfecto. Si ves un error, reinstala Node.js.

---

### Paso 2 — Instala Figma Desktop

> Si ya tienes Figma Desktop instalado, ve al Paso 3.

1. Ve a 👉 [figma.com/downloads](https://www.figma.com/downloads/)
2. Descarga e instala la versión para tu sistema operativo
3. Ábrela e inicia sesión con tu cuenta

---

### Paso 3 — Instala Git

- **Windows:** ve a 👉 [git-scm.com/download/win](https://git-scm.com/download/win) e instala con opciones por defecto
- **Mac:** abre la terminal, escribe `git --version` y pulsa `Enter`. Si no está instalado, el sistema te ofrecerá hacerlo — acepta.

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

---

### Paso 5 — Descarga este proyecto

Ejecuta estos dos comandos **en orden**, pulsando `Enter` tras cada uno:

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

6. Escribe en el chat:

```
Conecta con Figma, canal [el número que ves en el plugin]
```

**Si el agente confirma la conexión... ¡todo está listo! 🎉**

---

## 💬 Tu primer diseño

Una vez conectado, prueba con alguno de estos ejemplos:

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

## 🤖 Instalación asistida con Google Antigravity

Si tienes acceso a **Google Antigravity**, puede automatizar todo el proceso de configuración mientras tú supervisas seguridad y permisos.

> [!IMPORTANT]
> Antigravity puede automatizar la instalación, pero **tú debes confirmar cada comando**. Verifica rutas, tokens y permisos antes de aprobar cualquier acción.

### Qué necesita Antigravity para empezar

1. **Este archivo README.md** completo
2. **Ruta absoluta** donde clonar el proyecto (ej. `C:\Users\TuNombre\Desktop`)
3. **Sistema operativo** (Windows o Mac)
4. **Confirmación explícita** de que permites la ejecución de comandos

### Qué verificar tras la ejecución

- [ ] `node --version`, `git --version` y `opencode --version` devuelven versiones válidas
- [ ] El archivo `opencode.json` existe y apunta a la carpeta correcta
- [ ] `npm run socket` arranca sin errores
- [ ] El plugin está importado en Figma Desktop y conecta con el canal

### Prompt para Antigravity

Copia y pega este bloque en tu chat con Google Antigravity:

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
   `TuNombre` por mi usuario real.
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

---

## 🔧 Solución de problemas

| Síntoma | Causa | Solución |
|---------|-------|----------|
| El plugin no aparece en Figma | Se seleccionó el archivo equivocado | Repite el Paso 9. El archivo correcto está en `src/claude_mcp_plugin/manifest.json` |
| "Canal no encontrado" | El servidor no está corriendo | Ejecuta `npm run socket` desde la carpeta del proyecto |
| El plugin no muestra ningún número | El plugin no está abierto | Ve a Plugins → Development → Figma AI Agent y ábrelo |
| El agente no recuerda tus preferencias | Ruta incorrecta en `opencode.json` | Revisa el Paso 7 y verifica que la ruta apunta exactamente a tu carpeta |
| Error al ejecutar `git clone` | Git no está instalado | Instala Git (Paso 3) y reinicia la terminal |
| Error al ejecutar `npm install` | Node.js no instalado o muy antiguo | Instala Node.js LTS (Paso 1) y reinicia la terminal |
| "No FIGMA_PAT found" | Falta el token de Figma | Revisa el Paso 7 y asegúrate de que el token está bien pegado |
| El agente no responde | Opencode no se lanzó desde la carpeta del proyecto | Ejecuta `cd figma-ai-agent-system` y luego `opencode` |
| La terminal se cierra con error rojo | Falló algún comando | Copia el mensaje de error exacto y consúltalo con tu profesor |

---

## ⚡ Botón de inicio rápido

Para no tener que escribir comandos cada vez que quieras trabajar:

<details>
<summary>🪟 <strong>Windows</strong> — crear <code>iniciar.bat</code></summary>

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

1. Abre **TextEdit** en modo texto plano (`Formato > Convertir en texto simple`)
2. Pega este código:

```bash
#!/bin/bash
cd "$(dirname "$0")"
osascript -e 'tell application "Terminal" to do script "cd \"'$(pwd)'\"; npm run socket"'
opencode
```

3. Guárdalo en la carpeta del proyecto como `iniciar.command`
4. Abre la Terminal, escribe `chmod +x ` (con espacio al final), arrastra el archivo y pulsa `Enter`
5. Desde ahora, **doble clic** en `iniciar.command` para arrancar todo.

</details>

---

## 🔴 Cómo cerrar el sistema

1. En cada ventana de terminal activa, pulsa `Ctrl + C` para detener los procesos
2. Cierra las ventanas de terminal
3. Cierra el plugin de Figma desde dentro de la aplicación

---

## 📁 Estructura del proyecto

```
figma-ai-agent-system/
│
├── .opencode/
│   ├── agents/                   ← Los 7 agentes de IA
│   │   ├── figma-director.md
│   │   ├── design-subagent.md
│   │   ├── layout-subagent.md
│   │   ├── components-subagent.md
│   │   ├── tokens-subagent.md
│   │   ├── auditor-subagent.md
│   │   ├── memory-subagent.md
│   │   └── memory/               ← Aquí se guardan tus preferencias
│   │
│   └── skills/                   ← Conocimiento especializado de los agentes
│       ├── design-patterns/
│       ├── css-to-figma-api/
│       ├── figma-grid-calculus/
│       ├── svg-library/
│       └── wcag-calculator/
│
├── src/
│   └── claude_mcp_plugin/
│       └── manifest.json         ← El "DNI" del plugin para Figma
│
└── opencode.json                 ← Tu archivo de configuración (lo creas en el Paso 7)
```

---

## 🙏 Créditos

- **Plugin de conexión con Figma:** [claude-talk-to-figma-mcp](https://github.com/arinspunk/claude-talk-to-figma-mcp) por arinspunk
- **Licencia:** MIT — puedes usar, modificar y distribuir libremente

---

<div align="center">

**Autor:** Oscar Ceballos Cano · **Año:** 2026

</div>
