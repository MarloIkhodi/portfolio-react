import styles from "./header.module.css";
import { ChevronDown, Logotype } from "../../assets/images";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
  let location = useLocation();
  console.log(location.pathname);
  const current =
    location.pathname === "/" ? "home" : location.pathname.replace(/\//g, "");
  return (
    <div className={styles.portfolioContainer}>
      <header className={styles.headerContainer}>
        <div className={styles.headerTitle}>
          <img src={Logotype} alt="Logotype" />
          <p>Marlo, the front-end</p>
        </div>
        <nav className={styles.headerNav}>
          <Link to="/" className={current === "home" ? styles[current] : null}>
            <p>
              <span>#</span>home
            </p>
          </Link>
          <Link
            to="/work"
            className={current === "work" ? styles[current] : null}
          >
            <p>
              <span>#</span>works
            </p>
          </Link>
          <Link
            to="/about"
            className={current === "about" ? styles[current] : null}
          >
            <p>
              <span>#</span>about-me
            </p>
          </Link>
          <Link
            to="/contact"
            className={current === "contact" ? styles[current] : null}
          >
            <p>
              <span>#</span>contact
            </p>
          </Link>
          {/* <button>
            <p>EN</p>
            <img src={ChevronDown} alt="" />
          </button> */}
        </nav>
      </header>
    </div>
  );
}
