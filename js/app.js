import { renderAll } from "./render.js";
import { setupInteractivity } from "./interactivity.js";
import { initModals } from "./modals.js";
import { laptops } from "./laptops.generated.js";
import { state } from "./state.js";
import { buildFilters } from "./filters.js";
import { updateLanguage } from "./utils.js";

window.addEventListener("DOMContentLoaded", () => {
  buildFilters(laptops, state);
  renderAll();
  setupInteractivity();
  initModals();
  updateLanguage(); // Оновимо мову при завантаженні
});
