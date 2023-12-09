export function createNewElement(elementName, elementParent) {
  const element = document.createElement(elementName);
  elementParent.appendChild(element);
  return element;
}
export function createNewElementWithClass(
  elementName,
  elementParent,
  classList
) {
  const element = document.createElement(elementName);
  element.classList.add(classList);
  elementParent.appendChild(element);
  return element;
}
export function createNewElementWithClassAndContent(
  elementName,
  elementParent,
  classList,
  textContent
) {
  const element = document.createElement(elementName);
  element.classList.add(classList);
  element.textContent = textContent;
  elementParent.appendChild(element);
  return element;
}
