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

// Questions
const questionArray = [
  {
    question: "What property flips the axes in flexbox?",
    answer: "flex-direction",
    tags: ["html", "flexbox", "css"],
  },
  {
    question: "What properties are used to center items in flexbox?",
    answer: "justify-content & align items ",
    tags: ["html", "flexbox", "css"],
  },
  {
    question: "What properties are used to center items in grid?",
    answer: "place-items: center:",
    tags: ["html", "grid", "css"],
  },
  {
    question: "What is one way to center items without flex or grid",
    answer: "margin: 0 auto;",
    tags: ["html", "css", "centering"],
  },
];

// create Question Card
function createCard(object) {
  const cardQuestion = object.question;
  const cardAnswer = object.answer;
  const cardTag1 = object.tags[0];
  const cardTag2 = object.tags[1];
  const cardTag3 = object.tags[2];

  const main = document.querySelector("main");
  const newCard = document.createElement("article");
  newCard.innerHTML = `
      <article
      class="question-container"
      aria-label="card containing a question"
      >
      <input class="hidden bookmark-checkbox" type="checkbox" name="bookmark">
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
      <h2 class="question">${cardQuestion}</h2>
      <button class="answer-button">Show Answer</button>
      <p class="answer hidden" aria-hidden="true">
        ${cardAnswer}
      </p>
      <ul class="tags" aria-label="question tag" data-js="tags">
        <li class="tag">#${cardTag1}</li>
        <li class="tag">#${cardTag2}</li>
        <li class="tag">#${cardTag3}</li>
      </ul>
    </article>
    `;

  main.appendChild(newCard);
  // object.tags.forEach((tag) => {
  //   newTag(tag);
  // });
}

// Create Tags

function newTag() {
  const parent = document.querySelector('[data-js="tags"]');
  const newTag = document.createElement("li");
  newTag.classList.add("tag");
  parent.appendChild(newTag);
}

// Start Game
const startButton = document.querySelector('[data-js="start-button"]');

if (startButton) {
  startButton.addEventListener("click", () => {
    startButton.classList.add("hidden");
    questionArray.forEach((question) => {
      createCard(question);
    });
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
