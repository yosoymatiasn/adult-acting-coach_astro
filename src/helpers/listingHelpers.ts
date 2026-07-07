const dateTimeFormatterOptions = {
  timeZone: 'America/New_York',
} as const

export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return {
    date: date.toLocaleDateString('en-US', {
      ...dateTimeFormatterOptions,
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    }),
    time: date.toLocaleTimeString('en-US', {
      ...dateTimeFormatterOptions,
      hour: 'numeric',
      minute: '2-digit',
    }),
  }
}

export const formatLongWeekday = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    ...dateTimeFormatterOptions,
    weekday: 'long',
  })
}

export const formatTimeRange = (startDate: string, endDate?: string) => {
  const { time: startTime } = formatDate(startDate)
  if (!endDate) return startTime

  const { time: endTime } = formatDate(endDate)
  return `${startTime.replace(':00', '')}–${endTime.replace(':00', '')}`
}

export const isUpcomingSession = (dateString: string, graceDays = 1) => {
  const sessionDate = new Date(dateString)
  if (Number.isNaN(sessionDate.getTime())) {
    throw new Error(`Invalid session date: ${dateString}`)
  }

  const cutoff = new Date(sessionDate)
  cutoff.setDate(cutoff.getDate() + graceDays)
  cutoff.setHours(6, 0, 0, 0)
  return cutoff >= new Date()
}

export const assertUniqueSlugs = <T extends { slug: string }>(
  items: T[],
  itemName: string
) => {
  const seen = new Set<string>()

  items.forEach((item) => {
    if (seen.has(item.slug)) {
      throw new Error(`Duplicate ${itemName} slug: ${item.slug}`)
    }
    seen.add(item.slug)
  })
}

export const joinSessionsWithItems = <
  TItem extends { slug: string },
  TSession extends Record<string, unknown>,
>(
  items: TItem[],
  sessions: TSession[],
  sessionSlugKey: keyof TSession,
  itemName: string
) => {
  assertUniqueSlugs(items, itemName)

  return sessions.map((session) => {
    const slug = session[sessionSlugKey]
    if (typeof slug !== 'string') {
      throw new Error(`Invalid ${itemName} session slug: ${String(slug)}`)
    }

    const item = items.find((candidate) => candidate.slug === slug)
    if (!item) {
      throw new Error(`No ${itemName} found for session: ${slug}`)
    }

    return {
      ...item,
      ...session,
    }
  })
}
