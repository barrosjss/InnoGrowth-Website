import Link from "next/link"
import Image from "next/image"
import { LucideArrowLeft } from "lucide-react"
import { getAllProjects } from "@/lib/projects"

export default async function ProjectsPage() {
  const projects = await getAllProjects()
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
