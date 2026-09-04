import Link from "next/link"
import { LucideArrowRight, LucideGraduationCap } from "lucide-react"

/**
 * Banner de la home que enlaza al curso AI Power Worker Pro.
 * Se ubica después de la sección de Proyectos para no competir con el
 * mensaje principal de consultoría, pero mantener la landing accesible
 * en ≤2 clics desde el inicio.
 */
export default function CourseCtaSection() {
  return (
    <div className="relative w-full py-16 md:py-20 bg-[#030303] border-y border-white/[0.08] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/[0.08] via-transparent to-primary-700/[0.08]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-6">
            <LucideGraduationCap className="w-4 h-4" />
            Nuevo curso de InnoGrowth
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            AI Power Worker Pro: aumente su productividad x5 con IA
          </h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Curso práctico de ChatGPT, Claude, Gemini, Microsoft Copilot y Google AI Studio. 3 domingos, $200.000 COP,
            cupos limitados.
          </p>
          <Link
            href="/cursos/ai-power-worker-pro"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 text-sm font-medium transition-colors"
          >
            Conocer el curso <LucideArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
