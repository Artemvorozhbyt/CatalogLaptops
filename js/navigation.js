const pageHashById = {
  previewPage: "preview",
  catalogPage: "catalog",
  contactsPage: "contacts",
};

const pageIdByHash = Object.fromEntries(Object.entries(pageHashById).map(([id, hash]) => [hash, id]));

function currentSectionId() {
  const headerOffset = 96;
  let activeId = "previewPage";

  Object.keys(pageHashById).forEach((id) => {
    const section = document.getElementById(id);
    if (!section) return;
    const top = section.getBoundingClientRect().top;
    if (top <= headerOffset) activeId = id;
  });

  return activeId;
}

function setActiveNavigation(pageId) {
  document.querySelectorAll("[data-page-target]").forEach((link) => {
    link.classList.toggle("active", link.dataset.pageTarget === pageId);
  });
}

function showPage(pageId, options = {}) {
  const page = document.getElementById(pageId);
  if (!page) return;

  page.scrollIntoView({
    behavior: options.instant ? "auto" : "smooth",
    block: "start",
  });

  const nextHash = pageHashById[pageId];
  if (nextHash && window.location.hash !== `#${nextHash}`) {
    history.replaceState(null, "", `#${nextHash}`);
  }

  setActiveNavigation(pageId);
}

function bindSiteNavigation() {
  document.querySelectorAll("[data-page-target]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showPage(link.dataset.pageTarget);
    });
  });
}

function showPageFromLocation() {
  const hash = window.location.hash.replace("#", "");
  const pageId = pageIdByHash[hash];
  if (pageId) showPage(pageId, { instant: true });
  else setActiveNavigation(currentSectionId());
}

let scrollTimer;
function bindActiveOnScroll() {
  window.addEventListener(
    "scroll",
    () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => setActiveNavigation(currentSectionId()), 50);
    },
    { passive: true },
  );
}

window.showPage = showPage;
window.addEventListener("hashchange", showPageFromLocation);

document.addEventListener("DOMContentLoaded", () => {
  bindSiteNavigation();
  bindActiveOnScroll();
  showPageFromLocation();
});
