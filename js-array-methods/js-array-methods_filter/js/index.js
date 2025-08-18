console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => card["id"] == "2");
console.log("task 1: ", onlyCardWithIdTwo);

const allCardsWith3Tags = cards.filter((card) => card["tags"].length == 3);
console.log("task 2: ", allCardsWith3Tags);

const allCardsThatAreNotBookmarked = cards.filter(
  (card) => !card["isBookmarked"]
);
console.log("task 3: ", allCardsThatAreNotBookmarked);

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  // card tags should include html or js
  // card should be bookmarked
  return (
    (card["tags"].includes("html") || card["tags"].includes("js")) &&
    card["isBookmarked"]
  );
});
console.log("task 4: ", allCardsWithTagsHTMLOrJSThatAreBookmarked);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
