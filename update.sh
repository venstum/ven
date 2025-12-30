#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

set -x

git fetch
git pull
bun run build
pm2 restart ven
