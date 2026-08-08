import { classes } from '../src/data/classes/classes.ts'
import { sessions } from '../src/data/classes/sessions.ts'
import { showcases } from '../src/data/showcases/showcases.ts'
import { showcaseSessions } from '../src/data/showcases/sessions.ts'

const errors = []

const assert = (condition, message) => {
  if (!condition) errors.push(message)
}

const assertUnique = (items, label, getValue) => {
  const seen = new Set()

  for (const item of items) {
    const value = getValue(item)
    assert(!seen.has(value), `Duplicate ${label}: ${value}`)
    seen.add(value)
  }
}

const assertSession = (session, label) => {
  const start = new Date(session.date)
  const end = session.endDate ? new Date(session.endDate) : null

  assert(!Number.isNaN(start.getTime()), `${label} has an invalid start date`)
  assert(
    !end || (!Number.isNaN(end.getTime()) && end > start),
    `${label} must end after it starts`
  )
  assert(
    /^https:\/\/.+/.test(session.url),
    `${label} must have an HTTPS event URL`
  )
}

const classBySlug = new Map(classes.map((item) => [item.slug, item]))
const showcaseSlugs = new Set(showcases.map((item) => item.slug))

assertUnique(classes, 'class slug', (item) => item.slug)
assertUnique(showcases, 'showcase slug', (item) => item.slug)
assertUnique(sessions, 'class session URL', (item) => item.url)
assertUnique(showcaseSessions, 'showcase session URL', (item) => item.url)

for (const session of sessions) {
  const label = `Class session for ${session.classSlug}`
  const classData = classBySlug.get(session.classSlug)
  assert(Boolean(classData), `${label} references an unknown class`)
  assertSession(session, label)

  if (session.showcaseSlug) {
    assert(
      showcaseSlugs.has(session.showcaseSlug),
      `${label} references an unknown showcase`
    )
  }

  const pricing = [session.earlyPrice, session.doorPrice, session.earlyBirdDays]
  const hasAnyPricing = pricing.some((value) => value !== undefined)
  const hasCompletePricing = pricing.every((value) => value !== undefined)
  assert(
    !hasAnyPricing || hasCompletePricing,
    `${label} must provide all early and at-door price fields together`
  )

  if (hasCompletePricing && classData) {
    const standardPrice = session.price ?? classData.price
    assert(
      session.earlyPrice < standardPrice && session.doorPrice > standardPrice,
      `${label} pricing must bracket its standard price`
    )
    assert(
      Number.isInteger(session.earlyBirdDays) && session.earlyBirdDays > 0,
      `${label} must have a positive whole-number early reservation window`
    )
  }
}

for (const session of showcaseSessions) {
  assertSession(session, `Showcase session for ${session.showcaseSlug}`)
  assert(
    showcaseSlugs.has(session.showcaseSlug),
    `Showcase session references an unknown showcase: ${session.showcaseSlug}`
  )
}

if (errors.length) {
  console.error(`Content validation failed:\n- ${errors.join('\n- ')}`)
  process.exitCode = 1
} else {
  console.log(
    `Content validation passed: ${classes.length} classes, ${sessions.length} class sessions, ${showcases.length} showcases, and ${showcaseSessions.length} showcase sessions.`
  )
}
