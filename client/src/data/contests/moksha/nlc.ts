import getDateFromIST from '~/utils/getDateFromIST'
import type { Contest } from '~/types'

export const nlc: Contest[] = [
  {
    id: 16,
    type: 'team',
    slug: 'open-council-debate',
    name: 'Open Council Debate',
    subtitle: 'Debate Competition',
    badges: ['team'],
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2025-04-23', '23:59:00'), 
    allowedTeamSize: 2,
    description: [
      {
        bold: true,
        p: 'Open Council Debate: Fostering Articulation and Critical Thinking',
      },
      {
        p: 'Engage in spirited discussions on current issues. Showcase your ability to articulate arguments and think critically under pressure.',
      },
      {
        bold: true,
        p: 'Event Format:',
      },
      {
        ul: [
          'Participation Format: 2 members per team',
          'Mode of Communication: English',
          'Type: Offline | On-Spot',
          'Eligibility: Open to all students',
          'Internet Usage: Not allowed',
          'Venue: Virtual Classroom - 2nd and 3rd Day (4 hrs each day)',
        ],
      },
      {
        bold: true,
        p: 'Event Structure:',
      },
      {
        ul: [
          'Teams will be provided with topics 10–15 minutes prior to the debate.',
          'Each speaker will get 2–3 minutes to present their points followed by a rebuttal round.',
          'The format may include For and Against, Crossfire, or Free Flow Council Discussion, depending on the round.',
        ],
      },
    ],
    instructions: [
      { heading: 'Rules & Guidelines' },
      {
        ul: [
          'Use of mobile phones or internet during preparation or speaking is strictly prohibited.',
          'Participants must speak only in English.',
          'Unparliamentary language or personal attacks will lead to disqualification.',
          'Respect the speaking time and decorum of the debate.',
        ],
      },
    ],
  },
  {
    id: 17,
    type: 'solo',
    slug: 'group-discussion',
    name: 'Group Discussion',
    subtitle: 'Discuss and Express',
    badges: ['solo'],
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2025-04-23', '23:59:00'), // Update Deadline
    description: [
      {
        bold: true,
        p: 'Group Discussion: Showcase Your Communication and Analytical Skills',
      },
      {
        p: 'Participate in dynamic group discussions and demonstrate your ability to analyze, communicate, and collaborate effectively.',
      },
      {
        bold: true,
        p: 'Event Format:',
      },
      {
        ul: [
          'Participation Format: Solo',
          'Mode of Communication: English',
          'Type: Offline | On-Spot',
          'Eligibility: Open to all - Intercollege',
          'Internet Usage: Not allowed',
        ],
      },
      {
        bold: true,
        p: 'Event Structure:',
      },
      {
        ul: [
          'Participants will be grouped randomly (6–8 per group).',
          'A topic will be presented on the spot, followed by 2 minutes of thinking time.',
          'The discussion will continue for 8–10 minutes per group.',
        ],
      },
    ],
    instructions: [
      { heading: 'Rules & Guidelines' },
      {
        ul: [
          'No reference to internet-based content is allowed.',
          'Use of regional languages or switching between languages is discouraged.',
          'Maintain discipline; do not interrupt others unfairly.',
          'Speak logically and listen actively.',
        ],
      },
    ],
  },
  {
    id: 18,
    type: 'solo',
    slug: 'open-mic',
    name: 'Open Mic',
    subtitle: 'Poetry & Stand-up',
    badges: ['solo'],
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2025-04-23', '23:59:00'), 
    description: [
      {
        bold: true,
        p: 'Open Mic: Share Your Voice Through Poetry or Stand-up Comedy',
      },
      {
        p: 'Take the stage and express yourself through poetry, spoken word, or stand-up comedy. Let your creativity shine!',
      },
      {
        bold: true,
        p: 'Event Format:',
      },
      {
        ul: [
          'Participation Format: Solo',
          'Language: English or Hindi',
          'Type: Offline',
          'Eligibility: Open to all',
        ],
      },
      {
        bold: true,
        p: 'Event Structure:',
      },
      {
        ul: [
          'Participants can perform poetry/spoken word or stand-up comedy.',
          'Each participant will get a maximum of 4 minutes on stage.',
          'The mic is yours — make it lyrical, make it funny, make it yours.',
        ],
      },
    ],
    instructions: [
      { heading: 'Rules & Guidelines' },
      {
        ul: [
          'Any form of hate speech, vulgarity, or explicit content is not allowed.',
          'Plagiarized content may lead to disqualification.',
          'Respect the time limit to ensure a fair chance for all.',
          'Props are allowed but must be handled by the participant themselves.',
        ],
      },
    ],
  },
  {
    id: 19,
    type: 'team',
    slug: 'treasure-hunt',
    name: 'Treasure Hunt',
    subtitle: 'Solve Clues and Find the Treasure',
    badges: ['team'],
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2025-04-23', '23:59:00'), 
    allowedTeamSize: { min: 2, max: 3 },
    description: [
      {
        bold: true,
        p: 'Treasure Hunt: An Adventure of Wits and Exploration',
      },
      {
        p: 'Embark on a thrilling treasure hunt across campus, solving clues and puzzles to find the hidden treasure.',
      },
      {
        bold: true,
        p: 'Event Format:',
      },
      {
        ul: [
          'Participation Format: Teams of 2–3 members',
          'Type: Offline',
          'Eligibility: Open to all',
        ],
      },
      {
        bold: true,
        p: 'Event Structure:',
      },
      {
        ul: [
          'Clues will be spread across campus.',
          'Teams must solve each clue to move to the next location.',
          'The fastest team to reach the final treasure wins.',
        ],
      },
    ],
    instructions: [
      { heading: 'Rules & Guidelines' },
      {
        ul: [
          'Each team must stay together throughout the hunt.',
          'Mobile phones can be used only for capturing photos as instructed (if any).',
          'Do not damage property or interfere with clues placed for other teams.',
          'Any form of cheating or misbehavior will lead to disqualification.',
          'Judges’ decisions are final and binding.',
        ],
      },
    ],
  },
  {
    id: 20,
    type: 'solo',
    slug: 'political-opinion-article',
    name: 'Political Opinion',
    subtitle: 'Online Article Writing',
    badges: ['solo'],
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2025-04-23', '23:59:00'),
    description: [
      {
        bold: true,
        p: 'Political Opinion: Express Your Views Through Article Writing',
      },
      {
        p: 'Craft a well-reasoned opinion piece on a given political topic and showcase your writing and analytical skills.',
      },
      {
        bold: true,
        p: 'Event Format:',
      },
      {
        ul: [
          'Participation Format: Solo',
          'Mode: Online',
          'Language: English',
          'Eligibility: Open to all - Intercollege',
        ],
      },
      {
        bold: true,
        p: 'Structure & Rules:',
      },
      {
        ul: [
          'Participants must write an opinion-based article on a given political topic (topic will be released on the date of the event).',
          'Word Limit: 700 words.',
          'Submissions must be original and fact-checked.',
          'No use of AI-generated content or plagiarism allowed.',
          'Articles must maintain a civil, balanced tone (no hate speech, personal targeting, or extreme bias).',
          'Entries to be submitted in .docx or PDF format within the deadline via Google Form (link will be shared).',
        ],
      },
    ],
    instructions: [], 
  },
]