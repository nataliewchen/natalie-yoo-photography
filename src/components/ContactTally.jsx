import { useEffect } from 'react'
import styles from './Contact.module.css'

const TALLY_SCRIPT = 'https://tally.so/widgets/embed.js'

export default function ContactTally() {
  useEffect(() => {
    const loadEmbeds = () => window.Tally?.loadEmbeds()
    if (window.Tally) {
      loadEmbeds()
      return
    }
    const existing = document.querySelector(`script[src="${TALLY_SCRIPT}"]`)
    if (existing) {
      existing.addEventListener('load', loadEmbeds, { once: true })
      return
    }
    const script = document.createElement('script')
    script.src = TALLY_SCRIPT
    script.async = true
    script.onload = loadEmbeds
    document.body.appendChild(script)
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.columns}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Investment</h2>
          <ul className={styles.infoList}>
            <li>
              <span className={styles.infoLabel}>Rate</span>
              <span className={styles.infoValue}>$200 / hour</span>
            </li>
            <li>
              <span className={styles.infoLabel}>Delivery Time</span>
              <span className={styles.infoValue}>2–3 weeks</span>
            </li>
            <li>
              <span className={styles.infoLabel}>Travel</span>
              <span className={styles.infoValue}>
                Complimentary within the Bay Area; mileage billed beyond 30 mi
              </span>
            </li>
          </ul>
        </section>

        <section className={`${styles.section} ${styles.formCard}`}>
          <h2 className={styles.sectionTitle}>Inquire</h2>
          <iframe
            data-tally-src="https://tally.so/embed/nrzOWL?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="500"
            frameBorder="0"
            title="Inquiry form"
            className={styles.tally}
          />
        </section>
      </div>
    </div>
  )
}
