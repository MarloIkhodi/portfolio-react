import { Hero, Quote, AboutMe, Projects, Contacts, Skills } from "../../components";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Hero />
      <Quote />
      <Projects />
      <Skills homeSkills />
      <AboutMe
        button />
      <Contacts />
    </div>
  );
}
