import styles from "./header.module.css";
import { Logotype } from "../../assets/images";
import { Link, useLocation } from "react-router-dom";
import { Aside } from "../index"

export default function Header() {
  const location = useLocation();
  // console.log(location.pathname);
  const current = location.pathname.replace(/\//g, "");
  return (
    <header className={styles.headerContainer}>
      <h1> <img src={Logotype} alt="Logotype" />Marlo, the front-end dev</h1>
      <nav className={styles.headerNav}>
        <Link to="/" className={current === "" ? styles.home : null}>
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
            <img src={} alt="" />
          </button> */}
      </nav>
      <Aside />
    </header>
  );
}
