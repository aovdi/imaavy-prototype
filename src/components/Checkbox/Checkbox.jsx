import styles from './Checkbox.module.css'

function Checkbox({
  label,
  title,
  description,
  checked = false,
  onChange,
  required = false,
  variant = 'default', // 'default', 'eligibility', 'resource'
  icon,
  name,
  className = ''
}) {
  const groupClasses = [
    styles.checkboxGroup,
    variant === 'resource' && styles.resourceItem,
    className
  ].filter(Boolean).join(' ')

  const inputClasses = [
    styles.checkboxInput,
    variant === 'eligibility' && styles.eligibilityInput
  ].filter(Boolean).join(' ')

  return (
    <div className={groupClasses}>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          className={inputClasses}
          checked={checked}
          onChange={onChange}
          name={name}
        />
        <span className={styles.checkboxText}>
          {required && <span className={styles.required}>*</span>}
          {title && <span className={styles.checkboxTitle}>{title}</span>}
          {description && <span className={styles.checkboxDesc}>{description}</span>}
          {label && !title && label}
        </span>
      </label>
      {icon && <div className={styles.resourceIcon}>{icon}</div>}
    </div>
  )
}

export default Checkbox
