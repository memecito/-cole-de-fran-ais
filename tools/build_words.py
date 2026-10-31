#!/usr/bin/env python3
"""Genera words.js a partir de data/vocabulaire.txt
(formato: francés|es1,es2,...|categoria — líneas con # son comentarios).

El francés puede llevar varias formas separadas por " / " (p. ej. masculino /
femenino: "grand / grande"); la primera es la que se muestra en la sopa de letras.
"""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent

words, seen = [], set()
for line in (ROOT / "data/vocabulaire.txt").read_text(encoding="utf8").splitlines():
    if "|" not in line or line.lstrip().startswith("#"):
        continue
    parts = line.split("|")
    raw, es = parts[0], parts[1]
    cat = parts[2].strip() if len(parts) > 2 and parts[2].strip() else None
    key = raw.strip().lower()
    if key in seen:
        continue
    seen.add(key)
    entry = {"fr": [v.strip() for v in raw.split(" / ") if v.strip()],
             "es": [v.strip() for v in es.split(",") if v.strip()]}
    if cat:
        entry["cat"] = cat
    words.append(entry)

out = ROOT / "words.js"
out.write_text("// Generado por tools/build_words.py — no editar a mano\nconst WORDS = "
               + json.dumps(words, ensure_ascii=False, separators=(",", ":")) + ";\n", encoding="utf8")
print(len(words), "palabras ->", out)
