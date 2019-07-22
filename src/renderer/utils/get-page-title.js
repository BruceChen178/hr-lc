import defaultSettings from '@/settings'

const title = defaultSettings.title || 'CIM-5G-UI'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
