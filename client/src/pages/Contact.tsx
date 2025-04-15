import Sheet from '../components/common/Sheet'
import Container from '../components/common/Container'
import { Icon } from '@iconify/react'
import gmailIcon from '@iconify-icons/mdi/gmail'
import whatsappIcon from '@iconify-icons/mdi/whatsapp'
import contacts, { type Contact } from '../data/contact'

export function Component() {
  return (
    <Container as='main'>
      <section id='moksha-2024-general-secretaries'>
        <h1 className='pt-6 pb-12 text-4xl text-center font-bold text-gray-50'>Contact us</h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {contacts.map(data => (
            <Card key={data.email} data={data} />
          ))}
        </div>
      </section>

      <div className='max-w-lg mx-auto mt-12 text-center text-gray-300'>
        <p className='wrap-balance'>
          If you face any issues with the website then please write an email to{' '}
          <a
            href='mailto:moksha.nita.web@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='font-medium text-emerald-600 hover:text-emerald-500'
          >
            moksha.nita.web@gmail.com
          </a>
        </p>
      </div>
    </Container>
  )
}

Component.displayName = 'Contact'

const Card = ({ data }: { data: Contact }) => (
  <Sheet className='w-full px-8 py-2 group relative flex flex-col bg-emerald-900/30 backdrop-blur-md text-sm overflow-hidden rounded-2xl shadow-lg ring-1 ring-emerald-700/40 transition-all duration-300 hover:scale-[1.015] hover:shadow-emerald-800/50 hover:ring-emerald-400/60'>
    <p className='text-xl text-emerald-300 font-semibold drop-shadow-sm'>{data.name}</p>
    <p className='text-sm 2xs:text-sm text-gray-400 uppercase'>{data.designation}</p>

    <div className='mt-4 flex items-center'>
      <div className='flex-shrink-0 mr-5 w-5 h-5 2xs:w-6 2xs:h-6 text-green-500'>
        <Icon icon={whatsappIcon} className='block' color='inherit' width='150%' height='150%' />
      </div>
      <p className='text-lg 2xs:text-base text-gray-200'>{data.whatsApp}</p>
    </div>

    <div className='mt-2 flex h-20 items-center text-blue-500'>
      <div className='flex-shrink-0 mr-5 w-5 h-5 2xs:w-6 2xs:h-6'>
        <Icon icon={gmailIcon} className='block' color='inherit' width='150%' height='150%' />
      </div>
      <div className='text-gray-200'>
        <p className='inline-block text-lg 2xs:text-base'>{data.email.split('@')[0]}</p>
        <p className='inline-block text-sm 2xs:text-sm text-gray-400'>@{data.email.split('@')[1]}</p>
      </div>
    </div>
  </Sheet>
)
