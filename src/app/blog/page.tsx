import Link from "next/link"
import Image from "next/image"
import { LucideArrowLeft, LucideCalendar, LucideUser } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  author: string
  category: string
}

// En una aplicación real, estos datos vendrían de una API o CMS
const blogPosts: BlogPost[] = [
  {
    id: "implementacion-kpis",
    title: "Implementación efectiva de KPIs en empresas de servicios",
    excerpt:
      "Descubre las mejores prácticas para implementar indicadores clave de desempeño que realmente impulsen el crecimiento de tu empresa.",
    image: "/placeholder.svg?height=400&width=600",
    date: "12 Abr 2025",
    author: "Ana Martínez",
    category: "KPIs",
  },
  {
    id: "transformacion-digital",
    title: "Transformación digital: por dónde empezar",
    excerpt:
      "Una guía paso a paso para iniciar el proceso de transformación digital en tu empresa, independientemente de su tamaño o sector.",
    image: "/placeholder.svg?height=400&width=600",
    date: "5 Abr 2025",
    author: "Carlos Rodríguez",
    category: "Transformación Digital",
  },
  {
    id: "liderazgo-innovacion",
    title: "El papel del liderazgo en la innovación empresarial",
    excerpt:
      "Cómo los líderes pueden fomentar una cultura de innovación y adaptabilidad en sus organizaciones para mantenerse competitivos.",
    image: "/placeholder.svg?height=400&width=600",
    date: "28 Mar 2025",
    author: "Laura Sánchez",
    category: "Liderazgo",
  },
  {
    id: "analisis-datos-empresariales",
    title: "Análisis de datos para decisiones empresariales informadas",
    excerpt: "Cómo utilizar el análisis de datos para tomar decisiones más precisas y estratégicas en tu negocio.",
    image: "/placeholder.svg?height=400&width=600",
    date: "20 Mar 2025",
    author: "Javier Pérez",
    category: "Análisis de Datos",
  },
  {
    id: "automatizacion-procesos",
    title: "Automatización de procesos: optimizando recursos empresariales",
    excerpt:
      "Estrategias para identificar y automatizar procesos repetitivos que consumen tiempo y recursos en tu organización.",
    image: "/placeholder.svg?height=400&width=600",
    date: "15 Mar 2025",
    author: "Marta López",
    category: "Automatización",
  },
  {
    id: "experiencia-cliente-digital",
    title: "Mejorando la experiencia del cliente en la era digital",
    excerpt: "Cómo crear experiencias de cliente excepcionales a través de canales digitales y puntos de contacto.",
    image: "/placeholder.svg?height=400&width=600",
    date: "8 Mar 2025",
    author: "Roberto García",
    category: "Experiencia del Cliente",
  },
]

export default function BlogPage() {
  return (
    <div className="bg-[#030303] min-h-screen">
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.05] via-transparent to-primary-700/[0.05] blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center text-white/60 hover:text-primary-300 transition-colors mb-8"
          >
            <LucideArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>

          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">Nuestro Blog</h1>
            <p className="text-xl text-white/60 mb-12">
              Descubre las últimas tendencias y conocimientos en transformación empresarial y estrategia.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="group">
                  <div className="relative h-48 mb-5 overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-700/20 z-10" />
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                  </div>

                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary-500/10 text-primary-300">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-white/40 text-xs">
                      <LucideCalendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/40 text-xs">
                      <LucideUser className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary-300 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-white/40 mb-4 line-clamp-2">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
