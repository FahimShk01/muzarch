/* ============================================================
   cursor.js — Custom Cursor Logic
   ============================================================ */

const cursor = document.getElementById("cursor");
const ring   = document.getElementById("cursorRing");

let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + "px";
  cursor.style.top  = my + "px";
});

function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + "px";
  ring.style.top  = ry + "px";
  requestAnimationFrame(animRing);
}
animRing();

// Hover effect on interactive elements
document
  .querySelectorAll("a, button, .service-card, .proj-item, .test-btn, .filter-btn")
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("cursor-hover");
      ring.classList.add("cursor-hover");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-hover");
      ring.classList.remove("cursor-hover");
    });
  });
