console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible.

HINT: You can find more information about arrow functions and implicit returns in the handout.
*/

//-------------------------
//old
function getCurrentHour() {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
}
//new
const getCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};

//-------------------------
//old
function getVectorLength(x, y, z) {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
}
//new
const getVectorLength = (x, y, z) => {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
};

//-------------------------
//old
function cleanInput(string) {
  return string.toLowerCase().trim();
}
//new
const cleanInput = (string) => string.toLowerCase().trim();

/*
Rewrite the following arrow functions as classic functions.
*/

//-------------------------
//old
const isOddAndSmall = (number) => {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
};
//new
function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}

//-------------------------
//old
const add3 = (a, b, c) => a + b + c;
//new
function add3(a, b, c) {
  a + b + c;
}

//-------------------------
//old
const repeat10 = (string) => string.repeat(10);
//new
function repeat10(string) {
  string.repeat(10);
}
