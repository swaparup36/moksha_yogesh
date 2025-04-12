import { memo } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useLoaderData } from 'react-router-dom'
import { capitalCase } from 'change-case'
import { Icon } from '@iconify/react'
import shareIcon from '@iconify-icons/mdi/share'
import rightIcon from '@iconify-icons/mdi/chevron-right'
import { classNames } from '@arpansaha13/utils'
import Sheet from '~common/Sheet'
import MLink from '~common/Links/MLink'
import DLink from '~common/Links/DLink'
import Container from '~common/Container'
import SocialShare from '~/components/SocialShare'
import Picture from '~/components/pictures/Picture'
import ContestTypeBadge from '~/components/Contests/ContestTypeBadge'
import { getContests } from '~loaders/contests.loader'
import { clubNames } from '~/data/clubs'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const loader = getContests

export function Component() {
  const { mokshaContestsMap, udaanContestsList } = useLoaderData()

  return (
    <>
      <Helmet>
        <title>Moksha | Contests</title>
      </Helmet>

      <Container className='mb-12 grid grid-cols-1 sm:grid-cols-2' id='contests-hero-section'>
        <div className='markdown'>
          <h1>Contests</h1>

          <p>
            Unleash your brilliance: engage, excel, and elevate in the ultimate arena of creativity! Welcome to NIT
            Agartala Moksha contests - where talents collide and legends emerge. Explore, participate, and ignite your
            competitive spirit!
          </p>
        </div>
      </Container>

      <MokshaContests mokshaContestsMap={mokshaContestsMap} className='mb-12 space-y-12' />
      <UdaanContests udaanContestsList={udaanContestsList} className='space-y-6' />
    </>
  )
}

Component.displayName = 'Contests'

const UdaanContests = memo(
  ({ udaanContestsList, className }) => (
    <Container className={className}>
      <h2 className='text-4xl text-center font-bold border-b-2 border-green-500'>Udaan</h2>

      <div className='h-scroll lg:pb-0 lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {udaanContestsList.map(contest => (
          <div key={contest.id} className='mx-auto min-w-[16rem] w-64 lg:w-auto'>
            <ContestCard clubSlug={contest.club} contest={contest} />
          </div>
        ))}
      </div>
    </Container>
  ),
  () => true
)

const MokshaContests = memo(
  ({ className, mokshaContestsMap }) => (
    <Container className={className}>
      <h2 className='text-4xl text-center  font-bold border-b-2 border-green-500'>Moksha</h2>

      {Object.keys(mokshaContestsMap).map(clubSlug => (
        <ClubContests key={clubSlug} clubSlug={clubSlug} contests={mokshaContestsMap[clubSlug]} />
      ))}
    </Container>
  ),
  () => true
)

/** Display contests of a particular club */
const ClubContests = memo(
  ({ clubSlug, contests }) => (
    <section className='flex-grow w-full' id={`${clubSlug}-contests`}>
      <h3 className='mb-4 text-4xl font-bold'>{clubNames[clubSlug] ?? capitalCase(clubSlug)}</h3>

      <div className='h-scroll lg:pb-0 lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {contests.map(contest => (
          <div key={contest.id} className='min-w-[16rem]'>
            <ContestCard clubSlug={clubSlug} contest={contest} />
          </div>
        ))}
      </div>
    </section>
  ),
  (prev, next) => prev.clubSlug === next.clubSlug
)



const ContestCard = memo(
  ({ clubSlug, contest }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [onClick, setOnClick] = useState(false)

    return (
      <Sheet className="relative w-full h-[304px] [perspective:1000px]">
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={() => setOnClick(!onClick)}
          
          className="relative w-full h-full"
        >
          <motion.div
            animate={{ rotateY: isHovered || onClick ? 180 : 0 }}
            transition={{ duration: .7 }}
            className="w-full h-full relative"
            style={{
              transformStyle: 'preserve-3d',
              position: 'relative',
            }}
          >
            {/* FRONT */}
            <div
              className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-black/60 text-sm z-10 pt-3 px-2"
              style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}
            >
              <div className="w-full h-48 flex items-center justify-center relative">
                <Picture picture={contest.image} alt={`moksha-contest-${contest.slug}-poster`} />

                <span
                  role="presentation"
                  className="absolute w-full h-full bg-gradient-to-bl from-brown via-transparent mix-blend-darken rounded-full"
                  aria-hidden={true}
                />

                <div className="absolute top-3 right-3 z-20 flex gap-2">
                  {contest.badges.map(badge => (
                    <ContestTypeBadge key={badge} small badge={badge} />
                  ))}
                </div>
              </div>

              <div className="w-full px-4 pt-4">
                <h4 className="text-lg text-green-500 font-semibold line-clamp-1">
                  <DLink to={`/contests/${clubSlug}/${contest.slug}`} className="lg:hover:underline">
                    {contest.name}
                  </DLink>
                </h4>

                {contest.subtitle && <p className="text-sm text-gray-400">{contest.subtitle}</p>}
              </div>
            </div>

            {/* BACK */}
            <div
              className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-black/65 text-sm p-4 flex flex-col justify-between z-10"
              style={{
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            >
              <div className="space-y-2">
                <h4 className="text-lg text-green-500 font-semibold">{contest.name}</h4>
                <p className="text-sm text-gray-300 line-clamp-5">{contest.description[0].p}</p>
              </div>

              <div className="flex justify-between items-center pt-4">
                <Link
                  to={`/contests/${clubSlug}/${contest.slug}`}
                  className="font-medium text-green-500 hover:text-green-400 transition-colors"
                >
                  View contest
                  <Icon icon={rightIcon} className="inline-block ml-1" color="inherit" width="1em" height="1em" />
                </Link>

                <SocialShare
                  data={{
                    url: `/contests/${clubSlug}/${contest.slug}`,
                    title: `Moksha contest - ${contest.name}`,
                    text: contest.description[0].p,
                  }}
                  className="text-green-500 hover:text-green-400"
                >
                  <Icon icon={shareIcon} className="w-6 h-6" color="inherit" aria-hidden />
                  <span className="sr-only">Share</span>
                </SocialShare>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Sheet>
    )
  },
  (prev, next) => prev.contest.id === next.contest.id
)
