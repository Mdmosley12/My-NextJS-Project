import styles from "/styles/SingleEvent.module.css";
import Image from "next/image";

export const SingleEventPage = ({ singleEvent }) => {
  return (
    <main id={styles.main}>
      <div id={styles.eventContainer}>
        <div id={styles.imageDiv}>
          <Image
            alt={singleEvent.title}
            id={styles.image}
            src={singleEvent.image}
            width={500}
            height={500}
          />
        </div>
        <div id={styles.contentDiv}>
          <h2 id={styles.eventTitle}>{singleEvent.title}</h2>
          <p id={styles.eventDescription}>{singleEvent.description}</p>
        </div>
      </div>
    </main>
  );
};
