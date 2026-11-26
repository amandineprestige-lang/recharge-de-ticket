# RECHARGE LE TICKET

Site d’information indépendant sur les recharges prépayées, réalisé avec React, React Router et Vite. L’accueil présente des repères généraux et des conseils de sécurité. La page `/suivi` explique comment contacter le service concerné. Aucun formulaire de demande n’est envoyé ou enregistré, et aucun PIN ni code de recharge n’est demandé.

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
