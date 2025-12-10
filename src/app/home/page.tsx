import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.profileImage}>
              <img src="/profile.jpg" alt="Profile" />
            </div>
            <h1 className={styles.heading}>
              Building digital<br />
              products, brands, and<br />
              experience.
            </h1>
            <div className={styles.ctas}>
              <button className={styles.primaryBtn}>Let's work →</button>
              <button className={styles.secondaryBtn}>More info</button>
            </div>
          </div>
        </section>

        {/* Companies Section */}
        <section className={styles.companies}>
          <h3>Featured companies</h3>
          <div className={styles.companyGrid}>
            <div className={styles.company}>National Bank</div>
            <div className={styles.company}>Mattered</div>
            <div className={styles.company}>Coca Cola</div>
            <div className={styles.company}>Adobe</div>
            <div className={styles.company}>Subway</div>
            <div className={styles.company}>Codeacademy</div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.services}>
          <h2>Collaborate with brands and agencies<br />to create impactful results.</h2>
          <div className={styles.serviceGrid}>
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
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2>Tell me about your next project</h2>
          <div className={styles.ctaBtns}>
            <button className={styles.primaryBtn}>Email Me</button>
            <button className={styles.secondaryBtn}>Schedule call</button>
          </div>
        </section>
      </div>
    </div>
  );
}
