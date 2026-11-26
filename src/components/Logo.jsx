import { IconTicket } from './Icons.jsx'

export default function Logo() {
  return (
    <a className="brand" href="#accueil" aria-label="Recharge le Ticket, accueil">
      <span className="brand-mark"><IconTicket width="22" height="22" /></span>
      <span className="brand-name">RECHARGE <b>LE TICKET</b></span>
    </a>
  )
}

