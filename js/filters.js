// js/filters.js
// ─────────────────────────────
// Формування та застосування фільтрів
// ─────────────────────────────

import { laptops } from "./laptops.generated.js";
import { state } from "./state.js";
import { $, getUnique, countByKey, t, getCurrentLang } from "./utils.js";

// Переклади для категорій
const categoryLabels = {
  uk: { gaming: "Ігрові", ultrabooks: "Ультрабуки", business: "Бізнес", office: "Офісні", professional: "Професійні", multimedia: "Мультимедійні" },
  pl: { gaming: "Gamingowe", ultrabooks: "Ultrabooki", business: "Biznesowe", office: "Biurowe", professional: "Profesjonalne", multimedia: "Multimedialne" },
  en: { gaming: "Gaming", ultrabooks: "Ultrabooks", business: "Business", office: "Office", professional: "Professional", multimedia: "Multimedia" },
};

const categoryLookup = Object.entries(categoryLabels).reduce((lookup, [, labels]) => {
  Object.entries(labels).forEach(([key, label]) => {
    lookup[key.toLowerCase()] = key;
    lookup[label.toLowerCase()] = key;
  });
  return lookup;
}, {});

function normalizeCategory(value) {
  if (!value || typeof value !== "string") return value;
  return categoryLookup[value.toLowerCase()] || value;
}

// --- Побудова списків фільтрів у сайдбарі ---
export function buildFilters() {
  renderCheckList("brandFilters", getUnique("brand", laptops), state.brands, "brand");
  const categories = [...new Set(laptops.map((l) => normalizeCategory(l.category)))]
    .filter(Boolean)
    .sort();
  renderCheckList("categoryFilters", categories, state.categories, "category");
  renderCheckList("ramFilters", getUnique("ram", laptops), state.rams, "ram");
  renderCheckList("screenFilters", getUnique("screen", laptops), state.screens, "screen");
  renderCheckList("gpuFilters", ["NVIDIA", "AMD", "Intel", "Apple"], state.gpus, "gpu");
}

// --- Допоміжна функція для генерації списку чекбоксів ---
function renderCheckList(containerId, items, stateSet, field) {
  const container = $(containerId);
  const lang = getCurrentLang();
  
  container.innerHTML = items
    .map(
      (item) => {
        // Отримуємо переведену назву категорії, якщо це категорія
        const canonicalItem = field === "category" ? normalizeCategory(item) : item;
        let displayLabel = canonicalItem;
        if (field === "category" && categoryLabels[lang] && categoryLabels[lang][canonicalItem]) {
          displayLabel = categoryLabels[lang][canonicalItem];
        }
        
        return `
        <label class="check-item">
          <input type="checkbox" value="${canonicalItem}" ${stateSet.has(canonicalItem) ? "checked" : ""}/>
          <span class="check-box">${stateSet.has(canonicalItem) ? "✓" : ""}</span>
          <span class="check-label">${displayLabel}</span>
          <span class="check-count">${
            field === "gpu"
              ? laptops.filter((l) => l.gpu.toLowerCase().includes(item.toLowerCase())).length
              : field === "category"
              ? laptops.filter((l) => normalizeCategory(l.category) === canonicalItem).length
              : countByKey(field, item, laptops)
          }</span>
        </label>
      `;
      }
    )
    .join("");

  container.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
    cb.addEventListener("change", () => {
      if (cb.checked) stateSet.add(cb.value);
      else stateSet.delete(cb.value);
      state.page = 1;
      import("./render.js").then((r) => r.renderAll());
    });
  });
}

// --- Основна функція фільтрації ---
export function applyFilters() {
  let list = [...laptops];

  // Пошук
  if (state.search) {
    const q = state.search.toLowerCase();
    list = list.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.brand.toLowerCase().includes(q) ||
        l.cpu.toLowerCase().includes(q) ||
        l.category.toLowerCase().includes(q) ||
        l.gpu.toLowerCase().includes(q)
    );
  }

  // Фільтрація
  if (state.brands.size) list = list.filter((l) => state.brands.has(l.brand));
  if (state.categories.size) list = list.filter((l) => state.categories.has(normalizeCategory(l.category)));
  if (state.rams.size) list = list.filter((l) => state.rams.has(l.ram));
  if (state.screens.size) list = list.filter((l) => state.screens.has(l.screen));
  if (state.gpus.size)
    list = list.filter((l) => {
      const g = l.gpu.toLowerCase();
      for (const f of state.gpus) {
        if (
          (f === "NVIDIA" && g.includes("nvidia")) ||
          (f === "AMD" && g.includes("amd")) ||
          (f === "Intel" && g.includes("intel")) ||
          (f === "Apple" && g.includes("apple"))
        )
          return true;
      }
      return false;
    });

  // Діапазон цін
  list = list.filter((l) => l.price >= state.priceMin && l.price <= state.priceMax);

  // Сортування
  const ramVal = (s) => parseInt(s);
  switch (state.sort) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      list.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "ram-desc":
      list.sort((a, b) => ramVal(b.ram) - ramVal(a.ram));
      break;
  }

  return list;
}
