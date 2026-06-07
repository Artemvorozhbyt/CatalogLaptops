// Shared DOM helpers, i18n, and product-value translators.

export const $ = (id) => document.getElementById(id);

export const SUPPORTED_LANGS = ["uk", "pl", "en"];
export const LANG_STORAGE_KEY = "laptop-catalog-lang";

function getSafeStorage() {
  try {
    return globalThis.localStorage || null;
  } catch {
    return null;
  }
}

const storage = getSafeStorage();

function storageGet(key) {
  try {
    return storage?.getItem(key) || null;
  } catch {
    return null;
  }
}

function storageSet(key, value) {
  try {
    storage?.setItem(key, value);
  } catch {
    // Some browser contexts disable storage; language still updates for the current page.
  }
}

const legacyLang = storageGet("lang");
let currentLang = storageGet(LANG_STORAGE_KEY) || (SUPPORTED_LANGS.includes(legacyLang) ? legacyLang : "uk");

export const fmt = (price, currency = "PLN") => {
  if (price === undefined || price === null) return "";
  if (price === 0) return `0 ${currency}`;
  return `${price.toLocaleString("pl-PL")} ${currency}`;
};

export const TRANSLATIONS = {
  uk: {
    document_title: "LaptopCatalog — Каталог ноутбуків",
    nav_preview: "Прев'ю",
    nav_catalog: "Каталог",
    nav_sales: "Акції",
    nav_contacts: "Контакти",
    compare: "Порівняти",
    filters: "Фільтри",

    catalog_title_html: "Каталог <span>ноутбуків</span>",
    catalog_subtitle: "Понад 55 моделей від провідних брендів — знайдіть свій ідеальний ноутбук",
    search_placeholder: "Пошук за назвою, брендом, процесором...",
    brand: "Бренд",
    category: "Категорія",
    price: "Ціна (PLN)",
    from: "Від",
    to: "До",
    ram: "Оперативна пам'ять",
    screen_size: "Розмір екрану",
    graphics: "Відеокарта",
    reset_filters: "Скинути фільтри",
    showing: "Показано",
    laptops: "ноутбуків",
    sort_default: "За замовчуванням",
    sort_price_asc: "Ціна: від низької",
    sort_price_desc: "Ціна: від високої",
    sort_name_asc: "Назва: А → Я",
    sort_name_desc: "Назва: Я → А",
    sort_ram_desc: "RAM: від більшої",
    grid_view: "Сітка",
    list_view: "Список",
    details: "Детальніше",
    add_to_compare: "Додати до порівняння",
    remove_from_compare: "Прибрати з порівняння",
    new_badge: "Новинка",
    hot_badge: "🔥 Хіт",
    sale_badge: "Знижка",
    no_results: "Нічого не знайдено",
    try_change_filters: "Спробуйте змінити умови пошуку або скинути фільтри",
    compare_laptops: "Порівняння ноутбуків",
    select_min_2: "Виберіть мінімум 2 ноутбуки для порівняння",
    max_compare: "Можна порівнювати до 4 ноутбуків одночасно",
    specification: "Характеристика",

    spec_cpu: "Процесор",
    spec_gpu: "Відеокарта",
    spec_ram: "RAM",
    spec_storage: "Сховище",
    spec_screen: "Екран",
    spec_os: "ОС",
    spec_weight: "Вага",
    spec_battery: "Акумулятор",
    spec_category: "Категорія",

    category_gaming: "Ігрові",
    category_ultrabooks: "Ультрабуки",
    category_business: "Бізнес",
    category_office: "Офісні",
    category_professional: "Професійні",
    category_multimedia: "Мультимедійні",
    category_education: "Навчання",
    category_apple_mac: "Apple Mac",

    preview_seo_title: "LaptopCatalog — каталог ноутбуків 2026, понад 55 моделей",
    preview_tag: "Каталог ноутбуків 2026",
    preview_title_html: 'Знайди свій<br><span class="xh1-color">ідеальний</span><span class="xh1-ghost">ноутбук</span>',
    preview_subtitle_html:
      'Понад <strong>55 моделей</strong> від Dell, Apple, Lenovo, ASUS, HP та Acer. Фільтруй, порівнюй, купуй розумно.',
    preview_search_aria: "Пошук ноутбука",
    preview_search_button: "Знайти",
    preview_stat_models: "Моделей",
    preview_stat_brands: "Брендів",
    preview_stat_categories: "Категорій",
    preview_stat_satisfied: "Задоволені",
    preview_trust_html: "<strong>2 400+</strong> задоволених покупців",
    preview_cta_catalog: "Перейти до каталогу",
    preview_category_gaming_count: "7 моделей",
    preview_category_business_count: "34 моделі",
    preview_category_education_count: "14 моделей",
    preview_category_apple_count: "8 моделей",
    preview_pill_hot: "HOT",
    preview_pill_top: "TOP",
    preview_pill_sale: "SALE",
    preview_pill_mchip: "M-chip",
    preview_live: "Live",
    preview_live_status: "Статус",
    preview_live_online: "Онлайн",
    preview_live_models: "Моделей",
    preview_live_updated_value: "щойно",
    preview_live_updated: "Оновлено",
    preview_svg_catalog: "Каталог",
    preview_svg_more: "Ще",
    preview_svg_search: "Пошук ноутбука...",
    preview_svg_find: "Знайти",
    preview_svg_showing: "Показано 55",
    preview_feature_compare_title: "Швидке порівняння",
    preview_feature_compare_sub: "До 4 моделей одразу",
    preview_feature_search_title: "Розумний пошук",
    preview_feature_search_sub: "За назвою, брендом, CPU",
    preview_feature_price_title: "Актуальні ціни PLN",
    preview_feature_price_sub: "Оновлено сьогодні",
    preview_feature_lang_title: "Три мови",
    preview_feature_lang_sub: "UA · PL · EN",
    preview_scroll: "Прокрути",
    preview_typewriter_phrases: [
      "Legion 5 Ryzen 7...",
      "MacBook Air M3...",
      "ThinkPad i7 16GB...",
      "ROG Strix RTX...",
      "HP Spectre x360...",
    ],

    contact_eyebrow: "// зв'яжіться з нами",
    contact_title_html: 'Контакти<span>& підтримка</span>',
    contact_subtitle:
      "Готові допомогти з вибором ноутбука, оформленням замовлення або будь-яким іншим питанням — напишіть або зателефонуйте.",
    contact_phone_label: "Телефон",
    contact_phone_action: "Зателефонувати",
    contact_write_action: "Написати",
    contact_open_action: "Відкрити",
    contact_strip_title: "Потрібна консультація?",
    contact_strip_text: "Напишіть нам у Telegram — відповімо швидко та допоможемо підібрати ідеальний ноутбук.",
    contact_strip_button: "Написати в Telegram",
    contact_status: "Онлайн · відповідаємо протягом 15 хвилин",
    contact_footer_copy: "© 2025 TechLab. Всі права захищені.",
    contact_footer_about: "Про нас",
    contact_footer_warranty: "Гарантія",
  },

  pl: {
    document_title: "LaptopCatalog — Katalog laptopów",
    nav_preview: "Podgląd",
    nav_catalog: "Katalog",
    nav_sales: "Promocje",
    nav_contacts: "Kontakt",
    compare: "Porównaj",
    filters: "Filtry",

    catalog_title_html: "Katalog <span>laptopów</span>",
    catalog_subtitle: "Ponad 55 modeli od wiodących marek — znajdź swój idealny laptop",
    search_placeholder: "Szukaj po nazwie, marce, procesorze...",
    brand: "Marka",
    category: "Kategoria",
    price: "Cena (PLN)",
    from: "Od",
    to: "Do",
    ram: "Pamięć RAM",
    screen_size: "Rozmiar ekranu",
    graphics: "Karta graficzna",
    reset_filters: "Resetuj filtry",
    showing: "Pokazano",
    laptops: "laptopów",
    sort_default: "Domyślnie",
    sort_price_asc: "Cena: od najniższej",
    sort_price_desc: "Cena: od najwyższej",
    sort_name_asc: "Nazwa: A → Z",
    sort_name_desc: "Nazwa: Z → A",
    sort_ram_desc: "RAM: od największej",
    grid_view: "Siatka",
    list_view: "Lista",
    details: "Szczegóły",
    add_to_compare: "Dodaj do porównania",
    remove_from_compare: "Usuń z porównania",
    new_badge: "Nowość",
    hot_badge: "🔥 Hit",
    sale_badge: "Promocja",
    no_results: "Nic nie znaleziono",
    try_change_filters: "Spróbuj zmienić kryteria wyszukiwania albo zresetować filtry",
    compare_laptops: "Porównanie laptopów",
    select_min_2: "Wybierz minimum 2 laptopy do porównania",
    max_compare: "Możesz porównywać jednocześnie maksymalnie 4 laptopy",
    specification: "Specyfikacja",

    spec_cpu: "Procesor",
    spec_gpu: "Karta graficzna",
    spec_ram: "RAM",
    spec_storage: "Pamięć masowa",
    spec_screen: "Ekran",
    spec_os: "System operacyjny",
    spec_weight: "Waga",
    spec_battery: "Bateria",
    spec_category: "Kategoria",

    category_gaming: "Gamingowe",
    category_ultrabooks: "Ultrabooki",
    category_business: "Biznesowy",
    category_office: "Biurowe",
    category_professional: "Profesjonalne",
    category_multimedia: "Multimedialne",
    category_education: "Edukacja",
    category_apple_mac: "Apple Mac",

    preview_seo_title: "LaptopCatalog — katalog laptopów 2026, ponad 55 modeli",
    preview_tag: "Katalog laptopów 2026",
    preview_title_html: 'Znajdź swój<br><span class="xh1-color">idealny</span><span class="xh1-ghost">laptop</span>',
    preview_subtitle_html:
      'Ponad <strong>55 modeli</strong> od Dell, Apple, Lenovo, ASUS, HP i Acer. Filtruj, porównuj i kupuj rozsądnie.',
    preview_search_aria: "Wyszukiwarka laptopów",
    preview_search_button: "Szukaj",
    preview_stat_models: "Modeli",
    preview_stat_brands: "Marek",
    preview_stat_categories: "Kategorii",
    preview_stat_satisfied: "Zadowoleni",
    preview_trust_html: "<strong>2 400+</strong> zadowolonych klientów",
    preview_cta_catalog: "Przejdź do katalogu",
    preview_category_gaming_count: "7 modeli",
    preview_category_business_count: "34 modele",
    preview_category_education_count: "14 modeli",
    preview_category_apple_count: "8 modeli",
    preview_pill_hot: "HOT",
    preview_pill_top: "TOP",
    preview_pill_sale: "SALE",
    preview_pill_mchip: "M-chip",
    preview_live: "Live",
    preview_live_status: "Status",
    preview_live_online: "Online",
    preview_live_models: "Modeli",
    preview_live_updated_value: "teraz",
    preview_live_updated: "Aktualizacja",
    preview_svg_catalog: "Katalog",
    preview_svg_more: "Więcej",
    preview_svg_search: "Szukaj laptopa...",
    preview_svg_find: "Szukaj",
    preview_svg_showing: "Pokazano 55",
    preview_feature_compare_title: "Szybkie porównanie",
    preview_feature_compare_sub: "Do 4 modeli naraz",
    preview_feature_search_title: "Inteligentne wyszukiwanie",
    preview_feature_search_sub: "Po nazwie, marce, CPU",
    preview_feature_price_title: "Aktualne ceny PLN",
    preview_feature_price_sub: "Zaktualizowano dzisiaj",
    preview_feature_lang_title: "Trzy języki",
    preview_feature_lang_sub: "UA · PL · EN",
    preview_scroll: "Przewiń",
    preview_typewriter_phrases: [
      "Legion 5 Ryzen 7...",
      "MacBook Air M3...",
      "ThinkPad i7 16GB...",
      "ROG Strix RTX...",
      "HP Spectre x360...",
    ],

    contact_eyebrow: "// skontaktuj się z nami",
    contact_title_html: 'Kontakt<span>& wsparcie</span>',
    contact_subtitle:
      "Chętnie pomożemy w wyborze laptopa, złożeniu zamówienia lub każdym innym pytaniu — napisz albo zadzwoń.",
    contact_phone_label: "Telefon",
    contact_phone_action: "Zadzwoń",
    contact_write_action: "Napisz",
    contact_open_action: "Otwórz",
    contact_strip_title: "Potrzebujesz konsultacji?",
    contact_strip_text: "Napisz do nas na Telegramie — odpowiemy szybko i pomożemy dobrać idealny laptop.",
    contact_strip_button: "Napisz na Telegramie",
    contact_status: "Online · odpowiadamy w ciągu 15 minut",
    contact_footer_copy: "© 2025 TechLab. Wszelkie prawa zastrzeżone.",
    contact_footer_about: "O nas",
    contact_footer_warranty: "Gwarancja",
  },

  en: {
    document_title: "LaptopCatalog — Laptop Catalog",
    nav_preview: "Preview",
    nav_catalog: "Catalog",
    nav_sales: "Deals",
    nav_contacts: "Contacts",
    compare: "Compare",
    filters: "Filters",

    catalog_title_html: "Laptop <span>Catalog</span>",
    catalog_subtitle: "Over 55 models from leading brands — find your perfect laptop",
    search_placeholder: "Search by name, brand, processor...",
    brand: "Brand",
    category: "Category",
    price: "Price (PLN)",
    from: "From",
    to: "To",
    ram: "RAM",
    screen_size: "Display size",
    graphics: "Graphics Card",
    reset_filters: "Reset filters",
    showing: "Showing",
    laptops: "laptops",
    sort_default: "Default",
    sort_price_asc: "Price: Low to High",
    sort_price_desc: "Price: High to Low",
    sort_name_asc: "Name: A → Z",
    sort_name_desc: "Name: Z → A",
    sort_ram_desc: "RAM: Largest First",
    grid_view: "Grid",
    list_view: "List",
    details: "Details",
    add_to_compare: "Add to compare",
    remove_from_compare: "Remove from compare",
    new_badge: "New",
    hot_badge: "🔥 Hot",
    sale_badge: "Sale",
    no_results: "Nothing found",
    try_change_filters: "Try changing the search criteria or reset filters",
    compare_laptops: "Laptop comparison",
    select_min_2: "Select at least 2 laptops to compare",
    max_compare: "You can compare up to 4 laptops at once",
    specification: "Specification",

    spec_cpu: "Processor",
    spec_gpu: "Graphics Card",
    spec_ram: "RAM",
    spec_storage: "Storage",
    spec_screen: "Display",
    spec_os: "Operating System",
    spec_weight: "Weight",
    spec_battery: "Battery",
    spec_category: "Category",

    category_gaming: "Gaming",
    category_ultrabooks: "Ultrabooks",
    category_business: "Business",
    category_office: "Office",
    category_professional: "Professional",
    category_multimedia: "Multimedia",
    category_education: "Education",
    category_apple_mac: "Apple Mac",

    preview_seo_title: "LaptopCatalog — laptop catalog 2026, over 55 models",
    preview_tag: "Laptop catalog 2026",
    preview_title_html: 'Find your<br><span class="xh1-color">perfect</span><span class="xh1-ghost">laptop</span>',
    preview_subtitle_html:
      'Over <strong>55 models</strong> from Dell, Apple, Lenovo, ASUS, HP and Acer. Filter, compare and buy smarter.',
    preview_search_aria: "Laptop search",
    preview_search_button: "Find",
    preview_stat_models: "Models",
    preview_stat_brands: "Brands",
    preview_stat_categories: "Categories",
    preview_stat_satisfied: "Satisfied",
    preview_trust_html: "<strong>2,400+</strong> satisfied customers",
    preview_cta_catalog: "Go to catalog",
    preview_category_gaming_count: "7 models",
    preview_category_business_count: "34 models",
    preview_category_education_count: "14 models",
    preview_category_apple_count: "8 models",
    preview_pill_hot: "HOT",
    preview_pill_top: "TOP",
    preview_pill_sale: "SALE",
    preview_pill_mchip: "M-chip",
    preview_live: "Live",
    preview_live_status: "Status",
    preview_live_online: "Online",
    preview_live_models: "Models",
    preview_live_updated_value: "just now",
    preview_live_updated: "Updated",
    preview_svg_catalog: "Catalog",
    preview_svg_more: "More",
    preview_svg_search: "Search laptop...",
    preview_svg_find: "Find",
    preview_svg_showing: "Showing 55",
    preview_feature_compare_title: "Fast comparison",
    preview_feature_compare_sub: "Up to 4 models at once",
    preview_feature_search_title: "Smart search",
    preview_feature_search_sub: "By name, brand, CPU",
    preview_feature_price_title: "Live PLN prices",
    preview_feature_price_sub: "Updated today",
    preview_feature_lang_title: "Three languages",
    preview_feature_lang_sub: "UA · PL · EN",
    preview_scroll: "Scroll",
    preview_typewriter_phrases: [
      "Legion 5 Ryzen 7...",
      "MacBook Air M3...",
      "ThinkPad i7 16GB...",
      "ROG Strix RTX...",
      "HP Spectre x360...",
    ],

    contact_eyebrow: "// get in touch",
    contact_title_html: 'Contacts<span>& support</span>',
    contact_subtitle:
      "We are ready to help you choose a laptop, place an order, or answer any other question — message us or call.",
    contact_phone_label: "Phone",
    contact_phone_action: "Call",
    contact_write_action: "Message",
    contact_open_action: "Open",
    contact_strip_title: "Need advice?",
    contact_strip_text: "Message us on Telegram — we will reply quickly and help you choose the right laptop.",
    contact_strip_button: "Message on Telegram",
    contact_status: "Online · replies within 15 minutes",
    contact_footer_copy: "© 2025 TechLab. All rights reserved.",
    contact_footer_about: "About us",
    contact_footer_warranty: "Warranty",
  },
};

