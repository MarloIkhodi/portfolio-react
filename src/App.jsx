import styles from "./App.module.css";
import { ChevronDown, Logotype, Background } from "./assets/images";

export default function App() {
  return (
    <div className={styles.portfolioContainer}>
      <header className={styles.headerContainer}>
        <div className={styles.headerTitle}>
          <img src={Logotype} alt="Logotype" />
          <p>Marlo</p>
        </div>
        <nav className={styles.headerNav}>
          <a href="#">
            <p>
              <span>#</span>home
            </p>
          </a>
          <a href="#">
            <p>
              <span>#</span>works
            </p>
          </a>
          <a href="#">
            <p>
              <span>#</span>about-me
            </p>
          </a>
          <a href="#">
            <p>
              <span>#</span>contact
            </p>
          </a>
          <button>
            <p>
              EN
              <img src={ChevronDown} alt="" />
            </p>
          </button>
        </nav>
      </header>
      <div className={styles.heroContainer}></div>
    </div>
  );
}
