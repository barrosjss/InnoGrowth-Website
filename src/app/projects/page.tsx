import Link from "next/link"
import Image from "next/image"
import { LucideArrowLeft } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  client: string
}

// En una aplicación real, estos datos vendrían de una API o CMS
const projects: Project[] = [
  {
    id: "petluv-app",
    title: "PetLuv App",
    description: "Aplicación móvil para cuidado de mascotas con sistema de recordatorios y seguimiento de salud.",
    image: "/placeholder.svg?height=600&width=600",
    category: "MOBILE APP",
    client: "PetLuv Inc.",
  },
  {
    id: "greenserve",
    title: "GreenServe",
    description: "Plataforma web para gestión de servicios ecológicos y sostenibles para empresas.",
    image: "/placeholder.svg?height=400&width=400",
    category: "WEB PLATFORM",
    client: "GreenTech Solutions",
  },
  {
    id: "research-bug-database",
    title: "Research & Bug Database",
    description: "Sistema centralizado para seguimiento y gestión de incidencias en desarrollo de software.",
    image: "/placeholder.svg?height=300&width=600",
    category: "DASHBOARD",
    client: "DevSecOps Inc.",
  },
  {
    id: "cycle-rental-app",
    title: "Cycle Rental App",
    description: "Aplicación para alquiler de bicicletas con sistema de pago integrado y localización GPS.",
    image: "/placeholder.svg?height=400&width=400",
    category: "MOBILE APP",
    client: "Urban Mobility",
  },
  {
    id: "architectural-visualization",
    title: "Architectural Visualization",
    description: "Visualización 3D de proyectos arquitectónicos con realidad aumentada para clientes.",
    image: "/placeholder.svg?height=400&width=400",
    category: "3D VISUALIZATION",
    client: "ArchModern Studios",
  },
  {
    id: "neural-network-visualization",
    title: "Neural Network Visualization",
    description: "Herramienta interactiva para visualizar y comprender el funcionamiento de redes neuronales.",
    image: "/placeholder.svg?height=400&width=400",
    category: "DATA VISUALIZATION",
    client: "AI Research Lab",
  },
]

export default function ProjectsPage() {
  return (
    <div className="bg-[#030303] min-h-screen">
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.05] via-transparent to-primary-700/[0.05] blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center text-white/60 hover:text-primary-300 transition-colors mb-8"
          >
            <LucideArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>

          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">Nuestros Proyectos</h1>
            <p className="text-xl text-white/60 mb-12">
              Descubre cómo hemos ayudado a empresas de diversos sectores a transformar digitalmente sus operaciones.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link key={project.id} href={`/projects/${project.id}`} className="group">
                  <div className="relative h-60 mb-4 overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-700/20 z-10" />
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="mb-2">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary-500/10 text-primary-300">
                      {project.category}
                    </span>
                    <span className="text-xs text-white/40 ml-2">Cliente: {project.client}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-white group-hover:text-primary-300 transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-white/40 line-clamp-2">{project.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
