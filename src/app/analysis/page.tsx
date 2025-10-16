"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { LucideCheckCircle, LucideArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

export default function AnalysisPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    size: "",
    email: "",
    phone: "",
    challenges: [],
    goals: [],
    currentSystems: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, category: "challenges" | "goals") => {
    const { value, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [category]: checked ? [...prev[category], value] : prev[category].filter((item: string) => item !== value),
    }))
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // En una aplicación real, aquí enviarías los datos al backend
    nextStep()
  }

  return (
    <div className="bg-[#030303] min-h-screen">
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.05] via-transparent to-primary-700/[0.05] blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4"
            >
              <span className="text-sm text-white/60 tracking-wide">Análisis de Estado Actual</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">Diagnóstico</span>
              <span
                className={cn(
                  "ml-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 via-white/90 to-primary-500",
                  pacifico.className,
                )}
              >
                Empresarial
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/40 mb-8"
            >
              Completa este formulario para recibir un análisis personalizado del estado actual de tu empresa y
              descubrir cómo podemos ayudarte a optimizar tus operaciones.
            </motion.p>

            <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-8 backdrop-blur-sm mb-8">
              <div className="flex justify-between items-center mb-8">
                {[1, 2, 3, 4].map((stepNumber) => (
                  <div key={stepNumber} className="flex flex-col items-center">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium mb-2",
                        step === stepNumber
                          ? "bg-primary-500 text-white"
                          : step > stepNumber
                            ? "bg-primary-500/20 text-primary-300"
                            : "bg-white/[0.03] text-white/40",
                      )}
                    >
                      {step > stepNumber ? <LucideCheckCircle className="w-5 h-5" /> : stepNumber}
                    </div>
                    <div
                      className={cn(
                        "text-xs",
                        step === stepNumber ? "text-white" : step > stepNumber ? "text-primary-300" : "text-white/40",
                      )}
                    >
                      {stepNumber === 1
                        ? "Información"
                        : stepNumber === 2
                          ? "Desafíos"
                          : stepNumber === 3
                            ? "Objetivos"
                            : "Resultado"}
                    </div>
                  </div>
                ))}
              </div>

              {step === 1 && (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  onSubmit={(e) => {
                    e.preventDefault()
                    nextStep()
                  }}
                >
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-white/60 mb-2">
                        Nombre de la empresa *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>

                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-white/60 mb-2">
                        Industria *
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                      >
                        <option value="" disabled>
                          Selecciona una industria
                        </option>
                        <option value="construccion">Construcción</option>
                        <option value="restaurantes">Restaurantes</option>
                        <option value="hoteleria">Hotelería y Turismo</option>
                        <option value="bpo">BPO</option>
                        <option value="retail">Tiendas de Productos</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="size" className="block text-sm font-medium text-white/60 mb-2">
                        Tamaño de la empresa *
                      </label>
                      <select
                        id="size"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                      >
                        <option value="" disabled>
                          Selecciona el tamaño
                        </option>
                        <option value="1-10">1-10 empleados</option>
                        <option value="11-50">11-50 empleados</option>
                        <option value="51-200">51-200 empleados</option>
                        <option value="201-500">201-500 empleados</option>
                        <option value="500+">Más de 500 empleados</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">
                        Email de contacto *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/60 mb-2">
                        Teléfono de contacto
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-3 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-medium transition-all duration-300 shadow-lg shadow-primary-500/25 flex items-center"
                      >
                        Siguiente
                        <LucideArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.form>
              )}

              {step === 2 && (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  onSubmit={(e) => {
                    e.preventDefault()
                    nextStep()
                  }}
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">
                        ¿Cuáles son los principales desafíos que enfrenta tu empresa?
                      </h3>
                      <p className="text-white/60 mb-6">Selecciona todas las opciones que apliquen</p>

                      <div className="space-y-4">
                        {[
                          {
                            id: "efficiency",
                            label: "Baja eficiencia operativa",
                            description: "Procesos lentos o ineficientes que afectan la productividad",
                          },
                          {
                            id: "costs",
                            label: "Altos costos operativos",
                            description: "Gastos excesivos en operaciones diarias",
                          },
                          {
                            id: "customer",
                            label: "Experiencia del cliente",
                            description: "Dificultades para ofrecer una experiencia óptima",
                          },
                          {
                            id: "data",
                            label: "Gestión de datos",
                            description: "Problemas para recopilar, analizar o utilizar datos",
                          },
                          {
                            id: "communication",
                            label: "Comunicación interna",
                            description: "Barreras en la comunicación entre equipos o departamentos",
                          },
                          {
                            id: "growth",
                            label: "Escalabilidad",
                            description: "Dificultades para crecer o expandirse",
                          },
                        ].map((challenge) => (
                          <div key={challenge.id} className="flex items-start">
                            <input
                              type="checkbox"
                              id={challenge.id}
                              name={challenge.id}
                              value={challenge.id}
                              onChange={(e) => handleCheckboxChange(e, "challenges")}
                              className="mt-1 w-4 h-4 text-primary-500 border-white/[0.08] rounded focus:ring-primary-500/50"
                            />
                            <label htmlFor={challenge.id} className="ml-3">
                              <div className="text-white font-medium">{challenge.label}</div>
                              <div className="text-white/60 text-sm">{challenge.description}</div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="currentSystems" className="block text-sm font-medium text-white/60 mb-2">
                        ¿Qué sistemas o herramientas utilizas actualmente?
                      </label>
                      <textarea
                        id="currentSystems"
                        name="currentSystems"
                        value={formData.currentSystems}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                        placeholder="Describe los sistemas o herramientas que utilizas actualmente..."
                      ></textarea>
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] text-white font-medium transition-all duration-300"
                      >
                        Anterior
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-3 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-medium transition-all duration-300 shadow-lg shadow-primary-500/25 flex items-center"
                      >
                        Siguiente
                        <LucideArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.form>
              )}

              {step === 3 && (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  onSubmit={handleSubmit}
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">¿Cuáles son tus objetivos principales?</h3>
                      <p className="text-white/60 mb-6">Selecciona todas las opciones que apliquen</p>

                      <div className="space-y-4">
                        {[
                          {
                            id: "reduce_costs",
                            label: "Reducir costos operativos",
                            description: "Optimizar gastos y mejorar la eficiencia financiera",
                          },
                          {
                            id: "improve_efficiency",
                            label: "Mejorar la eficiencia operativa",
                            description: "Optimizar procesos y flujos de trabajo",
                          },
                          {
                            id: "enhance_customer",
                            label: "Mejorar la experiencia del cliente",
                            description: "Ofrecer un mejor servicio y aumentar la satisfacción",
                          },
                          {
                            id: "data_driven",
                            label: "Toma de decisiones basada en datos",
                            description: "Implementar análisis de datos para decisiones estratégicas",
                          },
                          {
                            id: "scale",
                            label: "Escalar el negocio",
                            description: "Preparar la empresa para el crecimiento",
                          },
                          {
                            id: "digital_transformation",
                            label: "Transformación digital completa",
                            description: "Modernizar toda la infraestructura tecnológica",
                          },
                        ].map((goal) => (
                          <div key={goal.id} className="flex items-start">
                            <input
                              type="checkbox"
                              id={goal.id}
                              name={goal.id}
                              value={goal.id}
                              onChange={(e) => handleCheckboxChange(e, "goals")}
                              className="mt-1 w-4 h-4 text-primary-500 border-white/[0.08] rounded focus:ring-primary-500/50"
                            />
                            <label htmlFor={goal.id} className="ml-3">
                              <div className="text-white font-medium">{goal.label}</div>
                              <div className="text-white/60 text-sm">{goal.description}</div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] text-white font-medium transition-all duration-300"
                      >
                        Anterior
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-3 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-medium transition-all duration-300 shadow-lg shadow-primary-500/25 flex items-center"
                      >
                        Generar análisis
                        <LucideArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.form>
              )}

              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <LucideCheckCircle className="w-10 h-10 text-primary-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">¡Análisis completado!</h3>
                  <p className="text-white/60 mb-8">
                    Hemos recibido tu información y estamos preparando un análisis personalizado para tu empresa. Te
                    enviaremos los resultados a tu correo electrónico en las próximas 24 horas.
                  </p>
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 mb-8">
                    <h4 className="text-lg font-medium text-white mb-4">
                      Mientras tanto, ¿te gustaría agendar una consulta personalizada?
                    </h4>
                    <p className="text-white/60 mb-6">
                      Nuestros expertos pueden ofrecerte una sesión de 30 minutos para discutir tus desafíos específicos
                      y cómo podemos ayudarte.
                    </p>
                    <button className="px-6 py-3 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-medium transition-all duration-300 shadow-lg shadow-primary-500/25">
                      Agendar consulta gratuita
                    </button>
                  </div>
                  <a
                    href="/"
                    className="inline-flex items-center text-primary-300 hover:text-primary-400 transition-colors"
                  >
                    Volver a la página principal
                    <LucideArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
