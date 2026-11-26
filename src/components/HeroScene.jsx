import { useEffect, useRef } from 'react'
import { IconAlert, IconLock, IconTicket } from './Icons.jsx'

export default function HeroScene() {
  const ref = useRef(null)

  // Effet de profondeur : la scène suit légèrement la souris
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      el.style.setProperty('--mx', x.toFixed(3))
      el.style.setProperty('--my', y.toFixed(3))
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="hero-art scene" ref={ref} aria-hidden="true">
      <div className="layer l0">
        <span className="ring r1" />
        <span className="ring r2" />
      </div>

      <div className="layer l1">
        <div className="ticket-main">
          <div className="tm-head">
            <IconTicket width="26" height="26" />
            <div className="type">
              <span>PCS</span>
              <span>Transcash</span>
              <span>Neosurf</span>
            </div>
            <em>DÉMO</em>
          </div>
          <div className="tm-code">DEMO-••••-••••</div>
          <div className="tm-foot">
            <small>Montant fictif</small>
            <b>50 €</b>
          </div>
          <span className="beam" />
        </div>
      </div>

      <div className="layer l2">
        <div className="shield">
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
            <path className="tick" d="M9 12l2 2 4-4" pathLength="1" />
          </svg>
        </div>
      </div>

      <div className="layer l3">
        <div className="chip c1"><IconLock width="16" height="16" /> Code jamais demandé</div>
        <div className="chip c2"><IconAlert width="16" height="16" /> Anti-arnaque</div>
      </div>
    </div>
  )
}