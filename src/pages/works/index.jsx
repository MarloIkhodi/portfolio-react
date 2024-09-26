import { Projects } from "../../components";
import styles from "./works.module.css";

export default function Works() {
  return <div className={styles.worksContainer}>
    <Projects showAllProjects />
  </div>;
}
