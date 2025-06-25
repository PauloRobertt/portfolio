import styles from './Contato.module.css';
import { Element } from 'react-scroll';

import CardContato from '../../components/CardContato/CardContato.jsx';

import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contato() {
    return (
        <Element name='section-contato'>
            <section className={styles.sectionContato}>
                <div className={styles.tittleContato}>
                    <h2>Contato</h2>
                    <h3>Entre em contato comigo!</h3>
                </div>
                <div className={styles.containerContato}>
                    <CardContato
                        icon={<MdOutlineEmail size={45} color='var(--textColor)' />}
                        text='E-Mail'
                    />

                    <CardContato
                        icon={<MdOutlineLocalPhone size={45} color='var(--textColor)' />}
                        text='Telefone'
                    />

                    <CardContato
                        icon={<FaLinkedin size={45} color='var(--textColor)' />}
                        text='Linkedin'
                    />

                    <CardContato
                        icon={<FaGithub size={45} color='var(--textColor)' />}
                        text='GitHub'
                    />
                </div>
            </section>
        </Element>
    );
}
