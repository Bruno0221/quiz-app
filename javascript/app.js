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
    id: 1,
    question: "What property flips the axes in flexbox?",
    answer: "flex-direction",
    tags: ["html", "flexbox", "css"],
  },
  {
    id: 2,
    question: "What properties are used to center items in flexbox?",
    answer: "justify-content & align items ",
    tags: ["html", "flexbox", "css"],
  },
  {
    id: 3,
    question: "What properties are used to center items in grid?",
    answer: "place-items: center:",
    tags: ["html", "grid", "css"],
  },
  {
    id: 4,
    question: "What is one way to center items without flex or grid",
    answer: "margin: 0 auto;",
    tags: ["html", "css", "centering"],
  },
];

// create Question Card
function createCard(singleCard) {
  const cardQuestion = singleCard.question;
  const cardAnswer = singleCard.answer;
  const cardID = questionArray.indexOf(singleCard);
  const cardTag1 = singleCard.tags[0];
  const cardTag2 = singleCard.tags[1];
  const cardTag3 = singleCard.tags[2];

  const main = document.querySelector("main");
  const newCard = document.createElement("article");
  newCard.innerHTML = `
      <article
      class="question-container"
      aria-label="card containing a question"
      >
      <input class="hidden bookmark-checkbox" type="checkbox" id="bookmark-checkbox${cardID}" data-js="bookmark-checkboxes">
      <label for="bookmark-checkbox${cardID}">
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
      <h2 class="question" data-js="questions">${cardQuestion}</h2>
      <button class="answer-button" data-js="answer-buttons">Show Answer</button>
      <p class="answer hidden" aria-hidden="true" data-js="answers">
        ${cardAnswer}
      </p>
      <ul class="tags" aria-label="question tag" data-js="tags">
        <li class="tag" data-js="tags">#${cardTag1}</li>
        <li class="tag" data-js="tags">#${cardTag2}</li>
        <li class="tag" data-js="tags">#${cardTag3}</li>
      </ul>
    </article>
    `;

  // singleCard.tags.forEach(createNewTag);
  main.appendChild(newCard);
  // for (const tag of singleCard.tags) {
  //   createNewTag(tag);
  // }
}

// Create Tags
function createNewTag(tag) {
  const parent = document.querySelector('[data-js="tags"]');
  const newTag = document.createElement("li");
  newTag.classList.add("tag");
  newTag.textContent = tag;
  parent.appendChild(newTag);
}

// Create Card on index.html
const indexMain = document.querySelector('[data-js="index-main"]');
const bookmarkedMain = document.querySelector('[data-js="bookmarked-main"]');

if (indexMain) {
  questionArray.forEach(createCard);
}

//when bookmark is checked, move to local storage
const bookmarkCheckbox = document.querySelectorAll(
  '[data-js="bookmark-checkboxes"]'
);
const bookmarkedQuestionsArray = [];

function addNewBookmarkToArray(event) {
  if (event.target.checked === true) {
    const eventParent = event.target.parentElement;
    const newBookmarkedQuestion = {
      index: bookmarkedQuestionsArray.length,
      question: eventParent.children[2].textContent,
      answer: eventParent.children[4].textContent,
      tags: eventParent.children[5].textContent,
    };
    bookmarkedQuestionsArray.push(newBookmarkedQuestion);
    console.log(event.target);
    return newBookmarkedQuestion;
  } else {
    bookmarkedQuestionsArray.splice(1, 1);
  }
}

bookmarkCheckbox.forEach((event) => {
  event.addEventListener("click", (event) => {
    addNewBookmarkToArray(event);
    console.log(bookmarkedQuestionsArray);
    localStorage.setItem(
      bookmarkedQuestionsArray,
      JSON.stringify(bookmarkedQuestionsArray)
    );
  });
});

// create bookmarked questions
if (bookmarkedMain) {
  bookmarkedQuestionsArray.forEach(createCard);
}

// Show Answers
const answerButtons = document.querySelectorAll('[data-js="answer-buttons"]');

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

answerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    hideNextSibling(button);
  });
});
