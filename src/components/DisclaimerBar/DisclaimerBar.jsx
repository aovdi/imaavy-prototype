import styles from './DisclaimerBar.module.css'

function DisclaimerBar() {
  return (
    <div className={styles.disclaimerBar}>
      <div className={styles.disclaimerBarInner}>
        Please read the full <a href="#">Prescribing Information</a> and <a href="#">Medication Guide</a> for IMAAVY™ and discuss any questions you have with your doctor.
      </div>
    </div>
  )
}

export default DisclaimerBar
