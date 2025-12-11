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
            Email: alwin.baby.oficial@gmail.com
          </p>
          <p className={styles.contactInfo}>
            Location: Germany
          </p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} Alwin Baby. All rights reserved.</p>
      </div>
    </footer>
  );
}
