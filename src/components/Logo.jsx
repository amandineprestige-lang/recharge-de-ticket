import { IconTicket } from './Icons.jsx'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link className="brand" to="/" aria-label="Recharge le Ticket, accueil">
      <span className="brand-mark"><IconTicket width="22" height="22" /></span>
      <span className="brand-name">RECHARGE <b>LE TICKET</b></span>
    </Link>
  )
}
