export enum ClassType {
  Workshop = 'workshop',
  Class = 'class',
}

export type TClass = {
  slug: string
  title: string
  description: string
  imageUrl: string
  price: number
  type: ClassType
  duration: string
  dayOfWeek: 'Monday' | 'Wednesday' | 'Saturday'
  details: {
    bestFor: string
    format: string
    focus: string[]
    bring?: string
  }
}

export const classes: TClass[] = [
  {
    slug: 'auditioning-for-camera',
    title: 'Auditioning for camera',
    type: ClassType.Class,
    duration: '6 weeks',
    dayOfWeek: 'Monday',
    imageUrl:
      'https://secure.meetupstatic.com/photos/event/9/a/f/0/highres_523899664.webp?w=384',
    description:
      'A six-week on-camera class for TV, film, commercials, episodic work, streaming, and self-tapes. Practice the material, watch playback, and learn what reads on camera.',
    details: {
      bestFor:
        'Actors at any experience level who want a more confident, camera-ready audition process.',
      format: 'Six weekly, on-camera sessions with playback and coaching.',
      focus: [
        'Auditions for film, television, streaming, commercials, and self-tapes',
        'Solo and partner audition exercises',
        'Camera technique, memorization, dialogue, and reaction work',
      ],
    },
    price: 300,
  },
  {
    slug: 'basic-camera-techniques-workshop',
    title: 'Basic camera techniques',
    type: ClassType.Workshop,
    duration: '3 hours',
    dayOfWeek: 'Saturday',
    imageUrl:
      'https://secure.meetupstatic.com/photos/event/d/f/8/6/highres_527937222.webp?w=384',
    description:
      'A practical three-hour introduction to working on camera. Learn framing, eyelines, and how to adjust a performance for film and television.',
    details: {
      bestFor:
        'Actors who want a practical first foundation in working for the camera.',
      format: 'One focused, hands-on workshop.',
      focus: [
        'Framing and eyelines',
        'Adapting a performance for the lens',
        'Building a more natural on-screen presence',
      ],
    },
    price: 75,
  },
  {
    slug: 'cold-reading',
    title: 'Cold reading',
    type: ClassType.Class,
    duration: '4 weeks',
    dayOfWeek: 'Wednesday',
    imageUrl:
      'https://secure.meetupstatic.com/photos/event/d/d/7/2/highres_480416690.webp',
    description:
      "Build confident cold-reading technique over four weekly sessions. You'll learn to quickly analyze unfamiliar scripts, make strong immediate choices, and stay present under audition pressure.",
    details: {
      bestFor:
        'Actors who want more ease and clarity when handed unfamiliar material.',
      format: 'Four weekly practice sessions.',
      focus: [
        'Quick script analysis',
        'Strong immediate choices',
        'Staying present under audition pressure',
      ],
    },
    price: 300,
  },
  {
    slug: 'cold-reading-workshop',
    title: 'Cold reading workshop',
    type: ClassType.Workshop,
    dayOfWeek: 'Saturday',
    duration: '3 hours',
    imageUrl:
      'https://secure.meetupstatic.com/photos/event/b/0/c/6/highres_494625254.webp?w=384',
    description:
      'A three-hour workshop for getting comfortable with unfamiliar material. Learn to read a script quickly, make choices, and stay present in the room.',
    details: {
      bestFor: 'Actors looking for a concentrated cold-reading tune-up.',
      format: 'One practical, three-hour workshop.',
      focus: [
        'Reading a script quickly',
        'Making grounded choices',
        'Performing unfamiliar material with confidence',
      ],
    },
    price: 75,
  },
  {
    slug: 'improvisation',
    title: 'Improvisation',
    type: ClassType.Class,
    imageUrl:
      'https://secure.meetupstatic.com/photos/event/8/d/5/6/highres_515556182.webp?w=384',
    duration: '6 weeks',
    dayOfWeek: 'Monday',
    description:
      "A six-week improv class that ends with a live performance. You'll work on spontaneity, listening, characters, and scenes with other people in the room.",
    details: {
      bestFor:
        'New and returning actors, communicators, and anyone ready to be more playful and present.',
      format: 'Six weekly sessions that build toward a live class performance.',
      focus: [
        'Quick thinking, spontaneity, characters, and scenes',
        'Listening and collaboration with scene partners',
        'Confidence, connection, and stage presence — no scripts required',
      ],
    },
    price: 300,
  },
  {
    slug: 'a-taste-of-improv-workshop',
    title: 'A taste of improv workshop',
    type: ClassType.Workshop,
    imageUrl:
      'https://secure.meetupstatic.com/photos/event/9/2/0/highres_518762336.webp?w=384',
    duration: '3 hours',
    dayOfWeek: 'Saturday',
    description:
      'Explore the exciting world of improvisation in this 3-hour workshop — not stand-up comedy, but a playful way to build creativity, spontaneity, and quick thinking. Perfect for beginners, seasoned performers, and public speakers.',
    details: {
      bestFor:
        'Curious beginners, performers, and public speakers who want to try improv without committing to a full course.',
      format: 'A one-time, introductory three-hour workshop.',
      focus: [
        'Simple exercises in creativity and spontaneity',
        'Quick thinking in a friendly, low-pressure room',
        'How improv can support performance and everyday communication',
      ],
    },
    price: 75,
  },
  {
    slug: 'mastering-your-monologue',
    title: 'Mastering your monologue',
    type: ClassType.Class,
    duration: '4 weeks',
    dayOfWeek: 'Monday',
    imageUrl:
      'https://secure.meetupstatic.com/photos/event/1/9/3/1/highres_489666449.webp',
    description:
      'A four-week class for actors working on memorized monologues. Focus on interpretation, choices, and delivery in front of an audience.',
    details: {
      bestFor:
        'Actors preparing a solo piece or looking to strengthen their individual storytelling.',
      format: 'Four weekly classes focused on memorized monologue work.',
      focus: [
        'Interpretation and character choices',
        'Memorized performance practice',
        'Clear, nuanced delivery for an audience',
      ],
    },
    price: 300,
  },
  {
    slug: 'monologues-and-scenes',
    title: 'Monologues and scenes',
    type: ClassType.Class,
    duration: '8 weeks',
    dayOfWeek: 'Monday',
    imageUrl:
      'https://secure.meetupstatic.com/photos/event/8/a/a/9/highres_515555497.webp?w=384',
    description:
      'An eight-week acting class built around one monologue and one scene per student. The work leads to a Bare Bones performance for invited family and friends.',
    details: {
      bestFor:
        'Actors who want sustained practice with both solo work and scene partners.',
      format:
        'Eight weekly classes that culminate in a Bare Bones performance.',
      focus: [
        'Character exploration and scene dynamics',
        'One monologue and one scene for each student',
        'Acting exercises that build confidence, creativity, and connection',
      ],
    },
    price: 300,
  },
  {
    slug: 'picking-your-monologue-workshop',
    title: 'Picking your monologue',
    type: ClassType.Workshop,
    duration: '3 hours',
    dayOfWeek: 'Saturday',
    imageUrl:
      'https://secure.meetupstatic.com/photos/event/d/a/5/b/highres_494575899.webp?w=384',
    description:
      'A three-hour workshop for choosing a monologue that suits you. Compare material, talk through type and character, and leave with better options for auditions or performance.',
    details: {
      bestFor:
        'Actors who need help choosing a monologue that fits their strengths and type.',
      format: 'A three-hour selection and analysis workshop.',
      focus: [
        'Finding material that fits your style',
        'Contemporary and classical options',
        'Reading emotional turns, audience, and what a piece asks of you',
      ],
      bring:
        'Bring one monologue—or a few options—if you have them. Options are available if you do not.',
    },
    price: 75,
  },
  {
    slug: 'public-speaking',
    title: 'Public speaking',
    type: ClassType.Class,
    duration: '4 weeks',
    dayOfWeek: 'Wednesday',
    imageUrl:
      'https://secure.meetupstatic.com/photos/event/d/d/6/f/highres_480416687.webp',
    description:
      'A four-week class that applies acting tools to public speaking: nerves, structure, voice, body language, and questions from the room.',
    details: {
      bestFor:
        'Professionals and communicators who want a supportive, practical way to speak more clearly and confidently.',
      format:
        'Four weekly, three-hour sessions that can be tailored to the group.',
      focus: [
        'Calming nerves and speaking with authenticity',
        'Structuring presentations for impact',
        'Handling questions and impromptu speaking',
      ],
    },
    price: 300,
  },
  {
    slug: 'self-taping-and-submissions',
    title: 'Self taping & submissions',
    type: ClassType.Class,
    duration: '4 weeks',
    dayOfWeek: 'Wednesday',
    imageUrl:
      'https://secure.meetupstatic.com/photos/event/d/d/6/e/highres_480416686.webp',
    description:
      'A four-week class on the practical side of self-tapes and submissions: equipment, framing, performance choices, and sending work professionally.',
    details: {
      bestFor:
        'Actors who want a stronger, repeatable process for self-tapes and submissions.',
      format: 'Four weekly practical classes.',
      focus: [
        'Equipment and framing choices',
        'Performance adjustments for a self-tape',
        'Making strategic, professional submissions',
      ],
    },
    price: 300,
  },
  {
    slug: 'script-breakdown-and-analysis',
    title: 'Script breakdown & analysis',
    type: ClassType.Workshop,
    imageUrl:
      'https://secure.meetupstatic.com/photos/event/2/3/2/d/highres_494049005.webp',
    duration: '3 hours',
    dayOfWeek: 'Saturday',
    description:
      'A three-hour workshop on preparing a script before rehearsal or an audition. Work through structure, character, subtext, and playable choices.',
    details: {
      bestFor:
        'Actors who want a clearer method for preparing a script before rehearsal or audition.',
      format: 'One three-hour analysis and practice workshop.',
      focus: [
        'Narrative structure and character development',
        'Subtext and thematic elements',
        'Turning close analysis into playable choices',
      ],
    },
    price: 75,
  },
  {
    slug: 'step-one-workshop',
    title: 'Step One: The business end',
    type: ClassType.Workshop,
    imageUrl:
      'https://secure.meetupstatic.com/photos/event/6/9/2/a/highres_524126922.webp?w=384',
    duration: '3 hours',
    dayOfWeek: 'Saturday',
    description:
      'A three-hour introduction to the business side of acting and modeling: resumes, photos, agents, casting calls, online presence, and how to avoid common scams.',
    details: {
      bestFor:
        'Aspiring actors and models who want a plain-language introduction to the business side of the work.',
      format:
        'A three-hour practical overview, including resources to take home.',
      focus: [
        'Resumes, photos, online presence, and casting calls',
        'Agents, direct booking, and the questions to ask',
        'Avoiding common scams and early-career pitfalls',
      ],
    },
    price: 75,
  },
  {
    slug: 'story-telling-workshop',
    title: 'Story telling workshop',
    type: ClassType.Workshop,
    imageUrl:
      'https://secure.meetupstatic.com/photos/event/e/2/f/6/highres_479458102.webp',
    duration: '3 hours',
    dayOfWeek: 'Saturday',
    description:
      'A three-hour workshop on shaping and performing a personal story. Work on structure, audience connection, and a delivery that sounds like you.',
    details: {
      bestFor:
        'Anyone who wants to tell a personal story with greater clarity, presence, and impact.',
      format: 'One immersive, three-hour performance workshop.',
      focus: [
        'Shaping a clear personal story',
        'Engaging an audience',
        'Performing with authenticity and presence',
      ],
    },
    price: 75,
  },
  {
    slug: 'improv-for-the-55-crowd',
    title: 'Improv for the 55+ crowd',
    type: ClassType.Class,
    imageUrl:
      'https://secure.meetupstatic.com/photos/event/b/f/d/3/600_523609107.webp',
    duration: '4 weeks',
    dayOfWeek: 'Wednesday',
    description:
      'A four-week improv class for adults 55+ who want to play, connect, and get quicker on their feet in a supportive group.',
    details: {
      bestFor:
        'Adults 55+ looking for a creative, social, and supportive way to explore improv.',
      format: 'Four weekly improvisation sessions.',
      focus: [
        'Spontaneity and creative play',
        'Confidence and connection',
        'Collaborative scene work',
      ],
    },
    price: 225,
  },
  {
    slug: 'working-your-monologue-workshop',
    title: 'Working your monologue',
    type: ClassType.Workshop,
    imageUrl:
      'https://secure.meetupstatic.com/photos/event/d/1/a/f/600_524213679.webp',
    duration: '3 hours',
    dayOfWeek: 'Saturday',
    description:
      'A three-hour working session for a monologue you already have. Bring it for focused feedback on subtext, objectives, and specific choices.',
    details: {
      bestFor:
        'Actors who have a monologue and want focused coaching before an audition, reel, or performance.',
      format:
        'A small-group, three-hour working session with personalized feedback.',
      focus: [
        'Subtext, emotional clues, and character',
        'Trying different objectives and approaches',
        'Making a memorized piece more specific and alive',
      ],
      bring:
        'Bring a memorized—or partly memorized—monologue you are ready to explore.',
    },
    price: 75,
  },
  {
    slug: 'camera-workout',
    title: 'Camera workout',
    type: ClassType.Class,
    imageUrl:
      'https://secure.meetupstatic.com/photos/event/c/4/c/e/600_523610382.webp',
    duration: '4 weeks',
    dayOfWeek: 'Wednesday',
    description:
      'A four-week on-camera class built around practice and playback. Work, watch, adjust, and repeat with direct feedback from Sara.',
    details: {
      bestFor:
        'Actors ready to develop their on-camera work through repeated practice and playback.',
      format: 'Four weekly, interactive on-camera classes.',
      focus: [
        'On-camera performance technique',
        'Playback-based feedback',
        'Refining choices from take to take',
      ],
    },
    price: 300,
  },
  {
    slug: 'memorization-workshop',
    title: 'Memorization techniques',
    type: ClassType.Workshop,
    imageUrl:
      'https://secure.meetupstatic.com/photos/event/8/a/3/c/highres_524255388.webp?w=384',
    duration: '3 hours',
    dayOfWeek: 'Saturday',
    description:
      'A three-hour workshop for actors, speakers, and anyone who needs to retain text. Use practical methods to learn a script, speech, or presentation and make it your own.',
    details: {
      bestFor:
        'Actors, public speakers, and anyone who needs to retain text with more confidence.',
      format: 'A practical three-hour workshop with time to apply the methods.',
      focus: [
        'Chunking material into useful thought patterns',
        'Visualization and physical movement',
        'Making scripts, speeches, or presentations easier to retain',
      ],
      bring:
        'Bring up to five minutes of text or a script, plus a pen and paper.',
    },
    price: 75,
  },

  {
    slug: 'public-speaking-workshop',
    title: 'Public speaking workshop',
    type: ClassType.Workshop,
    duration: '3 hours',
    dayOfWeek: 'Saturday',
    imageUrl:
      'https://secure.meetupstatic.com/photos/event/6/f/1/1/highres_529768433.webp?w=384',
    description:
      'A three-hour public speaking workshop with on-camera practice and playback. Good for beginners or anyone who wants a direct refresher on nerves, structure, voice, and body language.',
    details: {
      bestFor:
        'Beginners, professionals, educators, leaders, and actors who want a practical speaking refresher.',
      format: 'One supportive, on-camera three-hour workshop with playback.',
      focus: [
        'Breath, grounding, and mindset tools',
        'Clear structure, voice, body language, and audience connection',
        'Impromptu speaking with usable feedback',
      ],
      bring:
        'Bring a notebook, water, and a short topic idea you could speak about.',
    },
    price: 75,
  },
]
