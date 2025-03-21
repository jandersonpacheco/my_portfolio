import React from 'react';
import ScrollSpy from 'react-ui-scrollspy';
import styles from './testScrollSpy.module.css';

const TestScrollSpy = () => {
    return (
        <ScrollSpy
            items={['section1', 'section2', 'section3']}
            currentClassName={styles.active}
            offset={-100}
        >
            <nav className={styles.nav}>
                <h2 className={styles.menu} data-to-scrollspy-id="section1">Seção 1</h2>
                <h2 className={styles.menu} data-to-scrollspy-id="section2">Seção 2</h2>
                <h2 className={styles.menu} data-to-scrollspy-id="section3">Seção 3</h2>
            </nav>
            <div className={styles.sections}>
                <section id="section1" className={styles.section}>
                    <h1>Seção 1</h1>
                    <p>Conteúdo da Seção 1</p>
                </section>
                <section id="section2" className={styles.section}>
                    <h1>Seção 2</h1>
                    <p>Conteúdo da Seção 2</p>
                </section>
                <section id="section3" className={styles.section}>
                    <h1>Seção 3</h1>
                    <p>Conteúdo da Seção 3</p>
                </section>
            </div>
        </ScrollSpy>
    );
};

export default TestScrollSpy;