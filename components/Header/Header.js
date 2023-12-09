import {
  createNewElement,
  createNewElementWithClass,
  createNewElementWithClassAndContent,
} from "../../utils/CreateNewElements.js";

export function Header() {
  const root = document.querySelector("#root");
  const header = createNewElementWithClass("header", root, "title");
  header.setAttribute("aria-labelledby", "title");
  const title = createNewElementWithClassAndContent(
    "h1",
    header,
    "title",
    "Quiz App"
  );
  const main = createNewElement("main", root);
}
