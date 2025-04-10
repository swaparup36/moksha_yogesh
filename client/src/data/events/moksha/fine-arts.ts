import { Event } from '~/types'

export const fineArts: Event[] = [
  {
    id: 1,
    slug: 'intercollege-art-exhibition',
    name: '🖼️ Intercollege Art Exhibition',
    club: 'fine-arts',
    subtitle: 'Theme-Based Art Display',
    image: {
      src: '/images/events/generic-poster.png',
    },
    description: [
      {
        heading: 'About the Event',
      },
      {
        p: 'An art exhibition where participants will submit their artworks based on a given theme. It\'s all about expressing creativity through painting, sketching, or mixed media.',
      },
      {
        bold: true,
        p: 'Event Managers',
      },
      {
        ul: ['Aryan Sharma', 'Sneha Patel'], // Replace with actual names
      },
    ],
    instructions: [
      {
        heading: 'Rules',
      },
      {
        ul: [
          'Solo participation.',
          'Artwork must align with the given theme.',
          'Mediums allowed: painting, sketching, charcoal, or mixed media.',
          'Participants must submit their original work. No plagiarism.',
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'junk-art',
    name: '♻️ Junk Art Competition',
    club: 'fine-arts',
    subtitle: 'Art from Waste',
    image: {
      src: '/images/events/generic-poster.png',
    },
    description: [
      {
        heading: 'About the Event',
      },
      {
        p: 'Teams will create artistic models or sculptures using provided junk materials. It’s a test of creativity and innovation through recycling.',
      },
      {
        bold: true,
        p: 'Event Managers',
      },
      {
        ul: ['Rhea Das', 'Naman Yadav'], // Replace with actual names
      },
    ],
    instructions: [
      {
        heading: 'Rules',
      },
      {
        ul: [
          'Team event (2-3 members).',
          'All materials will be provided on the spot.',
          'Time limit: 1.5 hours.',
          'Judging based on creativity, innovation, and presentation.',
        ],
      },
    ],
  },
  {
    id: 3,
    slug: 'costume-competition',
    name: '🎭 Costume Competition',
    club: 'fine-arts',
    subtitle: 'Design and Dress',
    image: {
      src: '/images/events/generic-poster.png',
    },
    description: [
      {
        heading: 'About the Event',
      },
      {
        p: 'Participants will design and create a costume on the spot within 2 hours using basic materials like newspapers, cardboards, etc.',
      },
      {
        p: 'They have to wear it and do their own makeup too. The focus is on originality and presentation.',
      },
      {
        bold: true,
        p: 'Event Managers',
      },
      {
        ul: ['Kavya Mehta', 'Ankit Ranjan'], // Replace with actual names
      },
    ],
    instructions: [
      {
        heading: 'Rules',
      },
      {
        ul: [
          'Solo or pair participation.',
          'Time limit: 2 hours.',
          'Materials like newspapers, tapes, cardboards will be provided.',
          'Makeup and wearing the costume is part of judging.',
        ],
      },
    ],
  },
  {
    id: 4,
    slug: 'face-art',
    name: '🎨 Face Art Competition',
    club: 'fine-arts',
    subtitle: 'Theme-Based Face Painting',
    image: {
      src: '/images/events/generic-poster.png',
    },
    description: [
      {
        heading: 'About the Event',
      },
      {
        p: 'In teams of two, one person paints on the other’s face based on a theme given on the spot. Face paints and brushes will be provided.',
      },
      {
        p: 'It’s a time-based creative challenge highlighting detail and imagination.',
      },
      {
        bold: true,
        p: 'Event Managers',
      },
      {
        ul: ['Harshit Verma', 'Megha Kapoor'], // Replace with actual names
      },
    ],
    instructions: [
      {
        heading: 'Rules',
      },
      {
        ul: [
          'Team of two (painter and model).',
          'Theme will be given on the spot.',
          'Time limit: 1 hour.',
          'Face paints and brushes will be provided.',
        ],
      },
    ],
  },
  {
    id: 5,
    slug: 'artistaan',
    name: '🌈 Artistaan',
    club: 'fine-arts',
    subtitle: 'Art-Based Fun Games',
    image: {
      src: '/images/events/generic-poster.png',
    },
    description: [
      {
        heading: 'About the Event',
      },
      {
        p: 'Artistaan will have exciting and fun games related to art and creativity.',
      },
      {
        p: 'It\'s all about enjoying the moment, so anyone who wants to have fun can join in! No pressure—just come, play, and vibe with your fellow artists.',
      },
      {
        bold: true,
        p: 'Event Managers',
      },
      {
        ul: ['Anushka Roy', 'Devansh Tiwari'], // Replace with actual names
      },
    ],
    instructions: [
      {
        heading: 'Rules',
      },
      {
        ul: [
          'Open participation.',
          'Multiple art-based mini-games.',
          'Rules for each game will be explained on the spot.',
          'No registration pressure—come and enjoy!',
        ],
      },
    ],
  },
]
