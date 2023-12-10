import {
  createNewElement,
  createNewElementWithClass,
  createNewElementWithClassAndContent,
} from "../../utils/CreateNewElements.js";
import { userProfile } from "../../utils/UserProfile.js";
import { questionArray } from "../../utils/QuestionArray.js";
import { bookmarkedQuestions } from "../Card/Card.js";
import { toggleClass } from "../../utils/ToggleClass.js";
import { AddQuestion } from "../AddQuestion/AddQuestion.js";

export function Profile() {
  const body = document.querySelector("body");
  const main = document.querySelector("main");
  const profileContainer = createNewElementWithClass(
    "article",
    main,
    "question-container"
  );
  //Header Section
  const profileHeader = createNewElementWithClass(
    "section",
    profileContainer,
    "profile-header"
  );
  const profileImg = createNewElementWithClass(
    "img",
    profileHeader,
    "profile-img"
  );
  addSrcAndAlt(profileImg, "/assets/profile-picture.jpg", "Profile Picture");
  const userName = `${userProfile.firstName} ${userProfile.lastName}`;
  const profileName = createNewElementWithClassAndContent(
    "p",
    profileHeader,
    "profile-name",
    userName
  );
  //About Section
  const aboutSection = createNewElementWithClass(
    "section",
    profileContainer,
    "profile-about"
  );
  const aboutHeader = createNewElementWithClassAndContent(
    "h2",
    aboutSection,
    "about-header",
    "About Me:"
  );
  const aboutText = createNewElementWithClassAndContent(
    "p",
    aboutSection,
    "about-txt",
    userProfile.aboutText
  );
  // Counter Section
  const counterSection = createNewElementWithClass(
    "div",
    aboutSection,
    "about-counter"
  );
  const questionCounter = createNewElementWithClass(
    "div",
    counterSection,
    "counter"
  );
  questionCounter.classList.add("question-counter");
  const questionCounterImg = createNewElement("img", questionCounter);
  addSrcAndAlt(
    questionCounterImg,
    "/assets/question icon.svg",
    "Question Counter"
  );
  const questionCount = createNewElementWithClassAndContent(
    "span",
    questionCounter,
    "question-count",
    questionArray.length
  );
  const bookmarkCounter = createNewElementWithClass(
    "div",
    counterSection,
    "counter"
  );
  bookmarkCounter.classList.add("bookmark-counter");
  const bookmarkCounterImg = createNewElement("img", bookmarkCounter);
  addSrcAndAlt(
    bookmarkCounterImg,
    "/assets/bookmark-icon.svg",
    "Bookmark Counter"
  );
  const bookmarkCount = createNewElementWithClassAndContent(
    "span",
    bookmarkCounter,
    "bookmark-count",
    bookmarkedQuestions.length
  );

  //Settings Section
  const settingsSection = createNewElementWithClass(
    "section",
    profileContainer,
    "profile-settings"
  );
  const settingsHeader = createNewElementWithClassAndContent(
    "h2",
    settingsSection,
    "settings-header",
    "Settings"
  );
  const darkModeContainer = createNewElementWithClass(
    "div",
    settingsSection,
    "setting-container"
  );
  const darkModeInput = createNewElementWithClass(
    "input",
    darkModeContainer,
    "toggle"
  );
  darkModeInput.id = "dark-mode";
  darkModeInput.type = "checkbox";
  darkModeInput.setAttribute("name", "dark-mode");
  const darkModeLabel = createNewElement("label", darkModeContainer);
  darkModeLabel.textContent = "Dark Mode";
  darkModeLabel.setAttribute("for", "dark-mode");

  // toggle dark mode
  const button = document.querySelector("#dark-mode");
  button.addEventListener("click", () => {
    toggleClass(body, "other-theme");
  });

  const addQuestionContainer = createNewElementWithClass(
    "div",
    settingsSection,
    "setting-container"
  );

  const addQuestionInput = createNewElementWithClassAndContent(
    "button",
    addQuestionContainer,
    "question-button",
    "+"
  );
  addQuestionInput.setAttribute("data-js", "addQuestionButton");

  const addQuestionLabel = createNewElementWithClassAndContent(
    "label",
    addQuestionContainer,
    "add-question-label",
    "Add New Question"
  );

  const addQuestionDialog = createNewElementWithClass(
    "dialog",
    settingsSection,
    "question-dialog"
  );
  addQuestionDialog.setAttribute("data-js", "questionModal");

  AddQuestion(addQuestionDialog);

  const closeDialog = createNewElementWithClassAndContent(
    "button",
    addQuestionDialog,
    "question-button",
    "Cancel"
  );
  closeDialog.classList.add("dialog-button");
  closeDialog.setAttribute("data-js", "closeModal");
  const submitDialog = createNewElementWithClassAndContent(
    "button",
    addQuestionDialog,
    "question-button",
    "Add Question"
  );
  submitDialog.classList.add("dialog-button");
  submitDialog.setAttribute("data-js", "submitQuestion");
  submitDialog.setAttribute("form", "add-question-form");

  const openModalButton = document.querySelector(
    '[data-js="addQuestionButton"]'
  );
  const questionModal = document.querySelector('[data-js="questionModal"]');
  const closeModalButton = document.querySelector('[data-js="closeModal"]');
  const addQuestionButton = document.querySelector(
    '[data-js="submitQuestion"]'
  );
  openModalButton.addEventListener("click", () => questionModal.showModal());
  closeModalButton.addEventListener("click", () => questionModal.close());
  addQuestionButton.addEventListener("click", () => questionModal.close());
}

function addSrcAndAlt(element, src, alt) {
  element.setAttribute("src", src);
  element.setAttribute("alt", alt);
}
