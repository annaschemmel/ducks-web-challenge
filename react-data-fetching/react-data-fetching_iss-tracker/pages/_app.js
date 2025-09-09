import GlobalStyle from "../styles";
import useSWR from "swr";
import { SWRConfig } from "swr";

/* SWRConfig for the whole APP
We want to config swr globally for all pur app.
We don't want to have to declare the fetcher function every time we want to use it.
I want to declare the fetcher once and that all.
*/

//const fetcher = (...args) => fetch(...args).then((res) => res.json());

async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch");
  return await response.json();
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher, refreshInterval: 1000 }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
