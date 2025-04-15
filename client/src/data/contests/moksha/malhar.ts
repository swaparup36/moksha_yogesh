import getDateFromIST from '~/utils/getDateFromIST'
import type { Contest } from '~/types'

export const malhar: Contest[] = [
  {
    id: 4,
    type: 'solo',
    slug: 'Mystic Mic',
    name: 'Mystic Mic',
    subtitle: 'Solo Singing Competition',
    badges: ['solo'],
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2025-04-23', '23:59:00'),
    description: [
      {
        p: 'day-03 time-  9 a.m. (for finals) ',
      },
      {
        p: 'This solo singing competition will be held in two stages: the preliminary round the and final round, contestants will have to submit their video of a maximum of 5 minutes for the preliminary round. selected candidates from the preliminary round will be competing in the Finals.',
      },
      {
        bold: true,
        p: 'Participants can choose any genre (Classical, Pop, Rock, Bollywood, etc.).',
      },
      {
        p: 'VISION: Malhar has always been one of the most active cultures of NIT Agartala. Its mission has always been to discover musical talents throughout the campus and to provide them with a favorable atmosphere to nurture their talents. Additionally, as a part of our musical endeavor, we will offer an ideal platform for everyone to showcase their singing skills and expand their horizons beyond academics.',
      },
      {
        bold: true,
        p: 'Contest Managers',
      },
      {
        ul: ['Sucheta Majumdar ( 81329 48780)', 'Souvik Pal (70056 66372)'],
      },
    ],
    instructions: [
      { heading: 'Venue' },
      { heading: 'Malhar official mail' },
      { p: 'malhar.music.nita@gmail.com' },
      { heading: 'General Rules' },
      {
        ul: [
          '1. The competition is open to undergraduate and postgraduate students from recognized colleges and universities.',
          '2. Participants selected from the online prelims will qualify for the finals.',

          '3. All participants must carry valid college ID cards for verification(during finals).',
          '4. Participants must report one hour before their scheduled performance time.',
          '6. Any kind of indecent language, offensive gestures, or inappropriate behavior will lead to disqualification.',
          '7. Participants must bring their own instruments during finals'

        ],
      },
      { heading: 'Rules & timelimit -prelims' },
      {
        ul: [
          '2 minutes .',
          'Online'
        ],
      },
      { heading: 'Rules & timelimit - Finals' },
      {
        ul: [
          '5 minutes (including setup time).',
          'Offline(Mentioned Venue,NIT Agartala)',
          'Instruments for Background music/karaoke tracks areallowed but must be submitted in advance.',
          'No auto-tuning or voice effects are allowed.'
        ],
      },
    ],
  },
  {
    id: 5,
    type: 'solo',
    slug: 'Melody War',
    name: 'Melody War',
    subtitle: 'Solo Instrumental',
    badges: ['solo'],
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2025-04-23', '23:59:00'),

    description: [
      {
        p: 'day-03 time-  9 a.m. (for finals) ',
      },
      {
        p: 'VISION: The main motive of this solo instrumental competition is to discover the untapped talented instrumentalists and give them the platform to showcase their talent and perform their heart out. ‘Malhar’s’ vision is to encourage all the instrumentalists out there to express themselves in front of such a huge crowd and to push them towards active participation in club and college events in the future and outshine their cultural horizons.',
      },
      {
        bold: true,
        p: 'Contest Managers',
      },
      {
        ul: ['Sucheta Majumdar ( 81329 48780)', 'Souvik Pal (70056 66372)'],
      },
    ],
    instructions: [
      { heading: 'Malhar official mail' },
      { p: 'malhar.music.nita@gmail.com' },
      { heading: 'General Rules' },
      {
        ul: [
          '1. The competition is open to undergraduate and postgraduate students from recognized colleges and universities.',
          '2. Participants selected from the online prelims will qualify for the finals.',

          '3. All participants must carry valid college ID cards for verification(during finals).',
          '4. Participants must report one hour before their scheduled performance time.',
          '6. Any kind of indecent language, offensive gestures, or inappropriate behavior will lead to disqualification.',
          '7. Participants must bring their own instruments during finals'

        ],
      },
      { heading: 'Rules & timelimit -prelims' },
      {
        ul: [
          '2 minutes .',
          'Online'
        ],
      },
      { heading: 'Rules & timelimit - Finals' },
      {
        ul: [
          '5 minutes (including setup time).',
          'Offline(Mentioned Venue,NIT Agartala)',
          'Participants must bring their own instruments during finals',
          'No auto-tuning or voice effects are allowed.'
        ],
      },
    ],
  },
  {
    id: 6,
    type: 'solo',
    slug: 'Verse Clash',
    name: 'Verse Clash',
    subtitle: 'Freestyle Rap Battle',
    badges: ['solo'],
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2024-04-23', '23:59:00'),
    description: [
      {
        p: 'day-03 time-  9 a.m. (for finals) ',
      },
      {
        p: 'This rap battle competition will be held in two stages: a preliminary round, from which a chosen group of contestants will advance to the final round, which will take place in the auditorium.',
      },
      {
        bold: true,
        p: 'Winners will be awarded some exciting prizes!',
      },
      {
        p: 'VISION: Finding undiscovered talent on campus and providing students with a stage to perform in addition to their academic obligations have always been the goals of Malhar. In addition, as a part of our musical endeavour, we will provide the perfect stage for all participants to broaden their perspectives beyond academics and exhibit their musical prowess.',
      },
      {
        bold: true,
        p: 'Contest Managers',
      },
      {
        ul: ['Sucheta Majumdar ( 81329 48780)', 'Souvik Pal (70056 66372)'],
      },
    ],
    instructions: [
      { heading: 'Venue' },
      { ul: ['Prelims: Online', 'Finals: Auditorium or stage provided.',] },
      { heading: 'Malhar official mail' },
      { p: 'malhar.music.nita@gmail.com' },
      { heading: 'General Rules' },
      {
        ul: [
          '1. The competition is open to undergraduate and postgraduate students from recognized colleges and universities.',
          '2. Participants selected from the online prelims will qualify for the finals.',

          '3. All participants must carry valid college ID cards for verification(during finals).',
          '4. Participants must report one hour before their scheduled performance time.',
          '6. Any kind of indecent language, offensive gestures, or inappropriate behavior will lead to disqualification.',
          '7. Participants must bring their own instruments during finals'

        ],
      },
      { heading: 'Rules & timelimit -prelims' },
      {
        ul: [
          '2 minutes .',
          'Online'
        ],
      },
      { heading: 'Rules & timelimit - Finals' },
      {
        ul: [
          '5 minutes (including setup time).',
          'Offline(Mentioned Venue,NIT Agartala)',
          ' Lyrics improvised at the spot are more prioritized .',
          ' No physical contacts.excessive vulgarity will be entertained.'
        ],
      },
    ],
  },
  {
    id: 7,
    type: 'team',
    slug: 'Harmony Showdown',
    name: 'Harmony Showdown',
    badges: ['team'],
    subtitle: 'Band Competition',
    allowedTeamSize: { min: 3, max: 6 },
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2024-04-23', '23:59:00'),
    description: [
      {
        p: 'day-03 time-  9 a.m. (for finals) ',
      },
      {
        p: 'Have you been into group singing recently? Then Melody mania is the perfect platform to showcase your vocal talents The competition invites some of the best musicians from across India to blend their voices at the auditorium stage. This competition consists of two rounds: a preliminary round (online) from which a chosen group of contestants will advance to the final round(Auditorium).',
      },
      {
        bold: true,
        p: 'Winners will be awarded some exciting prizes which will be revealed later!',
      },
      {
        p: "VISION: Malhar's mission has always been to provide a platform for talented singers to showcase their musical abilities. The competition can provide a way for these singers to gain exposure and recognition, and potentially even launch a career in the music industry. In addition, this competition will help to develop important teamwork skills, such as communication, collaboration, and respect for each other. As icing on the cake, this will promote cultural diversity by featuring groups with different backgrounds, musical traditions, and styles of music.",
      },
      {
        bold: true,
        p: 'Contest Managers',
      },
      {
        ul: ['Sucheta Majumdar ( 81329 48780)', 'Souvik Pal (70056 66372)'],
      },
    ],
    instructions: [
      { heading: 'Venue' },
      {
        ul: ['Prelims: Online', 'Finals: Auditorium or stage provided.'],
      },
      { heading: 'Malhar official mail' },
      { p: 'malhar.music.nita@gmail.com' },
      { heading: 'General Rules' },
      {
        ul: [
          '1. The competition is open to undergraduate and postgraduate students from recognized colleges and universities.',
          '2. Participants selected from the online prelims will qualify for the finals.',

          '3. All participants must carry valid college ID cards for verification(during finals).',
          '4. Participants must report one hour before their scheduled performance time.',
          '6. Any kind of indecent language, offensive gestures, or inappropriate behavior will lead to disqualification.',
          '7. Participants must bring their own instruments during finals'

        ],
      },
      { heading: 'Rules & timelimit -prelims' },
      {
        ul: [
          '5 minutes .',
          'Online'
        ],
      },
      { heading: 'Rules & timelimit - Finals' },
      {
        ul: [
          '20 minutes (including setup time).',
          'Offline(Mentioned Venue,NIT Agartala)',
          'Only live music is allowed (no pre-recorded tracks).'
        ],
      },
      {
        bold: true,
        p: 'Winners will be awarded some exciting prizes which will be revealed later.',
      },
    ],
  },
  {
    id: 8,
    type: 'team',
    slug: 'BATTLE OF BANDS',
    name: 'BATTLE OF BANDS',
    badges: ['team'],
    subtitle: 'Band Competition',
    allowedTeamSize: { min: 3, max: 6 },
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2024-04-23', '23:59:00'),
    description: [
      {
        p: 'in collaboration with A.T.M.A Society, day-03 time- 1:30 p.m. (for finals) ',
      },
      {
        p: 'This rap battle competition will be held in two stages: a preliminary round, from which a chosen group of contestants will advance to the final round, which will take place in the auditorium.',
      },
      {
        bold: true,
        p: 'Winners will be awarded some exciting prizes which will be revealed later!',
      },
      {
        p: 'VISION: Finding undiscovered talent on campus and providing students with a stage to perform in addition to their academic obligations have always been the goals of Malhar. In addition, as a part of our musical endeavour, we will provide the perfect stage for all participants to broaden their perspectives beyond academics and exhibit their musical prowess.',
      },
      {
        bold: true,
        p: 'Contest Managers',
      },
      {
        ul: ['Sucheta Majumdar ( 81329 48780)', 'Souvik Pal (70056 66372)'],
      },
    ],
    instructions: [
      { heading: 'Venue' },
      {
        ul: ['Prelims: Online', 'Finals: Auditorium or stage provided.'],
      },
      { heading: 'Malhar official mail' },
      { p: 'malhar.music.nita@gmail.com' },
      {
        bold: true,
        p: 'Contest Managers',
      },
      {
        ul: ['Sucheta Majumdar ( 81329 48780)', 'Souvik Pal (70056 66372)'],
      },
      { heading: 'General Rules' },
      {
        ul: [
          '● All bands must contain a minimum of three (3) members.',
          '● Member of one participating band is not allowed to be a member of any other band participating in the event except his own Band.',
          '● Only band members on the registration form will be admitted on stage.',
          '● All bands agree to have their name, voice, and/or likeness used in any advertising or broadcasting material relating to this contest without compensation or rights to royalties for such use.',
          '● Lyrics of performance songs should not contain any obscenities if possible.',
          '● Judges can deduct points for any use of obscenities not necessary.',
          '● The use of any illegal substances will not be tolerated. If any band member is suspected to be under the influence of an illegal substance, the entire band will be disqualified and the proper authorities will be notified',
          '● All band members are required to be present at least 30 minutes prior to performance time to check in with the coordinator. If all band members are not present and ready to set up for performance 15 minutes before going on stage, the band will be disqualified.',
          '● All participants are required to be courteous and respectful toward other participating musicians.',
          '● No Travelling allowances will be provided.'
        ],
      },
      { heading: 'EQUIPMENT AND ONSTAGE RULES:' },
      {
        ul: [
          ' Participating must bring their own instruments except Drum kit. Drumkit will be provided by the Organisers', ' Band members are responsible for the security of their equipment.', ' Each band will be given the opportunity to play at least 3 songs.', ' At least one song must be an original.', ' There will be a strict time limit of 30 minutes for each band on stage including set up time. Please plan your songs accordingly. You may have one long song and one short song but no more than 30 mins minutes is allowed.', ' While one band is playing, the next band may start getting ready to set up in the background. However, please do not be disruptive so that the band on stage can be the focus of the judges and the crowd.', ' Bands must not use pre-recorded sound material. All bands must play live.', ' The judging system is designed to keep the contest open to all skill levels and song choices while keeping the event fair and competitive.'
        ],
      },

      {
        bold: true,
        p: 'Winners will be awarded some exciting prizes which will be revealed later.',
      },
],
  }
  
]
