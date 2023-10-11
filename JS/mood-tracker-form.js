const formSubmitBtn = document.getElementById("form-submit");
const moodTrackerForm = document.getElementById("mood-tracker-form");

/* 

The mood tracker checks if there is an entry in the local storage. If not, we create
a blank array. If there is one, we use the EXISTING local storage array, so we continue where we left off.

*/
if (localStorage.getItem("entries") === null) {
  entries = [];
} else {
  entries = JSON.parse(localStorage.getItem("entries"));
}

formSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const formData = new FormData(moodTrackerForm);

  const currentTime = new Date();

  let year = currentTime.getFullYear();
  let minutes = currentTime.getMinutes();
  let hours = currentTime.getHours();
  let date = currentTime.getDate();
  let month = currentTime.getMonth() + 1;

  if (minutes < 10) {
    minutesList = String(minutes).split("");

    minutesList.unshift(0);

    minutes = minutesList.join("");
  }

  if (hours < 10) {
    hoursList = String(hours).split("");

    hoursList.unshift(0);

    hours = hoursList.join("");
  }

  let currentTime_format = `${date}/${month}/${year} ${hours}:${minutes}`;
  //

  const userInput = {
    title: formData.get("questionnaire-text-title"),
    text: formData.get("questionnaire-text"),
    rating: formData.get("rating"),
    time: currentTime_format,
  };

  console.log(userInput);

  // userInput_JSON = JSON.stringify(userInput);
  entries.push(userInput);

  entries_JSON = JSON.stringify(entries);

  localStorage.setItem("entries", entries_JSON);
});

// const formQuestionnaire = document.getElementById("form-questionnaire");
// const formRating = document.getElementById("form-rating");

// function submitForms() {
//   formQuestionnaire.submit();
//   formRating.submit();
// }
