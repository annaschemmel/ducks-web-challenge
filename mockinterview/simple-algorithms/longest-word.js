// Find the longest word

const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];

function findLongestWord(array) {
  // TODO: return the longest word

  // in order to check the length of each word we will declare a new variable "longestWord"
  // go throught the array one by one -> loop
  // check the length of each word and save that value in longestWord
  // compare the length of the current word with the previous word
  // if the current word is longer than the previous one, save this value, if not, move on to the next one
  // when the loop is done running through, the longest word will be the one saved in longestWord

  // -------------------------------

  let longestWord = "";

  for (const word of array) {
    //console.log(word.length);
    if (word.length > longestWord.length) {
      longestWord = word;
    }
    //console.log(longestWord);
  }
  //console.log(longestWord);
  return longestWord;
}

const result = findLongestWord(movies);

console.log(result);
