import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Demo from './pages/Demo.jsx'
import useReveal from './hooks/useReveal.js'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])
  return null
}

function NotFound() {
  return (
    <main className="container page-pad center">
      <h1>Page introuvable</h1>
      <p className="muted">Cette adresse n’existe pas.</p>
      <Link className="btn btn-primary" to="/">Retour à l’accueil</Link>
    </main>
  )
}

export default function App() {
  const { pathname } = useLocation()
  useReveal()
  return (
    <>
      <ScrollManager />
      <Navbar />
      <div key={pathname} className="page-enter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demonstration" element={<Demo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}