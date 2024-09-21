import styles from "./hero.module.css";
import { GitHubLastRepo } from "../../assets/class/hooks";
import { MenBlack, Rectangle } from "../../assets/images";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <main className={styles.heroSection}>
        <section className={styles.heroText}>
          <h2>
            Marlo is a <span>web designer</span> and{" "}
            <span>front-end developer</span>
          </h2>
          <p>
            He crafts responsive websites where technologies meet creativity
          </p>
          <button>
            <p>Contact me!!</p>
          </button>
        </section>
        <section className={styles.heroImage}>
          <img src={MenBlack} alt="Men in black" />
          <div className={styles.workingOn}>
            <img src={Rectangle} alt="Status" />
            <p>
              Currently working on <GitHubLastRepo />
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
