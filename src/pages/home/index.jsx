import { Hero, Quote, AboutMe, Projects } from "../../components";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Hero />
      <Quote />
      {/* <AboutMe
        aboutInside
        button />
      <Projects /> */}
    </div>
  );
}
