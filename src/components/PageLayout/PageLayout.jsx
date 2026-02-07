import Sidebar from '../Sidebar/Sidebar'
import DisclaimerBar from '../DisclaimerBar/DisclaimerBar'
import Footer from '../Footer/Footer'
import { useVersion } from '../../context/VersionContext'
import styles from './PageLayout.module.css'

function PageLayout({
  children,
  showSidebar = true,
  sidebarVariant = 'default',
  sidebarWelcomeTitle,
  sidebarWelcomeText,
  sidebarShowPhone = false,
  sidebarPhoneText,
  sidebarShowTimeBadge = false,
}) {
  const { version } = useVersion()

  return (
    <div className={styles.screen}>
      <main className={styles.mainContainer}>
        <div className={styles.contentArea}>
          {children}
        </div>

        {showSidebar && (
          <Sidebar
            variant={sidebarVariant}
            welcomeTitle={sidebarWelcomeTitle}
            welcomeText={sidebarWelcomeText}
            showPhone={sidebarShowPhone}
            phoneText={sidebarPhoneText}
            showTimeBadge={sidebarShowTimeBadge}
            nurseImageSrc={version.nurseImage}
          />
        )}
      </main>

      <DisclaimerBar />
      <Footer />
    </div>
  )
}

export default PageLayout
