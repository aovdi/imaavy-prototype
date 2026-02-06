import { useNavigate } from 'react-router-dom'
import PageLayout from '../../components/PageLayout/PageLayout'
import Stepper from '../../components/Stepper/Stepper'
import Button from '../../components/Button/Button'
import styles from './Eligibility.module.css'

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="#0074AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const checklistItems = [
  {
    id: 1,
    text: 'I have commercial or private health insurance that I will use for my IMAAVY\u2122 treatment. Examples are commercial insurance from a former/current employer, government employee health insurance, or insurance you buy privately or through the Health Insurance Marketplace (Healthcare.gov).',
  },
  {
    id: 2,
    text: 'I will NOT seek payment from any government-funded healthcare program for my IMAAVY\u2122 treatment. Examples are Medicare Parts A, B, C (also known as Medicare Advantage Plan), D, and Medicare Supplement, Medicaid, TRICARE, Department of Defense, or Veterans Administration.',
  },
  {
    id: 3,
    bold: true,
    text: 'I will NOT submit any costs paid by this program as a claim to any health plan, patient assistance foundation, flexible spending account, or healthcare savings account.',
  },
]

function Eligibility() {
  const navigate = useNavigate()

  const handleContinue = () => {
    navigate('/provider')
  }

  return (
    <>
      <Stepper currentStep={4} />
      <PageLayout
        sidebarVariant="withGraphics"
        sidebarWelcomeTitle="Hi there!"
        sidebarWelcomeText="If you have any questions about IMAAVY withMe or your treatment, we're here to help you every step of the way."
        sidebarShowPhone={true}
        sidebarPhoneText="For questions or immediate assistance, call 888-750-8733"
      >
        <h1 className="page-title">Let's check your eligibility for the IMAAVY withMe Savings Program.</h1>

        <div className={styles.requirementsSection}>
          <h2 className={styles.subheading}>Eligibility Requirements</h2>

          <p className={styles.description}>
            Eligible patients using commercial insurance pay as little as $0 per infusion. Program provides two separate offerings: Medicine Cost Support for the cost of IMAAVY&#8482; medicine and Treatment Administration Cost Support for certain IMAAVY&#8482; infusion administration and related monitoring costs. Maximum program benefit per calendar year shall apply. Offer subject to change or end without notice. Participate without sharing your income information. See program requirements.
          </p>

          <ul className={styles.checklist}>
            {checklistItems.map((item) => (
              <li key={item.id} className={styles.checklistItem}>
                <span className={styles.checkIcon}><CheckIcon /></span>
                <span className={item.bold ? styles.checklistTextBold : styles.checklistText}>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.btnGroup}>
          <Button onClick={handleContinue}>Continue</Button>
          <Button variant="secondary" onClick={() => navigate('/cost-support')}>Back</Button>
        </div>
      </PageLayout>
    </>
  )
}

export default Eligibility
