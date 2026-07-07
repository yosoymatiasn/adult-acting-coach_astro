import { classes, type TClass } from './classes'
import { sessions, type TSession } from './sessions'
import {
  isUpcomingSession,
  joinSessionsWithItems,
} from '../../helpers/listingHelpers'

export type TClassListing = TClass & TSession

export const paypalUrl = 'https://www.paypal.me/sararogers147'

const upcomingSessions = sessions.filter((session) =>
  isUpcomingSession(session.date, 3)
)

export const classListings: TClassListing[] = joinSessionsWithItems(
  classes,
  upcomingSessions,
  'classSlug',
  'class'
)
