import styles from './Conhecimento.module.css'
import ContainerConhecimento from '../../components/CardConhecimento/ContainerConhecimento.jsx';
import { Element } from 'react-scroll';

//Icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";
import { DiPostgresql } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { FaJava } from "react-icons/fa";



export default function Conhecimento() {
    return (
        <Element name='section-conhecimentos'>
            <section className={styles.sectionConhecimento}>
                <div className={styles.tittleConhecimento}>
                    <h2>Conhecimentos</h2>
                    <h3>Confira meus conhecimentos</h3>
                </div>
                <div className={styles.conhecimentos}>
                    <ContainerConhecimento
                        imgTec={<FaHtml5 size={62} color={'var(--detailsColor)'} />}
                        tecnologia='HTML5'
                    />

                    <ContainerConhecimento
                        imgTec={<FaCss3 size={62} color={'var(--detailsColor)'} />}
                        tecnologia='CSS3'
                    />

                    <ContainerConhecimento
                        imgTec={<IoLogoJavascript size={62} color={'var(--detailsColor)'} />}
                        tecnologia='JavaScript'
                    />

                    <ContainerConhecimento
                        imgTec={<FaNodeJs size={62} color={'var(--detailsColor)'} />}
                        tecnologia='NodeJS'
                    />

                    <ContainerConhecimento
                        imgTec={<RiReactjsFill size={62} color={'var(--detailsColor)'} />}
                        tecnologia='ReactJS'
                    />

                    <ContainerConhecimento
                        imgTec={<FaGitAlt size={62} color={'var(--detailsColor)'} />}
                        tecnologia='Git'
                    />

                    <ContainerConhecimento
                        imgTec={<FaGithub size={62} color={'var(--detailsColor)'} />}
                        tecnologia='GitHub'
                    />

                    <ContainerConhecimento
                        imgTec={<IoIosGitBranch size={62} color={'var(--detailsColor)'} />}
                        tecnologia='GitFlow'
                    />

                    <ContainerConhecimento
                        imgTec={<DiPostgresql size={62} color={'var(--detailsColor)'} />}
                        tecnologia='PostgreSQL'
                    />

                    <ContainerConhecimento
                        imgTec={<GrMysql size={62} color={'var(--detailsColor)'} />}
                        tecnologia='MySQL'
                    />

                    <ContainerConhecimento
                        imgTec={<FaJava size={62} color={'var(--detailsColor)'} />}
                        tecnologia='Java'
                    />
                </div>
            </section>
        </Element>
    );
}
