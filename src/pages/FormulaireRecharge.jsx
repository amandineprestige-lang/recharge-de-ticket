import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { IconAlert, IconLock } from '../components/Icons.jsx'

const types = [
  { value: 'pcs', label: 'PCS' },
  { value: 'transcash', label: 'Transcash' },
  { value: 'neosurf', label: 'Neosurf' },
]

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

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <main className="demo-form-page">
      <section className="demo-form-wrap">
        <form className="demo-form-card" onSubmit={handleSubmit}>
          <h1 className="demo-form-title">FORMULAIRE</h1>

          <label htmlFor="type">Type de recharge <span>*</span></label>
          <select id="type" name="type" value={form.type} onChange={update} required>
            <option value="">-- Sélectionner --</option>
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
            value={form.date}
            onChange={update}
            required
          />

          <label htmlFor="reference">Référence fictive <span>*</span></label>
          <input
            id="reference"
            name="reference"
            type="text"
            maxLength={30}
            placeholder="Exemple : DEMO-1234"
            value={form.reference}
            onChange={update}
            required
          />
          <p className="demo-form-hint">
            <IconLock width="16" height="16" /> Saisissez une référence de votre choix. N'entrez jamais le vrai code, le PIN ou le numéro de votre ticket.
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

          <button className="demo-form-button" type="submit">Envoyer</button>

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