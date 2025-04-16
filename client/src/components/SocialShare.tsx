import { useCallback, useMemo, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Icon } from '@iconify/react'
import copyIcon from '@iconify-icons/mdi/content-copy'
import copiedIcon from '@iconify-icons/mdi/check-circle-outline'
import { classNames } from '@arpansaha13/utils'
import Modal from './common/Modal'

interface SocialShareProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  data: {
    url: string
    title: string
    text?: string
    quote?: string
  }
  children: React.ReactNode
  className?: string
}

export default function SocialShare({ 
  data, 
  children, 
  className, 
  ...attrs 
}: SocialShareProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const shareUrl = useMemo(() => {
    const path = data.url.startsWith('/') ? data.url : `/${data.url}`
    return `${window.location.origin}${path}`
  }, [data.url])

  const shareText = useMemo(() => {
    const text = data.text || ''
    return text.length <= 100 ? text : `${text.substring(0, 97)}...`
  }, [data.text])

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }, [shareUrl])

  const socialPlatforms = useMemo(() => [
    {
      name: 'WhatsApp',
      logo: '/logos/whatsapp.svg',
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(
        `${data.title}\n\n${shareUrl}\n\n${shareText}`
      )}`,
      color: 'hover:bg-green-600/20',
    },
    {
      name: 'Facebook',
      logo: '/logos/facebook.svg',
      href: `https://www.facebook.com/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(data.quote || shareText)}`,
      color: 'hover:bg-blue-600/20',
    },
    
  ], [data.title, data.quote, shareUrl, shareText])

  return (
    <>
      <button 
        type="button" 
        {...attrs} 
        onClick={() => setModalOpen(true)}
        className={classNames('focus:outline-none focus:ring-2 focus:ring-amber-500', className)}
      >
        {children}
      </button>

      <Modal 
        open={modalOpen} 
        setOpen={setModalOpen} 
        maxWidth="xs"
        className="bg-gray-900/95 backdrop-blur-sm"
      >
        <Dialog.Title className="mb-6 text-xl lg:text-2xl text-white font-bold tracking-tight">
          Share this content
        </Dialog.Title>

        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {socialPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className={classNames(
                  'group relative p-3 sm:p-4 flex items-center justify-center',
                  'bg-gray-800/50 rounded-lg shadow-md',
                  'hover:scale-105 transform transition-all duration-200',
                  platform.color
                )}
                aria-label={`Share on ${platform.name}`}
              >
                <img 
                  src={platform.logo} 
                  alt={`${platform.name} logo`}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform group-hover:scale-110"
                />
                <span className="absolute -bottom-6 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  {platform.name}
                </span>
              </a>
            ))}

            <button
              type="button"
              disabled={copied}
              onClick={copyToClipboard}
              className={classNames(
                'group relative p-3 sm:p-4 flex items-center justify-center',
                'bg-gray-800/50 rounded-lg shadow-md',
                'hover:scale-105 transform transition-all duration-200',
                copied ? 'bg-green-500/20' : 'hover:bg-amber-500/20',
                copied && 'cursor-not-allowed'
              )}
              aria-label={copied ? 'Link copied' : 'Copy link'}
            >
              <Icon
                icon={copied ? copiedIcon : copyIcon}
                className={classNames(
                  'w-10 h-10 sm:w-12 sm:h-12',
                  copied ? 'text-green-400' : 'text-gray-200',
                  'transition-all duration-200 group-hover:scale-110'
                )}
              />
              <span className="absolute -bottom-6 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                {copied ? 'Copied!' : 'Copy'}
              </span>
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-sm text-gray-400 truncate" title={shareUrl}>
              {shareUrl}
            </p>
          </div>
        </div>
      </Modal>
    </>
  )
}