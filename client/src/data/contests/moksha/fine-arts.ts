import getDateFromIST from '~/utils/getDateFromIST'
import { Contest } from '~/types'

export const fineArts: Contest[] = [
  {
    id: 2,
    type: 'solo',
    slug: 'wear-your-imagination',
    name: 'WEAR YOUR IMAGINATION',
    subtitle: 'Costume competition',
    badges: ['solo'],
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2025-04-03', '23:59:00'),
    description: [
      {
        p: 'Participants will design and create a costume on the spot within 3 hours using basic materials like newspapers, cardboards, etc. They have to wear it and do their own makeup too. The focus is on originality and presentation.',
      },
      {
        bold: true,
        p: 'Theme',
      },
      {
        bold: true,
        p: 'Venue:- Knowledge Park(DAY 3)'
      },
      {
        bold: true,
        p: 'Time:- 2-4pm'
      }
    ],
    instructions: [
      { heading: 'Rules' },
      {
        ul: [
        'TEAM SIZE : 2',
        'TIME LIMIT : 2 hours ',
        'Participants will be provided 2 hours to complete their outfit.',
        'Costumes must align with the theme. No offensive , inappropriate or culturally insensitive outfits allowed.',
        'Materials like cardboard, paper and other accessories required for the outfit will be provided at the time of competition.',
        'Participants will be given 1 min to display their outfits with a short act, walk or pose.',
        'Participants are allowed to choose another person as their model during the time of judgement.',
        ],
      },
    ],
  },
  {
    id: 3,
    type: 'solo',
    subtitle: 'Face Art Competition',
    slug: 'face-pallete',
    name: 'Face Pallete',
    badges: ['solo'],
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2025-04-03', '23:59:00'),
    description: [
      {
        p: 'In teams of two, one person paints on the other\'s face based on a theme given on the spot. Face paints and brushes will be provided. It\'s a time-based creative challenge highlighting detail and imagination.',
      },
      {
        bold: true,
        p: 'Venue:- Knowledge Park(DAY 2)'
      },
      {
        bold: true,
        p: 'Time:- 11am-1pm'
      }
    ],
    instructions: [
      { heading: 'Rules' },
      {
        ul: [
        'TEAM SIZE : 2',
        'TIME LIMIT : 2 hours ',
        'Team size is of 2 people , one as a painter and the other as the painting.',
        'Time limit is 2 hours.',
        'Organizers will be providing face paints and brushes.',
        'People allergic to face paints are not allowed to participate.',
        'Both the participants should be from the same college/ institute.',
        ],
      },
    ],
  },
]
