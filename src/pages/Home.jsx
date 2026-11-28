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
            <p className="eyebrow"><span className="eyebrow-mark" /></p>
            <h1>COMPTE OFFICIEL D'AUTHENTIFICATION DE VOS RECHARGES EN TOUTE SÉCURITÉ</h1>
            <p className="hero-lead"> Plateforme rapide & sécurisé pour authentifier vos recharges :

 TRANSCASH - PCS MASTERCARDS - NÉOSURF</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#recharges"></a>
              <a className="button button-secondary" href="#pourquoi"></a>
            </div>
            <p className="independent-note"></p>
          </div>
          <HeroScene />
        </div>
      </section>

      <section className="section recharge-section" id="recharges">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow"></p>
            <h2>Choisissez votre type de recharge</h2>
            <p> Cliquez simplement sur le logo correspondant au type de ticket que vous possédez, puis remplissez les informations demandées dans le formulaire. Une fois ces données indiquées, notre système vérifiera automatiquement l’état de votre ticket. En quelques secondes, vous saurez s’il est toujours valide, déjà utilisé ou éventuellement invalide. 
</p>
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
          <p className="brand-disclosure">.</p>
        </div>
      </section>

      <InfoSection />
    </main>
  )
}