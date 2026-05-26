#!/bin/bash
cd "$(dirname "$0")"
osascript -e 'tell application "Terminal" to do script "cd \"'$(pwd)'\"; npx -y claude-talk-to-figma-mcp"'
opencode
