"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { LucideArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  size: "large" | "medium" | "small"
}

const projects: Project[] = [
  {
    id: "petluv-app",
    title: "PetLuv App",
    description: "Aplicación móvil para cuidado de mascotas con sistema de recordatorios y seguimiento de salud.",
    image: "/placeholder.svg?height=600&width=600",
    category: "MOBILE APP",
    size: "large",
  },
  {
    id: "greenserve",
    title: "GreenServe",
    description: "Plataforma web para gestión de servicios ecológicos y sostenibles para empresas.",
    image: "/placeholder.svg?height=400&width=400",
    category: "WEB PLATFORM",
    size: "medium",
  },
  {
    id: "research-bug-database",
    title: "Research & Bug Database",
    description: "Sistema centralizado para seguimiento y gestión de incidencias en desarrollo de software.",
    image: "/placeholder.svg?height=300&width=600",
    category: "DASHBOARD",
    size: "medium",
  },
  {
    id: "cycle-rental-app",
    title: "Cycle Rental App",
    description: "Aplicación para alquiler de bicicletas con sistema de pago integrado y localización GPS.",
    image: "/placeholder.svg?height=400&width=400",
    category: "MOBILE APP",
    size: "small",
  },
  {
    id: "architectural-visualization",
    title: "Architectural Visualization",
    description: "Visualización 3D de proyectos arquitectónicos con realidad aumentada para clientes.",
    image: "/placeholder.svg?height=400&width=400",
    category: "3D VISUALIZATION",
    size: "small",
  },
  {
    id: "neural-network-visualization",
    title: "Neural Network Visualization",
    description: "Herramienta interactiva para visualizar y comprender el funcionamiento de redes neuronales.",
    image: "/placeholder.svg?height=400&width=400",
    category: "DATA VISUALIZATION",
    size: "small",
  },
]

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: Math.random() * 0.3 }}
      viewport={{ once: true }}
      className={cn(
        "relative overflow-hidden rounded-xl group",
        project.size === "large" ? "row-span-2 col-span-2" : "",
        project.size === "medium" ? "col-span-2" : "",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-700/20 z-10" />

      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20" />

      <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
        <div className="overflow-hidden">
          <motion.span
            initial={{ opacity: 0.7, y: 0 }}
            animate={{ opacity: isHovered ? 0.9 : 0.7, y: 0 }}
            className="text-xs font-medium uppercase tracking-wider text-primary-200 mb-2 inline-block"
          >
            {project.category}
          </motion.span>
        </div>

        <div className="overflow-hidden">
          <motion.h3
            initial={{ y: 0 }}
            animate={{ y: isHovered ? -8 : 0 }}
            transition={{ duration: 0.4 }}
            className={cn(
              "font-bold text-white mb-2",
              project.size === "large" ? "text-2xl md:text-3xl" : "text-xl md:text-2xl",
            )}
          >
            {project.title}
          </motion.h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-white/70 text-sm"
        >
          {project.description}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  return (
    <div className="relative w-full py-24 md:py-32 overflow-hidden bg-[#030303]" id="projects">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700/[0.03] via-transparent to-primary-500/[0.03] blur-3xl" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4"
          >
            <span className="text-sm text-white/60 tracking-wide">Portafolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">Casos de</span>
            <span
              className={cn(
                "ml-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 via-white/90 to-primary-500",
                pacifico.className,
              )}
            >
              Éxito
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-2xl mx-auto"
          >
            Descubre algunos de nuestros proyectos más destacados y cómo hemos ayudado a empresas de diversos sectores a
            transformar digitalmente sus operaciones.
          </motion.p>
        </div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] text-white font-medium transition-all duration-300"
          >
            Ver todos los proyectos
            <LucideArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
