import { createContext, useContext, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getVersion, DEFAULT_VERSION_ID } from '../config/versions'

const VersionContext = createContext(null)

export function VersionProvider({ children }) {
  const { versionId } = useParams()
  const version = useMemo(() => getVersion(versionId), [versionId])
  const basePath = versionId ? `/v/${versionId}` : ''

  return (
    <VersionContext.Provider value={{ version, basePath, versionId: versionId || null }}>
      {children}
    </VersionContext.Provider>
  )
}

/**
 * Hook to access the active version config.
 *
 * Returns:
 * - version: the config object from versions.js
 * - basePath: '/v/no-stepper' or '' (for non-versioned routes)
 * - versionId: 'no-stepper' or null
 * - nav(path): helper that prepends basePath to a route path
 */
export function useVersion() {
  const ctx = useContext(VersionContext)
  if (!ctx) {
    // Not inside a VersionProvider — return defaults (non-versioned routes)
    return {
      version: getVersion(DEFAULT_VERSION_ID),
      basePath: '',
      versionId: null,
      nav: (path) => path,
    }
  }
  return {
    ...ctx,
    nav: (path) => ctx.basePath + path,
  }
}
