export type TUpcomingEntry = {
  date: string; // ISO string: '2025-06-16T19:00:00'
  url: string;
  price?: number;
};

export type TShow = {
  title: string;
  description: string;
  image: string;
  upcoming: TUpcomingEntry[];
};

export type TShowListing = {
  title: string;
  image: string;
  description: string;
  upcoming: TUpcomingEntry;
};

export enum ClassType {
  Workshop = "workshop",
  Class = "class",
  Show = "show",
}

export type TClass = {
  classId: number;
  title: string;
  description: string;
  slug: string;
  image: string;
  price: number;
  type: ClassType;
  duration: string;
  upcoming: TUpcomingEntry[];
  show?: TShow;
};

export type TClassListing = {
  classId: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  price: number;
  type: string;
  duration: string;
  upcoming: TUpcomingEntry;
};

export const paymentURL = "https://www.paypal.com/ncp/payment/LH9NCYEN29P6G";

export const classesByWeekDay: Record<string, number[]> = {
  wednesdays: [11, 10, 3, 7, 15, 17],
  mondays: [1, 5, 8],
  workshops: [2, 4, 6, 9, 12, 13, 14, 16, 18],
};

export const classesWithShowcases = [8, 5];

export const classes: TClass[] = [
  {
    classId: 1,
    title: "How to audition for camera",
    type: ClassType.Class,
    duration: "6 weeks",
    image:
      "https://secure.meetupstatic.com/photos/event/d/d/7/0/highres_480416688.webp",
    description:
      "Master the art of auditioning for all media - TV, film, commercials, episodic, and streaming - with a specialized course that focuses on camera techniques. Learn how to navigate the evolving landscape of digital and traditional media with confidence and skill.",
    slug: "audition-for-camera",
    upcoming: [
      {
        date: "2026-01-05T18:30",
        url: "https://www.meetup.com/south-florida-actors/events/310750126/?eventOrigin=group_events_list",
      },
      {
        date: "2026-06-22T18:30",
        url: "https://www.meetup.com/south-florida-actors/events/310750503/?eventOrigin=group_events_list",
      },
    ],
    price: 300,
  },
  {
    classId: 2,
    title: "Basic camera techniques",
    type: ClassType.Workshop,
    duration: "3 hour workshop",
    image:
      "https://secure.meetupstatic.com/photos/event/4/7/a/9/highres_474678345.webp",
    description:
      'Master the essentials in our 3-hour "Basic Camera Techniques" workshop, tailored for actors looking to enhance their on-screen presence and adapt their performances for the camera. Gain practical skills in framing, eye lines, and working with the camera to deliver more impactful and visually engaging performances in film and television.',
    slug: "basic-camera-techniques",
    price: 75,
    upcoming: [
      {
        date: "2026-04-04T12:00",
        url: "https://www.meetup.com/south-florida-actors/events/310665349/?eventOrigin=group_events_list",
      },
    ],
  },
  {
    classId: 3,
    title: "Cold reading",
    type: ClassType.Class,
    duration: "4 weeks",
    image:
      "https://secure.meetupstatic.com/photos/event/d/d/7/2/highres_480416690.webp",
    description:
      'Sharpen your audition skills with our 3-hour "Cold Reading Workshop," where you\'ll learn to quickly analyze and perform scripts. This dynamic and practical session focuses on improving your ability to make strong, immediate choices under pressure.',
    slug: "cold-reading",
    price: 300,
    upcoming: [],
  },
  {
    classId: 4,
    title: "Cold reading workshop",
    type: ClassType.Workshop,
    duration: "3 hour workshop",
    image:
      "https://secure.meetupstatic.com/photos/event/d/d/7/2/highres_480416690.webp",
    description:
      'Sharpen your audition skills with our 3-hour "Cold Reading Workshop," where you\'ll learn to quickly analyze and perform scripts. This dynamic and practical session focuses on improving your ability to make strong, immediate choices under pressure.',
    slug: "cold-reading",
    price: 75,
    upcoming: [
      {
        date: "2026-02-21T12:00",
        url: "https://www.meetup.com/south-florida-actors/events/310665067/?eventOrigin=group_events_list",
      },
    ],
  },
  {
    classId: 5,
    title: "Improvisation",
    type: ClassType.Class,
    image:
      "https://secure.meetupstatic.com/photos/event/d/6/c/e/highres_493974990.webp",
    duration: "6 weeks",
    description:
      'Join our 6-week "Improvisation Class with Performance," designed to unlock your creative potential and sharpen your spontaneous reaction skills in a supportive, dynamic environment. Culminating in a live performance, this course offers a unique opportunity to showcase your improvisational talents, building confidence and collaborative skills.',
    slug: "improvisation",
    price: 300,
    upcoming: [
      {
        url: "https://www.meetup.com/south-florida-actors/events/303853890/",
        date: "2025-10-20T18:30:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/310768735/?eventOrigin=group_events_list",
        date: "2026-05-04T18:30:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/310768790/?eventOrigin=group_events_list",
        date: "2026-10-19T18:30:00",
      },
    ],
    show: {
      title: "Improv-Ables",
      description:
        "Come support our Improvisation Class. Come laugh and leave outside issues at the door! Happy Fun Day.",
      image:
        "https://secure.meetupstatic.com/photos/event/d/6/c/e/highres_493974990.webp",
      upcoming: [
        {
          url: "https://www.meetup.com/south-florida-actors/events/304167003/",
          date: "2025-12-01T19:00:00",
        },
      ],
    },
  },
  {
    classId: 6,
    title: "A taste of improv",
    type: ClassType.Workshop,
    image:
      "https://secure.meetupstatic.com/photos/event/6/c/d/d/highres_509727869.webp",
    duration: "3 hour workshop",
    description:
      "Explore the exciting world of improvisation in this 3-hour workshop, designed to unleash creativity, enhance spontaneity, and develop quick thinking skills. Perfect for beginners and seasoned performers, as well as public speakers. ",
    slug: "intro-to-improv",
    price: 75,
    upcoming: [
      {
        url: "https://www.meetup.com/south-florida-actors/events/303867585/",
        date: "2025-08-09T12:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/303867621/",
        date: "2025-10-04T12:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/303867621/?eventOrigin=group_events_list",
        date: "2026-02-07T12:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/310618183/?eventOrigin=group_events_list",
        date: "2026-08-08T12:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/310618219/?eventOrigin=group_events_list",
        date: "2026-10-03T12:00",
      },
    ],
  },
  {
    classId: 7,
    title: "Mastering your monologue",
    type: ClassType.Class,
    duration: "4 weeks",
    image:
      "https://secure.meetupstatic.com/photos/event/1/9/3/1/highres_489666449.webp",
    description:
      'Dive deep into the art of solo performance with our 4-week "Strictly Monologues" class, focusing exclusively on memorized monologue, interpretation, and delivery. Enhance your ability to captivate an audience with powerful, nuanced performances that showcase your individual talent and storytelling prowess.',
    slug: "monologues",
    price: 300,
    upcoming: [],
  },
  {
    classId: 8,
    title: "Monologue and scene study",
    type: ClassType.Class,
    duration: "8 weeks",
    image:
      "https://secure.meetupstatic.com/photos/event/2/4/2/f/highres_494049263.webp",
    description:
      'Embark on an 8-week journey of intensive "Monologue & Scene Study with Performance," where you\'ll delve deep into character exploration and scene dynamics to refine your acting skills. This comprehensive course culminates in a performance showcase, offering you the opportunity to present your polished monologues and scenes, honed through expert guidance and collaborative learning.',
    slug: "monologues-and-scenes",
    price: 300,
    upcoming: [
      {
        url: "https://www.meetup.com/south-florida-actors/events/303852234/",
        date: "2025-08-11T18:30:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/310753199/?eventOrigin=group_events_list",
        date: "2026-03-02T18:30:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/310753318/?eventOrigin=group_events_list",
        date: "2026-08-10T18:30:00",
      },
    ],
    show: {
      title: "Bare Bones Performance",
      description:
        "The students from the 8-week monologues and scenes class will be showcasing their work. Come to support your local community of actors.",
      image:
        "https://secure.meetupstatic.com/photos/event/2/4/2/f/highres_494049263.webp",
      upcoming: [
        {
          url: "https://www.meetup.com/south-florida-actors/events/304167774/",
          date: "2025-10-06T19:00:00",
        },
      ],
    },
  },
  {
    classId: 9,
    title: "Picking your monologue",
    type: ClassType.Workshop,
    duration: "3 hour workshop",
    image:
      "https://secure.meetupstatic.com/photos/event/4/1/3/4/highres_501916692.webp",
    description:
      "Choosing the Perfect Monologue - a 3-hour workshop focused on selecting monologues that resonate with your unique strengths and style. Learn how to pick compelling pieces that showcase your talents, suit your character type, and make a lasting impression in auditions and performances.",
    slug: "picking-your-monologue",
    price: 75,
    upcoming: [
      {
        url: "https://www.meetup.com/south-florida-actors/events/310665383/?eventOrigin=group_events_list",
        date: "2026-05-02T12:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/310665395/?eventOrigin=group_events_list",
        date: "2026-06-11T12:00",
      },
    ],
  },
  {
    classId: 10,
    title: "Public speaking",
    type: ClassType.Class,
    duration: "4 weeks",
    image:
      "https://secure.meetupstatic.com/photos/event/d/d/6/f/highres_480416687.webp",
    description:
      "This course transforms your public speaking abilities, using methods honed from years of award-winning acting coaching.",
    slug: "public-speaking",
    price: 300,
    upcoming: [
      {
        url: "https://www.meetup.com/south-florida-actors/events/303107148/",
        date: "2025-08-06T18:30:00",
      },
    ],
  },
  {
    classId: 11,
    title: "Self taping & submissions",
    type: ClassType.Class,
    duration: "4 weeks",
    image:
      "https://secure.meetupstatic.com/photos/event/d/d/6/e/highres_480416686.webp",
    description:
      "Learn the art of self-taping & submissions: Explore equipment choices, framing techniques, performance nuances, and strategic submissions to excel in the modern acting-auditioning world.",
    slug: "self-taping-class",
    price: 300,
    upcoming: [
      {
        url: "https://www.meetup.com/south-florida-actors/events/298753585/",
        date: "2025-10-09T18:30:00",
      },
    ],
  },
  {
    classId: 12,
    title: "Script breakdown & analysis",
    type: ClassType.Workshop,
    image:
      "https://secure.meetupstatic.com/photos/event/2/3/2/d/highres_494049005.webp",
    duration: "3 hour workshop",
    description:
      'Dive into the depths of script interpretation with our 3-hour "Script Breakdown and Analysis" workshop, designed to enhance your understanding of narrative structure, character development, and thematic elements. Gain valuable skills in dissecting scripts, uncovering subtext, and bringing nuanced performances to life through detailed analysis and practical exercises.',
    slug: "script-analysis",
    price: 75,
    upcoming: [],
  },
  {
    classId: 13,
    title: "Step One: The business end",
    type: ClassType.Workshop,
    image:
      "https://secure.meetupstatic.com/photos/event/9/c/8/8/event_516040072.webp?w=2048",
    duration: "3 hour workshop",
    description:
      'Dive into the "Business End of the Acting/Modeling Business" a comprehensive 3 hour session designed to unveil the intricacies of the industry, from knowing what to do to, where to go and who to see effectively.. Gain essential insights and tools to navigate the business side of acting/modeling, setting the stage for a successful and informed career.',
    slug: "step-one",
    price: 75,
    upcoming: [
      {
        url: "https://www.meetup.com/south-florida-actors/events/304065040/",
        date: "2025-09-20T12:00:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/304065060/",
        date: "2025-11-15T12:00:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/310616862/?eventOrigin=group_events_list",
        date: "2026-01-10T12:00:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/310616902/?eventOrigin=group_events_list",
        date: "2026-03-21T12:00:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/310616917/?eventOrigin=group_events_list",
        date: "2026-05-16T12:00:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/310616940/?eventOrigin=group_events_list",
        date: "2026-07-18T12:00:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/310616975/?eventOrigin=group_events_list",
        date: "2026-09-19T12:00:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/310616991/?eventOrigin=group_events_list",
        date: "2026-11-14T12:00:00",
      },
    ],
  },
  {
    classId: 14,
    title: "Story sharing workshop",
    type: ClassType.Workshop,
    image:
      "https://secure.meetupstatic.com/photos/event/e/2/f/6/highres_479458102.webp",
    duration: "3 hour workshop",
    description:
      "In this 3-hour immersive workshop, we’ll focus on the craft of storytelling as a performance art. Learn to master the art of crafting and performing your unique story with impact and authenticity. Learn techniques to effectively narrate, engage audiences, and express your personal journey through powerful storytelling and performance skills.",
    slug: "story-telling",
    price: 75,
    upcoming: [],
  },
  {
    classId: 15,
    title: "Improv for the 55+ crowd",
    type: ClassType.Class,
    image:
      "https://secure.meetupstatic.com/photos/event/b/f/d/3/600_523609107.webp",
    duration: "4 weeks",
    description:
      'Join our 6-week "Silver stage improvisation for the 55+ crowd," designed to unlock your creative potential and sharpen your spontaneous reaction skills in a supportive, dynamic environment. Culminating in a live performance, this course offers a unique opportunity to showcase your improvisational talents, building confidence and collaborative skills.',
    slug: "silver-stage-improv",
    price: 225,
    upcoming: [
      {
        url: "https://www.meetup.com/south-florida-actors/events/310666041/?eventOrigin=group_events_list",
        date: "2026-06-06T12:00",
      },
    ],
  },
  {
    classId: 16,
    title: "Working your monologue",
    type: ClassType.Workshop,
    image:
      "https://secure.meetupstatic.com/photos/event/d/1/a/f/600_524213679.webp",
    duration: "3 hour workshop",
    description:
      "Are you ready to take your monologue to the next level? Whether you’re preparing for an audition, building a reel, or just looking to sharpen your skills, this 3-hour workshop is designed to help actors unlock the hidden depths of their monologue.",
    slug: "working-your-monologue",
    price: 75,
    upcoming: [
      {
        url: "https://www.meetup.com/south-florida-actors/events/304128551/",
        date: "2025-10-18T12:00:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/310630985/?eventOrigin=group_events_list",
        date: "2026-10-17T12:00:00",
      },
    ],
  },
  {
    classId: 17,
    title: "Camera workout",
    type: ClassType.Class,
    image:
      "https://secure.meetupstatic.com/photos/event/c/4/c/e/600_523610382.webp",
    duration: "4 weeks",
    description:
      "This dynamic and interactive class is designed for actors looking to refine their on-camera performance skills while receiving detailed, personalized feedback through playback analysis.",
    slug: "camera-workout",
    price: 300,
    upcoming: [],
  },
  {
    classId: 18,
    title: "Memorization techniques",
    type: ClassType.Workshop,
    image:
      "https://secure.meetupstatic.com/photos/event/8/a/3/c/600_524255388.webp",
    duration: "3 hour workshop",
    description:
      "This dynamic 3-hour workshop is designed to help actors, public speakers, and anyone who needs to memorize text efficiently and confidently. Whether it is a script, speech, or presentation, this session will equip you with powerful techniques to enhance your memory skills and bring your text to life.",
    slug: "memorization",
    price: 75,
    upcoming: [
      {
        url: "https://www.meetup.com/south-florida-actors/events/304165259/",
        date: "2025-08-16T12:00:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/310649969/?eventOrigin=group_events_list",
        date: "2026-03-07T12:00:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/310651195/?eventOrigin=group_events_list",
        date: "2026-05-30T12:00:00",
      },
    ],
  },

  {
    classId: 19,
    title: "Public speaking workshop",
    type: ClassType.Class,
    duration: "3 hour workshop",
    image:
      "https://secure.meetupstatic.com/photos/event/d/d/6/f/highres_480416687.webp",
    description:
      "Speak with confidence—without the butterflies taking over. In this upbeat, supportive workshop, you’ll learn the essentials of public speaking and practice in a safe, secure environment where everyone roots for each other. You Perform on Camera with Playback. Perfect for beginners or anyone who wants a quick, practical refresher.",
    slug: "public-speaking",
    price: 300,
    upcoming: [
      {
        url: "https://www.meetup.com/south-florida-actors/events/310659930/?eventOrigin=group_events_list",
        date: "2026-01-24T12:00:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/310660007/?eventOrigin=group_events_list",
        date: "2026-04-25T12:00:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/310660026/?eventOrigin=group_events_list",
        date: "2026-06-20T12:00:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/310660697/?eventOrigin=group_events_list",
        date: "2026-08-29T12:00:00",
      },
      {
        url: "https://www.meetup.com/south-florida-actors/events/310660066/?eventOrigin=group_events_list",
        date: "2026-11-28T12:00:00",
      },
    ],
  },
];
