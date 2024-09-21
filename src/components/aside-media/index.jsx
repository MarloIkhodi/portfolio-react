import styles from "./aside.module.css";
import { Figma, Github, Dribble } from "../../assets/images";

export default function Aside() {
  return (
    <div className={styles.asideMedia}>
      <div className={styles.line}></div>
      <a href="">
        <img src={Github} alt="" />
      </a>
      <a href="">
        <img src={Dribble} alt="" />
      </a>
      <a href="">
        <img src={Figma} alt="" />
      </a>
    </div>
  );
}
