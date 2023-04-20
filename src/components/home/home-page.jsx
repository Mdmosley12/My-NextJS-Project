import Link from "next/link";
import Image from "next/image";
import homeScreenImage from "/public/nightMarket.jpg";

export const HomePage = ({ data }) => {
  return (
    <main>
      <div id="homeScreenImageBox">
        <Image id="homeScreenImage" alt="Night market" src={homeScreenImage} />
      </div>
      {data.map((data) => {
        return (
          <Link key={data.id} href={`/events/${data.id}`}>
            <Image width={400} height={200} alt={data.title} src={data.image} />
            <h2>{`${data.title}`}</h2>
            <p>{data.description}</p>
          </Link>
        );
      })}
    </main>
  );
};
