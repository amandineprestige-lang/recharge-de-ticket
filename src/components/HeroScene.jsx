import { IconLock, IconTicket } from './Icons.jsx'

export default function HeroScene() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <span className="visual-orbit orbit-one" />
      <span className="visual-orbit orbit-two" />
      <div className="visual-card visual-card-back">
        <span className="back-chip" />
        <span className="back-lines" />
      </div>
      <div className="visual-card visual-card-main">
        <div className="visual-card-head">
          <span className="visual-icon"><IconTicket width="23" height="23" /></span>
          <span className="visual-label">GUIDE PRATIQUE</span>
        </div>
        <strong>Recharge<br />prépayée</strong>
        <div className="visual-card-foot">
          <span>Informations utiles</span>
          <IconLock width="18" height="18" />
        </div>
      </div>
      <div className="visual-note"><span className="note-dot" /> Des repères, sans code secret</div>
    </div>
  )
}
