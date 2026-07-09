export interface Metadata {
  /** Page title for <title> and social previews */
  title: string

  /** Short description for meta tags and link previews */
  description: string

  /** Canonical URL of the page */
  url?: string

  /** Open Graph image URL (absolute path recommended) */
  image?: string

  /** Alt text for the OG image (optional, rarely used) */
  imageAlt?: string
}

export const defaultMeta: Metadata = {
  title: 'Sara Rogers Acting',
  description:
    'Adult acting, improv, and public speaking coaching with Sara Rogers in South Florida.',
  url: 'https://adultactingcoach.com',
  image: 'https://adultactingcoach.com/assets/opengraph-image.jpeg',
  imageAlt: 'Sara Rogers Acting',
}

export function createMetaDescription(description: string, maxLength = 155) {
  const normalizedDescription = description.replace(/\s+/g, ' ').trim()

  if (normalizedDescription.length <= maxLength) {
    return normalizedDescription
  }

  const truncatedDescription = normalizedDescription.slice(0, maxLength - 1)
  const lastSpaceIndex = truncatedDescription.lastIndexOf(' ')

  return `${truncatedDescription.slice(0, lastSpaceIndex).trim()}…`
}
