"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import AppointmentModal from "./appointment-modal"
import team from "@/assets/img/teamGorw.png"

export default function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const benefits = [
    "Implementación de KPIs estratégicos",
    "Análisis de datos para toma de decisiones",
    "Optimización de procesos empresariales",
    "Transformación digital integral",
  ]

  return (
    <section id="about" className="py-20 bg-[#030303] relative overflow-hidden">
      {/* Gradiente de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.03] via-transparent to-primary-700/[0.03]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-primary-300 font-medium mb-2 block"
            >
              Quiénes Somos
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              Impulsamos el crecimiento de tu empresa con estrategias basadas en datos
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/60 mb-8"
            >
              En InnoGrowth, nos especializamos en transformar empresas mediante la implementación de KPIs estratégicos
              y metodologías innovadoras. Nuestro enfoque se basa en el análisis de datos para identificar oportunidades
              de mejora y desarrollar soluciones personalizadas que impulsen el crecimiento sostenible.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-300 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-white/80">{benefit}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full transition-colors"
              >
                Agendar una cita
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={team}
                alt="Equipo de InnoGrowth"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-700/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>

        {/* Banner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#1a103d] rounded-xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                ¿Le gustaría cotizar una solución para su empresa?
              </h3>
              <p className="text-white/70 max-w-2xl">
                Nuestro equipo de expertos está listo para ayudarle a implementar soluciones estratégicas que impulsen
                el crecimiento de su negocio.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full transition-colors whitespace-nowrap"
              >
                Solicita tu cotización
              </button>
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-full transition-colors whitespace-nowrap"
              >
                Contáctanos
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
