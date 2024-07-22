import { FaThreads } from "react-icons/fa6";
import styles from "./Footer.module.css";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__title}>Movie App</h2>
                <p className={styles.footer__author}>Copy Right &copy; by Arya Isnaidi</p>
                <div className={styles.footer__social}>
                    <a href="https://github.com/aryanibos" target="_blank">
                        <FaGithub className={styles.footer__icon} />
                    </a>
                    <a href="https://linkedin.com/in/arya-isnaidi-09642021b/" target="_blank">
                        <FaLinkedin className={styles.footer__icon} />
                    </a>
                    <a href="https://instagram.com/aryaisnaidi_" target="_blank">
                        <FaInstagram className={styles.footer__icon} />
                    </a>
                    <a href="https://www.threads.net/@aryaisnaidi_?xmt=AQGzkDJ_ZoP2Jq7i0pkwDYNHeatHVl_aOjHwDpxmslYEseA" target="_blank">
                        <FaThreads className={styles.footer__icon} />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
