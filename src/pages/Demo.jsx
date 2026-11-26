import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconAlert, IconShield } from '../components/Icons.jsx'
import { TICKET_TYPES, emailConfigured, sendDemo, validate } from '../lib/sendDemo.js'

const today = () => new Date().toISOString().slice(0, 10)
// Tous les champs sont vides : c'est la personne qui les remplit elle-même.
const initial = () => ({ ticketType: '', amount: '', purchaseDate: '', demoRef: '', email: '', website: '' })

const STEPS = ['Contrôle des champs', 'Préparation du message', 'Envoi à l’équipe']
const CONFETTI = Array.from({ length: 16 }, (_, i) => {
  const a = (i / 16) * Math.PI * 2
  return { x: Math.cos(a) * (90 + (i % 3) * 25), y: Math.sin(a) * (90 + (i % 3) * 25), c: ['#D93025', '#FBBC04', '#795548'][i % 3] }
})

export default function Demo() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [step, setStep] = useState(0)
  const [errorMsg, setErrorMsg] = useState('')
  const [shake, setShake] = useState(false)

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }))
  const setRef = (e) => setValues((v) => ({ ...v, demoRef: e.target.value.toUpperCase() }))

  async function onSubmit(e) {
    e.preventDefault()
    if (values.website) return // champ piège (anti-robots)
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) {
      setShake(true); setTimeout(() => setShake(false), 500)
      return
    }

    setStatus('loading'); setStep(0); setErrorMsg('')
    const wait = (ms) => new Promise((r) => setTimeout(r, ms))
    try {
      await wait(600); setStep(1)
      await wait(600); setStep(2)
      await sendDemo(values)
      setStatus('success')
    } catch (err) {
      setErrorMsg(
        err.message === 'NOT_CONFIGURED'
          ? 'L’envoi n’est pas encore configuré : les identifiants EmailJS n’ont pas été renseignés. Aucun message n’a été envoyé.'
          : err.message?.startsWith('Merci') || err.message?.startsWith('Limite')
            ? err.message
            : 'L’envoi a échoué. Aucun message n’a été transmis. Réessayez dans quelques instants.'
      )
      setStatus('error')
    }
  }

  function reset() { setValues(initial()); setErrors({}); setStatus('idle') }

  if (status === 'success') {
    return (
      <main className="container page-pad">
        <div className="card result success">
          <div className="burst" aria-hidden="true">
            {CONFETTI.map((c, i) => <i key={i} style={{ '--x': `${c.x}px`, '--y': `${c.y}px`, background: c.c, animationDelay: `${0.35 + (i % 4) * 0.04}s` }} />)}
          </div>
          <svg className="check-draw" viewBox="0 0 52 52" width="88" height="88" aria-hidden="true">
            <circle cx="26" cy="26" r="23" />
            <path d="M15 27l8 8 14-16" />
          </svg>
          <h1>Demande de démonstration envoyée</h1>
          <p>Les informations saisies ont été transmises par e-mail à l’équipe du projet.</p>
          <p className="notice"><IconAlert width="18" height="18" /> Aucune vérification officielle n’a été effectuée et aucun solde n’a été consulté.</p>
          <div className="actions">
            <button className="btn btn-primary" onClick={reset}>Nouvelle démonstration</button>
            <Link className="btn btn-ghost" to="/">Retour à l’accueil</Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="container page-pad demo-layout">
      <section>
        <span className="eyebrow">Démonstration</span>
        <h1>Tester le formulaire</h1>
        <p className="muted">Remplissez vous-même chaque champ. Utilisez uniquement des informations fictives de test.</p>
        <div className="card side-note">
          <IconShield width="26" height="26" />
          <div>
            <b>Jamais de vrai code.</b>
            <p>Il n’existe aucun champ pour un PIN, un code de recharge ou un cryptogramme. La référence de test doit commencer par « DEMO ».</p>
          </div>
        </div>
        {!emailConfigured && (
          <p className="notice warn"><IconAlert width="18" height="18" /> Mode développement : EmailJS n’est pas configuré, l’envoi est désactivé.</p>
        )}
      </section>

      <form className={`card form ${shake ? 'shake' : ''}`} onSubmit={onSubmit} noValidate>
        <div className="field">
          <label htmlFor="ticketType">Type de ticket</label>
          <select id="ticketType" value={values.ticketType} onChange={set('ticketType')} aria-invalid={!!errors.ticketType}>
            <option value="">Sélectionner…</option>
            {TICKET_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
          {errors.ticketType && <small className="err">{errors.ticketType}</small>}
        </div>

        <div className="row">
          <div className="field">
            <label htmlFor="amount">Montant (€)</label>
            <input id="amount" type="number" inputMode="decimal" min="1" max="1000" step="1" value={values.amount} onChange={set('amount')} placeholder="Ex. 50" aria-invalid={!!errors.amount} />
            {errors.amount && <small className="err">{errors.amount}</small>}
          </div>
          <div className="field">
            <label htmlFor="purchaseDate">Date d’achat</label>
            <input id="purchaseDate" type="date" max={today()} value={values.purchaseDate} onChange={set('purchaseDate')} aria-invalid={!!errors.purchaseDate} />
            {errors.purchaseDate && <small className="err">{errors.purchaseDate}</small>}
          </div>
        </div>

        <div className="field">
          <label htmlFor="demoRef">Référence fictive de test</label>
          <input id="demoRef" value={values.demoRef} onChange={setRef} maxLength={14} placeholder="DEMO-AB12-CD34" autoComplete="off" spellCheck="false" aria-invalid={!!errors.demoRef} />
          <small className="hint">À inventer vous-même : DEMO-, puis 4 lettres/chiffres, un tiret, 4 lettres/chiffres.</small>
          {errors.demoRef && <small className="err">{errors.demoRef}</small>}
        </div>

        <div className="field">
          <label htmlFor="email">Adresse e-mail <span className="muted">(facultatif)</span></label>
          <input id="email" type="email" value={values.email} onChange={set('email')} placeholder="vous@exemple.com" autoComplete="email" aria-invalid={!!errors.email} />
          {errors.email && <small className="err">{errors.email}</small>}
        </div>

        {/* Champ piège : invisible pour les humains */}
        <div className="hp" aria-hidden="true">
          <label>Ne pas remplir<input tabIndex={-1} autoComplete="off" value={values.website} onChange={set('website')} /></label>
        </div>

        {status === 'error' && <p className="notice error" role="alert"><IconAlert width="18" height="18" /> {errorMsg}</p>}

        {status === 'loading' ? (
          <div className="processing" role="status" aria-live="polite">
            <div className="spinner" />
            <div className="proc-body">
              <ul>
                {STEPS.map((s, i) => (
                  <li key={s} className={i < step ? 'done' : i === step ? 'active' : ''}>{s}</li>
                ))}
              </ul>
              <div className="bar"><span style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} /></div>
            </div>
          </div>
        ) : (
          <button className="btn btn-primary btn-block" type="submit">Envoyer la démonstration</button>
        )}
      </form>
    </main>
  )
}
