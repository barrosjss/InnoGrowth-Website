"use client"

export default function BlogCTA() {
  return (
    <div className="w-full bg-[#0f0f0f] rounded-xl p-8 my-12">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas ayuda con tu transformación digital?</h3>
        <p className="text-white/70 mb-6">
          Nuestro equipo de expertos puede ayudarte a implementar las métricas adecuadas y desarrollar una estrategia
          digital efectiva para tu negocio.
        </p>
        <button
          onClick={() => {
            if (typeof window !== "undefined" && window.openAppointmentModal) {
              window.openAppointmentModal()
            }
          }}
          className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors"
        >
          Agendar una consultoría
        </button>
      </div>
    </div>
  )
}
