import { classes, type TClass } from './classes'
import { sessions, type TSession } from './sessions'

export type TClassListing = TClass & TSession

export const paypalUrl = 'https://www.paypal.me/sararogers147'

const upcomingSessions = sessions.filter((session) => {
  const sessionDate = new Date(session.date)
  const cutoff = new Date(sessionDate)
  cutoff.setDate(cutoff.getDate() + 3)
  cutoff.setHours(6, 0, 0, 0)
  return cutoff >= new Date()
})

export const classListings: TClassListing[] = upcomingSessions.map(
  (session) => {
    const classData = classes.find((c) => c.slug === session.classSlug)
    if (!classData) {
      throw new Error(`No class found for session: ${session.classSlug}`)
    }
    return {
      ...classData,
      ...session,
    }
  }
)
