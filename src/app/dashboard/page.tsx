"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  LucideUsers,
  LucideNewspaper,
  LucideFolderKanban,
  LucideBarChart2,
  LucideArrowUpRight,
  LucideArrowDownRight,
  LucideEye,
  LucidePencil,
  LucideCalendarClock,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Componente para las tarjetas de estadísticas
function StatCard({
  title,
  value,
  change,
  changeType,
  icon,
}: {
  title: string
  value: string
  change: string
  changeType: "positive" | "negative" | "neutral"
  icon: React.ReactNode
}) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm">
      <div className="flex justify-between items-start mb-4">
        <div className="text-white/60 text-sm">{title}</div>
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-500/10 text-primary-300">
          {icon}
        </div>
      </div>
      <div className="text-2xl font-bold text-white mb-2">{value}</div>
      <div
        className={cn(
          "text-sm flex items-center",
          changeType === "positive" && "text-green-400",
          changeType === "negative" && "text-red-400",
          changeType === "neutral" && "text-white/60",
        )}
      >
        {changeType === "positive" && <LucideArrowUpRight className="w-4 h-4 mr-1" />}
        {changeType === "negative" && <LucideArrowDownRight className="w-4 h-4 mr-1" />}
        {change}
      </div>
    </div>
  )
}

// Componente para las actividades recientes
function RecentActivity({
  type,
  title,
  time,
  status,
}: {
  type: "blog" | "project" | "client"
  title: string
  time: string
  status: "published" | "draft" | "new" | "updated"
}) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/[0.03] transition-colors">
      <div
        className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center",
          type === "blog" && "bg-blue-500/10 text-blue-400",
          type === "project" && "bg-amber-500/10 text-amber-400",
          type === "client" && "bg-green-500/10 text-green-400",
        )}
      >
        {type === "blog" && <LucideNewspaper className="w-5 h-5" />}
        {type === "project" && <LucideFolderKanban className="w-5 h-5" />}
        {type === "client" && <LucideUsers className="w-5 h-5" />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-white font-medium truncate">{title}</div>
        <div className="text-white/40 text-sm flex items-center">
          <LucideCalendarClock className="w-3 h-3 mr-1" />
          {time}
        </div>
      </div>
      <div
        className={cn(
          "text-xs px-2 py-1 rounded-full",
          status === "published" && "bg-green-500/10 text-green-400",
          status === "draft" && "bg-amber-500/10 text-amber-400",
          status === "new" && "bg-blue-500/10 text-blue-400",
          status === "updated" && "bg-purple-500/10 text-purple-400",
        )}
      >
        {status === "published" && "Publicado"}
        {status === "draft" && "Borrador"}
        {status === "new" && "Nuevo"}
        {status === "updated" && "Actualizado"}
      </div>
    </div>
  )
}

// Componente para las tareas pendientes
function PendingTask({
  title,
  dueDate,
  priority,
}: {
  title: string
  dueDate: string
  priority: "high" | "medium" | "low"
}) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/[0.03] transition-colors">
      <input
        type="checkbox"
        className="w-5 h-5 rounded-full border-2 border-white/20 text-primary-500 focus:ring-primary-500/50"
      />
      <div className="flex-1 min-w-0">
        <div className="text-white font-medium truncate">{title}</div>
        <div className="text-white/40 text-sm">{dueDate}</div>
      </div>
      <div
        className={cn(
          "text-xs px-2 py-1 rounded-full",
          priority === "high" && "bg-red-500/10 text-red-400",
          priority === "medium" && "bg-amber-500/10 text-amber-400",
          priority === "low" && "bg-blue-500/10 text-blue-400",
        )}
      >
        {priority === "high" && "Alta"}
        {priority === "medium" && "Media"}
        {priority === "low" && "Baja"}
      </div>
    </div>
  )
}

