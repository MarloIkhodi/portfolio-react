import styles from "./header.module.css";
import { ChevronDown, Logotype } from "../../assets/images";

export default function Header({
  home = null,
  works = null,
  aboutMe = null,
  contact = null,
}) {
  return (
    <div className={styles.portfolioContainer}>
      <header className={styles.headerContainer}>
        <div className={styles.headerTitle}>
          <img src={Logotype} alt="Logotype" />
          <p>Marlo, the front-end</p>
        </div>
        <nav className={styles.headerNav}>
          <a className={styles[home]} href="#">
            <p>
              <span>#</span>home
            </p>
          </a>
          <a className={styles[works]} href="#">
            <p>
              <span>#</span>works
            </p>
          </a>
          <a className={styles[aboutMe]} href="#">
            <p>
              <span>#</span>about-me
            </p>
          </a>
          <a className={styles[contact]} href="#">
            <p>
              <span>#</span>contact
            </p>
          </a>
          <button>
            <p>EN</p>
            <img src={ChevronDown} alt="" />
          </button>
        </nav>
      </header>
    </div>
  );
}
