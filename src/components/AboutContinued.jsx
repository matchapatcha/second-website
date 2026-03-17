import styles from './AboutContinued.module.css'

export default function AboutContinued() {
  return (
    <section id="about-continued" className={styles.section}>
      <div className="container">
        <h2 className="section-title">About <span className="accent">(continued)</span></h2>
        <div className={styles.grid}>
          <p className={styles.text}>
            I can code in a few languages, but some better than others. Currently my programming skills are a little rusty, but I am learning again slowly.
          </p>
          <div className={styles.gifWrap}>
            <img
              src="/gif/5931cc882306b0c98172f5746dd7d3a7.gif"
              alt="About me continued"
              className={styles.gif}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/420x300?text=GIF+Loading'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
