import styles from "./footer.module.css";
import { Github, Linkedin, Discord, Logotype } from "../../assets/images";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <footer>
        <div>
          <div>
            <div>
              <p>
                <img src={Logotype} alt="Logotype" /> Marlo
              </p>
              <p>deivid.serafim03@gmail.com</p>
            </div>
            <div>
              <p>Web designer and front-end developer</p>
            </div>
          </div>
          <div>
            <p>Socials</p>
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
        </div>
        <div>
          <p>© Copyright 2024. Made by Marlo</p>
        </div>
      </footer>
    </div>
  );
}
