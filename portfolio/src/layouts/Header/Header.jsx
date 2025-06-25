import { useState } from 'react';

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
                        <li><a href="#">Home</a></li>
                        <li><a href="#aboutme">Sobre</a></li>
                        <li><a href="#conhecimento">Conhecimentos</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                        <li><a href="#contato">Contato</a></li>
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
