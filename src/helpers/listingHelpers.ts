const eventTimeZone = 'America/New_York'

const dateTimeFormatterOptions = {
  timeZone: eventTimeZone,
} as const

const dateTimeWithZonePattern =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2})?(?:\.\d{3})?(?:Z|[+-]\d{2}:\d{2})$/

const plainDateTimePattern =
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?$/

const zonedDateTimeFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: eventTimeZone,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h23',
})

const getDatePartsInEventTimeZone = (date: Date) => {
  const parts = zonedDateTimeFormatter.formatToParts(date)

  return Object.fromEntries(
    parts
      .filter((part) => part.type !== 'literal')
      .map((part) => [part.type, Number(part.value)])
  ) as Record<'year' | 'month' | 'day' | 'hour' | 'minute' | 'second', number>
}

export const parseSessionDate = (dateString: string) => {
  if (dateTimeWithZonePattern.test(dateString)) {
    return new Date(dateString)
  }

  const match = dateString.match(plainDateTimePattern)
  if (!match) {
    return new Date(dateString)
  }

  const [, year, month, day, hour, minute, second = '0'] = match
  const utcGuess = Date.UTC(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
    Number(second)
  )
  const eventParts = getDatePartsInEventTimeZone(new Date(utcGuess))
  const eventWallTimeAsUtc = Date.UTC(
    eventParts.year,
    eventParts.month - 1,
    eventParts.day,
    eventParts.hour,
    eventParts.minute,
    eventParts.second
  )
  const eventOffset = eventWallTimeAsUtc - utcGuess

  return new Date(utcGuess - eventOffset)
}

export const formatDate = (dateString: string) => {
  const date = parseSessionDate(dateString)
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
  return parseSessionDate(dateString).toLocaleDateString('en-US', {
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
  const sessionDate = parseSessionDate(dateString)
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
