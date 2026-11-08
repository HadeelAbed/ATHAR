
// ========================================
// 1. INTRO SCREEN
// ========================================

const intro = document.getElementById("intro");

window.addEventListener("load", () => {
  setTimeout(() => {
    intro.classList.add("done");
  }, 1300);
});

// ========================================
// 2. HEADER SCROLL EFFECT
// ========================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// ========================================
// 3. MOBILE MENU
// ========================================

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  nav.classList.toggle("open");
  document.body.classList.toggle("menu-open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    menuButton.classList.remove("active");
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
  });
});

// ========================================
// 4. INTERACTIVE SERVICES
// ========================================

const serviceRows = document.querySelectorAll(".service-row");
const serviceImage = document.getElementById("serviceImage");
const serviceCaption = document.getElementById("serviceCaption");

serviceRows.forEach(row => {
  row.addEventListener("click", () => {
    serviceRows.forEach(item => item.classList.remove("active"));
    row.classList.add("active");

    const newImage = row.dataset.image;
    const newCaption = row.dataset.caption;

    serviceImage.style.opacity = "0";

    setTimeout(() => {
      serviceImage.src = newImage;
      serviceCaption.textContent = newCaption;
      serviceImage.style.opacity = "1";
    }, 200);
  });
});

// ========================================
// 5. REVEAL ON SCROLL
// ========================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

revealElements.forEach(element => {
  revealObserver.observe(element);
});

// ========================================
// 6. CURSOR GLOW
// ========================================

const cursorGlow = document.getElementById("cursorGlow");

if (window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("mousemove", event => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });
}

// ========================================
// 7. IMAGE LOADING FALLBACK
// ========================================

document.querySelectorAll("img").forEach(img => {
  img.addEventListener("error", () => {
    img.style.opacity = "0";
    img.parentElement.style.background = "#343c34";
  });
});
