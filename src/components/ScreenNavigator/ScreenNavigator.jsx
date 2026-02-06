import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './ScreenNavigator.module.css'

const SCREENS = [
  { id: '1100', route: '/?state=default', label: 'Personalization' },
  { id: '1103', route: '/?state=identify', label: '\u2514 Identify' },
  { id: '1104', route: '/?state=patient', label: '\u2514 Patient Selected' },
  { id: '1105', route: '/?state=status', label: '\u2514 Status' },
  { id: '1155', route: '/under-18', label: '\u2514 Under 18' },
  { id: '1130', route: '/name-email', label: 'Name & Email' },
  { id: '1140', route: '/contact', label: 'Contact Info' },
  { id: '1153', route: '/cost-support', label: 'Insurance Type' },
  { id: '1150', route: '/eligibility', label: 'Eligibility' },
  { id: '1262', route: '/provider', label: 'Provider Info' },
  { id: '1161', route: '/terms', label: 'Terms & Conditions' },
  { id: '1180', route: '/confirmation', label: 'Welcome' },
]

function ScreenNavigator({
  visible: controlledVisible,
  onToggle,
  className = '',
  ...props
}) {
  const [internalVisible, setInternalVisible] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  // Support both controlled and uncontrolled modes
  const isControlled = controlledVisible !== undefined
  const visible = isControlled ? controlledVisible : internalVisible

  const handleToggle = useCallback(() => {
    if (isControlled && onToggle) {
      onToggle()
    } else {
      setInternalVisible(prev => !prev)
    }
  }, [isControlled, onToggle])

  // Keyboard shortcut handler
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Only toggle on 'N' key when not typing in an input
      if (
        event.key.toLowerCase() === 'n' &&
        !['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName)
      ) {
        handleToggle()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleToggle])

  const handleNavigate = (route) => {
    navigate(route)
  }

  const classes = [
    styles.navigator,
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={visible ? classes : undefined} style={visible ? undefined : { display: 'none' }} {...props}>
      <h3 className={styles.title}>Screen Navigator</h3>
      <ul className={styles.screenList}>
        {SCREENS.map((screen) => {
          const currentPath = location.pathname + location.search
          const isActive = currentPath === screen.route
          const buttonClasses = [
            styles.screenButton,
            isActive && styles.active
          ].filter(Boolean).join(' ')

          return (
            <li key={screen.id}>
              <button
                className={buttonClasses}
                onClick={() => handleNavigate(screen.route)}
                type="button"
              >
                <span className={styles.screenId}>{screen.id}</span>
                <span className={styles.screenLabel}>{screen.label}</span>
              </button>
            </li>
          )
        })}
      </ul>
      <button
        className={styles.hideButton}
        onClick={handleToggle}
        type="button"
      >
        Hide (Press N)
      </button>
    </div>
  )
}

export default ScreenNavigator
