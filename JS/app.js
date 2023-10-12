const theme = localStorage.getItem("theme");
const header = document.querySelector("header");

if (theme === "light") {
  document.body.classList.add("light");
} else if (theme === "dark") {
  document.body.classList.add("dark");
} else {
  document.body.classList.add("light");
  localStorage.setItem("theme", "light");
}

function toggleTheme() {
  if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }

  header.classList.toggle("light");
  header.classList.toggle("dark");
}

const themeButton = document.getElementById("theme");
themeButton.addEventListener("click", toggleTheme);
