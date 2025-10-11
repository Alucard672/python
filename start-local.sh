#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
# Build local with relative paths if dist-local not present
if [ ! -d "dist-local" ]; then
  if command -v npm >/dev/null 2>&1; then
    npm run build:local
  else
    echo "npm 未安装，无法自动构建。请先安装 Node/npm 或手动使用 dist-local.zip。"
    exit 1
  fi
fi
echo "启动本地静态服务器： http://localhost:5500"
python3 -m http.server 5500 --directory dist-local