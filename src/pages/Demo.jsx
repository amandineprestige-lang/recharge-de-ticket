import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconAlert, IconShield } from '../components/Icons.jsx'
import { TICKET_TYPES, emailConfigured, sendDemo, validate } from '../lib/sendDemo.js'

const today = () => new Date().toISOString().slice(0, 10)
const initial = () => ({ ticketType: '', amount: '', purchaseDate: '', demoRef: '', email: '', website: '' })

const STEPS = ['Contrôle des champs', 'Préparation du message', 'Envoi à l’équipe']
const CONFETTI = Array.from({ length: 16 }, (_, i) => {
  const a = (i / 16) * Math.PI * 2
  return { x: Math.cos(a) * (90 + (i % 3) * 25), y: Math.sin(a) * (90 + (i % 3) * 25), c: ['#0B6B67', '#C7F36B', '#D6A35B'][i % 3] }
})

export default function Demo() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [step, setStep] = useState(0)
  const [errorMsg, setErrorMsg] = useState('')
  const [shake, setShake] = useState(false)

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }))
  const setRef = (e) => setValues((v) => ({ ...v, demoRef: e.target.value.toUpperCase() }))

  async function onSubmit(e) {
    e.preventDefault()
    if (values.website) return
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) {
      setShake(true); setTimeout(() => setShake(false), 500)
      return
    }

    setStatus('loading'); setStep(0); setErrorMsg('')
    const wait = (ms) => new Promise((r) => setTimeout(r, ms))
    try {
      await wait(400); setStep(1)
      await wait(400); setStep(2)
      await sendDemo(values)
      setStatus('success')
    } catch (err) {
      setErrorMsg(
        err.message === 'NOT_CONFIGURED'
          ? 'La démonstration n’est pas configurée pour l’envoi : aucun message n’a été envoyé.'
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
          <h1>Votre démonstration est terminée</h1>
          <p>Un e-mail de démonstration a été transmis à l’équipe du projet avec les informations fictives saisies.</p>
          <p className="notice"><IconAlert width="18" height="18" /> Aucun ticket n’a été vérifié, aucun émetteur contacté et aucun solde consulté.</p>
          <div className="actions">
            <button className="btn btn-primary" onClick={reset}>Recommencer</button>
            <Link className="btn btn-ghost" to="/">Retour à l’accueil</Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="container page-pad demo-layout">
      <section>
        <span className="eyebrow">Parcours pédagogique</span>
        <h1>Découvrir la démonstration</h1>
        <p className="muted">Tous les champs doivent être remplis avec des informations fictives. N’utilisez pas de données réelles.</p>
        <div className="card side-note">
          <IconShield width="26" height="26" />
          <div>
            <b>Aucun code demandé.</b>
            <p>Ce formulaire ne vérifie pas les recharges. La référence de test doit commencer par « DEMO »; n’entrez jamais un PIN ni un code réel.</p>
          </div>
        </div>
        {!emailConfigured && (
          <p className="notice warn"><IconAlert width="18" height="18" /> Le service d’envoi de démonstration n’est pas configuré. Aucun message ne sera envoyé.</p>
        )}
      </section>

      <form className={`card form ${shake ? 'shake' : ''}`} onSubmit={onSubmit} noValidate>
        <div className="field">
          <label htmlFor="ticketType">Type de recharge (exemple)</label>
          <select id="ticketType" value={values.ticketType} onChange={set('ticketType')} aria-invalid={!!errors.ticketType}>
            <option value="">Sélectionner…</option>
            {TICKET_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
          {errors.ticketType && <small className="err">{errors.ticketType}</small>}
        </div>

        <div className="row">
          <div className="field">
            <label htmlFor="amount">Montant fictif (€)</label>
            <input id="amount" type="number" inputMode="decimal" min="1" max="1000" step="1" value={values.amount} onChange={set('amount')} placeholder="Ex. 50" aria-invalid={!!errors.amount} />
            {errors.amount && <small className="err">{errors.amount}</small>}
          </div>
          <div className="field">
            <label htmlFor="purchaseDate">Date d’achat fictive</label>
            <input id="purchaseDate" type="date" max={today()} value={values.purchaseDate} onChange={set('purchaseDate')} aria-invalid={!!errors.purchaseDate} />
            {errors.purchaseDate && <small className="err">{errors.purchaseDate}</small>}
          </div>
        </div>

        <div className="field">
          <label htmlFor="demoRef">Référence de test</label>
          <input id="demoRef" value={values.demoRef} onChange={setRef} maxLength={14} placeholder="DEMO-AB12-CD34" autoComplete="off" spellCheck="false" aria-invalid={!!errors.demoRef} />
          <small className="hint">Inventez une référence : DEMO-, puis 4 lettres/chiffres, un tiret et 4 lettres/chiffres.</small>
          {errors.demoRef && <small className="err">{errors.demoRef}</small>}
        </div>

        <div className="field">
          <label htmlFor="email">Adresse e-mail <span className="muted">(facultatif)</span></label>
          <input id="email" type="email" value={values.email} onChange={set('email')} placeholder="vous@exemple.com" autoComplete="email" aria-invalid={!!errors.email} />
          {errors.email && <small className="err">{errors.email}</small>}
        </div>

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
          <button className="btn btn-primary btn-block" type="submit">Envoyer les données fictives</button>
        )}
      </form>
    </main>
  )
}
