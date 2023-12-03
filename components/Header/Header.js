import { createNewElement } from "../../utils/CreateNewElement.js";

export function Header() {
  const root = document.querySelector("#root");
  const header = createNewElement("header", root, "title");
  header.setAttribute("aria-labelledby", "title");
  const title = createNewElement("h1", header, "title", "Quiz App");
  const main = createNewElement("main", root);
}
