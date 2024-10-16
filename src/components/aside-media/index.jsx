import styles from "./aside.module.css";
import { Github, Linkedin } from "../../assets/images";

export default function Aside() {
  return (
    <aside className={styles.asideMedia}>
      <div className={styles.asideLine}></div>
      <a href="https://github.com/MarloIkhodi" target="_blank">
        <img src={Github} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/deivid-marlon/" target="_blank">
        <img src={Linkedin} alt="" />
      </a>
    </aside>
  );
}
