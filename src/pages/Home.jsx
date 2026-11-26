import { useState } from 'react'

const referencePattern = /^DEMO-[A-Z0-9]{4}-[A-Z0-9]{4}$/

export default function Home() {
  const [ticketType, setTicketType] = useState('')
  const [amount, setAmount] = useState('')
  const [reference, setReference] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!ticketType || !amount || !referencePattern.test(reference.trim().toUpperCase())) {
      setMessage('Choisissez un type, indiquez un montant fictif et utilisez une référence DEMO-XXXX-XXXX.')
      return
    }

    setMessage('Parcours terminé. Les informations restent dans cette page : rien n’a été envoyé et aucun ticket réel n’a été vérifié.')
  }

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Accueil">
          <span className="brand-mark" aria-hidden="true">✓</span>
          <span>Portail <b>recharges</b></span>
        </a>
        <span className="independent-label">Site indépendant</span>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Information pratique</p>
          <h1>Comprendre les recharges prépayées, simplement.</h1>
          <p className="intro">Découvrez un parcours d’exemple avec des informations inventées. N’entrez jamais un code PIN ou un code de recharge réel.</p>
        </div>

        <div className="ticket-illustration" aria-hidden="true">
          <div className="ticket-top"><span>EXEMPLE FICTIF</span><span>•••</span></div>
          <div className="ticket-code">DEMO-••••-••••</div>
          <div className="ticket-bottom"><span>Montant d’exemple</span><b>50 €</b></div>
        </div>
      </section>

      <section className="form-section" aria-labelledby="form-title">
        <div className="section-heading">
          <p className="eyebrow">Parcours fictif</p>
          <h2 id="form-title">Essayez le formulaire</h2>
          <p>Seules les références fictives commençant par DEMO sont acceptées.</p>
        </div>

        <form className="entry-form" onSubmit={handleSubmit}>
          <label htmlFor="ticket-type">Type de recharge</label>
          <select id="ticket-type" value={ticketType} onChange={(event) => setTicketType(event.target.value)} required>
            <option value="">Choisir un exemple</option>
            <option value="PCS">PCS</option>
            <option value="Transcash">Transcash</option>
            <option value="Neosurf">Neosurf</option>
            <option value="Autre">Autre</option>
          </select>

          <label htmlFor="amount">Montant fictif</label>
          <div className="amount-field">
            <input id="amount" type="number" min="1" max="1000" step="1" placeholder="50" value={amount} onChange={(event) => setAmount(event.target.value)} required />
            <span>€</span>
          </div>

          <label htmlFor="reference">Référence de test</label>
          <input id="reference" type="text" autoComplete="off" maxLength={14} placeholder="DEMO-AB12-CD34" value={reference} onChange={(event) => setReference(event.target.value.toUpperCase())} required />
          <p className="field-hint">Inventez une référence. Aucun code réel ne doit être saisi.</p>

          <button type="submit">Continuer</button>
          {message && <p className="result-message" role="status">{message}</p>}
        </form>
      </section>

      <footer className="footer">
        Cette page est un exemple indépendant. Elle ne vérifie aucun ticket et ne transmet aucune information.
      </footer>
    </main>
  )
}
