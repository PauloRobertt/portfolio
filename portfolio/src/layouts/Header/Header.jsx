import { useState } from 'react';
import { Link } from 'react-scroll';

import Menu from '../Menu/Menu.jsx';
import styles from './Header.module.css';

import { IoMenu } from "react-icons/io5";

export default function Header() {
    const [statusMenu, setStatusMenu] = useState(false);

    function toggleMenu() {
        setStatusMenu((prev) => !prev);
    }

    return (
        <header>
            <span className={styles.spanHeader}>&lt;/&gt; Paulo Robert</span>
            <div className={styles.desktops}>
                <nav>
                    <ul className={styles.links}>
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
            <div className={styles.menuMobile}>
                <IoMenu
                    className={styles.menuIcon}
                    onClick={toggleMenu}
                    color='var(--textColor)'
                />
                <Menu
                    toggleFunction={toggleMenu}
                    statusMenu={statusMenu}
                />
            </div>
        </header>
    );
}
