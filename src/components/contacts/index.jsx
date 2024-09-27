import styles from "./contacts.module.css";
import { Email, Discord } from "../../assets/images";

export default function Contacts({ ContactsPage = false }) {
    return <div className={styles.contactsContainer}>
        <div className={styles.leftContacts}>
            {ContactsPage ?
                <div className={styles.contactsPage}>
                    <h3><span>/</span>contacts</h3>
                    <p>Who am i?</p>
                </div>
                :
                <div className={styles.contactsHome}>
                    <h3><span>#</span>contacts</h3>
                    <div className={styles.contactsLine}></div>
                </div>}
            <p>I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me!</p>
        </div>
        <aside>
            <h4>Message me here</h4>
            <p><img src={Email} alt="Icon de Email" />deivid.serafim03@gmail.com</p>
            <p><img src={Discord} alt="Icon do Discord" />marlonekk</p>
        </aside>
    </div>;
}
