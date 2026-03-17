import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span className="accent">matchapatcha</span> © {new Date().getFullYear()}
      </p>
    </footer>
  )
}
