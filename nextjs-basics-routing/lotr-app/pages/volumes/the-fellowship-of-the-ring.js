import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TheFellowshipOfTheRin() {
  let volume = volumes[0];
  console.log(volume.cover);
  return (
    <>
      <Link href={`/volumes`}>← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((books, index) => (
          <li key={index}>{books.title}</li>
        ))}
      </ul>
      <Image
        src={volume.cover}
        //public/images/the-fellowship-of-the-ring.png
        height={230}
        width={140}
        alt={volume.title}
      />
    </>
  );
}
