#!/usr/bin/env bash
# -----------------------------------------------------------------------------
# setup_assets.sh — Pablo Oca Galeano · personal website
#
# Copies the personal photos from ~/Desktop/Fotos into ./assets/img/,
# converts the .HEIC files to web-friendly .jpg using macOS' native `sips`,
# resizes everything to a max of 1800px on the long side and renames them
# without spaces.
#
# Usage (from the repository root):
#   chmod +x setup_assets.sh && ./setup_assets.sh
# -----------------------------------------------------------------------------
set -euo pipefail

if ! command -v sips >/dev/null 2>&1; then
  echo "✗ 'sips' not found. This script must be run on macOS." >&2
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEST="${SCRIPT_DIR}/assets/img"
SRC="/Users/pocagal/Desktop/Fotos"

MAX_PX=1800      # longest side in pixels
QUALITY=82       # JPEG quality (0-100)

mkdir -p "${DEST}"

# source path | destination filename
ASSETS=(
  "${SRC}/Pycon/2.jpeg|pycon-2026.jpg"
  "${SRC}/Obradoiro 2026.HEIC|obradoiro-2026.jpg"
  "${SRC}/banco_lappeen.HEIC|lappeenranta-bench.jpg"
  "${SRC}/lappeen_senyal.jpg|lappeenranta-sign.jpg"
)

for entry in "${ASSETS[@]}"; do
  in="${entry%%|*}"
  out="${DEST}/${entry##*|}"

  if [[ ! -f "${in}" ]]; then
    echo "✗ Missing source file: ${in}" >&2
    exit 1
  fi

  # sips converts (HEIC → JPEG), resizes and re-encodes in a single pass.
  sips -s format jpeg \
       -s formatOptions "${QUALITY}" \
       -Z "${MAX_PX}" \
       "${in}" --out "${out}" >/dev/null

  size=$(du -h "${out}" | cut -f1)
  dims=$(sips -g pixelWidth -g pixelHeight "${out}" | awk '/pixel/{print $2}' | paste -sd'x' -)
  echo "✓ $(basename "${out}")  ${dims}  ${size}"
done

echo ""
echo "Done. Images ready in ./assets/img/"
