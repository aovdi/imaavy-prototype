import TimeBadge from '../TimeBadge/TimeBadge'
import styles from './Sidebar.module.css'

function Sidebar({
  variant = 'default', // 'default', 'withGraphics'
  welcomeTitle = 'Welcome!',
  welcomeText = "Tell us more about you so that we can show you support that may be relevant to your journey.",
  showPhone = false,
  phoneText = '',
  showTimeBadge = false,
  nurseImageSrc = '/assets/images/nurse-navigator.png',
  children
}) {
  const bgClasses = [
    styles.sidebarBg,
    variant === 'withGraphics' && styles.sidebarWithGraphics
  ].filter(Boolean).join(' ')

  return (
    <div className={styles.sidebarArea}>
      <div className={bgClasses}></div>

      {showTimeBadge && (
        <div className={styles.timeBadgeContainer}>
          <TimeBadge />
        </div>
      )}

      <div className={styles.welcomeCard}>
        <h3>{welcomeTitle}</h3>
        <p>{welcomeText}</p>
        {showPhone && phoneText && (
          <div className={styles.phoneRow}>
            <p className={styles.phoneLine}>{phoneText}</p>
            <p className={styles.phoneDays}>Monday—Friday, 8:00 AM—11:00 PM ET</p>
          </div>
        )}
        <img src="/assets/images/buble-vector.png" alt="" className={styles.bubbleVector} />
        {variant === 'withGraphics' && (
          <img src="/assets/images/V-Element.png" alt="" className={styles.vElement} />
        )}
      </div>

      <div className={styles.nurseContainer}>
        <img src={nurseImageSrc} alt="Nurse Navigator" className={styles.nurseImage} />
      </div>

      {children}
    </div>
  )
}

export default Sidebar
