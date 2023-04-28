import { EventsByCategoryPage } from "../../../src/components/events/categories/eventsByCategories";

const EventsByCategory = ({ eventsByCity, pageName }) => {
  return (
    <EventsByCategoryPage eventsByCity={eventsByCity} pageName={pageName} />
  );
};

export default EventsByCategory;

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
