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
  form.setAttribute("dat-js", "new-question-form");
  const questionLabel = createNewElementWithClassAndContent(
    "label",
    form,
    "form-label",
    "New Question:"
  );
  questionLabel.setAttribute("for", "new-question");
  const questionInput = createNewElementWithClass("input", form, "form-input");
  questionInput.id = "new-question";
  questionInput.type = "text";
  questionInput.name = "new-question";

  const answerLabel = createNewElementWithClassAndContent(
    "label",
    form,
    "form-label",
    "New Answer:"
  );
  answerLabel.setAttribute("for", "new-answer");
  const answerInput = createNewElementWithClass("input", form, "form-input");
  answerInput.id = "new-answer";
  answerInput.type = "text";
  answerInput.name = "new-answer";

  const tagLabel = createNewElementWithClassAndContent(
    "label",
    form,
    "form-label",
    "New Tag:"
  );
  tagLabel.setAttribute("for", "new-tag");
  const tagInput = createNewElementWithClass("input", form, "form-input");
  tagInput.id = "new-tag";
  tagInput.type = "text";
  tagInput.name = "new-tag";

  const submitButton = createNewElement("input", form);
  submitButton.type = "submit";
  submitButton.value = "Create New Question";
  submitButton.setAttribute("data-js", "new-question-button");

  const questionForm = document.querySelector('[data-js="new-question-form"]');
  const questionFormButton = document.querySelector(
    '[data-js="new-question-button"]'
  );
  console.log(questionFormButton);

  questionForm.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  });
}
