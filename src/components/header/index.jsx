import styles from "./header.module.css";
import { Logotype } from "../../assets/images";
import { Burger, Closeburger } from "../../assets/images";
import { Link, useLocation } from "react-router-dom";
import { Aside } from "../index";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  // console.log(location.pathname);
  const current = location.pathname.replace(/\//g, "");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className={styles.headerContainer}>
        <h1>
          <img src={Logotype} alt="Logotype" />
          Marlo<span>, the front-end dev</span>
        </h1>
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
        </nav>
        {/* Menu Responsivo */}
        <button className={styles.buttonMobile} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Closeburger /> : <Burger />}
        </button>
        <Aside />
      </header>
      {isOpen && (
        <nav className={styles.navMobile}>
          <Link to="/" onClick={() => setIsOpen(false)} className={current === "" ? styles.home : null}>
            <p>
              <span>#</span>home
            </p>
          </Link>
          <Link to="/work" onClick={() => setIsOpen(false)} className={current === "work" ? styles[current] : null}>
            <p>
              <span>#</span>works
            </p>
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className={current === "about" ? styles[current] : null}>
            <p>
              <span>#</span>about-me
            </p>
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={current === "contact" ? styles[current] : null}>
            <p>
              <span>#</span>contact
            </p>
          </Link>
        </nav>
      )}
    </>
  );
}
