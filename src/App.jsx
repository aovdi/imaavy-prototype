import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { EnrollmentProvider } from './context/EnrollmentContext'
import { VersionProvider } from './context/VersionContext'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ScreenNavigator from './components/ScreenNavigator/ScreenNavigator'
import Personalization from './pages/Personalization/Personalization'
import NameAndEmail from './pages/NameAndEmail/NameAndEmail'
import ContactInfo from './pages/ContactInfo/ContactInfo'
import CostSupport from './pages/CostSupport/CostSupport'
import Eligibility from './pages/Eligibility/Eligibility'
import ProviderInfo from './pages/ProviderInfo/ProviderInfo'
import Terms from './pages/Terms/Terms'
import Confirmation from './pages/Confirmation/Confirmation'
import Under18 from './pages/Under18/Under18'
import VersionSelect from './pages/VersionSelect/VersionSelect'

/** All enrollment pages — used by both original and versioned routes */
function EnrollmentRoutes() {
  return (
    <>
      <Route index element={<Personalization />} />
      <Route path="name-email" element={<NameAndEmail />} />
      <Route path="contact" element={<ContactInfo />} />
      <Route path="cost-support" element={<CostSupport />} />
      <Route path="eligibility" element={<Eligibility />} />
      <Route path="provider" element={<ProviderInfo />} />
      <Route path="terms" element={<Terms />} />
      <Route path="confirmation" element={<Confirmation />} />
      <Route path="under-18" element={<Under18 />} />
    </>
  )
}

function App() {
  return (
    <EnrollmentProvider>
      <div className="app">
        <ScrollToTop />
        <Header />
        <ScreenNavigator />
        <Routes>
          {/* Version dashboard */}
          <Route path="/versions" element={<VersionSelect />} />

          {/* Versioned routes — wrapped in VersionProvider */}
          <Route path="/v/:versionId" element={<VersionProvider><Personalization /></VersionProvider>} />
          <Route path="/v/:versionId/name-email" element={<VersionProvider><NameAndEmail /></VersionProvider>} />
          <Route path="/v/:versionId/contact" element={<VersionProvider><ContactInfo /></VersionProvider>} />
          <Route path="/v/:versionId/cost-support" element={<VersionProvider><CostSupport /></VersionProvider>} />
          <Route path="/v/:versionId/eligibility" element={<VersionProvider><Eligibility /></VersionProvider>} />
          <Route path="/v/:versionId/provider" element={<VersionProvider><ProviderInfo /></VersionProvider>} />
          <Route path="/v/:versionId/terms" element={<VersionProvider><Terms /></VersionProvider>} />
          <Route path="/v/:versionId/confirmation" element={<VersionProvider><Confirmation /></VersionProvider>} />
          <Route path="/v/:versionId/under-18" element={<VersionProvider><Under18 /></VersionProvider>} />

          {/* Original routes (no version context) */}
          <Route path="/" element={<Personalization />} />
          <Route path="/name-email" element={<NameAndEmail />} />
          <Route path="/contact" element={<ContactInfo />} />
          <Route path="/cost-support" element={<CostSupport />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/provider" element={<ProviderInfo />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/under-18" element={<Under18 />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </EnrollmentProvider>
  )
}

export default App
