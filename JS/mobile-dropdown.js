let mobileDropdownMenu = document.getElementById("mobile-dropdown-menu");
let mobileHeaderContent = document.getElementById("mobile-header-content");

mobileDropdownMenu.addEventListener("click", function () {
  mobileHeaderContent.classList.toggle("mobile-disabled");
});
