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
      'Master the art of auditioning for all media - TV, film, commercials, episodic, and streaming - with a specialized course that focuses on camera techniques. Learn how to navigate the evolving landscape of digital and traditional media with confidence and skill.',
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
      'Master the essentials in our 3-hour "Basic Camera Techniques" workshop, tailored for actors looking to enhance their on-screen presence and adapt their performances for the camera. Gain practical skills in framing, eye lines, and working with the camera to deliver more impactful and visually engaging performances in film and television.',
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
      'Sharpen your audition skills with our 3-hour "Cold Reading Workshop," where you\'ll learn to quickly analyze and perform scripts. This dynamic and practical session focuses on improving your ability to make strong, immediate choices under pressure.',
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
      'Join our 6-week "Improvisation Class with Performance," designed to unlock your creative potential and sharpen your spontaneous reaction skills in a supportive, dynamic environment. Culminating in a live performance, this course offers a unique opportunity to showcase your improvisational talents, building confidence and collaborative skills.',
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
      'Dive deep into the art of solo performance with our 4-week "Strictly Monologues" class, focusing exclusively on memorized monologue, interpretation, and delivery. Enhance your ability to captivate an audience with powerful, nuanced performances that showcase your individual talent and storytelling prowess.',
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
      'Embark on an 8-week journey of intensive "Monologue & Scene Study with Performance," where you\'ll delve deep into character exploration and scene dynamics to refine your acting skills. This comprehensive course culminates in a performance showcase, offering you the opportunity to present your polished monologues and scenes, honed through expert guidance and collaborative learning.',
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
      'Choosing the Perfect Monologue - a 3-hour workshop focused on selecting monologues that resonate with your unique strengths and style. Learn how to pick compelling pieces that showcase your talents, suit your character type, and make a lasting impression in auditions and performances.',
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
      'This course transforms your public speaking abilities, using methods honed from years of award-winning acting coaching.',
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
      'Learn the art of self-taping & submissions: Explore equipment choices, framing techniques, performance nuances, and strategic submissions to excel in the modern acting-auditioning world.',
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
      'Dive into the depths of script interpretation with our 3-hour "Script Breakdown and Analysis" workshop, designed to enhance your understanding of narrative structure, character development, and thematic elements. Gain valuable skills in dissecting scripts, uncovering subtext, and bringing nuanced performances to life through detailed analysis and practical exercises.',
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
      'Dive into the "Business End of the Acting/Modeling Business" a comprehensive 3 hour session designed to unveil the intricacies of the industry, from knowing what to do to, where to go and who to see effectively.. Gain essential insights and tools to navigate the business side of acting/modeling, setting the stage for a successful and informed career.',
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
      'In this 3-hour immersive workshop, we’ll focus on the craft of storytelling as a performance art. Learn to master the art of crafting and performing your unique story with impact and authenticity. Learn techniques to effectively narrate, engage audiences, and express your personal journey through powerful storytelling and performance skills.',
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
      'Join this four-week improvisation class for adults 55+ to unlock creative potential and sharpen spontaneous reactions in a supportive, dynamic environment. Build confidence, collaborative skills, and a playful performance practice.',
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
      'Are you ready to take your monologue to the next level? Whether you’re preparing for an audition, building a reel, or just looking to sharpen your skills, this 3-hour workshop is designed to help actors unlock the hidden depths of their monologue.',
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
      'This dynamic and interactive class is designed for actors looking to refine their on-camera performance skills while receiving detailed, personalized feedback through playback analysis.',
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
      'This dynamic 3-hour workshop is designed to help actors, public speakers, and anyone who needs to memorize text efficiently and confidently. Whether it is a script, speech, or presentation, this session will equip you with powerful techniques to enhance your memory skills and bring your text to life.',
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
      'Speak with confidence—without the butterflies taking over. In this upbeat, supportive workshop, you’ll learn the essentials of public speaking and practice in a safe, secure environment where everyone roots for each other. You Perform on Camera with Playback. Perfect for beginners or anyone who wants a quick, practical refresher.',
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
