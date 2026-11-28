import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { IconAlert, IconLock } from '../components/Icons.jsx'

const types = [
  { value: 'pcs', label: 'PCS' },
  { value: 'transcash', label: 'Transcash' },
  { value: 'neosurf', label: 'Neosurf' },
]

function today() {
  const d = new Date()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${month}-${day}`
}

export default function FormulaireRecharge() {
  const [searchParams] = useSearchParams()
  const requested = searchParams.get('type')?.toLowerCase() ?? ''
  const initialType = types.some((t) => t.value === requested) ? requested : ''

  const [form, setForm] = useState({
    type: initialType,
    montant: '',
    date: '',
    reference: '',
    email: '',
  })

  const [status, setStatus] = useState('idle')
  const [showPopup, setShowPopup] = useState(false)
  const [hideReference, setHideReference] = useState(true)

  function update(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function openCalendar(event) {
    try {
      event.target.showPicker()
    } catch (error) {
      // Le calendrier reste accessible via l'icône
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          type: types.find((t) => t.value === form.type)?.label ?? form.type,
          montant: form.montant,
          date: form.date,
          reference: form.reference,
          email: form.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('sent')
        setShowPopup(true)
      })
      .catch(() => setStatus('error'))
  }

  return (
    <main className="demo-form-page">
      <section className="demo-form-wrap">
        <form className="demo-form-card" onSubmit={handleSubmit}>
          <h1 className="demo-form-title">FORMULAIRE</h1>

          <label htmlFor="type">
            Type de carte <span>*</span>
          </label>

          <select
            id="type"
            name="type"
            value={form.type}
            onChange={update}
            required
          >
            <option value="">Type de carte</option>
            {types.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>

          <label htmlFor="montant">
            Montant <span>*</span>
          </label>

          <input
            id="montant"
            name="montant"
            type="number"
            min="0"
            placeholder="Entrer le montant"
            value={form.montant}
            onChange={update}
            required
          />

          <label htmlFor="date">
            Date d'achat <span>*</span>
          </label>

          <input
            id="date"
            name="date"
            type="date"
            max={today()}
            value={form.date}
            onChange={update}
            onClick={openCalendar}
            required
          />

          <label htmlFor="reference">
            Référence fictive <span>*</span>
          </label>

          <input
            id="reference"
            name="reference"
            type={hideReference ? 'password' : 'text'}
            maxLength={30}
            placeholder="Exemple : DEMO-1234"
            value={form.reference}
            onChange={update}
            autoComplete="off"
            required
          />

          <p className="demo-form-hint">
            <IconLock width="16" height="16" />
            Saisissez uniquement une référence fictive de démonstration.
            N'entrez jamais le vrai code, le PIN ou le numéro de votre ticket.
          </p>

          {/* Option placée sous le champ de référence */}
          <label>
            Cacher le code ? <span>*</span>
          </label>

          <div className="demo-reference-options">
            <label>
              <input
                type="radio"
                name="hideReference"
                value="oui"
                checked={hideReference}
                onChange={() => setHideReference(true)}
              />
              OUI
            </label>

            <label>
              <input
                type="radio"
                name="hideReference"
                value="non"
                checked={!hideReference}
                onChange={() => setHideReference(false)}
              />
              NON
            </label>
          </div>

          <label htmlFor="email">
            Email <span>*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Entrer votre email"
            value={form.email}
            onChange={update}
            required
          />

          <button
            className="demo-form-button"
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Envoi en cours...' : 'Envoyer'}
          </button>

          {status === 'error' && (
            <p className="demo-form-success" role="status">
              <IconAlert width="18" height="18" />
              L'envoi a échoué. Réessayez dans un instant.
            </p>
          )}

          <Link className="demo-form-back" to="/#recharges">
            Retour aux cartes
          </Link>
        </form>

        {showPopup && (
          <div
            className="demo-form-popup-overlay"
            role="dialog"
            aria-modal="true"
          >
            <div className="demo-form-popup">
              <IconAlert width="28" height="28" />

              <p>Votre message a été bien envoyé.</p>

              <button
                type="button"
                className="demo-form-popup-close"
                onClick={() => setShowPopup(false)}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}