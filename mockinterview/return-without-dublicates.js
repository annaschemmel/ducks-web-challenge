// Unique arrays - return an array without duplicates

const words3 = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(words) {
  // TODO:

  // declare a new array that is empty (eg. noDublicates)
  // go through each word in an array -> loop
  // we compare the current word with the noDublicates list
  // -> if noDublicates includes the current word, don't add there
  // -> if noDublicates does not have that word yet, add it

  // ----------------------

  let noDublicates = [];

  for (const word of words) {
    //console.log(word);
    if (!noDublicates.includes(word)) {
      noDublicates.push(word);
    }
    //noDublicates.push(word);
  }

  return noDublicates;
}

console.log(uniquifyArray(words3));
