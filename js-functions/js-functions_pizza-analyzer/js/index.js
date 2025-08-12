console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let diameter1 = pizzaInput1.value;
let diameter2 = pizzaInput2.value;

pizzaInput1.addEventListener("input", () => {
  diameter1 = pizzaInput1.value;
  console.log(diameter1, diameter2);
  calculatePizzaGain(diameter1, diameter2);
  output.textContent = `${Math.round(pizzaGain)}`;
  updatePizzaDisplay(pizza1, pizzaInput1.value);
  updateOutputColor();
});

pizzaInput2.addEventListener("input", () => {
  diameter2 = pizzaInput2.value;
  console.log(diameter1, diameter2);
  calculatePizzaGain(diameter1, diameter2);
  output.textContent = `${Math.round(pizzaGain)}`;
  updatePizzaDisplay(pizza2, pizzaInput2.value);
  updateOutputColor();
});

console.log(diameter1, diameter2);

// Task 1: Define the function `calculatePizzaGain` here
let pizzaGain;
function calculatePizzaGain(diameter1, diameter2) {
  const area1 = Math.PI * diameter1 ** 2;
  const area2 = Math.PI * diameter2 ** 2;
  pizzaGain = ((area2 - area1) / area1) * 100;
  console.log("checking data type of pizzaGain: ", typeof pizzaGain);
}

// Task 2: Define the function `updatePizzaDisplay` here
function updatePizzaDisplay(pizzaElement, newSize) {
  let pizzaSize = (newSize / 24) * 100;
  pizzaElement.style.width = `${pizzaSize}px`;
}

// Task 3: Define the function `updateOutputColor` here

function updateOutputColor() {
  if (Math.sign(pizzaGain) == 1) {
    outputSection.style.backgroundColor = "var(--green)";
  } else {
    outputSection.style.backgroundColor = "var(--red)";
  }
}
