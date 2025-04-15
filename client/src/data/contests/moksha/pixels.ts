import type { Contest } from '~/types'
import getDateFromIST from '~/utils/getDateFromIST'

export const pixels: Contest[] = [
  {
    id: 23, 
    type: 'solo',
    slug: 'cosmania-2-0',
    name: 'Cosmania 2.0',
    badges: ['solo'], 
    image: {
      src: '/images/contests/generic-poster.png', 
    },
    deadline: getDateFromIST('2025-04-23', '23:59:00'),
    description: [
      {
        bold: true,
        p: 'Unleash Your Inner Character at Cosmania 2.0!',
      },
      {
        p: 'Animystics, the Anime community of NITA in association with PIXELS - PhotoGraphics Club, presents Cosmania 2.0, a celebration of fandom and imagination through cosplay!',
      },
      {
        bold: true,
        p: 'About the Club',
      },
      {
        p: 'Animystics is a club for enthusiasts of cosplay. We aim to bring people together through creative expression, costume design, and performance art.',
      },
      {
        bold: true,
        p: 'Event Details',
      },
      {
        p: 'COSMANIA is one of our biggest events celebrating the spirit of fandom and imagination in the form of cosplaying. Participants bring their favorite characters to life through costumes, acting, and on-stage performances. The event is open to all age groups and welcomes both individuals and groups.',
      },
      {
        bold: true,
        p: 'Solo Round: Costume Showcase',
      },
      {
        p: 'Participants will introduce themselves and present their costumes while staying in character.',
      },
      {
        bold: true,
        p: 'Age-Based Categories:',
      },
      {
        ul: ['6-12 years', '12-18 years', '18 and above'],
      },
      {
        bold: true,
        p: 'Judging Criteria',
      },
      {
        ul: [
          'Creativity & Accuracy: How well the costume represents the character.',
          'Craftsmanship: The quality and effort in costume design.',
          'Performance: Acting, confidence, and stage presence.',
          'Audience Connection: How well the participant engages with the crowd.',
        ],
      },
      {
        bold: true,
        p: 'Time, Date, and Venue',
      },
      {
        p: 'Time: 4 PM',
      },
      {
        p: 'Date: DAY 2',
      },
      {
        p: 'Venue: MAIN STAGE',
      },
    ],
    instructions: [
      { heading: 'Rules and Regulations' },
      {
        ul: [
          'All participants, organizers, and attendees must be treated with respect at all times.',
          'Costumes must align with the event’s guidelines and maintain a respectful presentation.',
          'The instructions of event coordinators must be followed, and all competition guidelines must be adhered to.',
          'The event space must be kept clean, and all props must be handled responsibly.',
          'Any behavior or costume elements that may be inappropriate or offensive must be avoided.',
        ],
      },
      { heading: 'Additional Information' },
      {
        ul: [
          'No participation fee.',
          'Prizes will be awarded on the same day after the final round.',
          'Audience voting will contribute to the final decision.',
          'Participants are responsible for all costume-related expenses, including transport and materials.',
          'Participants can cosplay characters from comics (DC, Marvel, Manga), anime, movies, historical figures, games, TV shows, and web series.',
        ],
      },
    ],
  },
]