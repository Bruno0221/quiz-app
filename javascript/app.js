// Function to toggle classes -> put className in quotes.

const toggleClass = (element, className) => element.classList.toggle(className);

// Dark Mode
const button = document.querySelector("#dark-mode");
const body = document.querySelector('[data-type="body"]');

if (button) {
  button.addEventListener("click", () => {
    toggleClass(body, "dark-mode");
  });
}

// Show Answers
const answerButton1 = document.querySelector("#show-answer-1");
const answerButton2 = document.querySelector("#show-answer-2");

function hideNextSibling(name) {
  const nextSibling = name.nextElementSibling;
  toggleClass(nextSibling, "hidden");
  if (nextSibling.classList.contains("hidden")) {
    name.textContent = "Show Answer";
  } else {
    name.textContent = "Hide Answer";
  }
}

if (answerButton1) {
  answerButton1.addEventListener("click", () => {
    hideNextSibling(answerButton1);
  });
}
if (answerButton2) {
  answerButton2.addEventListener("click", () => {
    hideNextSibling(answerButton2);
  });
}

// Toggle Bookmarks
const bookmark1 = document.querySelector("#bookmark-1");
const bookmark2 = document.querySelector("#bookmark-2");
const bookmarkCheckbox1 = document.querySelector("#bookmark-checkbox1");
const bookmarkCheckbox2 = document.querySelector("#bookmark-checkbox2");

if (bookmark1) {
  bookmarkCheckbox1.addEventListener("click", () => {
    addBackgroundToCheckboxIcons(bookmarkCheckbox1, bookmark1);
  });
}

if (bookmark2) {
  bookmarkCheckbox2.addEventListener("click", () => {
    addBackgroundToCheckboxIcons(bookmarkCheckbox2, bookmark2);
  });
}

function addBackgroundToCheckboxIcons(checkbox, icon) {
  if (checkbox.checked) {
    icon.classList.add("bookmarked-active");
  } else {
    icon.classList.remove("bookmarked-active");
  }
}

function checkIfBookmarked() {
  addBackgroundToCheckboxIcons(bookmarkCheckbox1, bookmark1);
  addBackgroundToCheckboxIcons(bookmarkCheckbox2, bookmark2);
}
checkIfBookmarked();
