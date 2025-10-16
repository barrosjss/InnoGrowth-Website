"use client"

import { useState } from "react"
import {
  LucideUser,
  LucideLock,
  LucideGlobe,
  LucideBell,
  LucideUsers,
  LucideShield,
  LucideSettings,
  LucideDatabase,
  LucideCloud,
  LucideSave,
  LucidePencil,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general")

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.03] via-transparent to-primary-700/[0.03] blur-3xl -z-10" />

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Configuración</h1>
        <p className="text-white/40 mt-1">Administra la configuración de tu cuenta y del sistema</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Menú lateral */}
        <div className="lg:col-span-1">
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl overflow-hidden">
            <nav className="flex flex-col">
              <button
                onClick={() => setActiveTab("general")}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-left transition-colors",
                  activeTab === "general"
                    ? "bg-primary-500/20 text-primary-300 border-l-2 border-primary-500"
                    : "text-white/60 hover:text-white hover:bg-white/[0.03]",
                )}
              >
                <LucideSettings className="w-5 h-5" />
                <span>General</span>
              </button>
              <button
                onClick={() => setActiveTab("profile")}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-left transition-colors",
                  activeTab === "profile"
                    ? "bg-primary-500/20 text-primary-300 border-l-2 border-primary-500"
                    : "text-white/60 hover:text-white hover:bg-white/[0.03]",
                )}
              >
                <LucideUser className="w-5 h-5" />
                <span>Perfil</span>
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-left transition-colors",
                  activeTab === "security"
                    ? "bg-primary-500/20 text-primary-300 border-l-2 border-primary-500"
                    : "text-white/60 hover:text-white hover:bg-white/[0.03]",
                )}
              >
                <LucideLock className="w-5 h-5" />
                <span>Seguridad</span>
              </button>
              <button
                onClick={() => setActiveTab("notifications")}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-left transition-colors",
                  activeTab === "notifications"
                    ? "bg-primary-500/20 text-primary-300 border-l-2 border-primary-500"
                    : "text-white/60 hover:text-white hover:bg-white/[0.03]",
                )}
              >
                <LucideBell className="w-5 h-5" />
                <span>Notificaciones</span>
              </button>
              <button
                onClick={() => setActiveTab("users")}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-left transition-colors",
                  activeTab === "users"
                    ? "bg-primary-500/20 text-primary-300 border-l-2 border-primary-500"
                    : "text-white/60 hover:text-white hover:bg-white/[0.03]",
                )}
              >
                <LucideUsers className="w-5 h-5" />
                <span>Usuarios y permisos</span>
              </button>
              <button
                onClick={() => setActiveTab("database")}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-left transition-colors",
                  activeTab === "database"
                    ? "bg-primary-500/20 text-primary-300 border-l-2 border-primary-500"
                    : "text-white/60 hover:text-white hover:bg-white/[0.03]",
                )}
              >
                <LucideDatabase className="w-5 h-5" />
                <span>Base de datos</span>
              </button>
              <button
                onClick={() => setActiveTab("integrations")}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-left transition-colors",
                  activeTab === "integrations"
                    ? "bg-primary-500/20 text-primary-300 border-l-2 border-primary-500"
                    : "text-white/60 hover:text-white hover:bg-white/[0.03]",
                )}
              >
                <LucideCloud className="w-5 h-5" />
                <span>Integraciones</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Contenido */}
        <div className="lg:col-span-3">
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm">
            {activeTab === "general" && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-6">Configuración general</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="site-name" className="block text-sm font-medium text-white/60 mb-2">
                      Nombre del sitio
                    </label>
                    <input
                      type="text"
                      id="site-name"
                      defaultValue="InnoGrowth"
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="site-url" className="block text-sm font-medium text-white/60 mb-2">
                      URL del sitio
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 py-3 rounded-l-lg border border-r-0 border-white/[0.08] bg-white/[0.05] text-white/60">
                        <LucideGlobe className="w-4 h-4 mr-2" />
                        https://
                      </span>
                      <input
                        type="text"
                        id="site-url"
                        defaultValue="innogrowth.com"
                        className="flex-1 px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-r-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="timezone" className="block text-sm font-medium text-white/60 mb-2">
                      Zona horaria
                    </label>
                    <select
                      id="timezone"
                      className="w-full px-3 py-2 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                    >
                      <option value="UTC-5">América/Bogotá (UTC-5)</option>
                      <option value="UTC-6">América/Ciudad de México (UTC-6)</option>
                      <option value="UTC-3">América/Buenos Aires (UTC-3)</option>
                      <option value="UTC+1">Europa/Madrid (UTC+1)</option>
                      <option value="UTC+0">UTC</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="language" className="block text-sm font-medium text-white/60 mb-2">
                      Idioma
                    </label>
                    <select
                      id="language"
                      className="w-full px-3 py-2 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                    >
                      <option value="es">Español</option>
                      <option value="en">English</option>
                      <option value="pt">Português</option>
                    </select>
                  </div>
                  <div className="pt-4 border-t border-white/[0.08]">
                    <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors flex items-center gap-2">
                      <LucideSave className="w-4 h-4" />
                      Guardar cambios
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "profile" && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-6">Perfil de usuario</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-300">
                      <LucideUser className="w-10 h-10" />
                    </div>
                    <div>
                      <button className="px-4 py-2 bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors">
                        Cambiar foto
                      </button>
                      <p className="text-white/40 text-sm mt-1">JPG, GIF o PNG. Máximo 1MB.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-white/60 mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        defaultValue="Admin"
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-white/60 mb-2">
                        Apellido
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        defaultValue="Usuario"
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      defaultValue="admin@innogrowth.com"
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-white/60 mb-2">
                      Biografía
                    </label>
                    <textarea
                      id="bio"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                      placeholder="Cuéntanos sobre ti..."
                    ></textarea>
                  </div>
                  <div className="pt-4 border-t border-white/[0.08]">
                    <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors flex items-center gap-2">
                      <LucideSave className="w-4 h-4" />
                      Guardar perfil
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-6">Seguridad</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-4">Cambiar contraseña</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="current-password" className="block text-sm font-medium text-white/60 mb-2">
                          Contraseña actual
                        </label>
                        <input
                          type="password"
                          id="current-password"
                          className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="new-password" className="block text-sm font-medium text-white/60 mb-2">
                          Nueva contraseña
                        </label>
                        <input
                          type="password"
                          id="new-password"
                          className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-white/60 mb-2">
                          Confirmar nueva contraseña
                        </label>
                        <input
                          type="password"
                          id="confirm-password"
                          className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/[0.08]">
                    <h3 className="text-lg font-medium text-white mb-4">Autenticación de dos factores</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white">Protege tu cuenta con autenticación de dos factores</p>
                        <p className="text-white/40 text-sm">Actualmente desactivada</p>
                      </div>
                      <button className="px-4 py-2 bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors">
                        Configurar
                      </button>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/[0.08]">
                    <h3 className="text-lg font-medium text-white mb-4">Sesiones activas</h3>
                    <div className="space-y-4">
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white">Chrome en Windows</p>
                            <p className="text-white/40 text-sm">Bogotá, Colombia • Activa ahora</p>
                          </div>
                          <div className="text-green-400 text-sm">Actual</div>
                        </div>
                      </div>
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white">Safari en macOS</p>
                            <p className="text-white/40 text-sm">Bogotá, Colombia • Hace 2 días</p>
                          </div>
                          <button className="text-red-400 text-sm hover:underline">Cerrar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/[0.08]">
                    <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors flex items-center gap-2">
                      <LucideSave className="w-4 h-4" />
                      Guardar cambios
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-6">Notificaciones</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-4">Notificaciones por email</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white">Nuevos clientes</p>
                          <p className="text-white/40 text-sm">
                            Recibe notificaciones cuando se registre un nuevo cliente
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-white/[0.08] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white">Nuevos diagnósticos</p>
                          <p className="text-white/40 text-sm">
                            Recibe notificaciones cuando se complete un diagnóstico
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-white/[0.08] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white">Seguimientos programados</p>
                          <p className="text-white/40 text-sm">Recibe recordatorios de seguimientos programados</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-white/[0.08] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/[0.08]">
                    <h3 className="text-lg font-medium text-white mb-4">Notificaciones del sistema</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white">Actualizaciones del sistema</p>
                          <p className="text-white/40 text-sm">
                            Recibe notificaciones sobre actualizaciones del sistema
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-white/[0.08] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white">Alertas de seguridad</p>
                          <p className="text-white/40 text-sm">Recibe alertas sobre actividad sospechosa</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-white/[0.08] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/[0.08]">
                    <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors flex items-center gap-2">
                      <LucideSave className="w-4 h-4" />
                      Guardar preferencias
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "users" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Usuarios y permisos</h2>
                  <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors">
                    Añadir usuario
                  </button>
                </div>
                <div className="space-y-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/[0.08]">
                          <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                            Usuario
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                            Email
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                            Rol
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
                        <tr className="hover:bg-white/[0.02] transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-300 mr-3">
                                <LucideUser className="w-4 h-4" />
                              </div>
                              <span className="text-white">Admin Usuario</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-white/60">admin@innogrowth.com</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-500/10 text-primary-300">
                              Administrador
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                              Activo
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors">
                                <LucidePencil className="w-4 h-4" />
                              </button>
                              <button className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors">
                                <LucideShield className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-white/[0.02] transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-300 mr-3">
                                <LucideUser className="w-4 h-4" />
                              </div>
                              <span className="text-white">María Rodríguez</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-white/60">maria@innogrowth.com</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400">
                              Editor
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                              Activo
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors">
                                <LucidePencil className="w-4 h-4" />
                              </button>
                              <button className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors">
                                <LucideShield className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-white/[0.02] transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-300 mr-3">
                                <LucideUser className="w-4 h-4" />
                              </div>
                              <span className="text-white">Juan Pérez</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-white/60">juan@innogrowth.com</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400">
                              Consultor
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                              Activo
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors">
                                <LucidePencil className="w-4 h-4" />
                              </button>
                              <button className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors">
                                <LucideShield className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="pt-6 border-t border-white/[0.08]">
                    <h3 className="text-lg font-medium text-white mb-4">Roles y permisos</h3>
                    <div className="space-y-4">
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white font-medium">Administrador</h4>
                          <button className="text-primary-300 text-sm hover:underline">Editar</button>
                        </div>
                        <p className="text-white/40 text-sm">Acceso completo a todas las funcionalidades del sistema</p>
                      </div>
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white font-medium">Editor</h4>
                          <button className="text-primary-300 text-sm hover:underline">Editar</button>
                        </div>
                        <p className="text-white/40 text-sm">
                          Puede crear y editar contenido, pero no puede modificar configuraciones del sistema
                        </p>
                      </div>
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white font-medium">Consultor</h4>
                          <button className="text-primary-300 text-sm hover:underline">Editar</button>
                        </div>
                        <p className="text-white/40 text-sm">
                          Puede ver información de clientes y crear diagnósticos, pero no puede modificar
                          configuraciones
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "database" && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-6">Configuración de base de datos</h2>
                <div className="space-y-6">
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-6">
                    <h3 className="text-lg font-medium text-white mb-4">Información de la base de datos</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-white/40 text-sm">Tipo</p>
                        <p className="text-white">PostgreSQL</p>
                      </div>
                      <div>
                        <p className="text-white/40 text-sm">Versión</p>
                        <p className="text-white">14.5</p>
                      </div>
                      <div>
                        <p className="text-white/40 text-sm">Tamaño</p>
                        <p className="text-white">256 MB</p>
                      </div>
                      <div>
                        <p className="text-white/40 text-sm">Última copia de seguridad</p>
                        <p className="text-white">12 Abr 2025, 03:00 AM</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="px-4 py-2 bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors">
                        Crear copia de seguridad
                      </button>
                      <button className="px-4 py-2 bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors">
                        Restaurar
                      </button>
                    </div>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-6">
                    <h3 className="text-lg font-medium text-white mb-4">Programación de copias de seguridad</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="backup-frequency" className="block text-sm font-medium text-white/60 mb-2">
                          Frecuencia
                        </label>
                        <select
                          id="backup-frequency"
                          className="w-full px-3 py-2 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                        >
                          <option value="daily">Diaria</option>
                          <option value="weekly">Semanal</option>
                          <option value="monthly">Mensual</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="backup-time" className="block text-sm font-medium text-white/60 mb-2">
                          Hora
                        </label>
                        <input
                          type="time"
                          id="backup-time"
                          defaultValue="03:00"
                          className="w-full px-3 py-2 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="retention-period" className="block text-sm font-medium text-white/60 mb-2">
                          Período de retención
                        </label>
                        <select
                          id="retention-period"
                          className="w-full px-3 py-2 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                        >
                          <option value="7">7 días</option>
                          <option value="14">14 días</option>
                          <option value="30">30 días</option>
                          <option value="90">90 días</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors">
                        Guardar configuración
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "integrations" && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-6">Integraciones</h2>
                <div className="space-y-6">
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-medium text-white">Google Analytics</h3>
                        <p className="text-white/40 text-sm">Integra Google Analytics para seguimiento de visitantes</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-400 text-sm mr-3">Conectado</span>
                        <button className="px-4 py-2 bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors">
                          Configurar
                        </button>
                      </div>
                    </div>
                    <div className="bg-white/[0.03] rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-white/60">ID de seguimiento: UA-123456789-1</p>
                        <button className="text-primary-300 text-sm hover:underline">Editar</button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-medium text-white">Mailchimp</h3>
                        <p className="text-white/40 text-sm">Integra Mailchimp para gestión de email marketing</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-amber-400 text-sm mr-3">No conectado</span>
                        <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors">
                          Conectar
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-medium text-white">Stripe</h3>
                        <p className="text-white/40 text-sm">Integra Stripe para procesamiento de pagos</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-400 text-sm mr-3">Conectado</span>
                        <button className="px-4 py-2 bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors">
                          Configurar
                        </button>
                      </div>
                    </div>
                    <div className="bg-white/[0.03] rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-white/60">Modo: Pruebas</p>
                        <button className="text-primary-300 text-sm hover:underline">Cambiar a producción</button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-medium text-white">Zapier</h3>
                        <p className="text-white/40 text-sm">Integra Zapier para automatizar flujos de trabajo</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-amber-400 text-sm mr-3">No conectado</span>
                        <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors">
                          Conectar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
