import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://www.facebook.com/profile.php?id=100069248314263" target="_blank">
                        <FaFacebook />
                    </a>
                </li>
                <li>
                <a href="https://www.instagram.com/fernandocaiires/" target="_blank">
                        <FaInstagram />
                    </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/fernandocaires15/" target="_blank">
                        <FaLinkedin />
                    </a>
                </li>
            </ul>
            <p className={styles.copy_right}><span >Costs</span> &copy; 2023</p>
        </footer>
    )
}

export default Footer