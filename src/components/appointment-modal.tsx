"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface AppointmentModalProps {
  isOpen?: boolean
  onClose?: () => void
}

export default function AppointmentModal({ isOpen: externalIsOpen, onClose }: AppointmentModalProps) {
  const [isOpen, setIsOpen] = useState(externalIsOpen || false)
  const [isMounted, setIsMounted] = useState(false)

  // Sincronizar con props externas si se proporcionan
  useEffect(() => {
    if (externalIsOpen !== undefined) {
      setIsOpen(externalIsOpen)
    }
  }, [externalIsOpen])

  useEffect(() => {
    setIsMounted(true)

    // Definir la función global para abrir el modal
    const openAppointmentModal = () => {
      setIsOpen(true)
    }

    // Asignar la función al objeto window
    window.openAppointmentModal = openAppointmentModal

    // Escuchar el evento personalizado para abrir el modal
    const handleOpenModal = () => {
      setIsOpen(true)
    }

    window.addEventListener("openAppointmentModal", handleOpenModal)

    return () => {
      window.removeEventListener("openAppointmentModal", handleOpenModal)
      // Limpiar la función global
      if (window.openAppointmentModal === openAppointmentModal) {
        delete window.openAppointmentModal
      }
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
    if (onClose) onClose()
  }

  if (!isMounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999]"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-[50%] top-[50%] transform !-translate-x-1/2 !-translate-y-1/2 w-[95%] max-w-4xl max-h-[90vh] overflow-auto bg-[#030303] border border-white/10 rounded-xl shadow-2xl z-[10000]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">Agendar una cita</h2>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1xivwPi01HfvjXWic-Ki2Pbk4b2YLpJ_Sy5t5u7TP1PF5L-Ig46ey7c87KpOvUhQM9IzqBN9-D?gv=true"
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
