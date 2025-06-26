import { Link } from 'react-scroll';
import styles from './Menu.module.css';

import { IoMdClose } from "react-icons/io";

export default function Menu({ toggleFunction, statusMenu }) {
    return (
        <div className={`${statusMenu ? styles.statusAtivo : styles.statusInativo} ${styles.menu}`}>
            <IoMdClose
                className={styles.menuIcon}
                onClick={toggleFunction}
                color='var(--textColor)'
            />
            <nav className={styles.mobile}>
                <ul className={styles.mobileLinks}>
                    <li>
                        <Link
                            className={styles.link}
                            to='section-aboutMe'
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.link}
                            to='section-aboutMe'
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.link}
                            to='section-conhecimentos'
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            Conhecimentos
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.link}
                            to='section-projetos'
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            Projetos
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.link}
                            to='section-contato'
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            Contato
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
