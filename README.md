# Portail indépendant des recharges

Petit site React + Vite, prêt à être ouvert et modifié dans VS Code. Le formulaire de cette version accepte uniquement un exemple fictif au format `DEMO-XXXX-XXXX`. Il ne collecte ni n'envoie de PIN, de code de recharge, d'identifiant ou d'adresse e-mail.

## Ouvrir et lancer le site

1. Ouvrez le dossier du projet dans VS Code.
2. Dans le terminal intégré, lancez `npm install`.
3. Lancez `npm run dev`, puis ouvrez l'adresse locale indiquée dans le terminal.

Pour créer la version de production, lancez `npm run build`. Le dossier généré s'appelle `dist`.

Le titre et la description du navigateur se trouvent dans `index.html`. Le contenu du formulaire est dans `src/pages/Home.jsx`, et les couleurs et la mise en page sont dans `src/styles.css`. Le site est indépendant et ne vérifie pas de tickets.
