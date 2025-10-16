"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LucidePlus,
  LucideSearch,
  LucideFilter,
  LucideEye,
  LucidePencil,
  LucideTrash2,
  LucideCalendar,
  LucideUser,
  LucideTag,
  LucideMoreVertical,
  LucideChevronLeft,
  LucideChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
// import EditBlogModal from "@/components/dashboard/edit-blog-modal"

// Datos de ejemplo para los artículos del blog
const blogPosts = [
  {
    id: "1",
    title: "KPIs esenciales para medir el éxito de tu transformación digital",
    excerpt:
      "Descubre los indicadores clave que toda empresa debe monitorear para evaluar el impacto real de sus iniciativas de transformación digital.",
    date: "12 Abr 2025",
    author: "María Rodríguez",
    category: "Transformación Digital",
    status: "published",
    views: 245,
    content: `
      <p>La transformación digital no es solo adoptar nuevas tecnologías; es un cambio fundamental en cómo opera tu negocio y entrega valor a los clientes. Para asegurar que esta transformación sea exitosa, es crucial medir su impacto con los KPIs adecuados.</p>
      
      <h2>¿Por qué son importantes los KPIs en la transformación digital?</h2>
      
      <p>Los KPIs (Key Performance Indicators) proporcionan una forma objetiva de evaluar el progreso y el éxito de tus iniciativas digitales. Sin métricas claras, es imposible determinar si tus esfuerzos están generando resultados positivos o si necesitas ajustar tu estrategia.</p>
      
      <h2>KPIs esenciales para tu transformación digital</h2>
      
      <h3>1. Eficiencia operativa</h3>
      <p>Mide la reducción en tiempo y costos operativos tras la implementación de soluciones digitales:</p>
      <ul>
        <li>Tiempo de ciclo de procesos</li>
        <li>Costo por transacción</li>
        <li>Productividad por empleado</li>
      </ul>
    `,
    tags: ["Transformación Digital", "KPIs", "Estrategia"],
  },
  {
    id: "2",
    title: "Automatización de procesos: Por dónde empezar",
    excerpt:
      "Una guía práctica para identificar qué procesos de tu empresa son candidatos ideales para la automatización y cómo implementarla efectivamente.",
    date: "5 Abr 2025",
    author: "Carlos Méndez",
    category: "Automatización",
    status: "published",
    views: 187,
    content: `
      <p>La automatización de procesos puede transformar radicalmente la eficiencia de tu empresa, pero es importante abordarla de manera estratégica.</p>
      
      <h2>Identificando procesos para automatizar</h2>
      
      <p>No todos los procesos son candidatos ideales para la automatización. Aquí te mostramos cómo identificar los mejores candidatos:</p>
      
      <ul>
        <li>Procesos repetitivos y basados en reglas</li>
        <li>Tareas con alto volumen de transacciones</li>
        <li>Procesos con baja variabilidad</li>
        <li>Actividades propensas a errores humanos</li>
      </ul>
    `,
    tags: ["Automatización", "Procesos", "Eficiencia"],
  },
  {
    id: "3",
    title: "Inteligencia Artificial para PYMEs: Aplicaciones prácticas",
    excerpt:
      "Cómo las pequeñas y medianas empresas pueden aprovechar la IA sin grandes inversiones para mejorar su eficiencia operativa y experiencia del cliente.",
    date: "28 Mar 2025",
    author: "Ana Gómez",
    category: "Inteligencia Artificial",
    status: "published",
    views: 312,
    content: `
      <p>La Inteligencia Artificial no es solo para grandes corporaciones. Las PYMEs también pueden beneficiarse enormemente de estas tecnologías sin necesidad de grandes inversiones.</p>
      
      <h2>Aplicaciones prácticas de IA para PYMEs</h2>
      
      <h3>1. Atención al cliente</h3>
      <p>Los chatbots y asistentes virtuales pueden manejar consultas básicas de clientes, liberando tiempo del personal para tareas más complejas.</p>
      
      <h3>2. Análisis de datos</h3>
      <p>Herramientas de IA pueden ayudar a identificar patrones en datos de ventas, comportamiento de clientes y operaciones.</p>
    `,
    tags: ["Inteligencia Artificial", "PYMEs", "Innovación"],
  },
  {
    id: "4",
    title: "El futuro del trabajo remoto en la era post-pandemia",
    excerpt:
      "Análisis de las tendencias y mejores prácticas para implementar modelos de trabajo híbridos que maximicen la productividad y el bienestar de los empleados.",
    date: "20 Mar 2025",
    author: "Luis Torres",
    category: "Recursos Humanos",
    status: "draft",
    views: 0,
    content: `
      <p>El trabajo remoto llegó para quedarse, pero su implementación efectiva requiere más que simplemente permitir que los empleados trabajen desde casa.</p>
      
      <h2>Modelos híbridos: lo mejor de ambos mundos</h2>
      
      <p>Los modelos híbridos combinan el trabajo presencial y remoto, ofreciendo flexibilidad a los empleados mientras mantienen los beneficios de la colaboración en persona.</p>
      
      <h3>Consideraciones clave:</h3>
      <ul>
        <li>Definir qué roles y tareas se benefician más del trabajo presencial</li>
        <li>Establecer políticas claras sobre días de oficina y expectativas</li>
        <li>Invertir en herramientas de colaboración digital</li>
      </ul>
    `,
    tags: ["Trabajo Remoto", "Recursos Humanos", "Productividad"],
  },
  {
    id: "5",
    title: "Ciberseguridad para empresas: Protegiendo tus activos digitales",
    excerpt:
      "Estrategias esenciales y herramientas para proteger la información sensible de tu empresa contra las amenazas cibernéticas más comunes.",
    date: "15 Mar 2025",
    author: "Javier Sánchez",
    category: "Seguridad",
    status: "draft",
    views: 0,
    content: `
      <p>En la era digital, la ciberseguridad no es opcional. Cada empresa, independientemente de su tamaño, debe proteger sus activos digitales.</p>
      
      <h2>Amenazas comunes y cómo prevenirlas</h2>
      
      <h3>1. Phishing</h3>
      <p>El phishing sigue siendo una de las amenazas más comunes. Educar a los empleados sobre cómo identificar correos electrónicos sospechosos es fundamental.</p>
      
      <h3>2. Ransomware</h3>
      <p>El ransomware puede paralizar completamente las operaciones de una empresa. Las copias de seguridad regulares y los sistemas de detección temprana son esenciales.</p>
    `,
    tags: ["Ciberseguridad", "Protección de Datos", "Amenazas Digitales"],
  },
];

