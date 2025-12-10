'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Professional Experience", href: "/experience" },
    { label: "Education", href: "/education" },
    { label: "Activities", href: "/activities" },
    { label: "Contact Me", href: "/contact" },
  ];


  const handleScroll = () => {
    const scrollPercentage = (window.scrollY / window.innerHeight) * 100;
    setIsScrolled(scrollPercentage > 15);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(handleScroll, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          <button 
            className={styles.hamburger}
            onClick={(e) => {
              e?.preventDefault()
              setIsOpen(!isOpen)
            }}
          >
            ☰
          </button>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className={styles.navLink}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div 
        className={`${styles.mobileMenuOverlay} ${isOpen ? styles.showSidemenu : styles.hideSidemenu}`}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={styles.mobileMenuPanel}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className={styles.mobileMenuList}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className={styles.navLink}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}