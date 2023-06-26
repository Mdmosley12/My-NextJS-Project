import { useState } from "react";
import styles from "/styles/SingleEvent.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export const SingleEventPage = ({ singleEvent }) => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const eventId = router?.query?.event_id;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    if (!email.match(emailRegex)) {
      setMessage("");
      setErrorMessage("Email format is invalid.");
      return;
    }

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, eventId: eventId }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setErrorMessage("");
      setMessage(data.msg);
    } catch (err) {
      setErrorMessage("");
      setMessage("Email already registered");
      console.log(err);
    }
    setEmail("");
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <main id={styles.main}>
      <div id={styles.eventContainer}>
        <div id={styles.imageDiv}>
          <Image
            alt={singleEvent.title}
            id={styles.image}
            src={singleEvent.image}
            width={400}
            height={400}
          />
        </div>
        <div id={styles.contentDiv}>
          <h2 id={styles.eventTitle}>{singleEvent.title}</h2>
          <p id={styles.eventDescription}>{singleEvent.description}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div id={styles.registerDiv}>
            <label id={styles.label} htmlFor="email">
              Want to attend this Event? Register your email below!
            </label>
            <input
              id={styles.emailInput}
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Please insert your email here"
              required
            />
            <button id={styles.submitButton} type="submit">
              Register!
            </button>
            <p id={styles.errorMessage}>{errorMessage}</p>
            <p id={styles.message}>{message}</p>
          </div>
        </form>
      </div>
    </main>
  );
};
