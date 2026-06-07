import { Link } from 'react-router-dom'
import styles from './About.module.css'

const PORTRAIT_SRC =
  'https://res.cloudinary.com/dixemyxo3/image/upload/v1682633431/portfolio/marshall-beach_cc8had.jpg'

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.grid}>
        <div className={styles.photoCol}>
          <img
            src={PORTRAIT_SRC}
            alt="Natalie Yoo"
            className={styles.photo}
          />
        </div>

        <div className={styles.textCol}>
          <h1 className={styles.name}>Hi, I'm Natalie!</h1>
          <p className={styles.body}>
            I first got into photography in high school, documenting sports
            games, prom askings, and spirit rallies. When I saw how happy it made people to receive their pictures, it inspired me to continue capturing moments that could be treasured for a lifetime!
          </p>
          <p className={styles.body}>
            I shoot in natural light and care about candid, unposed images —
            the kind that actually feel like you. Whether you're looking to celebrate a huge milestone or simply capture a snapshot of this particular moment in your life, I'd love to work with you to get the perfect photos!
          </p>
          <Link to="/contact" className={styles.cta}>
            Get in touch →
          </Link>
        </div>
      </div>
    </div>
  )
}
