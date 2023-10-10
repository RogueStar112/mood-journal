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

// const form = document.getElementById("contatct-form");
// const createForm = document.createElement("form");

// let inputName = document.createElement("input");
// inputName.setAttribute("type", "text");
// inputName.setAttribute("name", "full-name");
// createForm.appendChild(inputName);

// let emailLabel = document.createElement("label");
// createForm.appendChild(emailLabel);

// let emailInput = document.createElement("input");
// emailInput.setAttribute("type", "text");
// emailInput.setAttribute("name", "email");
// createForm.appendChild(emailInput);

// let commentLabel = document.createElement("label");
// commentLabel.innerHTML = "Your comment here...";
// createForm.appendChild(commentLabel);

// let commentInput = document.createElement("textarea");
// commentInput.setAttribute("name", "text");
// createForm.appendChild(commentInput);

// let submit = document.createElement("input");
// submit.setAttribute("type", "submit");
// submit.setAttribute("value", "Submit");
// createForm.appendChild(submit);
