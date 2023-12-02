import { createNewElement } from "../utils/CreateNewElement.js";
import { toggleClass } from "../utils/ToggleClass.js";
import { toggleNextSibling } from "../utils/ToggleNextSibling.js";
import { questionArray } from "../utils/QuestionArray.js";
import { Header } from "../components/Header/Header.js";
import { createCard } from "../components/Card/Card.js";

// Dark Mode
const button = document.querySelector("#dark-mode");
const body = document.querySelector('[data-js="body"]');
if (button) {
  button.addEventListener("click", () => {
    toggleClass(body, "other-theme");
  });
}

// Array for bookmarked IDs
let bookmarkedQuestions = [];

const main = document.querySelector("main");

// create Question Card

//render main
function renderMain() {
  main.innerHTML = "";
  Header();
  questionArray.forEach(createCard);
}

// render bookmarked
function renderBookmarked() {
  main.innerHTML = "";
  bookmarkedQuestions.forEach((id) => {
    const bookmarkedQuestion = questionArray.find(
      (question) => question.id === id
    );
    createCard(bookmarkedQuestion);
  });
}

const homeButton = document.querySelector('[data-js="home-page"]');
const bookmarkedButton = document.querySelector('[data-js="bookmarked-page"]');

homeButton.addEventListener("click", () => {
  renderMain();
});
bookmarkedButton.addEventListener("click", () => {
  renderBookmarked();
});

// render main on load
renderMain();

// // Add New Question
// const questionForm = document.querySelector('[data-js="new-question-form"]');
// const questionFormButton = document.querySelector(
//   '[data-js="new-question-button"]'
// );
// console.log(questionFormButton);

// questionForm.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log(event.target);

//   const formData = new FormData(event.target);
//   const data = Object.fromEntries(formData);
//   console.log(data);
// });
