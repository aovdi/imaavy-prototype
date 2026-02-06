import styles from './TimeBadge.module.css'

function TimeBadge() {
  return (
    <div className={styles.timeBadge}>
      <img src="/assets/images/Time.svg" alt="" className={styles.timeIcon} />
      <span>Estimated time to<br />complete enrollment: 5 min</span>
    </div>
  )
}

export default TimeBadge
