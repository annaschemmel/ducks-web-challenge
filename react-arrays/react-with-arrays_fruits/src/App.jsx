import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍎 Apple",
      color: "mistyrose",
    },
    {
      id: 2,
      name: "🍊 Orange",
      color: "peachpuff",
    },
    {
      id: 3,
      name: "🍌 Banana",
      color: "lemonchiffon",
    },
    {
      id: 4,
      name: "🥝 Kiwi",
      color: "#e6fbd9",
    },
    {
      id: 5,
      name: "🫐 Blueberry",
      color: "aliceblue",
    },
    {
      id: 6,
      name: "🍇 Grape",
      color: "lavender",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruits) => (
        <Card key={fruits.id} color={fruits.color} name={fruits.name} />
      ))}
    </div>
  );
}
