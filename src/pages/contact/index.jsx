import { Contacts } from "../../components";
import styles from "./contact.module.css";

export default function Contact() {
  return <div className={styles.contactContainer}>
    <Contacts ContactsPage />
  </div>;
}
