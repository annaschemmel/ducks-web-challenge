console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  console.log("response: ", response);

  const data = await response.json(); //convert from json to js
  console.log("data:", data);
  console.log("data.result: ", data.results);
  console.log("data.result (r2d2): ", data.results[2]);
  console.log("data.result (r2d2 eyecolor ): ", data.results[2]["eye_color"]);
  return data;
}

fetchData();
