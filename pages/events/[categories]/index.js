import Image from "next/image";
import Link from "next/link";

const EventsCategoryPage = ({ eventsByCity, pageName }) => {
  return (
    <div>
      <h1>{`Events in ${pageName}`}</h1>
      {eventsByCity.map((event) => {
        return (
          <Link key={event.id} href={`/events/${event.city}/${event.title}`}>
            <Image
              alt={event.title}
              width={250}
              height={200}
              src={event.image}
            />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default EventsCategoryPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((event) => {
    return {
      params: {
        categories: event.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const paramsId = context?.params.categories;
  const { allEvents } = await import("/data/data.json");
  const eventsByCity = allEvents.filter((event) => {
    return event.city === paramsId ? event.city : null;
  });
  return {
    props: {
      eventsByCity: eventsByCity,
      pageName: paramsId,
    },
  };
}
