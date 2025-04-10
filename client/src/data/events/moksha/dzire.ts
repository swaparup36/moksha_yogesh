import { Event } from '~/types'

export const dzire: Event[] = [
  {
    id: 1,
    slug: 'ethereal-echo',
    name: '💫 Ethereal Echo',
    club: 'dzire',
    subtitle: 'Classical Solo Dance',
    image: {
      src: '/images/events/generic-poster.png',
    },
    description: [
      {
        heading: 'About the Event',
      },
      {
        p: "Experience the richness of India's cultural heritage through the art of classical dance. Our classical solo dance competition showcases the skill and passion of our talented participants.",
      },
      {
        p: "Let's enjoy the spectacle!",
      },
      {
        bold: true,
        p: 'Event Managers',
      },
      {
        ul: ['Sanskriti Sharma', 'Aditya Pillai'], // Replace with actual names
      },
    ],
    instructions: [
      {
        heading: 'Rules',
      },
      {
        ul: [
          'Solo event.',
          'Only classical dance forms are allowed.',
          'Time limit: 3 to 5 minutes.',
          'Participants must bring their own music tracks.',
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'genesis',
    name: '🌟 Genesis',
    club: 'dzire',
    subtitle: 'Non-Classical Solo Dance',
    image: {
      src: '/images/events/generic-poster.png',
    },
    description: [
      {
        heading: 'About the Event',
      },
      {
        p: 'Where creativity meets movement! Join us for our Non-Classical Solo Dance Competition, featuring talented performers with their own twist on popular styles.',
      },
      {
        p: 'Unleash your energy and passion!',
      },
      {
        bold: true,
        p: 'Event Managers',
      },
      {
        ul: ['Priya Nair', 'Ritik Roy'], // Replace with actual names
      },
    ],
    instructions: [
      {
        heading: 'Rules',
      },
      {
        ul: [
          'Solo event.',
          'Any non-classical form is allowed (freestyle, western, etc).',
          'Time limit: 3 to 5 minutes.',
          'Participants must bring their own music.',
        ],
      },
    ],
  },
  {
    id: 3,
    slug: 'twin-flames',
    name: '🔥 Twin Flames',
    club: 'dzire',
    subtitle: 'Duet Dance Competition',
    image: {
      src: '/images/events/generic-poster.png',
    },
    description: [
      {
        heading: 'About the Event',
      },
      {
        p: 'Double the fun, double the energy! Join us for our Duet Dance Competition, featuring talented pairs showcasing their skills.',
      },
      {
        p: 'Two hearts, one beat, endless energy!',
      },
      {
        bold: true,
        p: 'Event Managers',
      },
      {
        ul: ['Tanvi Rawat', 'Kunal Sinha'], // Replace with actual names
      },
    ],
    instructions: [
      {
        heading: 'Rules',
      },
      {
        ul: [
          'Duet event (2 participants).',
          'Any dance form allowed.',
          'Time limit: 4 to 6 minutes.',
          'Props allowed but must be handled by participants.',
        ],
      },
    ],
  },
  {
    id: 4,
    slug: 'street-dynamix',
    name: '🕺 Street Dynamix',
    club: 'dzire',
    subtitle: 'Hip-Hop Cypher',
    image: {
      src: '/images/events/generic-poster.png',
    },
    description: [
      {
        heading: 'About the Event',
      },
      {
        p: 'The streets are alive! Join us for the ultimate Hip-Hop Cypher, where the best street dancers battle it out for supremacy.',
      },
      {
        p: 'Who will reign supreme?',
      },
      {
        bold: true,
        p: 'Event Managers',
      },
      {
        ul: ['Ishaan Malik', 'Tanya Rathi'], // Replace with actual names
      },
    ],
    instructions: [
      {
        heading: 'Rules',
      },
      {
        ul: [
          'Open for individual participants.',
          'Cypher format — one dancer at a time.',
          'Rounds will be eliminative.',
          'No explicit lyrics or vulgar movements.',
        ],
      },
    ],
  },
  {
    id: 5,
    slug: 'cosmic-clash',
    name: '🌌 Cosmic Clash',
    club: 'dzire',
    subtitle: 'Group Dance Competition',
    image: {
      src: '/images/events/generic-poster.png',
    },
    description: [
      {
        heading: 'About the Event',
      },
      {
        p: 'Sync, spark, and spectacular moves! Our Group Dance Competition is where teamwork meets creativity.',
      },
      {
        p: 'Showcase your skills and energy.',
      },
      {
        bold: true,
        p: 'Event Managers',
      },
      {
        ul: ['Nidhi Agarwal', 'Yash Thakur'], // Replace with actual names
      },
    ],
    instructions: [
      {
        heading: 'Rules',
      },
      {
        ul: [
          'Group event (3 to 10 participants).',
          'Any dance form allowed.',
          'Time limit: 5 to 8 minutes including setup.',
          'Props are allowed and must be handled by the team.',
        ],
      },
    ],
  },
]
