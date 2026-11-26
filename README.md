# Portail de démonstration pour comprendre les recharges en toute sécurité

Site pédagogique React + Vite. Il présente des informations générales et un parcours de démonstration. Il ne vérifie aucun ticket, ne contacte aucun émetteur et ne consulte aucun solde. Le formulaire n'accepte que des références fictives commençant par `DEMO-`.

## Démarrage (PowerShell)
```powershell
npm install
Copy-Item .env.example .env   # puis renseignez les identifiants EmailJS si l'envoi de démonstration est souhaité
npm run dev
```
Build de production : `npm run build` — aperçu : `npm run preview`.

## Envoi facultatif de messages de démonstration
Le projet peut envoyer par EmailJS les données fictives fournies dans le formulaire. Aucun code PIN ou code de recharge ne doit être collecté.
1. Créez un compte EmailJS et configurez un service et un modèle d'e-mail.
2. Le modèle peut utiliser : `{{ticket_type}}`, `{{amount}}`, `{{purchase_date}}`, `{{demo_reference}}`, `{{contact_email}}`, `{{sent_at}}`.
3. Ajoutez les paramètres suivants dans `.env` en local ou dans les variables Vercel :
```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
VITE_SUPPORT_EMAIL=
```
Si les paramètres EmailJS ne sont pas renseignés, l'envoi est désactivé. La clé EmailJS utilisée par le navigateur est une clé publique; n'ajoutez aucun secret privé dans une variable `VITE_`. Limitez les domaines autorisés dans EmailJS à votre domaine de déploiement.

## Protections de la démo
Validation des champs, référence obligatoire au format `DEMO-XXXX-XXXX`, champ piège anti-robots et limitation locale des envois. Ces limites côté navigateur complètent les paramètres de protection du compte EmailJS et ne remplacent pas une limitation côté serveur.

## Déploiement Vercel
Importez le dépôt dans Vercel. Le build utilise `npm run build` et le dossier de sortie `dist`. Si l'envoi facultatif est utilisé, ajoutez les variables EmailJS dans **Settings → Environment Variables**, puis redéployez. `vercel.json` redirige les routes vers `index.html` pour React Router.

## Structure
```
src/
  components/  Navigation, footer, logo et illustrations
  pages/       Accueil et parcours de démonstration
  lib/         Validation, limites locales et envoi EmailJS facultatif
```

Les marques PCS, Transcash et Neosurf sont mentionnées à titre informatif uniquement; ce portail est indépendant et n'est affilié à aucun émetteur.
