import { buildFilters } from "./filters.js";
import { renderCatalog } from "./render.js";
import { laptops } from "./laptops.generated.js";
import { state } from "./state.js";

export function initApp() {
  buildFilters(laptops, state);
  renderCatalog(laptops, state);
}
