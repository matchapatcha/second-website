import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = []

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a className={styles.logo} href="#hero">
          matchapatcha<span className="accent">.</span>dev
        </a>
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={closeMenu}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
