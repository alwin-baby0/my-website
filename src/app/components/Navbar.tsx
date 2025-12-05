'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Professional Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Activities", href: "#activities" },
    { label: "Contact Me", href: "#contact" },
  ];

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <button 
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          <ul className={`${styles.navList} ${isOpen ? styles.active : ''}`}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className={styles.navLink}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}