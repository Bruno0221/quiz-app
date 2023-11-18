// Function to toggle classes -> put className in quotes.

const toggleClass = (element, className) => element.classList.toggle(className);

// Dark Mode
const button = document.querySelector("#dark-mode");
const body = document.querySelector('[data-type="body"]');
if (button) {
  button.addEventListener("click", () => {
    toggleClass(body, "other-theme");
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
