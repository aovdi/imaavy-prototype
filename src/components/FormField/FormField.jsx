import styles from './FormField.module.css'

function FormField({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder = '',
  required = false,
  error = '',
  helpText = '',
  className = '',
  ...props
}) {
  const fieldClasses = [
    styles.formField,
    error && styles.error,
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={styles.formGroup}>
      <div className={fieldClasses}>
        <label className={styles.formLabel}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.formInput}
          {...props}
        />
      </div>
      {helpText && <p className={styles.formHelp}>{helpText}</p>}
      {error && <p className={styles.formError}>{error}</p>}
    </div>
  )
}

export default FormField
