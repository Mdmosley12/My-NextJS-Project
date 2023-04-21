import { EventsPage } from "../../src/components/events/events-page";

export default function Events({ data }) {
  return (
    <>
      <EventsPage data={data} />
    </>
  );
}

export async function getStaticProps() {
  const { allEvents } = await import("/data/data.json");
  return {
    props: {
      data: allEvents,
    },
  };
}
