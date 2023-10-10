const formSubmitBtn = document.getElementById("form-submit");
const moodTrackerForm = document.getElementById("mood-tracker-form");

formSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const formData = new FormData(moodTrackerForm);

  const currentTime = new Date();

  let year = currentTime.getFullYear();
  let minutes = currentTime.getMinutes();
  let hours = currentTime.getHours();
  let date = currentTime.getDate();
  let month = currentTime.getMonth() + 1;

  let currentTime_format = `${date}/${month}/${year} ${hours}:${minutes}`;
  //

  const userInput = {
    title: formData.get("questionnaire-text-title"),
    text: formData.get("questionnaire-text"),
    rating: formData.get("rating"),
    time: currentTime_format,
  };

  console.log(userInput);

  userInput_JSON = JSON.stringify(userInput);
});

// const formQuestionnaire = document.getElementById("form-questionnaire");
// const formRating = document.getElementById("form-rating");

// function submitForms() {
//   formQuestionnaire.submit();
//   formRating.submit();
// }
