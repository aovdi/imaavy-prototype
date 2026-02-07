import { useNavigate } from 'react-router-dom'
import { useEnrollment } from '../../context/EnrollmentContext'
import PageLayout from '../../components/PageLayout/PageLayout'
import Stepper from '../../components/Stepper/Stepper'
import Button from '../../components/Button/Button'
import Checkbox from '../../components/Checkbox/Checkbox'
import { useVersion } from '../../context/VersionContext'
import styles from './Terms.module.css'

function Terms() {
  const navigate = useNavigate()
  const { formData, updateField } = useEnrollment()
  const { version, nav } = useVersion()

  const handleSubmit = () => {
    if (formData.acceptedTerms) {
      navigate(nav('/confirmation'))
    }
  }

  return (
    <>
      {version.showStepper && <Stepper currentStep={6} />}
      <PageLayout
        sidebarVariant="withGraphics"
        sidebarWelcomeTitle="Sarah,"
        sidebarWelcomeText="Before we can complete your IMAAVY withMe Savings Program enrollment, we need you to review and agree to the program eligibility requirements and use."
        sidebarShowPhone={true}
        sidebarPhoneText="For questions or immediate assistance, call 888-750-8733"
      >
        <h1 className="page-title">Just one more step!</h1>

        <p className={styles.introText}>
          By confirming and submitting this information, I certify that I have completed all of the previous sections completely, accurately, and to the best of my knowledge, and that I have read, understand, and agree to the Terms and Conditions of the IMAAVY withMe Savings Program.
        </p>

        <div className={styles.scrollableTerms}>
          <p><strong>Savings Program Requirements</strong></p>

          <p>The IMAAVY withMe Savings Program provides 2 support offerings for eligible patients: Medicine Cost Support and Treatment Administration Cost Support.</p>

          <p>Medicine Cost Support can help eligible patients pay <strong>$0 per infusion</strong>. Maximum program benefit per calendar year shall apply. Terms expire at the end of each calendar year. Offer subject to change or end without notice. Restrictions, including monthly maximums, may apply.</p>

          <p>Treatment Administration Cost Support can help eligible patients save on certain out-of-pocket costs for infusion administration and related monitoring. There is a savings limit per infusion and a $7,000 maximum benefit per calendar year for Treatment Administration Cost Support. Terms expire at the end of each calendar year. Offer subject to change or end without notice, including in specific states. Not valid for residents of MA, MN, or RI.</p>

          <p>If medical/primary insurance is used for treatment, the patient or healthcare provider is required to submit an Explanation of Benefits (EOB) following each infusion to the IMAAVY withMe Savings Program to receive a rebate.</p>

          <p><strong>Medicine Cost Support</strong></p>

          <p><strong>Am I eligible for Medicine Cost Support?</strong></p>

          <p>You may be eligible for Medicine Cost Support through the IMAAVY withMe Savings Program if you are age 12 or older, use commercial or private health insurance for your prescribed IMAAVY (nipocalimab-aahu), and must pay an out-of-pocket cost for your medicine. Participate without sharing your income information.</p>

          <p>Some health plans have programs or benefit designs known as &lsquo;accumulators&rsquo; or &lsquo;maximizers.&rsquo; These programs divert patient assistance funds away from patients.</p>

          <p>Accumulators don&rsquo;t allow patient assistance to count toward the patient&rsquo;s deductible and out-of-pocket maximum until the maximum value of the patient assistance is reached.</p>

          <p>Maximizers also don&rsquo;t allow patient assistance to count toward the patient&rsquo;s deductible and out-of-pocket maximum. Maximizers apply the full value of the patient assistance over the year. This could be either the same amount each month or a larger amount early in the year that tapers off, without allowing any of those funds to count toward the patient&rsquo;s annual deductible or out-of-pocket maximum.</p>

          <p>The IMAAVY withMe Savings Program is designed solely for the benefit of the patient. Thus, Johnson &amp; Johnson reserves the right to reduce the IMAAVY withMe Savings Program maximum benefit for patients in an accumulator or maximizer program or benefit design, except where prohibited by law.</p>

          <p>In addition, some health plans have &lsquo;non-essential health benefit maximizers&rsquo; that conflict with the program requirements of the IMAAVY withMe Savings Program.</p>

          <p>These programs or benefit designs, like the services offered by SaveOnSP, classify certain specialty medicines such as IMAAVY as &lsquo;non-essential.&rsquo; This takes away protections for patients provided by the Affordable Care Act (ACA) related to maximum out-of-pocket limits.</p>

          <p>The IMAAVY withMe Savings Program is designed solely for the benefit of the patient. If your insurance company or health plan partners with SaveOnSP, then except where prohibited by law, you will not be eligible for, and you agree not to use, the IMAAVY withMe Savings Program.</p>

          <p>Please let IMAAVY withMe know if your insurance company or health plan has one of these programs or benefit designs, including SaveOnSP, by calling 844-4withMe (844-494-8463) to discuss your options. Since you may not know you are subject to one of these programs or benefit designs when you enroll in IMAAVY withMe, J&amp;J will monitor your utilization.</p>

          <p>J&amp;J reserves the right to discontinue cost support if you no longer meet eligibility requirements.</p>

          <p>If your health plan removes IMAAVY from its partnership with SaveOnSP or other non-essential health benefit maximizer, you may be eligible to be reinstated in the IMAAVY withMe Savings Program.</p>

          <p>By utilizing this Savings Program, you accept and agree to abide by these program requirements. Any individual or entity who enrolls or assists in the enrollment of a patient in the Savings Program represents that the patient meets the eligibility criteria and other requirements described.</p>

          <p><strong>Other requirements</strong></p>

          <p>This program is only for people age 12 or older using commercial or private health insurance who must pay an out-of-pocket cost for their prescribed IMAAVY medicine. This includes plans from the Health Insurance Marketplace. This program is not for people who use any state or federal government-funded healthcare program. Examples of these programs are Medicare, Medicaid, TRICARE, Department of Defense, and Veterans Administration.</p>

          <p>By enrolling in this program, you agree that this program is intended solely for the benefit of you, the patient. You may not seek payment for the value received from this program from any health plan, patient assistance foundation, flexible spending account, or healthcare savings account.</p>

          <p>You must meet the program requirements every time you use the Savings Program.</p>

          <p>Program terms will expire at the end of each calendar year. The program may change or end without notice, including in specific states.</p>

          <p>Program participants are subject to an annual maximum benefit. Program benefits are set at the discretion of J&amp;J and may change without notice.</p>

          <p>Patients who are subject to programs, health plans, or benefits that claim to reduce their patients&rsquo; out-of-pocket co-pay, co-insurance, or deductible obligations for certain prescription drugs based upon the availability of, or patient&rsquo;s enrollment in, manufacturer-sponsored co-pay assistance for such drugs will be subject to a reduced annual maximum program benefit per calendar year (not applicable to patients in Maine).</p>

          <p>Patients who are subject to programs, health plans, or benefits that claim to eliminate their out-of-pocket costs are not eligible for the IMAAVY withMe Savings Program, because this program is only for people who must pay an out-of-pocket cost for their IMAAVY medicine.</p>

          <p>Notwithstanding any other term of this program, patients who are members of health plans that partner with SaveOnSP, or who are subject to services administered by SaveOnSP, are not eligible for the IMAAVY withMe Savings Program. If your health plan removes IMAAVY from its partnership with SaveOnSP, you may be eligible for the IMAAVY withMe Savings Program.</p>

          <p>To use this program, you must follow any health plan requirements, including telling your health plan how much co-payment support you get from this program, if required. By using the Savings Program, you confirm that you have read, understood, and agree to the program requirements on this page, and you are giving permission for information related to your Savings Program transactions to be shared with your healthcare provider(s). These transactions include rebates and any funds placed on the card or balance remaining on the card.</p>

          <p>Before you enroll in the program, you will be asked to provide personal information that may include your name, address, phone number, email address, and/or other information, including information related to your prescription medicine insurance and treatment. This information is needed for Johnson &amp; Johnson Health Care Systems Inc. and our service providers to enroll you in the IMAAVY withMe Savings Program. The use of your information will be governed by our Privacy Policy.</p>

          <p>If you use medical/primary insurance to pay for your medicine, you need to submit a rebate request with an Explanation of Benefits (EOB) to get payment from the Savings Program. With your permission, your provider may submit the rebate request and EOB for you. Please make sure you and your provider know who will submit the rebate request. Rebate requests must be submitted within 365 days of the date of service.</p>

          <p>This program offer may not be used with any other coupon, discount, prescription savings card, free trial, or other offer. Offer good only in the United States and its territories. Void where prohibited, taxed, or limited by law.</p>

          <p>You may end your participation in IMAAVY withMe at any time by calling 844-4withMe (844-494-8463).</p>

          <p><strong>Treatment Administration Cost Support</strong></p>

          <p><strong>Am I eligible for Treatment Administration Cost Support?</strong></p>

          <p>If you have been prescribed IMAAVY, you may be eligible for Treatment Administration Cost Support through the IMAAVY withMe Savings Program if you are age 12 or older, have commercial or private health insurance, and must pay an out-of-pocket cost for your IMAAVY infusion administration and related monitoring. Participate without sharing your income information.</p>

          <p>By utilizing this Savings Program, you accept and agree to abide by these program requirements. Any individual or entity who enrolls or assists in the enrollment of a patient in the Savings Program represents that the patient meets the eligibility criteria and other requirements described.</p>

          <p><strong>Other requirements</strong></p>

          <p>This program is only for people age 12 or older with commercial or private health insurance who must pay an out-of-pocket cost for their IMAAVY infusion administration and related monitoring. This includes plans from the Health Insurance Marketplace. This program is not for people who use any state or federal government-funded healthcare program. Examples of these programs are Medicare, Medicaid, TRICARE, Department of Defense, and Veterans Administration.</p>

          <p>By enrolling in this program, you agree that this program is intended solely for the benefit of you, the patient. You may not seek payment for the value received from this program from any health plan, patient assistance foundation, flexible spending account, or healthcare savings account.</p>

          <p>You must meet the program requirements every time you use the Savings Program.</p>

          <p>Program terms will expire at the end of each calendar year. The program may change or end without notice, including in specific states. Treatment Administration Cost Support is not valid for residents of MA, MN, or RI.</p>

          <p>To use this Treatment Administration Cost Support, you must follow any health plan requirements, including telling your health plan how much co-payment support you get from this program, if required. By using the Savings Program, you confirm that you have read, understood, and agree to the program requirements on this page, and you are giving permission for information related to your Savings Program transactions to be shared with your healthcare provider(s). These transactions include rebates and any funds placed on the card or balance remaining on the card.</p>

          <p>Before you enroll in the program, you will be asked to provide personal information that may include your name, address, phone number, email address, and/or other information, including information related to your prescription medicine insurance and treatment. This information is needed for Johnson &amp; Johnson Health Care Systems Inc. and our service providers to enroll you in the IMAAVY withMe Savings Program. The use of your information will be governed by our Privacy Policy.</p>

          <p>If you use medical/primary insurance to pay for your infusion administration and related monitoring, you are responsible for submitting an Explanation of Benefits (EOB) to get payment from the program. With your permission, your provider may submit the rebate request and EOB for you. Please make sure you and your provider know who will submit the rebate request. Rebate requests must be submitted within 365 days of the date of service.</p>

          <p>This program offer may not be used with any other coupon, discount, prescription savings card, free trial, or other offer. Offer good only in the United States and its territories, excluding states noted above. Void where prohibited, taxed, or limited by law.</p>

          <p>You may end your participation in IMAAVY withMe at any time by calling 844-4withMe (844-494-8463).</p>
        </div>

        <div className={styles.checkboxGroup}>
          <Checkbox
            checked={formData.acceptedTerms}
            onChange={(e) => updateField('acceptedTerms', e.target.checked)}
            required={true}
            label="I have read and agree to the program requirements for the IMAAVY withMe Savings Program. *"
          />
        </div>

        <div className={styles.btnGroup}>
          <Button onClick={handleSubmit} disabled={!formData.acceptedTerms}>Continue</Button>
          <Button variant="secondary" onClick={() => navigate(nav('/provider'))}>Back</Button>
        </div>
      </PageLayout>
    </>
  )
}

export default Terms
