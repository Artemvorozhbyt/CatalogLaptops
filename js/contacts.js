document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("contactsPage");
  const glow = document.getElementById("contactGlow");

  if (!section || !glow) return;

  section.addEventListener("pointermove", (event) => {
    const rect = section.getBoundingClientRect();
    glow.style.left = `${event.clientX - rect.left}px`;
    glow.style.top = `${event.clientY - rect.top}px`;
    glow.style.opacity = "1";
  });

  section.addEventListener("pointerleave", () => {
    glow.style.opacity = "0";
  });
});
