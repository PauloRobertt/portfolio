import styles from './CardProjetos.module.css';
import { useState, useEffect } from 'react';

import { MdMonitor } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

export default function ContainerProjetos({ imgProject, descriptionImg, titleProject, tecnologias, linkSite, linkGitHub, descriptionProject }) {

    const [statusProject, setStatusProject] = useState(false);

    function openAndCloseProject() {
        setStatusProject((prev) => !prev);
    }

    return (
        <div className={styles.containerProject}>
            <figure className={styles.projectImage}>
                <img src={imgProject} alt={descriptionImg} />
                <div onClick={openAndCloseProject} className={styles.titleProject}>
                    <MdMonitor className={styles.iconCardProject} color='var(--textColor)' />
                    <h2>{titleProject}</h2>
                </div>
            </figure>
            <div className={`${styles.contentContainer} ${statusProject ? styles.open : styles.close}`}>
                <div className={styles.projectContent}>
                    <IoMdClose className={styles.closeButton} cursor='pointer' color='var(--textColor)' onClick={openAndCloseProject} />
                    <div className={styles.contentWrapper}>
                        <figure className={styles.contentFigure}>
                            <img src={imgProject} alt={descriptionImg} />
                        </figure>
                        <div className={styles.contentDetails}>
                            <div className={styles.topoProjeto}>
                                <div className={styles.title}>
                                    <MdMonitor className={styles.iconCardProject} color='var(--textColor)' />
                                    <h1>{titleProject}</h1>
                                </div>
                                <div className={styles.redirecionamento}>
                                    <a href={linkSite} target="_blank" rel="noopener noreferrer">
                                        <AiOutlineExport cursor='pointer' className={styles.iconCardProject} color='var(--textColor)' />
                                    </a>
                                    <a href={linkGitHub} target="_blank" rel="noopener noreferrer">
                                        <FaGithub cursor='pointer' className={styles.iconCardProject} color='var(--textColor)' />
                                    </a>
                                </div>
                            </div>
                            <p className={styles.descriptionProject}>{descriptionProject}</p>
                            <div className={styles.containerTecnologias}>
                                <h3>Tecnologias: </h3>
                                <div className={styles.contentTecnologias}>
                                    {tecnologias.map((value, index) => (
                                        <div key={index} className={styles.tecnologia}>
                                            {value}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
