// js/render.js
// ─────────────────────────────────────────────
// Основні функції рендеру каталогу ноутбуків
// ─────────────────────────────────────────────

import { laptops } from "./laptops.generated.js";
import { state } from "./state.js";
import { applyFilters } from "./filters.js";
import { fmt, $, t, getCurrentLang } from "./utils.js";
import { openDetail, toggleCompare } from "./modals.js";
import { buildFilters } from "./filters.js";

function getCoverImage(laptop) {
  if (Array.isArray(laptop.images) && laptop.images.length) {
    return `<img src="${laptop.images[0]}" alt="${laptop.brand} ${laptop.name}" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x300?text=No+Image'">`;
  }
  return `<span class="card-emoji">${laptop.emoji}</span>`;
}

// ─── Рендер однієї картки ноутбука ─────────────────────────────

export function cardHTML(laptop, listMode = false) {
  const inCompare = state.compareList.includes(laptop.id);
  const lang = getCurrentLang ? getCurrentLang() : "uk";
  const imageMarkup = getCoverImage(laptop);

  const badge = laptop.badge
    ? `
      <span class="card-badge badge-${laptop.badge}">
        ${laptop.badge === "new" ? t("new_badge", lang)
          : laptop.badge === "hot" ? t("hot_badge", lang)
          : t("sale_badge", lang)}
      </span>
    `
    : "";

  const compareTgl = `
    <button class="compare-toggle ${inCompare ? "active" : ""}"
      data-id="${laptop.id}"
      title="${inCompare ? t("remove_from_compare", lang) : t("add_to_compare", lang)}">
      ⚖️
    </button>
  `;

  const specs = `
    <div class="card-specs">
      <span class="spec-chip"><b>${laptop.cpu.split(" ").slice(0, 3).join(" ")}</b></span>
      <span class="spec-chip"><b>${laptop.ram}</b> RAM</span>
      <span class="spec-chip"><b>${laptop.storage}</b></span>
      <span class="spec-chip"><b>${laptop.screen.split(" ").slice(0, 2).join(" ")}</b></span>
    </div>
  `;

  const priceBlock = `
    <div>
      ${laptop.oldPrice ? `<div class="old-price">${fmt(laptop.oldPrice)}</div>` : ""}
      <div class="card-price">${fmt(laptop.price)}</div>
    </div>
  `;

  // ----- Вид списку -----
  if (listMode) {
    return `
      <div class="laptop-card list-card" data-id="${laptop.id}">
        ${badge}
        <div class="card-img">${imageMarkup}</div>
        <div class="card-body">
          <div class="card-info">
            <div class="card-brand">${laptop.brand}</div>
            <div class="card-name">${laptop.name}</div>
            <span class="spec-chip" style="font-size:.75rem">${laptop.category}</span>
          </div>
          <div class="card-specs-wrap">${specs}</div>
          <div class="card-action">
            ${priceBlock}
            <button class="detail-btn" data-id="${laptop.id}">${t("details", lang)}</button>
            ${compareTgl}
          </div>
        </div>
      </div>
    `;
  }

  // ----- Вид сітки -----
  return `
    <div class="laptop-card" data-id="${laptop.id}">
      ${badge}
      ${compareTgl}
      <div class="card-img">${imageMarkup}</div>
      <div class="card-body">
        <div class="card-brand">${laptop.brand}</div>
        <div class="card-name">${laptop.name}</div>
        ${specs}
        <div class="card-footer">
          ${priceBlock}
          <button class="detail-btn" data-id="${laptop.id}">${t("details", lang)}</button>
        </div>
      </div>
    </div>
  `;
}

// ─── Головна функція рендеру каталогу ─────────────────────────────

