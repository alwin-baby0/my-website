import styles from "./page.module.css";
import Skills from "../components/Skills";
import ProjectCard from "../components/ProjectCard";

export default function About() {
  const skillsData = [
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "LighntningJS", "TypeScript", "CSS/Tailwind", "HTML5", "Responsive Design"],
    },
    {
      category: "Backend & Cloud",
      items: ["Node.js", "Python", "Express", "REST APIs", "AWS", "Serverless"],
    },
    {
      category: "Tools & Platforms",
      items: ["Vite", "Git", "GitHub", "Figma", "GitHub Actions", "MS Office", "Photoshop"],
    },
    {
      category: "Other Skills",
      items: ["Agile Methodologies", "Technical Documentation"],
    },
    {
      category: "Languages",
      items: ["English", "German", "Malayalam", "Hindi"],
    },
  ];

  const projects = [
    {
      title: "Awaan Samsung TV App",
      description: "Built a high-quality streaming app that delivers live TV and on-demand content to viewers across the Middle East and North Africa.",
      tags: ["LightningJS", "WebGL", "Tizen", "Typescript", "Remote Interaction"],
      href: "https://www.samsung.com/de/tvs/smart-tv/samsung-tv-apps-detail/?appId=3201607010180",
    },
    {
      title: "CMGO Web App",
      description: "Developed a streaming web app that works smoothly across different browsers and delivers Chinese movies in Singapore and Malaysia.",
      tags: ["React", "Javascript", "Video on Demand"],
      href: "https://cmgo.com",
    },
    {
      title: "Awaan Web App",
      description: "Created a streaming web platform for the Middle East where users can watch live and on-demand content with a smooth, responsive experience.",
      tags: ["React", "Javascript", "Live", "Video on Demand"],
      href: "https://www.awaan.ae",
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Section 1: Personal Details */}
        <section className={styles.personalSection}>
          <div className={styles.personalContent}>
            <div className={styles.personalInfo}>
              <h1>About Me</h1>
              <p>
                Hey! I'm a software engineer with 3+ years of hands-on experience building web and TV applications. I started my career in India where I got my Bachelor's degree in Kerala, and worked at a company building OTT platforms for streaming services.
              </p>
              <p>
                Right now, I'm pursuing my Master's in Digital Engineering at Otto-von-Guericke-University in Germany. I genuinely love learning new technologies and working on projects that challenge me to grow.
              </p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <h3>3+</h3>
                  <p>Years Experience</p>
                </div>
                <div className={styles.stat}>
                  <h3>5+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className={styles.stat}>
                  <h3>5</h3>
                  <p>Building apps across 5 platforms</p>
                </div>
              </div>
            </div>
            <div className={styles.personalImage}>
              <img src="/profile.png" alt="Alwin Baby" />
            </div>
          </div>
        </section>

        {/* Section 2: Skills */}
        <section className={styles.skillsSection}>
          <h2>Skills & Expertise</h2>
          <Skills skills={skillsData} />
        </section>

        {/* Section 3: Projects */}
        <section className={styles.projectsSection}>
          <h2>Featured Projects</h2>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                href={project.href}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
