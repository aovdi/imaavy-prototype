/**
 * Flow Configurations
 *
 * Flow A: Default enrollment flow (original behavior)
 * Flow B: Simplified enrollment flow (no sidebar, no stepper, no customization accordions)
 */

export const versions = {
  'flow-a': {
    id: 'flow-a',
    label: 'Flow A (Default)',
    description: 'Original enrollment flow with sidebar, stepper, and all options.',
    showStepper: true,
    showSidebar: true,
    showTimeBadge: true,
    showCustomizeAccordions: true,
    nurseImage: '/assets/images/nurse-navigator.png',
  },
  'flow-b': {
    id: 'flow-b',
    label: 'Flow B',
    description: 'Simplified flow — no sidebar, no stepper, no customization accordions.',
    showStepper: false,
    showSidebar: false,
    showTimeBadge: false,
    showCustomizeAccordions: false,
    nurseImage: '/assets/images/nurse-navigator.png',
    messaging: {
      personalization: {
        title: 'Get free support managing your gMG',
        subtitle: 'This program connects you with a dedicated Nurse Navigator and covers costs related to your IMAAVY treatment. Answer a few questions to see if you qualify.',
        disclaimer: '*Nurse Navigators do not provide medical advice. Please ask your doctor any questions you might have about your disease and treatment.',
      },
      nameEmail: {
        title: 'Get started with IMAAVY withMe.',
        subtitle: 'Get a dedicated Nurse Navigator, cost support, and 24/7 portal access—all free. About 5 minutes to enroll.',
        disclaimer: '*Nurse Navigators do not provide medical advice. Please ask your doctor any questions you might have about your disease and treatment.',
      },
      contactInfo: {
        title: 'How should we contact you?',
        subtitle: "We'll use this to connect you with your Nurse Navigator and send updates about your portal and benefits.",
        disclaimer: '*Nurse Navigators do not provide medical advice. Please ask your doctor any questions you might have about your disease and treatment.',
      },
    },
  },
}

export const DEFAULT_VERSION_ID = 'flow-a'

export function getVersion(id) {
  return versions[id] || versions[DEFAULT_VERSION_ID]
}

export function getAllVersions() {
  return Object.values(versions)
}
