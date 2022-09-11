import React, { useRef, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Modal, ModalHandle } from '@/components/Modal'
import { Text } from '@/components/Text'
import { useToast } from '@/hooks/useToast'

import { Container } from './styles'

interface ReportModalProps {
  subtitle: string
  reportModalIsOpen: boolean
  setReportModalIsOpen: (value: boolean) => void
}

interface FormValues {
  message: string
}

export const ReportModal: React.FC<ReportModalProps> = ({
  subtitle,
  reportModalIsOpen,
  setReportModalIsOpen
}) => {
  const modalRef = useRef<ModalHandle>(null)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()
  const [formLoading, setFormLoading] = useState(false)
  const toast = useToast()

  const onSubmit: SubmitHandler<FormValues> = data => {
    setFormLoading(true)

    setTimeout(() => {
      console.log(data)

      setFormLoading(false)
      modalRef.current?.closeModal()
      toast.success('Your report has been sent')
    }, 5000)
  }

  return (
    <Modal
      ref={modalRef}
      modalIsOpen={reportModalIsOpen}
      setModalIsOpen={setReportModalIsOpen}
      width="420"
      title="Report"
      submitButtonText="Report"
      submitLoading={formLoading}
      submitButtonAction={handleSubmit(onSubmit)}
    >
      <Container>
        <Text size="md">{subtitle}</Text>
        <form>
          <div className="input">
            <textarea
              {...register('message', {
                required: 'This field is required'
              })}
              name="message"
              placeholder="Describe here..."
            />
            {errors.message && (
              <Text size="xs" className="error-message">
                {errors?.message.message}
              </Text>
            )}
          </div>
        </form>
      </Container>
    </Modal>
  )
}
