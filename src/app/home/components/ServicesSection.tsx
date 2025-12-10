'use client';

import { useRouter } from 'next/navigation';
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  const router = useRouter();

  return (
    <section className={styles.services}>
      <h2>Have a product idea? <br/>
      Need a hand in your ongoing project?
      </h2>
      <div className={styles.ctaSection}>
        <h2>Feel free to connect</h2>
        <div className={styles.ctaBtns}>
          <button 
            className={styles.primaryBtn}
            onClick={() => router.push('/contact')}
          >
            Contact Me
          </button>
        </div>
      </div>
      {/* <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🎨</div>
              <h3>UX & UI</h3>
              <p>Designing interfaces that are intuitive, efficient, and enjoyable to use.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>💻</div>
              <h3>Web & Mobile App</h3>
              <p>Transforming ideas into exceptional web and mobile experiences.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>✨</div>
              <h3>Design & Creative</h3>
              <p>Crafting visually stunning designs that connect with your audience.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚙️</div>
              <h3>Development</h3>
              <p>Building code using the latest technology and design trends.</p>
            </div>
          </div> */}
    </section>
  );
}