const CATEGORY_ALIASES = {
  gaming: "gaming",
  "ігрові": "gaming",
  "ігровий": "gaming",
  gamingowe: "gaming",
  gamingowy: "gaming",
  ultrabooks: "ultrabooks",
  ultrabooki: "ultrabooks",
  "ультрабуки": "ultrabooks",
  business: "business",
  biznesowy: "business",
  biznesowe: "business",
  "бізнес": "business",
  office: "office",
  biurowe: "office",
  "офісні": "office",
  professional: "professional",
  profesjonalne: "professional",
  "професійні": "professional",
  multimedia: "multimedia",
  multimedialne: "multimedia",
  "мультимедійні": "multimedia",
  education: "education",
  edukacja: "education",
  "навчання": "education",
  "apple mac": "apple_mac",
  "apple": "apple_mac",
  "mac": "apple_mac",
};

export const getCurrentLang = () => currentLang;

export function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return currentLang;

  currentLang = lang;
  storageSet(LANG_STORAGE_KEY, lang);
  storageSet("lang", lang);
  updateLanguage();
  return currentLang;
}

export function t(key, lang = currentLang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.uk;
  return dict[key] ?? TRANSLATIONS.uk[key] ?? key;
}

export function normalizeCategory(value) {
  if (!value || typeof value !== "string") return value;
  const normalized = value.trim().toLowerCase();
  return CATEGORY_ALIASES[normalized] || normalized.replace(/\s+/g, "_");
}

