import { Event } from '~/types'

export const aaveg: Event[] = [
  {
    id: 1,
    slug: 'rangmanch',
    name: '🎭 Rangmanch',
    club: 'aaveg',
    subtitle: 'Aaveg',
    image: {
      src: '/images/events/generic-poster.png',
    },
    description: [
      {
        heading: 'About the Event',
      },
      {
        p: 'Unleash the magic of theatre with Rangmanch, the ultimate stage drama competition of Moksha IX.',
      },
      {
        p: 'Witness powerful performances, thought-provoking scripts, and mesmerizing acting as teams battle it out with creativity and emotion.',
      },
      {
        p: 'From satire to social commentary—this is where drama meets purpose. Lights. Emotions. Action.',
      },
      {
        bold: true,
        p: 'Event Managers',
      },
      {
        ul: ['John Doe', 'Jane Smith', 'Rahul Verma'], // Replace with actual names
      },
    ],
    instructions: [
      {
        heading: 'Rules',
      },
      {
        ul: [
          'Team event.',
          'Each team gets 20 minutes maximum (including setup and clearance).',
          'Props and music should be arranged by the team.',
          'Language can be Hindi or English.',
        ],
      },
    ],
  },
  {
    id: 1,
    slug: 'desi-squid-games',
    name: '🦑 Desi Squid Games',
    club: 'aaveg',
    subtitle: 'Aaveg',
    image: {
      src: '/images/events/generic-poster.png',
    },
    description: [
      {
        heading: 'About the Event',
      },
      {
        p: 'Inspired by the thrilling concept of Squid Games with a desi twist, Desi Squid Games is a high-energy survival challenge.',
      },
      {
        p: 'Filled with Indian childhood games, unpredictable tasks, and dramatic eliminations, it tests your grit and wit.',
      },
      {
        p: 'Teamwork, strategy, and nerves of steel will decide who makes it to the end. Will you survive the desi chaos?',
      },
      {
        bold: true,
        p: 'Event Managers',
      },
      {
        ul: ['Aarav Mehta', 'Simran Kaur', 'Priyanshu Das'], // Replace with actual names
      },
    ],
    instructions: [
      {
        heading: 'Rules',
      },
      {
        ul: [
          'Open for solo and group participation.',
          'All rounds will be eliminative.',
          'Rules for individual games will be explained before the round.',
          'Fair play is mandatory.',
        ],
      },
    ],
  },
]
