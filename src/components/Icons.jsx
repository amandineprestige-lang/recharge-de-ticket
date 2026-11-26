const base = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
const I = (d) => (props) => <svg {...base} {...props}>{d}</svg>

export const IconShield = I(<><path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></>)
export const IconTicket = I(<><path d="M3 9a2 2 0 0 0 0 6v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a2 2 0 0 1 0-6V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3z" /><path d="M14 5v14" strokeDasharray="2 3" /></>)
export const IconCard = I(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h4" /></>)
export const IconLock = I(<><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>)
export const IconAlert = I(<><path d="M12 3l10 18H2L12 3z" /><path d="M12 10v5M12 18h.01" /></>)
export const IconMail = I(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>)
export const IconHelp = I(<><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01" /></>)
export const IconStep = I(<><path d="M5 12h14M13 6l6 6-6 6" /></>)
export const IconCheck = I(<><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.7 2.7L16 9.5" /></>)
export const IconEye = I(<><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>)
export const IconMenu = I(<><path d="M4 7h16M4 12h16M4 17h16" /></>)
export const IconClose = I(<><path d="M6 6l12 12M18 6L6 18" /></>)
