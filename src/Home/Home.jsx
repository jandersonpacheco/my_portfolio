import styles from './home.module.css'
import hosting from '../public/assets/hosting.png'
import webDev from '../public/assets/dev_web.png'

const Home = () => {

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
                    <h1 className={styles.presentationContent}>Olá,</h1>
                    <h1 className={styles.presentationContent}>Me chamo Janderson</h1>
                    <h1 className={styles.presentationContent}>Desenvolvedor Front-End</h1>
                    <div className={styles.buttonContainer}>
                        <button className={styles.newJob}>Tem um projeto para mim?</button>
                        <button className={styles.myResume}>Meu Currículo</button>
                    </div>
                </div>
                <div>
                    <img className={styles.profileImg} src='https://cdn-sites-images.46graus.com/files/photos/c3daf66d/d75f6cc8-a29c-4179-aecd-5827c77ce948/gianini-15-512x768.jpg' />
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
            <section className={styles.projectSection}>
                <h1 className={styles.projectSectionTitle}>Projetos</h1>
                <div className={styles.projectContainer}>

                </div>
            </section>
        </>
    )
}

export default Home