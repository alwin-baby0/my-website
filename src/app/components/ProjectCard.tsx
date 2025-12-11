import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

export default function ProjectCard({ title, description, tags, href }: ProjectCardProps) {
  const CardContent = () => (
    <>
      <h3>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <div className={styles.projectTags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.projectTag}>
            {tag}
          </span>
        ))}
      </div>
      {href && <div className={styles.linkIndicator}>Open →</div>}
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${styles.projectCard} ${styles.clickable}`}>
        <CardContent />
      </a>
    );
  }

  return (
    <div className={styles.projectCard}>
      <CardContent />
    </div>
  );
}
