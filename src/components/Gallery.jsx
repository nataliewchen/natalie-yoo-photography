import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { photosFor, categories } from '../data/photos'
import { cloudinaryUrl } from '../utils/cloudinary'
import styles from './Gallery.module.css'

const altByCategory = Object.fromEntries(
  categories.filter((c) => c.alt).map((c) => [c.id, c.alt])
)

function getColumnCount() {
  if (typeof window === 'undefined') return 4
  if (window.matchMedia('(max-width: 700px)').matches) return 2
  if (window.matchMedia('(max-width: 1100px)').matches) return 3
  return 4
}

// Fallback if a photo's pre-fetch errors out.
const DEFAULT_ASPECT = 1.25

// Pulls "2021-ucla-2" out of ".../portfolio/grad/2021-ucla-2_chuuqw.jpg".
function photoName(url) {
  const file = url.split('/').pop() || ''
  return file.replace(/\.[^.]+$/, '').replace(/_[^_]+$/, '')
}

export default function Gallery() {
  const [active, setActive] = useState('all')
  const [columnCount, setColumnCount] = useState(getColumnCount)
  const [aspects, setAspects] = useState({})
  const [ready, setReady] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const update = () => setColumnCount(getColumnCount())
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    setActive('all')
  }, [location.key])

  // Probe every photo with a tiny thumbnail so we know each aspect ratio
  // before laying out the columns. Avoids the "scrambled" reflow on first paint.
  useEffect(() => {
    let cancelled = false
    const all = photosFor('all')
    if (all.length === 0) {
      setReady(true)
      return
    }
    const collected = {}
    let remaining = all.length
    const finish = () => {
      remaining -= 1
      if (cancelled || remaining > 0) return
      setAspects(collected)
      setReady(true)
    }
    all.forEach(({ src }) => {
      const img = new Image()
      img.onload = () => {
        if (img.naturalWidth) {
          collected[src] = img.naturalHeight / img.naturalWidth
        }
        finish()
      }
      img.onerror = finish
      img.src = cloudinaryUrl(src, 'w_40,f_auto,q_auto')
    })
    return () => {
      cancelled = true
    }
  }, [])

  const filtered = photosFor(active)
  const columns = Array.from({ length: columnCount }, () => [])
  const heights = new Array(columnCount).fill(0)
  filtered.forEach((photo) => {
    let shortest = 0
    for (let i = 1; i < columnCount; i++) {
      if (heights[i] < heights[shortest]) shortest = i
    }
    columns[shortest].push(photo)
    heights[shortest] += aspects[photo.src] ?? DEFAULT_ASPECT
  })

  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.pill} ${active === cat.id ? styles.on : ''}`}
            onClick={() => setActive(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <label className={styles.filterSelectWrap}>
        <span className={styles.filterSelectLabel}>Filter by</span>
        <select
          className={styles.filterSelect}
          value={active}
          onChange={(e) => setActive(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.label}
            </option>
          ))}
        </select>
      </label>

      {ready ? (
        <div className={styles.grid}>
          {columns.map((col, colIdx) => (
            <div key={colIdx} className={styles.column}>
              {col.map((photo) => (
                <div key={photo.src} className={styles.item}>
                  <img
                    src={cloudinaryUrl(photo.src)}
                    alt={altByCategory[photo.category] ?? ''}
                    className={styles.img}
                    style={{ aspectRatio: 1 / (aspects[photo.src] ?? DEFAULT_ASPECT) }}
                    loading="lazy"
                  />
                  {/* <span className={styles.nameTag}>{photoName(photo.src)}</span> */}
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.loading} aria-busy="true">
          <span className={styles.loadingDot} />
          <span className={styles.loadingDot} />
          <span className={styles.loadingDot} />
        </div>
      )}
    </div>
  )
}
