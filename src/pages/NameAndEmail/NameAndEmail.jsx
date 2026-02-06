import { useNavigate } from 'react-router-dom'
import { useEnrollment } from '../../context/EnrollmentContext'
import PageLayout from '../../components/PageLayout/PageLayout'
import Stepper from '../../components/Stepper/Stepper'
import Button from '../../components/Button/Button'
import FormField from '../../components/FormField/FormField'
import Checkbox from '../../components/Checkbox/Checkbox'
import Accordion from '../../components/Accordion/Accordion'
import styles from './NameAndEmail.module.css'

function NameAndEmail() {
  const navigate = useNavigate()
  const { formData, updateField } = useEnrollment()

  const handleSubmit = () => {
    if (formData.consentSPI && formData.firstName && formData.lastName && formData.email) {
      navigate('/contact')
    }
  }

  const isValid = formData.consentSPI && formData.firstName && formData.lastName && formData.email

  return (
    <>
      <Stepper currentStep={1} />
      <PageLayout
        sidebarVariant="withGraphics"
        sidebarWelcomeTitle="Hi there!"
        sidebarWelcomeText="If you have any questions about IMAAVY withMe or your treatment, we're here to help you every step of the way."
        sidebarShowPhone={true}
        sidebarPhoneText="For questions or immediate assistance, call 888-750-8733"
        sidebarShowTimeBadge={true}
      >
        <h1 className="page-title-sm">Get started with IMAAVY withMe</h1>

        <p className="page-subtitle">Now that you've been prescribed IMAAVY™, enroll in IMAAVY withMe—a support program designed with you in mind.</p>

        <h2 className="section-title">Tell us about yourself.</h2>

        <p className="mb-4"><strong>The information you provide should match what is listed on your health insurance documents, where applicable.</strong></p>

        <div className={styles.checkboxGroup}>
          <Checkbox
            checked={formData.consentSPI}
            onChange={(e) => updateField('consentSPI', e.target.checked)}
            required={true}
            label={
              <>
                By providing consent, you agree to the collection and use of your Sensitive Personal Information (SPI). Examples of SPI may include, but are not limited to, health-related information. We use this information consistent with our <a href="#">Privacy Policy</a>, including to personalize the information you receive, to provide communications about products and services relating to your current disease and/or medicines from Johnson & Johnson that help treat your disease, to fulfill any requests you submit, and to research, develop, and improve our products and services.
              </>
            }
          />
        </div>

        <div className={styles.formRow}>
          <FormField
            label="First Name"
            required={true}
            value={formData.firstName}
            onChange={(e) => updateField('firstName', e.target.value)}
          />
          <FormField
            label="Last Name"
            required={true}
            value={formData.lastName}
            onChange={(e) => updateField('lastName', e.target.value)}
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.emailField}>
            <FormField
              label="Email"
              type="email"
              required={true}
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
            />
          </div>
        </div>

        <p className={styles.formHelp}>Your email will be used for communications relating to the IMAAVY withMe program and will be required to log in to your IMAAVY withMe Patient Portal.</p>

        <div className={styles.resourcesCard}>
          <div className={styles.resourcesCardContent}>
            <h3 className={styles.cardTitle}>Other optional resources:</h3>

            <Checkbox
              checked={formData.receivePersonalizedComms}
              onChange={(e) => updateField('receivePersonalizedComms', e.target.checked)}
              title="Receive personalized communications."
              description="Empower your journey with relevant information. Receive updates about disease education and J&J medicines."
            />

            <Checkbox
              checked={formData.receiveJJUpdates}
              onChange={(e) => updateField('receiveJJUpdates', e.target.checked)}
              title="Receive updates about other J&J medicines and resources."
              description="Receive information about other J&J medicines and resources."
            />
          </div>
          <div className={styles.resourceIcon}>
            <img src="/assets/images/Envelope.png" alt="" />
          </div>
        </div>

        <Accordion title="Customize your communications (optional)">
          <h4 className="mb-4">What information are you most interested in receiving?</h4>
          <p className="mb-4"><strong>Select all that apply:</strong></p>

          <Checkbox
            label="Tips/educational materials for managing my condition"
            checked={formData.interestedInTips}
            onChange={(e) => updateField('interestedInTips', e.target.checked)}
          />
          <Checkbox
            label="Cost support options"
            checked={formData.interestedInCostSupport}
            onChange={(e) => updateField('interestedInCostSupport', e.target.checked)}
          />
          <Checkbox
            label="Infusion support"
            checked={formData.interestedInInfusionSupport}
            onChange={(e) => updateField('interestedInInfusionSupport', e.target.checked)}
          />
          <Checkbox
            label="Nurse Navigator support"
            checked={formData.interestedInNurseNavigator}
            onChange={(e) => updateField('interestedInNurseNavigator', e.target.checked)}
          />

          <h4 className="mt-6 mb-4">Have you started treatment?</h4>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                className={styles.radioInput}
                name="treatment-started"
                value="yes"
                checked={formData.treatmentStarted === 'yes'}
                onChange={(e) => updateField('treatmentStarted', e.target.value)}
              />
              <span>Yes</span>
            </label>
          </div>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                className={styles.radioInput}
                name="treatment-started"
                value="no"
                checked={formData.treatmentStarted === 'no'}
                onChange={(e) => updateField('treatmentStarted', e.target.value)}
              />
              <span>No</span>
            </label>
          </div>

          {formData.treatmentStarted === 'yes' && (
            <div className={styles.treatmentOptions}>
              <h4 className="mt-6 mb-4">Which option best describes your current situation?</h4>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    className={styles.radioInput}
                    name="treatment-situation"
                    value="first"
                    checked={formData.treatmentSituation === 'first'}
                    onChange={(e) => updateField('treatmentSituation', e.target.value)}
                  />
                  <span>I've received my first IMAAVY™ infusion</span>
                </label>
              </div>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    className={styles.radioInput}
                    name="treatment-situation"
                    value="two"
                    checked={formData.treatmentSituation === 'two'}
                    onChange={(e) => updateField('treatmentSituation', e.target.value)}
                  />
                  <span>I've received two IMAAVY™ infusions</span>
                </label>
              </div>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    className={styles.radioInput}
                    name="treatment-situation"
                    value="three-plus"
                    checked={formData.treatmentSituation === 'three-plus'}
                    onChange={(e) => updateField('treatmentSituation', e.target.value)}
                  />
                  <span>I've received three or more IMAAVY™ infusions</span>
                </label>
              </div>
            </div>
          )}
        </Accordion>

        <div className={styles.btnGroup}>
          <Button onClick={handleSubmit} disabled={!isValid}>Submit and Continue</Button>
          <Button variant="secondary" onClick={() => navigate('/')}>Back</Button>
        </div>
      </PageLayout>
    </>
  )
}

export default NameAndEmail
