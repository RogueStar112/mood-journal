btnDesktop = document.getElementById("opendyslexic-btn");
btnMobile = document.getElementById("opendyslexic-btn-mobile");

btnDesktop.addEventListener("click", function () {
  document.body.classList.toggle("font-opendyslexic");
});

btnMobile.addEventListener("click", function () {
  document.body.classList.toggle("font-opendyslexic");
});
