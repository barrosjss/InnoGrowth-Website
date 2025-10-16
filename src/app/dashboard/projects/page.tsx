"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, FileEdit, Trash2, Download, Eye } from "lucide-react";
// import EditProjectModal from "@/components/dashboard/edit-project-modal"

// Datos de ejemplo para proyectos
const projectsData = [
  {
    id: "1",
    title: "Transformación Digital para Retail",
    description:
      "Implementación de soluciones digitales para mejorar la experiencia del cliente y optimizar operaciones.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Transformación Digital",
    client: "MegaRetail S.A.",
    date: "2023-05-15",
    technologies: ["React", "Node.js", "AWS", "Analytics"],
    link: "https://ejemplo.com/proyecto1",
  },
  {
    id: "2",
    title: "Plataforma de Análisis Predictivo",
    description:
      "Desarrollo de una plataforma que utiliza IA para predecir tendencias de mercado y comportamiento de consumidores.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Inteligencia Artificial",
    client: "DataInsights Corp",
    date: "2023-03-10",
    technologies: ["Python", "TensorFlow", "Google Cloud", "BigQuery"],
    link: "https://ejemplo.com/proyecto2",
  },
  {
    id: "3",
    title: "App Móvil para Gestión Logística",
    description:
      "Aplicación móvil que optimiza rutas de entrega y gestiona inventario en tiempo real.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Aplicaciones Móviles",
    client: "LogisTech Inc.",
    date: "2023-01-20",
    technologies: ["React Native", "Firebase", "Google Maps API", "Redux"],
    link: "https://ejemplo.com/proyecto3",
  },
];

export default function ProjectsPage() {
  const [setSelectedProject] = React.useState(null);
  const [setIsEditModalOpen] = React.useState(false);
  const [projects, setProjects] = React.useState(projectsData);

  // @ts-expect-error error de tipos
  const handleEditProject = (project) => {
    // @ts-expect-error error de tipos
    setSelectedProject(project);
    // @ts-expect-error error de tipos
    setIsEditModalOpen(true);
  };

  // const handleSaveProject = (updatedProject) => {
  //   setProjects(
  //     projects.map((p) => (p.id === updatedProject.id ? updatedProject : p))
  //   );
  //   // @ts-expect-error error de tipos
  //   setIsEditModalOpen(false);
  // };

  const handleDeleteProject = (projectId: string) => {
    if (confirm("¿Estás seguro de que deseas eliminar este proyecto?")) {
      setProjects(projects.filter((p) => p.id !== projectId));
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Gestión de Proyectos</h1>
        <Link href="/dashboard/projects/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nuevo Proyecto
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="web">Desarrollo Web</TabsTrigger>
          <TabsTrigger value="mobile">Aplicaciones Móviles</TabsTrigger>
          <TabsTrigger value="ai">Inteligencia Artificial</TabsTrigger>
          <TabsTrigger value="digital">Transformación Digital</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground mt-1">
                        Cliente: {project.client}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">Tecnologías:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditProject(project)}
                    >
                      <FileEdit className="h-4 w-4 mr-1" />
                      Editar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteProject(project.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Eliminar
                    </Button>
                  </div>
                  <div className="flex space-x-2">
                    <Link href={`/projects/${project.id}`} target="_blank">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Ver
                      </Button>
                    </Link>
                    <Link href={`/dashboard/projects/${project.id}/download`}>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        PDF
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Contenido filtrado para cada categoría */}
        <TabsContent value="web" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => project.category === "Desarrollo Web")
              .map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden flex flex-col"
                >
                  {/* Contenido similar al de "all" pero filtrado */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground mt-1">
                          Cliente: {project.client}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mt-4">
                      <p className="text-sm font-medium mb-2">Tecnologías:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditProject(project)}
                      >
                        <FileEdit className="h-4 w-4 mr-1" />
                        Editar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteProject(project.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Eliminar
                      </Button>
                    </div>
                    <div className="flex space-x-2">
                      <Link href={`/projects/${project.id}`} target="_blank">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          Ver
                        </Button>
                      </Link>
                      <Link href={`/dashboard/projects/${project.id}/download`}>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          PDF
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        {/* Repetir para otras categorías */}
        <TabsContent value="mobile" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => project.category === "Aplicaciones Móviles")
              .map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden flex flex-col"
                >
                  {/* Contenido similar al de "all" pero filtrado */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground mt-1">
                          Cliente: {project.client}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mt-4">
                      <p className="text-sm font-medium mb-2">Tecnologías:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditProject(project)}
                      >
                        <FileEdit className="h-4 w-4 mr-1" />
                        Editar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteProject(project.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Eliminar
                      </Button>
                    </div>
                    <div className="flex space-x-2">
                      <Link href={`/projects/${project.id}`} target="_blank">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          Ver
                        </Button>
                      </Link>
                      <Link href={`/dashboard/projects/${project.id}/download`}>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          PDF
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="ai" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(
                (project) => project.category === "Inteligencia Artificial"
              )
              .map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden flex flex-col"
                >
                  {/* Contenido similar al de "all" pero filtrado */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground mt-1">
                          Cliente: {project.client}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mt-4">
                      <p className="text-sm font-medium mb-2">Tecnologías:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditProject(project)}
                      >
                        <FileEdit className="h-4 w-4 mr-1" />
                        Editar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteProject(project.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Eliminar
                      </Button>
                    </div>
                    <div className="flex space-x-2">
                      <Link href={`/projects/${project.id}`} target="_blank">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          Ver
                        </Button>
                      </Link>
                      <Link href={`/dashboard/projects/${project.id}/download`}>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          PDF
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="digital" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(
                (project) => project.category === "Transformación Digital"
              )
              .map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden flex flex-col"
                >
                  {/* Contenido similar al de "all" pero filtrado */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground mt-1">
                          Cliente: {project.client}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mt-4">
                      <p className="text-sm font-medium mb-2">Tecnologías:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditProject(project)}
                      >
                        <FileEdit className="h-4 w-4 mr-1" />
                        Editar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteProject(project.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Eliminar
                      </Button>
                    </div>
                    <div className="flex space-x-2">
                      <Link href={`/projects/${project.id}`} target="_blank">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          Ver
                        </Button>
                      </Link>
                      <Link href={`/dashboard/projects/${project.id}/download`}>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          PDF
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Modal de edición */}
      {/* <EditProjectModal
        project={selectedProject}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveProject}
      /> */}
    </div>
  );
}
