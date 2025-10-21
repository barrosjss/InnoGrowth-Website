import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ProjectCTA from "@/components/project-cta"
import { getProjectById, getAllProjectIds } from "@/lib/projects"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const projectIds = await getAllProjectIds()
  return projectIds.map((id) => ({
    slug: id,
  }))
}

export default async function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = await getProjectById(params.slug)

  if (!project) {
    notFound()
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Cliente</h3>
              <p className="text-white/60">{project.client}</p>
            </div>
            {project.year && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Año</h3>
                <p className="text-white/60">{project.year}</p>
              </div>
            )}
            {project.location && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Ubicación</h3>
                <p className="text-white/60">{project.location}</p>
              </div>
            )}
            {project.developmentTime && (
            <div>
                <h3 className="text-lg font-semibold text-white mb-2">Duración</h3>
                <p className="text-white/60">{project.developmentTime}</p>
            </div>
            )}
          </div>

          <div className="mb-12">
            {project.context && (
              <>
                <h2 className="text-2xl font-bold text-white mb-4">🏛️ Contexto del Cliente</h2>
                <p className="text-white/60 mb-8">{project.context}</p>
              </>
            )}

            {project.objective && (
              <>
                <h2 className="text-2xl font-bold text-white mb-4">🎯 Objetivo General</h2>
                <p className="text-white/60 mb-8">{project.objective}</p>
              </>
            )}

            {project.challenge && (
              <>
              <h2 className="text-2xl font-bold text-white mb-4">El Desafío</h2>
              <p className="text-white/60 mb-8">{project.challenge}</p>
              </>
            )}

            {project.solution && (
              <>
                <h2 className="text-2xl font-bold text-white mb-4">Nuestra Solución</h2>
                <p className="text-white/60 mb-8">{project.solution}</p>
              </>
            )}

            {project.scope && (
              <>
                <h2 className="text-2xl font-bold text-white mb-4">⚙️ Alcance del Proyecto</h2>
                <div className="space-y-6 mb-8">
                  {project.scope.infrastructure && (
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">1. Infraestructura y Tecnología</h3>
                      <ul className="list-disc pl-5 text-white/60 space-y-2">
                        {project.scope.infrastructure.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.scope.automation && (
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">2. Automatización y CRM</h3>
                      <ul className="list-disc pl-5 text-white/60 space-y-2">
                        {project.scope.automation.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.scope.marketing && (
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">3. Marketing y Comunicación Digital</h3>
                      <ul className="list-disc pl-5 text-white/60 space-y-2">
                        {project.scope.marketing.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      {project.visualStyleImage && (
                        <div className="mt-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Estilo Visual Implementado</h4>
                          <div className="relative w-full overflow-hidden rounded-xl">
                            <Image 
                              src={project.visualStyleImage} 
                              alt="Estilo visual implementado" 
                              width={1200}
                              height={630}
                              className="w-full h-auto"
                              priority
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  {project.scope.consulting && (
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">4. Consultoría Estratégica y Coordinación</h3>
                      <ul className="list-disc pl-5 text-white/60 space-y-2">
                        {project.scope.consulting.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )}

            {project.team && (
              <>
                <h2 className="text-2xl font-bold text-white mb-4">👥 Roles Clave</h2>
                <div className="space-y-4 mb-8">
                  {project.team.generalManager && (
                    <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                      <p className="text-white/60">{project.team.generalManager}</p>
                    </div>
                  )}
                  {project.team.marketingDirector && (
                    <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                      <p className="text-white/60">{project.team.marketingDirector}</p>
                    </div>
                  )}
                  {project.team.techLead && (
                    <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                      <p className="text-white/60">{project.team.techLead}</p>
                    </div>
                  )}
                </div>
              </>
            )}

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

            {project.projectLinks && (
              <>
                <h2 className="text-2xl font-bold text-white mb-4">🔗 Proyectos Desarrollados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {project.projectLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary-300 transition-colors mb-2">
                        {link.name}
                      </h3>
                      <p className="text-white/60 text-sm mb-3">{link.description}</p>
                      <div className="flex items-center text-primary-300 text-sm">
                        <span>Visitar proyecto</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>

          <ProjectCTA />
        </div>
      </div>
    </div>
  )
}
