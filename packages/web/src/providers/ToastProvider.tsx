import React, { createContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { Toast } from '@/components/Toast'

export interface ToastContextProps {
  success: (message: string) => void
  error: (message: string) => void
  warn: (message: string) => void
}

interface ToastProviderProps {
  children: React.ReactNode
}

interface ToastProps {
  id?: string
  type: string
  message: string
}

export const ToastContext = createContext<ToastContextProps>(
  {} as ToastContextProps
)

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([])
  const success = (message: string) => showToast('success', message)
  const error = (message: string) => showToast('error', message)
  const warn = (message: string) => showToast('warning', message)

  const showToast = (type: string, message: string) => {
    setToasts(prevState => [...prevState, { id: uuid(), type, message }])
  }

  const closeToast = (id: string | undefined) => {
    setToasts(prevState => prevState.filter(toast => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ success, error, warn }}>
      {children}
      <div className="toast-wrapper">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            type={toast.type}
            message={toast.message}
            close={() => closeToast(toast?.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}
