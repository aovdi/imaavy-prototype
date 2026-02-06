import styles from './Stepper.module.css'

const defaultSteps = [
  { id: 1, label: 'Personalized\nSupport' },
  { id: 2, label: 'Contact\nInformation' },
  { id: 3, label: 'Cost Support' },
  { id: 4, label: 'Eligibility' },
  { id: 5, label: 'Provider\nInformation' },
  { id: 6, label: 'Terms &\nConditions' },
]

function Stepper({ steps = defaultSteps, currentStep = 1 }) {
  return (
    <div className={styles.stepper}>
      <div className={styles.stepperInner}>
        {steps.map((step, index) => {
        const isCompleted = step.id < currentStep
        const isActive = step.id === currentStep

        const itemClasses = [
          styles.stepperItem,
          isCompleted && styles.completed,
          isActive && styles.active
        ].filter(Boolean).join(' ')

        return (
          <div key={step.id} className={itemClasses}>
            <div className={styles.stepperNumber}>
              {isCompleted ? (
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                  <path d="M1 5L4 8L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                step.id
              )}
            </div>
            <span
              className={styles.stepperLabel}
              dangerouslySetInnerHTML={{ __html: step.label.replace('\n', '<br/>') }}
            />
          </div>
        )
        })}
      </div>
    </div>
  )
}

export default Stepper
