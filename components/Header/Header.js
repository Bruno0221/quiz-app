import {
  createNewElement,
  createNewElementWithClassAndContent,
} from "../../utils/CreateNewElements.js";

export function Header() {
  const root = document.querySelector("#root");
  const header = createNewElement("header", root);
  header.setAttribute("aria-labelledby", "title");
  const title = createNewElementWithClassAndContent(
    "h1",
    header,
    "title",
    "Quiz App"
  );
  const main = createNewElement("main", root);
}
