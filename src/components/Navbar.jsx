import { useState } from 'react'
import Logo from './Logo.jsx'

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#recharges', label: 'Les recharges' },
  { href: '#conseils', label: 'Conseils' },
  { href: '#orientation', label: 'Orientation' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
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
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>{link.label}</a>
          ))}
          <a className="nav-cta" href="#orientation" onClick={close}>Trouver un repère</a>
        </nav>
      </div>
    </header>
  )
}

