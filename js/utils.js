// js/utils.js
// ─────────────────────────────────────────────
// Утиліти, переклади та допоміжні функції
// ─────────────────────────────────────────────

// --- DOM helper ---
export const $ = (id) => document.getElementById(id);

// --- Форматування ціни ---
export const fmt = (price, currency = "PLN") => {
  if (price === undefined || price === null) return "";
  if (price === 0) return `0 ${currency}`;
  return `${price.toLocaleString("pl-PL")} ${currency}`;
};

// --- Поточна мова (тимчасово зберігаємо в state або localStorage) ---
let currentLang = localStorage.getItem("lang") || "uk";

export const getCurrentLang = () => currentLang;

export function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  updateLanguage();
}

// --- Переклади ---
export const TRANSLATIONS = {
  uk: {
    compare: "Порівняти",
    filters: "Фільтри",
    catalog_title: "Каталог ноутбуків",
    catalog_subtitle:
      "Понад 55 моделей від провідних брендів — знайдіть свій ідеальний ноутбук",
    search_placeholder: "Пошук за назвою, брендом, процесором...",
    brand: "Бренд",
    category: "Категорія",
    price: "Ціна (PLN)",
    from: "Від",
    to: "До",
    ram: "Оперативна памʼять",
    screen_size: "Розмір екрану",
    graphics: "Відеокарта",
    reset_filters: "Скинути фільтри",
    gaming: "Ігрові",
    ultrabooks: "Ультрабуки",
    business: "Бізнес",
    office: "Офісні",
    professional: "Професійні",
    multimedia: "Мультимедійні",
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
  },

  pl: {
    compare: "Porównaj",
    filters: "Filtry",
    catalog_title: "Katalog laptopów",
    catalog_subtitle:
      "Ponad 55 modeli od wiodących marek — znajdź swój idealny laptop",
    search_placeholder: "Wyszukaj po nazwie, marce, procesorze...",
    brand: "Marka",
    category: "Kategoria",
    price: "Cena (PLN)",
    from: "Od",
    to: "Do",
    ram: "Pamięć RAM",
    screen_size: "Rozmiar ekranu",
    graphics: "Karta graficzna",
    reset_filters: "Resetuj filtry",
    gaming: "Gamingowe",
    ultrabooks: "Ultrabooki",
    business: "Biznesowe",
    office: "Biurowe",
    professional: "Profesjonalne",
    multimedia: "Multimedialne",
    showing: "Pokazano",
    laptops: "laptopów",
    sort_default: "Domyślnie",
    sort_price_asc: "Cena: od najniższej",
    sort_price_desc: "Cena: od najwyższej",
    sort_name_asc: "Nazwa: A → Z",
    sort_name_desc: "Nazwa: Z → A",
    sort_ram_desc: "RAM: od największego",
    grid_view: "Siatka",
    list_view: "Lista",
    details: "Szczegóły",
    add_to_compare: "Dodaj do porównania",
    remove_from_compare: "Usuń z porównania",
    new_badge: "Nowość",
    hot_badge: "🔥 Hit",
    sale_badge: "Wyprzedaż",
    no_results: "Nic nie znaleziono",
    try_change_filters: "Spróbuj zmienić kryteria wyszukiwania або zresetować filtry",
    compare_laptops: "Porównanie laptopów",
    select_min_2: "Wybierz minimum 2 laptopy do porównania",
    max_compare: "Możна porównати maksymalnie 4 лaptopy jednocześnie",
  },

  en: {
    compare: "Compare",
    filters: "Filters",
    catalog_title: "Laptop Catalog",
    catalog_subtitle:
      "Over 55 models from leading brands — find your perfect laptop",
    search_placeholder: "Search by name, brand, processor...",
    brand: "Brand",
    category: "Category",
    price: "Price (PLN)",
    from: "From",
    to: "To",
    ram: "RAM Memory",
    screen_size: "Screen Size",
    graphics: "Graphics Card",
    reset_filters: "Reset Filters",
    gaming: "Gaming",
    ultrabooks: "Ultrabooks",
    business: "Business",
    office: "Office",
    professional: "Professional",
    multimedia: "Multimedia",
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
    add_to_compare: "Add to Compare",
    remove_from_compare: "Remove from Compare",
    new_badge: "New",
    hot_badge: "🔥 Hot",
    sale_badge: "Sale",
    no_results: "Nothing found",
    try_change_filters:
      "Try changing search criteria or reset filters",
    compare_laptops: "Laptop Comparison",
    select_min_2: "Select minimum 2 laptops for comparison",
    max_compare: "You can compare up to 4 laptops simultaneously",
  },
};

// --- Функція перекладу ---
export function t(key, lang = null) {
  const current = lang || getCurrentLang();
  const dict = TRANSLATIONS[current] || TRANSLATIONS.uk;
  return dict[key] || key;
}

// --- Оновлення тексту інтерфейсу відповідно до мови ---
export function updateLanguage() {
  const lang = getCurrentLang();
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.uk;

  // ─ Header labels
  document.getElementById("filtersLabel").textContent = dict.filters;
  document.getElementById("compareLabel").textContent = dict.compare;

  // ─ Hero section
  const heroTitle = document.getElementById("heroTitle");
  if (heroTitle) {
    const title = lang === "uk" ? "Каталог" : lang === "pl" ? "Katalog" : "Catalog";
    const subtitle = lang === "uk" ? "ноутбуків" : lang === "pl" ? "laptopów" : "Laptops";
    heroTitle.innerHTML = `${title} <span>${subtitle}</span>`;
  }

  const heroSubtitle = document.getElementById("heroSubtitle");
  if (heroSubtitle) heroSubtitle.textContent = dict.catalog_subtitle;

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.placeholder = dict.search_placeholder;

  // ─ Filter titles
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = dict[key] || key;
  });

  // ─ Filter placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = dict[key] || key;
  });

  // ─ Sort options
  document.querySelectorAll("#sortSelect option").forEach(option => {
    const key = option.getAttribute("data-i18n");
    if (key) option.textContent = dict[key] || option.textContent;
  });

  // ─ Results info
  const resultsInfo = document.querySelector(".results-info");
  if (resultsInfo) {
    const count = document.getElementById("resultCount")?.textContent || "0";
    resultsInfo.innerHTML = `${dict.showing} <strong>${count}</strong> <span data-i18n="laptops">${dict.laptops}</span>`;
  }

  // ─ View buttons titles
  document.getElementById("gridViewBtn")?.setAttribute("title", dict.grid_view);
  document.getElementById("listViewBtn")?.setAttribute("title", dict.list_view);

  // ─ Language selector active button
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  // ─ Перестройка фільтрів з новими переводами
  import("./filters.js").then((mod) => {
    if (mod.buildFilters) mod.buildFilters();
  });
}

// --- Сервісні утиліти ---
export function getUnique(key, laptops) {
  return [...new Set(laptops.map((l) => l[key]))].sort();
}

export function countByKey(key, val, laptops) {
  return laptops.filter((l) => l[key] === val).length;
}
