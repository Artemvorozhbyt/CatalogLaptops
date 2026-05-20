import ast
import json
import pathlib
import re

path = pathlib.Path(__file__).resolve().parent.parent / 'js' / 'laptops.source.js'
text = path.read_text(encoding='utf-8')

phrase_map_en = {
    'ноутбук': 'laptop',
    'ноутбука': 'laptop',
    'ноутбуки': 'laptops',
    'бізнес‑ноутбук': 'business laptop',
    'бізнесовий': 'business',
    'бізнес': 'business',
    'ігровий': 'gaming',
    'ігрових': 'gaming',
    'ігрова': 'gaming',
    'ігровий ноутбук': 'gaming laptop',
    'ультрабук': 'ultrabook',
    'преміум': 'premium',
    'міцний': 'durable',
    'надійний': 'reliable',
    'компактний': 'compact',
    'легкий': 'light',
    'нова': 'new',
    'нове': 'new',
    'новинка': 'new',
    'потужний': 'powerful',
    'потужність': 'power',
    'дисплей': 'display',
    'екран': 'screen',
    'процесором': 'processor',
    'процесора': 'processor',
    'дискретною': 'discrete',
    'графікою': 'graphics',
    'графікою': 'graphics',
    'тривалим': 'long',
    'довгим часом роботи': 'long battery life',
    'автономністю': 'battery life',
    'автономність': 'autonomy',
    'з': 'with',
    'та': 'and',
    'й': 'and',
    'для': 'for',
    'роботи': 'work',
    'робоча': 'work',
    'робочий': 'work',
    'мультимедіа': 'multimedia',
    'мультимедіа': 'multimedia',
    'сенсорним': 'touch',
    'сенсорний': 'touch',
    'портативний': 'portable',
    'комфортною клавіатурою': 'comfortable keyboard',
    'дизайном': 'design',
    'стильний': 'stylish',
    'стильний': 'stylish',
    'яскравим': 'bright',
    'якісною': 'quality',
}

phrase_map_pl = {
    'ноутбук': 'laptop',
    'ноутбука': 'laptopa',
    'ноутбуки': 'laptopy',
    'бізнес‑ноутбук': 'biznesowy laptop',
    'бізнесовий': 'biznesowy',
    'бізнес': 'biznesowy',
    'ігровий': 'gamingowy',
    'ігрових': 'gamingowych',
    'ігрова': 'gamingowa',
    'ігровий ноутбук': 'gamingowy laptop',
    'ультрабук': 'ultrabook',
    'преміум': 'premium',
    'міцний': 'trwały',
    'надійний': 'solidny',
    'компактний': 'kompaktowy',
    'легкий': 'lekki',
    'нова': 'nowy',
    'нове': 'nowy',
    'новинка': 'nowość',
    'потужний': 'wydajny',
    'потужність': 'moc',
    'дисплей': 'ekran',
    'екран': 'ekran',
    'процесором': 'procesorem',
    'процесора': 'procesora',
    'дискретною': 'dedykowaną',
    'графікою': 'kartą graficzną',
    'довгим часом роботи': 'długim czasem pracy',
    'автономністю': 'czasem pracy na baterii',
    'автономність': 'autonomią',
    'з': 'z',
    'та': 'i',
    'й': 'i',
    'для': 'dla',
    'роботи': 'pracy',
    'робоча': 'robocza',
    'робочий': 'roboczy',
    'мультимедіа': 'multimedialny',
    'сенсорним': 'dotykowym',
    'сенсорний': 'dotykowy',
    'портативний': 'przenośny',
    'комфортною клавіатурою': 'wygodną klawiaturą',
    'дизайном': 'designem',
    'стильний': 'stylowy',
    'яскравим': 'jasnym',
    'якісною': 'wysokiej jakości',
}

# Sort by descending key length so multi-word phrases replace first.
phrase_items_en = sorted(phrase_map_en.items(), key=lambda item: -len(item[0]))
phrase_items_pl = sorted(phrase_map_pl.items(), key=lambda item: -len(item[0]))


def translate(text: str, mapping):
    result = text
    for uk, tr in mapping:
        result = result.replace(uk, tr)
    return result


def replacement(match):
    indent = re.match(r"^(\s*)", match.group(0)).group(1)
    quote = match.group('quote')
    raw = match.group('raw')
    value = ast.literal_eval(quote + raw + quote)
    uk = value
    pl = translate(uk, phrase_items_pl)
    en = translate(uk, phrase_items_en)
    return f"{indent}desc: {{\n{indent}  uk: {json.dumps(uk, ensure_ascii=False)},\n{indent}  pl: {json.dumps(pl, ensure_ascii=False)},\n{indent}  en: {json.dumps(en, ensure_ascii=False)}\n{indent}}},"

pattern = re.compile(r'(?P<indent>^\s*)desc:\s*(?P<quote>["\'])(?P<raw>(?:\\.|[^\\\'\"])*?)(?P=quote),', re.MULTILINE)
new_text, count = pattern.subn(replacement, text)

backup = path.with_suffix(path.suffix + '.bak')
if not backup.exists():
    backup.write_text(text, encoding='utf-8')

path.write_text(new_text, encoding='utf-8')
print(f'updated {count} desc entries')
