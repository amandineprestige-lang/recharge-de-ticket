import { useState } from 'react'

const DEMO_REFERENCE = /^DEMO-[A-Z0-9]{4}-[A-Z0-9]{4}$/

export default function Home() {
  const [reference, setReference] = useState('')
  const [message, setMessage] = useState('')

  function submit(event) {
    event.preventDefault()
    const value = reference.trim().toUpperCase()
    if (!DEMO_REFERENCE.test(value)) {
      setMessage('Utilisez une référence fictive au format DEMO-AB12-CD34.')
      return
    }
    setMessage('Démo terminée. Aucun ticket réel n’a été vérifié ni aucune donnée envoyée.')
  }

  return (
    <main className="simple-page">
      <header className="simple-header">
        <a className="simple-brand" href="/" aria-label="Accueil">
          <span className="simple-mark" aria-hidden="true">✓</span>
          <span>Recharges <b>en sécurité</b></span>
        </a>
      </header>

      <section className="simple-card">
        <span className="simple-label">Démonstration</span>
        <h1>Portail de démonstration pour comprendre les recharges en toute sécurité</h1>
        <p>Essayez avec une référence inventée. N’entrez jamais un code ou un PIN réel.</p>

        <form onSubmit={submit}>
          <label htmlFor="demo-reference">Référence fictive</label>
          <input
            id="demo-reference"
            value={reference}
            onChange={(event) => setReference(event.target.value.toUpperCase())}
            placeholder="DEMO-AB12-CD34"
            maxLength={14}
            autoComplete="off"
            required
          />
          <button type="submit">Démarrer la démo</button>
        </form>

        {message && <p className="simple-message" role="status">{message}</p>}
        <p className="simple-note">Pour un ticket réel, consultez directement le site officiel de son émetteur.</p>
      </section>
    </main>
  )
}
