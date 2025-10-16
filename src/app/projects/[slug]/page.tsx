import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ProjectCTA from "@/components/project-cta"

// En una aplicación real, estos datos vendrían de una API o CMS
const projects = {
  "petluv-app": {
    title: "PetLuv App",
    description:
      "Aplicación móvil para cuidado de mascotas con sistema de recordatorios y seguimiento de salud. Desarrollamos una solución integral que permite a los dueños de mascotas gestionar citas veterinarias, medicamentos, vacunas y actividades diarias.",
    image: "/placeholder.svg?height=600&width=1200",
    category: "MOBILE APP",
    client: "PetLuv Inc.",
    year: "2024",
    challenge:
      "PetLuv necesitaba una aplicación intuitiva que ayudara a los dueños de mascotas a mantener un seguimiento completo de la salud y cuidados de sus animales, con recordatorios personalizables y almacenamiento de registros médicos.",
    solution:
      "Desarrollamos una aplicación móvil multiplataforma con un sistema de recordatorios inteligentes, seguimiento de medicamentos, registro de vacunas, y almacenamiento de documentos médicos. La aplicación incluye integración con calendarios y notificaciones personalizables.",
    results: [
      "Incremento del 45% en adherencia a tratamientos veterinarios",
      "Reducción del 30% en citas perdidas",
      "Satisfacción del usuario de 4.8/5 en tiendas de aplicaciones",
      "Más de 50,000 descargas en los primeros 3 meses",
    ],
    technologies: ["React Native", "Firebase", "Node.js", "MongoDB", "AWS"],
  },
  greenserve: {
    title: "GreenServe",
    description:
      "Plataforma web para gestión de servicios ecológicos y sostenibles para empresas. Desarrollamos un sistema completo que permite a las empresas contratar, gestionar y evaluar servicios ecológicos de proveedores verificados.",
    image: "/placeholder.svg?height=600&width=1200",
    category: "WEB PLATFORM",
    client: "GreenTech Solutions",
    year: "2023",
    challenge:
      "GreenTech Solutions buscaba crear un marketplace que conectara empresas con proveedores de servicios ecológicos verificados, facilitando la transición hacia operaciones más sostenibles.",
    solution:
      "Implementamos una plataforma web con sistema de verificación de proveedores, marketplace de servicios ecológicos, sistema de evaluación y métricas de impacto ambiental para cada servicio contratado.",
    results: [
      "Más de 200 proveedores verificados en la plataforma",
      "Reducción promedio del 25% en huella de carbono para empresas cliente",
      "Incremento del 60% en contratación de servicios sostenibles",
      "Ahorro promedio del 15% en costos operativos para empresas",
    ],
    technologies: ["Next.js", "PostgreSQL", "Stripe", "Docker", "Google Cloud"],
  },
  // Otros proyectos...
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">Proyecto no encontrado</div>
  }

  return (
    <div className="bg-[#030303] min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <Link
          href="/projects"
          className="inline-flex items-center text-white/60 hover:text-primary-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a proyectos
        </Link>

        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary-500/10 text-primary-300 mb-4 inline-block">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">{project.title}</h1>
            <p className="text-xl text-white/60 mb-8">{project.description}</p>
          </div>

          <div className="relative h-[300px] md:h-[500px] mb-12 overflow-hidden rounded-xl">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Cliente</h3>
              <p className="text-white/60">{project.client}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Año</h3>
              <p className="text-white/60">{project.year}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Categoría</h3>
              <p className="text-white/60">{project.category}</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">El Desafío</h2>
            <p className="text-white/60 mb-8">{project.challenge}</p>

            <h2 className="text-2xl font-bold text-white mb-4">Nuestra Solución</h2>
            <p className="text-white/60 mb-8">{project.solution}</p>

            <h2 className="text-2xl font-bold text-white mb-4">Resultados</h2>
            <ul className="list-disc pl-5 text-white/60 mb-8 space-y-2">
              {project.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Tecnologías Utilizadas</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <ProjectCTA />
        </div>
      </div>
    </div>
  )
}
