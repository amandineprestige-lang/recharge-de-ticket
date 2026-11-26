import { Link, useSearchParams } from 'react-router-dom'
import { IconAlert, IconLock } from '../components/Icons.jsx'

const rechargeTypes = [
  { value: 'pcs', label: 'PCS' },
  { value: 'transcash', label: 'Transcash' },
  { value: 'neosurf', label: 'Neosurf' },
]

const advice = {
  pcs: 'Pour toute question sur PCS, consultez les informations et les coordonnées d’assistance fournies directement par l’émetteur.',
  transcash: 'Pour toute question sur Transcash, consultez les informations et les coordonnées d’assistance fournies directement par l’émetteur.',
  neosurf: 'Pour toute question sur Neosurf, consultez les informations et les coordonnées d’assistance fournies directement par l’émetteur.',
}

export default function RechargeInfo() {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedType = searchParams.get('type')?.toLowerCase() ?? ''
  const selectedType = rechargeTypes.some((item) => item.value === requestedType) ? requestedType : ''
  const selectedLabel = rechargeTypes.find((item) => item.value === selectedType)?.label

  function handleTypeChange(event) {
    const next = new URLSearchParams(searchParams)
    if (event.target.value) next.set('type', event.target.value)
    else next.delete('type')
    setSearchParams(next, { replace: true })
  }

  return (
    <main className="recharge-info-page">
      <section className="recharge-info-hero">
        <div className="container">
          <p className="eyebrow"><span className="eyebrow-mark" /> Guide indépendant</p>
          <h1>Des repères pour votre recharge.</h1>
          <p>Choisissez un type de recharge pour afficher les conseils généraux correspondants.</p>
        </div>
      </section>

      <section className="recharge-info-section">
        <div className="container recharge-info-card">
          <h2>Type de recharge</h2>
          <label htmlFor="recharge-info-type">Sélectionnez une option</label>
          <select id="recharge-info-type" value={selectedType} onChange={handleTypeChange}>
            <option value="">Choisir une recharge</option>
            {rechargeTypes.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
          </select>

          {selectedLabel ? (
            <div className="recharge-info-advice" aria-live="polite">
              <p className="recharge-info-selected">Conseils généraux · {selectedLabel}</p>
              <p>{advice[selectedType]}</p>
            </div>
          ) : (
            <p className="recharge-info-hint">Votre choix affiche des informations sur cette page uniquement.</p>
          )}

          <div className="recharge-info-warning" role="note">
            <IconAlert width="20" height="20" />
            <p>Ce site est indépendant. Il ne vérifie ni les tickets ni les soldes, et ne traite aucune demande.</p>
          </div>
          <div className="recharge-info-security"><IconLock width="18" height="18" /><span>Ne saisissez ni ne partagez jamais votre code PIN ou code de recharge.</span></div>
          <Link className="button button-secondary recharge-info-back" to="/#recharges">Retour aux cartes</Link>
        </div>
      </section>
    </main>
  )
}
