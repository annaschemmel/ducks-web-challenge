import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>This is the article headline</h1>
      <p>lorem ipsum dolor sit amet the wheels on the bus go round and round</p>
      <button>pls don&apos;t click</button>
    </article>
  );
}
