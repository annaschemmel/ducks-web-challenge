import { volumes } from "@/resources/lib/data";
import { introduction } from "@/resources/lib/data";
import Head from "next/head";
import Link from "next/link";

export default function Volumes() {
  console.log("volumes: ", volumes);
  return (
    <>
      <Head>
        <title>LOTR Volumes</title>
      </Head>
      <main>
        <h1>Lord of the Rings</h1>
        <p>{introduction}</p>
        <h2>All Volumes</h2>
        <ul>
          {volumes.map((volumes, index) => (
            <li key={index}>
              <Link href={`/volumes/${volumes.slug}`}>{volumes.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
