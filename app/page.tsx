import styles from '../styles/home.module.css';
import Image from 'next/image';
export default function Home() {
        return (
                <div className={styles.mainDiv}>
                        <div className={styles.introDiv}>
                                <span className={styles.title}>
                                        <p className={styles.introductionText}>Hello! My name is Gavin, a developer based out of Ontario, Canada.</p>
                                </span>
                                <span className={styles.textSpan}>
                                        <p className={styles.introText}>I am passionate about building mobile applications and designing websites that are user-friendly, responsive, and highly efficient. With a year of experience in mobile development through contract work with a small Canadian business, I have had the opportunity to lead a team of two other developers. Our app is scheduled for release on both Android and Apple OS platforms within the next few months.
                                        </p>
                                        <p className={styles.introText2}>
                                                I hold a college degree in Software Engineering, with a strong focus on mobile development and backend development. During my time in college, I completed an internship at a start-up called Payvill, where I gained valuable experience in both web and mobile development.
                                        </p>
                                </span>
                                <span className={styles.linkSpan}>
                                        <a className={styles.githubButton} href="https://github.com/Gavino41">GitHub</a>
                                        <a href="www.linkedin.com/in/gavin-osborne-mobile">LinkedIn</a>
                                </span>
                        </div>
                        <span className={styles.imageSpan}>
                                <Image src="/assets/images/profile.jpg" alt="Gavin" width={500} height={500} className={styles.profileImage} />
                        </span>



                </div>
        );
}
