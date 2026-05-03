/* ============================================================
   slider.js — Testimonials Auto-Slider
   ============================================================ */

let testIdx = 0;
const testTrack = document.getElementById("testTrack");
const testCards = testTrack.querySelectorAll(".test-card");

/**
 * Slide the testimonials track by `dir` steps (+1 forward, -1 back).
 * Exposed globally so the inline onclick buttons can call it.
 */
function slideTest(dir) {
  const visCount = window.innerWidth > 900 ? 3 : 1;
  const max      = testCards.length - visCount;

  testIdx = Math.max(0, Math.min(max, testIdx + dir));

  const cardW = testCards[0].offsetWidth + 28; // 28 = gap
  testTrack.style.transform = `translateX(-${testIdx * cardW}px)`;
}

// Auto-advance every 5 seconds
setInterval(() => slideTest(1), 5000);
