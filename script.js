document.addEventListener("DOMContentLoaded", () => {
  // =============================
  // MOBILE NAV
  // =============================
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // =============================
  // SCROLL REVEAL (SAFE VERSION)
  // =============================
  const revealEls = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  revealEls.forEach((el) => observer.observe(el));
});
// =============================
// ACTIVE NAV SCROLL HIGHLIGHT
// =============================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  sections.forEach((sec) => {
    const top = sec.offsetTop - 120;
    const bottom = top + sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});
