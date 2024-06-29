import styles from '../styles/header.module.css';
const Header = () => {
        return (
                <header className={styles.header}>
                        <h1 className={styles.h1}>Gavin Osborne</h1>
                        <ul className={styles.ul}>

                                <li>
                                        <a href="/">Home</a>
                                </li>
                                <li>
                                        <a href="/about">About</a>
                                </li>
                                <li>
                                        <a href="/projects">Projects</a>
                                </li>
                                <li>
                                        <a href="/contacts">Contact</a>
                                </li>
                        </ul>
                </header>
        );
};

export default Header;
