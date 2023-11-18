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

if (bookmark1) {
  bookmark1.addEventListener("click", () => {
    toggleClass(bookmark1, "bookmarked-active");
  });
}

if (bookmark2) {
  bookmark2.addEventListener("click", () => {
    toggleClass(bookmark2, "bookmarked-active");
  });
}
