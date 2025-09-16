import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data, isLoading } = useSWR(`/api/products`, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ul>
      {data.map((fish) => (
        <li key={fish.id}>
          <h2>Name: {fish.name}</h2>
          <p>{fish.description}</p>
          <h5>
            {" "}
            Price:
            {fish.price}
            {fish.currency}
          </h5>
        </li>
      ))}
    </ul>
  );
}
