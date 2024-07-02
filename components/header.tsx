import styles from '../styles/header.module.css';
import Link from 'next/link';
const Header = () => {
        return (
                <nav className={styles.header}>
                        <div className={styles.links}>
                                <div className={styles.nameDiv}>
                                        <Link href="/" className={styles.nameText}> Gavin Osborne</Link>
                                </div>
                                <div className={styles.linkDiv}>
                                        <Link href="/about" className={styles.linkText}>About</Link>
                                        <Link href="/projects" className={styles.linkText}>Projects</Link>
                                        <Link href="/contact" className={styles.linkText}>Contact</Link>
                                </div>
                        </div>
                </nav>
        );
};

export default Header;
