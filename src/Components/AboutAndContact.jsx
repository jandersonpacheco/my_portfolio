import styles from './aboutAndContact.module.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const AboutAndContact = () => {
        const form = useRef()

            const handleFormSubmit = (event) =>{
                event.preventDefault()
        
                emailjs
                    .sendForm('service_2yptnu9','template_cs3naam', form.current,{
                        publicKey: 'GMeEXPLnTEIZ7Jsnl'
                    })
                    .then(() =>{
                        console.log('Email enviado com sucesso!')
                        window.alert('Mensagem enviada com sucesso!')
                        form.current.reset()
                    })
                    .catch(() =>{
                        console.log('Erro ao enviar email!')
                    })
            }

    return(
        <>
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
            <form className={styles.formContainer} ref={form} onSubmit={handleFormSubmit}>
                <h1 className={styles.aboutMeTitle}>Fale comigo</h1>
                <div className={styles.formContainer}>
                    <label htmlFor='name' className={styles.formText}>Nome</label>
                    <input type='text' id='name' name='name' className={styles.formInput} placeholder='Digite seu nome' autoComplete="new-password" required/>
                    <label htmlFor='email' className={styles.formText}>Email</label>
                    <input type='email' id='email' name='email' className={styles.formInput} placeholder='Digite seu email' autoComplete="off" required />
                    <label htmlFor='title' className={styles.formText}>Título</label>
                    <input type='text' id='title' name='title' className={styles.formInput} placeholder='Digite o assunto' autoComplete="off" required />
                    <label htmlFor='message' className={styles.formText}>Mensagem</label>
                    <textarea id='message' name='message' className={styles.formMessagetextarea} placeholder='Digite sua mensagem' autoComplete="off" required ></textarea>
                    <button className={styles.formButton} type='submit'>Enviar</button>
                </div>
            </form>
        </>
    )
}

export default AboutAndContact