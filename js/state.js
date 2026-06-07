import { getCurrentLang, setLanguage as persistLanguage, SUPPORTED_LANGS } from "./utils.js";

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
  currentLanguage: getCurrentLang(),
};

export function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;

  state.currentLanguage = persistLanguage(lang);

  import("./render.js").then((mod) => {
    mod.renderAll?.();
  });
}
