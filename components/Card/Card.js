import { createNewElement } from "../../utils/CreateNewElement.js";
import { toggleNextSibling } from "../../utils/ToggleNextSibling.js";
import bookmarkedQuestions from "../../utils/BookmarkedArray.js";

export function createCard(singleCard) {
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
