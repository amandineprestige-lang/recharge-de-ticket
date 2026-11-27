import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
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
  const [sent, setSent] = useState(false)

  function update(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function openCalendar(event) {
    try {
      event.target.showPicker()
    } catch (error) {
      // Navigateur sans showPicker : le calendrier reste accessible via l'icône
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <main className="demo-form-page">
      <section className="demo-form-wrap">
        <form className="demo-form-card" onSubmit={handleSubmit}>
          <h1 className="demo-form-title">FORMULAIRE</h1>

          <label htmlFor="type">Type de carte <span>*</span></label>
          <select id="type" name="type" value={form.type} onChange={update} required>
            <option value="">Type de carte</option>
            {types.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>

          <label htmlFor="montant">Montant <span>*</span></label>
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

          <label htmlFor="date">Date d'achat <span>*</span></label>
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

          <label htmlFor="reference">le code <span>*</span></label>
          <input
            id="reference"
            name="reference"
            type="text"
            maxLength={30}
            placeholder=""
            value={form.reference}
            onChange={update}
            required
          />
          <p className="demo-form-hint">
            <IconLock width="16" height="16" />
          </p>

          <label htmlFor="email">Email <span>*</span></label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Entrer votre email"
            value={form.email}
            onChange={update}
            required
          />

          <button className="demo-form-button" type="submit">Verifier</button>

          {sent && (
            <p className="demo-form-success" role="status">
              <IconAlert width="18" height="18" /> Formulaire valide. Cette démonstration ne vérifie aucun ticket ni aucun solde.
            </p>
          )}

          <Link className="demo-form-back" to="/#recharges">Retour aux cartes</Link>
        </form>
      </section>
    </main>
  )
}