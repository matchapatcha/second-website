import styles from './PcSpecs.module.css'

export default function PcSpecs() {
  const specs = [
    { label: 'CPU', value: 'Ryzen 9 3950X' },
    { label: 'GPU', value: 'Zotac RTX 3090' },
    { label: 'RAM', value: '32 GB DDR5' },
    { label: 'Motherboard', value: 'Asus ROG Crosshair VII Hero' },
    { label: 'Storage', value: '2 TB SSD' }
  ]

  return (
    <section id="pc-specs" className={styles.section}>
      <div className="container">
        <h2 className="section-title">PC Specs</h2>
        <div className={styles.specs}>
          {specs.map((spec, index) => (
            <div key={index} className={styles.spec}>
              <p className={styles.label}>{spec.label}</p>
              <p className={styles.value}>{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
