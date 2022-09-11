import { useContext } from 'react'
import { ToastContext, ToastContextProps } from '../providers/ToastProvider'

export const useToast = (): ToastContextProps => useContext(ToastContext)
