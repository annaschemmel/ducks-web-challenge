import useSWR from "swr";

export default function HomePage() {
  const { data, loading } = useSWR("/api/random-character", (url) =>
    fetch(url).then((res) => res.json())
  );

  if (loading) {
    return <h1>loading...</h1>;
  } else if (!data) {
    return <h1>not found</h1>;
  }

  return (
    <>
      <h1>Random character</h1>
      <ul>
        <li>First name: {data.firstname}</li>
        <li>Last name: {data.lastname}</li>
        <li>Twitter handle: {data.twitter}</li>
        <li>Geohash: {data.geohash}</li>
      </ul>
    </>
  );
}
