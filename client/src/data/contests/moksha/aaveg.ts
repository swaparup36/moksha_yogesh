import getDateFromIST from '~/utils/getDateFromIST'
import type { Contest } from '~/types'

export const aaveg: Contest[] = [
  {
    id: 20,
    type: 'solo',
    slug: 'parichay',
    name: 'Rangmanch ',
    subtitle: 'Stage Drama Competition',
    badges: ['solo'],
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2024-02-01', '23:59:00'),
    description: [
      {
        p: 'Lights, camera, naatak!',
      },
      {
        p: 'Step into the spotlight where emotions run high, stories come alive, and every line is delivered with passion. Rangmanch is your chance to showcase your theatrical talent and leave the audience in awe. Whether it\'s a gripping social drama, a hilarious comedy, or a thrilling plot twist worthy of a Bollywood climax, this is not just a play—it\'s an unforgettable performance.',
      },
      {
        p: 'To all the drama actors out there, this is your best chance to hog the limelight and own the stage!! This will be your moment of glory and your chance to steal the show, so prepare yourself and dazzle the audience with your talent and show yourself to be a master of impromptu action.',
      },
    ],

    instructions: [
      {
        heading: 'Rules',
      },
      {
        heading: "Time Limit:"
      },
      {
        ul: [
          'Performances should be between 15 to 20 minutes in length.',
          'Exceeding more than 2 minutes beyond 20 minutes will result in disqualification.',
          
        ],
      },
      {
        heading: "Theme & Language"
      },
      {
        ul: [
          'The theme is open to all genres—thriller, comedy, horror, romance, and more!',
          'Performances must be in Hindi or English.',
          'Teams are encouraged to explore various theatrical styles, including musical dramas for an extra flair!',
        ],
      },
      {
        heading: "Content Restrictions:"
      },
      {
        ul: [
          'No vulgarity—whether through actions or dialogues.',
          'Abusive language will not be tolerated.',
          'Any form of offensive, discriminatory, or inappropriate content will result in penalties or disqualification.',
        ],
      },
      {
        heading: "Stage Restrictions:"
      },
      {
        ul: [
          'Fire, water, and smoke are strictly prohibited on stage for safety reasons.'
        ],
      },
      {
        heading: "Lighting & Music:"
      },
      {
        ul: [
          'Lighting and music will be provided.',
          'If teams require live music, they must bring their own instruments to enhance the atmosphere.',
        ],
      },
      {
        heading: "Props Usage:"
      },
      {
        ul: [
          'Props must be arranged by the teams themselves.',
          'Creativity in prop usage will be taken into account during the judging process.',
        ],
      },
      {
        heading: 'Judging Criteria and Special Awards',
      },
      {
        heading: 'Penalty Deductions:',
      },
      {
        ul: [
          'Marks will be deducted for exceeding the time limit, inappropriate content, or failure to follow guidelines.'
        ],
      },
      {
        heading: 'Special Awards:',
      },
      {
        ul: [
          'Best Actor and Best Actress awards will be given to recognize the most outstanding individual performances on stage.'
        ],
      },
      {
        heading: 'Final Decision:',
      },
      {
        ul: [
          'The judges’ decision will be final and binding, so bring your A-game!'
        ],
      },
    ],
  },
  {
    id: 22,
    type: 'team',
    slug: 'ad-mockery',
    name: 'Ad Mockery',
    subtitle: 'Sell ANY Product, Your way!',
    badges: ['open'],
    allowedTeamSize: { min: 1, max: 6 },
    image: {
      src: '/images/contests/generic-poster.png',
    },
    deadline: getDateFromIST('2025-04-27', '23:59:00'),
    description: [
      {
        p: 'Get ready to unleash your creativity and charm the world with Ad Mockery! This competition invites you to sell a product in your own unique andaaz. Whether it\'s a real product or something straight from your imagination, it\'s your time to shine by presenting it in the most exaggerated, fun, and engaging way possible! Be it a skit, a parody, a voiceover, or animation - your ad should have personality, humor, and creativity.',
      },
      {
        heading: 'Online Event (Live on Unstop)',
      },{
        a: 'https://unstop.com/competitions/ad-mockery-25-national-institute-of-technology-nit-agartala-1438781?lb=BLQk5GKo&utm_medium=Share&utm_source=shortUrl'
      }
    ],

    instructions: [
      {
        heading: 'Rules',
      },
      {
        ul: [
          'Sign-Up: Be sure to register on Unstop for a chance to participate!',
          'Product: Sell any product, real or fictional, in your own unique way',
          'Video Length: The ad must be between 45 seconds and 2 minutes.',
          'Language: Any language works! Just don\'t forget to add subtitles if it\'s not in English or Hindi.',
          'Team Size: You can participate solo or in a team of up to 2 members.',
          'Original Content: No copying existing ads - make it original and fresh!',
          'Submission: Upload your video to Google Drive or Dropbox with proper permissions for viewing and share the link via Unstop.',
          'No misleading use of real company logos or names.',
          'Your content must be original - so let your creativity run wild!',
          'Ensure your video permissions are set to allow viewing.',
          
        ],
      },
      {
        heading: 'Judging Criteria',
      },
      {
        ul: [
          'Creativity in the script and presentation',
          'Acting & Content - Is your performance engaging?',
          'Editing Quality - A well-edited video always makes an impact!',
          'Respectful Content - Keep the content fun, respectful, and appropriate.',
        ],
      },
    ],
  },
]
