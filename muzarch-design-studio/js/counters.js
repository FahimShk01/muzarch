/* ============================================================
   counters.js — Animated Number Counters
   ============================================================ */

let countersStarted = false;

function animateCounters() {
  if (countersStarted) return;

  const nums = document.querySelectorAll(".counter-num, .hero-stat-num");
  let anyVisible = false;

  nums.forEach((n) => {
    const rect = n.getBoundingClientRect();
    if (rect.top < window.innerHeight) anyVisible = true;
  });

  if (!anyVisible) return;
  countersStarted = true;

  nums.forEach((el) => {
    const target = +el.getAttribute("data-count");
    let cur = 0;
    const inc = target / 60;

    const timer = setInterval(() => {
      cur += inc;
      if (cur >= target) {
        cur = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(cur) + "+";
    }, 25);
  });
}

window.addEventListener("scroll", animateCounters);
