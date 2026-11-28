import Logo from './Logo.jsx'
import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
  const { pathname } = useLocation()
  const home = pathname === '/'
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-main">
        <div className="footer-brand">
          <Logo />
          <p></p>
        </div>
        <div className="footer-links">
        </div>
        <p className="footer-note"> Plateforme rapide & sécurisé pour authentifier vos recharges :

 TRANSCASH - PCS MASTERCARDS - NÉOSURF  </p>
      </div>
      <div className="container footer-bottom">
        <a href={home ? '#accueil' : '/'}>{home ? 'Retour en haut ↑' : 'Accueil'}</a>
      </div>
    </footer>
  )
}
