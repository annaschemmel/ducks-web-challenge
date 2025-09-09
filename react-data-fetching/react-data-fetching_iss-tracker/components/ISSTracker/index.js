import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

export default function ISSTracker() {
  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });
  // ^ we don't need this anymore since we are getting the information from useSWR (down below)

  const {
    data: ISSCoords,
    error,
    isLoading,
  } = useSWR("https://api.wheretheiss.at/v1/satellites/25544");

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const { longitude, latitude } = ISSCoords;

  return (
    <main>
      <Map longitude={longitude} latitude={latitude} />
      <Controls longitude={longitude} latitude={latitude} />
    </main>
  );
}
