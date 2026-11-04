#!/usr/bin/env sh
# AdminLTE 2.4.18 vendor fayllarini lokal papkaga yuklab oladi (CDN siz ishlash uchun).
# Foydalanish: sh install-assets.sh public/admin/vendor
set -e
DEST="${1:-public/admin/vendor}"
DIR="$(cd "$(dirname "$0")" && pwd)"
LIST="$DIR/../assets/assets.txt"
BASE="https://cdn.jsdelivr.net/npm/"
fail=0
grep -v '^\s*#' "$LIST" | grep -v '^\s*$' | while IFS= read -r path; do
  path="$(printf '%s' "$path" | tr -d '\r')"
  mkdir -p "$DEST/$(dirname "$path")"
  if curl -fsSL "$BASE$path" -o "$DEST/$path"; then echo "ok   $path"; else echo "FAIL $path"; fail=1; fi
done
cp "$DIR/../assets/admin.css" "$DIR/../assets/admin.js" "$DEST/../" 2>/dev/null || true
echo "Tayyor: $DEST  (admin.css va admin.js -> $(dirname "$DEST"))"
