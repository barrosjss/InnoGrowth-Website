"use client"

import { useRef, useEffect } from "react"
import { Pacifico } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { LucideArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Registrar el plugin de ScrollTrigger para las animaciones de scroll.
gsap.registerPlugin(ScrollTrigger)

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

// Datos de ejemplo para los proyectos.
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

/**
 * Componente para una única tarjeta de proyecto.
 * Implementa dos animaciones: una para la entrada con scroll y otra para la interacción con el mouse (hover).
 */
function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null)
  // Ref para almacenar la timeline de la animación de hover. 
  // Se usa useRef para que la timeline persista entre renders sin tener que recrearla.
  const hoverTimeline = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animación de entrada (Scroll-triggered)
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: Math.random() * 0.3, // Un delay aleatorio para un efecto de aparición más orgánico.
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })

      // 2. Creación de la animación de Hover
      // Se crea una timeline PAUSADA. Se activará con los eventos del mouse.
      hoverTimeline.current = gsap.timeline({ paused: true })
        .to(cardRef.current?.querySelector(".project-title"), { y: -8, duration: 0.4 })
        .to(cardRef.current?.querySelector(".project-description"), { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")

    }, cardRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-xl group",
        project.size === "large" ? "row-span-2 col-span-2" : "",
        project.size === "medium" ? "col-span-2" : "",
      )}
      // Los eventos del mouse simplemente reproducen o revierten la timeline pre-construida.
      // Esto es mucho más performante que usar el estado de React para animaciones.
      onMouseEnter={() => hoverTimeline.current?.play()}
      onMouseLeave={() => hoverTimeline.current?.reverse()}
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
        <span className="text-xs font-medium uppercase tracking-wider text-primary-200 mb-2 inline-block">
          {project.category}
        </span>

        <div className="overflow-hidden">
          <h3
            className={cn(
              "font-bold text-white mb-2 project-title",
              project.size === "large" ? "text-2xl md:text-3xl" : "text-xl md:text-2xl",
            )}
          >
            {project.title}
          </h3>
        </div>

        {/* La descripción empieza con opacidad 0 y se anima con la timeline de hover */}
        <div className="text-white/70 text-sm project-description opacity-0 transform translate-y-5">
          {project.description}
        </div>
      </div>
    </div>
  )
}

/**
 * Componente que renderiza la sección completa de "Proyectos".
 */
export default function ProjectsSection() {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animación para la cabecera de la sección.
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
      tl.from(".portfolio-title-tag", { opacity: 0, y: 30, duration: 0.8 })
        .from(".portfolio-title", { opacity: 0, y: 30, duration: 0.8 }, "-=0.6")
        .from(".portfolio-subtitle", { opacity: 0, y: 30, duration: 0.8 }, "-=0.6")
    }, headerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="relative w-full py-24 md:py-32 overflow-hidden bg-[#030303]" id="projects">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700/[0.03] via-transparent to-primary-500/[0.03] blur-3xl" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20" ref={headerRef}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4 portfolio-title-tag">
            <span className="text-sm text-white/60 tracking-wide">Portafolio</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight portfolio-title">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">Casos de</span>
            <span
              className={cn(
                "ml-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 via-white/90 to-primary-500",
                pacifico.className,
              )}
            >
              Éxito
            </span>
          </h2>

          <p className="text-white/40 max-w-2xl mx-auto portfolio-subtitle">
            Descubre algunos de nuestros proyectos más destacados y cómo hemos ayudado a empresas de diversos sectores a
            transformar digitalmente sus operaciones.
          </p>
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
