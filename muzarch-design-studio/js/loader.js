/* ============================================================
   loader.js — Loading Screen
   ============================================================ */

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("fade-out");
    document.getElementById("hero").classList.add("loaded");

    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 800);
  }, 2200);
});
