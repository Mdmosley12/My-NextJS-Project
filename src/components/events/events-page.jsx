import Link from "next/link";
import styles from "/styles/Events.module.css";
const capitaliseString = require("/utils/capitaliseString.js");

export const EventsPage = ({ data }) => {
  return (
    <main id={styles.main}>
      <h1 id={styles.eventsTitle}>Our Events Page</h1>
      <div id={styles.cardsContainer}>
        {data.map((data) => {
          return (
            <Link
              className={styles.eventCard}
              key={data.id}
              href={`/events/${data.city}/${data.title}`}
            >
              <div
                className={styles.cardBackground}
                style={{
                  backgroundImage: `url(${data.image})`,
                }}
              ></div>
              <div className={styles.content}>
                <h2 className={styles.eventTitle}>{`${data.title}`}</h2>
                <h3 className={styles.eventCity}>
                  {capitaliseString(data.city)}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};
