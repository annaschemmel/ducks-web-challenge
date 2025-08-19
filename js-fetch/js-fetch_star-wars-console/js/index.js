console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  //   console.log("response: ", response);
  const data = await response.json(); //convert from json to js
  return data;
}

const characters = await fetchData();
console.log("data:", characters);
console.log("data.result: ", characters.results);
console.log("data.result (r2d2): ", characters.results[2]);
console.log(
  "data.result (r2d2 eyecolor ): ",
  characters.results[2]["eye_color"]
);
