import styles from './home.module.css'
import hosting from '../public/assets/hosting.png'
import webDev from '../public/assets/dev_web.png'
import profile from '../public/assets/profile.jpeg'
import download from '../public/assets/download.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import {Navigation, Pagination} from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Home = () => {

    const handleDownload = () => {
        window.open("https://drive.google.com/file/d/1UTFUkEpclkOCvHn0LSHHidV3T2pnx0p4/view?usp=drive_link", "_blank");
    }

    return(
        <>
            <nav className={styles.nav}>
            <div className={styles.titleNameContainter}>
                    <h1 className={styles.titleName}>Janderson Oliveira</h1>
                </div>
                <div className={styles.menuContainer}>
                <h1 className={styles.menu}>Home</h1>
                <h1 className={styles.menu}>Sobre Mim</h1>
                <h1 className={styles.menu}>Projetos</h1>
                <h1 className={styles.menu}>Contatos</h1>
                </div>
            </nav>
            <section className={styles.presentationSection}>
                <div className={styles.presentationContainer}>
                    <h1 className={styles.presentationContent}>Olá<span className={styles.colorChange}>,</span></h1>
                    <h3 className={styles.presentationContentName}>Me chamo Janderson</h3>
                    <h1 className={styles.presentationContent}>Desenvolvedor Front<span className={styles.colorChange}>-</span>End</h1>
                    <div className={styles.buttonContainer}>
                        <button className={styles.newJob}>Tem um projeto para mim?</button>
                        <button className={styles.myResume} onClick={handleDownload}>Meu Currículo <img className={styles.downloadImg} src={download} /></button>
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
            <section className={styles.projectSection}>
                <div className={styles.projectContainer}>
                    <h1 className={styles.projectSectionTitle}>Projetos</h1>
                    <div className={styles.projectContent}>
                    </div>
                </div>
            </section>
            <section className={styles.aboutSection}>
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