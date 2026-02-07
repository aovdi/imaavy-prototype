import { useNavigate } from 'react-router-dom'
import { useEnrollment } from '../../context/EnrollmentContext'
import { useVersion } from '../../context/VersionContext'
import PageLayout from '../../components/PageLayout/PageLayout'
import Button from '../../components/Button/Button'
import styles from './Under18.module.css'

function Under18() {
  const navigate = useNavigate()
  const { resetForm } = useEnrollment()
  const { nav } = useVersion()

  const handleTryAgain = () => {
    resetForm()
    navigate(nav('/'))
  }

  return (
    <PageLayout
      sidebarWelcomeTitle="Welcome!"
      sidebarWelcomeText="Tell us more about you so that we can show you support that may be relevant to your journey."
      sidebarShowPhone
      sidebarPhoneText="888-750-8733"
    >
      <h1 className={styles.heading}>Based on your answer:</h1>

      <div className={styles.bodyText}>
        <p>We noticed that the birthday entered indicates you're under 18.</p>
        <p>Enrollment needs to be completed by a Caregiver who is a Legally Authorized Representative (LAR), such as a parent or legal guardian.</p>
        <p>No worries! Here's what you can do:</p>
        <ul>
          <li>Have your LAR enroll now.</li>
          <li>Or our Nurse Navigators are ready to help guide the LAR through the enrollment process.</li>
        </ul>
        <p>If you have any questions, please contact us at:<br />
          <strong>888-750-8733</strong><br />
          Monday–Friday, 8:00 AM–11:00 PM ET
        </p>
      </div>

      <div className={styles.btnGroup}>
        <Button variant="secondary" onClick={handleTryAgain}>Try Again</Button>
      </div>
    </PageLayout>
  )
}

export default Under18
