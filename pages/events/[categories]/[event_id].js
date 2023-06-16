import { SingleEventPage } from "../../../src/components/events/categories/singleEventPage";

const SingleEvent = ({ singleEvent }) => {
  return <SingleEventPage singleEvent={singleEvent} />;
};

export default SingleEvent;

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
  const { allEvents } = await import("/data/data.json");
  const singleEvent = allEvents.find((event) => eventId === event.title);
  return {
    props: {
      singleEvent: singleEvent,
    },
  };
}
