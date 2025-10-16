"use client"

import { useState } from "react"
import Link from "next/link"
import {
  LucideSearch,
  LucideFilter,
  LucideEye,
  LucidePhone,
  LucideMail,
  LucideCalendar,
  LucideBuilding,
  LucideTag,
  LucideMoreVertical,
  LucideChevronLeft,
  LucideChevronRight,
  LucideCheckCircle,
  LucideAlertCircle,
  LucideClock,
} from "lucide-react"

// Datos de ejemplo para los diagnósticos
const diagnostics = [
  {
    id: "1",
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
  },
  {
    id: "2",
    companyName: "Hotel Paraíso",
    contactName: "Ana López",
    email: "ana@hotelparaiso.com",
    phone: "+1 (555) 987-6543",
    industry: "Hotelería y Turismo",
    size: "51-200 empleados",
    date: "10 Abr 2025",
    status: "in_progress",
    challenges: ["costs", "data", "growth"],
    goals: ["data_driven", "scale", "digital_transformation"],
  },
  {
    id: "3",
    companyName: "Constructora Edificar",
    contactName: "Roberto Sánchez",
    email: "roberto@edificar.com",
    phone: "+1 (555) 456-7890",
    industry: "Construcción",
    size: "201-500 empleados",
    date: "5 Abr 2025",
    status: "completed",
    challenges: ["efficiency", "costs", "communication"],
    goals: ["reduce_costs", "improve_efficiency", "data_driven"],
  },
  {
    id: "4",
    companyName: "TechSupport BPO",
    contactName: "María González",
    email: "maria@techsupport.com",
    phone: "+1 (555) 234-5678",
    industry: "BPO",
    size: "201-500 empleados",
    date: "2 Abr 2025",
    status: "completed",
    challenges: ["customer", "communication", "growth"],
    goals: ["enhance_customer", "scale", "digital_transformation"],
  },
  {
    id: "5",
    companyName: "Tiendas Moda Express",
    contactName: "Javier Rodríguez",
    email: "javier@modaexpress.com",
    phone: "+1 (555) 876-5432",
    industry: "Tiendas de Productos",
    size: "51-200 empleados",
    date: "28 Mar 2025",
    status: "follow_up",
    challenges: ["efficiency", "data", "customer"],
    goals: ["improve_efficiency", "data_driven", "enhance_customer"],
  },
]

export default function DiagnosticsManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [industryFilter, setIndustryFilter] = useState("all")

  // Filtrar los diagnósticos según los criterios de búsqueda y filtros
  const filteredDiagnostics = diagnostics.filter((diagnostic) => {
    const matchesSearch =
      diagnostic.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      diagnostic.contactName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      diagnostic.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || diagnostic.status === statusFilter
    const matchesIndustry = industryFilter === "all" || diagnostic.industry === industryFilter

    return matchesSearch && matchesStatus && matchesIndustry
  })

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
        <h1 className="text-2xl font-bold text-white">Diagnósticos Empresariales</h1>
      </div>

      {/* Filtros y búsqueda */}
      <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <LucideSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar por empresa o contacto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
            />
          </div>

          <div className="flex items-center gap-2">
            <LucideFilter className="text-white/40 w-4 h-4" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="flex-1 px-3 py-2 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
            >
              <option value="all">Todos los estados</option>
              <option value="new">Nuevos</option>
              <option value="in_progress">En progreso</option>
              <option value="completed">Completados</option>
              <option value="follow_up">Seguimiento</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <LucideTag className="text-white/40 w-4 h-4" />
            <select
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
              className="flex-1 px-3 py-2 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
            >
              <option value="all">Todas las industrias</option>
              <option value="Construcción">Construcción</option>
              <option value="Restaurantes">Restaurantes</option>
              <option value="Hotelería y Turismo">Hotelería y Turismo</option>
              <option value="BPO">BPO</option>
              <option value="Tiendas de Productos">Tiendas de Productos</option>
            </select>
          </div>
        </div>
      </div>

      {/* Lista de diagnósticos */}
      <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.08]">
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                  Empresa
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                  Contacto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                  Industria
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.08]">
              {filteredDiagnostics.map((diagnostic) => (
                <tr key={diagnostic.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-white font-medium">{diagnostic.companyName}</span>
                      <div className="flex items-center mt-1">
                        <span className="flex items-center text-white/40 text-xs">
                          <LucideBuilding className="w-3 h-3 mr-1" />
                          {diagnostic.size}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-white">{diagnostic.contactName}</span>
                      <div className="flex flex-col gap-1 mt-1">
                        <span className="flex items-center text-white/40 text-xs">
                          <LucideMail className="w-3 h-3 mr-1" />
                          {diagnostic.email}
                        </span>
                        <span className="flex items-center text-white/40 text-xs">
                          <LucidePhone className="w-3 h-3 mr-1" />
                          {diagnostic.phone}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-500/10 text-primary-300">
                      {diagnostic.industry}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-white/60">
                      <LucideCalendar className="w-4 h-4 mr-1" />
                      {diagnostic.date}
                    </div>
                  </td>
                  <td className="px-6 py-4">{getStatusBadge(diagnostic.status)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/dashboard/crm/diagnostics/${diagnostic.id}`}
                        className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
                        title="Ver detalles"
                      >
                        <LucideEye className="w-4 h-4" />
                      </Link>
                      <Link
                        href={`/dashboard/crm/follow-up/new?diagnosticId=${diagnostic.id}`}
                        className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
                        title="Programar seguimiento"
                      >
                        <LucidePhone className="w-4 h-4" />
                      </Link>
                      <div className="relative group">
                        <button className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors">
                          <LucideMoreVertical className="w-4 h-4" />
                        </button>
                        <div className="absolute right-0 mt-2 w-48 py-2 bg-[#0a0a0a] border border-white/[0.08] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                          <button className="flex items-center w-full px-4 py-2 text-left text-white/60 hover:text-white hover:bg-white/[0.03]">
                            Enviar por email
                          </button>
                          <button className="flex items-center w-full px-4 py-2 text-left text-white/60 hover:text-white hover:bg-white/[0.03]">
                            Exportar PDF
                          </button>
                          <button className="flex items-center w-full px-4 py-2 text-left text-white/60 hover:text-white hover:bg-white/[0.03]">
                            Asignar a consultor
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-white/[0.08]">
          <div className="text-sm text-white/60">
            Mostrando <span className="font-medium text-white">{filteredDiagnostics.length}</span> de{" "}
            <span className="font-medium text-white">{diagnostics.length}</span> diagnósticos
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors">
              <LucideChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-500 text-white">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors">
              2
            </button>
            <button className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors">
              <LucideChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
