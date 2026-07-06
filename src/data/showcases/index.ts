import { showcaseSessions, type TShowcaseSession } from './sessions'
import { showcases, type TShowcase } from './showcases'

export type TShowcaseListing = TShowcase & TShowcaseSession

const upcomingShowcaseSessions = showcaseSessions.filter((session) => {
  const sessionDate = new Date(session.date)
  const cutoff = new Date(sessionDate)
  cutoff.setDate(cutoff.getDate() + 1)
  cutoff.setHours(6, 0, 0, 0)
  return cutoff >= new Date()
})

export const showcaseListings: TShowcaseListing[] =
  upcomingShowcaseSessions.map((session) => {
    const showcaseData = showcases.find(
      (showcase) => showcase.slug === session.showcaseSlug
    )

    if (!showcaseData) {
      throw new Error(`No showcase found for session: ${session.showcaseSlug}`)
    }

    return {
      ...showcaseData,
      ...session,
    }
  })
