// Select HTML elements
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

// Open and close hamburger menu
menuToggle.addEventListener("click", () => {
  // Toggle active class
  const isOpen = menuToggle.classList.toggle("active");

  navMenu.classList.toggle("active", isOpen);

  // Update accessibility attributes
  menuToggle.setAttribute("aria-expanded", isOpen);

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
});

// Close menu after clicking a navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

// Close menu using Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }
});
