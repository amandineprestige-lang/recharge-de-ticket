import { Link } from 'react-router-dom'
import { IconAlert, IconLock, IconShield } from '../components/Icons.jsx'

const steps = [
  { number: '01', title: 'Retrouvez la confirmation', text: 'Consultez le message ou le reçu envoyé par le service auprès duquel vous avez effectué votre démarche.' },
  { number: '02', title: 'Contactez le bon service', text: 'Pour connaître l’état d’une opération, utilisez les coordonnées d’assistance indiquées par son émetteur ou son vendeur.' },
  { number: '03', title: 'Gardez vos données privées', text: 'Ne transmettez jamais un code PIN, un code de recharge, un mot de passe ou un code de validation à un tiers.' },
]

export default function Tracking() {
  return (
    <main className="tracking-page">
      <section className="tracking-hero">
        <div className="container tracking-hero-inner">
          <p className="eyebrow"><span className="eyebrow-mark" /> Espace d’information indépendant</p>
          <h1>Suivi et assistance</h1>
          <p className="tracking-lead">Quelques repères pour retrouver le bon interlocuteur et suivre une démarche liée à une recharge.</p>
          <div className="tracking-disclosure" role="note">
            <IconAlert width="20" height="20" />
            <p><strong>Recharge le Ticket ne reçoit pas et ne suit pas de demandes.</strong> Ce site n’est relié à aucun émetteur et ne peut pas consulter un achat, un ticket ou un solde.</p>
          </div>
        </div>
      </section>

      <section className="section tracking-content">
        <div className="container tracking-layout">
          <div className="tracking-copy">
            <p className="eyebrow">Comment procéder</p>
            <h2>Adressez-vous au service concerné.</h2>
            <p>Le suivi d’une transaction est assuré par le service qui l’a réalisée ou par l’émetteur de la recharge. Préparez les informations non confidentielles demandées par leur assistance officielle.</p>
            <Link className="button button-primary" to="/">Retour à l’accueil <span aria-hidden="true">→</span></Link>
          </div>
          <div className="tracking-steps">
            {steps.map((step) => (
              <article key={step.number}>
                <span className="tracking-number">{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tracking-safe">
        <div className="container tracking-safe-inner">
          <div className="tracking-safe-icon"><IconLock width="22" height="22" /></div>
          <div><h2>Un code de recharge reste confidentiel.</h2><p>Ne le saisissez pas sur cette page et ne l’envoyez jamais par e-mail, téléphone ou messagerie. En cas de doute, interrompez l’échange et contactez directement l’émetteur.</p></div>
          <IconShield className="tracking-safe-shield" width="34" height="34" />
        </div>
      </section>
    </main>
  )
}
