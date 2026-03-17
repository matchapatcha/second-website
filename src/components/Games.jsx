import { useState, useEffect, useRef } from 'react'
import styles from './Games.module.css'

const GAMES = [
  {
    id: 1,
    title: 'Awesome Game One',
    year: '2025',
    type: 'Jam Game',
    tags: ['jam', 'solo'],
    techTags: ['Unity', '2D', 'Platformer'],
    img: '/assets/game1.png',
    playUrl: '#',
    sourceUrl: '#',
    emoji: '🎮',
  },
  {
    id: 2,
    title: 'Cool Solo Game',
    year: '2024',
    type: 'Solo Project',
    tags: ['solo'],
    techTags: ['Godot', 'Pixel Art', 'Roguelike'],
    img: '/assets/game2.png',
    playUrl: '#',
    sourceUrl: '#',
    emoji: '🕹️',
  },
  {
    id: 3,
    title: 'Collab Jam Entry',
    year: '2024',
    type: 'Collab',
    tags: ['collab', 'jam'],
    techTags: ['Unity', '3D', 'Horror'],
    img: '/assets/game3.png',
    playUrl: '#',
    sourceUrl: '#',
    emoji: '👾',
  },
]

const FILTERS = ['all', 'jam', 'solo', 'collab']
const FILTER_LABELS = { all: 'All', jam: 'Jam', solo: 'Solo', collab: 'Collab' }

function GameCard({ game }) {
  const [imgError, setImgError] = useState(false)

  return (
    <article className={styles.card}>
      <div className={`${styles.imgWrap} ${imgError ? styles.noImg : ''}`}>
        {!imgError && (
          <img src={game.img} alt={`${game.title} screenshot`} onError={() => setImgError(true)} />
        )}
        <div className={styles.placeholder}>{game.emoji}</div>
        <div className={styles.overlay}>
          <a href={game.playUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Play</a>
          <a href={game.sourceUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">Code</a>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className="tag tag-sm">{game.type}</span>
          <span className={styles.year}>{game.year}</span>
        </div>
        <h3 className={styles.cardTitle}>{game.title}</h3>
        <div className={styles.techTags}>
          {game.techTags.map(t => <span key={t} className="tag tag-sm">{t}</span>)}
        </div>
      </div>
    </article>
  )
}

export default function Games() {
  const [activeFilter, setActiveFilter] = useState('all')
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll(`.${styles.card}`) ?? []
    const observer = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80)
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' })
    els.forEach(el => { el.classList.add('reveal'); observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const visible = GAMES.filter(g => activeFilter === 'all' || g.tags.includes(activeFilter))

  return (
    <section id="games" className={styles.section}>
      <div className="container">
        <h2 className="section-title">Games</h2>

        <div className={styles.filterBar}>
          {FILTERS.map(f => (
            <button
              key={f}
              className={`${styles.filterBtn} ${activeFilter === f ? styles.active : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {FILTER_LABELS[f]}
            </button>
          ))}
        </div>

        <div className={styles.grid} ref={ref}>
          {visible.map(g => <GameCard key={g.id} game={g} />)}
        </div>
      </div>
    </section>
  )
}
