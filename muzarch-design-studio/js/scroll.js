/* ============================================================
   scroll.js — Scroll Progress · Navbar · Reveal Observer
   ============================================================ */

// ── SCROLL PROGRESS BAR ──────────────────────────────────────
window.addEventListener("scroll", () => {
  const pct =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById("scroll-progress").style.width = pct + "%";
});

// ── NAVBAR SCROLL EFFECT ─────────────────────────────────────
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("scrolled", window.scrollY > 60);
});

// ── MOBILE MENU ──────────────────────────────────────────────
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.add("open");
});
document.getElementById("mobileClose").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.remove("open");
});

// Called from inline onclick in mobile menu links
function closeMobileMenu() {
  document.getElementById("mobileMenu").classList.remove("open");
}

// ── REVEAL ON SCROLL (IntersectionObserver) ──────────────────
// Covers both original .reveal/* classes AND new services [data-reveal] elements
const reveals = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-scale, [data-reveal]",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 },
);

reveals.forEach((el) => revealObserver.observe(el));
