import { useEffect, useRef } from 'react'
import styles from './About.module.css'

const skills = ['Unity', 'Godot', 'C#', 'GDScript', 'Pixel Art', 'Game Jams']

const stats = [
  { num: '12+', label: 'Games' },
  { num: '5+',  label: 'Jams' },
  { num: '3+',  label: 'Years' },
  { num: '∞',   label: 'Ideas' },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal') ?? []
    const observer = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 60)
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className="container">
        <h2 className="section-title reveal">About</h2>
        <div className={`${styles.grid} reveal`}>
          <div className={styles.text}>
            <p>
              I build small, focused games with clean mechanics and expressive style.
            </p>
            <div className={styles.skills}>
              {skills.map(s => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
          <div className={styles.statsGrid}>
            {stats.map(s => (
              <div key={s.label} className={styles.statBox}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
