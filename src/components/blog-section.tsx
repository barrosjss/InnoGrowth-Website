"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { LucideArrowRight, LucideCalendar, LucideUser } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Registrar el plugin de ScrollTrigger para las animaciones de scroll.
gsap.registerPlugin(ScrollTrigger)

interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  author: string
  category: string
}

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
]

/**
 * Componente para mostrar una única tarjeta de artículo del blog.
 * Cada tarjeta gestiona su propia animación de entrada.
 */
function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de entrada para la tarjeta.
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        // El delay se calcula usando el `index` para crear un efecto de cascada.
        delay: 0.2 + index * 0.1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })
    }, cardRef)

    return () => ctx.revert()
  }, [index])

  return (
    <div className="group" ref={cardRef}>
      <Link href={`/blog/${post.id}`} className="block">
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
        <div className="flex items-center text-primary-400 font-medium group-hover:text-primary-300 transition-colors duration-300">
          <span>Leer más</span>
          <LucideArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </div>
  )
}

/**
 * Componente que renderiza la sección completa del "Blog".
 */
export default function BlogSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Contexto de GSAP para la animación de la cabecera de la sección.
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      })

      // Animación escalonada de los elementos de la cabecera.
      tl.from(".blog-title-tag", { opacity: 0, y: 30, duration: 0.8 })
        .from(".blog-title", { opacity: 0, y: 30, duration: 0.8 }, "-=0.6")
        .from(".blog-subtitle", { opacity: 0, y: 30, duration: 0.8 }, "-=0.6")
        .from(".blog-button", { opacity: 0, y: 30, duration: 0.8 }, "-=0.6")

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    // El ID se coloca en el contenedor principal para que el scroll-spy de la navbar lo detecte.
    <div id="blog" className="relative w-full py-24 md:py-32 overflow-hidden bg-[#030303]" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-bl from-primary-500/[0.03] via-transparent to-primary-700/[0.03] blur-3xl" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4 blog-title-tag">
              <span className="text-sm text-white/60 tracking-wide">Blog</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight blog-title">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">Blog</span>
            </h2>

            <p className="text-white/40 max-w-2xl blog-subtitle">
              Descubre las últimas tendencias y conocimientos en transformación empresarial y estrategia.
            </p>
          </div>

          <div className="mt-6 md:mt-0 blog-button">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] text-white font-medium transition-all duration-300"
            >
              Ver todos los artículos
              <LucideArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
