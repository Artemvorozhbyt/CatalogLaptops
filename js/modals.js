// js/modals.js
// ─────────────────────────────
// Модальні вікна та порівняння
// ─────────────────────────────

import { laptops } from "./laptops.generated.js";
import { state } from "./state.js";
import { fmt, t, getCurrentLang } from "./utils.js";

// Ключі перекладу для характеристик
const specKeys = {
  cpu: "Процесор",
  gpu: "Відеокарта",
  ram: "RAM",
  storage: "Сховище",
  screen: "Екран",
  os: "ОС",
  weight: "Вага",
  battery: "Акумулятор",
  category: "Категорія"
};

const specTranslations = {
  uk: { cpu: "Процесор", gpu: "Відеокарта", ram: "RAM", storage: "Сховище", screen: "Екран", os: "ОС", weight: "Вага", battery: "Акумулятор", category: "Категорія" },
  pl: { cpu: "Procesor", gpu: "Karta graficzna", ram: "RAM", storage: "Pamięć", screen: "Ekran", os: "System", weight: "Waga", battery: "Bateria", category: "Kategoria" },
  en: { cpu: "Processor", gpu: "Graphics Card", ram: "RAM", storage: "Storage", screen: "Screen", os: "OS", weight: "Weight", battery: "Battery", category: "Category" }
};

function safePlaceholderLabel(text) {
  return encodeURIComponent(text.replace(/[^a-zA-Z0-9]+/g, "+")).replace(/\++$/, "");
}

function getImageGallery(laptop) {
  if (Array.isArray(laptop.images) && laptop.images.length) {
    return laptop.images;
  }
  const base = "https://via.placeholder.com/640x480?text=";
  const label = safePlaceholderLabel(laptop.name || laptop.brand || "Laptop");
  return [
    `${base}${label}+Front`,
    `${base}${label}+Side`,
    `${base}${label}+Detail`
  ];
}

export function initModals() {
  const $ = (id) => document.getElementById(id);

  // закриття вікна деталей по кліку на фон
  $("detailModal").addEventListener("click", (e) => {
    if (e.target === $("detailModal")) $("detailModal").classList.remove("open");
  });

  // порівняльне вікно
  $("openCompare").addEventListener("click", openCompareModal);
  $("closeCompare").addEventListener("click", () => $("compareModal").classList.remove("open"));
  $("compareModal").addEventListener("click", (e) => {
    if (e.target === $("compareModal")) $("compareModal").classList.remove("open");
  });
}

