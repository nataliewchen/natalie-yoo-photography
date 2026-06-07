import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>
        © {year} Natalie Yoo Photography
      </span>
    </footer>
  )
}
