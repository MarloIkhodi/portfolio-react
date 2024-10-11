import { SideSkills } from "../../assets/images";
import styles from "./skills.module.css";

export default function Skills({ homeSkills = false }) {
    return (
        <section className={styles.skillsContainer}>
            <div>
                <h3><span>#</span>skills</h3>
                {homeSkills && <div className={styles.skillsLine}></div>}
            </div>
            <div>
                {homeSkills && <img src={SideSkills} alt="Image of blocks to enhance the website" />}
                <div className={`${styles.cardsBox} ${homeSkills ? '' : styles.cardsSkills}`}>
                        <div>
                            <h4>Languages</h4>
                            <p>Javascript TypeScript Python Node</p>
                        </div>
                        <div>
                            <h4>Databases</h4>
                            <p>SQL MySQL </p>
                        </div>
                        <div>
                            <h4>Other</h4>
                            <p>HTML CSS Linux</p>
                        </div>
                        <div>
                            <h4>Tools</h4>
                            <p>VSCode Figma Git & Github</p>
                        </div>
                        <div>
                            <h4>Frameworks</h4>
                            <p>React NextJs</p>
                        </div>
                </div>
            </div>
        </section >)
}