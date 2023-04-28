import Link from "next/link";
import styles from "/styles/EventsByCategory.module.css";

export const EventsByCategoryPage = ({ eventsByCity, pageName }) => {
  return (
    <main id={styles.main}>
      <h1 id={styles.pageTitle}>{`Events in ${pageName}`}</h1>
      <div id={styles.cardsContainer}>
        {eventsByCity.map((event) => {
          return (
            <Link
              className={styles.eventCard}
              key={event.id}
              href={`/events/${event.city}/${event.title}`}
            >
              <div
                className={styles.cardBackground}
                style={{
                  backgroundImage: `url(${event.image})`,
                }}
              ></div>
              <div className={styles.content}>
                <h2 className={styles.eventTitle}>{event.title}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};
