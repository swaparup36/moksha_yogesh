import { memo, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useLoaderData } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import shareIcon from '@iconify-icons/mdi/share'
import rightIcon from '@iconify-icons/mdi/chevron-right'

import SocialShare from '~/components/SocialShare'
import Sheet from '~common/Sheet'
import Container from '~common/Container'
import MLink from '~common/Links/MLink'
import DLink from '~common/Links/DLink'
import Picture from '~/components/pictures/Picture'
import { getEvents } from '~loaders/events.loader'
import type { Event } from '~/types'

interface LoaderData {
  mokshaEventsList: readonly Event[]
  udaanEventsList: readonly Event[]
}

export const loader = getEvents

export function Component() {
  const { mokshaEventsList, udaanEventsList } = useLoaderData() as LoaderData

  return (
    <>
      <Helmet>
        <title>Moksha | Events</title>
      </Helmet>

      <Container>
        <h1 className='sr-only'>Events</h1>
        <MokshaEvents mokshaEventsList={mokshaEventsList} className='mb-12' />
        <UdaanEvents udaanEventsList={udaanEventsList} />
      </Container>
    </>
  )
}

Component.displayName = 'Events'

interface MokshaEventsProps {
  mokshaEventsList: readonly Event[]
  className?: string
}

const MokshaEvents = memo(({ mokshaEventsList, className }: MokshaEventsProps) => (
  <section id='moksha-events' className={className}>
    <h2 className='text-4xl text-center font-bold border-b-2 pt-3 pb-3 m-4 border-green-500'>Moksha</h2>
    <div className='h-scroll sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
      {mokshaEventsList.map(event => (
        <div key={event.id} className='min-w-[16rem]'>
          <EventCard event={event} />
        </div>
      ))}
    </div>
  </section>
))

interface UdaanEventsProps {
  udaanEventsList: readonly Event[]
  className?: string
}

const UdaanEvents = memo(({ udaanEventsList, className }: UdaanEventsProps) => (
  <section className={className} id='udaan-events'>
    <h2 className='text-4xl text-center font-bold border-b-2 pb-3 m-4 border-green-500'>Udaan</h2>
    <div className='h-scroll sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
      {udaanEventsList.map(event => (
        <div key={event.id} className='min-w-[16rem]'>
          <EventCard event={event} />
        </div>
      ))}
    </div>
  </section>
))

interface EventCardProps {
  readonly event: Event
}

const EventCard = memo(
  ({ event }: EventCardProps) => {
    const [isHovered, setIsHovered] = useState(false)
    
    console.log(event);
    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          perspective: 1000,
          width: '100%',
          height: '420px',
          position: 'relative',
        }}
      >
        <motion.div
          animate={{ rotateY: isHovered ? 180 : 0 }}
          transition={{ duration: 0.7 }}
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Front */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              borderRadius: '1rem',
              overflow: 'hidden',
            }}
          >
            <Sheet className='w-full h-full flex flex-col bg-black/50 backdrop-blur-md text-sm shadow-lg ring-1 ring-emerald-700/40'>
              <MLink to={`/events/${event.club}/${event.slug}`} as='div' className='relative block h-1/2 z-10'>
                <div className='w-full h-full flex items-center justify-center'>
                  <Picture picture={event.image} alt={`moksha-event-${event.slug}-poster`} />
                </div>
                <div className='w-full px-4 pt-4'>
                  <h3 className='text-lg text-emerald-300 font-semibold drop-shadow-sm line-clamp-1'>
                    <DLink to={`/events/${event.club}/${event.slug}`} className='lg:hover:underline'>
                      {event.name}
                    </DLink>
                  </h3>
                  <p className='text-sm text-gray-300/90'>{event.subtitle}</p>
                </div>
              </MLink>

            </Sheet>
          </div>

          {/* Back */}
          <div
            className='flex-col overflow-y-scroll'
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '1rem',
              backgroundColor: 'black',
              color: 'white',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden',
            }}
          >
            <p className='text-sm leading-relaxed'>{(event.description[0] as any).p ?? 'More details coming soon.'}</p>

            <div className='flex justify-items-end mt-20'>
            <SocialShare
              data={{
                url: `/events/${event.club}/${event.slug}`,
                title: `Moksha event - ${event.name}`,
                text: (event.description[0] as any).p ?? '',
              }}
              className='text-emerald-400 hover:text-emerald-300'
            >
              <div className='w-6 h-6 transition-colors'>
                <Icon icon={shareIcon} className='block' />
              </div>
              <span className='sr-only'>Share</span>
            </SocialShare>

            <div className='px-4 pt-2 pb-4 mt-auto flex items-center justify-end lg:justify-between'>
                <Link
                  to={`/events/${event.club}/${event.slug}`}
                  className='hidden lg:block font-medium text-emerald-400 hover:text-emerald-300 transition-colors'
                >
                  <span>View event</span>
                  <Icon icon={rightIcon} className='inline-block w-5 h-5 ml-1' />
                </Link>
            </div>
            
            </div>
            
          </div>
        </motion.div>
      </div>
    )
  },
  (prev, next) => prev.event.id === next.event.id
)

export default EventCard
