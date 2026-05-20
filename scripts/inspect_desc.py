from pathlib import Path
import re

path = Path(__file__).resolve().parent.parent / 'js' / 'laptops.source.js'
text = path.read_text(encoding='utf-8')

string_descs = re.findall(r"desc:\s*('(?:[^'\\]|\\.)*'|\"(?:[^\\\"\\]|\\.)*\")", text)
object_descs = len(re.findall(r"desc:\s*\{", text))
print('string_descs', len(string_descs))
print('desc_objects', object_descs)

# show first few string desc snippets
for i, match in enumerate(string_descs[:10], 1):
    print(i, match[:80])
