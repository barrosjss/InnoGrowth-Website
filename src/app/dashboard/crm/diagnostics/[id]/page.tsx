"use client"

import { useState } from "react"
import Link from "next/link"
import {
  LucideArrowLeft,
  LucideBuilding,
  LucideUser,
  LucideMail,
  LucidePhone,
  LucideCalendar,
  LucideTag,
  LucideCheckCircle,
  LucideAlertCircle,
  LucideClock,
  LucideBarChart2,
  LucideTarget,
  LucideDownload,
  LucidePrinter,
  LucideShare2,
  LucideMessageSquare,
  LucideEdit,
  LucideUsers,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Mapeo de desafíos
const challengesMap: Record<string, { label: string; description: string }> = {
  efficiency: {
    label: "Baja eficiencia operativa",
    description: "Procesos lentos o ineficientes que afectan la productividad",
  },
  costs: {
    label: "Altos costos operativos",
    description: "Gastos excesivos en operaciones diarias",
  },
  customer: {
    label: "Experiencia del cliente",
    description: "Dificultades para ofrecer una experiencia óptima",
  },
  data: {
    label: "Gestión de datos",
    description: "Problemas para recopilar, analizar o utilizar datos",
  },
  communication: {
    label: "Comunicación interna",
    description: "Barreras en la comunicación entre equipos o departamentos",
  },
  growth: {
    label: "Escalabilidad",
    description: "Dificultades para crecer o expandirse",
  },
}

// Mapeo de objetivos
const goalsMap: Record<string, { label: string; description: string }> = {
  reduce_costs: {
    label: "Reducir costos operativos",
    description: "Optimizar gastos y mejorar la eficiencia financiera",
  },
  improve_efficiency: {
    label: "Mejorar la eficiencia operativa",
    description: "Optimizar procesos y flujos de trabajo",
  },
  enhance_customer: {
    label: "Mejorar la experiencia del cliente",
    description: "Ofrecer un mejor servicio y aumentar la satisfacción",
  },
  data_driven: {
    label: "Toma de decisiones basada en datos",
    description: "Implementar análisis de datos para decisiones estratégicas",
  },
  scale: {
    label: "Escalar el negocio",
    description: "Preparar la empresa para el crecimiento",
  },
  digital_transformation: {
    label: "Transformación digital completa",
    description: "Modernizar toda la infraestructura tecnológica",
  },
}

export default function DiagnosticDetail({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("summary")

  // En una aplicación real, aquí obtendrías los datos del diagnóstico desde una API
  const diagnostic = {
    id: params.id,
    companyName: "Restaurantes Gourmet S.A.",
    contactName: "Carlos Martínez",
    email: "carlos@restaurantesgourmet.com",
    phone: "+1 (555) 123-4567",
    industry: "Restaurantes",
    size: "11-50 empleados",
    date: "12 Abr 2025",
    status: "new",
    challenges: ["efficiency", "customer", "communication"],
    goals: ["reduce_costs", "improve_efficiency", "enhance_customer"],
    currentSystems:
      "Actualmente utilizamos un sistema de punto de venta básico y hojas de cálculo para la gestión de inventario. No tenemos un sistema centralizado para la gestión de personal ni para el seguimiento de métricas de satisfacción del cliente.",
    notes: [
      {
        id: "1",
        author: "María Rodríguez",
        date: "12 Abr 2025, 14:30",
        content:
          "Cliente interesado principalmente en mejorar la experiencia del cliente y optimizar la gestión de inventario. Mencionó problemas recurrentes con el desperdicio de alimentos.",
      },
      {
        id: "2",
        author: "Juan Pérez",
        date: "13 Abr 2025, 10:15",
        content:
          "Realizamos una evaluación inicial de sus sistemas actuales. Recomendaría implementar un sistema de gestión de inventario integrado con el POS y un módulo de análisis de datos para reducir el desperdicio y optimizar las compras.",
      },
    ],
    recommendations: [
      {
        title: "Sistema de gestión integrado",
        description: "Implementar un sistema que integre punto de venta, inventario, personal y análisis de datos.",
        impact: "alto",
        timeframe: "3-6 meses",
      },
      {
        title: "Programa de capacitación",
        description:
          "Desarrollar un programa de capacitación para el personal en el uso de nuevas tecnologías y mejores prácticas de servicio al cliente.",
        impact: "medio",
        timeframe: "1-2 meses",
      },
      {
        title: "Automatización de procesos",
        description: "Identificar y automatizar procesos manuales repetitivos para mejorar la eficiencia operativa.",
        impact: "alto",
        timeframe: "2-4 meses",
      },
    ],
    followUps: [
      {
        id: "1",
        type: "call",
        date: "15 Abr 2025, 10:00",
        status: "scheduled",
        assignedTo: "María Rodríguez",
        notes: "Presentación de propuesta inicial",
      },
    ],
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400">
            <LucideAlertCircle className="w-3 h-3" />
            Nuevo
          </span>
        )
      case "in_progress":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400">
            <LucideClock className="w-3 h-3" />
            En progreso
          </span>
        )
      case "completed":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
            <LucideCheckCircle className="w-3 h-3" />
            Completado
          </span>
        )
      case "follow_up":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400">
            <LucidePhone className="w-3 h-3" />
            Seguimiento
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.03] via-transparent to-primary-700/[0.03] blur-3xl -z-10" />

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/crm/diagnostics"
            className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
          >
            <LucideArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-white">Diagnóstico: {diagnostic.companyName}</h1>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors flex items-center gap-2">
            <LucideDownload className="w-4 h-4" />
            Exportar
          </button>
          <button className="px-4 py-2 bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors flex items-center gap-2">
            <LucidePrinter className="w-4 h-4" />
            Imprimir
          </button>
          <button className="px-4 py-2 bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors flex items-center gap-2">
            <LucideShare2 className="w-4 h-4" />
            Compartir
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Información del cliente */}
        <div className="lg:col-span-1">
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Información del cliente</h2>
              <Link
                href={`/dashboard/crm/clients/edit/${diagnostic.id}`}
                className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
              >
                <LucideEdit className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-white/40 text-sm mb-1">Empresa</div>
                <div className="flex items-center gap-2">
                  <LucideBuilding className="w-4 h-4 text-primary-300" />
                  <span className="text-white font-medium">{diagnostic.companyName}</span>
                </div>
              </div>

              <div>
                <div className="text-white/40 text-sm mb-1">Contacto</div>
                <div className="flex items-center gap-2">
                  <LucideUser className="w-4 h-4 text-primary-300" />
                  <span className="text-white">{diagnostic.contactName}</span>
                </div>
              </div>

              <div>
                <div className="text-white/40 text-sm mb-1">Email</div>
                <div className="flex items-center gap-2">
                  <LucideMail className="w-4 h-4 text-primary-300" />
                  <span className="text-white">{diagnostic.email}</span>
                </div>
              </div>

              <div>
                <div className="text-white/40 text-sm mb-1">Teléfono</div>
                <div className="flex items-center gap-2">
                  <LucidePhone className="w-4 h-4 text-primary-300" />
                  <span className="text-white">{diagnostic.phone}</span>
                </div>
              </div>

              <div>
                <div className="text-white/40 text-sm mb-1">Industria</div>
                <div className="flex items-center gap-2">
                  <LucideTag className="w-4 h-4 text-primary-300" />
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-500/10 text-primary-300">
                    {diagnostic.industry}
                  </span>
                </div>
              </div>

              <div>
                <div className="text-white/40 text-sm mb-1">Tamaño</div>
                <div className="flex items-center gap-2">
                  <LucideUsers className="w-4 h-4 text-primary-300" />
                  <span className="text-white">{diagnostic.size}</span>
                </div>
              </div>

              <div>
                <div className="text-white/40 text-sm mb-1">Fecha de diagnóstico</div>
                <div className="flex items-center gap-2">
                  <LucideCalendar className="w-4 h-4 text-primary-300" />
                  <span className="text-white">{diagnostic.date}</span>
                </div>
              </div>

              <div>
                <div className="text-white/40 text-sm mb-1">Estado</div>
                <div>{getStatusBadge(diagnostic.status)}</div>
              </div>
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-white mb-4">Próximos seguimientos</h2>

            {diagnostic.followUps.length > 0 ? (
              <div className="space-y-4">
                {diagnostic.followUps.map((followUp) => (
                  <div key={followUp.id} className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {followUp.type === "call" ? (
                          <LucidePhone className="w-4 h-4 text-primary-300" />
                        ) : (
                          <LucideMessageSquare className="w-4 h-4 text-primary-300" />
                        )}
                        <span className="text-white font-medium">
                          {followUp.type === "call" ? "Llamada" : "Reunión"}
                        </span>
                      </div>
                      <span
                        className={cn(
                          "text-xs px-2 py-0.5 rounded-full",
                          followUp.status === "scheduled"
                            ? "bg-amber-500/10 text-amber-400"
                            : "bg-green-500/10 text-green-400",
                        )}
                      >
                        {followUp.status === "scheduled" ? "Programado" : "Completado"}
                      </span>
                    </div>
                    <div className="text-white/60 text-sm mb-1">{followUp.date}</div>
                    <div className="text-white/60 text-sm">Asignado a: {followUp.assignedTo}</div>
                    {followUp.notes && <div className="text-white/60 text-sm mt-2">{followUp.notes}</div>}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-white/40 text-center py-4">No hay seguimientos programados</div>
            )}

            <div className="mt-4">
              <Link
                href={`/dashboard/crm/follow-up/new?diagnosticId=${diagnostic.id}`}
                className="w-full px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Programar seguimiento
              </Link>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="lg:col-span-2">
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl overflow-hidden backdrop-blur-sm">
            {/* Pestañas */}
            <div className="flex border-b border-white/[0.08]">
              <button
                className={cn(
                  "px-4 py-3 text-sm font-medium transition-colors",
                  activeTab === "summary"
                    ? "text-white border-b-2 border-primary-500"
                    : "text-white/40 hover:text-white hover:bg-white/[0.03]",
                )}
                onClick={() => setActiveTab("summary")}
              >
                Resumen
              </button>
              <button
                className={cn(
                  "px-4 py-3 text-sm font-medium transition-colors",
                  activeTab === "challenges"
                    ? "text-white border-b-2 border-primary-500"
                    : "text-white/40 hover:text-white hover:bg-white/[0.03]",
                )}
                onClick={() => setActiveTab("challenges")}
              >
                Desafíos
              </button>
              <button
                className={cn(
                  "px-4 py-3 text-sm font-medium transition-colors",
                  activeTab === "goals"
                    ? "text-white border-b-2 border-primary-500"
                    : "text-white/40 hover:text-white hover:bg-white/[0.03]",
                )}
                onClick={() => setActiveTab("goals")}
              >
                Objetivos
              </button>
              <button
                className={cn(
                  "px-4 py-3 text-sm font-medium transition-colors",
                  activeTab === "recommendations"
                    ? "text-white border-b-2 border-primary-500"
                    : "text-white/40 hover:text-white hover:bg-white/[0.03]",
                )}
                onClick={() => setActiveTab("recommendations")}
              >
                Recomendaciones
              </button>
              <button
                className={cn(
                  "px-4 py-3 text-sm font-medium transition-colors",
                  activeTab === "notes"
                    ? "text-white border-b-2 border-primary-500"
                    : "text-white/40 hover:text-white hover:bg-white/[0.03]",
                )}
                onClick={() => setActiveTab("notes")}
              >
                Notas
              </button>
            </div>

            {/* Contenido de las pestañas */}
            <div className="p-6">
              {activeTab === "summary" && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">Resumen del diagnóstico</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-4">
                        <LucideBarChart2 className="w-5 h-5 text-primary-300" />
                        <h3 className="text-lg font-medium text-white">Principales desafíos</h3>
                      </div>
                      <ul className="space-y-2">
                        {diagnostic.challenges.map((challenge) => (
                          <li key={challenge} className="flex items-start gap-2">
                            <LucideCheckCircle className="w-4 h-4 text-primary-300 mt-0.5" />
                            <div>
                              <div className="text-white font-medium">{challengesMap[challenge]?.label}</div>
                              <div className="text-white/40 text-sm">{challengesMap[challenge]?.description}</div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-4">
                        <LucideTarget className="w-5 h-5 text-primary-300" />
                        <h3 className="text-lg font-medium text-white">Objetivos principales</h3>
                      </div>
                      <ul className="space-y-2">
                        {diagnostic.goals.map((goal) => (
                          <li key={goal} className="flex items-start gap-2">
                            <LucideCheckCircle className="w-4 h-4 text-primary-300 mt-0.5" />
                            <div>
                              <div className="text-white font-medium">{goalsMap[goal]?.label}</div>
                              <div className="text-white/40 text-sm">{goalsMap[goal]?.description}</div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 mb-6">
                    <h3 className="text-lg font-medium text-white mb-3">Sistemas actuales</h3>
                    <p className="text-white/60">{diagnostic.currentSystems}</p>
                  </div>

                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                    <h3 className="text-lg font-medium text-white mb-3">Recomendaciones principales</h3>
                    <div className="space-y-4">
                      {diagnostic.recommendations.slice(0, 2).map((recommendation, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div
                            className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                              recommendation.impact === "alto"
                                ? "bg-green-500/10 text-green-400"
                                : "bg-amber-500/10 text-amber-400",
                            )}
                          >
                            {index + 1}
                          </div>
                          <div>
                            <div className="text-white font-medium">{recommendation.title}</div>
                            <div className="text-white/60 text-sm">{recommendation.description}</div>
                            <div className="flex items-center gap-4 mt-1">
                              <span className="text-white/40 text-xs">
                                Impacto:{" "}
                                <span
                                  className={cn(recommendation.impact === "alto" ? "text-green-400" : "text-amber-400")}
                                >
                                  {recommendation.impact}
                                </span>
                              </span>
                              <span className="text-white/40 text-xs">Tiempo estimado: {recommendation.timeframe}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-center">
                      <button
                        className="text-primary-300 hover:text-primary-400 transition-colors text-sm"
                        onClick={() => setActiveTab("recommendations")}
                      >
                        Ver todas las recomendaciones
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "challenges" && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">Desafíos identificados</h2>

                  <div className="space-y-6">
                    {diagnostic.challenges.map((challenge) => (
                      <div key={challenge} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6">
                        <h3 className="text-lg font-medium text-white mb-2">{challengesMap[challenge]?.label}</h3>
                        <p className="text-white/60 mb-4">{challengesMap[challenge]?.description}</p>

                        <div className="bg-white/[0.03] rounded-lg p-4">
                          <h4 className="text-white font-medium mb-2">Impacto en el negocio</h4>
                          <p className="text-white/60 text-sm">
                            Este desafío afecta directamente a la rentabilidad y competitividad de la empresa. Abordar
                            este problema permitirá mejorar significativamente los resultados operativos.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "goals" && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">Objetivos del cliente</h2>

                  <div className="space-y-6">
                    {diagnostic.goals.map((goal) => (
                      <div key={goal} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6">
                        <h3 className="text-lg font-medium text-white mb-2">{goalsMap[goal]?.label}</h3>
                        <p className="text-white/60 mb-4">{goalsMap[goal]?.description}</p>

                        <div className="bg-white/[0.03] rounded-lg p-4">
                          <h4 className="text-white font-medium mb-2">Métricas de éxito sugeridas</h4>
                          <ul className="space-y-2 text-white/60 text-sm">
                            <li className="flex items-start gap-2">
                              <LucideCheckCircle className="w-4 h-4 text-primary-300 mt-0.5" />
                              <span>Reducción de tiempo en procesos clave en un 30%</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <LucideCheckCircle className="w-4 h-4 text-primary-300 mt-0.5" />
                              <span>Mejora en la satisfacción del cliente (NPS) en 15 puntos</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <LucideCheckCircle className="w-4 h-4 text-primary-300 mt-0.5" />
                              <span>Disminución de costos operativos en un 20%</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "recommendations" && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">Recomendaciones</h2>

                  <div className="space-y-6">
                    {diagnostic.recommendations.map((recommendation, index) => (
                      <div key={index} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6">
                        <div className="flex items-start gap-4">
                          <div
                            className={cn(
                              "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                              recommendation.impact === "alto"
                                ? "bg-green-500/10 text-green-400"
                                : "bg-amber-500/10 text-amber-400",
                            )}
                          >
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-medium text-white mb-2">{recommendation.title}</h3>
                            <p className="text-white/60 mb-4">{recommendation.description}</p>

                            <div className="flex flex-wrap gap-4 mb-4">
                              <div className="bg-white/[0.03] rounded-lg px-3 py-2">
                                <div className="text-white/40 text-xs mb-1">Impacto</div>
                                <div
                                  className={cn(
                                    "font-medium",
                                    recommendation.impact === "alto" ? "text-green-400" : "text-amber-400",
                                  )}
                                >
                                  {recommendation.impact.charAt(0).toUpperCase() + recommendation.impact.slice(1)}
                                </div>
                              </div>
                              <div className="bg-white/[0.03] rounded-lg px-3 py-2">
                                <div className="text-white/40 text-xs mb-1">Tiempo estimado</div>
                                <div className="text-white font-medium">{recommendation.timeframe}</div>
                              </div>
                              <div className="bg-white/[0.03] rounded-lg px-3 py-2">
                                <div className="text-white/40 text-xs mb-1">Complejidad</div>
                                <div className="text-white font-medium">
                                  {recommendation.impact === "alto" ? "Media" : "Baja"}
                                </div>
                              </div>
                            </div>

                            <div className="bg-white/[0.03] rounded-lg p-4">
                              <h4 className="text-white font-medium mb-2">Beneficios esperados</h4>
                              <ul className="space-y-2 text-white/60 text-sm">
                                <li className="flex items-start gap-2">
                                  <LucideCheckCircle className="w-4 h-4 text-primary-300 mt-0.5" />
                                  <span>Mayor eficiencia operativa y reducción de errores</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <LucideCheckCircle className="w-4 h-4 text-primary-300 mt-0.5" />
                                  <span>Mejor experiencia del cliente y aumento en la satisfacción</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <LucideCheckCircle className="w-4 h-4 text-primary-300 mt-0.5" />
                                  <span>Reducción de costos a mediano y largo plazo</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "notes" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-white">Notas y observaciones</h2>
                    <button className="px-3 py-1 bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors text-sm">
                      Añadir nota
                    </button>
                  </div>

                  <div className="space-y-6">
                    {diagnostic.notes.map((note) => (
                      <div key={note.id} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium text-white">{note.author}</div>
                          <div className="text-white/40 text-sm">{note.date}</div>
                        </div>
                        <p className="text-white/60">{note.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
