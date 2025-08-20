console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (let counter = 0; counter < 5; counter++) {
    const star = document.createElement("img");
    if (counter < filledStars) {
      star.src = "./assets/star-filled.svg";
    } else {
      star.src = "./assets/star-empty.svg";
    }
    starContainer.append(star);
  }

  // --^-- write or modify code above this line --^--
}

renderStars(1);
