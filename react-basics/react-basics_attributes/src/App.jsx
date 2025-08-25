import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article>
      <h2 className="article__title">This is the headline</h2>
      <label htmlFor="articleInput">Label </label>
      <input type="text" id="articleInput" />
      <a
        className="article__link"
        target="blank"
        href="https://github.com/neuefische/ducks-hh-wd-25-2/blob/main/sessions/react-basics/challenges-react-basics.md"
      >
        Click me
      </a>
    </article>
  );
}
