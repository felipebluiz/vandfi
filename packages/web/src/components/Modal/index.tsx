import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle
} from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Heading } from '@/components/Heading'
import { IconButton } from '@/components/IconButton'

import { StyledModal } from './styles'
import { Button } from '../Button'

export interface ModalHandle {
  closeModal: () => void
}

type ModalProps = React.ComponentProps<typeof StyledModal> & {
  modalIsOpen: boolean
  width?: string
  overlay?: boolean
  position?: string
  full?: boolean
  firefoxAgent?: boolean
  setModalIsOpen: (value: boolean) => void
  hideHeader?: boolean
  hideActions?: boolean
  title?: string
  children: React.ReactNode
  cancelButtonText?: string
  submitButtonText?: string
  submitButtonAction?: () => void
}
export const Modal = forwardRef<ModalHandle, ModalProps>(
  (
    {
      modalIsOpen,
      width,
      firefoxAgent = navigator.userAgent.indexOf('Firefox') !== -1,
      setModalIsOpen,
      hideHeader = false,
      hideActions = false,
      title,
      children,
      cancelButtonText = 'Cancel',
      submitButtonText = 'Continue',
      submitButtonAction,
      ...props
    },
    ref
  ) => {
    const [opened, setOpened] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)

    const closeModal = () => {
      setOpened(false)
      setTimeout(() => {
        setModalIsOpen(false)

        document.documentElement.style.overflowY = 'scroll'
        document.body.style.removeProperty('overflow-y')

        if (navigator.userAgent.indexOf('Firefox') === -1) {
          document.documentElement.style.paddingRight = '0'
        }
      }, 200)
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node

      if (modalRef.current && !modalRef.current?.contains(target)) {
        closeModal()
      }
    }

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    })

    useEffect(() => {
      if (modalIsOpen) {
        setOpened(true)

        document.documentElement.style.overflowY = 'hidden'
        document.body.style.overflowY = 'hidden'

        if (navigator.userAgent.indexOf('Firefox') === -1) {
          document.documentElement.style.paddingRight = '15px'
        }
      }
    }, [modalIsOpen])

    useImperativeHandle(ref, () => ({
      closeModal() {
        closeModal()
      }
    }))

    return (
      <StyledModal
        opened={opened}
        firefoxAgent={firefoxAgent}
        hideHeader={hideHeader}
        hideActions={hideActions}
        {...props}
        css={{
          '@bp3': {
            '.modal-container': {
              maxWidth: `${width}px`
            }
          }
        }}
      >
        <div ref={modalRef} className="modal-container">
          {!hideHeader && (
            <header>
              <Heading>{title}</Heading>
              <IconButton
                icon={faTimes}
                variant="secundary"
                size="md"
                onClick={closeModal}
              />
            </header>
          )}
          <div className="content-container">{children}</div>
          {!hideActions && (
            <div className="actions-container">
              <Button variant="tertiary" size="lg" onClick={closeModal}>
                {cancelButtonText}
              </Button>
              <Button variant="primary" size="lg" onClick={submitButtonAction}>
                {submitButtonText}
              </Button>
            </div>
          )}
        </div>
      </StyledModal>
    )
  }
)
