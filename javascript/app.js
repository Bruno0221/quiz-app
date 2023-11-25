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

// create Question Card

function createCard() {
  const main = document.querySelector("main");
  const newCard = document.createElement("article");
  newCard.innerHTML = `
      <article
      class="question-container"
      aria-label="card containing a question"
      >
      <input class="hidden bookmark-checkbox" type="checkbox" name="bookmark" id="bookmark-checkbox1">
      <label for="bookmark-checkbox1">
          <svg
            class="bookmark"
            aria-label=" Clickable Bookmark Icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
                      >
                      <title>bookmark</title>
                      <path
                      d="M19.875 23.25h-1.652l-6.222-5.382-6.213 5.382h-1.663v-22.5h15.75zM5.625 2.25v19.156l6.375-5.522 6.375 5.514v-19.149z"
                      ></path>
      </label>
      <h2 class="question">What property flips the axes in flexbox?</h2>
      <button class="answer-button">Show Answer</button>
      <p class="answer hidden" aria-hidden="true">
        flex-direction
      </p>
      <ul class="tags" aria-label="question tag">
        <li class="tag">#html</li>
        <li class="tag">#flexbox</li>
        <li class="tag">#css</li>
      </ul>
    </article>
  `;

  main.appendChild(newCard);
}

createCard();
createCard();
createCard();

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
