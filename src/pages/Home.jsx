import { Link } from 'react-router-dom'
import HeroScene from '../components/HeroScene.jsx'
import InfoSection from '../components/InfoSection.jsx'

const rechargeTypes = [
  { name: 'PCS', value: 'pcs', logo: '/logos/pcs.png' },
  { name: 'Transcash', value: 'transcash', logo: '/logos/transcash.png' },
  { name: 'Neosurf', value: 'neosurf', logo: '/logos/neosurf.png' },
]

export default function Home() {
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
              <a className="button button-secondary" href="#pourquoi">Conseils de sécurité</a>
            </div>
            <p className="independent-note">Recharge le Ticket est un service d’information indépendant. Aucune vérification de solde n’est effectuée.</p>
          </div>
          <HeroScene />
        </div>
      </section>

      <section className="section recharge-section" id="recharges">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Les moyens prépayés</p>
            <h2>Choisissez votre type de recharge</h2>
            <p>Cliquez sur un logo pour accéder au formulaire correspondant.</p>
          </div>
          <div className="recharge-grid">
            {rechargeTypes.map((item) => (
              <Link
                className="recharge-card recharge-card-link"
                key={item.value}
                to={`/formulaire?type=${item.value}`}
                aria-label={`Choisir ${item.name}`}
              >
                <img className="recharge-logo-full" src={item.logo} alt={item.name} />
              </Link>
            ))}
          </div>
          <p className="brand-disclosure">Les marques et logos appartiennent à leurs propriétaires respectifs. Recharge le Ticket n’est affilié à aucun émetteur.</p>
        </div>
      </section>

      <InfoSection />
    </main>
  )
}