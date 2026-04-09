# Guía de instalación para alumnos

## 📋 Índice de contenidos

1. [¿Para qué sirve este sistema?](#para-qué-sirve-este-sistema)
2. [Cómo funciona: Tu equipo de diseño virtual](#cómo-funciona-tu-equipo-de-diseño-virtual)
3. [Novedades y Capacidades Avanzadas](#novedades-y-capacidades-avanzadas)
4. [Lo que vas a instalar](#lo-que-vas-a-instalar)
5. [Instalación - Paso a paso](#instalación--paso-a-paso)
   - [La terminal - tu herramienta profesional](#la-terminal--tu-herramienta-profesional)
   - [PASO 1 - Instala Node.js](#paso-1--instala-nodejs)
   - [PASO 2 - Instala Figma Desktop](#paso-2--instala-figma-desktop)
   - [PASO 3 - Instala Git](#paso-3--instala-git)
   - [PASO 4 - Instala Opencode](#paso-4--instala-opencode)
   - [PASO 5 - Descarga este proyecto](#paso-5--descarga-este-proyecto)
   - [PASO 6 - Instala las dependencias del proyecto](#paso-6--instala-las-dependencias-del-proyecto)
   - [PASO 7 - Crea el archivo de configuración](#paso-7--crea-el-archivo-de-configuración)
   - [PASO 8 - Arranca el servidor de conexión](#paso-8--arranca-el-servidor-de-conexión)
   - [PASO 9 - Instala el plugin en Figma Desktop](#paso-9--instala-el-plugin-en-figma-desktop)
   - [PASO 10 - Comprueba que todo funciona](#paso-10--comprueba-que-todo-funciona-)
6. [Tu primer diseño](#tu-primer-diseño)
7. [Instalación asistida con Google Antigravity](#-instalación-asistida-con-google-antigravity)
8. [Algo ha ido mal - Solución de problemas](#algo-ha-ido-mal--solución-de-problemas)
9. [Atajo: El botón de inicio (Recomendado)](#-atajo-el-botón-de-inicio-recomendado)
10. [Cómo cerrar el sistema](#-cómo-cerrar-el-sistema)
11. [Estructura del proyecto](#estructura-del-proyecto)
12. [Créditos](#créditos)

---

> **Antes de empezar:** No necesitas saber programar para usar esto. Sigue cada paso en orden, sin saltarte nada, y funcionará. Si algo no va bien, consulta la sección **"Algo ha ido mal"** al final.

---

## ¿Para qué sirve este sistema?

Imagina que puedes describir un diseño con palabras, igual que le explicarías algo a un compañero y que un equipo de agentes de inteligencia artificial lo construye en Figma por ti, respetando grids, tipografía, accesibilidad y sistemas de componentes.

Eso es exactamente lo que hace este sistema.

**¿Qué puede crear?**

- Tarjetas, formularios, pantallas y layouts completos
- Paletas de color con teoría cromática aplicada
- Sistemas de tokens (variables de color, espaciado, tipografía)
- Componentes reutilizables con variantes

**El sistema siempre te pedirá confirmación antes de tocar tu archivo de Figma. Nunca modificará nada sin que tú lo apruebes.**

---

## Cómo funciona:

Este sistema no es una simple IA que "dibuja" cosas. Es un **ecosistema de agentes especializados** que colaboran entre sí, coordinados por un Director, para asegurar que el resultado sea profesional, accesible y coherente con tu estilo.

### El flujo de trabajo

Así es como tus ideas se convierten en nodos de Figma reales:

<img width="920" height="1524" alt="image" src="https://github.com/user-attachments/assets/d3720c66-2b61-4d4e-bc24-bb587e4edf31" />

### ¿Quién es quién en tu equipo?

Para que el sistema funcione, cada agente tiene una especialidad concreta:

- **figma-director:** Es el jefe de proyectos. Escucha tu petición, decide qué pasos dar y reparte el trabajo entre los demás expertos.
- **memory-subagent:** Es el historiador. Recuerda si te gusta el estilo minimalista, si prefieres ciertos colores o qué decisiones tomaste en el pasado.
- **design-subagent:** Es el director creativo. Decide la paleta de colores, la tipografía y el "look & feel" basándose en teoría del diseño real.
- **layout-subagent:** Es el arquitecto. Se encarga de la estructura, las rejillas (grids) y de que todo use **AutoLayout** perfectamente.
- **components-subagent:** Es el constructor. Crea los botones, tarjetas y elementos reutilizables con sus variantes.
- **auditor-subagent:** Es el control de calidad. Revisa que los contrastes sean accesibles (WCAG) y que los nombres de las capas estén impecables.

> [!TIP]
> **Tú tienes la última palabra:** El sistema nunca empezará a construir en la "fase técnica" hasta que tú no le des el visto bueno a la propuesta visual del agente de Diseño.

---

## Novedades y Capacidades Avanzadas

El sistema ha evolucionado para incluir funciones de nivel industrial que garantizan la calidad y velocidad:

### ⚡ Eficiencia Operativa (Antes vs. Ahora)

<img width="2656" height="560" alt="image" src="https://github.com/user-attachments/assets/8f3058c2-a4c1-4980-b020-eb09a4f09777" />

---

### Auto-corrección de Accesibilidad (WCAG 2.1 AA)

El **Auditor Subagent** ya no solo detecta errores; ahora tiene autoridad para **corregirlos automáticamente**.

- **Cálculo Nativo:** Utiliza una herramienta local ultra-rápida (`calc_wcag_contrast`) para verificar contrastes.
- **Resolución Inteligente:** Si un texto no es legible, el agente aplica el ajuste sugerido instantáneamente de forma autónoma.
- **Validación Shift-Left:** Los errores se interceptan desde la fase de creación de tokens, asegurando que el diseño nazca accesible.

### Protocolo de Estado Inteligente (State Management)

Hemos reducido la latencia y el coste de API mediante un sistema de gestión de estados centralizado:

- **Objeto de Estado Único:** Los agentes comparten una fuente de verdad compartida a través de un objeto JSON consolidado.
- **Cero Alucinaciones:** Al tener acceso directo al estado actual, los agentes ya no dependen de historiales de chat largos y confusos.
- **Comunicación Eficiente:** Los subagentes informan de sus avances mediante **deltas**, optimizando el uso de la memoria.

### Infraestructura Reforzada e Idempotencia

- **Protección contra duplicados:** El sistema comprueba si un componente o variable ya existe en Figma antes de intentar crearlo de nuevo.
- **Herramientas Nativas MCP:** Integración de herramientas locales para cálculos matemáticos y procesamiento de color que no dependen de la nube.
- **Maintenance Automática:** Los registros de aprendizaje y logs se comprimen y mantienen automáticamente para evitar la degradación del rendimiento.

---

## Lo que vas a instalar

| Programa          | Para qué sirve                                                        |
| :---------------- | :-------------------------------------------------------------------- |
| **Node.js**       | El motor que hace funcionar el sistema en tu ordenador                |
| **Figma Desktop** | La versión de escritorio de Figma (la versión web no sirve para esto) |
| **Opencode**      | La plataforma donde viven y se ejecutan los agentes de IA             |
| **Git**           | La herramienta para descargar este proyecto a tu ordenador            |

---

## Instalación - Paso a paso

### La terminal - tu herramienta profesional

Durante esta instalación usarás la terminal: una ventana de texto donde escribes comandos directamente al ordenador. Es la misma herramienta que usan los equipos de diseño en empresas como Google, Anthropic o cualquier estudio digital serio. No necesitas entenderla entera, solo los comandos de esta guía, pero desde hoy ya la estás usando como un profesional.

**Cómo abrirla:**

- **Windows:** Pulsa la tecla Windows → escribe `PowerShell` → pulsa Enter
- **Mac:** Pulsa `Cmd + Espacio` → escribe `Terminal` → pulsa Enter

Cuando la abras verás una ventana con texto. Escribe los comandos exactamente como aparecen en esta guía y pulsa Enter después de cada uno. Eso es todo lo que necesitas saber por ahora.

---

### PASO 1 - Instala Node.js

1. Ve a 👉 [nodejs.org](https://nodejs.org/)
2. Descarga el botón grande que pone **"LTS - Recommended for most users"**
3. Abre el archivo descargado e instálalo con todas las opciones por defecto (siguiente, siguiente, instalar)
4. Cuando termine, **cierra y vuelve a abrir la terminal**
5. Escribe esto y pulsa Enter para comprobar que se instaló:
   ```
   node --version
   ```
   Si ves algo como `v20.x.x`, está perfecto. Si ves un error, vuelve a instalar Node.js.

---

### PASO 2 - Instala Figma Desktop

> Si ya tienes Figma Desktop instalado, puedes saltar al Paso 3.

1. Ve a 👉 [figma.com/downloads](https://www.figma.com/downloads/)
2. Descarga e instala la versión para tu sistema operativo
3. Ábrela e inicia sesión con tu cuenta de Figma

---

### PASO 3 - Instala Git

Git es la herramienta que te permite descargar proyectos desde internet con la terminal.

- **Windows:** Ve a 👉 [git-scm.com/download/win](https://git-scm.com/download/win) e instálalo con todas las opciones por defecto
- **Mac:** Abre la terminal, escribe `git --version` y pulsa Enter. Si no está instalado, el sistema te ofrecerá instalarlo automáticamente - acepta.

---

### PASO 4 - Instala Opencode

Opencode es la plataforma donde viven los agentes. Se usa desde la terminal, igual que lo hacen los equipos de IA en entornos profesionales.

Abre la terminal y ejecuta **uno de estos comandos** según lo que tengas instalado (si no sabes cuál, usa el primero):

```bash
curl -fsSL https://opencode.ai/install | bash
```

Si el anterior no funciona, prueba con:

```bash
npm i -g opencode-ai
```

O en Mac con Homebrew:

```bash
brew install anomalyco/tap/opencode
```

Cuando termine, escribe esto en la terminal para confirmar que se instaló correctamente:

```bash
opencode --version
```

---

### PASO 5 - Descarga este proyecto

Abre la terminal y escribe estos dos comandos, **uno después del otro**, pulsando Enter tras cada uno:

```bash
git clone https://github.com/osCeballos/figma-ai-agent-system.git
cd figma-ai-agent-system
```

Verás texto moviéndose mientras se descarga. Cuando vuelva a aparecer el cursor parpadeante, ha terminado.

---

### PASO 6 - Instala las dependencias del proyecto

Con la terminal **aún dentro de la carpeta del proyecto** (la misma ventana del paso anterior), escribe:

```bash
npm install
```

Verás cómo se instalan paquetes automáticamente. Puede tardar entre 1 y 3 minutos. Cuando termine y vuelva el cursor, continúa.

---

### PASO 7 - Crea el archivo de configuración

Ahora tienes que crear un archivo que le dice al sistema cómo conectarse a Figma.

1. Abre la carpeta `figma-ai-agent-system` con cualquier editor de texto (Bloc de notas, VS Code, TextEdit...)
2. Crea un archivo nuevo llamado exactamente **`opencode.json`** (con ese nombre, sin espacios)
3. Copia y pega el contenido correspondiente a tu sistema operativo:

**Si tienes Windows:**

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

**Si tienes Mac:**

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

4. **Importante:** sustituye `TuNombre` por tu nombre de usuario real del ordenador. Si no sabes cuál es:
   - **Windows:** abre el Explorador de archivos → ve a `C:\Users\` y mira el nombre de tu carpeta
   - **Mac:** abre el Finder → ve a la carpeta de inicio (el icono de casa)
5. Guarda el archivo

---

### PASO 8 - Arranca el servidor de conexión

Este servidor es el "puente" entre los agentes y Figma. **Tienes que arrancarlo cada vez que quieras usar el sistema.**

En la terminal (dentro de la carpeta del proyecto), escribe:

```bash
npm run socket
```

Verás un mensaje confirmando que está escuchando. **No cierres esta ventana de terminal** mientras trabajas. Si la cierras por accidente, vuelve a ejecutar el mismo comando.

---

### PASO 9 - Instala el plugin en Figma Desktop

1. Abre **Figma Desktop** (la app, no el navegador)
2. Haz clic en el icono del logo de Figma (arriba a la izquierda)
3. Ve a **Plugins → Development → Import plugin from manifest...**
4. Se abrirá el explorador de archivos. Navega hasta la carpeta del proyecto y selecciona este archivo:
   ```
   src/claude_mcp_plugin/manifest.json
   ```
5. El plugin aparecerá en tu lista bajo **Plugins → Development → Figma AI Agent**

> ⚠️ Asegúrate de seleccionar el archivo dentro de `src/claude_mcp_plugin/` y no ningún otro.

---

### PASO 10 - Comprueba que todo funciona

1. Confirma que el servidor del Paso 9 sigue corriendo en la terminal
2. Abre cualquier archivo en Figma Desktop
3. Ve a **Plugins → Development → Figma AI Agent** para abrir el plugin
4. El plugin mostrará un **código de canal** (un número, en verde)
5. Abre **Opencode desde la terminal**, dentro de la carpeta del proyecto, escribiendo:

   ```bash
   opencode
   ```

<img width="2274" height="1108" alt="image" src="https://github.com/user-attachments/assets/acb51b98-783b-4469-b7fe-2c140615d95b" />
 
   Y escribe en el chat:

```
Conecta con Figma, canal [el número que ves en el plugin]
```

6. Si el agente responde confirmando la conexión... **¡todo está listo!** 🎉

---

## Tu primer diseño

Una vez conectado, puedes pedirle al agente que diseñe algo. Aquí tienes algunos ejemplos para empezar:

> _"Crea una tarjeta de producto para una tienda de ropa. Necesita imagen, nombre del producto, precio y botón de compra."_

> _"Diseña una pantalla de inicio de sesión con campo de email, contraseña y botón. Estilo moderno y minimalista."_

> _"Haz un componente de navegación con logo a la izquierda y 4 enlaces a la derecha."_

El agente te guiará paso a paso. Antes de crear nada en Figma, te mostrará una propuesta de estilo y esperará a que la apruebes. Puedes pedirle cambios o darle el visto bueno.

---

## Instalación asistida con Google Antigravity

Si prefieres automatizar el proceso de configuración y tienes acceso a **Google Antigravity**, puedes solicitar que realice el montaje del proyecto por ti. Antigravity ejecutará los pasos técnicos mientras tú supervisas la seguridad y los permisos.

> [!IMPORTANT]
> **Revisión de Seguridad:** Antigravity puede automatizar la instalación, pero tú debes confirmar cada comando. Verifica que las rutas, tokens y permisos sean correctos antes de aprobar cualquier acción.

### Qué debes proporcionarle a Antigravity

Para que el agente funcione correctamente, asegúrate de entregarle:

1. **Este archivo README.md** de forma íntegra.
2. **Ruta absoluta** donde deseas clonar el proyecto (ej. `C:\Users\TuNombre\Desktop` o `/Users/TuNombre/Desktop`).
3. **Sistema operativo** (Windows o Mac).
4. **Confirmación explícita** de que permites la ejecución de comandos y la revisión de tokens/cuentas de Figma.

---

### Qué comprobar tras la ejecución

Una vez que Antigravity termine el proceso, verifica los siguientes puntos para asegurar la integridad del entorno:

- **Versiones:** Ejecuta `node --version`, `git --version` y `opencode --version`. Deben devolver versiones válidas.
- **Configuración:** Comprueba que el archivo `opencode.json` existe y apunta a la carpeta correcta del proyecto.
- **Servidor:** Ejecuta `npm run socket` y verifica que el servidor de socket arranca sin errores.
- **Figma:** Asegúrate de que el plugin esté importado en Figma Desktop y logre conectar con el canal mostrado.

---

### Prompt para Google Antigravity

Copia y pega el siguiente bloque de texto en tu chat con Google Antigravity:

```text
Tarea: Montar y comprobar el proyecto "figma-ai-agent-system" en mi equipo.

Contexto: Tengo el README del proyecto (te lo adjunto). Quiero que ejecutes los pasos necesarios para dejar el proyecto listo para usar con Figma Desktop y Opencode. No ejecutes nada sin mi confirmación cuando se trate de pegar tokens, modificar mi cuenta de Figma o tocar archivos de diseño.

Sistema operativo: Analiza el sistema operativo del usuario, una vez identificado continua con el proceso
Ruta destino para clonar el proyecto: La ruta del archivo es la carpeta que se le ha proporcionado a google antigravity. Si no se le a asignado se le creara una carpeta en el escritorio del usuario.

Objetivos concretos:
1. Comprobar e instalar (si falta) Node.js LTS, Git y Opencode.
2. Clonar el repositorio [https://github.com/osCeballos/figma-ai-agent-system.git](https://github.com/osCeballos/figma-ai-agent-system.git) en la ruta indicada.
3. Ejecutar `npm install` dentro de la carpeta del proyecto.
4. Crear el archivo `opencode.json` con la configuración adecuada para mi sistema operativo, sustituyendo `TuNombre` por mi usuario real. Te daré el nombre de usuario si lo necesitas.
5. Arrancar el servidor de conexión con `npm run socket` y verificar que está escuchando.
6. Guiarme para importar el plugin en Figma Desktop (indicar exactamente qué archivo seleccionar).
7. Abrir Opencode y ayudarme a conectar con el canal que muestre el plugin en Figma.
8. Al terminar, ejecutar comprobaciones: `node --version`, `git --version`, `opencode --version`, y confirmar que `npm run socket` funciona.

Requisitos de seguridad y confirmación:
- Antes de pegar cualquier token (FIGMA_PAT u otros) o ejecutar comandos que modifiquen mi cuenta de Figma, pídeme confirmación explícita.
- Muéstrame cada comando que vas a ejecutar y espera mi aprobación.
- Si algo falla, copia el mensaje de error exacto y pídeme instrucciones.

Salida esperada:
- Lista de comandos ejecutados y su salida.
- Archivos creados o modificados (con rutas).
- Instrucciones finales para abrir Figma y conectar con el agente.

Adjunto: README.md del proyecto.
```

<img width="564" height="698" alt="image" src="https://github.com/user-attachments/assets/90ddbf90-c747-454d-8fbb-aa2966769165" />

---

## Algo ha ido mal - Solución de problemas

| Lo que ves                                         | Qué ha pasado                                      | Qué hacer                                                                                                                                             |
| :------------------------------------------------- | :------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| El plugin no aparece en Figma                      | Se seleccionó el archivo equivocado                | Repite el Paso 10. El archivo correcto está en `src/claude_mcp_plugin/manifest.json`                                                                  |
| "Canal no encontrado"                              | El servidor no está corriendo                      | Abre la terminal, ve a la carpeta del proyecto y ejecuta `npm run socket`                                                                             |
| El plugin no muestra ningún número                 | El plugin no está abierto                          | Ve a Plugins → Development → Figma AI Agent y ábrelo                                                                                                  |
| El agente no recuerda tus preferencias             | La ruta en `opencode.json` es incorrecta           | Revisa el Paso 7 y comprueba que la ruta lleva exactamente a tu carpeta del proyecto y que el subagente de memoria apunta a `.opencode/agents/memory` |
| Error al ejecutar `git clone`                      | Git no está instalado                              | Instala Git (Paso 3) y reinicia la terminal antes de intentarlo de nuevo                                                                              |
| Error al ejecutar `npm install`                    | Node.js no está instalado o es muy antiguo         | Instala la versión LTS de Node.js (Paso 1) y reinicia la terminal                                                                                     |
| "No FIGMA_PAT found"                               | Falta el token de Figma                            | Repite el Paso 8 y asegúrate de que el token está bien pegado en el `opencode.json`                                                                   |
| El agente no responde                              | Opencode no se lanzó desde la carpeta del proyecto | Cierra Opencode, navega con `cd` hasta la carpeta `figma-ai-agent-system` y ejecuta `opencode` de nuevo                                               |
| La terminal se cierra sola o muestra un error rojo | Algo salió mal en algún comando                    | Copia el mensaje de error exacto y pregúntaselo a tu profesor                                                                                         |

---

## Atajo: El botón de inicio (Recomendado)

Para no tener que escribir comandos cada vez que quieras trabajar, puedes crear un "botón de inicio" que lo haga todo por ti:

### En Windows:

1. Dentro de la carpeta del proyecto, haz clic derecho → **Nuevo → Documento de texto**.
2. Ponle el nombre `iniciar.bat` (asegúrate de que termine en `.bat` y no en `.txt`).
3. Haz clic derecho sobre él → **Editar** y pega este código:

   ```batch
   @echo off
   start cmd /k "npm run socket"
   start cmd /k "opencode"
   ```

4. Guarda y cierra. Ahora, cada vez que quieras trabajar, solo haz **doble clic** en `iniciar.bat`.

### En Mac:

1. Abre el programa **TextEdit** y asegúrate de que esté en modo "Texto plano" (`Format > Make Plain Text`).
2. Pega este código:
   ```bash
   #!/bin/bash
   cd "$(dirname "$0")"
   osascript -e 'tell application "Terminal" to do script "cd \"'$(pwd)'\"; npm run socket"'
   opencode
   ```
3. Guárdalo en la carpeta del proyecto como `iniciar.command`.
4. Abre la Terminal y escribe `chmod +x ` (con un espacio al final), arrastra el archivo `iniciar.command` a la terminal y pulsa Enter.
5. Ahora puedes hacer **doble clic** en `iniciar.command` para arrancar todo.

---

## Cómo cerrar el sistema

Cuando hayas terminado tu sesión de trabajo, sigue estos pasos para cerrar todo correctamente:

1. **En las ventanas de la Terminal:** Haz clic en cada una y pulsa `Ctrl + C`. Esto detendrá los procesos de forma segura.
2. **Cierra las ventanas:** Una vez detenidos los procesos, puedes cerrar las ventanas de la terminal.
3. **Figma:** Puedes cerrar el [plugin](file:///c:/Users/oscar/Desktop/agente/src/claude_mcp_plugin/manifest.json) de Figma simplemente cerrando su ventana dentro de la aplicación.

---

## Estructura del proyecto

```
figma-ai-agent-system/
│
├── .opencode/                    ← Carpeta de configuración automática de Opencode
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
│       └── wcag-calculator/      ← Cálculo nativo de contrastes WCAG
│
├── manifest.json                 ← El "DNI" del plugin para que Figma lo reconozca
└── opencode.json                 ← Configuración de conectores y servidor
```

---

## Créditos

- **Plugin de conexión con Figma:** [claude-talk-to-figma-mcp](https://github.com/arinspunk/claude-talk-to-figma-mcp) por arinspunk
- **Licencia:** MIT - puedes usar, modificar y distribuir este proyecto libremente

---

**Autor:** Oscar Ceballos Cano  
**Año:** 2026
