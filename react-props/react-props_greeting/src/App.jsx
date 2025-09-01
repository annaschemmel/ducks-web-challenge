export default function App() {
  return (
    <>
      <Greeting name={"Leonardo"} coach={true} />
      <Greeting name={"Britney"} coach={false} />
    </>
  );
}

function Greeting({ name, coach }) {
  return <p>Hello, {coach ? "Coach" : name}</p>;
}
