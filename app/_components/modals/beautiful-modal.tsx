'use client'

import { useState, useEffect, useCallback } from 'react'
import { XIcon, SendIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
}

export default function Modal({ isOpen, onClose, title }: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)
  const [inputValue, setInputValue] = useState('')
  const [submitted, setSubmitted] = useState(false)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setSubmitted(true)
    }
  }

  if (!isModalOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="fixed inset-0 bg-purple-900 bg-opacity-50 backdrop-blur-sm" onClick={handleClose}></div>
      <div className="relative w-full max-w-md mx-auto my-6 transition-all transform duration-300 ease-in-out scale-100 opacity-100">
        <div className="relative flex flex-col w-full bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg shadow-2xl outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:text-gray-300 transition-colors duration-200"
              onClick={handleClose}
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="userInput" className="text-white text-sm font-medium">
                    Enter your message:
                  </label>
                  <Input
                    id="userInput"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full px-3 py-2 bg-white bg-opacity-20 text-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                    placeholder="Type your message here..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:scale-105"
                >
                  <SendIcon className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            ) : (
              <div className="text-center">
                <p className="text-white text-lg mb-4">Thank you for your message!</p>
                <p className="text-gray-200">You submitted: {inputValue}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}