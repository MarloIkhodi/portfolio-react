import { Header, Aside, Hero } from "../../components";
import styles from "./home.module.css";
import { BackgroundFull } from "../../assets/images";

export default function Home() {
  return (
    <body className={styles.homeContainer}>
      <Aside />
      <Header />
      <Hero />
    </body>
  );
}
