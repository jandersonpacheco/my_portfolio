import Carousel from './Carousel'
import styles from './projects.module.css'

const Projects = () => {
    return(
        <>
                <div className={styles.projectContainer}>
                    <h1 className={styles.projectSectionTitle}>Projetos</h1>
                    <h1 className={styles.projectName}>Rastreador de Séries</h1>
                    <div className={styles.projectContent}>
                        <div className={styles.projectSlider}>
                            <Carousel />
                        </div>
                        <div className={styles.projectSlider}>
                            <p className={styles.projectDescription}>Criado com o intuíto de ser um buscador de séries.</p>
                            <h2 className={styles.highlightTitle}>Destaques:</h2>
                            <ul className={styles.highlightContainer}>
                                <li className={styles.highlight}>🌟 Exploração de séries: Lista todas as séries existentes.</li>
                                <li className={styles.highlight}>📈 Rankings: Séries mais populares, mais vistas e melhores avaliadas.</li>
                                <li className={styles.highlight}>🎬 Detalhes completos: Informações sobre séries, episódios e trailers.</li>
                                <li className={styles.highlight}>🔐 SSO (Single Sign-On): Login rápido com Google.</li>
                            </ul>
                            <p className={styles.projectDetail}>Tecnologias utilizadas<span className={styles.techVariation}>: JavaScript, React, APIs REST e Zustand </span></p>
                            <div className={styles.externalLinkContainer}>
                                <button className={styles.externalLink} >
                                    <a href='https://github.com/jandersonpacheco/tvshow_social_media.git' target='_blank' style={{color:'#fff', textDecoration:'none'}}>Ir para GitHub</a>
                                </button>
                                <button className={styles.externalLink} style={{marginLeft:'1px'}}>
                                    <a href='https://tvshow-social-media.vercel.app/' target='_blank' style={{color:'#fff', textDecoration:'none'}}>Ir para Projeto</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Projects