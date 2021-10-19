// DOM SELECTORS
const navToggleBtn = document.getElementById("nav-toggle");
const navLinksEl = document.getElementById("nav-links");
const getYearElement = document.getElementById("year");
const scrollLinks = document.querySelectorAll(".scroll-link");

// HELPER FUNCTIONS
const setCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  getYearElement.innerText = currentYear;
};

const toggleNavigation = () => navLinksEl.classList.toggle("show-links");

const smoothScroll = (e) => {
  // prevent default
  e.preventDefault();
  e.target.classList.remove("show-links");

  const id = e.target.getAttribute("href").slice(1);
  const element = document.getElementById(id);
  //
  let position = element.offsetTop - 62;

  window.scrollTo({
    left: 0,
    top: position,
    behavior: "smooth",
  });

  // Close navbar
  navLinksEl.classList.remove("show-links");
};

// EVENT HANDLERS
// Open/Close navbar on mobile using the button
navToggleBtn.addEventListener("click", toggleNavigation);

// Smooth scroll to section upon clicking link in navbar
scrollLinks.forEach((link) => link.addEventListener("click", smoothScroll));

// EXECUTE ON PAGE LOAD
setCurrentYear();
