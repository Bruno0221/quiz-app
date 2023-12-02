// Function to toggle classes -> put className in quotes.

const toggleClass = (element, className) => element.classList.toggle(className);

// Dark Mode
const button = document.querySelector("#dark-mode");
const body = document.querySelector('[data-js="body"]');
if (button) {
  button.addEventListener("click", () => {
    toggleClass(body, "other-theme");
  });
}

// Questions
const questionArray = [
  {
    id: 0,
    question: "What property flips the axes in flexbox?",
    answer: "flex-direction",
    tags: ["html", "flexbox", "css"],
  },
  {
    id: 1,
    question: "What properties are used to center items in flexbox?",
    answer: "justify-content & align items ",
    tags: ["html", "flexbox", "css"],
  },
  {
    id: 2,
    question: "What properties are used to center items in grid?",
    answer: "place-items: center:",
    tags: ["html", "grid", "css"],
  },
  {
    id: 3,
    question: "What is one way to center items without flex or grid",
    answer: "margin: 0 auto;",
    tags: ["html", "css", "centering"],
  },
];

// Array for bookmarked IDs
let bookmarkedQuestions = [];

// function to create Elements
function createNewElement(elementName, elementParent, classList, textContent) {
  const element = document.createElement(elementName);
  element.classList.add(classList);
  element.textContent = textContent;
  elementParent.appendChild(element);
  return element;
}
const main = document.querySelector("main");

// create Question Card
function createCard(singleCard) {
  const cardQuestion = singleCard.question;
  const cardAnswer = singleCard.answer;
  const cardID = singleCard.id;

  const main = document.querySelector("main");
  const newCard = createNewElement("article", main, "question-container");

  const newInput = createNewElement("input", newCard, "bookmark-checkbox");
  newInput.classList.add("hidden");
  newInput.type = "checkbox";
  newInput.id = "bookmark-checkbox" + cardID;
  newInput.setAttribute("data-js", "bookmark-checkbox" + cardID);

  // move id of bookmarked question into an array
  newInput.addEventListener("click", () => {
    if (newInput.checked === true) {
      bookmarkedQuestions.push(cardID);
    } else {
      bookmarkedQuestions = bookmarkedQuestions.filter(
        (bookmark) => bookmark !== cardID
      );
    }
  });

  const newLabel = createNewElement("label", newCard);
  newLabel.setAttribute("for", "bookmark-checkbox" + cardID);
  newLabel.innerHTML = `<svg
  class="bookmark"
                            aria-label=" Clickable Bookmark Icon"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            >
                            <title>bookmark</title>
                            <path
                            d="M19.875 23.25h-1.652l-6.222-5.382-6.213 5.382h-1.663v-22.5h15.75zM5.625 2.25v19.156l6.375-5.522 6.375 5.514v-19.149z"
                        ></path>`;

  const newQuestion = createNewElement("h2", newCard, "question", cardQuestion);
  newQuestion.setAttribute("data-js", "questions");

  const newButton = createNewElement(
    "button",
    newCard,
    "answer-button",
    "Show Answer"
  );
  newButton.setAttribute("data-js", "answer-buttons");

  // Shows and hides answers
  newButton.addEventListener("click", () => {
    toggleNextSibling(newButton);
  });

  const newAnswer = createNewElement("p", newCard, "answer", cardAnswer);
  newAnswer.classList.add("hidden");
  newAnswer.setAttribute("data-js", "answers");
  newAnswer.setAttribute("aria-hidden", "true");

  const newTagList = createNewElement("ul", newCard, "tags");
  newTagList.setAttribute("data-js", "tags");
  newTagList.setAttribute("aria-label", "question tag");

  const tagParent = newCard.querySelector('[data-js="tags"]');

  singleCard.tags.forEach((tag) => {
    createNewElement("li", tagParent, "tag", "#" + tag);
  });
}

//render main
function renderMain() {
  main.innerHTML = "";
  questionArray.forEach(createCard);
}

// render bookmarked
function renderBookmarked() {
  main.innerHTML = "";
  bookmarkedQuestions.forEach((id) => {
    const bookmarkedQuestion = questionArray.find(
      (question) => question.id === id
    );
    createCard(bookmarkedQuestion);
  });
}

// Show Answers
function toggleNextSibling(name) {
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

const homeButton = document.querySelector('[data-js="home-page"]');
const bookmarkedButton = document.querySelector('[data-js="bookmarked-page"]');

homeButton.addEventListener("click", () => {
  renderMain();
});
bookmarkedButton.addEventListener("click", () => {
  renderBookmarked();
});

// render main on load
renderMain();

// // Add New Question
// const questionForm = document.querySelector('[data-js="new-question-form"]');
// const questionFormButton = document.querySelector(
//   '[data-js="new-question-button"]'
// );
// console.log(questionFormButton);

// questionForm.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log(event.target);

//   const formData = new FormData(event.target);
//   const data = Object.fromEntries(formData);
//   console.log(data);
// });
