import {
  createNewElementWithClass,
  createNewElement,
  createNewElementWithClassAndContent,
} from "../../utils/CreateNewElements.js";
import { createCard } from "../Card/Card.js";
import { questionArray } from "../../utils/QuestionArray.js";

// Add New Question
export function AddQuestion() {
  const main = document.querySelector("main");
  const container = createNewElementWithClass(
    "article",
    main,
    "question-container"
  );
  const form = createNewElementWithClass(
    "form",
    container,
    "new-question-form"
  );
  form.setAttribute("data-js", "new-question-form");

  //New Question
  const questionContainer = createNewElementWithClass(
    "div",
    form,
    "input-container"
  );
  const questionInput = createNewElementWithClass(
    "textarea",
    questionContainer,
    "form-input"
  );
  setTextareaAttributes(questionInput, "question", "question", 3, 25);
  const questionLabel = createNewElementWithClassAndContent(
    "label",
    questionContainer,
    "form-label",
    "New Question:"
  );
  questionLabel.setAttribute("for", "question");

  // New Answer
  const answerContainer = createNewElementWithClass(
    "div",
    form,
    "input-container"
  );
  const answerInput = createNewElementWithClass(
    "textarea",
    answerContainer,
    "form-input"
  );
  setTextareaAttributes(answerInput, "answer", "answer", 3, 25);
  const answerLabel = createNewElementWithClassAndContent(
    "label",
    answerContainer,
    "form-label",
    "New Answer:"
  );
  answerLabel.setAttribute("for", "answer");

  //New Tag
  const tagContainer = createNewElementWithClass(
    "div",
    form,
    "input-container"
  );
  const tagInput = createNewElementWithClass(
    "input",
    tagContainer,
    "form-input"
  );
  setInputAttributes(tagInput, "tag", "text", "tag");
  const tagLabel = createNewElementWithClassAndContent(
    "label",
    tagContainer,
    "form-label",
    "New Tag:"
  );
  tagLabel.setAttribute("for", "tag");

  const submitButton = createNewElement("input", form);
  submitButton.type = "submit";
  submitButton.value = "Create New Question";
  submitButton.setAttribute("data-js", "new-question-button");

  const questionForm = document.querySelector('[data-js="new-question-form"]');
  const questionFormButton = document.querySelector(
    '[data-js="new-question-button"]'
  );

  questionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newQuestion = {
      id: questionArray.length,
      question: data.question,
      answer: data.answer,
      tags: [data.tag],
    };
    questionArray.push(newQuestion);
    console.log(questionArray);
  });
}

function setInputAttributes(element, id, type, name) {
  element.id = id;
  element.type = type;
  element.name = name;
}

function setTextareaAttributes(element, id, name, rows, cols) {
  element.id = id;
  element.name = name;
  element.rows = rows;
  element.cols = cols;
}
