import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-main">
        <div className="footer-brand">
          <Logo />
          <p>Des informations simples et indépendantes sur les recharges prépayées.</p>
        </div>
        <div className="footer-links">
          <a href="#recharges">Les recharges</a>
          <a href="#conseils">Conseils de sécurité</a>
          <a href="#orientation">Orientation</a>
        </div>
        <p className="footer-note">Recharge le Ticket est un service d’information indépendant, sans affiliation aux émetteurs cités. Il ne vérifie pas les tickets et ne demande aucun code secret.</p>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Recharge le Ticket</span>
        <a href="#accueil">Retour en haut ↑</a>
      </div>
    </footer>
  )
}

