from pathlib import Path
import re
import unicodedata

root = Path(__file__).resolve().parent.parent
src = root / "js" / "laptops.source.js"
dst = root / "js" / "laptops.generated.js"
text = src.read_text(encoding="utf-8")
lines = text.splitlines()

entries = []
output = []
current = []
depth = 0

for line in lines:
    opens = line.count("{")
    closes = line.count("}")
    if depth > 0 or (depth == 0 and opens > closes and line.strip().startswith("{")):
        current.append(line)
        depth += opens - closes
        if depth == 0:
            entries.append(current)
            current = []
    else:
        output.append(line)


if current:
    output.extend(current)


def slugify(text: str) -> str:
    normalized = unicodedata.normalize("NFKD", text)
    ascii_text = normalized.encode("ascii", "ignore").decode("ascii")
    slug = re.sub(r"[^a-z0-9]+", "-", ascii_text.lower()).strip("-")
    return slug or "laptop"


def make_images_block(slug: str, indent: str) -> str:
    return (
        f"{indent}images: ["
        f"\n{indent}  `/images/laptops/{slug}-1.jpg`,"
        f"\n{indent}  `/images/laptops/{slug}-2.jpg`,"
        f"\n{indent}  `/images/laptops/{slug}-3.jpg`,"
        f"\n{indent}],"
    )


def process_entry(entry_lines):
    block = entry_lines.copy()
    text = "\n".join(block)
    if re.search(r"^\s*images\s*:\s*\[", text, re.MULTILINE):
        return block

    name_match = re.search(r"^\s*name\s*:\s*(['\"])(.*?)\1", text, re.MULTILINE)
    id_match = re.search(r"^\s*id\s*:\s*(\d+)", text, re.MULTILINE)
    name = name_match.group(2) if name_match else ""
    item_id = id_match.group(1) if id_match else ""
    slug = slugify(name or item_id or "laptop")

    insert_before = None
    insert_index = len(block) - 1
    for i, line in enumerate(block):
        if re.match(r"^\s*desc\s*:", line):
            insert_before = i
            break
    if insert_before is None:
        for i, line in enumerate(block):
            if re.match(r"^\s*}\s*,?\s*$", line):
                insert_before = i
                break

    indent = "  "
    for line in block:
        if re.match(r"^(\s*)emoji\s*:", line):
            indent = re.match(r"^(\s*)emoji\s*:", line).group(1)
            break
        if re.match(r"^(\s*)id\s*:", line):
            indent = re.match(r"^(\s*)id\s*:", line).group(1)
            break

    images_block = make_images_block(slug, indent)
    if insert_before is None:
        block.insert(-1, images_block)
    else:
        block.insert(insert_before, images_block)

    return block


processed = []
for entry in entries:
    processed.extend(process_entry(entry))

final = "\n".join(output[: output.index(entries[0][0])]) if entries else "\n".join(output)
# build final file: include all lines before the first object, then processed entries, then remaining lines after objects

start_idx = 0
for i, line in enumerate(output):
    if line == entries[0][0]:
        start_idx = i
        break
else:
    start_idx = len(output)

header = output[:start_idx]
footer = output[start_idx + len(entries) :]
final_lines = header + processed + footer
final_content = "\n".join(final_lines) + "\n"

dst.write_text(final_content, encoding="utf-8")
print(f"Generated {dst}")
