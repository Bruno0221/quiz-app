const button = document.querySelector("#dark-mode");
const body = document.querySelector('[data-type="body"]');

button.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
