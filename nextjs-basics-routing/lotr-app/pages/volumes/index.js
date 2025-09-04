import { volumes } from "@/resources/lib/data";
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
        <h1>LOTR Volumes</h1>
        <section>
          {volumes.map((volumes, index) => (
            <Link href={`/volumes/${volumes.slug}`} key={index}>
              <h2>{volumes.title}</h2>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
