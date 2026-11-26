import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'
import { IconMenu, IconClose } from './Icons.jsx'

const links = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/demonstration', label: 'La démonstration' },
  { to: '/#service', label: 'Notre approche' },
  { to: '/#paiements', label: 'Types de recharge' },
  { to: '/#securite', label: 'Conseils' },
  { to: '/#fonctionnement', label: 'Étapes' },
  { to: '/#assistance', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? window.scrollY / h : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const close = () => setOpen(false)
  return (
    <header className="navbar">
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="container nav-inner">
        <Logo />
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">
          {open ? <IconClose /> : <IconMenu />}
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Navigation principale">
          {links.map((l) =>
            l.to.includes('#') ? (
              <Link key={l.to} to={l.to} onClick={close}>{l.label}</Link>
            ) : (
              <NavLink key={l.to} to={l.to} end={l.end} onClick={close}>{l.label}</NavLink>
            )
          )}
          <Link to="/demonstration" className="btn btn-primary btn-sm" onClick={close}>Voir la démo</Link>
        </nav>
      </div>
    </header>
  )
}
