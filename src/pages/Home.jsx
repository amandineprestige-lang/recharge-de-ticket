
import HeroScene from '../components/HeroScene.jsx'
import { Link } from 'react-router-dom'
import { IconAlert, IconCard, IconEye, IconHelp, IconLock, IconMail, IconShield, IconStep, IconTicket } from '../components/Icons.jsx'

const payments = [
  { name: 'PCS', text: 'Carte prépayée rechargeable avec un ticket à code, vendue en bureaux de tabac.' },
  { name: 'Transcash', text: 'Ticket prépayé à code pour recharger un compte ou régler en ligne.' },
  { name: 'Neosurf', text: 'Coupon prépayé utilisable sur des sites partenaires, sans carte bancaire.' },
]
const tips = [
  'Ne partagez jamais le code d’un ticket par message, téléphone ou e-mail.',
  'Méfiez-vous de toute personne qui vous demande de « vérifier » un ticket en échange de son code.',
  'Gardez le reçu d’achat et ne publiez pas de photo du ticket.',
  'Un organisme officiel ne vous réclamera jamais un ticket prépayé comme paiement.',
  'En cas de doute, contactez directement l’émetteur via son site officiel.',
  'Signalez toute tentative suspecte aux autorités de votre pays.',
]
const steps = [
  { t: 'Choisissez', d: 'Sélectionnez le type de ticket et le montant sur la page de démonstration.' },
  { t: 'Renseignez', d: 'Indiquez la date d’achat et une référence fictive de test.' },
  { t: 'Envoyez', d: 'Le formulaire transmet ces informations non sensibles par e-mail.' },
  { t: 'Confirmez', d: 'Vous recevez un message clair, sans aucune vérification officielle simulée.' },
]
const features = [
  { icon: IconEye, t: 'Informer', d: 'Des explications simples sur les tickets prépayés et leurs usages.' },
  { icon: IconShield, t: 'Prévenir', d: 'Des conseils concrets pour éviter les arnaques courantes.' },
  { icon: IconLock, t: 'Protéger', d: 'Aucun code, PIN ou cryptogramme n’est jamais demandé ni stocké.' },
]

export default function Home() {
  const support = import.meta.env.VITE_SUPPORT_EMAIL
  return (
    <main>
      <section id="accueil" className="hero">
        <div className="blob b1" aria-hidden="true" /><div className="blob b2" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="fade-up">
            <span className="eyebrow">Information & prévention</span>
            <h1>Comprendre les tickets prépayés, <em>sans prendre de risque</em></h1>
            <p className="lead">TicketSûr explique comment fonctionnent PCS, Transcash et Neosurf, et vous aide à reconnaître les pièges. Ce site est une démonstration : il ne vérifie rien officiellement.</p>
            <div className="actions">
              <Link to="/demonstration" className="btn btn-primary">Essayer la démonstration</Link>
              <a href="#securite" className="btn btn-ghost">Conseils de sécurité</a>
            </div>
          </div>
          <div className="hero-art fade-up" aria-hidden="true">
            <div className="ticket t1"><IconTicket width="30" height="30" /><span>PCS</span><i>DEMO-••••</i></div>
            <div className="ticket t2"><IconTicket width="30" height="30" /><span>Transcash</span><i>DEMO-••••</i></div>
            <div className="ticket t3"><IconTicket width="30" height="30" /><span>Neosurf</span><i>DEMO-••••</i></div>
          </div>
        </div>
      </section>

      <section id="verification" className="section alt">
        <div className="container">
          <div className="card cta reveal">
            <div>
              <h2>Vérification : ce que ce site fait (et ne fait pas)</h2>
              <p className="muted">La page de démonstration envoie par e-mail des informations fictives. Elle ne contacte aucun émetteur, ne lit aucun solde et ne confirme la validité d’aucun ticket.</p>
            </div>
            <Link to="/demonstration" className="btn btn-primary">Ouvrir la démo</Link>
          </div>
        </div>
      </section>

      <section id="service" className="section">
        <div className="container">
          <span className="eyebrow">Le service</span>
          <h2 className="reveal">Un site clair, pensé pour la prévention</h2>
          <div className="grid-3">
            {features.map(({ icon: Icon, t, d }, i) => (
              <article className="card feature reveal" style={{ "--d": `${i * 0.12}s` }} key={t}>
                <div className="icon-badge"><Icon /></div>
                <h3>{t}</h3><p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="paiements" className="section alt">
        <div className="container">
          <span className="eyebrow">Moyens de paiement</span>
          <h2 className="reveal">Les tickets prépayés les plus courants</h2>
          <div className="grid-3">
            {payments.map((p, i) => (
              <article className="card payment reveal" style={{ "--d": `${i * 0.12}s` }} key={p.name}>
                <div className="icon-badge brown"><IconCard /></div>
                <h3>{p.name}</h3><p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="securite" className="section">
        <div className="container">
          <span className="eyebrow">Conseils de sécurité</span>
          <h2 className="reveal">Les bons réflexes</h2>
          <div className="grid-2">
            {tips.map((t, i) => (
              <div className="tip reveal" style={{ "--d": `${(i % 2) * 0.1 + Math.floor(i / 2) * 0.1}s` }} key={i}><IconAlert width="22" height="22" /><p>{t}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="fonctionnement" className="section alt">
        <div className="container">
          <span className="eyebrow">Comment ça marche ?</span>
          <h2 className="reveal">La démonstration en quatre étapes</h2>
          <ol className="steps">
            {steps.map((s, i) => (
              <li className="card step reveal" style={{ "--d": `${i * 0.15}s` }} key={s.t}>
                <span className="num">{i + 1}</span>
                <h3>{s.t}</h3><p>{s.d}</p>
                {i < steps.length - 1 && <IconStep className="arrow" />}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="assistance" className="section">
        <div className="container">
          <div className="card support reveal">
            <div className="icon-badge"><IconHelp /></div>
            <div>
              <h2>Assistance et support</h2>
              <p className="muted">Une question sur la démonstration ? Écrivez-nous. Nous ne vous demanderons jamais le code d’un ticket.</p>
            </div>
            {support
              ? <a className="btn btn-primary" href={`mailto:${support}`}><IconMail width="18" height="18" /> Nous écrire</a>
              : <span className="muted small">Adresse de contact à renseigner (VITE_SUPPORT_EMAIL).</span>}
          </div>
        </div>
      </section>
    </main>
  )
}
