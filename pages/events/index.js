import Image from "next/image";
import Link from "next/link";

const EventsPage = ({ data }) => {
  return (
    <div>
      <h1>Our Events Page</h1>
      <div>
        {data.map((data) => {
          return (
            <Link key={data.id} href={`/events/${data.id}`}>
              <Image
                alt={data.title}
                width={250}
                height={200}
                src={data.image}
              />
              <h2>{`${data.title}`}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
