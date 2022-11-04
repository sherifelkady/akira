const burgerMenuButton = document.querySelector(".burger-button");
const burgerMenu = document.querySelector(".burger-menu");
const burgerClose = document.querySelector(".burger-close");

burgerMenuButton.addEventListener("click", () =>
  burgerMenu.classList.toggle("burger-menu-open")
);

burgerClose.addEventListener("click", () =>
  burgerMenu.classList.remove("burger-menu-open")
);

function dropdown(e) {
  const currencyDropdown = document.querySelector(".currency-dropdown");
  console.log(e.target);
  return currencyDropdown.classList.toggle("dropdown-open");
}

function dropdownLang(e) {
  const langDropDown = document.querySelector(".lang-dropdown");
  return langDropDown.classList.toggle("dropdown-open");
}
