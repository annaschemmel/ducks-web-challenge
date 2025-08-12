console.clear();

let inputText = document.querySelector('[data-js="first-input"]');
let submitButton = document.querySelector('[data-js="button-uppercase"]');

console.log(submitButton);

submitButton.addEventListener("click", () => {
  inputText.value = inputText.value.toUpperCase();
});
