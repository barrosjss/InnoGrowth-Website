"use client"

import { ArrowRight } from "lucide-react"

export default function ProjectCTA() {
  return (
    <div className="w-full bg-[#1a103a] rounded-xl p-8 my-12">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-4">¿Cómo podemos ayudarte?</h3>
        <p className="text-white/70 mb-6">
          ¿Tienes un proyecto similar en mente? Nuestro equipo puede ayudarte a convertir tu visión en realidad con
          soluciones tecnológicas innovadoras.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => {
              if (typeof window !== "undefined" && window.openAppointmentModal) {
                window.openAppointmentModal()
              }
            }}
            className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors"
          >
            Contactar ahora
          </button>
          <a
            href="/projects"
            className="px-6 py-3 border border-white/20 hover:bg-white/5 text-white rounded-full transition-colors inline-flex items-center gap-2"
          >
            Ver más proyectos <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
