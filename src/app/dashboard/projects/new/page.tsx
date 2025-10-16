"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import {
  LucideArrowLeft,
  LucideSave,
  LucideEye,
  LucideImage,
  LucideUpload,
  LucideX,
  LucidePlus,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function NewProject() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [challenge, setChallenge] = useState("");
  const [solution, setSolution] = useState("");
  const [previewMode, setPreviewMode] = useState(false);
  const [category, setCategory] = useState("");
  const [client, setClient] = useState("");
  const [year, setYear] = useState("");
  const [featuredImage, setFeaturedImage] = useState<string | null>(null);
  const [gallery, setGallery] = useState<string[]>([]);
  const [setStatus] = useState("draft");
  const [results, setResults] = useState<
    { metric: string; value: string; description: string }[]
  >([{ metric: "", value: "", description: "" }]);
  const [testimonial, setTestimonial] = useState<{
    quote: string;
    author: string;
    position: string;
  }>({
    quote: "",
    author: "",
    position: "",
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // En una aplicación real, aquí subirías la imagen a un servidor
      // Por ahora, simplemente creamos una URL temporal
      const imageUrl = URL.createObjectURL(file);
      setFeaturedImage(imageUrl);
    }
  };

  const handleGalleryImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // En una aplicación real, aquí subirías la imagen a un servidor
      const imageUrl = URL.createObjectURL(file);
      setGallery([...gallery, imageUrl]);
    }
  };

  const handleRemoveGalleryImage = (index: number) => {
    setGallery(gallery.filter((_, i) => i !== index));
  };

  const handleAddResult = () => {
    setResults([...results, { metric: "", value: "", description: "" }]);
  };

  const handleResultChange = (index: number, field: string, value: string) => {
    const newResults = [...results];
    newResults[index] = { ...newResults[index], [field]: value };
    setResults(newResults);
  };

  const handleRemoveResult = (index: number) => {
    if (results.length > 1) {
      setResults(results.filter((_, i) => i !== index));
    }
  };

  const handleTestimonialChange = (field: string, value: string) => {
    setTestimonial({ ...testimonial, [field]: value });
  };

  const handleSave = (saveStatus: "draft" | "published") => {
    // @ts-expect-error error de tipos
    setStatus(saveStatus);
    // En una aplicación real, aquí guardarías el proyecto en la base de datos
    console.log({
      title,
      subtitle,
      description,
      challenge,
      solution,
      category,
      client,
      year,
      image: featuredImage,
      gallery,
      status: saveStatus,
      results,
      testimonial,
    });
    // Redirigir a la lista de proyectos
    // router.push('/dashboard/projects')
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.03] via-transparent to-primary-700/[0.03] blur-3xl -z-10" />

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/projects"
            className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
          >
            <LucideArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-white">Nuevo proyecto</h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setPreviewMode(!previewMode)}
            className={cn(
              "px-4 py-2 rounded-lg transition-colors flex items-center gap-2",
              previewMode
                ? "bg-primary-500 text-white"
                : "bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.05]"
            )}
          >
            <LucideEye className="w-4 h-4" />
            {previewMode ? "Editando" : "Vista previa"}
          </button>
          <button
            onClick={() => handleSave("draft")}
            className="px-4 py-2 bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors flex items-center gap-2"
          >
            <LucideSave className="w-4 h-4" />
            Guardar borrador
          </button>
          <button
            onClick={() => handleSave("published")}
            className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors flex items-center gap-2"
          >
            Publicar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Editor principal */}
        <div className="lg:col-span-2">
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm mb-6">
            <h3 className="text-lg font-medium text-white mb-4">
              Información básica
            </h3>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-white/60 mb-2"
                >
                  Título del proyecto
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                  placeholder="Nombre del proyecto"
                />
              </div>

              <div>
                <label
                  htmlFor="subtitle"
                  className="block text-sm font-medium text-white/60 mb-2"
                >
                  Subtítulo
                </label>
                <input
                  type="text"
                  id="subtitle"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                  placeholder="Breve descripción del proyecto"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="client"
                    className="block text-sm font-medium text-white/60 mb-2"
                  >
                    Cliente
                  </label>
                  <input
                    type="text"
                    id="client"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                    placeholder="Nombre del cliente"
                  />
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-white/60 mb-2"
                  >
                    Categoría
                  </label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                  >
                    <option value="" disabled>
                      Selecciona una categoría
                    </option>
                    <option value="Mobile App">Aplicación Móvil</option>
                    <option value="Web Platform">Plataforma Web</option>
                    <option value="Dashboard">Dashboard</option>
                    <option value="3D Visualization">Visualización 3D</option>
                    <option value="Data Visualization">
                      Visualización de Datos
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="year"
                    className="block text-sm font-medium text-white/60 mb-2"
                  >
                    Año
                  </label>
                  <input
                    type="text"
                    id="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                    placeholder="Año del proyecto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm mb-6">
            <h3 className="text-lg font-medium text-white mb-4">
              Descripción del proyecto
            </h3>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-white/60 mb-2"
                >
                  Descripción
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 font-mono"
                  placeholder="Descripción detallada del proyecto (soporta Markdown)"
                  rows={6}
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="challenge"
                  className="block text-sm font-medium text-white/60 mb-2"
                >
                  El desafío
                </label>
                <textarea
                  id="challenge"
                  value={challenge}
                  onChange={(e) => setChallenge(e.target.value)}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 font-mono"
                  placeholder="Descripción de los desafíos que enfrentó el cliente (soporta Markdown)"
                  rows={6}
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="solution"
                  className="block text-sm font-medium text-white/60 mb-2"
                >
                  Nuestra solución
                </label>
                <textarea
                  id="solution"
                  value={solution}
                  onChange={(e) => setSolution(e.target.value)}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 font-mono"
                  placeholder="Descripción de la solución implementada (soporta Markdown)"
                  rows={6}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm mb-6">
            <h3 className="text-lg font-medium text-white mb-4">Resultados</h3>

            <div className="space-y-4">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-4 relative"
                >
                  {results.length > 1 && (
                    <button
                      onClick={() => handleRemoveResult(index)}
                      className="absolute top-2 right-2 p-1 rounded-full bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
                    >
                      <LucideX className="w-4 h-4" />
                    </button>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor={`metric-${index}`}
                        className="block text-sm font-medium text-white/60 mb-2"
                      >
                        Métrica
                      </label>
                      <input
                        type="text"
                        id={`metric-${index}`}
                        value={result.metric}
                        onChange={(e) =>
                          handleResultChange(index, "metric", e.target.value)
                        }
                        className="w-full px-3 py-2 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                        placeholder="Ej: Adopción de usuarios"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={`value-${index}`}
                        className="block text-sm font-medium text-white/60 mb-2"
                      >
                        Valor
                      </label>
                      <input
                        type="text"
                        id={`value-${index}`}
                        value={result.value}
                        onChange={(e) =>
                          handleResultChange(index, "value", e.target.value)
                        }
                        className="w-full px-3 py-2 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                        placeholder="Ej: 50,000+"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={`description-${index}`}
                        className="block text-sm font-medium text-white/60 mb-2"
                      >
                        Descripción
                      </label>
                      <input
                        type="text"
                        id={`description-${index}`}
                        value={result.description}
                        onChange={(e) =>
                          handleResultChange(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                        placeholder="Ej: Usuarios activos en los primeros 3 meses"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={handleAddResult}
                className="w-full px-4 py-2 bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <LucidePlus className="w-4 h-4" />
                Añadir resultado
              </button>
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm">
            <h3 className="text-lg font-medium text-white mb-4">Testimonial</h3>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="testimonial-quote"
                  className="block text-sm font-medium text-white/60 mb-2"
                >
                  Cita
                </label>
                <textarea
                  id="testimonial-quote"
                  value={testimonial.quote}
                  onChange={(e) =>
                    handleTestimonialChange("quote", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                  placeholder="Testimonio del cliente"
                  rows={4}
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="testimonial-author"
                    className="block text-sm font-medium text-white/60 mb-2"
                  >
                    Autor
                  </label>
                  <input
                    type="text"
                    id="testimonial-author"
                    value={testimonial.author}
                    onChange={(e) =>
                      handleTestimonialChange("author", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                    placeholder="Nombre del cliente"
                  />
                </div>
                <div>
                  <label
                    htmlFor="testimonial-position"
                    className="block text-sm font-medium text-white/60 mb-2"
                  >
                    Cargo
                  </label>
                  <input
                    type="text"
                    id="testimonial-position"
                    value={testimonial.position}
                    onChange={(e) =>
                      handleTestimonialChange("position", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                    placeholder="Cargo del cliente"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel lateral */}
        <div className="space-y-6">
          {/* Imagen destacada */}
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-lg font-medium text-white mb-4">
              Imagen destacada
            </h2>
            {featuredImage ? (
              <div className="relative">
                <img
                  src={featuredImage || "/placeholder.svg"}
                  alt="Vista previa"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <button
                  onClick={() => setFeaturedImage(null)}
                  className="absolute top-2 right-2 p-1 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <LucideX className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="border-2 border-dashed border-white/[0.08] rounded-lg p-8 text-center">
                <LucideImage className="w-12 h-12 text-white/20 mx-auto mb-4" />
                <p className="text-white/40 mb-4">
                  Sube una imagen destacada para tu proyecto
                </p>
                <label className="px-4 py-2 bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors flex items-center gap-2 justify-center cursor-pointer">
                  <LucideUpload className="w-4 h-4" />
                  Seleccionar imagen
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            )}
          </div>

          {/* Galería de imágenes */}
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-lg font-medium text-white mb-4">
              Galería de imágenes
            </h2>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {gallery.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Galería ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => handleRemoveGalleryImage(index)}
                    className="absolute top-2 right-2 p-1 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <LucideX className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>

            <label className="w-full px-4 py-2 bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors flex items-center gap-2 justify-center cursor-pointer">
              <LucideUpload className="w-4 h-4" />
              Añadir imagen a la galería
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleGalleryImageUpload}
              />
            </label>
          </div>

          {/* Vista previa */}
          {previewMode && (
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-lg font-medium text-white mb-4">
                Vista previa
              </h2>
              <div className="prose prose-invert prose-sm max-w-none">
                <h1>{title || "Título del proyecto"}</h1>
                <p className="lead">{subtitle || "Subtítulo del proyecto"}</p>
                <div>
                  <h2>Descripción</h2>
                  <div>
                    {description
                      ? description
                      : "La descripción del proyecto se mostrará aquí. Escribe algo en el editor para verlo."}
                  </div>

                  <h2>El desafío</h2>
                  <div>
                    {challenge
                      ? challenge
                      : "La descripción del desafío se mostrará aquí. Escribe algo en el editor para verlo."}
                  </div>

                  <h2>Nuestra solución</h2>
                  <div>
                    {solution
                      ? solution
                      : "La descripción de la solución se mostrará aquí. Escribe algo en el editor para verlo."}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
