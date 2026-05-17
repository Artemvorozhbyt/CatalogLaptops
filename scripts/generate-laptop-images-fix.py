from pathlib import Path
import re
import unicodedata

root = Path(__file__).resolve().parent.parent
src = root / "js" / "laptops.source.js"
dst = root / "js" / "laptops.generated.js"
text = src.read_text(encoding="utf-8")
lines = text.splitlines()

output = []
entries = []
current = []
brace_depth = 0
in_array = False

for line in lines:
    stripped = line.strip()
    if not in_array:
        output.append(line)
        if stripped == "export const laptops = [":
            in_array = True
        continue

    if in_array:
        current.append(line)
        opens = line.count("{")
        closes = line.count("}")
        brace_depth += opens - closes
        if brace_depth == 0 and current:
            entries.append(current)
            current = []
            continue

if current:
    entries.append(current)


def slugify(value: str) -> str:
    normalized = unicodedata.normalize("NFKD", value)
    ascii_text = normalized.encode("ascii", "ignore").decode("ascii")
    slug = re.sub(r"[^a-z0-9]+", "-", ascii_text.lower()).strip("-")
    return slug or "laptop"


def make_images_block(slug: str, indent: str) -> list[str]:
    return [
        f"{indent}images: [",
        f"{indent}  '/images/laptops/{slug}-1.jpg',",
        f"{indent}  '/images/laptops/{slug}-2.jpg',",
        f"{indent}  '/images/laptops/{slug}-3.jpg',",
        f"{indent}],",
    ]


def process_entry(entry_lines: list[str]) -> list[str]:
    text = "\n".join(entry_lines)
    if re.search(r"^\s*images\s*:\s*\[", text, re.MULTILINE):
        return entry_lines

    name_match = re.search(r"^\s*name\s*:\s*(['\"])(.*?)\1", text, re.MULTILINE)
    id_match = re.search(r"^\s*id\s*:\s*(\d+)", text, re.MULTILINE)
    name = name_match.group(2) if name_match else ""
    item_id = id_match.group(1) if id_match else ""
    slug = slugify(name or item_id or "laptop")

    insert_index = None
    indent = "  "
    for i, line in enumerate(entry_lines):
        if re.match(r"^\s*(desc|emoji|brand|id|name)\s*:", line) and indent == "  ":
            indent = re.match(r"^(\s*)", line).group(1)
        if re.match(r"^\s*desc\s*:", line):
            insert_index = i
            break

    if insert_index is None:
        for i, line in enumerate(entry_lines):
            if re.match(r"^\s*}\s*,?\s*$", line):
                insert_index = i
                break

    images_block = make_images_block(slug, indent)
    if insert_index is None:
        return entry_lines + images_block

    return entry_lines[:insert_index] + images_block + entry_lines[insert_index:]

processed = []
for entry in entries:
    processed.extend(process_entry(entry))

header = []
footer = []
started = False
for line in lines:
    if not started and line.strip() == "export const laptops = [":
        started = True
        header.append(line)
        continue
    if not started:
        header.append(line)
        continue
    if started and entries and line == entries[0][0]:
        break

if entries:
    footer_start = None
    for i, line in enumerate(lines):
        if line == entries[-1][-1]:
            footer_start = i + 1
            break
    footer = lines[footer_start:] if footer_start is not None else []
else:
    footer = []

final_lines = header + processed + footer
final_content = "\n".join(final_lines).rstrip() + "\n"
dst.write_text(final_content, encoding="utf-8")
print(f"Generated {dst}")
