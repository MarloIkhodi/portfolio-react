import styles from "./footer.module.css";
import { Github, Linkedin, Discord, Logotype } from "../../assets/images";

export default function Footer() {
  return (
    <div className={styles.portfolioContainer}>
      <footer className={styles.footerContainer}>
        <section className={styles.footerSectionTop}>
          <section>
            <div>
              <p>
                <img src={Logotype} alt="Logotype" />&nbsp;Marlo
              </p>
              <p>deivid.serafim03@gmail.com</p>
            </div>
            <p>Web designer and front-end developer</p>
          </section>
          <section>
            <p>Socials</p>
            <div>
              <a
                href="https://www.linkedin.com/in/deivid-marlon/"
                target="_blank"
              >
                <img src={Linkedin} alt="Linkedin" />
              </a>
              <a href="https://github.com/MarloIkhodi" target="_blank">
                <img src={Github} alt="Github" />
              </a>
              <a href="https://discord.com/users/marlonekk" target="_blank">
                <img src={Discord} alt="Discord" />
              </a>
            </div>
          </section>
        </section>
        <section className={styles.footerSectionBot}>
          <p>© Copyright 2024. Made by Marlo</p>
        </section>
      </footer>
    </div>
  );
}
