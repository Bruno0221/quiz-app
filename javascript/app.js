// Dark Mode
const button = document.querySelector("#dark-mode");
const body = document.querySelector('[data-type="body"]');

if (button) {
  button.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  });
}

// Show Answers
const answerButton1 = document.querySelector("#show-answer-1");
const answerButton2 = document.querySelector("#show-answer-2");

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

function hideNextSibling(name) {
  name.nextElementSibling.classList.toggle("hidden");
  if (name.nextElementSibling.classList.contains("hidden")) {
    name.textContent = "Show Answer";
  } else {
    name.textContent = "Hide Answer";
  }
}
