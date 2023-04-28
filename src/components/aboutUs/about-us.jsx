import Image from "next/image";
import styles from "/styles/AboutUs.module.css";

export const AboutUsPage = () => {
  return (
    <main id={styles.main}>
      <div id={styles.aboutUsContainer}>
        <div id={styles.imageDiv}>
          <Image
            alt="A DJ"
            id={styles.image}
            src="/aboutUsImage.png"
            width={400}
            height={400}
          />
        </div>
        <div id={styles.contentDiv}>
          <h1 id={styles.title}>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet odio luctus, bibendum lacus quis, viverra elit. Nulla
            facilisi. Mauris non justo molestie, mattis sapien sit amet, tempor
            nisi. Nunc justo nibh, pellentesque eu augue a, elementum posuere
            lorem. Sed sed lectus sed augue fringilla molestie eu nec ligula.
            Sed ultricies fermentum gravida. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Vestibulum at lorem in velit porttitor facilisis. Suspendisse
            feugiat vel tellus vel dignissim. Ut ullamcorper dictum neque, eget
            finibus urna consectetur vitae. Etiam sit amet scelerisque elit, id
            gravida felis.
          </p>
          <br></br>
          <p>
            Etiam convallis libero lacinia eros luctus, venenatis faucibus
            libero malesuada. Morbi sed odio et dolor porttitor venenatis. Fusce
            ac odio rutrum purus tincidunt ullamcorper at at purus. Duis ipsum
            leo, imperdiet at scelerisque eget, dignissim et orci. Nulla
            venenatis ante vitae pharetra volutpat. Donec mollis, odio ut
            consequat pretium, quam quam rhoncus tellus, non pulvinar dui mi
            interdum massa. Morbi lacus mauris, eleifend quis lacus non,
            consequat mollis erat. Curabitur fringilla sapien sit amet ligula
            ultrices iaculis. Vivamus elementum nunc massa, vitae posuere sapien
            consequat ac.
          </p>
          <br></br>
          <p>
            Mauris at consectetur diam. Integer bibendum purus neque, eu laoreet
            dolor aliquet vel. Ut eget neque at urna elementum ullamcorper.
            Phasellus dui tortor, posuere id tincidunt a, fermentum ut libero.
            Pellentesque porttitor eros vestibulum orci pellentesque viverra.
            Etiam iaculis pellentesque pulvinar. Vestibulum et velit sed lectus
            tristique mattis. Aliquam leo dolor, porttitor non justo vitae,
            aliquam iaculis dolor. Nulla nec ligula bibendum ante bibendum
            lobortis eu et ante. Duis mollis nunc non ante dignissim sodales. In
            elementum felis in scelerisque gravida. Donec convallis mauris eget
            nibh vehicula, eu tempor mauris luctus. Phasellus a tempor ex, id
            malesuada dui. Praesent aliquet dapibus odio vel suscipit. Quisque
            sit amet laoreet dui, eget sollicitudin lacus. Donec eu lectus in
            elit consectetur faucibus in id ligula.
          </p>
        </div>
      </div>
    </main>
  );
};
