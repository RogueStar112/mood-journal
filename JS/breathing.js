const breatheButton = document.getElementById("breathe");

const breathingCircle = document.getElementById("breathing-circle");

breatheButton.addEventListener("click", function (e) {
  e.preventDefault();
  breathingCircle.classList.toggle("breathing-hidden");
  moodTrackerForm.classList.toggle("mood-tracker-expanded");
});
