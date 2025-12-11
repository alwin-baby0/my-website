import styles from './Skills.module.css';

interface Skill {
  category: string;
  items: string[];
}

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div className={styles.skillsContainer}>
      {skills.map((skill) => (
        <div key={skill.category} className={styles.skillCategory}>
          <h3>{skill.category}</h3>
          <div className={styles.skillItems}>
            {skill.items.map((item) => (
              <span key={item} className={styles.skillTag}>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
