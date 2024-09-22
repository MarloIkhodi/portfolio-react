import { Header, Aside } from "../../components";
import styles from "./works.module.css";

export default function Works() {
  return (
    <div className={styles.projectsContainer}>
      <Header works={"Page"} />
      <Aside />
    </div>
  );
}
