// Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let count = 0;
  // TODO:

  // declare a new counter that starts at 0
  // go trough the array -> loop
  // every number will be added to the counter
  // in the end return the counter value -> is the sum of all numbers in this array

  //----------------------

  for (const number of numbers) {
    count += number;
  }

  return count;
}

console.log(sumNumbers(numbers));
