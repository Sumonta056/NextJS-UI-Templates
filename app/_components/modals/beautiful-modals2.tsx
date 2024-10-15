'use client'

import { useState, useEffect, useCallback } from 'react'
import { XIcon } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)

  useEffect(() => {
    setIsModalOpen(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    setIsModalOpen(false)
    onClose()
  }, [onClose])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [handleClose])

  if (!isModalOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={handleClose}></div>
      <div className="relative w-full max-w-md mx-auto my-6 transition-all transform duration-300 ease-in-out">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-gray-600 float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:text-gray-900 transition-colors duration-200"
              onClick={handleClose}
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="relative p-6 flex-auto">{children}</div>
        </div>
      </div>
    </div>
  )
}