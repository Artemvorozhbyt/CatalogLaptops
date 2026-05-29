import { renderAll } from "./render.js";
import { setupInteractivity } from "./interactivity.js";
import { initModals } from "./modals.js";
import { laptops } from "./laptops.generated.js";
import { state } from "./state.js";
import { buildFilters } from "./filters.js";
import { updateLanguage } from "./utils.js";

window.addEventListener("DOMContentLoaded", () => {
  // If this page contains the catalog container, initialize catalog features.
  if (document.getElementById("catalog")) {
    buildFilters(laptops, state);
    renderAll();
    setupInteractivity();
    initModals();
  }

  // Always update UI language texts where present
  updateLanguage(); // Оновимо мову при завантаженні
});
