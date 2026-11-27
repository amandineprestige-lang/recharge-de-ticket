import { Link } from 'react-router-dom'
import HeroScene from '../components/HeroScene.jsx'
import InfoSection from '../components/InfoSection.jsx'
import { IconCard } from '../components/Icons.jsx'

const rechargeTypes = [
  { name: 'PCS', value: 'pcs', tone: 'coral', text: 'Repères généraux pour mieux comprendre les recharges et leurs usages.' },
  { name: 'Transcash', value: 'transcash', tone: 'blue', text: 'Quelques conseils simples pour garder votre ticket et vos informations en sécurité.' },
  { name: 'Neosurf', value: 'neosurf', tone: 'green', text: 'Des informations pratiques pour utiliser votre recharge avec prudence.' },
]

export default function Home() {
  return (
    <main>
      <section className="hero" id="accueil">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-mark" /> Nos informations</p>
            <h1>Les recharges prépayées, en toute simplicité.</h1>
            <p className="hero-lead"> Plateforme rapide & sécurisé pour authentifier vos recharges :

 TRANSCASH - PCS MASTERCARDS - NÉOSURF  </p>
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
            <p>Cliquez simplement sur la carte correspondant au type de carte que vous possédez, puis renseignez les informations demandées dans le formulaire.

Une fois les informations soumises, notre système procédera automatiquement à une vérification en quelques secondes afin de déterminer le statut de votre chèque : s'il est toujours valide, s'il a déjà été utilisé ou s'il est invalide.</p>
          </div>
          <div className="recharge-grid">
            {rechargeTypes.map((item) => (
              <Link
                className="recharge-card recharge-card-link"
                key={item.value}
                to={`/formulaire?type=${item.value}`}
                aria-label={`Choisir ${item.name}`}
              >
                <div className={'recharge-icon ' + item.tone}><IconCard width="28" height="28" /></div>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
          <p className="brand-disclosure">Veuillez cliquer sur le lien afin de renseigner les informations relatives à votre carte bancaire. Merci.</p>
        </div>
      </section>

      <InfoSection />
    </main>
  )
}