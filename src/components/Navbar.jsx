import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Logo />
        <button
          className="nav-toggle"
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span />
          <span />
        </button>
        <nav id="primary-navigation" className={open ? 'nav-list is-open' : 'nav-list'} aria-label="Navigation principale">
          {isHome ? (
            <>
              <a href="#accueil" onClick={close}>Accueil</a>
              <a href="#recharges" onClick={close}>Les recharges</a>
              <a href="#pourquoi" onClick={close}>Conseils</a>
              <a className="nav-cta" href="#recharges" onClick={close}>Vérification</a>
            </>
          ) : (
            <>
              <Link to="/" onClick={close}>Accueil</Link>
              <a href="/#recharges" onClick={close}>Les recharges</a>
              <a href="/#pourquoi" onClick={close}>Conseils</a>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}