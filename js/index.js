const btnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

const sectionHeroEl = document.querySelector(".section-hero");
const sectionEl = document.querySelectorAll(".section");

btnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const allLInk = document.querySelectorAll("a");

// allLInk.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
// const href = link.getAttribute("href");

// if (href === "#") {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }

// if (href !== "#" && href.startsWith("#")) {
//   const sectionEl = document.querySelector(href);
//   sectionEl.scrollIntoView({ behavior: "smooth" });
// }

// if (link.classList.contains("nav-item")) {
//   headerEl.classList.toggle("nav-open");
// }
//   });
// });

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
    rootMargin: "-90px",
  }
);

observer.observe(sectionHeroEl);
////////////////////////////////////////
// Slider //

const slider = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".right");
const btnLeft = document.querySelector(".left");

console.log(slides);

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
// slider.style.transform = "scale(0.5)";

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);

let curSlide = 0;
const maxSlide = slides.length - 1;

// Next slide

const nextSlide = function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

btnRight.addEventListener("click", nextSlide);

// Prev slide
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnLeft.addEventListener("click", prevSlide);
