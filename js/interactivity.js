import { renderAll, renderCatalog } from "./render.js";
import { state, setLanguage } from "./state.js";
import { updateLanguage } from "./utils.js";

export function setupInteractivity() {
  const $ = (id) => document.getElementById(id);

  // ─ Мова
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // Пошук
  let searchTimer;
  $("searchInput").addEventListener("input", (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.search = e.target.value.trim();
      state.page = 1;
      renderAll();
    }, 280);
  });

  // Сортування
  $("sortSelect").addEventListener("change", (e) => {
    state.sort = e.target.value;
    state.page = 1;
    renderCatalog();
  });

  // Перемикач виду
  $("gridViewBtn").addEventListener("click", () => {
    state.view = "grid";
    $("gridViewBtn").classList.add("active");
    $("listViewBtn").classList.remove("active");
    renderCatalog();
  });

  $("listViewBtn").addEventListener("click", () => {
    state.view = "list";
    $("listViewBtn").classList.add("active");
    $("gridViewBtn").classList.remove("active");
    renderCatalog();
  });

  // Фільтр за ціною
  $("priceMin").addEventListener("change", () => {
    state.priceMin = +$("priceMin").value || 0;
    state.page = 1;
    renderCatalog();
  });
  $("priceMax").addEventListener("change", () => {
    state.priceMax = +$("priceMax").value || 99999;
    state.page = 1;
    renderCatalog();
  });
  $("priceRange").addEventListener("input", (e) => {
    state.priceMax = +e.target.value;
    $("priceMax").value = e.target.value;
    state.page = 1;
    renderCatalog();
  });

  // Скидання фільтрів
  $("resetFilters").addEventListener("click", () => {
    state.brands.clear();
    state.categories.clear();
    state.rams.clear();
    state.screens.clear();
    state.gpus.clear();
    state.priceMin = 0;
    state.priceMax = 99999;
    state.search = "";
    $("searchInput").value = "";
    $("priceMin").value = "";
    $("priceMax").value = "";
    $("priceRange").value = 5000;
    state.page = 1;
    renderAll();
  });

  // Бокова панель (мобільна версія)
  $("sidebarToggle").addEventListener("click", () => {
    $("sidebar").classList.toggle("open");
  });

  // Esc — закриття модальних вікон
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      $("detailModal").classList.remove("open");
      $("compareModal").classList.remove("open");
      $("sidebar").classList.remove("open");
    }
  });
}
