export default function InfoSection() {
  return (
    <section className="section info-section" id="pourquoi">
      <div className="container">
        <div className="info-heading">
          <h2>Pourquoi est-il essentiel d'authentifier la validité d’un ticket Transcash, PCS ou Neosurf ?</h2>
        </div>

        <div className="info-columns">
          <p>
            Les tickets prépayés comme Transcash, PCS ou Neosurf sont largement utilisés pour des achats en ligne ou pour effectuer des paiements rapides et sécurisés (éviter par exemples l'usage des faux billets). Authentifier la validité d’un ticket avant toute utilisation est donc indispensable pour éviter les mauvaises surprises et se rassurer que votre ticket est toujours valide avant usage. 
          </p>
          <p>
            Pour le faire, il vous suffit simplement de cliquer sur l’un des logos que vous venez de dépasser, puis de suivre les étapes de vérification indiquées. En renseignant les informations demandées, vous pourrez rapidement connaître l’état de votre ticket et savoir s’il est encore valide ou non. Cette démarche simple vous assure une vérification fiable en quelques instants.
          </p>
        </div>

        <div className="info-blocks">
          <article className="info-block">
            <h3>Conseils de sécurité</h3>
            <div className="info-illustration">
              <svg viewBox="0 0 200 130" role="img" aria-label="Bouclier avec cadenas">
                <path d="M100 14 L150 32 V64 C150 92 128 108 100 118 C72 108 50 92 50 64 V32 Z" fill="#176b72" />
                <rect x="82" y="58" width="36" height="28" rx="5" fill="#d2ed91" />
                <path d="M90 58 V50 a10 10 0 0 1 20 0 V58" fill="none" stroke="#d2ed91" strokeWidth="5" />
                <circle cx="100" cy="72" r="4" fill="#102d3a" />
              </svg>
            </div>
          </article>

          <article className="info-block">
            <h3>Comment ça marche ?</h3>
            <div className="info-illustration">
              <svg viewBox="0 0 200 130" role="img" aria-label="Trois étapes : acheter, utiliser, conserver">
                <circle cx="35" cy="65" r="22" fill="#ef866d" />
                <rect x="26" y="57" width="18" height="12" rx="2" fill="#ffffff" />
                <circle cx="100" cy="65" r="22" fill="#176b72" />
                <path d="M90 66 l7 7 l14 -15" fill="none" stroke="#d2ed91" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="165" cy="65" r="22" fill="#102d3a" />
                <rect x="156" y="60" width="18" height="14" rx="3" fill="#d2ed91" />
                <path d="M60 65 H73 M70 60 l5 5 l-5 5" fill="none" stroke="#176b72" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M125 65 H138 M135 60 l5 5 l-5 5" fill="none" stroke="#176b72" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </article>

          <article className="info-block">
            <h3>Assistance et support</h3>
            <div className="info-illustration">
              <svg viewBox="0 0 200 130" role="img" aria-label="Personne avec un casque d’assistance">
                <circle cx="100" cy="52" r="22" fill="#f1b17d" />
                <path d="M60 122 C60 92 78 82 100 82 C122 82 140 92 140 122 Z" fill="#176b72" />
                <path d="M76 52 a24 24 0 0 1 48 0" fill="none" stroke="#102d3a" strokeWidth="6" strokeLinecap="round" />
                <rect x="70" y="48" width="9" height="16" rx="4" fill="#102d3a" />
                <rect x="121" y="48" width="9" height="16" rx="4" fill="#102d3a" />
                <path d="M126 62 q0 12 -14 14" fill="none" stroke="#102d3a" strokeWidth="3" strokeLinecap="round" />
                <circle cx="160" cy="30" r="12" fill="#ef866d" />
                <path d="M156 28 a4 4 0 1 1 6 3 q-2 1 -2 3 M160 38 v0.5" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}