import { useNavigate } from 'react-router-dom'
import { useEnrollment } from '../../context/EnrollmentContext'
import PageLayout from '../../components/PageLayout/PageLayout'
import Stepper from '../../components/Stepper/Stepper'
import Button from '../../components/Button/Button'
import FormField from '../../components/FormField/FormField'
import Dropdown from '../../components/Dropdown/Dropdown'
import Checkbox from '../../components/Checkbox/Checkbox'
import Accordion from '../../components/Accordion/Accordion'
import { useVersion } from '../../context/VersionContext'
import styles from './ContactInfo.module.css'

const stateOptions = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
]

const phoneTypeOptions = [
  { value: 'mobile', label: 'Mobile' },
  { value: 'home', label: 'Home' },
  { value: 'work', label: 'Work' },
]

const sexAtBirthOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'prefer-not', label: 'Prefer not to say' },
]

function ContactInfo() {
  const navigate = useNavigate()
  const { formData, updateField } = useEnrollment()
  const { version, nav } = useVersion()

  const handleContinue = () => {
    navigate(nav('/cost-support'))
  }

  // Format phone number as user types
  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, '')
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/)
    if (match) {
      let formatted = ''
      if (match[1]) formatted = `(${match[1]}`
      if (match[1]?.length === 3) formatted += ') '
      if (match[2]) formatted += match[2]
      if (match[2]?.length === 3 && match[3]) formatted += '-'
      if (match[3]) formatted += match[3]
      return formatted
    }
    return value
  }

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value)
    updateField('phone', formatted)
  }

  // Format date of birth as user types (MM/DD/YYYY)
  const formatDateOfBirth = (value) => {
    const cleaned = value.replace(/\D/g, '')
    const match = cleaned.match(/^(\d{0,2})(\d{0,2})(\d{0,4})$/)
    if (match) {
      let formatted = ''
      if (match[1]) formatted = match[1]
      if (match[1]?.length === 2 && match[2]) formatted += '/'
      if (match[2]) formatted += match[2]
      if (match[2]?.length === 2 && match[3]) formatted += '/'
      if (match[3]) formatted += match[3]
      return formatted
    }
    return value
  }

  const handleDateOfBirthChange = (e) => {
    const formatted = formatDateOfBirth(e.target.value)
    updateField('dateOfBirth', formatted)
  }

  const title = version.messaging?.contactInfo?.title || "Let's create your IMAAVY withMe profile!"
  const subtitle = version.messaging?.contactInfo?.subtitle || "We will use this information to match you with your very own free, dedicated Nurse Navigator* who will reach out to you in the next 1-2 business days to provide resources and personalized support through your treatment journey."
  const disclaimer = version.messaging?.contactInfo?.disclaimer

  return (
    <>
      {version.showStepper && <Stepper currentStep={2} />}
      <PageLayout
        sidebarVariant="withGraphics"
        sidebarWelcomeTitle="Hi there!"
        sidebarWelcomeText="If you have any questions about IMAAVY withMe or your treatment, we're here to help you every step of the way."
        sidebarShowPhone={true}
        sidebarPhoneText="For questions or immediate assistance, call 888-750-8733"
        wideContent={!version.showSidebar}
        belowContentChildren={
          !version.showSidebar ? (
            <div className={styles.belowContent}>
              <p className={styles.belowContentText}>If you have any questions about IMAAVY withMe or your treatment, we're here to help you every step of the way.</p>
            </div>
          ) : undefined
        }
      >
        <h1 className="page-title-sm">{title}</h1>

        <p className="page-subtitle">{subtitle}</p>

        {disclaimer ? (
          <p className={styles.disclaimer}><em>{disclaimer}</em></p>
        ) : (
          <>
            <p className="mb-4">You'll also get access to a personalized patient portal with customized resources, support, and more.</p>
            <p className={styles.disclaimer}>*Nurse Navigators do not provide medical advice. Please ask your doctor any questions you might have about your disease and treatment.</p>
          </>
        )}

        {/* Phone Number + Phone Type Row */}
        <div className={styles.formRow}>
          <div className={styles.phoneField}>
            <FormField
              label="Phone"
              type="tel"
              required={true}
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="(___) ___ - ____"
            />
          </div>
          <div className={styles.phoneTypeField}>
            <Dropdown
              variant="field"
              label="Phone Type"
              required={true}
              options={phoneTypeOptions}
              value={formData.phoneType}
              onChange={(value) => updateField('phoneType', value)}
              placeholder="Select type"
            />
          </div>
        </div>

        <p className={styles.helperText}>The Nurse Navigator* will use this number to contact you.</p>

        {/* Street Address + Apartment Row */}
        <div className={styles.formRow}>
          <div className={styles.streetField}>
            <FormField
              label="Street Address"
              required={true}
              value={formData.streetAddress}
              onChange={(e) => updateField('streetAddress', e.target.value)}
            />
          </div>
          <div className={styles.apartmentField}>
            <FormField
              label="Apartment, Suite, etc."
              value={formData.apartment}
              onChange={(e) => updateField('apartment', e.target.value)}
            />
          </div>
        </div>

        {/* City + State + Zip Row */}
        <div className={styles.formRow}>
          <div className={styles.cityField}>
            <FormField
              label="City"
              required={true}
              value={formData.city}
              onChange={(e) => updateField('city', e.target.value)}
            />
          </div>
          <div className={styles.stateField}>
            <Dropdown
              variant="field"
              label="State"
              required={true}
              options={stateOptions}
              value={formData.state}
              onChange={(value) => updateField('state', value)}
              placeholder="Select state"
            />
          </div>
          <div className={styles.zipField}>
            <FormField
              label="Zip Code"
              required={true}
              value={formData.zipCode}
              onChange={(e) => updateField('zipCode', e.target.value)}
            />
          </div>
        </div>

        {/* Date of Birth + Sex at Birth Row */}
        <div className={styles.formRow}>
          <div className={styles.dobField}>
            <FormField
              label="Date of Birth"
              required={true}
              value={formData.dateOfBirth}
              onChange={handleDateOfBirthChange}
              placeholder="mm / dd / yyyy"
            />
          </div>
          <div className={styles.sexField}>
            <div className={styles.sexFieldWrapper}>
              <Dropdown
                variant="field"
                label="Sex assigned at birth"
                required={true}
                options={sexAtBirthOptions}
                value={formData.sexAtBirth}
                onChange={(value) => updateField('sexAtBirth', value)}
                placeholder="Select"
              />
              <img src="/assets/images/Hint.png" alt="Info" className={styles.infoIcon} title="This information helps us provide appropriate health resources" />
            </div>
          </div>
        </div>

        {/* Welcome Kit Section */}
        <div className={styles.welcomeKit}>
          <div className={styles.welcomeKitContent}>
            <h3 className={styles.welcomeKitTitle}>By signing up you will receive an IMAAVY withMe Welcome Kit (optional)</h3>
            <Checkbox
              label="Mail me a Welcome Kit, which includes resources to help me get started and continue my treatment journey."
              checked={formData.wantWelcomeKit}
              onChange={(e) => updateField('wantWelcomeKit', e.target.checked)}
              className={styles.welcomeKitCheckbox}
            />
          </div>
          <div className={styles.welcomeKitImage}>
            <img src="/assets/images/welcome-kit-image.png" alt="Welcome Kit" />
          </div>
        </div>

        {/* Text Communications Consent */}
        <div className={styles.textComms}>
          <p className={styles.textCommsHeader}>Permission for text communications:</p>
          <Checkbox
            label={
              <>
                Yes, I would like to receive text messages. By selecting this option, I agree to receive text messages relating to the support and/or programs I selected above. Message and data rates may apply. Message frequency varies. I understand I am not required to provide my permission to receive text messages to participate in the support and/or programs or communications I have selected. Please review the text message{' '}
                <a href="/terms" className={styles.link}>Terms & Conditions</a>.
              </>
            }
            checked={formData.textCommsConsent}
            onChange={(e) => updateField('textCommsConsent', e.target.checked)}
          />
        </div>

        {formData.textCommsConsent && (
          <div className={styles.textPhoneField}>
            <p className={styles.textPhoneLabel}>Please provide a mobile phone number to receive text communications.</p>
            <div className={styles.textPhoneInput}>
              <FormField
                label="Phone"
                type="tel"
                required={true}
                value={formData.textPhone}
                onChange={(e) => {
                  const formatted = formatPhoneNumber(e.target.value)
                  updateField('textPhone', formatted)
                }}
                placeholder="(999)-256-4567"
              />
            </div>
          </div>
        )}

        {/* Customize Your Call Accordion */}
        {version.showCustomizeAccordions !== false && (
          <Accordion title="Customize your call (optional)">
            <div className={styles.accordionSection}>
              {/* Time Preference */}
              <div className={styles.preferenceGroup}>
                <h4 className={styles.preferenceTitle}><strong>What time frame do you prefer for receiving a call from your Nurse Navigator?</strong><br />No worries, your Nurse Navigator will reach out at your local time regardless of your time zone.</h4>
                <div className={styles.checkboxOptionsVertical}>
                  <label className={styles.checkboxOption}>
                    <input
                      type="checkbox"
                      checked={formData.callTimeMorning}
                      onChange={(e) => updateField('callTimeMorning', e.target.checked)}
                    />
                    <span>Morning (8:00 AM to 12:00 PM)</span>
                  </label>
                  <label className={styles.checkboxOption}>
                    <input
                      type="checkbox"
                      checked={formData.callTimeAfternoon}
                      onChange={(e) => updateField('callTimeAfternoon', e.target.checked)}
                    />
                    <span>Afternoon (12:00 PM to 4:00 PM)</span>
                  </label>
                  <label className={styles.checkboxOption}>
                    <input
                      type="checkbox"
                      checked={formData.callTimeEvening}
                      onChange={(e) => updateField('callTimeEvening', e.target.checked)}
                    />
                    <span>Evening (4:00 PM to 8:00 PM)</span>
                  </label>
                  <label className={styles.checkboxOption}>
                    <input
                      type="checkbox"
                      checked={formData.callTimeNoPreference}
                      onChange={(e) => updateField('callTimeNoPreference', e.target.checked)}
                    />
                    <span>No preference</span>
                  </label>
                </div>
              </div>

              {/* Language Preference */}
              <div className={styles.preferenceGroup}>
                <h4 className={styles.preferenceTitle}><strong>What is your preferred language to use when speaking with your Nurse Navigator?</strong><br />IMAAVY withMe Nurse Navigators can work with live translators with audio or visual capabilities, so just let your Nurse Navigator know what kind of language support you may need.</h4>
                <div className={styles.radioOptionsVertical}>
                  <label className={styles.radioOption}>
                    <input
                      type="radio"
                      name="languagePreference"
                      value="english"
                      checked={formData.languagePreference === 'english'}
                      onChange={(e) => updateField('languagePreference', e.target.value)}
                    />
                    <span>English</span>
                  </label>
                  <label className={styles.radioOption}>
                    <input
                      type="radio"
                      name="languagePreference"
                      value="spanish"
                      checked={formData.languagePreference === 'spanish'}
                      onChange={(e) => updateField('languagePreference', e.target.value)}
                    />
                    <span>Spanish</span>
                  </label>
                  <label className={styles.radioOption}>
                    <input
                      type="radio"
                      name="languagePreference"
                      value="mandarin"
                      checked={formData.languagePreference === 'mandarin'}
                      onChange={(e) => updateField('languagePreference', e.target.value)}
                    />
                    <span>Mandarin Chinese</span>
                  </label>
                  <label className={styles.radioOption}>
                    <input
                      type="radio"
                      name="languagePreference"
                      value="asl"
                      checked={formData.languagePreference === 'asl'}
                      onChange={(e) => updateField('languagePreference', e.target.value)}
                    />
                    <span>American Sign Language</span>
                  </label>
                  <label className={styles.radioOption}>
                    <input
                      type="radio"
                      name="languagePreference"
                      value="other"
                      checked={formData.languagePreference === 'other'}
                      onChange={(e) => updateField('languagePreference', e.target.value)}
                    />
                    <span>Other</span>
                  </label>
                </div>
              </div>

              {/* Treatment Status */}
              <div className={styles.preferenceGroup}>
                <h4 className={styles.preferenceTitle}><strong>What is your treatment status?</strong></h4>
                <div className={styles.radioOptionsVertical}>
                  <label className={styles.radioOption}>
                    <input
                      type="radio"
                      name="treatmentStatus"
                      value="received"
                      checked={formData.treatmentStatus === 'received'}
                      onChange={(e) => updateField('treatmentStatus', e.target.value)}
                    />
                    <span>I have received an infusion</span>
                  </label>
                  <label className={styles.radioOption}>
                    <input
                      type="radio"
                      name="treatmentStatus"
                      value="not-started"
                      checked={formData.treatmentStatus === 'not-started'}
                      onChange={(e) => updateField('treatmentStatus', e.target.value)}
                    />
                    <span>I haven't started treatment yet</span>
                  </label>
                </div>
              </div>

              {/* Priorities - only shown when "I haven't started treatment yet" */}
              {formData.treatmentStatus === 'not-started' && <div className={styles.preferenceGroup}>
                <h4 className={styles.preferenceTitle}><strong>What are your main priorities right now? Select all that apply.</strong></h4>
                <div className={styles.checkboxOptionsVertical}>
                  <label className={styles.checkboxOption}>
                    <input
                      type="checkbox"
                      checked={formData.priorityStartMedicine}
                      onChange={(e) => updateField('priorityStartMedicine', e.target.checked)}
                    />
                    <span>Learning more about how to confidently start my medicine</span>
                  </label>
                  <label className={styles.checkboxOption}>
                    <input
                      type="checkbox"
                      checked={formData.priorityUnderstandMedicine}
                      onChange={(e) => updateField('priorityUnderstandMedicine', e.target.checked)}
                    />
                    <span>Understanding how my medicine works and how it can help</span>
                  </label>
                  <label className={styles.checkboxOption}>
                    <input
                      type="checkbox"
                      checked={formData.priorityUncertainties}
                      onChange={(e) => updateField('priorityUncertainties', e.target.checked)}
                    />
                    <span>Addressing uncertainties or worries about starting or affording treatment</span>
                  </label>
                </div>
              </div>}
            </div>
          </Accordion>
        )}

        {/* reCAPTCHA placeholder */}
        <div className={styles.captcha}>
          <div className={styles.captchaPlaceholder}>
            <input type="checkbox" id="recaptcha" className={styles.captchaCheckbox} />
            <label htmlFor="recaptcha" className={styles.captchaLabel}>I'm not a robot</label>
            <div className={styles.captchaLogo}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" stroke="#ccc" strokeWidth="1"/>
                <path d="M16 8v8l6 3" stroke="#4285f4" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>reCAPTCHA</span>
            </div>
          </div>
        </div>

        <div className={styles.btnGroup}>
          <Button onClick={handleContinue}>Submit and Continue</Button>
          <Button variant="secondary" onClick={() => navigate(nav('/name-email'))}>Back</Button>
        </div>
      </PageLayout>
    </>
  )
}

export default ContactInfo
