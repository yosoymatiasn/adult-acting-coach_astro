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
      'Sharpen your audition skills with our 3-hour "Cold Reading Workshop," where you\'ll learn to quickly analyze and perform scripts. This dynamic and practical session focuses on improving your ability to make strong, immediate choices under pressure.',
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
      'Explore the exciting world of improvisation in this 3-hour workshop, designed to unleash creativity, enhance spontaneity, and develop quick thinking skills. Perfect for beginners and seasoned performers, as well as public speakers. ',
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
      'Join our 6-week "Silver stage improvisation for the 55+ crowd," designed to unlock your creative potential and sharpen your spontaneous reaction skills in a supportive, dynamic environment. Culminating in a live performance, this course offers a unique opportunity to showcase your improvisational talents, building confidence and collaborative skills.',
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
    price: 75,
  },
]
