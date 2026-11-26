import HeroScene from '../components/HeroScene.jsx'
import { Link } from 'react-router-dom'
import { IconAlert, IconCard, IconEye, IconHelp, IconLock, IconMail, IconShield, IconStep } from '../components/Icons.jsx'

const payments = [
  { name: 'PCS', text: 'Une solution prépayée. Pour toute question sur un code réel, adressez-vous directement à son émetteur.' },
  { name: 'Transcash', text: 'Une recharge prépayée. Gardez le ticket et son code privés, y compris dans vos échanges en ligne.' },
  { name: 'Neosurf', text: 'Un moyen prépayé proposé par son émetteur. Ce site ne consulte ni compte ni solde.' },
]
const tips = [
  'Gardez votre code de recharge secret, comme un mot de passe.',
  'N’envoyez jamais de photo du ticket à une personne qui vous contacte.',
  'Méfiez-vous des demandes de code pour débloquer un paiement, un colis ou un compte.',
  'Aucune vérification de solde n’est effectuée sur ce portail.',
  'Pour un ticket réel, utilisez uniquement le site officiel de son émetteur.',
  'En cas de doute, ne transmettez rien et demandez conseil à une personne de confiance.',
]
const steps = [
  { t: 'Choisissez', d: 'Découvrez les exemples de types de recharge présentés sur le site.' },
  { t: 'Utilisez des données fictives', d: 'La démo accepte uniquement une référence de test commençant par DEMO.' },
  { t: 'Parcourez le formulaire', d: 'Voyez comment fonctionne un parcours de démonstration, sans code réel.' },
  { t: 'Gardez les bons réflexes', d: 'Pour toute question concernant un ticket réel, contactez directement son émetteur.' },
]
const features = [
  { icon: IconEye, t: 'Comprendre', d: 'Des informations générales pour mieux reconnaître les recharges prépayées.' },
  { icon: IconShield, t: 'Se protéger', d: 'Des conseils simples pour garder vos codes et vos reçus en sécurité.' },
  { icon: IconLock, t: 'Garder le contrôle', d: 'Aucun PIN ni code de recharge réel n’est demandé dans la démonstration.' },
]

export default function Home() {
  const support = import.meta.env.VITE_SUPPORT_EMAIL
  return (
    <main>
      <section id="accueil" className="hero">
        <div className="blob b1" aria-hidden="true" /><div className="blob b2" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="fade-up">
            <span className="eyebrow">Information indépendante · Démonstration</span>
            <h1>Portail de démonstration pour comprendre les recharges <em>en toute sécurité</em></h1>
            <p className="lead">Découvrez les bons réflexes avec un parcours fictif. Aucun code de recharge réel n’est demandé et aucun ticket n’est authentifié.</p>
            <div className="actions">
              <Link to="/demonstration" className="btn btn-primary">Découvrir la démonstration</Link>
              <a href="#securite" className="btn btn-ghost">Lire les conseils</a>
            </div>
          </div>
          <HeroScene />
        </div>
      </section>

      <section id="verification" className="section alt">
        <div className="container">
          <div className="card cta reveal">
            <div>
              <h2>Une démonstration, pas une authentification</h2>
              <p className="muted">Ce portail pédagogique ne contacte aucun émetteur, ne consulte aucun compte ou solde et ne confirme pas la validité d’un ticket. Utilisez uniquement des exemples fictifs.</p>
            </div>
            <Link to="/demonstration" className="btn btn-primary">Voir le parcours</Link>
          </div>
        </div>
      </section>

      <section id="service" className="section">
        <div className="container">
          <span className="eyebrow">Notre approche</span>
          <h2 className="reveal">Comprendre avant de partager</h2>
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
          <span className="eyebrow">Repères pratiques</span>
          <h2 className="reveal">Quelques types de recharge prépayée</h2>
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
          <h2 className="reveal">Quelques réflexes qui comptent</h2>
          <div className="grid-2">
            {tips.map((t, i) => (
              <div className="tip reveal" style={{ "--d": `${(i % 2) * 0.1 + Math.floor(i / 2) * 0.1}s` }} key={i}><IconAlert width="22" height="22" /><p>{t}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="fonctionnement" className="section alt">
        <div className="container">
          <span className="eyebrow">Le parcours</span>
          <h2 className="reveal">Quatre étapes pour découvrir la démo</h2>
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
              <h2>Une question sur la démonstration ?</h2>
              <p className="muted">Écrivez-nous pour une question sur ce site. Ne transmettez jamais de code de recharge par e-mail.</p>
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
