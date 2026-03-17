import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className={styles.grid}>
          <p className={styles.text}>
            My name is matchapatcha, and I like to make apps. I also like Computer Science and Advanced Networking. I lowk don't like javascript.
          </p>
          <div className={styles.gifWrap}>
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3FlajNyc3U3YWk0MW50MDEwampsb2R2enU3bnZmeWh1NDFwOTM3cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/D63HGAzG15LQrjBPRE/giphy.gif"
              alt="Animated gif"
              className={styles.gif}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