export function renderCatalog() {
  const filtered = applyFilters();
  const lang = getCurrentLang();
  const resultCount = $("resultCount");
  if (resultCount) resultCount.textContent = filtered.length;
  renderActiveTags();

  const total = filtered.length;
  const pages = Math.ceil(total / state.perPage);
  if (state.page > pages && pages > 0) state.page = pages;

  const start = (state.page - 1) * state.perPage;
  const paged = filtered.slice(start, start + state.perPage);

  const catalog = $("catalog");
  catalog.className = state.view === "grid" ? "catalog-grid" : "catalog-list";

  if (paged.length === 0) {
    catalog.innerHTML = `
      <div class="no-results" style="grid-column:1/-1">
        <div class="icon">🔎</div>
        <h3>${t("no_results", lang)}</h3>
        <p>${t("try_change_filters", lang)}</p>
      </div>
    `;
  } else {
    catalog.innerHTML = paged.map(l => cardHTML(l, state.view === "list")).join("");
  }

  // Події на кнопках
  catalog.querySelectorAll(".detail-btn").forEach(btn =>
    btn.addEventListener("click", e => {
      e.stopPropagation();
      openDetail(+btn.dataset.id);
    })
  );

  catalog.querySelectorAll(".compare-toggle").forEach(btn =>
    btn.addEventListener("click", e => {
      e.stopPropagation();
      toggleCompare(+btn.dataset.id);
    })
  );

  renderPagination(pages);
}

// ─── Пагінація ─────────────────────────────

export function renderPagination(pages) {
  const wrap = $("pagination");
  if (pages <= 1) {
    wrap.innerHTML = "";
    return;
  }

  let html = `<button class="page-btn" id="prevPage" ${state.page === 1 ? "disabled" : ""}>‹</button>`;

  for (let i = 1; i <= pages; i++) {
    if (pages > 7 && i > 2 && i < pages - 1 && Math.abs(i - state.page) > 1) {
      if (i === 3 || i === pages - 2) html += `<span class="page-btn" style="pointer-events:none;opacity:.4">…</span>`;
      continue;
    }
    html += `<button class="page-btn ${i === state.page ? "active" : ""}" data-page="${i}">${i}</button>`;
  }

  html += `<button class="page-btn" id="nextPage" ${state.page === pages ? "disabled" : ""}>›</button>`;
  wrap.innerHTML = html;

  wrap.querySelectorAll("[data-page]").forEach(btn =>
    btn.addEventListener("click", () => {
      state.page = +btn.dataset.page;
      renderCatalog();
      window.scrollTo({ top: 0, behavior: "smooth" });
    })
  );

  wrap.querySelector("#prevPage")?.addEventListener("click", () => {
    state.page--;
    renderCatalog();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  wrap.querySelector("#nextPage")?.addEventListener("click", () => {
    state.page++;
    renderCatalog();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ─── Активні теги фільтрів ─────────────────────────────

export function renderActiveTags() {
  const wrap = $("activeFilters");
  const tags = [];

  if (state.search) {
    tags.push({
      label: `🔍 "${state.search}"`,
      clear: () => {
        state.search = "";
        $("searchInput").value = "";
        state.page = 1;
        renderAll();
      }
    });
  }

  for (const b of state.brands) {
    tags.push({
      label: `🏷️ ${b}`,
      clear: () => {
        state.brands.delete(b);
        state.page = 1;
        renderAll();
      }
    });
  }

  for (const c of state.categories) {
    tags.push({
      label: `📂 ${c}`,
      clear: () => {
        state.categories.delete(c);
        state.page = 1;
        renderAll();
      }
    });
  }

  wrap.innerHTML = tags
    .map(
      (t, i) => `
      <span class="filter-tag">
        ${t.label}
        <button data-tag="${i}">✕</button>
      </span>
    `
    )
    .join("");

  wrap.querySelectorAll("button[data-tag]").forEach(btn =>
    btn.addEventListener("click", () => tags[+btn.dataset.tag].clear())
  );
}

// ─── Головна об'єднаюча функція ─────────────────────────────

export function renderAll() {
  buildFilters();
  renderCatalog();
}
