export default function HeroScene() {
  return (
    <div className="hero-visual hero-visual-dark">
      <div className="hero-cards-frame">
        <svg viewBox="0 0 320 220" width="100%" role="img" aria-label="Quatre cartes prépayées colorées en éventail">
          <g transform="translate(60,110) rotate(-22)">
            <rect x="-55" y="-70" width="110" height="140" rx="14" fill="#e14b3f" />
            <rect x="-40" y="-55" width="26" height="20" rx="4" fill="#f6c453" />
            <text x="0" y="60" fontSize="15" fill="#fff" fontWeight="700" textAnchor="middle" transform="rotate(90 0 60)">Transcash</text>
          </g>
          <g transform="translate(130,95) rotate(-7)">
            <rect x="-52" y="-72" width="104" height="144" rx="14" fill="#2f6fd1" />
            <text x="0" y="-35" fontSize="20" fill="#fff" fontWeight="800" textAnchor="middle">PCS</text>
            <rect x="-38" y="10" width="76" height="14" rx="3" fill="rgba(255,255,255,.3)" />
          </g>
          <g transform="translate(195,100) rotate(10)">
            <rect x="-48" y="-68" width="96" height="136" rx="14" fill="#3fae5a" />
            <text x="0" y="5" fontSize="16" fill="#fff" fontWeight="800" textAnchor="middle" transform="rotate(-18 0 5)">neosurf</text>
          </g>
          <g transform="translate(250,125) rotate(24)">
            <rect x="-40" y="-55" width="80" height="110" rx="12" fill="#f0a93a" />
            <text x="0" y="5" fontSize="10" fill="#1b3d3a" fontWeight="800" textAnchor="middle">OTHER</text>
          </g>
        </svg>
      </div>
      <div className="visual-note">
        <span className="note-dot" />
        Des repères, sans code secret
      </div>
    </div>
  )
}