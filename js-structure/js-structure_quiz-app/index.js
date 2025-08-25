import Form from "./components/Form/form.js";
import Header from "./components/Header/header.js";
import CardList from "./components/CardList/cardlist.js";

const headerElement = Header();
const formElement = Form();
const cardListElement = CardList();

function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(headerElement, formElement, cardListElement);

  return app;
}

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
