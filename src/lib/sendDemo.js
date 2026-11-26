import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export const emailConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

// --- Protection contre les soumissions abusives (côté navigateur) ---
const KEY = 'ticketsur_submissions'
const COOLDOWN_MS = 60_000      // 1 minute entre deux envois
const MAX_PER_HOUR = 3

function readLog() {
  try {
    const now = Date.now()
    return JSON.parse(localStorage.getItem(KEY) || '[]').filter((t) => now - t < 3_600_000)
  } catch { return [] }
}

export function checkRateLimit() {
  const log = readLog()
  const now = Date.now()
  const last = log[log.length - 1]
  if (last && now - last < COOLDOWN_MS) {
    return { ok: false, message: `Merci de patienter ${Math.ceil((COOLDOWN_MS - (now - last)) / 1000)} s avant un nouvel envoi.` }
  }
  if (log.length >= MAX_PER_HOUR) {
    return { ok: false, message: 'Limite atteinte : 3 envois par heure maximum. Réessayez plus tard.' }
  }
  return { ok: true }
}

function recordSubmission() {
  try { localStorage.setItem(KEY, JSON.stringify([...readLog(), Date.now()])) } catch { /* ignoré */ }
}

// --- Validation ---
export const TICKET_TYPES = ['PCS', 'Transcash', 'Neosurf', 'Autre']
// La référence doit être fictive : préfixe DEMO obligatoire, impossible de saisir un vrai code numérique.
export const DEMO_REF_REGEX = /^DEMO-[A-Z0-9]{4}-[A-Z0-9]{4}$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validate(v) {
  const errors = {}
  if (!TICKET_TYPES.includes(v.ticketType)) errors.ticketType = 'Choisissez un type de ticket.'
  const amount = Number(v.amount)
  if (!v.amount || Number.isNaN(amount) || amount < 1 || amount > 1000) errors.amount = 'Indiquez un montant entre 1 et 1 000 €.'
  if (!v.purchaseDate) errors.purchaseDate = 'Indiquez la date d’achat.'
  else if (v.purchaseDate > new Date().toISOString().slice(0, 10)) errors.purchaseDate = 'La date ne peut pas être dans le futur.'
  if (!DEMO_REF_REGEX.test(v.demoRef.trim().toUpperCase())) errors.demoRef = 'Référence fictive au format DEMO-XXXX-XXXX (lettres/chiffres).'
  if (v.email && !EMAIL_REGEX.test(v.email.trim())) errors.email = 'Adresse e-mail invalide.'
  return errors
}

// --- Envoi ---
export async function sendDemo(v) {
  if (!emailConfigured) {
    throw new Error('NOT_CONFIGURED')
  }
  const limit = checkRateLimit()
  if (!limit.ok) throw new Error(limit.message)

  // Uniquement des données non sensibles et fictives.
  const params = {
    ticket_type: v.ticketType,
    amount: `${Number(v.amount)} €`,
    purchase_date: v.purchaseDate,
    demo_reference: v.demoRef.trim().toUpperCase(),
    contact_email: v.email.trim() || 'non renseignée',
    sent_at: new Date().toLocaleString('fr-FR'),
  }
  await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey: PUBLIC_KEY })
  recordSubmission()
}
