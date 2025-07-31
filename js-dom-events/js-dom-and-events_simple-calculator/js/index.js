console.clear();

let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--

const buttonAdd = document.querySelector('[data-js="add"]');
const buttonSubstract = document.querySelector('[data-js="subtract"]');
const buttonMultiply = document.querySelector('[data-js="multiply"]');
const buttonDivide = document.querySelector('[data-js="divide"]');
const buttonExponent = document.querySelector('[data-js="exponent"]');
const buttonModulo = document.querySelector('[data-js="modulo"]');

// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--

buttonAdd.addEventListener("click", () => {
  let calcSum = operand1 + operand2;
  console.log(calcSum);
});

buttonSubstract.addEventListener("click", () => {
  let calcDifference = operand1 - operand2;
  console.log(calcDifference);
});

buttonMultiply.addEventListener("click", () => {
  let calcProduct = operand1 * operand2;
  console.log(calcProduct);
});

buttonDivide.addEventListener("click", () => {
  let calcQuotient = operand1 / operand2;
  console.log(calcQuotient);
});

buttonExponent.addEventListener("click", () => {
  let calcExponent = operand1 ** operand2;
  console.log(calcExponent);
});

buttonModulo.addEventListener("click", () => {
  let calcModulo = operand1 % operand2;
  console.log(calcModulo);
});

// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--

const buttonIncreaseOne = document.querySelector('[data-js="increase-by-one"]');
const buttonIncreaseFive = document.querySelector(
  '[data-js="increase-by-five"]'
);
const buttonDecreaseOne = document.querySelector('[data-js="decrease-by-one"]');
const buttonDecreaseFive = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const buttonMultipyTwo = document.querySelector('[data-js="multiply-by-two"]');
const buttonDivideTwo = document.querySelector('[data-js="divide-by-two"]');

buttonIncreaseOne.addEventListener("click", () => {
  operand1++;
  console.log(operand1);
});

buttonIncreaseFive.addEventListener("click", () => {
  operand1 += 5;
  console.log(operand1);
});

buttonDecreaseOne.addEventListener("click", () => {
  operand1--;
  console.log(operand1);
});

buttonDecreaseFive.addEventListener("click", () => {
  operand1 -= 5;
  console.log(operand1);
});

buttonMultipyTwo.addEventListener("click", () => {
  operand1 *= 2;
  console.log(operand1);
});

buttonDivideTwo.addEventListener("click", () => {
  operand1 /= 2;
  console.log(operand1);
});

// --^-- write your code here --^--
