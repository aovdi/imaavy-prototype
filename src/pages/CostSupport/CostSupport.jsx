import { useNavigate } from 'react-router-dom'
import { useEnrollment } from '../../context/EnrollmentContext'
import PageLayout from '../../components/PageLayout/PageLayout'
import Stepper from '../../components/Stepper/Stepper'
import Button from '../../components/Button/Button'
import { RadioCard, RadioCardGroup } from '../../components/RadioCard/RadioCard'
import { useVersion } from '../../context/VersionContext'
import styles from './CostSupport.module.css'


function CostSupport() {
  const navigate = useNavigate()
  const { formData, updateField } = useEnrollment()
  const { version, nav } = useVersion()

  const handleContinue = () => {
    navigate(nav('/eligibility'))
  }

  return (
    <>
      {version.showStepper && <Stepper currentStep={3} />}
      <PageLayout
        sidebarVariant="withGraphics"
        sidebarWelcomeTitle="Hi there!"
        sidebarWelcomeText="If you have any questions about IMAAVY withMe or your treatment, we're here to help you every step of the way."
        sidebarShowPhone={true}
        sidebarPhoneText="For questions or immediate assistance, call 888-750-8733"
        belowContentChildren={
          !version.showSidebar ? (
            <div className={styles.belowContent}>
              <p className={styles.belowContentText}>If you have any questions about IMAAVY withMe or your treatment, we're here to help you every step of the way.</p>
            </div>
          ) : undefined
        }
      >
        <h1 className="page-title-sm">What type of health insurance coverage do you have?</h1>

        <p className="page-subtitle">Select the option that best describes your insurance coverage.</p>

        <RadioCardGroup>
          <RadioCard
            title="Commercial / Private Insurance"
            description="Insurance through an employer, purchased individually, or through a marketplace/exchange."
            icon={<img src="/assets/images/Commercial-or-Private.png" alt="" />}
            selected={formData.insuranceType === 'commercial'}
            onClick={() => updateField('insuranceType', 'commercial')}
          />

          <RadioCard
            title="Government Insurance"
            description="Medicare, Medicaid, TRICARE, VA benefits, or other government-funded programs."
            icon={<img src="/assets/images/Government.png" alt="" />}
            selected={formData.insuranceType === 'government'}
            onClick={() => updateField('insuranceType', 'government')}
          />

          <RadioCard
            title="No Insurance / Self-Pay"
            description="I don't have health insurance and will pay out-of-pocket for my treatment."
            icon={<img src="/assets/images/No-Insurance.png" alt="" />}
            selected={formData.insuranceType === 'none'}
            onClick={() => updateField('insuranceType', 'none')}
          />

          <RadioCard
            title="I'm not sure"
            description="I don't know what type of insurance I have or if I have insurance."
            icon={<img src="/assets/images/I-Dont-Know.png" alt="" />}
            selected={formData.insuranceType === 'unknown'}
            onClick={() => updateField('insuranceType', 'unknown')}
          />
        </RadioCardGroup>

        <div className={styles.btnGroup}>
          <Button onClick={handleContinue}>Continue</Button>
          <Button variant="secondary" onClick={() => navigate(nav('/contact'))}>Back</Button>
        </div>
      </PageLayout>
    </>
  )
}

export default CostSupport
