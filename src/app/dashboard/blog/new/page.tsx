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
  LucideCalendar,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function NewBlogPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [previewMode, setPreviewMode] = useState(false);
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [featuredImage, setFeaturedImage] = useState<string | null>(null);
  const [publishDate, setPublishDate] = useState("");
  const [setStatus] = useState("draft");

  const handleAddTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // En una aplicación real, aquí subirías la imagen a un servidor
      // Por ahora, simplemente creamos una URL temporal
      const imageUrl = URL.createObjectURL(file);
      setFeaturedImage(imageUrl);
    }
  };

  const handleSave = (saveStatus: "draft" | "published") => {
    // @ts-expect-error error de tipos
    setStatus(saveStatus);
    // En una aplicación real, aquí guardarías el artículo en la base de datos
    console.log({
      title,
      content,
      category,
      tags,
      featuredImage,
      publishDate,
      status: saveStatus,
    });
    // Redirigir a la lista de artículos
    // router.push('/dashboard/blog')
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.03] via-transparent to-primary-700/[0.03] blur-3xl -z-10" />

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/blog"
            className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
          >
            <LucideArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-white">Nuevo artículo</h1>
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
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm">
            {!previewMode ? (
              <>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Título del artículo"
                  className="w-full px-4 py-3 bg-transparent text-2xl font-bold text-white border-b border-white/[0.08] focus:outline-none focus:border-primary-500 mb-6"
                />

                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Escribe el contenido en Markdown..."
                  className="w-full px-4 py-3 bg-transparent text-white/80 focus:outline-none min-h-[400px] font-mono"
                  rows={20}
                ></textarea>

                <div className="mt-4 text-white/40 text-sm">
                  <p>
                    Usa Markdown para formatear tu contenido. Ejemplos:
                    <br /># Título, ## Subtítulo, **negrita**, *cursiva*,
                    [enlace](url), ![imagen](url)
                  </p>
                </div>
              </>
            ) : (
              <div className="prose prose-invert prose-lg max-w-none">
                <h1>{title || "Título del artículo"}</h1>
                <div>
                  {content
                    ? content
                    : "El contenido del artículo se mostrará aquí. Escribe algo en el editor para verlo."}
                </div>
              </div>
            )}
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
                  Sube una imagen destacada para tu artículo
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

          {/* Categoría y etiquetas */}
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-lg font-medium text-white mb-4">
              Categoría y etiquetas
            </h2>

            <div className="mb-4">
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
                <option value="Transformación Digital">
                  Transformación Digital
                </option>
                <option value="Automatización">Automatización</option>
                <option value="Inteligencia Artificial">
                  Inteligencia Artificial
                </option>
                <option value="Recursos Humanos">Recursos Humanos</option>
                <option value="Seguridad">Seguridad</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="tags"
                className="block text-sm font-medium text-white/60 mb-2"
              >
                Etiquetas
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-500/10 text-primary-300"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="ml-1.5 text-primary-300 hover:text-primary-100"
                    >
                      <LucideX className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex">
                <input
                  type="text"
                  id="tags"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Añadir etiqueta"
                  className="flex-1 px-3 py-2 bg-white/[0.03] border border-white/[0.08] rounded-l-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="px-3 py-2 bg-white/[0.03] border border-white/[0.08] border-l-0 rounded-r-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
                >
                  Añadir
                </button>
              </div>
            </div>
          </div>

          {/* Programación de publicación */}
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-lg font-medium text-white mb-4">
              Programar publicación
            </h2>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <LucideCalendar className="w-4 h-4 text-white/40" />
              </div>
              <input
                type="datetime-local"
                value={publishDate}
                onChange={(e) => setPublishDate(e.target.value)}
                className="w-full pl-10 px-3 py-2 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
              />
            </div>
            <p className="mt-2 text-sm text-white/40">
              Deja en blanco para publicar inmediatamente o selecciona una fecha
              y hora para programar la publicación.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