export default function BlogManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [setIsEditModalOpen] = useState(false);
  const [setCurrentBlogPost] = useState(null);
  const [posts, setPosts] = useState(blogPosts);

  // Filtrar los artículos según los criterios de búsqueda y filtros
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || post.status === statusFilter;
    const matchesCategory =
      categoryFilter === "all" || post.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  // @ts-expect-error error de tipos
  const handleEditClick = (post) => {
    // @ts-expect-error error de tipos
    setCurrentBlogPost(post);
    // @ts-expect-error error de tipos
    setIsEditModalOpen(true);
  };
  // const handleSaveBlogPost = (updatedPost) => {
  //   setPosts(
  //     posts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
  //   );
  // };

  const handleDeletePost = (postId: string) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este artículo?")) {
      setPosts(posts.filter((post) => post.id !== postId));
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.03] via-transparent to-primary-700/[0.03] blur-3xl -z-10" />

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-white">Gestión del Blog</h1>
        <Link
          href="/dashboard/blog/new"
          className="inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
        >
          <LucidePlus className="w-4 h-4 mr-2" />
          Nuevo artículo
        </Link>
      </div>

      {/* Filtros y búsqueda */}
      <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <LucideSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar artículos..."
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
              <option value="published">Publicados</option>
              <option value="draft">Borradores</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <LucideTag className="text-white/40 w-4 h-4" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="flex-1 px-3 py-2 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
            >
              <option value="all">Todas las categorías</option>
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
        </div>
      </div>

      {/* Lista de artículos */}
      <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.08]">
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                  Artículo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                  Categoría
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                  Vistas
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.08]">
              {filteredPosts.map((post) => (
                <tr
                  key={post.id}
                  className="hover:bg-white/[0.02] transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-white font-medium">
                        {post.title}
                      </span>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="flex items-center text-white/40 text-xs">
                          <LucideCalendar className="w-3 h-3 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center text-white/40 text-xs">
                          <LucideUser className="w-3 h-3 mr-1" />
                          {post.author}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-500/10 text-primary-300">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={cn(
                        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                        post.status === "published"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-amber-500/10 text-amber-400"
                      )}
                    >
                      {post.status === "published" ? "Publicado" : "Borrador"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-white/60">
                      <LucideEye className="w-4 h-4 mr-1" />
                      {post.views}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEditClick(post)}
                        className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
                        title="Editar"
                      >
                        <LucidePencil className="w-4 h-4" />
                      </button>
                      <Link
                        href={`/blog/${post.id}`}
                        target="_blank"
                        className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
                        title="Ver"
                      >
                        <LucideEye className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="p-1 rounded-lg text-white/60 hover:text-red-400 hover:bg-white/[0.05] transition-colors"
                        title="Eliminar"
                      >
                        <LucideTrash2 className="w-4 h-4" />
                      </button>
                      <div className="relative group">
                        <button className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors">
                          <LucideMoreVertical className="w-4 h-4" />
                        </button>
                        <div className="absolute right-0 mt-2 w-48 py-2 bg-[#0a0a0a] border border-white/[0.08] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                          <button className="flex items-center w-full px-4 py-2 text-left text-white/60 hover:text-white hover:bg-white/[0.03]">
                            Duplicar
                          </button>
                          <button className="flex items-center w-full px-4 py-2 text-left text-white/60 hover:text-white hover:bg-white/[0.03]">
                            Cambiar autor
                          </button>
                          <button className="flex items-center w-full px-4 py-2 text-left text-white/60 hover:text-white hover:bg-white/[0.03]">
                            Programar publicación
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
            Mostrando{" "}
            <span className="font-medium text-white">
              {filteredPosts.length}
            </span>{" "}
            de <span className="font-medium text-white">{posts.length}</span>{" "}
            artículos
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors">
              <LucideChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-500 text-white">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors">
              2
            </button>
            <button className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors">
              <LucideChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal de edición */}
      {/* <EditBlogModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        blogPost={currentBlogPost}
        onSave={handleSaveBlogPost}
      /> */}
    </div>
  );
}
