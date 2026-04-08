# 🎨 Figma AI Agent System
> ### Sistema de agentes de IA para diseño automatizado en Figma

![Opencode](https://img.shields.io/badge/Platform-Opencode-blue)
![Figma](https://img.shields.io/badge/Design-Figma-F24E1E)
![Node.js](https://img.shields.io/badge/Node.js-v18+-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 2. ¿Qué es esto? 🤔

Este sistema es como tener un **equipo de diseñadores expertos** trabajando dentro de tu computadora. En lugar de mover cada píxel a mano, puedes hablar con estos "agentes" para que creen layouts, elijan colores o revisen la accesibilidad de tus diseños por ti. Está diseñado para que te enfoques en la parte creativa mientras la IA se encarga de las tareas repetitivas y técnicas en Figma.

**¿Qué puede hacer por ti este sistema?**
- ✨ **Crear interfaces completas** a partir de una simple descripción.
- 📐 **Organizar capas y layouts** automáticamente siguiendo reglas de diseño profesional.
- 🎨 **Gestionar sistemas de diseño**, tokens de color y tipografías consistentes.
- 🔍 **Auditar tus diseños** para asegurar que cumplen con estándares de accesibilidad.
- 🧠 **Recordar tus preferencias** para que cada diseño se sienta "tuyo".

---

## 3. Arquitectura del sistema (visual) 🏗️

Así es como se organizan los agentes para trabajar en tus proyectos:

| Agente | Función Principal | Relación |
| :--- | :--- | :--- |
| **Figma Director** | El "jefe" del equipo. Recibe tus órdenes y decide qué sub-agente debe actuar. | Coordina a todos los demás. |
| **Design Subagent** | El experto visual. Define estilos, colores y la estética general. | Propone el estilo visual. |
| **Layout Subagent** | El arquitecto. Se encarga de la estructura y el Auto Layout. | Construye la estructura. |
| **Tokens & Components**| Los bibliotecarios. Gestionan los elementos reutilizables de Figma. | Mantienen el orden. |
| **Auditor Subagent** | El control de calidad. Revisa que todo esté perfecto y accesible. | Da el visto bueno final. |
| **Memory Subagent** | El historiador. Recuerda tus decisiones previas y gustos. | Da contexto al equipo. |

---

## 4. Requisitos previos 📋

Antes de empezar, asegúrate de tener instalados estos programas:

1. **Node.js (v18 o superior):** Es el motor que permite ejecutar el código del sistema.  
   👉 [Descargar Node.js](https://nodejs.org/)
2. **Figma Desktop:** La versión de escritorio de Figma (necesaria para conectar con la IA).  
   👉 [Descargar Figma](https://www.figma.com/downloads/)
3. **Opencode:** La plataforma base donde viven nuestros agentes de IA.  
   👉 [Sitio de Opencode](#) *(Enlace a tu plataforma interna)*
4. **Git:** La herramienta para descargar y actualizar este proyecto de forma sencilla.  
   👉 [Descargar Git](https://git-scm.com/)

---

## 5. Instalación paso a paso 🚀

Sigue estos pasos con calma. No necesitas ser programador para lograrlo.

### 🌐 Paso 1: Clonar el repositorio
Abre la terminal de tu sistema y escribe:

**En Windows (PowerShell):**
```powershell
git clone https://github.com/tu-usuario/figma-ai-agent-system.git
cd figma-ai-agent-system
```

**En Mac (Terminal):**
```bash
git clone https://github.com/tu-usuario/figma-ai-agent-system.git
cd figma-ai-agent-system
```
[CAPTURA: Una ventana de terminal con el comando git clone escrito]

---

### 📦 Paso 2: Instalar dependencias
Instala los paquetes necesarios dentro de la carpeta del proyecto:

**En Windows (PowerShell):**
```powershell
npm install
```

**En Mac (Terminal):**
```bash
npm install
```
[CAPTURA: La terminal mostrando una lista de paquetes instalándose]

---

### 🔌 Paso 3: Configurar el MCP de Figma
Necesitamos que la IA pueda "hablar" con Figma. Usaremos el conector `claude-talk-to-figma-mcp`.

1. Abre la configuración de tu plataforma Opencode.
2. Añade un nuevo MCP con la siguiente configuración:
   - **Nombre:** Figma
   - **Comando:** `npx -y claude-talk-to-figma-mcp`
   - **Variables:** Necesitarás tu `FIGMA_PAT` (Personal Access Token).
[CAPTURA: Pantalla de configuración de Opencode con el cuadro de MCP resaltado]

---

### 📁 Paso 4: Configurar el MCP de Filesystem
Esto permite que los agentes guarden "recuerdos" en tu carpeta local.

1. Añade otro MCP en Opencode:
   - **Nombre:** Filesystem
   - **Comando:** `npx -y @modelcontextprotocol/server-filesystem [RUTA_A_TU_CARPETA]`
[CAPTURA: Selección de una carpeta local desde la interfaz de configuración]

---

### 🎨 Paso 5: Instalar el plugin en Figma Desktop
1. Abre Figma Desktop.
2. Ve a **Plugins > Development > New Plugin**.
3. Haz clic en "Link existing block" y selecciona el archivo `manifest.json` de este repositorio.
[CAPTURA: Menú de plugins de Figma señalando la opción Development]

---

### ✅ Paso 6: Verificar
Escribe en el chat de tu agente: `"Hola, ¿puedes ver mi archivo de Figma actual?"`. Si responde positivamente, ¡estás listo!

---

### 🪄 Alternativa: Instalación Automática (El "Botón Mágico")

Si los pasos anteriores con la terminal te parecen muy técnicos o te dan algún error, ¡no te preocupes! Puedes pedirle a **Google Antigravity** que haga el trabajo pesado por ti y te prepare un archivo ejecutable (para que solo tengas que hacer doble clic).

Abre **Google Antigravity** y usa exactamente este prompt:

> "Analiza los requisitos de este proyecto de Figma AI Agent System. Por favor, crea un archivo ejecutable (.bat si uso Windows o .command si uso Mac) que yo pueda guardar en mi escritorio. Este script debe encargarse de todo automáticamente: descargar el código, instalar las dependencias de Node.js, ejecutar la configuración de los conectores MCP y arrancar el servidor. Escribe el script a prueba de fallos, añadiendo mensajes claros (echo) para saber qué está haciendo en cada paso."

**¿Qué pasará después?**
Antigravity te dará el código para un archivo. Solo tendrás que guardarlo en tu escritorio, hacerle doble clic, y él solo abrirá una ventana, instalará todo lo necesario y conectará tu Figma sin que tengas que escribir ni un solo comando más. ¡Cero estrés!

---

## 6. Cómo usar el sistema por primera vez 🛠️

1. **Abre Figma** y entra en el archivo donde quieras trabajar.
2. **Inicia el plugin** que instalaste (Plugins > Development > Figma AI Agent).
3. **Abre Opencode** y selecciona el agente de diseño.
4. **Dale una orden**, por ejemplo: *"Crea una sección de Hero para una app de café con tonos marrones"*.
5. **Observa la magia:** Verás cómo los elementos aparecen y se organizan solos en tu lienzo de Figma.

---

## 7. Estructura del repositorio 📂

```text
├── agents/             # Cerebros y lógica de la IA
│   ├── figma-director.md    # El coordinador: recibe órdenes y delega tareas
│   ├── design-subagent.md   # El estratega visual: define estilos y estética
│   ├── layout-subagent.md   # El arquitecto: construye estructuras y Auto Layout
│   ├── components-subagent.md # El bibliotecario: gestiona botones y elementos
│   ├── tokens-subagent.md   # El colorista: controla variables y tokens de diseño
│   ├── auditor-subagent.md  # El revisor: asegura accesibilidad y calidad
│   ├── memory-subagent.md   # El historiador: guarda tus preferencias y gustos
│   └── GLOSSARY.md          # Diccionario de términos técnicos del sistema
├── skills/             # Biblioteca de conocimientos y patrones
│   ├── design-patterns/     # Guías de cómo hacer cada sección (Hero, Navbar...)
│   ├── css-to-figma-api/    # Utilidades para convertir código a diseño
│   └── svg-library/         # Carpetas con iconos y recursos gráficos
├── manifest.json       # El "DNI" del plugin para que Figma lo reconozca
└── README.md           # Esta guía de supervivencia
```

---

## 8. Solución de problemas frecuentes 🔍

| Problema | Causa probable | Solución |
| :--- | :--- | :--- |
| **El plugin no aparece en Figma** | No se ha vinculado el `manifest.json`. | Repite el Paso 5 de la instalación. |
| **Agente dice "canal no encontrado"** | El plugin de Figma no está abierto. | Abre el plugin desde el menú "Development" en Figma. |
| **Filesystem MCP no conecta** | La ruta de la carpeta es incorrecta. | Revisa que la ruta en el Paso 4 sea absoluta (ej: `C:\Users\...`). |
| **No encuentra archivos de memoria** | El agente de Memoria no tiene permisos. | Verifica que el MCP de Filesystem tenga acceso a la subcarpeta `agents/memory`. |
| **Error "No FIGMA_PAT"** | Falta el token de acceso personal. | Genera uno en la configuración de tu cuenta de Figma y añádelo a Opencode. |
| **Los comandos fallan en Terminal** | Node.js no está bien instalado. | Reinicia tu computadora tras instalar Node.js. |

---

## 9. Contribuir 🤝

¿Quieres mejorar este sistema con tus compañeros? ¡Es fácil!

1. **Haz un Fork** del repositorio de tu compañero.
2. **Crea una Rama** con tu nueva función (ej: `git checkout -b mejora-iconos`).
3. **Sube tus cambios** (Push) a GitHub.
4. **Crea un Pull Request** explicando qué has mejorado para que el dueño lo revise.

---

## 10. Créditos y licencia 📜

- **Base Tecnológica:** [claude-talk-to-figma-mcp](https://github.com/arinspunk/claude-talk-to-figma-mcp) por arinspunk.
- **Plataforma:** Opencode AI.
- **Licencia:** Distribuido bajo la Licencia **MIT**.

---
**Autor:** [Añade tu nombre aquí]  
**Institución:** [Añade el nombre de tu escuela/universidad]  
**Año:** 2024
