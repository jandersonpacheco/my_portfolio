import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-scroll'
import styles from './presentation.module.css'
import profile from '../assets/profile.jpeg'
import download from '../assets/download.png'
import Projects from './Projetcs.jsx'
import AboutAndContact from './AboutAndContact.jsx'

const Apresentation = () => {
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
                <div className={styles.profileContainer}>
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
                <Projects />
            </section>
            <section className={styles.aboutSection} id='about-me'>
                <AboutAndContact />
            </section>
        </>
    )
}

export default Apresentation