// Componente para los artículos recientes
function RecentItem({
  type,
  title,
  date,
  views,
  image,
}: {
  type: "blog" | "project"
  title: string
  date: string
  views: number
  image: string
}) {
  return (
    <div className="flex gap-4 p-3 rounded-lg hover:bg-white/[0.03] transition-colors">
      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-white font-medium truncate">{title}</div>
        <div className="text-white/40 text-sm mb-1">{date}</div>
        <div className="flex items-center gap-4">
          <div className="flex items-center text-white/60 text-xs">
            <LucideEye className="w-3 h-3 mr-1" />
            {views} vistas
          </div>
          <Link
            href={`/dashboard/${type === "blog" ? "blog" : "projects"}/edit/1`}
            className="flex items-center text-primary-300 text-xs hover:text-primary-400 transition-colors"
          >
            <LucidePencil className="w-3 h-3 mr-1" />
            Editar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const [period, setPeriod] = useState("week")

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.03] via-transparent to-primary-700/[0.03] blur-3xl -z-10" />

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] rounded-lg p-1">
          <button
            className={cn(
              "px-3 py-1 text-sm rounded-md transition-colors",
              period === "day" ? "bg-primary-500 text-white" : "text-white/60 hover:text-white",
            )}
            onClick={() => setPeriod("day")}
          >
            Hoy
          </button>
          <button
            className={cn(
              "px-3 py-1 text-sm rounded-md transition-colors",
              period === "week" ? "bg-primary-500 text-white" : "text-white/60 hover:text-white",
            )}
            onClick={() => setPeriod("week")}
          >
            Esta semana
          </button>
          <button
            className={cn(
              "px-3 py-1 text-sm rounded-md transition-colors",
              period === "month" ? "bg-primary-500 text-white" : "text-white/60 hover:text-white",
            )}
            onClick={() => setPeriod("month")}
          >
            Este mes
          </button>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total de clientes"
          value="128"
          change="+12% vs periodo anterior"
          changeType="positive"
          icon={<LucideUsers className="w-5 h-5" />}
        />
        <StatCard
          title="Artículos publicados"
          value="36"
          change="+4 nuevos artículos"
          changeType="positive"
          icon={<LucideNewspaper className="w-5 h-5" />}
        />
        <StatCard
          title="Proyectos"
          value="24"
          change="Sin cambios"
          changeType="neutral"
          icon={<LucideFolderKanban className="w-5 h-5" />}
        />
        <StatCard
          title="Diagnósticos"
          value="42"
          change="-5% vs periodo anterior"
          changeType="negative"
          icon={<LucideBarChart2 className="w-5 h-5" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Actividad reciente */}
        <div className="lg:col-span-2 bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Actividad reciente</h2>
            <Link
              href="/dashboard/activity"
              className="text-primary-300 text-sm hover:text-primary-400 transition-colors"
            >
              Ver todo
            </Link>
          </div>

          <div className="space-y-2">
            <RecentActivity
              type="client"
              title="Nuevo cliente: Restaurantes Gourmet S.A."
              time="Hace 2 horas"
              status="new"
            />
            <RecentActivity
              type="blog"
              title="KPIs esenciales para medir el éxito de tu transformación digital"
              time="Hace 5 horas"
              status="published"
            />
            <RecentActivity type="project" title="Actualización: PetLuv App" time="Hace 1 día" status="updated" />
            <RecentActivity
              type="blog"
              title="Automatización de procesos: Por dónde empezar"
              time="Hace 2 días"
              status="draft"
            />
            <RecentActivity
              type="client"
              title="Diagnóstico completado: Hotel Paraíso"
              time="Hace 3 días"
              status="updated"
            />
          </div>
        </div>

        {/* Tareas pendientes */}
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Tareas pendientes</h2>
            <Link href="/dashboard/tasks" className="text-primary-300 text-sm hover:text-primary-400 transition-colors">
              Ver todo
            </Link>
          </div>

          <div className="space-y-2">
            <PendingTask title="Llamar a Restaurantes Gourmet S.A." dueDate="Hoy, 15:00" priority="high" />
            <PendingTask title="Revisar propuesta para Hotel Paraíso" dueDate="Mañana, 10:00" priority="medium" />
            <PendingTask title="Actualizar contenido del blog" dueDate="En 2 días" priority="medium" />
            <PendingTask title="Reunión de seguimiento con PetLuv" dueDate="En 3 días" priority="low" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Artículos recientes */}
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Artículos recientes</h2>
            <Link href="/dashboard/blog" className="text-primary-300 text-sm hover:text-primary-400 transition-colors">
              Ver todo
            </Link>
          </div>

          <div className="space-y-4">
            <RecentItem
              type="blog"
              title="KPIs esenciales para medir el éxito de tu transformación digital"
              date="12 Abr 2025"
              views={245}
              image="/placeholder.svg?height=400&width=600"
            />
            <RecentItem
              type="blog"
              title="Automatización de procesos: Por dónde empezar"
              date="5 Abr 2025"
              views={187}
              image="/placeholder.svg?height=400&width=600"
            />
            <RecentItem
              type="blog"
              title="Inteligencia Artificial para PYMEs: Aplicaciones prácticas"
              date="28 Mar 2025"
              views={312}
              image="/placeholder.svg?height=400&width=600"
            />
          </div>
        </div>

        {/* Proyectos recientes */}
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Proyectos recientes</h2>
            <Link
              href="/dashboard/projects"
              className="text-primary-300 text-sm hover:text-primary-400 transition-colors"
            >
              Ver todo
            </Link>
          </div>

          <div className="space-y-4">
            <RecentItem
              type="project"
              title="PetLuv App"
              date="Actualizado: 10 Abr 2025"
              views={128}
              image="/placeholder.svg?height=400&width=600"
            />
            <RecentItem
              type="project"
              title="GreenServe"
              date="Actualizado: 2 Abr 2025"
              views={95}
              image="/placeholder.svg?height=400&width=600"
            />
            <RecentItem
              type="project"
              title="Research & Bug Database"
              date="Actualizado: 25 Mar 2025"
              views={76}
              image="/placeholder.svg?height=400&width=600"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
