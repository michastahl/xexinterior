import "./style.css";

// Mobil-menyn
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

const mobileAboutButton = document.getElementById("mobile-about-button");
const mobileAboutSubmenu = document.getElementById("mobile-about-submenu");

const mobileProductsButton = document.getElementById("mobile-products-button");
const mobileProductsSubmenu = document.getElementById(
  "mobile-products-submenu",
);

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
  });
}

if (mobileAboutButton && mobileAboutSubmenu) {
  mobileAboutButton.addEventListener("click", () => {
    mobileAboutSubmenu.classList.toggle("hidden");
    const expanded = mobileAboutButton.getAttribute("aria-expanded") === "true";
    mobileAboutButton.setAttribute("aria-expanded", String(!expanded));
  });
}

if (mobileProductsButton && mobileProductsSubmenu) {
  mobileProductsButton.addEventListener("click", () => {
    mobileProductsSubmenu.classList.toggle("hidden");
    const expanded =
      mobileProductsButton.getAttribute("aria-expanded") === "true";
    mobileProductsButton.setAttribute("aria-expanded", String(!expanded));
  });
}
