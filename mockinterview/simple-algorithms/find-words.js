// Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(wordOne, wordTwo) {
  // TODO:

  // use includes method to check if the array contains the given words (2x)

  // ------------------

  //   wordsFind.includes(wordOne) ? true : false;
  //   wordsFind.includes(wordTwo) ? true : false;

  //console.log(wordsFind);
  if (wordsFind.includes(wordOne)) {
    console.log("The word", wordOne, "is listed");
  } else {
    console.log("The word", wordOne, "is not listed");
  }
  if (wordsFind.includes(wordTwo)) {
    console.log("The word", wordTwo, "is listed");
  } else {
    console.log("The word", wordTwo, "is not listed");
  }

  return wordsFind.includes(wordOne) && wordsFind.includes(wordTwo)
    ? true
    : false;
}

console.log("Both words exist:", doesWordExist("subset", "needle"));
