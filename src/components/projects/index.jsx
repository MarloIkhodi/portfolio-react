import { SiteImageOne, SiteImageTwo, SiteImageThree, SiteImageFour } from "../../assets/images";
import { Link } from "react-router-dom";
import styles from "./projects.module.css"

const openLink = (url) => window.open(url, "_blank")

export default function Projects({ completeApps = false, showAllProjects = false }) {

    const projects = [
        {
            title: "SupportVPN",
            description: "Landing Page for SupportVPN",
            technologies: "HTML CSS React",
            liveUrl: "https://support-vpn-dun.vercel.app/",
            gitHubUrl: "https://github.com/MarloIkhodi/support-vpn",
            image: SiteImageOne,
        }, {
            title: "Portfolio",
            description: "You're using it right now",
            technologies: "HTML CSS React",
            liveUrl: "",
            gitHubUrl: "https://github.com/MarloIkhodi/portfolio-react",
            image: SiteImageTwo,
        },
        {
            title: "Relume",
            description: "Landing Page based in Relume",
            technologies: "HTML CSS React",
            liveUrl: "https://react-course-psi-eight.vercel.app/",
            gitHubUrl: "https://github.com/MarloIkhodi/react-course",
            image: SiteImageThree,
        }, {
            title: "Android Curiosity",
            description: "Android history page",
            technologies: "HTML CSS",
            liveUrl: "https://html-css-five-pi.vercel.app/",
            gitHubUrl: "https://github.com/MarloIkhodi/html-css",
            image: SiteImageFour,
        },
    ]

    const visibleProjects = showAllProjects ? projects : projects.slice(0, 3)

    return (
        <div className={styles.portfolioContainer}>
            <section>
                {completeApps ? (<>
                    <div className={styles.projects}>
                        <h3>
                            <span>/</span>projects
                        </h3>
                        <p>List of my projects</p>
                    </div>
                    <div className={styles.completeappsContainer}>
                        <h3>
                            <span>#</span>complete-sites
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
                            <p>View all ~~&gt;</p>
                        </Link>
                    </div>
                )}
                <div className={styles.projectsBox}>
                    {visibleProjects.map(({ title, description, technologies, liveUrl, gitHubUrl, image }, index) => (
                        <div key={title} className={styles.projectItem}>
                            <div className={styles.topText}>
                                <img src={image} alt={`Screenshot of ${title} project`} />
                                <p>{technologies}</p>
                            </div>
                            <div className={styles.bottomText}>
                                <h4>{title}</h4>
                                <p>{description}</p>
                                <div>
                                    {liveUrl && (
                                        <button onClick={() => openLink(liveUrl)}>
                                            <p>Live&lt;~&gt;</p>
                                        </button>
                                    )}
                                    {gitHubUrl && (
                                        <button className={styles.gitHubButton} onClick={() => openLink(gitHubUrl)}>
                                            <p>GitHub &gt;=</p>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}