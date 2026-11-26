# RECHARGE LE TICKET

Site d’information indépendant sur les recharges prépayées, réalisé avec React, React Router et Vite. L’accueil présente des repères généraux et des conseils de sécurité. La page `/suivi` donne des conseils d’assistance et la page `/recharge?type=pcs`, `/recharge?type=transcash` ou `/recharge?type=neosurf` affiche des informations générales selon le choix. Aucun code PIN, code de recharge ou renseignement personnel n’est demandé ni transmis.

## Démarrage

\`\`\`powershell
npm install
npm run dev
\`\`\`

Build de production : \`npm run build\` — aperçu : \`npm run preview\`.

## Structure

- \`src/pages/Home.jsx\` : contenu de la page d’accueil et formulaire d’orientation.
- \`src/components/Navbar.jsx\`, \`Logo.jsx\`, \`HeroScene.jsx\`, \`Footer.jsx\` : navigation et éléments visuels.
- \`src/styles.css\` : palette, mise en page et adaptation mobile.
- \`index.html\` : titre et description du site.

Le site ne vérifie pas la validité d’un ticket et n’est affilié à aucun émetteur mentionné.
