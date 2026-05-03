# Muzarch Design Studio — Project Structure

A luxury architecture & interior design website, refactored from a single
2959-line HTML file into a clean, maintainable folder structure.

---

## 📁 Folder Structure

```
muzarch-design-studio/
│
├── index.html              ← Main HTML (clean, no inline CSS/JS)
│
├── css/
│   ├── variables.css       ← CSS custom properties (:root) + global reset
│   ├── animations.css      ← All @keyframes + .reveal / .reveal-left / .reveal-right
│   ├── components.css      ← Reusable pieces:
│   │                           Cursor · Loader · Scroll progress bar
│   │                           Navbar · Hamburger · Mobile menu overlay
│   │                           Buttons (btn-primary, btn-outline)
│   │                           Marquee band · WhatsApp floating button
│   ├── hero.css            ← Hero section (bg, orbs, particles, content, stats)
│   ├── sections.css        ← All page sections:
│   │                           About · Services · Portfolio · Process
│   │                           Why Us · Testimonials · Contact · CTA · Footer
│   └── responsive.css      ← Media queries (≤1100px tablet, ≤768px mobile)
│
├── js/
│   ├── loader.js           ← Loading screen fade-out on window load
│   ├── cursor.js           ← Custom cursor + hover effect on interactive elements
│   ├── scroll.js           ← Scroll progress bar · Navbar scroll state
│   │                           Mobile menu open/close · IntersectionObserver reveals
│   ├── counters.js         ← Animated number counters (triggered on scroll)
│   ├── parallax.js         ← Hero parallax (bg, grid, orbs) · Mouse tilt
│   │                           Particle generation + animation loop
│   ├── slider.js           ← Testimonials auto-slider + manual prev/next
│   ├── portfolio.js        ← Portfolio category filter
│   └── form.js             ← Contact form → WhatsApp redirect
│
└── assets/
    └── images/             ← Place local images here (currently using Unsplash URLs)
```

---

## 🚀 How To Run

Just open `index.html` in a browser — no build step needed.

For best results use a local server (avoids CORS on some browsers):

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

Then open `http://localhost:8080`

---

## 🛠 Where To Edit Things

| What you want to change         | File to edit               |
|---------------------------------|----------------------------|
| Brand colors / fonts            | `css/variables.css`        |
| Hero image / content            | `index.html` + `css/hero.css` |
| Add a new service card          | `index.html` (Services section) |
| Add a portfolio project         | `index.html` (Portfolio section) |
| Change WhatsApp number          | `js/form.js` + `index.html` links |
| Adjust mobile breakpoints       | `css/responsive.css`       |
| Change animation speeds         | `css/animations.css`       |
| Scroll / reveal behaviour       | `js/scroll.js`             |
| Parallax intensity              | `js/parallax.js`           |
| Testimonials auto-slide speed   | `js/slider.js`             |

---

## 📞 Contact Info (to update)

- **Phone / WhatsApp:** 80806 07866  
- **Email:** muzarch.designstudio@gmail.com  
- **Location:** Mira Road, Mumbai 401107  
- **WhatsApp API number in code:** `918080607866`
