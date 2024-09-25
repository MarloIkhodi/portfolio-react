import { Hero, Quote, About } from "../../components";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Hero />
      <Quote />
      <About />
    </div>
  );
}
