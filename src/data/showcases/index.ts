import { showcaseSessions, type TShowcaseSession } from './sessions'
import { showcases, type TShowcase } from './showcases'
import {
  isUpcomingSession,
  joinSessionsWithItems,
} from '../../helpers/listingHelpers'

export type TShowcaseListing = TShowcase & TShowcaseSession

const upcomingShowcaseSessions = showcaseSessions.filter((session) =>
  isUpcomingSession(session.date)
)

export const showcaseListings: TShowcaseListing[] =
  joinSessionsWithItems(
    showcases,
    upcomingShowcaseSessions,
    'showcaseSlug',
    'showcase'
  )
