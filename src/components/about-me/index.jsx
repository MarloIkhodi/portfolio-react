import { useNavigate } from "react-router-dom";
import styles from "./aboutme.module.css";
import { HandFace } from "../../assets/images";

export default function AboutMe({
    aboutInside = false,
    aboutOutside = false,
    button = false,
}) {
    const navigate = useNavigate();
    const buttonClick = () => {
        window.scrollTo(0, 0);
        navigate("/about");
    };
    return (
        <div className={styles.portfolioContainer}>
            {aboutOutside ? (
                <section className={styles.aboutOutside}>
                    <h3>
                        <span>/</span>about-me
                    </h3>
                    <p>Who am i?</p>
                </section>
            ) : null}
            <section className={styles.aboutContainer}>
                <main className={styles.mainContainer}>
                    {aboutInside ? (
                        <div>
                            <h3>
                                <span>#</span>about-me
                            </h3>
                            <div className={styles.aboutLine}></div>
                        </div>
                    ) : (
                        <div className={styles.aboutOff}></div>
                    )}
                    <p>Hello there! You can call me Marlo <span>🐻</span>
                    </p>
                    <p>
                        I'm a front-end developer in training based in São Paulo, Brazil. I
                        specialize in creating responsive websites from scratch, elevating
                        them into modern, user-friendly web experiences.
                    </p>
                    <p>
                        Transforming my creativity and knowledge into websites has been my
                        passion for over six months. As I train and study, I continually
                        seek to learn about the latest technologies and frameworks.
                    </p>
                    {button ? (
                        <div className={styles.buttonContainer}>
                            <button onClick={buttonClick}>
                                <p>Read more -&gt;</p>
                            </button>
                        </div>
                    ) : (
                        <div className={styles.buttonOff}></div>
                    )}
                </main>
                <img src={HandFace} alt="Men with hand on his face" />
            </section>
        </div>
    );
}
