import { Fragment, useCallback, useMemo } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react'
import closeIcon from '@iconify-icons/mdi/close'
import { useScrollbarWidth } from '~/hooks/common/useScrollbarWidth'
import { classNames } from '@arpansaha13/utils'

interface ModalProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
  onClose?: () => void
  maxWidth?: keyof typeof maxWidths
  className?: string
  closeButton?: boolean
  disableBackdropClick?: boolean
}

const maxWidths = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
} as const

const Modal = ({
  open,
  setOpen,
  children,
  onClose,
  maxWidth = 'lg',
  className,
  closeButton = true,
  disableBackdropClick = false,
}: ModalProps) => {
  const scrollbarWidth = useScrollbarWidth()

  const handleClose = useCallback(
    (bool: boolean) => {
      if (!bool && !disableBackdropClick) {
        setOpen(false)
        onClose?.()
      }
    },
    [onClose, setOpen, disableBackdropClick]
  )

  const closeModal = useCallback(() => {
    setOpen(false)
    onClose?.()
  }, [onClose, setOpen])

  const modalStyles = useMemo(
    () =>
      classNames(
        'relative w-full overflow-hidden rounded-xl bg-gray-900 text-left shadow-2xl transform transition-all',
        'border border-gray-800/50 backdrop-blur-sm',
        maxWidths[maxWidth],
        className
      ),
    [maxWidth, className]
  )

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog 
        as="div" 
        onClose={handleClose} 
        className="relative z-50"
        aria-labelledby={closeButton ? 'modal-title' : undefined}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Changed to lightest green with high transparency */}
          <div className="fixed inset-0 bg-green-50/30 transition-opacity backdrop-blur-sm" />
        </Transition.Child>

        <div 
          className="fixed inset-0 z-10 overflow-y-auto" 
          style={{ paddingRight: open ? scrollbarWidth.current : 0 }}
        >
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className={modalStyles}>
                <div className="relative p-6">
                  {closeButton && (
                    <button
                      type="button"
                      onClick={closeModal}
                      className={classNames(
                        'absolute top-4 right-4 p-1 rounded-full',
                        'text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500',
                        'transition-colors duration-200'
                      )}
                      aria-label="Close modal"
                    >
                      <Icon icon={closeIcon} className="w-6 h-6" />
                    </button>
                  )}
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal