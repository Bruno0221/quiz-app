import {
  createNewElementWithClass,
  createNewElement,
  createNewElementWithClassAndContent,
} from "../../utils/CreateNewElements.js";

// Add New Question
export function AddQuestion() {
  const main = document.querySelector("main");
  const container = createNewElementWithClass(
    "article",
    main,
    "question-container"
  );
  const form = createNewElement("form", container);
  form.setAttribute("data-js", "new-question-form");
  const questionLabel = createNewElementWithClassAndContent(
    "label",
    form,
    "form-label",
    "New Question:"
  );
  questionLabel.setAttribute("for", "new-question");
  const questionInput = createNewElementWithClass("input", form, "form-input");
  setInputAttributes(questionInput, "new-question", "text", "new-question");

  const answerLabel = createNewElementWithClassAndContent(
    "label",
    form,
    "form-label",
    "New Answer:"
  );
  answerLabel.setAttribute("for", "new-answer");
  const answerInput = createNewElementWithClass("input", form, "form-input");
  setInputAttributes(answerInput, "new-answer", "text", "new-answer");

  const tagLabel = createNewElementWithClassAndContent(
    "label",
    form,
    "form-label",
    "New Tag:"
  );
  tagLabel.setAttribute("for", "new-tag");
  const tagInput = createNewElementWithClass("input", form, "form-input");
  setInputAttributes(tagInput, "new-tag", "text", "new-tag");

  const submitButton = createNewElement("input", form);
  submitButton.type = "submit";
  submitButton.value = "Create New Question";
  submitButton.setAttribute("data-js", "new-question-button");

  const questionForm = document.querySelector('[data-js="new-question-form"]');
  const questionFormButton = document.querySelector(
    '[data-js="new-question-button"]'
  );
  console.log(questionForm);

  questionForm.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  });
}

function setInputAttributes(element, id, type, name) {
  element.id = id;
  element.type = type;
  element.name = name;
}
