import styles from './Contact.module.css'

function Contact() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title_container}>
                Entre em contato
            </h1>
            <h3>Fernando de Caires Gonçalves</h3>
            <h5>fc.caires@hotmail.com</h5>
            <h5>(71)991357268</h5>
        </div>
    )
}

export default Contact