"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  client: string
  date: string
  technologies: string[]
  link?: string
}

interface EditProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
  onSave: (project: Project) => void
}

const categories = [
  "Desarrollo Web",
  "Aplicaciones Móviles",
  "Consultoría Digital",
  "Análisis de Datos",
  "Inteligencia Artificial",
  "Transformación Digital",
]

const EditProjectModal: React.FC<EditProjectModalProps> = ({ project, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState<Project>({
    id: "",
    title: "",
    description: "",
    image: "",
    category: "",
    client: "",
    date: "",
    technologies: [],
    link: "",
  })

  const [techInput, setTechInput] = useState("")

  useEffect(() => {
    if (project) {
      setFormData({
        ...project,
      })
    }
  }, [project])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      category: value,
    }))
  }

  const handleAddTechnology = () => {
    if (techInput.trim() && !formData.technologies.includes(techInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        technologies: [...prev.technologies, techInput.trim()],
      }))
      setTechInput("")
    }
  }

  const handleRemoveTechnology = (tech: string) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((t) => t !== tech),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validación básica
    if (!formData.title || !formData.description || !formData.category) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive",
      })
      return
    }

    onSave(formData)
    toast({
      title: "Proyecto actualizado",
      description: "El proyecto ha sido actualizado exitosamente",
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Editar Proyecto</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Título *</Label>
              <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción *</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">URL de la imagen</Label>
              <Input
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://ejemplo.com/imagen.jpg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Categoría *</Label>
              <Select value={formData.category} onValueChange={handleCategoryChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="client">Cliente</Label>
              <Input id="client" name="client" value={formData.client} onChange={handleChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Fecha</Label>
              <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="link">Enlace del proyecto</Label>
              <Input
                id="link"
                name="link"
                value={formData.link || ""}
                onChange={handleChange}
                placeholder="https://ejemplo.com"
              />
            </div>

            <div className="space-y-2">
              <Label>Tecnologías</Label>
              <div className="flex gap-2">
                <Input
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  placeholder="Añadir tecnología"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      handleAddTechnology()
                    }
                  }}
                />
                <Button type="button" onClick={handleAddTechnology} variant="outline">
                  Añadir
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {formData.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full flex items-center gap-1"
                  >
                    {tech}
                    <button
                      type="button"
                      onClick={() => handleRemoveTechnology(tech)}
                      className="text-secondary-foreground/70 hover:text-secondary-foreground ml-1"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">Guardar cambios</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EditProjectModal
