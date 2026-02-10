import { useState, useRef, useEffect } from 'react'
import styles from './Dropdown.module.css'

function Dropdown({
  options = [],
  value,
  onChange,
  onBlur,
  placeholder = 'Select an option',
  label,
  required = false,
  error = '',
  variant = 'pill', // 'pill' for inline, 'field' for form field style
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const onBlurRef = useRef(onBlur)
  onBlurRef.current = onBlur

  const selectedOption = options.find(opt => opt.value === value)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen((wasOpen) => {
          if (wasOpen) onBlurRef.current?.()
          return false
        })
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (optionValue) => {
    onChange(optionValue)
    setIsOpen(false)
    onBlur?.()
  }

  const containerClasses = [
    styles.customDropdown,
    isOpen && styles.open,
    variant === 'field' && styles.fieldVariant,
    className
  ].filter(Boolean).join(' ')

  const triggerClasses = [
    styles.customDropdownTrigger,
    selectedOption && styles.hasValue,
    error && styles.error
  ].filter(Boolean).join(' ')

  if (variant === 'field') {
    return (
      <div className={styles.formGroup}>
        <div className={`${styles.formField} ${error ? styles.formFieldError : ''}`}>
          {label && (
            <label className={styles.formLabel}>
              {label}
              {required && <span className={styles.required}>*</span>}
            </label>
          )}
          <div className={containerClasses} ref={dropdownRef}>
            <div
              className={triggerClasses}
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedOption ? selectedOption.label : placeholder}
            </div>
            {isOpen && (
              <div className={styles.customDropdownMenu}>
                {options.map((option) => (
                  <div
                    key={option.value}
                    className={`${styles.customDropdownOption} ${value === option.value ? styles.selected : ''}`}
                    onClick={() => handleSelect(option.value)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {error && <p className={styles.formError}>{error}</p>}
      </div>
    )
  }

  return (
    <div className={containerClasses} ref={dropdownRef}>
      <div
        className={triggerClasses}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : placeholder}
      </div>
      {isOpen && (
        <div className={styles.customDropdownMenu}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.customDropdownOption} ${value === option.value ? styles.selected : ''}`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
