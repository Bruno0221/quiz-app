import { createNewElement } from "../../utils/CreateNewElement.js";

export function BookmarkPlaceholder() {
  const main = document.querySelector("main");
  const placeholderText = "You have not bookmarked any questions... yet...";
  const placeholderContainer = createNewElement(
    "article",
    main,
    "question-container"
  );
  const placeholderHeader = createNewElement(
    "h2",
    placeholderContainer,
    "question",
    placeholderText
  );
}
