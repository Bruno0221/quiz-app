// Dark Mode
const button = document.querySelector("#dark-mode");
const body = document.querySelector('[data-type="body"]');

button.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// Show Answers
const answerButton = document.querySelector("#show-answer-1");
const answerText = document.querySelector("#answer-1");

answerButton.addEventListener("click", () => {
  answerText.classList.toggle("hidden");
});
