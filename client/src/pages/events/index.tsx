import { memo } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useLoaderData } from 'react-router-dom'
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

interface UdaanEventsProps {
  udaanEventsList: readonly Event[]
  className?: string
}

interface MokshaEventsProps {
  mokshaEventsList: readonly Event[]
  className?: string
}

interface EventCardProps {
  readonly event: Event
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

const UdaanEvents = memo(
  ({ udaanEventsList, className }: UdaanEventsProps) => (
    <section className={className} id='udaan-events'>
      <h2 className='mb-6 text-4xl text-center font-semibold border-b-2 border-transparent'>Udaan</h2>

      <div className='h-scroll sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {udaanEventsList.map(event => (
          <div key={event.id} className='min-w-[16rem]'>
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </section>
  ),
  () => true
)

const MokshaEvents = memo(
  ({ mokshaEventsList, className }: MokshaEventsProps) => (
    <section id='moksha-events' className={className}>
      <h2 className='mb-6 text-4xl text-center font-semibold border-b-2 border-transparent'>Moksha</h2>

      <div className='h-scroll sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {mokshaEventsList.map(event => (
          <div key={event.id} className='min-w-[16rem]'>
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </section>
  ),
  () => true
)

const EventCard = memo(
  ({ event }: EventCardProps) => (
    <Sheet className="w-full group relative flex flex-col bg-emerald-900/30 backdrop-blur-md text-sm overflow-hidden rounded-2xl shadow-lg ring-1 ring-emerald-700/40 transition-all duration-300 hover:scale-[1.015] hover:shadow-emerald-800/50 hover:ring-emerald-400/60">

      <MLink to={`/events/${event.club}/${event.slug}`} as="div" className="relative block h-[304px] z-10">
        <div className="w-full h-48 flex items-center justify-center relative">
          <Picture picture={event.image} alt={`moksha-event-${event.slug}-poster`} />
        </div>

        <div className="w-full px-4 pt-4">
          <h3 className="text-lg text-emerald-300 font-semibold drop-shadow-sm">
            <DLink
              to={`/events/${event.club}/${event.slug}`}
              className="lg:hover:underline line-clamp-1"
            >
              {event.name}
            </DLink>
          </h3>

          <p className="text-sm text-gray-300/90">{event.subtitle}</p>

          <div className="mt-2 text-sm text-gray-200 space-y-1 line-clamp-2">
            {event.description.map((para: any, i) => (
              <p key={i}>{para.p}</p>
            ))}
          </div>
        </div>
      </MLink>

      <div className="px-4 pt-2 pb-4 w-full flex items-center justify-end lg:justify-between z-10">
        <Link
          to={`/events/${event.club}/${event.slug}`}
          className="hidden lg:block font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <span>View event</span>
          <span className="inline-block w-5 h-5 ml-1">
            <Icon icon={rightIcon} className="inline-block" color="inherit" width="100%" height="100%" />
          </span>
        </Link>

        <SocialShare
          data={{
            url: `/events/${event.club}/${event.slug}`,
            title: `Moksha event - ${event.name}`,
            text: (event.description[0] as any).p,
          }}
          className="block text-emerald-400 hover:text-emerald-300"
        >
          <div className="w-6 h-6 transition-colors">
            <Icon icon={shareIcon} className="block" color="inherit" width="100%" height="100%" aria-hidden />
          </div>
          <span className="sr-only">Share</span>
        </SocialShare>
      </div>
    </Sheet>
  ),
  (prev, next) => prev.event.id === next.event.id
);

