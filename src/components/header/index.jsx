import styles from "./header.module.css";
import { ChevronDown, Logotype } from "../../assets/images";
import { Link } from "react-router-dom";

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
          <Link to="/" className={styles[home]}>
            <p>
              <span>#</span>home
            </p>
          </Link>
          <Link to="/work" className={styles[works]}>
            <p>
              <span>#</span>works
            </p>
          </Link>
          <Link className={styles[aboutMe]}>
            <p>
              <span>#</span>about-me
            </p>
          </Link>
          <Link className={styles[contact]}>
            <p>
              <span>#</span>contact
            </p>
          </Link>
          <button>
            <p>EN</p>
            <img src={ChevronDown} alt="" />
          </button>
        </nav>
      </header>
    </div>
  );
}
