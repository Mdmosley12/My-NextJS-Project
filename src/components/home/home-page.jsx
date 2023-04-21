import Link from "next/link";
import styles from "/styles/Home.module.css";

export const HomePage = ({ data }) => {
  return (
    <main id={styles.main}>
      <div id={styles.eventCardsContainer}>
        {data.map((data) => {
          return (
            <Link
              className={styles.eventCard}
              key={data.id}
              href={`/events/${data.id}`}
            >
              <div
                className={styles.cardBackground}
                style={{
                  backgroundImage: `url(${data.image})`,
                }}
              ></div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{data.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};
