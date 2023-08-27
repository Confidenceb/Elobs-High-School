const btnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

const sectionHeroEl = document.querySelector(".section-hero");

btnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const allLInk = document.querySelectorAll("a");

allLInk.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("nav-item")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

//////////////////////////////////////
// Sticky nav

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-50px",
  }
);

observer.observe(sectionHeroEl);
////////////////////////////////////////
