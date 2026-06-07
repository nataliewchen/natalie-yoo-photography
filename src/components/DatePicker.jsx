import { useEffect, useRef, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/style.css'
import styles from './DatePicker.module.css'

function toISO(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function fromISO(iso) {
  if (!iso) return undefined
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d)
}

const FORMATTER = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

export default function DatePicker({ value, onChange, placeholder = 'Select date', hasError }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const selected = fromISO(value)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  useEffect(() => {
    if (!open) return
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    window.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        type="button"
        className={`${styles.trigger} ${hasError ? styles.errorBorder : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <span className={selected ? styles.value : styles.placeholder}>
          {selected ? FORMATTER.format(selected) : placeholder}
        </span>
      </button>
      {open && (
        <div className={styles.popover} role="dialog">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={(date) => {
              if (!date) {
                onChange('')
              } else {
                onChange(toISO(date))
                setOpen(false)
              }
            }}
            disabled={{ before: today }}
            showOutsideDays
          />
        </div>
      )}
    </div>
  )
}
