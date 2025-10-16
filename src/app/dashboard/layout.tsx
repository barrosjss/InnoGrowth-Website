"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  LucideLayoutDashboard,
  LucideNewspaper,
  LucideFolderKanban,
  LucideUsers,
  LucideSettings,
  LucideChevronDown,
  LucideMenu,
  LucideX,
  LucideBell,
  LucideLogOut,
  LucideUser,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  href: string
  active: boolean
  subItems?: { label: string; href: string }[]
}

function SidebarItem({ icon, label, href, active, subItems }: SidebarItemProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      <Link
        href={href}
        className={cn(
          "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
          active && !subItems
            ? "bg-primary-500/20 text-primary-300"
            : "text-white/60 hover:text-white hover:bg-white/[0.03]",
        )}
        onClick={(e) => {
          if (subItems) {
            e.preventDefault()
            setExpanded(!expanded)
          }
        }}
      >
        <div className="w-5 h-5">{icon}</div>
        <span>{label}</span>
        {subItems && (
          <LucideChevronDown
            className={cn("w-4 h-4 ml-auto transition-transform", expanded && "transform rotate-180")}
          />
        )}
      </Link>

      {subItems && expanded && (
        <div className="ml-8 mt-1 space-y-1">
          {subItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center text-sm text-white/60 hover:text-white py-1.5 px-3 rounded-lg hover:bg-white/[0.03] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const sidebarItems = [
    {
      icon: <LucideLayoutDashboard />,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <LucideNewspaper />,
      label: "Blog",
      href: "/dashboard/blog",
      subItems: [
        { label: "Todos los artículos", href: "/dashboard/blog" },
        { label: "Crear artículo", href: "/dashboard/blog/new" },
        { label: "Categorías", href: "/dashboard/blog/categories" },
      ],
    },
    {
      icon: <LucideFolderKanban />,
      label: "Proyectos",
      href: "/dashboard/projects",
      subItems: [
        { label: "Todos los proyectos", href: "/dashboard/projects" },
        { label: "Crear proyecto", href: "/dashboard/projects/new" },
        { label: "Categorías", href: "/dashboard/projects/categories" },
      ],
    },
    {
      icon: <LucideUsers />,
      label: "CRM",
      href: "/dashboard/crm",
      subItems: [
        { label: "Clientes", href: "/dashboard/crm/clients" },
        { label: "Diagnósticos", href: "/dashboard/crm/diagnostics" },
        { label: "Seguimiento", href: "/dashboard/crm/follow-up" },
      ],
    },
    {
      icon: <LucideSettings />,
      label: "Configuración",
      href: "/dashboard/settings",
    },
  ]

  return (
    <div className="min-h-screen bg-[#030303]">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#030303] border-b border-white/[0.08] px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 rounded-lg bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.05]"
        >
          <LucideMenu className="w-5 h-5" />
        </button>
        <Link href="/dashboard" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="InnoGrowth" width={24} height={24} />
          <span className="font-semibold text-white">InnoGrowth Admin</span>
        </Link>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </div>

      {/* Mobile sidebar */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/50 lg:hidden transition-opacity",
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setSidebarOpen(false)}
      >
        <div
          className={cn(
            "absolute top-0 left-0 bottom-0 w-64 bg-[#030303] border-r border-white/[0.08] transition-transform",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 flex items-center justify-between border-b border-white/[0.08]">
            <Link href="/dashboard" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="InnoGrowth" width={24} height={24} />
              <span className="font-semibold text-white">InnoGrowth</span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.03]"
            >
              <LucideX className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 space-y-1">
            {sidebarItems.map((item) => (
              <SidebarItem
                key={item.href}
                icon={item.icon}
                label={item.label}
                href={item.href}
                active={pathname === item.href || pathname.startsWith(`${item.href}/`)}
                subItems={item.subItems}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:block fixed top-0 left-0 bottom-0 w-64 bg-[#030303] border-r border-white/[0.08] z-40">
        <div className="p-4 flex items-center gap-2 border-b border-white/[0.08]">
          <Image src="/logo.svg" alt="InnoGrowth" width={32} height={32} />
          <span className="font-semibold text-white">InnoGrowth Admin</span>
        </div>

        <div className="p-4 space-y-1">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              active={pathname === item.href || pathname.startsWith(`${item.href}/`)}
              subItems={item.subItems}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 pt-14 lg:pt-0">
        {/* Top navbar */}
        <div className="hidden lg:flex items-center justify-between h-16 px-6 border-b border-white/[0.08]">
          <h1 className="text-xl font-semibold text-white">
            {sidebarItems.find((item) => pathname === item.href || pathname.startsWith(`${item.href}/`))?.label ||
              "Dashboard"}
          </h1>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.05] relative">
              <LucideBell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-primary-500"></span>
            </button>

            <div className="relative group">
              <button className="flex items-center gap-2 p-1 rounded-full hover:bg-white/[0.03]">
                <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-300">
                  <LucideUser className="w-4 h-4" />
                </div>
                <span className="text-white">Admin</span>
                <LucideChevronDown className="w-4 h-4 text-white/60" />
              </button>

              <div className="absolute right-0 mt-2 w-48 py-2 bg-[#0a0a0a] border border-white/[0.08] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link
                  href="/dashboard/profile"
                  className="flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white hover:bg-white/[0.03]"
                >
                  <LucideUser className="w-4 h-4" />
                  <span>Mi perfil</span>
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white hover:bg-white/[0.03]"
                >
                  <LucideSettings className="w-4 h-4" />
                  <span>Configuración</span>
                </Link>
                <div className="border-t border-white/[0.08] my-1"></div>
                <Link
                  href="/logout"
                  className="flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white hover:bg-white/[0.03]"
                >
                  <LucideLogOut className="w-4 h-4" />
                  <span>Cerrar sesión</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
