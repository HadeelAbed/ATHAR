
// Loading screen
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 700);
});

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});

// Reveal elements on scroll
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
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
  observer.observe(element);
});
