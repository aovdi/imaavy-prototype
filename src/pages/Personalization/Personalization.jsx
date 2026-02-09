import { useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useEnrollment } from '../../context/EnrollmentContext'
import { useVersion } from '../../context/VersionContext'
import PageLayout from '../../components/PageLayout/PageLayout'
import Button from '../../components/Button/Button'
import Dropdown from '../../components/Dropdown/Dropdown'
import styles from './Personalization.module.css'

const whoOptions = [
  { value: 'patient', label: 'Patient' },
  { value: 'caregiver', label: 'Caregiver' },
]

const prescriptionOptions = [
  { value: 'current', label: 'currently prescribed IMAAVY\u2122' },
  { value: 'not-yet', label: 'not yet prescribed IMAAVY\u2122' },
]

const ageOptions = [
  { value: '18-or-older', label: '18 years of age or older' },
  { value: 'under-18', label: 'not yet 18 years old' },
]

function Personalization() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { formData, updateField, updateFields } = useEnrollment()
  const { version, nav } = useVersion()

  // ScreenNavigator state presets
  useEffect(() => {
    const state = searchParams.get('state')
    if (state === 'default' || state === 'identify') {
      updateFields({ userType: '', prescriptionStatus: '', ageRange: '' })
    } else if (state === 'patient') {
      updateFields({ userType: 'patient', prescriptionStatus: '', ageRange: '' })
    } else if (state === 'status') {
      updateFields({ userType: 'patient', prescriptionStatus: 'current', ageRange: '' })
    }
  }, [searchParams, updateFields])

  const isUnder18 = formData.ageRange === 'under-18'
  const allFilled = formData.userType && formData.prescriptionStatus && formData.ageRange
  const isValid = allFilled && !isUnder18
  const canContinue = allFilled

  const handleContinue = () => {
    if (isUnder18) {
      navigate(nav('/under-18'))
    } else if (isValid) {
      navigate(nav('/name-email'))
    }
  }

  const title = version.messaging?.personalization?.title || 'To find the best programs for your journey, simply answer a few questions below to begin your enrollment.'
  const subtitle = version.messaging?.personalization?.subtitle
  const disclaimer = version.messaging?.personalization?.disclaimer

  return (
    <PageLayout
      wideContent={!version.showSidebar}
      sidebarWelcomeTitle="Welcome!"
      sidebarWelcomeText="Tell us more about you so that we can show you support that may be relevant to your journey."
      belowContentChildren={
        !version.showSidebar ? (
          <div className={styles.belowContent}>
            <p className={styles.belowContentText}>Tell us more about you so that we can show you support that may be relevant to your journey.</p>
          </div>
        ) : undefined
      }
    >
      <h1 className="page-title">{title}</h1>

      {subtitle && <p className="page-subtitle">{subtitle}</p>}
      {disclaimer && <p className={styles.disclaimerText}><em>{disclaimer}</em></p>}

      <p className={styles.requiredNote}><span className="text-required">*</span> Required field</p>

      <div className={styles.formRowInline}>
        <span className={styles.formLabelInline}>I am a <span className="text-required">*</span></span>
        <Dropdown
          options={whoOptions}
          value={formData.userType}
          onChange={(value) => updateField('userType', value)}
          placeholder="select who you are"
        />

        <div className={styles.inlineGroup}>
          <span className={styles.formLabelInline}>and I am <span className="text-required">*</span></span>
          <Dropdown
            options={prescriptionOptions}
            value={formData.prescriptionStatus}
            onChange={(value) => updateField('prescriptionStatus', value)}
            placeholder="select prescription status"
          />
        </div>
      </div>

      <div className={styles.formRowInline}>
        <span className={styles.formLabelInline}>I am <span className="text-required">*</span></span>
        <Dropdown
          options={ageOptions}
          value={formData.ageRange}
          onChange={(value) => updateField('ageRange', value)}
          placeholder="select your age"
        />
      </div>

      {formData.ageRange && (
        <p className={styles.ageRequirementText}>
          Must be 18 or older to enroll. If you're not 18, you must enroll with a caregiver who is a Legally Authorized Representative (LAR) such as a parent or legal guardian.
        </p>
      )}

      {formData.userType && formData.prescriptionStatus && (
        <>
          <div className={styles.benefitsSection}>
            <p className={styles.benefitsHeading}>
              IMAAVY withMe gives you tailored support to help you take charge of your treatment journey.
              <br /><br />
              Free, personalized support for you when and where you need it.
            </p>

            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}><img src="/assets/images/nurse-navigator-icon.png" alt="Nurse Navigator" /></div>
                <div className={styles.benefitContent}>
                  <p className={styles.benefitTitle}>A dedicated Nurse Navigator*</p>
                  <p className={styles.benefitDesc}>
                    A registered nurse who partners with you to prepare for infusions and helps solve treatment challenges.
                    <br /><br />
                    *Nurse Navigators do not provide medical advice. Please ask your doctor any questions you might have about your disease and treatment.
                  </p>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}><img src="/assets/images/cost-support-icon.png" alt="Cost Support" /></div>
                <div className={styles.benefitContent}>
                  <p className={styles.benefitTitle}>Access and cost support</p>
                  <p className={styles.benefitDesc}>
                    Access and cost support to help you access and afford your IMAAVY™ treatment. Infusion support to learn what to expect during treatment and find a treatment site.
                  </p>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}><img src="/assets/images/patient-portal.png" alt="Patient Portal" /></div>
                <div className={styles.benefitContent}>
                  <p className={styles.benefitTitle}>A personalized patient portal</p>
                  <p className={styles.benefitDesc}>
                    Resources tailored to your needs—helpful tips, tools, and access to the Patient Portal.
                  </p>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}><img src="/assets/images/welcome-kit.png" alt="Welcome Kit" /></div>
                <div className={styles.benefitContent}>
                  <p className={styles.benefitTitle}>Welcome Kit</p>
                  <p className={styles.benefitDesc}>
                    Get a free Welcome Kit with resources delivered to your door to help you start and continue your IMAAVY™ treatment.
                    <br /><br />
                    You are eligible for this IMAAVY withMe Welcome Kit because you have indicated you have been prescribed IMAAVY™ by your doctor. Please note the IMAAVY withMe Welcome Kit is for informational purposes only and there is no guarantee that product coverage will be provided by your insurance plan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.phoneContact}>
            <div className={styles.phoneIcon}><img src="/assets/images/Phone.png" alt="Phone" /></div>
            <div className={styles.phoneDivider} />
            <div className={styles.phoneText}>
              For questions or immediate assistance, call <span className={styles.phoneNumber}>888-750-8733</span>
              <br />
              Monday–Friday, 8:00 AM–11:00 PM ET
            </div>
          </div>
        </>
      )}

      <div className={styles.legalText}>
        <p>The information you provide here should match what is listed on the health insurance documents. The information you provide in the following screens and, as applicable based on your responses, in any subsequent enrollment form, will be used by Johnson &amp; Johnson Health Care Systems Inc., our affiliates, and our service providers to determine your eligibility for programs, your registration and participation in such programs, to send you communications about products and services relating to your current disease and/or medicines from Johnson &amp; Johnson that help treat your disease, to create a portal account, as applicable, and for any optional requests you may select. In order to personalize the information you receive, the information you provide during enrollment may be combined with information received from other sources, as described in our Privacy Policy. Our <a href="#">Privacy Policy</a> further governs the use of the information you provide. You confirm that you are 18 years of age or older and that you agree to the <a href="#">Terms of Use</a>.</p>
      </div>

      <div className={styles.btnGroup}>
        <Button onClick={handleContinue} disabled={!canContinue}>Continue</Button>
      </div>
    </PageLayout>
  )
}

export default Personalization
