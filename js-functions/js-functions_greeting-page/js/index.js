console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');
console.log(display);

// ----------------Times------------------
function getGreeting(currentTime) {
  // Code here
  if (currentTime > 5 && currentTime <= 12) {
    display.textContent = "Good Morning";
  } else if (currentTime > 12 && currentTime <= 18) {
    display.textContent = "Good Afternoon";
  } else if (currentTime > 18 && currentTime <= 22) {
    display.textContent = "Good Evening";
  } else if (currentTime > 22 || currentTime <= 5) {
    display.textContent = "Good Night";
  }
}
getGreeting(new Date().getHours());

// ----------------Colours------------------

function getDayColor(currentDay) {
  // Code here
  if (currentDay == 1) {
    document.body.style.backgroundColor = "darkgray";
  } else if (
    currentDay == 2 ||
    currentDay == 3 ||
    currentDay == 4 ||
    currentDay == 5
  ) {
    document.body.style.backgroundColor = "lightblue";
  } else if (currentDay == 6 || currentDay == 7) {
    document.body.style.backgroundColor = "hotpink";
  }
}

document.body.style.backgroundColor = getDayColor(new Date().getDay());
