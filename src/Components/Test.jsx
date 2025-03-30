import { Link } from 'react-scroll'
import styles from './test.module.css'

const Test = () => {
    return (
        <>  
            <nav className={styles.nav}>
                <h2 className={styles.menu}><Link activeClass={styles.activeLink} to='section1' spy={true} smooth={true} offset={0} duration={500}>Seção 1</Link></h2>
                <h2 className={styles.menu}><Link activeClass={styles.activeLink} to='section2' spy={true} smooth={true} offset={0} duration={500}>Seção 2</Link></h2>
                <h2 className={styles.menu}><Link activeClass={styles.activeLink} to='section3' spy={true} smooth={true} offset={0} duration={500}>Seção 3</Link></h2>
            </nav>
            <div className={styles.sections}>
            <section id="section1" className={styles.section}>
                    <p>Conteúdo da Seção 1</p>
                </section>
                <section id="section2" className={styles.section}>
                    <p>Conteúdo da Seção 2</p>
                </section>
                <section id="section3" className={styles.section}>
                    <p>Conteúdo da Seção 3</p>
                </section>
            </div>
        </>
    )
}

export default Test