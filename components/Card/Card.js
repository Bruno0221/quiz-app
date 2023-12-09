import {
  createNewElement,
  createNewElementWithClass,
  createNewElementWithClassAndContent,
} from "../../utils/CreateNewElements.js";
import { toggleNextSibling } from "../../utils/ToggleNextSibling.js";
//import bookmarkedQuestions from "../../utils/BookmarkedArray.js";

export let bookmarkedQuestions = [];

export function createCard({ question, answer, id, tags }) {
  const main = document.querySelector("main");
  const newCard = createNewElementWithClass(
    "article",
    main,
    "question-container"
  );

  const newInput = createNewElementWithClass(
    "input",
    newCard,
    "bookmark-checkbox"
  );
  newInput.classList.add("hidden");
  newInput.type = "checkbox";
  newInput.id = "bookmark-checkbox" + id;
  newInput.setAttribute("data-js", "bookmark-checkbox" + id);

  //check if question is already bookmarked
  if (bookmarkedQuestions.includes(id)) {
    newInput.checked = true;
  }

  // move id of bookmarked question into an array
  newInput.addEventListener("click", () => {
    if (newInput.checked === true) {
      bookmarkedQuestions.push(id);
    } else {
      bookmarkedQuestions = bookmarkedQuestions.filter(
        (bookmark) => bookmark !== id
      );
    }
  });

  const newLabel = createNewElement("label", newCard);
  newLabel.setAttribute("for", "bookmark-checkbox" + id);
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

  const newQuestion = createNewElementWithClassAndContent(
    "h2",
    newCard,
    "question",
    question
  );
  newQuestion.setAttribute("data-js", "questions");

  const newButton = createNewElementWithClassAndContent(
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

  const newAnswer = createNewElementWithClassAndContent(
    "p",
    newCard,
    "answer",
    answer
  );
  newAnswer.classList.add("hidden");
  newAnswer.setAttribute("data-js", "answers");
  newAnswer.setAttribute("aria-hidden", "true");

  const newTagList = createNewElementWithClass("ul", newCard, "tags");
  newTagList.setAttribute("data-js", "tags");
  newTagList.setAttribute("aria-label", "question tag");

  const tagParent = newCard.querySelector('[data-js="tags"]');

  tags.forEach((tag) => {
    createNewElementWithClassAndContent("li", tagParent, "tag", "#" + tag);
  });
}