// ─── Детальне модальне вікно ─────────────────────────
export function openDetail(id) {
  const $ = (id) => document.getElementById(id);
  const l = laptops.find((x) => x.id === id);
  if (!l) return;

  const lang = getCurrentLang();
  const specs = specTranslations[lang] || specTranslations.uk;

  const specRows = [
    [specs.cpu, l.cpu],
    [specs.gpu, l.gpu],
    [specs.ram, l.ram],
    [specs.storage, l.storage],
    [specs.screen, l.screen],
    [specs.os, l.os],
    [specs.weight, l.weight],
    [specs.battery, l.battery],
    [specs.category, l.category],
  ]
    .map(
      ([k, v]) => `
      <div class="spec-row">
        <div class="spec-key">${k}</div>
        <div class="spec-val">${v}</div>
      </div>`
    )
    .join("");

  const gallery = getImageGallery(l);

  // Get description in current language
  let desc = l.desc;
  if (typeof l.desc === "object" && l.desc[lang]) {
    desc = l.desc[lang];
  }

  $("detailModalContent").innerHTML = `
    <button class="modal-close" id="closeDetail">✕</button>
    <div class="modal-header">
      <div class="modal-gallery">
        <div class="modal-main-img">
          <img src="${gallery[0]}" alt="${l.brand} ${l.name} photo" onerror="this.onerror=null;this.src='https://via.placeholder.com/640x480?text=No+Image'">
        </div>
        <div class="modal-thumb-row">
          ${gallery.map((src, idx) => `
            <button type="button" class="gallery-thumb ${idx === 0 ? "active" : ""}" data-img="${src}">
              <img src="${src}" alt="${l.brand} ${l.name} photo ${idx + 1}" onerror="this.onerror=null;this.src='https://via.placeholder.com/100x75?text=?'">
            </button>`).join("")}
        </div>
      </div>
      <div class="modal-title">
        <div class="modal-brand">${l.brand}</div>
        <div class="modal-name">${l.name}</div>
        ${l.oldPrice ? `<div style="font-size:.85rem;color:var(--muted);text-decoration:line-through;margin-top:.4rem">${fmt(l.oldPrice)}</div>` : ""}
        <div class="modal-price">${fmt(l.price)}</div>
      </div>
    </div>
    <div class="modal-specs-grid">${specRows}</div>
    <div class="modal-desc">${desc}</div>
  `;

  const mainImage = $("detailModalContent").querySelector(".modal-main-img img");
  $("detailModalContent").querySelectorAll(".gallery-thumb").forEach((btn) => {
    btn.addEventListener("click", () => {
      $("detailModalContent").querySelectorAll(".gallery-thumb").forEach((thumb) => thumb.classList.remove("active"));
      btn.classList.add("active");
      if (mainImage) mainImage.src = btn.dataset.img;
    });
  });

  $("detailModal").classList.add("open");
  $("closeDetail").addEventListener("click", () => $("detailModal").classList.remove("open"));
}

// ─── Додавання / видалення з порівняння ─────────────────────────
export function toggleCompare(id) {
  const countEl = document.getElementById("compareCount");
  const lang = getCurrentLang();
  const idx = state.compareList.indexOf(id);

  if (idx >= 0) {
    // вже є → прибираємо
    state.compareList.splice(idx, 1);
  } else {
    // додаємо, але не більше 4
    if (state.compareList.length >= 4) {
      alert(t("max_compare", lang));
      return;
    }
    state.compareList.push(id);
  }

  if (countEl) countEl.textContent = state.compareList.length.toString();

  // оновлюємо картки
  import("./render.js").then((r) => r.renderCatalog());
}

// ─── Модальне вікно порівняння ─────────────────────────
export function openCompareModal() {
  const $ = (id) => document.getElementById(id);
  const lang = getCurrentLang();
  const specs = specTranslations[lang] || specTranslations.uk;

  if (state.compareList.length < 2) {
    alert(t("select_min_2", lang));
    return;
  }

  const items = state.compareList.map((id) => laptops.find((l) => l.id === id));

  const fields = [
    [t("price", lang), (l) => `<span style="font-weight:700;color:var(--accent2)">${fmt(l.price)}</span>`],
    [specs.cpu, (l) => l.cpu],
    [specs.gpu, (l) => l.gpu],
    [specs.ram, (l) => l.ram],
    [specs.storage, (l) => l.storage],
    [specs.screen, (l) => l.screen],
    [specs.os, (l) => l.os],
    [specs.weight, (l) => l.weight],
    [specs.battery, (l) => l.battery],
    [specs.category, (l) => l.category],
  ];

  const headerCells = items
    .map(
      (l) => `
        <th class="item-header">
          <span class="item-emoji">${l.emoji}</span>
          <div class="item-name">${l.name}</div>
          <div class="item-price">${fmt(l.price)}</div>
        </th>`
    )
    .join("");

  const rows = fields
    .map(([label, fn]) => {
      const vals = items.map(fn);
      const cells = vals.map((v) => `<td>${v}</td>`).join("");
      return `<tr><td>${label}</td>${cells}</tr>`;
    })
    .join("");

  $("compareContent").innerHTML = `
    <div class="compare-table">
      <table>
        <thead><tr><th>${t("Характеристика", lang)}</th>${headerCells}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;

  $("compareModal").classList.add("open");
}
