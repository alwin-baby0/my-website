'use client';

import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: "GitHub", url: "https://github.com/alwin-baby0" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/alwinbabyofficial/" },
    { label: "X", url: "https://x.com/alwinbaby1999" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Connect</h3>
          <ul className={styles.linkList}>
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Get in Touch</h3>
          <p className={styles.contactInfo}>
            Email: <a href="mailto:alwin.baby.official@gmail.com" className={styles.link}>alwin.baby.official@gmail.com</a>
          </p>
          <p className={styles.contactInfo}>
            Mobile: <a href="tel:+491551094294" className={styles.link}>+49 15510 942947</a>
          </p>
          <p className={styles.contactInfo}>
            WhatsApp: <a href="https://wa.me/919446356648" target="_blank" rel="noopener noreferrer" className={styles.link}>+91 9446 35 6648</a>
          </p>
          <p className={styles.contactInfo}>
            Location: <a href="https://maps.google.com/?q=17+Wedringerstraße+39124+Magdeburg+Germany" target="_blank" rel="noopener noreferrer" className={styles.link}>Magdeburg, Germany</a>
          </p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} Alwin Baby. All rights reserved.</p>
      </div>
    </footer>
  );
}
