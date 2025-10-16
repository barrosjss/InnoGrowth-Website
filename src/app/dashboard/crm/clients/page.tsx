"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import {
  PlusCircle,
  Search,
  MoreHorizontal,
  FileEdit,
  Trash2,
  FileText,
  Phone,
  Mail,
  Building,
  User,
} from "lucide-react"

// Datos de ejemplo para clientes
const clientsData = [
  {
    id: "1",
    name: "Corporación Tecnológica Global",
    contact: "María Rodríguez",
    email: "maria@ctg.com",
    phone: "+34 612 345 678",
    industry: "Tecnología",
    status: "Activo",
    lastContact: "2023-06-15",
    notes: "Cliente interesado en servicios de transformación digital",
  },
  {
    id: "2",
    name: "Industrias Innovadoras S.L.",
    contact: "Carlos Martínez",
    email: "carlos@industriasinnovadoras.com",
    phone: "+34 623 456 789",
    industry: "Manufactura",
    status: "Potencial",
    lastContact: "2023-05-28",
    notes: "Reunión inicial programada para discutir necesidades de digitalización",
  },
  {
    id: "3",
    name: "Retail Futuro",
    contact: "Ana López",
    email: "ana@retailfuturo.com",
    phone: "+34 634 567 890",
    industry: "Retail",
    status: "Inactivo",
    lastContact: "2023-04-10",
    notes: "Seguimiento pendiente para reactivar la relación",
  },
  {
    id: "4",
    name: "Servicios Financieros Avanzados",
    contact: "Javier García",
    email: "javier@sfa.com",
    phone: "+34 645 678 901",
    industry: "Finanzas",
    status: "Activo",
    lastContact: "2023-06-20",
    notes: "Proyecto de análisis de datos en curso",
  },
  {
    id: "5",
    name: "Salud Integral",
    contact: "Laura Sánchez",
    email: "laura@saludintegral.com",
    phone: "+34 656 789 012",
    industry: "Salud",
    status: "Potencial",
    lastContact: "2023-06-05",
    notes: "Interesados en soluciones de IA para diagnóstico",
  },
]

// Función para obtener el color del badge según el estado
const getStatusColor = (status: string) => {
  switch (status) {
    case "Activo":
      return "bg-green-100 text-green-800 border-green-300"
    case "Potencial":
      return "bg-blue-100 text-blue-800 border-blue-300"
    case "Inactivo":
      return "bg-gray-100 text-gray-800 border-gray-300"
    default:
      return "bg-gray-100 text-gray-800 border-gray-300"
  }
}

export default function ClientsPage() {
  const [clients, setClients] = React.useState(clientsData)
  const [searchTerm, setSearchTerm] = React.useState("")

  // Filtrar clientes según término de búsqueda
  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.industry.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDeleteClient = (clientId: string) => {
    if (confirm("¿Estás seguro de que deseas eliminar este cliente?")) {
      setClients(clients.filter((c) => c.id !== clientId))
    }
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Gestión de Clientes</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Nuevo Cliente
        </Button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center w-full max-w-sm space-x-2">
          <Input
            type="text"
            placeholder="Buscar clientes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
          <Button type="submit" variant="ghost">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex space-x-2">
          <Button variant="outline">Exportar</Button>
          <Button variant="outline">Importar</Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Empresa</TableHead>
              <TableHead>Contacto</TableHead>
              <TableHead className="hidden md:table-cell">Industria</TableHead>
              <TableHead className="hidden md:table-cell">Estado</TableHead>
              <TableHead className="hidden md:table-cell">Último Contacto</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredClients.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                    <div>
                      <div>{client.name}</div>
                      <div className="text-xs text-muted-foreground md:hidden">{client.industry}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>{client.contact}</span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <Mail className="h-3 w-3 mr-1" />
                      <span className="truncate max-w-[150px]">{client.email}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">{client.industry}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <Badge className={`${getStatusColor(client.status)} font-normal`}>{client.status}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {new Date(client.lastContact).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <FileEdit className="mr-2 h-4 w-4" />
                        <span>Editar</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FileText className="mr-2 h-4 w-4" />
                        <span>Ver detalles</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Phone className="mr-2 h-4 w-4" />
                        <span>Registrar contacto</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDeleteClient(client.id)}>
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span>Eliminar</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Clientes por Estado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span>Activos</span>
                </div>
                <span className="font-medium">{clients.filter((c) => c.status === "Activo").length}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span>Potenciales</span>
                </div>
                <span className="font-medium">{clients.filter((c) => c.status === "Potencial").length}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
                  <span>Inactivos</span>
                </div>
                <span className="font-medium">{clients.filter((c) => c.status === "Inactivo").length}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Clientes por Industria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {Array.from(new Set(clients.map((c) => c.industry))).map((industry) => (
                <div key={industry} className="flex justify-between items-center">
                  <span>{industry}</span>
                  <span className="font-medium">{clients.filter((c) => c.industry === industry).length}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Actividad Reciente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clients
                .sort((a, b) => new Date(b.lastContact).getTime() - new Date(a.lastContact).getTime())
                .slice(0, 3)
                .map((client) => (
                  <div key={client.id} className="border-b pb-2 last:border-0">
                    <div className="font-medium">{client.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Último contacto: {new Date(client.lastContact).toLocaleDateString()}
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full">
              Ver toda la actividad
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
