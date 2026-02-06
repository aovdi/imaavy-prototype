import { useState } from 'react'
import styles from './Accordion.module.css'

function Accordion({
  title,
  children,
  defaultOpen = false,
  variant = 'default', // 'default', 'onboarding'
  number,
  className = ''
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  if (variant === 'onboarding') {
    return (
      <div className={`${styles.onboardingAccordion} ${className}`}>
        <div
          className={`${styles.onboardingAccordionHeader} ${isOpen ? styles.active : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {number && <div className={styles.onboardingNumber}>{number}</div>}
          <span className={styles.onboardingTitle}>{title}</span>
          <span className={styles.onboardingArrow}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </span>
        </div>
        <div className={`${styles.onboardingAccordionContent} ${isOpen ? styles.active : ''}`}>
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.accordion} ${className}`}>
      <div
        className={`${styles.accordionHeader} ${isOpen ? styles.active : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.accordionTitle}>{title}</span>
        <span className={styles.accordionIcon}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      </div>
      <div className={`${styles.accordionContent} ${isOpen ? styles.active : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default Accordion
