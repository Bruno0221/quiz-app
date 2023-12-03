import { toggleClass } from "../utils/ToggleClass.js";
import { questionArray } from "../utils/QuestionArray.js";
import { Header } from "../components/Header/Header.js";
import { createCard, bookmarkedQuestions } from "../components/Card/Card.js";
import { Footer } from "../components/Footer/Footer.js";

// Dark Mode
const button = document.querySelector("#dark-mode");
const body = document.querySelector('[data-js="body"]');
if (button) {
  button.addEventListener("click", () => {
    toggleClass(body, "other-theme");
  });
}

const root = document.querySelector("#root");

//render main
function renderMain() {
  root.innerHTML = "";
  Header();
  questionArray.forEach(createCard);
  Footer();
}

// render bookmarked
function renderBookmarked() {
  root.innerHTML = "";
  Header();
  bookmarkedQuestions.forEach((id) => {
    const bookmarkedQuestion = questionArray.find(
      (question) => question.id === id
    );
    createCard(bookmarkedQuestion);
    const checkbox = document.querySelector(".bookmark-checkbox");
    checkbox.checked = true;
    console.log(checkbox.checked);
  });
  Footer();
}

renderMain();

const homeButton = document.querySelector('[data-js="home-page"]');
const bookmarkedButton = document.querySelector('[data-js="bookmark-page"]');
const navButtons = document.querySelectorAll('[data-js*="page"]');

homeButton.addEventListener("click", renderMain);
bookmarkedButton.addEventListener("click", renderBookmarked);

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
