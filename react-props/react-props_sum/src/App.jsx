export default function App() {
  return <Sum valueA={2} valueB={4} />;
}

function Sum({ valueA, valueB }) {
  return (
    <h2>
      {valueA} + {valueB} = {valueA + valueB}
    </h2>
  );
}
