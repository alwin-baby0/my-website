import styles from "./page.module.css";

export default function Resume() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1>Alwin Baby</h1>
        </div>

        {/* Profile */}
        <section className={styles.section}>
          <h2>Profile</h2>
          <p>
Software engineer with three years of experience building web and TV applications using React.js and LightningJS. I’ve worked on multiple OTT platforms and collaborated closely with cross-functional teams to ship high-quality, user-friendly products — currently exploring my interest in AI and machine learning.          </p>
        </section>

        {/* Two Column Layout */}
        <div className={styles.twoColumn}>
          {/* Left Column - Experience */}
          <div className={styles.column}>
            <section className={styles.section}>
              <h2>Experience</h2>
              
              <div className={styles.card}>
                <h3>Diagnal Technologies Private Limited</h3>
                <p className={styles.date} data-start="Aug 2022" data-end="Sep 2025">August 2022 – September 2025</p>
                <p className={styles.location}>Trivandrum, India</p>
                <p className={styles.title}>Software Engineer</p>
                <p className={styles.item}>Created Enlight, a customisable OTT template for Tizen, webOS, and Vidaa platforms.</p>
                <p className={styles.item}>Developed TV apps (CMGO, Awaan, Illico+, Rally TV) using LightningJS with global reach.</p>
                <p className={styles.item}>Built custom LightningJS components using WebGL API for complex graphics.</p>
                <p className={styles.item}>Developed React.js web apps optimised for mobile and browser platforms.</p>
                <p className={styles.item}>Reduced video player startup time by 25% through optimised data flow.</p>
                <p className={styles.item}>Improved app startup time by 22% via code splitting and API optimisation.</p>
                <div className={styles.achievement}>
                  <h4>Professional Achievements</h4>
                  <p><strong>Promoted to Software Engineer E2</strong> (September 2023)</p>
                  <p>Advanced from my entry-level role in less than a year, recognized for my solid performance and contribution.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Education */}
          <div className={styles.column}>
            <section className={styles.section}>
              <h2>Education</h2>

              <div className={styles.card}>
                <h3>Otto-von-Guericke-University Magdeburg</h3>
                <p className={styles.date} data-start="Oct 2025" data-end="Present">October 2025 – Present</p>
                <p className={styles.location}>Magdeburg, Germany</p>
                <p className={styles.title}>Master of Science in Digital Engineering</p>
                <p className={styles.note}>Currently enrolled in the first semester (Winter 2025)</p>
              </div>

              <div className={styles.card}>
                <h3>APJ Abdul Kalam Technological University</h3>
                <p className={styles.date} data-start="Aug 2018" data-end="Jul 2022">August 2018 – July 2022</p>
                <p className={styles.location}>Government Engineering College Barton Hill, Trivandrum, India</p>
                <p className={styles.title}>Bachelor of Technology in Mechanical Engineering</p>
                <p className={styles.note}>CGPA: 7.9/10</p>
                <p>Final project: Used the Contour Method to analyse residual stress in an aluminium block in partnership with ISRO.</p>
                <p>Core Coordinator for Annual Technocultural Fest (Aagneya 2022).</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
