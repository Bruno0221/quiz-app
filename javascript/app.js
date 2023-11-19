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
const answerButtons = document.querySelectorAll(".answer-button");

function hideNextSibling(name) {
  const nextSibling = name.nextElementSibling;
  toggleClass(nextSibling, "hidden");
  toggleClass(nextSibling, "answer-appear");

  if (nextSibling.classList.contains("hidden")) {
    name.textContent = "Show Answer";
    nextSibling.setAttribute("aria-hidden", "true");
  } else {
    name.textContent = "Hide Answer";
    nextSibling.setAttribute("aria-hidden", "false");
  }
}

answerButtons.forEach(function (button) {
  button.addEventListener("click", () => {
    hideNextSibling(button);
  });
});
