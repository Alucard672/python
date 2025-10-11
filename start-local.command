#!/usr/bin/env bash
# macOS 双击启动
cd "$(dirname "$0")"
if [ ! -d "dist-local" ]; then
  if command -v npm >/dev/null 2>&1; then
    npm run build:local
  else
    osascript -e 'display notification "npm 未安装，无法自动构建。请先安装 Node/npm 或手动使用 dist-local.zip。" with title "启动失败"'
    exit 1
  fi
fi
open "http://localhost:5500"
python3 -m http.server 5500 --directory dist-local