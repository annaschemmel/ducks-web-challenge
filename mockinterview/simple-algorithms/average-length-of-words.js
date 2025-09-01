// Calculate the average length of the words

const words2 = [
  "eclipse",
  "harmony",
  "cascade",
  "labyrinth",
  "quartz",
  "serendipity",
  "zenith",
  "ephemeral",
  "vortex",
  "mystique",
];

function averageWordLength(words) {
  // TODO:

  // create a new variable totalCharacters
  // go through each word of array -> loop
  // find out the words length and add it to totalCharacters
  // at the end of the loop we will have the number of characters of the whole array
  // we divide totalCharacters through the length of the array to get the average

  // ----------------------

  let totalCharacters = 0;

  for (const word of words) {
    totalCharacters += word.length;
    //console.log(totalCharacters);
  }
  //console.log(words.length);
  return totalCharacters / words.length;
}

console.log(averageWordLength(words2));
