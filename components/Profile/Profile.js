import { createNewElement } from "../../utils/CreateNewElement.js";
import { userProfile } from "../../utils/UserProfile.js";
import { questionArray } from "../../utils/QuestionArray.js";
import { bookmarkedQuestions } from "../Card/Card.js";
import { toggleClass } from "../../utils/ToggleClass.js";

export function Profile() {
  const body = document.querySelector("body");
  const main = document.querySelector("main");
  //Header Section
  const profileHeader = createNewElement("section", main, "profile-header");
  const profileImg = createNewElement("img", profileHeader, "profile-img");
  addSrcAndAlt(profileImg, "/assets/profile-picture.jpg", "Profile Picture");
  const userName = `${userProfile.firstName} ${userProfile.lastName}`;
  const profileName = createNewElement(
    "p",
    profileHeader,
    "profile-name",
    userName
  );
  //About Section
  const aboutSection = createNewElement("section", main, "profile-about");
  const aboutHeader = createNewElement(
    "h2",
    aboutSection,
    "about-header",
    "About Me:"
  );
  const aboutText = createNewElement(
    "p",
    aboutSection,
    "about-txt",
    userProfile.aboutText
  );
  // Counter Section
  const counterSection = createNewElement("div", aboutSection, "about-counter");
  const questionCounter = createNewElement("div", counterSection, "counter");
  questionCounter.classList.add("question-counter");
  const questionCounterImg = createNewElement("img", questionCounter);
  addSrcAndAlt(
    questionCounterImg,
    "/assets/question icon.svg",
    "Question Counter"
  );
  const questionCount = createNewElement(
    "span",
    questionCounter,
    "question-count",
    questionArray.length
  );
  const bookmarkCounter = createNewElement("div", counterSection, "counter");
  bookmarkCounter.classList.add("bookmark-counter");
  const bookmarkCounterImg = createNewElement("img", bookmarkCounter);
  addSrcAndAlt(
    bookmarkCounterImg,
    "/assets/bookmark-icon.svg",
    "Bookmark Counter"
  );
  const bookmarkCount = createNewElement(
    "span",
    bookmarkCounter,
    "bookmark-count",
    bookmarkedQuestions.length
  );

  //Settings Section
  const settingsSection = createNewElement("section", main, "profile-settings");
  const settingsHeader = createNewElement(
    "h2",
    settingsSection,
    "settings-header",
    "Settings"
  );
  const settingsContainer = createNewElement(
    "div",
    settingsSection,
    "setting-container"
  );
  const settingsInput = createNewElement("input", settingsContainer, "toggle");
  settingsInput.id = "dark-mode";
  settingsInput.type = "checkbox";
  const settingsLabel = createNewElement("label", settingsContainer);
  settingsLabel.textContent = "Dark Mode";

  //dark mode
  const button = document.querySelector("#dark-mode");
  button.addEventListener("click", () => {
    toggleClass(body, "other-theme");
  });
}

function addSrcAndAlt(element, src, alt) {
  element.setAttribute("src", src);
  element.setAttribute("alt", alt);
}
