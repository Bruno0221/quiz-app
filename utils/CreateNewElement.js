export function createNewElement(
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
