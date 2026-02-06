import { useNavigate } from 'react-router-dom'
import { useEnrollment } from '../../context/EnrollmentContext'
import PageLayout from '../../components/PageLayout/PageLayout'
import Stepper from '../../components/Stepper/Stepper'
import Button from '../../components/Button/Button'
import styles from './ProviderInfo.module.css'

function ProviderInfo() {
  const navigate = useNavigate()
  const { formData, updateField } = useEnrollment()

  const handleContinue = () => {
    navigate('/terms')
  }

  return (
    <>
      <Stepper currentStep={5} />
      <PageLayout
        sidebarVariant="withGraphics"
        sidebarWelcomeTitle="Sarah,"
        sidebarWelcomeText="It is important for us to know who prescribed your medicine so that we can let them know that you have enrolled in the IMAAVY withMe Savings Program."
        sidebarShowPhone={true}
        sidebarPhoneText="For questions or immediate assistance, call 888-750-8733"
      >
        <h1 className="page-title">Everything looks good! To finish enrolling in cost support, we just need a little more information</h1>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>My Provider <span className={styles.required}>*</span></h2>
          <p className={styles.sectionDesc}>Please enter the information about the provider who prescribed this medicine to you.</p>
          <button className={styles.findProviderBtn}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="9" r="7" stroke="#222222" strokeWidth="2" />
              <path d="M14 14L18 18" stroke="#222222" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Find My Provider
          </button>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>My Treatment Location <span className={styles.required}>*</span></h2>
          <p className={styles.sectionDesc}>Please enter the information about the location where you receive treatment.</p>

          <div className={styles.radioGroup}>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="treatmentLocation"
                className={styles.radioInput}
                checked={formData.treatmentLocationSame === true}
                onChange={() => updateField('treatmentLocationSame', true)}
              />
              <span>My treatment location is the same as my provider location.</span>
            </label>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="treatmentLocation"
                className={styles.radioInput}
                checked={formData.treatmentLocationSame === false}
                onChange={() => updateField('treatmentLocationSame', false)}
              />
              <span>My treatment location is not the same as my provider location.</span>
            </label>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>How the Savings Program works</h2>
          <p className={styles.sectionDesc}>
            Once you begin treatment with IMAAVY&#8482;, how the Savings Program payment is issued for your out-of-pocket IMAAVY&#8482; medicine costs and certain IMAAVY&#8482; infusion administration and related monitoring costs will be dependent on your preference and what claim documents are submitted. Payment may be issued (i) directly to your provider (if the provider is not charging you up front for the treatment costs), (ii) as funds loaded onto your Savings Program card to be used to pay your provider, or (iii) by check sent to you in the mail (a rebate form and proof of payment/receipt must be submitted for this option).
          </p>
        </div>

        <div className={styles.btnGroup}>
          <Button onClick={handleContinue}>Continue</Button>
          <Button variant="secondary" onClick={() => navigate('/eligibility')}>Back</Button>
        </div>
      </PageLayout>
    </>
  )
}

export default ProviderInfo
