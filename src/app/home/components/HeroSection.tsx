'use client';

import { useRouter } from 'next/navigation';
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        {/* <div className={styles.profileImage}>
          <img src="/profile.png" alt="Profile" />
        </div> */}
        {/* <p className={styles.name}>Alwin Baby</p> */}
        <h1 className={styles.heading}>
          Building digital experiences<br />
          that matter.
        </h1>
        <div className={styles.ctas}>
          <button 
            className={styles.primaryBtn}
            onClick={() => router.push('/contact')}
          >
            Let's connect →
          </button>
        </div>
      </div>
    </section>
  );
}
