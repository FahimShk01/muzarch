/* ============================================================
   portfolio.js — Category Filter
   ============================================================ */

/**
 * Filter portfolio grid by category.
 * Called from inline onclick on filter buttons.
 *
 * @param {string} cat  - category key ("all" | "residential" | "commercial" | ...)
 * @param {HTMLElement} btn - the clicked button element
 */
function filterProjects(cat, btn) {
  // Update active state
  document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  // Show / fade items
  document.querySelectorAll(".proj-item").forEach((item) => {
    const match = cat === "all" || item.dataset.cat === cat;
    item.style.opacity   = match ? "1" : "0.25";
    item.style.transform = match ? "scale(1)" : "scale(0.96)";
    item.style.transition = "opacity 0.4s, transform 0.4s";
  });
}