export function translateCategory(value, lang = currentLang) {
  const key = normalizeCategory(value);
  return t(`category_${key}`, lang);
}

export function translateBattery(value, lang = currentLang) {
  if (!value) return value;

  const text = String(value).replace(/\u202f/g, " ").trim();
  const match = text.match(/\d+(?:\s*[–-]\s*\d+)?/);
  if (!match) return text;

  const units = {
    uk: "годин",
    pl: "godzin",
    en: "hours",
  };

  return `${match[0].replace(/\s+/g, "")} ${units[lang] || units.uk}`;
}

export function translateSpecValue(field, value, lang = currentLang) {
  if (field === "category") return translateCategory(value, lang);
  if (field === "battery") return translateBattery(value, lang);
  return value;
}

function setContent(selector, key, mode = "text", root = document) {
  const el = typeof selector === "string" ? root.querySelector(selector) : selector;
  if (!el) return;
  if (mode === "html") el.innerHTML = t(key);
  else el.textContent = t(key);
}

export function updateLanguage() {
  if (typeof document === "undefined") return;

  const lang = getCurrentLang();
  const htmlLang = lang === "uk" ? "uk" : lang === "pl" ? "pl" : "en";
  document.documentElement.lang = htmlLang;
  document.title = t("document_title", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n, lang);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml, lang);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder, lang);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.setAttribute("title", t(el.dataset.i18nTitle, lang));
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAriaLabel, lang));
  });

  const heroTitle = document.getElementById("heroTitle");
  if (heroTitle) heroTitle.innerHTML = t("catalog_title_html", lang);

  const heroSubtitle = document.getElementById("heroSubtitle");
  if (heroSubtitle) heroSubtitle.textContent = t("catalog_subtitle", lang);

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.placeholder = t("search_placeholder", lang);

  const resultsInfo = document.querySelector(".results-info");
  if (resultsInfo) {
    const count = document.getElementById("resultCount")?.textContent || "0";
    resultsInfo.innerHTML = `${t("showing", lang)} <strong id="resultCount">${count}</strong> <span data-i18n="laptops">${t("laptops", lang)}</span>`;
  }

  document.getElementById("gridViewBtn")?.setAttribute("title", t("grid_view", lang));
  document.getElementById("listViewBtn")?.setAttribute("title", t("list_view", lang));

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  const preview = document.getElementById("previewPage");
  if (preview) {
    setContent(preview.querySelector(".xh1"), "preview_title_html", "html");
    setContent(preview.querySelector(".xsub"), "preview_subtitle_html", "html");
    setContent(preview.querySelector(".xtag-text"), "preview_tag");
    setContent(preview.querySelector(".xsearch-btn"), "preview_search_button");
    setContent(preview.querySelector("[data-preview-stat='models']"), "preview_stat_models");
    setContent(preview.querySelector("[data-preview-stat='brands']"), "preview_stat_brands");
    setContent(preview.querySelector("[data-preview-stat='categories']"), "preview_stat_categories");
    setContent(preview.querySelector("[data-preview-stat='satisfied']"), "preview_stat_satisfied");
    setContent(preview.querySelector(".xtrust-copy"), "preview_trust_html", "html");
    setContent(preview.querySelector(".xbtn-p .xbtn-label"), "preview_cta_catalog");
    setContent(preview.querySelector("[data-preview-live='live']"), "preview_live");
    setContent(preview.querySelector("[data-preview-live='status']"), "preview_live_status");
    setContent(preview.querySelector("[data-preview-live='online']"), "preview_live_online");
    setContent(preview.querySelector("[data-preview-live='models']"), "preview_live_models");
    setContent(preview.querySelector("[data-preview-live='updated-value']"), "preview_live_updated_value");
    setContent(preview.querySelector("[data-preview-live='updated']"), "preview_live_updated");
    setContent(preview.querySelector("[data-preview-svg='catalog']"), "preview_svg_catalog");
    setContent(preview.querySelector("[data-preview-svg='more']"), "preview_svg_more");
    setContent(preview.querySelector("[data-preview-svg='search']"), "preview_svg_search");
    setContent(preview.querySelector("[data-preview-svg='find']"), "preview_svg_find");
    setContent(preview.querySelector("[data-preview-svg='showing']"), "preview_svg_showing");
    setContent(preview.querySelector(".xscroll-label"), "preview_scroll");

    preview.querySelectorAll("[data-preview-category]").forEach((el) => {
      el.textContent = translateCategory(el.dataset.previewCategory, lang);
    });
    preview.querySelectorAll("[data-preview-key]").forEach((el) => {
      el.textContent = t(el.dataset.previewKey, lang);
    });

    const xSearch = document.getElementById("xSearchInput");
    if (xSearch) {
      xSearch.setAttribute("aria-label", t("preview_search_aria", lang));
      xSearch.placeholder = "";
    }

    window.setPreviewSearchPhrases?.(t("preview_typewriter_phrases", lang));
  }

  const contacts = document.getElementById("contactsPage");
  if (contacts) {
    setContent(contacts.querySelector(".contact-eyebrow"), "contact_eyebrow");
    setContent(contacts.querySelector("#contactsTitle"), "contact_title_html", "html");
    setContent(contacts.querySelector(".contact-sub"), "contact_subtitle");
    setContent(contacts.querySelector(".contact-strip-left h2"), "contact_strip_title");
    setContent(contacts.querySelector(".contact-strip-left p"), "contact_strip_text");
    setContent(contacts.querySelector(".contact-strip-btn .contact-strip-label"), "contact_strip_button");
    setContent(contacts.querySelector(".contact-status .contact-status-text"), "contact_status");
    setContent(contacts.querySelector(".contact-footer-copy"), "contact_footer_copy");
  }
}

export function getUnique(key, laptops) {
  return [...new Set(laptops.map((l) => l[key]))].filter(Boolean).sort();
}

export function countByKey(key, val, laptops) {
  return laptops.filter((l) => l[key] === val).length;
}
