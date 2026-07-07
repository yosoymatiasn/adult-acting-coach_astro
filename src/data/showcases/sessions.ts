export type TShowcaseSession = {
  showcaseSlug: string
  date: string
  endDate?: string
  url: string
  price?: number
}

export const showcaseSessions: TShowcaseSession[] = [
  {
    showcaseSlug: 'bare-bones-performance',
    date: '2026-10-05T19:00:00',
    endDate: '2026-10-05T21:00:00',
    url: 'https://www.meetup.com/south-florida-actors/events/314041009/?eventOrigin=group_events_list',
    price: 0,
  },
  {
    showcaseSlug: 'improv-ables-performance',
    date: '2026-11-30T19:00:00',
    endDate: '2026-11-30T21:00:00',
    url: 'https://www.meetup.com/south-florida-actors/events/314041009/?eventOrigin=group_events_list',
    price: 0,
  },
]
