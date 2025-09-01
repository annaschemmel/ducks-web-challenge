export default function App() {
  function handleClick() {
    console.log("You clicked me!");
  }
  return (
    <Button
      color={"salmon"}
      disabled={false}
      text={"Click me"}
      onButton={handleClick}
    />
  );
}

function Button({ color, disabled, text, onButton }) {
  return (
    <button style={{ backgroundColor: color }} onClick={onButton}>
      {text}
    </button>
  );
}
