import { useNavigate } from 'react-router-dom'
import { useEnrollment } from '../../context/EnrollmentContext'
import PageLayout from '../../components/PageLayout/PageLayout'
import Accordion from '../../components/Accordion/Accordion'
import styles from './Confirmation.module.css'

function Confirmation() {
  const navigate = useNavigate()
  const { formData, resetForm } = useEnrollment()

  return (
    <PageLayout
      sidebarVariant="withGraphics"
    >
      <h1 className="page-title">Welcome to IMAAVY withMe!</h1>

      <p className={styles.subtitle}>You have finished enrolling! In order to get the most out of the program, please complete the following onboarding tasks</p>

      <div className={styles.accordionGroup}>
        <Accordion variant="onboarding" number={1} title="Save the savings card information" defaultOpen={true}>
          <p className={styles.cardInstruction}>Please download your card or record the details in a safe place.</p>

          <div className={styles.cardLayout}>
            <div className={styles.cardLeftColumn}>
              <img
                src="/assets/images/Virtual-Payment-Card.png"
                alt="IMAAVY withMe Savings Card"
                className={styles.cardImage}
              />
              <div className={styles.cardButtons}>
                <button className={styles.cardActionBtn}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1V5H1V19H19V5H15V1H5ZM7 3H13V5H7V3ZM3 7H17V17H3V7ZM8 9V11H6V13H8V15H12V13H14V11H12V9H8ZM10 11H10.01" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Print or Save My Card
                </button>
                <button className={styles.cardActionBtn}>
                  Add Card to Mobile Wallet
                </button>
              </div>
            </div>

            <div className={styles.cardRightColumn}>
              <table className={styles.infoTable}>
                <tbody>
                  <tr>
                    <td className={styles.infoLabel}>Name:</td>
                    <td className={styles.infoValue}>{formData.firstName} {formData.lastName}</td>
                  </tr>
                  <tr>
                    <td className={styles.infoLabel}>Medicine:</td>
                    <td className={styles.infoValue}>IMAAVY&#8482;</td>
                  </tr>
                </tbody>
              </table>

              <h4 className={styles.infoSectionTitle}>Medical Benefits Information</h4>
              <table className={styles.infoTable}>
                <tbody>
                  <tr>
                    <td className={styles.infoLabel}>Payer ID:</td>
                    <td className={styles.infoValue}>56155</td>
                  </tr>
                  <tr>
                    <td className={styles.infoLabel}>Group:</td>
                    <td className={styles.infoValue}>11113723</td>
                  </tr>
                  <tr>
                    <td className={styles.infoLabel}>Member ID:</td>
                    <td className={styles.infoValue}>57241327010</td>
                  </tr>
                </tbody>
              </table>

              <h4 className={styles.infoSectionTitle}>Pharmacy Benefits Information</h4>
              <table className={styles.infoTable}>
                <tbody>
                  <tr>
                    <td className={styles.infoLabel}>BIN:</td>
                    <td className={styles.infoValue}>610020</td>
                  </tr>
                  <tr>
                    <td className={styles.infoLabel}>Group:</td>
                    <td className={styles.infoValue}>99992553</td>
                  </tr>
                  <tr>
                    <td className={styles.infoLabel}>Member ID:</td>
                    <td className={styles.infoValue}>65456112312</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className={styles.cardFooterText}>
            This card is now active and can be used to save on your IMAAVY&#8482; prescription. Print your card or save the card information in a safe place to use it in the future.
          </p>
        </Accordion>

        <Accordion variant="onboarding" number={2} title="Sign a patient authorization">
          <p>Complete the patient authorization form to allow your healthcare provider to share relevant treatment information with the IMAAVY withMe program.</p>
        </Accordion>

        <Accordion variant="onboarding" number={3} title="Set up your IMAAVY withMe password">
          <p>Create a secure password to access your IMAAVY withMe account and manage your savings program benefits online.</p>
        </Accordion>
      </div>

      <hr className={styles.divider} />

      <p className={styles.contactText}>
        For questions or immediate assistance,<br />
        call 888-750-8733<br />
        Monday–Friday, 8:00 AM–11:00 PM ET
      </p>
    </PageLayout>
  )
}

export default Confirmation
