import { AboutMe, Skills } from "../../components";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <AboutMe
        aboutOutside />
      <Skills />
    </div>
  );
}
