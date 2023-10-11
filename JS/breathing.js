const breatheButton = document.getElementById("breathe");

const breathingCircle = document.getElementById("breathing-circle");

breatheButton.addEventListener("click", function (e) {
  e.preventDefault();
  breathingCircle.classList.toggle("breathing-hidden");
});
// If button toggled off, do not display animation.
// if(breatheButton === "off") {
//   document.body.classList.add("off");
// } else (breatheButton === "on") {
// document.body.classList.add("on");
// localStorage.setItem("breatheButton", "off")
// })
