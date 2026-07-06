export type TShowcase = {
  slug: string
  title: string
  description: string
  imageUrl: string
}

export const showcases: TShowcase[] = [
  {
    slug: 'bare-bones-performance',
    title: 'A performance of monologues and scenes',
    description:
      'The Sara Rogers Players (students) will be working diligently for 8 weeks on their monologues and scenes and will be performing for you and your guests, all we need is a count so we can prepare the seating. Please RSVP and come support your fellow actors.',
    imageUrl:
      'https://secure.meetupstatic.com/photos/event/2/4/2/f/highres_494049263.webp?w=640',
  },
  {
    slug: 'improv-ables-performance',
    title: 'An improv class performance',
    description:
      'Come support our Improvisation Class. Come laugh and leave outside issues at the door! Happy Fun Day. The students have been working for 6 weeks and are going to be performing for you and your guests, all we need is a count of how many, because ArtServe needs to prepare the seating.',
    imageUrl:
      'https://secure.meetupstatic.com/photos/event/9/0/4/c/highres_524256940.webp?w=640',
  },
]
