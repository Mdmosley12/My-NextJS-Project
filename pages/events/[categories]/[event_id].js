import Image from "next/image";

const SingleEventPage = ({ singleEvent }) => {
  return (
    <div>
      <h2>{singleEvent.title}</h2>
      <Image
        alt={singleEvent.title}
        width={500}
        height={300}
        src={singleEvent.image}
      />
      <p>{singleEvent.description}</p>
    </div>
  );
};

export default SingleEventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");
  const allPaths = allEvents.map((event) => {
    return {
      params: {
        categories: event.city.toString(),
        event_id: event.title.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const eventId = context?.params.event_id;
  // console.log(context);
  const { allEvents } = await import("/data/data.json");
  // console.log(allEvents);
  const singleEvent = allEvents.find((event) => eventId === event.title);
  // console.log(eventId, "<<<<<<<<<<<<<,");
  return {
    props: {
      singleEvent: singleEvent,
    },
  };
}
