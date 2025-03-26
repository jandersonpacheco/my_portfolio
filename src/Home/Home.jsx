import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import styles from './home.module.css'
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
                    <h2 className={styles.menu}><Link activeClass={styles.activeLink} to='about-me' spy={true} smooth={true} offset={-30} duration={500}>Sobre Mim / Contato</Link></h2>
                </div>
            </nav>
            <section className={styles.presentationSection} id='home'>
                <div className={styles.presentationContainer}>
                    <h1 className={styles.presentationContent}>Olá<span className={styles.colorChange}>,</span></h1>
                    <h3 className={styles.presentationContentName}>Me chamo Janderson</h3>
                    <h1 className={styles.presentationContent}>Desenvolvedor Front<span className={styles.colorChange}>-</span>End</h1>
                    <div className={styles.buttonContainer}>
                        <button className={styles.newJob}>Tem um projeto para mim?</button>
                        <button className={styles.myResume} onClick={handleDownload}>Meu Currículo
                            <img className={styles.downloadImg} src={download} />
                        </button>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.myResume} style={{border:'none'}}>
                            <a href='https://github.com/jandersonpacheco' target='_blank' style={{color:'#fff', textDecoration:'none'}}>
                                <img style={{maxWidth:'4vh'} } src='https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png'/>
                            </a>
                        </button>
                        <button className={styles.myResume} style={{border:'none'}}>
                            <a href='http://www.linkedin.com/in/janderson-oliveira-pacheco-749ab9141' target='_blank' style={{color:'#fff', textDecoration:'none'}}>
                            <img style={{maxWidth:'4vh', borderRadius:'50%'} } src='https://i.pinimg.com/736x/17/36/fa/1736fa4a3cc0444c3e9d742d1a070a47.jpg'/>
                            </a>
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
                                <button className={styles.externalLink} style={{marginLeft:'1px'}}>
                                    <a href='https://tvshow-social-media.vercel.app/' target='_blank' style={{color:'#fff', textDecoration:'none'}}>Ir para Projeto</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.aboutSection} id='about-me'>
            <div className={styles.aboutMeContainer}>
                    <h1 className={styles.aboutMeTitle}>Sobre Mim</h1>
                    <p className={styles.aboutMeContent}>
                        Meu nome é Janderson e sou um programador frontend apaixonado por tecnologia e inovação. Atualmente, estou no penúltimo semestre de Análise e Desenvolvimento de Sistemas e busco constantemente aprimorar minhas habilidades e aprender novas tecnologias para me tornar um desenvolvedor mais completo.
                    </p>
                    <p className={styles.aboutMeContent}>
                        Tenho uma grande paixão por React, onde tenho trabalhado no desenvolvimento de interfaces dinâmicas e eficientes, sempre focado em criar soluções que melhorem a experiência do usuário. Acredito que a tecnologia tem o poder de resolver problemas diários e de transformar ideias em realidade.
                    </p>
                    <p className={styles.aboutMeContent}>
                    Estou sempre em busca de novos desafios que me permitam crescer profissionalmente e contribuir com soluções criativas e funcionais para as necessidades de cada projeto. Se você está em busca de um desenvolvedor dedicado e em constante evolução, ficarei feliz em conectar e explorar novas oportunidades!
                    </p>
                </div>
                <form className={styles.formContainer} onClick={(e) => e.preventDefault()}>
                        <h1 className={styles.aboutMeTitle}>Fale comigo</h1>
                        <div className={styles.formContainer}>
                            <label htmlFor='name' className={styles.formText}>Nome</label>
                            <input type='text' id='name' className={styles.formInput} placeholder='Digite seu nome' autoComplete='off' />
                            <label htmlFor='email' className={styles.formText}>Email</label>
                            <input type='email' id='email' className={styles.formInput} placeholder='Digite seu email' autoComplete='off' />
                            <label htmlFor='message' className={styles.formText}>Mensagem</label>
                            <textarea id='message' className={styles.formMessagetextarea} placeholder='Digite sua mensagem' autoComplete='off' ></textarea>
                            <button className={styles.formButton}>Enviar</button>
                        </div>
                    </form>
            </section>
        </>
    )
}

export default Home