'use client';

import styles from './Footer.module.css';
import { GithubIcon, LinkedinIcon, XIcon, EnvelopeIcon, PhoneIcon, WhatsappIcon, LocationIcon } from './icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Connect</h3>
          <ul className={styles.linkList}>
            <li>
              <a
                href="https://github.com/alwin-baby0"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <GithubIcon size={20} color="currentColor" />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alwinbabyofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <LinkedinIcon size={20} color="currentColor" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/alwinbaby1999"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <XIcon size={20} color="currentColor" />
                <span>X</span>
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Get in Touch</h3>
          <div className={styles.contactList}>
            <p className={styles.contactInfo}>
              <EnvelopeIcon size={16} color="currentColor" />
              <a href="mailto:alwin.baby.official@gmail.com" className={styles.link}>alwin.baby.official@gmail.com</a>
            </p>
            <p className={styles.contactInfo}>
              <PhoneIcon size={16} color="currentColor" />
              <a href="tel:+491551094294" className={styles.link}>+49 15510 942947</a>
            </p>
            <p className={styles.contactInfo}>
              <WhatsappIcon size={16} color="currentColor" />
              <a href="https://wa.me/919446356648" target="_blank" rel="noopener noreferrer" className={styles.link}>+91 9446 35 6648</a>
            </p>
            <p className={styles.contactInfo}>
              <LocationIcon size={16} color="currentColor" />
              <a href="https://maps.google.com/?q=17+Wedringerstraße+39124+Magdeburg+Germany" target="_blank" rel="noopener noreferrer" className={styles.link}>Magdeburg, Germany</a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} Alwin Baby. All rights reserved.</p>
      </div>
    </footer>
  );
}
