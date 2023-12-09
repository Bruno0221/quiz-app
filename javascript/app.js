import { questionArray } from "../utils/QuestionArray.js";
import { Header } from "../components/Header/Header.js";
import { createCard, bookmarkedQuestions } from "../components/Card/Card.js";
import { BookmarkPlaceholder } from "../components/BookmarksPlaceholder/BookmarksPlaceholder.js";
import { AddQuestion } from "../components/AddQuestion/AddQuestion.js";
import { Profile } from "../components/Profile/Profile.js";
import { Footer } from "../components/Footer/Footer.js";

const root = document.querySelector("#root");

//render main
export function renderMain() {
  root.innerHTML = "";
  Header();
  questionArray.forEach(createCard);
  Footer();
}

//render profile
export function renderProfile() {
  root.innerHTML = "";
  Header();
  Profile();
  Footer();
  const navButtons = document.querySelectorAll('[data-js*="page"]');
  const profileButton = document.querySelector('[data-js="profile-page"]');
  navButtons.forEach((button) => button.classList.remove("current-page"));
  profileButton.classList.add("current-page");
}

// render bookmarked
export function renderBookmarked() {
  root.innerHTML = "";
  Header();
  if (bookmarkedQuestions.length > 0) {
    bookmarkedQuestions.forEach((id) => {
      const bookmarkedQuestion = questionArray.find(
        (question) => question.id === id
      );
      createCard(bookmarkedQuestion);
      const checkboxes = document.querySelectorAll(".bookmark-checkbox");
      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("click", () => renderBookmarked());
      });
    });
    const checkboxes = document.querySelectorAll(".bookmark-checkbox");
  } else {
    BookmarkPlaceholder();
  }
  Footer();
  const navButtons = document.querySelectorAll('[data-js*="page"]');
  const bookmarkedButton = document.querySelector('[data-js="bookmark-page"]');
  navButtons.forEach((button) => button.classList.remove("current-page"));
  bookmarkedButton.classList.add("current-page");
}

export function renderAddQuestion() {
  root.innerHTML = "";
  Header();
  AddQuestion();
  Footer();
  const navButtons = document.querySelectorAll('[data-js*="page"]');
  const profileButton = document.querySelector('[data-js="profile-page"]');
  navButtons.forEach((button) => button.classList.remove("current-page"));
  profileButton.classList.add("current-page");
}

renderAddQuestion();

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
