import styles from './OtherProjects.module.css'

const PROJECTS = [
  {
    id: 1,
    icon: '🛠️',
    title: 'Project / Tool Name',
    tech: 'Python',
    url: '#',
  },
  {
    id: 2,
    icon: '🎨',
    title: 'Art / Asset Pack',
    tech: 'Pixel Art',
    url: '#',
  },
  {
    id: 3,
    icon: '🔧',
    title: 'Game Mod or Plugin',
    tech: 'C#',
    url: '#',
  },
]

export default function OtherProjects() {
  return (
    <section id="other-projects" className={styles.section}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className={styles.list}>
          {PROJECTS.map(p => (
            <a key={p.id} href={p.url} className={styles.row} target="_blank" rel="noopener noreferrer">
              <div className={styles.rowLeft}>
                <span className={styles.icon}>{p.icon}</span>
                <div>
                  <h4>{p.title}</h4>
                </div>
              </div>
              <div className={styles.rowRight}>
                <span className="tag tag-sm">{p.tech}</span>
                <span className={styles.arrow}>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
