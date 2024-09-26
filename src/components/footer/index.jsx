import styles from "./footer.module.css";
import { Github, Linkedin, Logotype } from "../../assets/images";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerSectionTop}>
        <div>
          <div>
            <p>
              <img src={Logotype} alt="Logotype" />&nbsp;Marlo
            </p>
            <p>deivid.serafim03@gmail.com</p>
          </div>
          <p>Web designer and front-end developer</p>
        </div>
        <div>
          <p>Socials</p>
          <div>
            <a
              href="https://www.linkedin.com/in/deivid-marlon/" target="_blank">
              <img src={Linkedin} alt="Linkedin" />
            </a>
            <a href="https://github.com/MarloIkhodi" target="_blank">
              <img src={Github} alt="Github" />
            </a>
          </div>
        </div>
      </div>
      <p className={styles.footerSectionBot}>© Copyright 2024. Made by Marlo</p>
    </footer>
  );
}
