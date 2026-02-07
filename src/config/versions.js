/**
 * A/B Test Version Configurations
 *
 * Each version defines overrides from the base prototype.
 * To add a new version: copy a block, change the id/label/overrides.
 * To add a new variable: add a key here and read it via useVersion() in components.
 */

export const versions = {
  base: {
    id: 'base',
    label: 'Base (Control)',
    description: 'Original prototype with all default settings.',
    showStepper: true,
    nurseImage: '/assets/images/nurse-navigator.png',
    // messaging: undefined = use default hardcoded text in each page
  },
  'no-stepper': {
    id: 'no-stepper',
    label: 'No Progress Bar',
    description: 'Stepper/progress bar hidden. TimeBadge still visible.',
    showStepper: false,
    nurseImage: '/assets/images/nurse-navigator.png',
  },
  'alt-image': {
    id: 'alt-image',
    label: 'Alternative Imagery',
    description: 'Different sidebar nurse/person photo.',
    showStepper: true,
    nurseImage: '/assets/images/nurse-navigator-alt.png',
  },
  'alt-messaging': {
    id: 'alt-messaging',
    label: 'Value-Driven Messaging',
    description: 'Different copy on Steps 0-2 emphasizing benefits and value.',
    showStepper: true,
    nurseImage: '/assets/images/nurse-navigator.png',
    messaging: {
      personalization: {
        // title, subtitle, etc. — pages check these and fall back to defaults
      },
      nameEmail: {},
      contactInfo: {},
    },
  },
}

export const DEFAULT_VERSION_ID = 'base'

export function getVersion(id) {
  return versions[id] || versions[DEFAULT_VERSION_ID]
}

export function getAllVersions() {
  return Object.values(versions)
}
