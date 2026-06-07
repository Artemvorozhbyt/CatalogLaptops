import { laptops } from "./laptops.generated.js";
import { state } from "./state.js";
import { fmt, getCurrentLang, t, translateSpecValue } from "./utils.js";

const SPEC_FIELDS = [
  ["spec_cpu", "cpu"],
  ["spec_gpu", "gpu"],
  ["spec_ram", "ram"],
  ["spec_storage", "storage"],
  ["spec_screen", "screen"],
  ["spec_os", "os"],
  ["spec_weight", "weight"],
  ["spec_battery", "battery"],
  ["spec_category", "category"],
];

function safePlaceholderLabel(text) {
  return encodeURIComponent(text.replace(/[^a-zA-Z0-9]+/g, "+")).replace(/\++$/, "");
}

function getImageGallery(laptop) {
  if (Array.isArray(laptop.images) && laptop.images.length) {
    return laptop.images;
  }

  const base = "https://via.placeholder.com/640x480?text=";
  const label = safePlaceholderLabel(laptop.name || laptop.brand || "Laptop");
  return [`${base}${label}+Front`, `${base}${label}+Side`, `${base}${label}+Detail`];
}

export function initModals() {
  const detailModal = document.getElementById("detailModal");
  const compareModal = document.getElementById("compareModal");
  const openCompare = document.getElementById("openCompare");
  const closeCompare = document.getElementById("closeCompare");

  detailModal?.addEventListener("click", (e) => {
    if (e.target === detailModal) detailModal.classList.remove("open");
  });

  openCompare?.addEventListener("click", openCompareModal);
  closeCompare?.addEventListener("click", () => compareModal?.classList.remove("open"));
  compareModal?.addEventListener("click", (e) => {
    if (e.target === compareModal) compareModal.classList.remove("open");
  });
}

export function openDetail(id) {
  const detailModal = document.getElementById("detailModal");
  const content = document.getElementById("detailModalContent");
  const laptop = laptops.find((x) => x.id === id);
  if (!detailModal || !content || !laptop) return;

  const lang = getCurrentLang();
  const specRows = SPEC_FIELDS.map(([labelKey, field]) => {
    const value = translateSpecValue(field, laptop[field], lang);
    return `
      <div class="spec-row">
        <div class="spec-key">${t(labelKey, lang)}</div>
        <div class="spec-val">${value}</div>
      </div>`;
  }).join("");

  const gallery = getImageGallery(laptop);
  const desc = typeof laptop.desc === "object" && laptop.desc[lang] ? laptop.desc[lang] : laptop.desc;

  content.innerHTML = `
    <button class="modal-close" id="closeDetail" aria-label="Close">×</button>
    <div class="modal-header">
      <div class="modal-gallery">
        <div class="modal-main-img">
          <img src="${gallery[0]}" alt="${laptop.brand} ${laptop.name} photo" onerror="this.onerror=null;this.src='https://via.placeholder.com/640x480?text=No+Image'">
        </div>
        <div class="modal-thumb-row">
          ${gallery
            .map(
              (src, idx) => `
                <button type="button" class="gallery-thumb ${idx === 0 ? "active" : ""}" data-img="${src}">
                  <img src="${src}" alt="${laptop.brand} ${laptop.name} photo ${idx + 1}" onerror="this.onerror=null;this.src='https://via.placeholder.com/100x75?text=?'">
                </button>`,
            )
            .join("")}
        </div>
      </div>
      <div class="modal-title">
        <div class="modal-brand">${laptop.brand}</div>
        <div class="modal-name">${laptop.name}</div>
        ${laptop.oldPrice ? `<div style="font-size:.85rem;color:var(--muted);text-decoration:line-through;margin-top:.4rem">${fmt(laptop.oldPrice)}</div>` : ""}
        <div class="modal-price">${fmt(laptop.price)}</div>
      </div>
    </div>
    <div class="modal-specs-grid">${specRows}</div>
    <div class="modal-desc">${desc || ""}</div>
  `;

  const mainImage = content.querySelector(".modal-main-img img");
  content.querySelectorAll(".gallery-thumb").forEach((btn) => {
    btn.addEventListener("click", () => {
      content.querySelectorAll(".gallery-thumb").forEach((thumb) => thumb.classList.remove("active"));
      btn.classList.add("active");
      if (mainImage) mainImage.src = btn.dataset.img;
    });
  });

  detailModal.classList.add("open");
  document.getElementById("closeDetail")?.addEventListener("click", () => detailModal.classList.remove("open"));
}

export function toggleCompare(id) {
  const countEl = document.getElementById("compareCount");
  const lang = getCurrentLang();
  const idx = state.compareList.indexOf(id);

  if (idx >= 0) {
    state.compareList.splice(idx, 1);
  } else {
    if (state.compareList.length >= 4) {
      alert(t("max_compare", lang));
      return;
    }
    state.compareList.push(id);
  }

  if (countEl) countEl.textContent = state.compareList.length.toString();
  import("./render.js").then((r) => r.renderCatalog());
}

export function openCompareModal() {
  const compareModal = document.getElementById("compareModal");
  const compareContent = document.getElementById("compareContent");
  if (!compareModal || !compareContent) return;

  const lang = getCurrentLang();

  if (state.compareList.length < 2) {
    alert(t("select_min_2", lang));
    return;
  }

  const items = state.compareList.map((id) => laptops.find((l) => l.id === id)).filter(Boolean);

  const fields = [
    [t("price", lang), (l) => `<span style="font-weight:700;color:var(--accent2)">${fmt(l.price)}</span>`],
    ...SPEC_FIELDS.map(([labelKey, field]) => [t(labelKey, lang), (l) => translateSpecValue(field, l[field], lang)]),
  ];

  const headerCells = items
    .map(
      (l) => `
        <th class="item-header">
          <span class="item-emoji">${l.emoji || ""}</span>
          <div class="item-name">${l.name}</div>
          <div class="item-price">${fmt(l.price)}</div>
        </th>`,
    )
    .join("");

  const rows = fields
    .map(([label, fn]) => {
      const cells = items.map((item) => `<td>${fn(item)}</td>`).join("");
      return `<tr><td>${label}</td>${cells}</tr>`;
    })
    .join("");

  compareContent.innerHTML = `
    <div class="compare-table">
      <table>
        <thead><tr><th>${t("specification", lang)}</th>${headerCells}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;

  compareModal.classList.add("open");
}
