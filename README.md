# TicketSûr — site de démonstration (React + Vite)

Site 100 % frontend : pas de backend, pas de base de données. Les formulaires envoient des informations **fictives et non sensibles** par e-mail via EmailJS.

> Aucun champ pour PIN, code de recharge ou cryptogramme. Aucune vérification officielle n'est effectuée ni simulée.

## Démarrage (PowerShell)
```powershell
npm install
Copy-Item .env.example .env   # puis renseignez vos identifiants EmailJS
npm run dev
```
Build de production : `npm run build` — aperçu : `npm run preview`.

## Configuration EmailJS
1. Créez un compte sur https://www.emailjs.com, ajoutez un **Email Service** (Gmail, Outlook…) et définissez l'adresse de réception.
2. Créez un **Template** avec ces variables : `{{ticket_type}}`, `{{amount}}`, `{{purchase_date}}`, `{{demo_reference}}`, `{{contact_email}}`, `{{sent_at}}`.
3. Copiez le Service ID, le Template ID et la Public Key dans `.env` :
```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```
Tant que ces trois valeurs sont vides, le formulaire affiche que l'envoi n'est pas configuré et n'envoie rien.
Conseil : dans EmailJS, limitez les domaines autorisés à votre site Vercel.

## Protections
Validation des champs, référence obligatoirement au format `DEMO-XXXX-XXXX`, champ piège anti-robots, délai d'1 minute entre envois et 3 envois/heure (côté navigateur — à compléter par les limites de votre compte EmailJS).

## Déploiement Vercel
1. Poussez le projet sur GitHub (`.env` est ignoré par `.gitignore`).
2. Sur Vercel : **Add New → Project**, importez le dépôt (preset Vite détecté : build `npm run build`, sortie `dist`).
3. **Settings → Environment Variables** : ajoutez `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` (et `VITE_SUPPORT_EMAIL` si souhaité), puis redéployez.
4. `vercel.json` redirige toutes les routes vers `index.html` pour React Router.

## Structure
```
src/
  components/  Navbar, Footer, Logo, Icons
  pages/       Home, Demo
  lib/         sendDemo.js (validation, anti-abus, EmailJS)
```

## Recevoir les messages dans Gmail (EmailJS)
1. emailjs.com → **Email Services → Add New Service → Gmail** → connectez votre compte Gmail → notez le **Service ID**.
2. **Email Templates → Create New Template** :
   - **To Email** : votre adresse Gmail (c'est ici que vous recevrez les messages)
   - **Subject** : `Nouvelle demande de démonstration TicketSûr`
   - **Reply To** : `{{contact_email}}`
   - **Contenu** : Type : `{{ticket_type}}` / Montant : `{{amount}}` / Date d'achat : `{{purchase_date}}` / Référence : `{{demo_reference}}` / E-mail : `{{contact_email}}` / Envoyé le : `{{sent_at}}`
   - Enregistrez et notez le **Template ID**.
3. **Account → General** : copiez la **Public Key**.
4. Collez les trois valeurs dans `.env`, puis relancez `npm run dev` (Ctrl + C, puis de nouveau la commande).
