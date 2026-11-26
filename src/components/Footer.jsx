import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo light />
          <p className="footer-text">Un portail pédagogique pour comprendre les recharges prépayées et adopter les bons réflexes. Cette démonstration ne vérifie aucun ticket.</p>
        </div>
        <div>
          <h4>Explorer</h4>
          <Link to="/">Accueil</Link>
          <Link to="/demonstration">La démonstration</Link>
          <Link to="/#securite">Conseils de sécurité</Link>
          <Link to="/#assistance">Contact</Link>
        </div>
        <div>
          <h4>Votre sécurité</h4>
          <p className="footer-text">Ne partagez jamais un code de recharge. Pour toute question sur un ticket réel, contactez son émetteur par son site ou ses coordonnées officielles.</p>
        </div>
      </div>
      <div className="container footer-bottom">© {new Date().getFullYear()} — Portail pédagogique indépendant. PCS, Transcash et Neosurf sont cités à titre informatif et restent les marques de leurs détenteurs.</div>
    </footer>
  )
}
