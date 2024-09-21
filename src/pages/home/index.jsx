import { Header, Aside, Hero } from "../../components";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Aside />
      <Header />
      <Hero />
    </div>
  );
}
