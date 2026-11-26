import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label="Portail de démonstration — accueil">
      <svg width="34" height="34" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="#0B6B67" />
        <path d="M9 16.5l5 5 9-11" stroke="#C7F36B" strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>Recharges<b> en sécurité</b></span>
    </Link>
  )
}
