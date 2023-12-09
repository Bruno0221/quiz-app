import {
  createNewElementWithClass,
  createNewElementWithClassAndContent,
} from "../../utils/CreateNewElements.js";

export function BookmarkPlaceholder() {
  const main = document.querySelector("main");
  const placeholderText = "You have not bookmarked any questions... yet...";
  const placeholderContainer = createNewElementWithClass(
    "article",
    main,
    "question-container"
  );
  const placeholderHeader = createNewElementWithClassAndContent(
    "h2",
    placeholderContainer,
    "question",
    placeholderText
  );
}
