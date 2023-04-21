import Link from "next/link";
import styles from "/styles/Events.module.css";

export const EventsPage = ({ data }) => {
  return (
    <main id={styles.main}>
      <h1 id={styles.eventsTitle}>Our Events Page</h1>
      <div id={styles.cardContainer}>
        {data.map((event) => {
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
                <h2 className={styles.eventTitle}>{`${event.title}`}</h2>
                <h3 className={styles.eventCity}>{`${event.city}`}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};
