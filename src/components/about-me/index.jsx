import styles from "./aboutme.module.css";
import { HandFace } from "../../assets/images";

export default function AboutMe({
    aboutInside = false,
    aboutOutside = false,
    button = false,
}) {
    return (
        <div className={styles.portifolioContainer}>
            {aboutOutside ? <section >
                <h3><span>/</span>about-me</h3>
                <p>Who am i?</p>
            </section> : null}
            <section>
                <main>
                    {aboutInside ? (
                        <div>
                            <h3>
                                <span>#</span>about-me
                            </h3>
                            <div className={styles.aboutLine}></div>
                        </div>
                    ) : null}
                    <p>Hello, i’m Marlo!</p>
                    <p>
                        I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
                        develop responsive websites from scratch and raise them into modern
                        user-friendly web experiences.
                    </p>
                    <p>
                        Transforming my creativity and knowledge into a websites has been my
                        passion for over a year. I have been helping various clients to
                        establish their presence online. I always strive to learn about the
                        newest technologies and frameworks.
                    </p>
                    {button ? (
                        <button>
                            <p>Read more -&gt;</p>
                        </button>
                    ) : null}
                </main>
                <img src={HandFace} alt="Men with hand on his face" />
            </section>
        </div>
    );
}
