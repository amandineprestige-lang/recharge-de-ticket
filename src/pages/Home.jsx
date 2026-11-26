import { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroScene from '../components/HeroScene.jsx'
import { IconAlert, IconCard, IconEye, IconLock, IconShield, IconTicket } from '../components/Icons.jsx'

const rechargeTypes = [
  { name: 'PCS', tone: 'coral', text: 'Repères généraux pour mieux comprendre les recharges et leurs usages.' },
  { name: 'Transcash', tone: 'blue', text: 'Quelques conseils simples pour garder votre ticket et vos informations en sécurité.' },
  { name: 'Neosurf', tone: 'green', text: 'Des informations pratiques pour utiliser votre recharge avec prudence.' },
  { name: 'Autre recharge', tone: 'gold', text: 'Les mêmes bons réflexes s’appliquent aux autres tickets prépayés.' },
]

const advice = {
  comprendre: 'Consultez les informations de l’émetteur pour connaître les conditions et les usages de votre recharge.',
  securite: 'Ne partagez jamais le code inscrit sur un ticket. Une personne qui le possède peut parfois utiliser son solde.',
  assistance: 'Pour une question sur un ticket précis, adressez-vous à l’émetteur par ses canaux de contact habituels.',
}

export default function Home() {
  const [type, setType] = useState('')
  const [topic, setTopic] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (!type || !topic) {
      setMessage('Choisissez un type de recharge et le sujet qui vous intéresse.')
      return
    }
    setMessage(advice[topic])
  }

  return (
    <main>
      <section className="hero" id="accueil">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-mark" /> Information indépendante</p>
            <h1>Les recharges prépayées, en toute simplicité.</h1>
            <p className="hero-lead">Des informations claires pour comprendre les tickets prépayés et adopter les bons réflexes de sécurité.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#recharges">Découvrir les recharges</a>
              <a className="button button-secondary" href="#conseils">Conseils de sécurité</a>
            </div>
            <p className="independent-note">Recharge le Ticket est un service d’information indépendant. Aucune vérification de solde n’est effectuée.</p>
          </div>
          <HeroScene />
        </div>
      </section>

      <section className="quick-points" aria-label="Nos principes">
        <div className="container quick-points-grid">
          <div><IconEye /><span>Informations faciles à comprendre</span></div>
          <div><IconShield /><span>Conseils axés sur la sécurité</span></div>
          <div><IconLock /><span>Aucun code secret demandé</span></div>
        </div>
      </section>

      <section className="section recharge-section" id="recharges">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Les moyens prépayés</p>
            <h2>Choisissez votre type de recharge</h2>
            <p>Retrouvez quelques repères généraux. Pour les conditions propres à un ticket, référez-vous à son émetteur.</p>
          </div>
          <div className="recharge-grid">
            {rechargeTypes.map((item) => (
              <article className="recharge-card" key={item.name}>
                <div className={'recharge-icon ' + item.tone}><IconCard width="24" height="24" /></div>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                {item.name === 'Autre recharge' ? (
                  <a href="#orientation" onClick={() => setType('autre')}>Voir les repères <span aria-hidden="true">→</span></a>
                ) : (
                  <Link to={`/recharge?type=${encodeURIComponent(item.name.toLowerCase())}`}>Voir les repères <span aria-hidden="true">→</span></Link>
                )}
              </article>
            ))}
          </div>
          <p className="brand-disclosure">Les noms de produits sont mentionnés uniquement pour orienter les visiteurs. Recharge le Ticket n’est affilié à aucun émetteur.</p>
        </div>
      </section>

      <section className="safety-section" id="conseils">
        <div className="container safety-layout">
          <div className="safety-copy">
            <p className="eyebrow">Quelques réflexes utiles</p>
            <h2>Gardez le contrôle de vos informations.</h2>
            <p>Un code de recharge est confidentiel. Traitez-le comme un moyen de paiement et ne le communiquez jamais à une personne inconnue.</p>
            <a className="text-link" href="#orientation">Trouver un conseil adapté <span aria-hidden="true">→</span></a>
          </div>
          <div className="safety-list">
            <article><span className="safety-number">01</span><div><h3>Protégez votre code</h3><p>Ne l’envoyez pas par message, e-mail ou téléphone.</p></div></article>
            <article><span className="safety-number">02</span><div><h3>Vérifiez qui vous contacte</h3><p>Méfiez-vous des demandes urgentes ou des promesses de paiement.</p></div></article>
            <article><span className="safety-number">03</span><div><h3>Demandez de l’aide à la bonne source</h3><p>Contactez l’émetteur via ses coordonnées habituelles pour un ticket réel.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section orientation-section" id="orientation">
        <div className="container orientation-layout">
          <div className="orientation-intro">
            <p className="eyebrow">Besoin d’un repère ?</p>
            <h2>Indiquez ce que vous cherchez.</h2>
            <p>Ce court formulaire affiche un conseil général sur cette page. Vos choix ne sont ni enregistrés ni envoyés.</p>
            <div className="orientation-promise"><IconLock width="18" height="18" /> N’indiquez jamais de code, PIN ou numéro confidentiel.</div>
          </div>
          <form className="orientation-form" onSubmit={handleSubmit}>
            <label htmlFor="recharge-type">Type de recharge</label>
            <select id="recharge-type" value={type} onChange={(event) => setType(event.target.value)} required>
              <option value="">Choisir une option</option>
              <option value="pcs">PCS</option>
              <option value="transcash">Transcash</option>
              <option value="neosurf">Neosurf</option>
              <option value="autre">Autre recharge</option>
            </select>

            <label htmlFor="topic">Votre sujet</label>
            <select id="topic" value={topic} onChange={(event) => setTopic(event.target.value)} required>
              <option value="">Choisir une option</option>
              <option value="comprendre">Comprendre le fonctionnement</option>
              <option value="securite">Protéger mes informations</option>
              <option value="assistance">Trouver de l’assistance</option>
            </select>

            <button className="button button-primary" type="submit">Afficher un conseil</button>
            {message && <p className="form-message" role="status"><IconAlert width="18" height="18" /> {message}</p>}
          </form>
        </div>
      </section>
    </main>
  )
}
