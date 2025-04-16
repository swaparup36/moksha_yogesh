import getDateFromIST from '~/utils/getDateFromIST'
import type { Contest } from '~/types'

export const dzire: Contest[] = [
  {
    id: 10,
    type: 'solo',
    slug: 'etheral-echoes',
    name: 'ETHERAL ECHOES',
    subtitle: 'SOLO CLASSICAL DANCE COMPETITION',
    badges: ['solo'],
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2024-04-23', '23:59:00'),
    description: [
      { p: 'A solo dance competition on classical genres.' },
      { ul: ['Prelims will be online.', 'Finals will be offline.', 'Venue: Visvesvaraya Auditorium.'] },
    ],
    instructions: [
      { heading: 'Rules' },
      {
        ul: [
          'Any pre-recorded or live music can be used.',
          'Participants must be above 15 years old.',
          'Nudity, vulgarity, and live animals are prohibited.',
          'Music for the finals must be submitted in advance.',
          'Organizers’ decisions are final.',
        ],
      },
      { heading: 'Prelims: Online Mode' },
      {
        ul: [
          'Participants can present a demo for the final round.',
          'Performance duration should not exceed 3 minutes.',
          'Props are allowed but will not fetch points.',
        ],
      },
      { heading: 'Finals: Offline Mode (Day-1)' },
      {
        ul: [
          'Venue: Visvesvaraya Auditorium.',
          'Time: 12pm to 2pm (reporting time - 11am).',
          'Performance duration should not exceed 5 minutes.',
          'Creative use of props is allowed and will fetch extra points.',
        ],
      },
      { heading: 'Judging Criteria' },
      {
        ul: [
          'Posture and authenticity of form = 40 Marks',
          'Expression and artistic narration = 30 marks',
          'Innovation and integrity = 15 marks',
          'Costume and featuring = 15 marks',
        ],
      },
    ],
  },
  {
    id: 11,
    type: 'solo',
    slug: 'genesis',
    name: 'GENESIS',
    subtitle: 'SOLO NON-CLASSICAL DANCE COMPETITION',
    badges: ['solo'],
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2024-04-23', '23:59:00'),
    description: [
      { p: 'A solo dance competition on non-classical genres.' },
      { ul: ['Prelims will be online.', 'Finals will be offline.', 'Venue: Visvesvaraya Auditorium.'] },
    ],
    instructions: [
      { heading: 'Rules' },
      {
        ul: [
          'Any pre-recorded or live music can be used.',
          'Participants must be above 15 years old.',
          'Nudity, vulgarity, and live animals are prohibited.',
          'Music for the finals must be submitted in advance.',
          'Organizers’ decisions are final.',
        ],
      },
      { heading: 'Prelims: Online Mode' },
      {
        ul: [
          'Participants can present a demo for the final round.',
          'Performance duration should not exceed 3 minutes.',
          'Props are allowed but will not fetch points.',
        ],
      },
      { heading: 'Finals: Offline Mode (Day-1)' },
      {
        ul: [
          'Venue: Visvesvaraya Auditorium.',
          'Time: 10am to 12pm (reporting time - 9 am).',
          'Performance duration should not exceed 5 minutes.',
          'Creative use of props is allowed and will fetch extra points.',
        ],
      },
      { heading: 'Judging Criteria' },
      {
        ul: [
          'Posture and authenticity of form = 40 Marks',
          'Expression and artistic narration = 30 marks',
          'Innovation and integrity = 15 marks',
          'Costume and featuring = 15 marks',
        ],
      },
    ],
  },
  {
    id: 12,
    type: 'team',
    slug: 'twin-flames',
    name: 'TWIN FLAMES',
    subtitle: 'DUET DANCE COMPETITION',
    badges: ['duet'],
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2024-04-23', '23:59:00'),
    allowedTeamSize: 2,
    description: [
      { p: 'A duet dance competition.' },
      { ul: ['Prelims will be online.', 'Finals will be offline.', 'Venue: Visvesvaraya Auditorium.'] },
    ],
    instructions: [
      { heading: 'Rules' },
      {
        ul: [
          'Any pre-recorded or live music can be used.',
          'Participants must be above 15 years old.',
          'Maximum participants - 2.',
          'Nudity, vulgarity, and live animals are prohibited.',
          'Music for the finals must be submitted in advance.',
          'Organizers’ decisions are final.',
        ],
      },
      { heading: 'Prelims: Online Mode' },
      {
        ul: [
          'Participants can present a demo for the final round.',
          'Performance duration should not exceed 3 minutes.',
          'Props are allowed but will not fetch points.',
        ],
      },
      { heading: 'Finals: Offline Mode (Day-2)' },
      {
        ul: [
          'Venue: Visvesvaraya Auditorium.',
          'Time: 3pm to 5pm (reporting time - 2pm).',
          'Performance duration should not exceed 6 minutes.',
          'Creative use of props is allowed and will fetch extra points.',
        ],
      },
      { heading: 'Judging Criteria' },
      {
        ul: [
          'Coordination and chemistry = 40 Marks',
          'Expression and artistic narration = 30 marks',
          'Innovation and integrity = 15 marks',
          'Costume and featuring = 15 marks',
        ],
      },
    ],
  },
  {
    id: 13,
    type: 'team',
    slug: 'cosmic-clash',
    name: 'COSMIC CLASH',
    subtitle: 'GROUP DANCE COMPETITION',
    badges: ['team'],
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2024-04-23', '23:59:00'),
    allowedTeamSize: { min: 3, max: 10 },
    description: [
      { p: 'A group dance competition.' },
      { ul: ['Prelims will be online.', 'Finals will be offline.', 'Venue: Visvesvaraya Auditorium.'] },
    ],
    instructions: [
      { heading: 'Rules' },
      {
        ul: [
          'Any pre-recorded or live music can be used.',
          'Participants must be above 15 years old.',
          'Maximum participants - 10.',
          'Nudity, vulgarity, and live animals are prohibited.',
          'Music for the finals must be submitted in advance.',
          'Organizers’ decisions are final.',
        ],
      },
      { heading: 'Prelims: Online Mode' },
      {
        ul: [
          'Participants can present a demo for the final round.',
          'Performance duration should not exceed 5 minutes.',
          'Props are allowed but will not fetch points.',
        ],
      },
      { heading: 'Finals: Offline Mode (Day-3)' },
      {
        ul: [
          'Venue: Visvesvaraya Auditorium.',
          'Time: 2pm to 4pm (reporting time - 1pm).',
          'Performance duration should not exceed 8 minutes.',
          'Creative use of props is allowed and will fetch extra points.',
        ],
      },
      { heading: 'Judging Criteria' },
      {
        ul: [
          'Coordination and chemistry = 40 Marks',
          'Expression and artistic narration = 30 marks',
          'Innovation and integrity = 15 marks',
          'Costume and featuring = 15 marks',
        ],
      },
    ],
  },
  {
    id: 14,
    type: 'solo',
    slug: 'street-dynamix',
    name: 'STREET DYNAMIX',
    subtitle: 'STREET DANCE BATTLE',
    badges: ['solo'],
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2024-04-23', '23:59:00'),
    description: [{ p: 'A street dance battle.' }],
    instructions: [
      { heading: 'Rules' },
      {
        ul: [
          'The participant must be above 15 years old.',
          'Any sort of nudity, vulgarity, and live animals are not allowed.',
          'No prelims, on-spot face-off.',
          'Any pre-recorded or live music can be used.',
          'One can do freestyle on the spot or prepare their own audio and provide it to the management at least 1 hour prior to the battle starts.',
          'The decision taken by the organizers is final and binding for the performers.',
        ],
      },
      { heading: 'Schedule' },
      {
        ul: [
          'Venue: Knowledge Park',
          'Time: 12pm to 1pm (reporting time - 11am).',
        ],
      },
      { heading: 'Judging Criteria' },
      {
        ul: [
          'Authenticity of form = 40 Marks',
          'Expression and artistic narration = 30 marks',
          'Innovation and integrity = 15 marks',
          'No. of rounds tackled = 15 marks',
        ],
      },
    ],
  },
]
