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
  wideContent = false,
  belowContentChildren,
}) {
  const { version } = useVersion()

  const sidebarVisible = showSidebar && version.showSidebar !== false

  const contentClasses = [
    styles.contentArea,
    !sidebarVisible && !wideContent && styles.contentAreaConstrained,
  ].filter(Boolean).join(' ')

  return (
    <div className={styles.screen}>
      <main className={styles.mainContainer}>
        <div className={contentClasses}>
          {children}
          {belowContentChildren}
        </div>

        {sidebarVisible && (
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
