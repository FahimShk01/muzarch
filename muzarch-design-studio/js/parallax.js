/* ============================================================
   parallax.js — Hero Parallax · Mouse Tilt · Particles
   ============================================================ */

// ── DOM REFS ─────────────────────────────────────────────────
const heroBg      = document.querySelector(".hero-bg");
const heroGrid    = document.querySelector(".hero-grid-lines");
const heroContent = document.querySelector(".hero-content");
const heroStats   = document.querySelector(".hero-stats");
const orb1 = document.getElementById("orb1");
const orb2 = document.getElementById("orb2");
const orb3 = document.getElementById("orb3");

// ── SMOOTH MOUSE STATE ────────────────────────────────────────
let mouseX = 0, mouseY = 0;
let smoothX = 0, smoothY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

// ── PARTICLES ────────────────────────────────────────────────
const particleContainer = document.getElementById("heroParticles");
const PARTICLE_COUNT = 22;

for (let i = 0; i < PARTICLE_COUNT; i++) {
  const p = document.createElement("div");
  p.className = "hero-particle";
  const size = Math.random() * 3 + 1;
  const dx   = (Math.random() - 0.5) * 60;
  p.style.cssText = `
    width:${size}px; height:${size}px;
    left:${Math.random() * 100}%;
    bottom:${Math.random() * 60}%;
    --dx:${dx}px;
    animation-duration:${4 + Math.random() * 6}s;
    animation-delay:${Math.random() * 8}s;
  `;
  particleContainer.appendChild(p);
}

// ── MAIN ANIMATION LOOP ───────────────────────────────────────
function parallaxLoop() {
  const scrollY = window.scrollY;
  const heroH   = window.innerHeight;
  const inHero  = scrollY < heroH;

  // Smooth mouse follow
  smoothX += (mouseX - smoothX) * 0.06;
  smoothY += (mouseY - smoothY) * 0.06;

  if (inHero) {
    const sp = scrollY / heroH; // 0→1 as hero scrolls out

    // Background — deepest layer
    heroBg.style.transform = `
      scale(1.08)
      translateY(${scrollY * 0.28}px)
      translateX(${smoothX * -14}px)
    `;

    // Grid lines — mid layer, opposite direction for depth
    heroGrid.style.transform = `
      translateY(${scrollY * 0.14}px)
      translateX(${smoothX * 10}px)
    `;

    // Content — lifts faster on scroll
    heroContent.style.transform = `
      translateY(${scrollY * -0.12}px)
      translateX(${smoothX * 6}px)
    `;
    heroContent.style.opacity = `${1 - sp * 1.4}`;

    // Stats — float opposite to content
    if (heroStats) {
      heroStats.style.transform = `
        translateX(${smoothX * -8}px)
        translateY(${scrollY * -0.08}px)
      `;
    }

    // Orbs — independent depth layers
    orb1.style.transform = `translate(${smoothX * -28}px, ${smoothY * -18 + scrollY * 0.18}px)`;
    orb2.style.transform = `translate(${smoothX *  22}px, ${smoothY *  14 + scrollY * 0.22}px)`;
    orb3.style.transform = `translate(${smoothX * -12}px, ${smoothY * -22 + scrollY * 0.10}px)`;
  }

  requestAnimationFrame(parallaxLoop);
}

parallaxLoop();
