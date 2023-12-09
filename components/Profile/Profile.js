import {
  createNewElement,
  createNewElementWithClass,
  createNewElementWithClassAndContent,
} from "../../utils/CreateNewElements.js";
import { userProfile } from "../../utils/UserProfile.js";
import { questionArray } from "../../utils/QuestionArray.js";
import { bookmarkedQuestions } from "../Card/Card.js";
import { toggleClass } from "../../utils/ToggleClass.js";

export function Profile() {
  const body = document.querySelector("body");
  const main = document.querySelector("main");
  //Header Section
  const profileHeader = createNewElementWithClass(
    "section",
    main,
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
    main,
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
    main,
    "profile-settings"
  );
  const settingsHeader = createNewElementWithClassAndContent(
    "h2",
    settingsSection,
    "settings-header",
    "Settings"
  );
  const settingsContainer = createNewElementWithClass(
    "div",
    settingsSection,
    "setting-container"
  );
  const settingsInput = createNewElementWithClass(
    "input",
    settingsContainer,
    "toggle"
  );
  settingsInput.id = "dark-mode";
  settingsInput.type = "checkbox";
  settingsInput.setAttribute("name", "dark-mode");
  const settingsLabel = createNewElement("label", settingsContainer);
  settingsLabel.textContent = "Dark Mode";
  settingsLabel.setAttribute("for", "dark-mode");

  // toggle dark mode
  const button = document.querySelector("#dark-mode");
  button.addEventListener("click", () => {
    toggleClass(body, "other-theme");
  });
}

function addSrcAndAlt(element, src, alt) {
  element.setAttribute("src", src);
  element.setAttribute("alt", alt);
}
