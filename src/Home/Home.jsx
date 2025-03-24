import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import styles from './home.module.css'
import hosting from '../public/assets/hosting.png'
import webDev from '../public/assets/dev_web.png'
import profile from '../public/assets/profile.jpeg'
import download from '../public/assets/download.png'
import Carousel from './Carousel'

const Home = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    const handleDownload = () => {
        window.open("https://drive.google.com/file/d/1UTFUkEpclkOCvHn0LSHHidV3T2pnx0p4/view?usp=drive_link", "_blank")
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <>
            <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
                <div className={styles.titleNameContainter}>
                    <h1 className={styles.titleName}>Janderson Oliveira</h1>
                </div>
                <div className={styles.menuContainer}>
                    <h2 className={styles.menu}><Link activeClass={styles.activeLink} to='home' spy={true} smooth={true} offset={-100} duration={500}>Início</Link></h2>
                    <h2 className={styles.menu}><Link activeClass={styles.activeLink} to='projects' spy={true} smooth={true} offset={-30} duration={500}>Projetos</Link></h2>
                    <h2 className={styles.menu}><Link activeClass={styles.activeLink} to='about-me' spy={true} smooth={true} offset={-30} duration={500}>Sobre Mim</Link></h2>
                    <h2 className={styles.menu}><Link activeClass={styles.activeLink} to='contact-me' spy={true} smooth={true} offset={-30} duration={500}>Contatos</Link></h2>
                </div>
            </nav>
            <section className={styles.presentationSection} id='home'>
                <div className={styles.presentationContainer}>
                    <h1 className={styles.presentationContent}>Olá<span className={styles.colorChange}>,</span></h1>
                    <h3 className={styles.presentationContentName}>Me chamo Janderson</h3>
                    <h1 className={styles.presentationContent}>Desenvolvedor Front<span className={styles.colorChange}>-</span>End</h1>
                    <div className={styles.buttonContainer}>
                        <button className={styles.myResume} style={{borderRadius:'50%'}}>
                            <a href='https://github.com/jandersonpacheco' target='_blank' style={{color:'#fff', textDecoration:'none'}}>
                                <img style={{maxWidth:'2.5vh'} } src='https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png'/>
                            </a>
                        </button>
                        <button className={styles.myResume} style={{borderRadius:'50'}}>
                            <a href='http://www.linkedin.com/in/janderson-oliveira-pacheco-749ab9141' target='_blank' style={{color:'#fff', textDecoration:'none'}}>
                            <img style={{maxWidth:'2.5vh', borderRadius:'50%'} } src='https://i.pinimg.com/736x/17/36/fa/1736fa4a3cc0444c3e9d742d1a070a47.jpg'/>
                            </a>
                        </button>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.newJob}>Tem um projeto para mim?</button>
                        <button className={styles.myResume} onClick={handleDownload}>Meu Currículo
                            <img className={styles.downloadImg} src={download} />
                        </button>
                    </div>
                </div>
                <div>
                    <img className={styles.profileImg} src={profile} />
                </div>
            </section>
            <section className={styles.techPresentationSection}>
                <div className={styles.techPresentationContainer}>
                    <h1 className={styles.techPresentationContent}>HTML</h1>
                    <h1 className={styles.techPresentationContent}>CSS</h1>
                    <h1 className={styles.techPresentationContent}>TAILWIND</h1>
                    <h1 className={styles.techPresentationContent}>JAVASCRIPT</h1>
                    <h1 className={styles.techPresentationContent}>REACT</h1>
                    <h1 className={styles.techPresentationContent}>GIT</h1>
                    <h1 className={styles.techPresentationContent}>GITHUB</h1>
                </div>
            </section>
            <section className={styles.projectSection} id='projects'>
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
                                <button className={styles.externalLink}>
                                    <a href='https://tvshow-social-media.vercel.app/' target='_blank' style={{color:'#fff', textDecoration:'none'}}>Ir para Projeto</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.aboutSection} id='about-me'>
                <div className={styles.competenseContainer}>
                    <div className={styles.compentenseContent}>
                        <img className={styles.compentenseImg} src={webDev} />
                        <h2 className={styles.compentenseTitle}>Desenvolvimento de Website</h2>
                    </div>
                    <div className={styles.compentenseContent}>
                        <img className={styles.compentenseImg} src={hosting} alt='hosting image' />
                        <h2 className={styles.compentenseTitle}>Hospedagem de Website</h2>
                    </div>
                </div>
                <div className={styles.aboutMeContainer}>
                    <h1 className={styles.aboutMeTitle}>Sobre Mim</h1>
                    <p className={styles.aboutMeContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae praesentium provident aliquam eaque at fugiat! Ut nulla sequi, adipisci quae necessitatibus, delectus vitae dolorum nobis perspiciatis incidunt quisquam nostrum! Voluptate.</p>
                </div>
            </section>
        </>
    )
}

export default Home