import styles from './RadioCard.module.css'

function RadioCard({
  title,
  description,
  icon,
  selected = false,
  onClick,
  className = ''
}) {
  const cardClasses = [
    styles.insuranceOption,
    selected && styles.selected,
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={cardClasses} onClick={onClick}>
      {icon && (
        <div className={styles.insuranceOptionIcon}>
          {icon}
        </div>
      )}
      <div className={styles.insuranceOptionContent}>
        <span className={styles.insuranceOptionTitle}>{title}</span>
        {description && <span className={styles.insuranceOptionDesc}>{description}</span>}
      </div>
    </div>
  )
}

function RadioCardGroup({ children, className = '' }) {
  return (
    <div className={`${styles.insuranceOptions} ${className}`}>
      {children}
    </div>
  )
}

export { RadioCard, RadioCardGroup }
export default RadioCard
