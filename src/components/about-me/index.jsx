import { useNavigate } from "react-router-dom";
import styles from "./aboutme.module.css";
import { HandFace } from "../../assets/images";

export default function AboutMe({ aboutOutside = false, button = false }) {
    const navigate = useNavigate();
    const buttonClick = () => {
        window.scrollTo(0, 0);
        navigate("/about");
    };
    return (
        <section className={styles.aboutContainer}>
            <main className={styles.mainContainer}>
                {aboutOutside ? (
                    <div className={styles.aboutMe}>
                        <h3>
                            <span>/</span>about-me
                        </h3>
                        <p>Who am i?</p>
                    </div>
                ) : (
                    <div className={styles.aboutHome}>
                        <h3><span>#</span>about-me</h3>
                        <div className={styles.aboutHomeLine}></div>
                    </div>
                )}
                <p>
                    Hello there! You can call me Marlo <span>🐻</span>
                </p>
                <p>
                    I'm a front-end developer in training based in São Paulo, Brazil. I
                    specialize in creating responsive websites from scratch, elevating
                    them into modern, user-friendly web experiences.
                </p>
                <p>
                    Transforming my creativity and knowledge into websites has been my
                    passion for over six months. As I train and study, I continually seek
                    to learn about the latest technologies and frameworks.
                </p>
                {button && (
                    <div>
                        <button onClick={buttonClick}>
                            <p>Read more -&gt;</p>
                        </button>
                    </div>
                )}
            </main>
            <img src={HandFace} alt="Men with hand on his face" />
        </section >
    );
}
