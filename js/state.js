// js/state.js
// ─────────────────────────────
// Глобальний стан застосунку (application state)
// ─────────────────────────────

// Основний об'єкт стану
export const state = {
  search: "",
  brands: new Set(),
  categories: new Set(),
  rams: new Set(),
  screens: new Set(),
  gpus: new Set(),
  priceMin: 0,
  priceMax: 99999,
  sort: "default",
  view: "grid",
  page: 1,
  perPage: 12,
  compareList: [],
  currentLanguage: "uk", // за замовчуванням
};

// --- Перемикання мови ---
export function setLanguage(lang) {
  const supported = ["uk", "pl", "en"];
  if (!supported.includes(lang)) return;

  state.currentLanguage = lang;
  localStorage.setItem("laptop-catalog-lang", lang);

  // Оновлюємо мову у utils
  import("./utils.js").then((utils) => {
    utils.setLanguage(lang);
  });

  // Оновлюємо тексти інтерфейсу
  import("./utils.js").then((utils) => {
    if (utils.updateLanguage) utils.updateLanguage();
  });

  // Перерендер каталогу
  import("./render.js").then((mod) => {
    if (mod.renderAll) mod.renderAll();
  });
}

// --- Завантаження мови при старті ---
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("laptop-catalog-lang") || "uk";
  state.currentLanguage = savedLang;
});
