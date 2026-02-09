import { getAllVersions } from '../../config/versions'
import styles from './VersionSelect.module.css'

function VersionSelect() {
  const allVersions = getAllVersions()
  const baseUrl = window.location.origin

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Test Versions</h1>
      <p className={styles.subtitle}>
        Select a flow to start the enrollment experience for usability testing.
        Flow A is the default; Flow B removes the sidebar, stepper, and customization accordions.
      </p>

      <div className={styles.grid}>
        {allVersions.map((v) => {
          const url = `${baseUrl}/v/${v.id}/`
          return (
            <div key={v.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>{v.label}</h2>
                <span className={styles.cardId}>{v.id}</span>
              </div>
              <p className={styles.cardDescription}>{v.description}</p>
              <div className={styles.cardChanges}>
                {v.showSidebar === false && <span className={styles.tag}>No sidebar</span>}
                {!v.showStepper && <span className={styles.tag}>No stepper</span>}
                {v.showCustomizeAccordions === false && <span className={styles.tag}>No accordions</span>}
                {v.messaging && <span className={styles.tag}>Alt messaging</span>}
                {v.id === 'flow-a' && <span className={styles.tagControl}>Default</span>}
              </div>
              <div className={styles.cardActions}>
                <a href={`/v/${v.id}/`} className={styles.startBtn}>Start Flow</a>
                <button
                  className={styles.copyBtn}
                  onClick={() => handleCopy(url)}
                  title="Copy link"
                >
                  Copy Link
                </button>
              </div>
              <code className={styles.cardUrl}>{url}</code>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default VersionSelect
