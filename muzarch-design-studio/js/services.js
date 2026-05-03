/* ============================================================
   services.js — Services Section Enhancements
   Particles · Background Parallax · 3D Card Tilt · Tooltip
   ============================================================ */

// ── PARTICLES ────────────────────────────────────────────────
(function spawnServiceParticles() {
  const container = document.getElementById("servicesParticles");
  if (!container) return;

  for (let i = 0; i < 18; i++) {
    const p = document.createElement("div");
    p.className = "s-particle";
    const size = Math.random() * 2.5 + 0.8;
    const dx = (Math.random() - 0.5) * 50;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      bottom:${Math.random() * 70}%;
      --dx:${dx}px;
      animation-duration:${5 + Math.random() * 7}s;
      animation-delay:${Math.random() * 10}s;
    `;
    container.appendChild(p);
  }
})();

// ── SERVICES BACKGROUND PARALLAX ─────────────────────────────
// Keeps the bg image drifting slowly as the user scrolls past the section,
// independently of the hero parallax in parallax.js.
(function initServicesBgParallax() {
  const section = document.getElementById("services");
  const bg = document.getElementById("servicesBg");
  if (!section || !bg) return;

  window.addEventListener(
    "scroll",
    () => {
      const rect = section.getBoundingClientRect();
      const progress = -rect.top / rect.height; // 0 at top, 1 at bottom

      // Only animate while the section is anywhere near the viewport
      if (progress > -0.6 && progress < 1.6) {
        bg.style.transform = `scale(1.06) translateY(${progress * 40}px)`;
      }
    },
    { passive: true },
  );
})();

// ── 3D MAGNETIC CARD TILT ────────────────────────────────────
// Each .service-card tilts slightly toward the cursor position,
// giving the grid a tactile, dimensional feel.
(function initCardTilt() {
  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2; // -1 → +1
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2; // -1 → +1

      card.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 4}deg) translateZ(6px)`;
      card.style.transition = "transform 0.08s linear";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
      card.style.transition = "transform 0.55s ease";
    });
  });
})();

// ── CONTEXTUAL TOOLTIP ───────────────────────────────────────
// Shows the data-tip text near the cursor when hovering a service card.
(function initServiceTooltip() {
  const tip = document.getElementById("serviceTooltip");
  if (!tip) return;

  document.querySelectorAll(".service-card[data-tip]").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      tip.textContent = card.dataset.tip;
      tip.classList.add("show");
    });

    card.addEventListener("mousemove", (e) => {
      // Offset so the tip doesn't cover the cursor
      tip.style.left = e.clientX + 20 + "px";
      tip.style.top = e.clientY - 44 + "px";
    });

    card.addEventListener("mouseleave", () => {
      tip.classList.remove("show");
    });
  });
})();
