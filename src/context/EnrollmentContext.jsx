import { createContext, useContext, useState, useCallback } from 'react'

const EnrollmentContext = createContext(null)

const initialFormData = {
  // Personalization (Screen 1100)
  userType: '', // 'patient' or 'caregiver'
  prescriptionStatus: '', // 'current' or 'not-yet'
  ageRange: '',

  // Name and Email (Screen 1130)
  consentSPI: false,
  firstName: '',
  lastName: '',
  email: '',
  receivePersonalizedComms: true,
  receiveJJUpdates: true,

  // Communication Preferences
  interestedInTips: false,
  interestedInCostSupport: false,
  interestedInInfusionSupport: false,
  interestedInNurseNavigator: false,
  treatmentStarted: '',
  treatmentSituation: '',

  // Contact Information (Screen 1140)
  phone: '',
  phoneType: '',
  streetAddress: '',
  apartment: '',
  city: '',
  state: '',
  zipCode: '',
  dateOfBirth: '',
  sexAtBirth: '',
  wantWelcomeKit: false,
  textCommsConsent: false,
  callTimeMorning: false,
  callTimeAfternoon: false,
  callTimeEvening: false,
  callTimeNoPreference: false,
  languagePreference: '',
  treatmentStatus: '',

  // Cost Support (Screen 1153)
  insuranceType: '', // 'commercial', 'government', 'none', 'unknown'

  // Eligibility (Screen 1150)
  eligibilityChecks: [],

  // Provider Information (Screen 1262)
  providerName: '',
  providerPhone: '',
  providerFax: '',

  // Terms (Screen 1161)
  acceptedTerms: false,
}

export function EnrollmentProvider({ children }) {
  const [formData, setFormData] = useState(initialFormData)
  const [currentStep, setCurrentStep] = useState(1)

  const updateField = useCallback((field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }, [])

  const updateFields = useCallback((updates) => {
    setFormData(prev => ({
      ...prev,
      ...updates
    }))
  }, [])

  const resetForm = useCallback(() => {
    setFormData(initialFormData)
    setCurrentStep(1)
  }, [])

  const goToStep = useCallback((step) => {
    setCurrentStep(step)
  }, [])

  const nextStep = useCallback(() => {
    setCurrentStep(prev => Math.min(prev + 1, 7))
  }, [])

  const prevStep = useCallback(() => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }, [])

  const value = {
    formData,
    currentStep,
    updateField,
    updateFields,
    resetForm,
    goToStep,
    nextStep,
    prevStep,
  }

  return (
    <EnrollmentContext.Provider value={value}>
      {children}
    </EnrollmentContext.Provider>
  )
}

export function useEnrollment() {
  const context = useContext(EnrollmentContext)
  if (!context) {
    throw new Error('useEnrollment must be used within an EnrollmentProvider')
  }
  return context
}

export default EnrollmentContext
