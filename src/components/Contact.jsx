import { useState } from 'react'
import DatePicker from './DatePicker'
import styles from './Contact.module.css'

const SESSION_TYPES = ['Graduation', 'Proposal', 'Engagement', 'Maternity', 'Newborn', 'Family', 'Other']

const TIME_OPTIONS = ['Morning', 'Afternoon', 'Evening', "I'm flexible"]

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const WEB3FORMS_ACCESS_KEY = '8bc76500-32b2-48fc-8b9a-b54cc9a83c7c'

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  sessionType: '',
  date: '',
  time: '',
  groupSize: '',
  location: '',
  message: '',
}

const REQUIRED_FIELDS = [
  'firstName',
  'lastName',
  'email',
  'sessionType',
  'date',
  'time',
  'groupSize',
  'location',
]

function isEmpty(value) {
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'string') return !value.trim()
  return !value
}

function validate(form) {
  const errors = {}
  for (const field of REQUIRED_FIELDS) {
    if (isEmpty(form[field])) {
      errors[field] = 'This field is required.'
    }
  }
  if (form.email && !errors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const setField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  const update = (field) => (e) =>
    setField(field, e.target.type === 'checkbox' ? e.target.checked : e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const v = validate(form)
    if (Object.keys(v).length) {
      setErrors(v)
      return
    }
    setErrors({})
    setStatus('sending')
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Photography Inquiry from ${form.firstName} ${form.lastName}`,
          ...form,
        }),
      })
      if (!res.ok) throw new Error(await res.text())
      setStatus('sent')
      setForm(INITIAL_FORM)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const fieldClass = (field) =>
    `${styles.input} ${errors[field] ? styles.inputError : ''}`

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
              <span className={styles.infoLabel}>Delivery</span>
              <span className={styles.infoValue}>
                Edited high-resolution gallery delivered in 2–3 weeks
              </span>
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
          {status === 'sent' ? (
            <div className={styles.confirmation}>
              <div className={styles.confirmationIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className={styles.confirmationTitle}>Thank you!</h3>
              <p className={styles.confirmationBody}>
                I've received your inquiry and will be in touch with you soon.
              </p>
            </div>
          ) : (
            <>
              <h2 className={styles.sectionTitle}>Inquire</h2>
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.label}>First name</span>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={update('firstName')}
                    className={fieldClass('firstName')}
                  />
                  {errors.firstName && (
                    <span className={styles.fieldError}>{errors.firstName}</span>
                  )}
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>Last name</span>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={update('lastName')}
                    className={fieldClass('lastName')}
                  />
                  {errors.lastName && (
                    <span className={styles.fieldError}>{errors.lastName}</span>
                  )}
                </label>
              </div>

              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.label}>Email</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    className={fieldClass('email')}
                  />
                  {errors.email && (
                    <span className={styles.fieldError}>{errors.email}</span>
                  )}
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>Session type</span>
                  <select
                    value={form.sessionType}
                    onChange={update('sessionType')}
                    className={`${fieldClass('sessionType')} ${styles.select} ${!form.sessionType ? styles.selectPlaceholder : ''}`}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {SESSION_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.sessionType && (
                    <span className={styles.fieldError}>{errors.sessionType}</span>
                  )}
                </label>
              </div>

              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.label}>Preferred date</span>
                  <DatePicker
                    value={form.date}
                    onChange={(v) => setField('date', v)}
                    hasError={!!errors.date}
                  />
                  {errors.date && (
                    <span className={styles.fieldError}>{errors.date}</span>
                  )}
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>Preferred time</span>
                  <select
                    value={form.time}
                    onChange={update('time')}
                    className={`${fieldClass('time')} ${styles.select} ${!form.time ? styles.selectPlaceholder : ''}`}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {TIME_OPTIONS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.time && (
                    <span className={styles.fieldError}>{errors.time}</span>
                  )}
                </label>
              </div>

              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.label}>Group size</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="How many people?"
                    value={form.groupSize}
                    onChange={update('groupSize')}
                    className={fieldClass('groupSize')}
                  />
                  {errors.groupSize && (
                    <span className={styles.fieldError}>{errors.groupSize}</span>
                  )}
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>Location</span>
                  <input
                    type="text"
                    placeholder="City or venue"
                    value={form.location}
                    onChange={update('location')}
                    className={fieldClass('location')}
                  />
                  {errors.location && (
                    <span className={styles.fieldError}>{errors.location}</span>
                  )}
                </label>
              </div>

              <label className={styles.field}>
                <span className={styles.label}>Anything else you want me to know?</span>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                />
                {errors.message && (
                  <span className={styles.fieldError}>{errors.message}</span>
                )}
              </label>

              <button
                type="submit"
                className={styles.submit}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send inquiry'}
              </button>

              {status === 'error' && (
                <p className={styles.error}>
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
            </>
          )}
        </section>
      </div>
    </div>
  )
}
