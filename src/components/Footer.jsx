import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo light />
          <p className="footer-text">Information et prévention sur les tickets prépayés. Projet de démonstration : aucune vérification officielle, aucun solde consulté.</p>
        </div>
        <div>
          <h4>Navigation</h4>
          <Link to="/">Accueil</Link>
          <Link to="/demonstration">Démonstration</Link>
          <Link to="/#securite">Conseils de sécurité</Link>
          <Link to="/#assistance">Assistance</Link>
        </div>
        <div>
          <h4>À retenir</h4>
          <p className="footer-text">Ne communiquez jamais le code d’un ticket prépayé à un inconnu. Aucun organisme officiel ne vous le demandera par e-mail ou par message.</p>
        </div>
      </div>
      <div className="container footer-bottom">© {new Date().getFullYear()} TicketSûr — Site de démonstration. Marques citées (PCS, Transcash, Neosurf) : propriété de leurs détenteurs, sans affiliation.</div>
    </footer>
  )
}
