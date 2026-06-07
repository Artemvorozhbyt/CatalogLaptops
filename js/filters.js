import { laptops } from "./laptops.generated.js";
import { state } from "./state.js";
import { $, countByKey, getCurrentLang, getUnique, normalizeCategory, translateCategory } from "./utils.js";

export function buildFilters() {
  renderCheckList("brandFilters", getUnique("brand", laptops), state.brands, "brand");

  const categories = [...new Set(laptops.map((l) => normalizeCategory(l.category)))].filter(Boolean).sort();
  renderCheckList("categoryFilters", categories, state.categories, "category");

  renderCheckList("ramFilters", getUnique("ram", laptops), state.rams, "ram");
  renderCheckList("screenFilters", getUnique("screen", laptops), state.screens, "screen");
  renderCheckList("gpuFilters", ["NVIDIA", "AMD", "Intel", "Apple"], state.gpus, "gpu");
}

function renderCheckList(containerId, items, stateSet, field) {
  const container = $(containerId);
  if (!container) return;

  const lang = getCurrentLang();

  container.innerHTML = items
    .map((item) => {
      const value = field === "category" ? normalizeCategory(item) : item;
      const label = field === "category" ? translateCategory(value, lang) : value;
      const count =
        field === "gpu"
          ? laptops.filter((l) => l.gpu.toLowerCase().includes(item.toLowerCase())).length
          : field === "category"
            ? laptops.filter((l) => normalizeCategory(l.category) === value).length
            : countByKey(field, item, laptops);

      return `
        <label class="check-item">
          <input type="checkbox" value="${value}" ${stateSet.has(value) ? "checked" : ""}/>
          <span class="check-box">${stateSet.has(value) ? "✓" : ""}</span>
          <span class="check-label">${label}</span>
          <span class="check-count">${count}</span>
        </label>
      `;
    })
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

export function applyFilters() {
  let list = [...laptops];

  if (state.search) {
    const q = state.search.toLowerCase();
    list = list.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.brand.toLowerCase().includes(q) ||
        l.cpu.toLowerCase().includes(q) ||
        normalizeCategory(l.category).toLowerCase().includes(q) ||
        translateCategory(l.category, "uk").toLowerCase().includes(q) ||
        translateCategory(l.category, "pl").toLowerCase().includes(q) ||
        translateCategory(l.category, "en").toLowerCase().includes(q) ||
        l.gpu.toLowerCase().includes(q),
    );
  }

  if (state.brands.size) list = list.filter((l) => state.brands.has(l.brand));
  if (state.categories.size) list = list.filter((l) => state.categories.has(normalizeCategory(l.category)));
  if (state.rams.size) list = list.filter((l) => state.rams.has(l.ram));
  if (state.screens.size) list = list.filter((l) => state.screens.has(l.screen));

  if (state.gpus.size) {
    list = list.filter((l) => {
      const g = l.gpu.toLowerCase();
      for (const f of state.gpus) {
        if (
          (f === "NVIDIA" && g.includes("nvidia")) ||
          (f === "AMD" && g.includes("amd")) ||
          (f === "Intel" && g.includes("intel")) ||
          (f === "Apple" && g.includes("apple"))
        ) {
          return true;
        }
      }
      return false;
    });
  }

  list = list.filter((l) => l.price >= state.priceMin && l.price <= state.priceMax);

  const ramVal = (s) => parseInt(s, 10) || 0;
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
