import styles from "./App.module.css";
import LogoDefault from "./assets/images/logotype.svg";
import Chevrondown from "./assets/images/chevron-down.svg";

export default function App() {
  return (
    <div className={styles.portfolioContainer}>
      <header className={styles.headerContainer}>
        <div className={styles.headerTitle}>
          <img src={LogoDefault} alt="Logotype" />
          <p>Elias</p>
        </div>
        <nav>
          <a href="#">#home</a>
          <a href="#">#works</a>
          <a href="#">#about-me</a>
          <a href="#">#contact</a>
          <button>
            EN
            <img src={Chevrondown} alt="" />
          </button>
        </nav>
      </header>
    </div>
  );
}
