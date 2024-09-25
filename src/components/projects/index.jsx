import { SiteImageTwo, SiteImageOne, SiteImageThree, SiteImageFour, } from "../../assets/images";
import styles from "./projects.module.css";
import { Link } from "react-router-dom";

export default function Projects({ completeapps = false, showAll = false }) {
    return (
        <div className={styles.portfolioContainer}>
            <section>
                {completeapps ? (<>
                    <div className={styles.projects}>
                        <h3>
                            <span>/</span>projects
                        </h3>
                        <p>List of my projects</p>
                    </div>
                    <div className={styles.completeappsContainer}>
                        <h3>
                            <span>#</span>complete-apps
                        </h3>
                    </div>
                </>
                ) : (
                    <div className={styles.projectsContainer}>
                        <div>
                            <h3>
                                <span>#</span>projects
                            </h3>
                            <div className={styles.projectsLine}></div>
                        </div>
                        <Link to="/work" onClick={() => window.scrollTo(0, 0)}>
                            {" "}
                            <p>View all ~~&gt;</p>
                        </Link>
                    </div>
                )}
                <div className={styles.projectsBox}>
                    <div className={styles.supportVPN}>
                        <div className={styles.topText}>
                            <img src={SiteImageTwo} alt="Site Image" />
                            <p>HTML&nbsp;CSS&nbsp;React</p>
                        </div>
                        <div className={styles.bottomText}>
                            <h4>SupportVPN</h4>
                            <p>Landing Page for SupportVPN</p>
                            <div>
                                <div>
                                    <button onClick={() => window.open('https://support-vpn-dun.vercel.app/', '_blank')}>
                                        <p>Live&lt;~&gt;</p>
                                    </button>
                                </div>
                                <div>
                                    <button className={styles.gitHubButton} onClick={() => window.open('https://github.com/MarloIkhodi/support-vpn', '_blank')}>
                                        <p>GitHub &gt;=</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.portfolio}>
                        <div className={styles.topText}>
                            <img src={SiteImageFour} alt="Site Image" />
                            <p>HTML&nbsp;CSS&nbsp;React</p>
                        </div>
                        <div className={styles.bottomText}>
                            <h4>Portfolio</h4>
                            <p>You're using it right now</p>
                            <div>
                                {/* <div>
                                    <button onClick={() => window.open('https://portfolio-react-two-ecru.vercel.app/', '_blank')}>
                                        <p>Live&lt;~&gt;</p>
                                    </button>
                                </div> */}
                                <div>
                                    <button className={styles.gitHubButton} onClick={() => window.open('https://github.com/MarloIkhodi/portfolio-react', '_blank')}>
                                        <p>GitHub &gt;=</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.relume}>
                        <div className={styles.topText}>
                            <img src={SiteImageOne} alt="Site Image" />
                            <p>HTML&nbsp;CSS&nbsp;React</p>
                        </div>
                        <div className={styles.bottomText}>
                            <h4>Relume</h4>
                            <p>Landing Page based in Relume</p>
                            <div>
                                <div>
                                    <button onClick={() => window.open('https://react-course-psi-eight.vercel.app/', '_blank')}>
                                        <p>Live&lt;~&gt;</p>
                                    </button>
                                </div>
                                <div>
                                    <button className={styles.gitHubButton} onClick={() => window.open('https://github.com/MarloIkhodi/react-course', '_blank')}>
                                        <p>GitHub &gt;=</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {showAll ? <div className={styles.android}>
                        <div className={styles.topText}>
                            <img src={SiteImageThree} alt="Site Image" />
                            <p>HTML&nbsp;CSS</p>
                        </div>
                        <div className={styles.bottomText}>
                            <h4>Android Curiosity</h4>
                            <p>Android history page</p>
                            <div>
                                <div>
                                    <button onClick={() => window.open('https://html-css-five-pi.vercel.app/', '_blank')}>
                                        <p>Live&lt;~&gt;</p>
                                    </button>
                                </div>
                                <div>
                                    <button className={styles.gitHubButton} onClick={() => window.open('https://github.com/MarloIkhodi/html-css', '_blank')}>
                                        <p>GitHub &gt;=</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> : null}
                </div>
            </section>
        </div>
    );
}
