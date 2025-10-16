import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import BlogCTA from "@/components/blog-cta"

// En una aplicación real, estos datos vendrían de una API o CMS
const blogPosts = {
  "implementacion-kpis": {
    title: "Implementación efectiva de KPIs en empresas de servicios",
    excerpt:
      "Descubre las mejores prácticas para implementar indicadores clave de desempeño que realmente impulsen el crecimiento de tu empresa.",
    content: `
      <p>Los Indicadores Clave de Desempeño (KPIs) son métricas fundamentales que permiten a las empresas evaluar su progreso hacia objetivos específicos. Sin embargo, muchas organizaciones enfrentan desafíos significativos al implementarlos de manera efectiva, especialmente en el sector de servicios donde los resultados pueden ser menos tangibles.</p>
      
      <h2>¿Por qué son importantes los KPIs?</h2>
      
      <p>Los KPIs proporcionan una forma objetiva de medir el rendimiento, permitiendo a las empresas:</p>
      
      <ul>
        <li>Evaluar el progreso hacia objetivos estratégicos</li>
        <li>Identificar áreas de mejora</li>
        <li>Tomar decisiones basadas en datos</li>
        <li>Alinear los esfuerzos de los equipos con las metas organizacionales</li>
        <li>Mejorar la comunicación interna sobre prioridades</li>
      </ul>
      
      <h2>Errores comunes en la implementación de KPIs</h2>
      
      <p>Muchas empresas cometen errores que reducen la efectividad de sus KPIs:</p>
      
      <ol>
        <li><strong>Seleccionar demasiados indicadores:</strong> El exceso de KPIs diluye el enfoque y dificulta la priorización.</li>
        <li><strong>Elegir métricas incorrectas:</strong> No todas las métricas son relevantes para todos los negocios o departamentos.</li>
        <li><strong>Falta de alineación con objetivos estratégicos:</strong> Los KPIs deben reflejar directamente las metas de la organización.</li>
        <li><strong>Ausencia de contexto:</strong> Los números sin contexto pueden llevar a interpretaciones erróneas.</li>
        <li><strong>Falta de seguimiento consistente:</strong> La medición esporádica reduce la utilidad de los KPIs.</li>
      </ol>
      
      <h2>Mejores prácticas para implementar KPIs efectivos</h2>
      
      <h3>1. Alinear KPIs con objetivos estratégicos</h3>
      
      <p>Cada KPI debe estar directamente vinculado a un objetivo estratégico específico. Pregúntese: "¿Cómo contribuye esta métrica a nuestra visión y misión?"</p>
      
      <h3>2. Limitar el número de KPIs</h3>
      
      <p>Recomendamos entre 5-7 KPIs por departamento o área funcional. Esto permite un enfoque claro sin sobrecarga de información.</p>
      
      <h3>3. Equilibrar indicadores adelantados y retrasados</h3>
      
      <p>Los indicadores retrasados miden resultados pasados (como ingresos), mientras que los adelantados predicen resultados futuros (como leads generados). Una combinación equilibrada proporciona una visión completa.</p>
      
      <h3>4. Establecer procesos de recopilación de datos</h3>
      
      <p>Defina claramente cómo, cuándo y quién recopilará los datos necesarios para cada KPI. La automatización puede reducir errores y ahorrar tiempo.</p>
      
      <h3>5. Crear dashboards accesibles</h3>
      
      <p>Los KPIs deben ser visibles para quienes necesitan tomar decisiones basadas en ellos. Las visualizaciones claras facilitan la comprensión rápida.</p>
      
      <h3>6. Revisar y ajustar regularmente</h3>
      
      <p>Los KPIs no son estáticos. Revíselos trimestralmente para asegurarse de que siguen siendo relevantes para sus objetivos actuales.</p>
      
      <h2>Caso de estudio: Transformación basada en KPIs</h2>
      
      <p>Una empresa de consultoría de tamaño medio implementó un sistema de KPIs siguiendo estas mejores prácticas. En seis meses, lograron:</p>
      
      <ul>
        <li>Incremento del 23% en la retención de clientes</li>
        <li>Reducción del 15% en el tiempo de entrega de proyectos</li>
        <li>Aumento del 18% en la satisfacción del cliente</li>
        <li>Mejora del 12% en la rentabilidad por proyecto</li>
      </ul>
      
      <h2>Conclusión</h2>
      
      <p>La implementación efectiva de KPIs no es simplemente una cuestión de elegir métricas, sino de crear un sistema integrado que impulse la toma de decisiones y el mejoramiento continuo. Al seguir estas mejores prácticas, las empresas de servicios pueden transformar sus operaciones y lograr resultados medibles y sostenibles.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "12 Abr 2025",
    author: "Ana Martínez",
    category: "KPIs",
    readTime: "8 min",
    tags: ["KPIs", "Estrategia", "Gestión Empresarial", "Análisis de Datos"],
  },
  "transformacion-digital": {
    title: "Transformación digital: por dónde empezar",
    excerpt:
      "Una guía paso a paso para iniciar el proceso de transformación digital en tu empresa, independientemente de su tamaño o sector.",
    content: `
      <p>La transformación digital se ha convertido en un imperativo para las empresas de todos los tamaños y sectores. Sin embargo, muchas organizaciones se sienten abrumadas al enfrentar este proceso, sin saber exactamente por dónde comenzar o cómo estructurar su viaje de transformación.</p>
      
      <h2>¿Qué es realmente la transformación digital?</h2>
      
      <p>Antes de comenzar, es importante entender que la transformación digital no se trata solo de implementar nuevas tecnologías. Es un cambio fundamental en cómo opera una empresa y cómo entrega valor a sus clientes, aprovechando las tecnologías digitales para mejorar procesos, cultura, experiencia del cliente y propuestas de valor.</p>
      
      <h2>Fase 1: Evaluación y planificación</h2>
      
      <h3>Paso 1: Evalúa tu situación actual</h3>
      
      <p>Comienza con un diagnóstico honesto de tu empresa:</p>
      
      <ul>
        <li>¿Qué procesos son manuales y podrían digitalizarse?</li>
        <li>¿Dónde están los cuellos de botella operativos?</li>
        <li>¿Qué tecnologías utilizas actualmente y cuán efectivas son?</li>
        <li>¿Cuál es el nivel de alfabetización digital de tu equipo?</li>
        <li>¿Cómo se compara tu empresa con los competidores en términos digitales?</li>
      </ul>
      
      <h3>Paso 2: Define objetivos claros</h3>
      
      <p>Establece metas específicas, medibles y con plazos definidos. Por ejemplo:</p>
      
      <ul>
        <li>Reducir el tiempo de procesamiento de pedidos en un 30% en 6 meses</li>
        <li>Aumentar las ventas en línea en un 25% en el próximo año</li>
        <li>Mejorar la satisfacción del cliente en un 20% en 9 meses</li>
      </ul>
      
      <h3>Paso 3: Identifica prioridades</h3>
      
      <p>No todo puede (ni debe) transformarse a la vez. Prioriza iniciativas basándote en:</p>
      
      <ul>
        <li>Impacto potencial en el negocio</li>
        <li>Facilidad de implementación</li>
        <li>Recursos necesarios</li>
        <li>Alineación con objetivos estratégicos</li>
      </ul>
      
      <h2>Fase 2: Creación de bases sólidas</h2>
      
      <h3>Paso 4: Desarrolla la infraestructura tecnológica necesaria</h3>
      
      <p>Asegúrate de contar con los fundamentos tecnológicos adecuados:</p>
      
      <ul>
        <li>Conectividad confiable</li>
        <li>Sistemas de almacenamiento y gestión de datos</li>
        <li>Herramientas de colaboración</li>
        <li>Seguridad informática robusta</li>
      </ul>
      
      <h3>Paso 5: Fomenta una cultura digital</h3>
      
      <p>La tecnología por sí sola no garantiza el éxito. Es crucial desarrollar una cultura organizacional que abrace el cambio digital:</p>
      
      <ul>
        <li>Promueve la mentalidad de experimentación y aprendizaje continuo</li>
        <li>Capacita a tu personal en habilidades digitales relevantes</li>
        <li>Comunica claramente la visión y los beneficios de la transformación</li>
        <li>Reconoce y celebra los éxitos tempranos</li>
      </ul>
      
      <h2>Fase 3: Implementación estratégica</h2>
      
      <h3>Paso 6: Comienza con proyectos piloto</h3>
      
      <p>Inicia con iniciativas pequeñas pero impactantes que puedan mostrar resultados rápidos:</p>
      
      <ul>
        <li>Automatización de procesos repetitivos</li>
        <li>Implementación de herramientas de análisis de datos básicas</li>
        <li>Mejora de canales digitales de atención al cliente</li>
      </ul>
      
      <h3>Paso 7: Escala gradualmente</h3>
      
      <p>A medida que obtengas resultados positivos y aprendas de los desafíos, expande tus iniciativas digitales de manera sistemática.</p>
      
      <h2>Fase 4: Medición y optimización</h2>
      
      <h3>Paso 8: Establece métricas de éxito</h3>
      
      <p>Define KPIs claros para medir el progreso de tu transformación digital, como:</p>
      
      <ul>
        <li>Eficiencia operativa</li>
        <li>Experiencia del cliente</li>
        <li>Adopción de nuevas tecnologías</li>
        <li>Retorno de inversión digital</li>
      </ul>
      
      <h3>Paso 9: Itera y mejora continuamente</h3>
      
      <p>La transformación digital no es un destino, sino un viaje continuo. Revisa regularmente tus iniciativas, aprende de los resultados y ajusta tu estrategia según sea necesario.</p>
      
      <h2>Conclusión</h2>
      
      <p>Iniciar el camino de la transformación digital puede parecer abrumador, pero con un enfoque estructurado y gradual, cualquier empresa puede avanzar significativamente. Lo más importante es comenzar, aprender de cada paso y mantener el enfoque en crear valor real para clientes y empleados a través de la tecnología.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "5 Abr 2025",
    author: "Carlos Rodríguez",
    category: "Transformación Digital",
    readTime: "10 min",
    tags: ["Transformación Digital", "Estrategia", "Innovación", "Tecnología"],
  },
  // Otros posts...
}

export default function BlogPostDetail({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center">Artículo no encontrado</div>
  }

  return (
    <div className="bg-[#030303] min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-white/60 hover:text-primary-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al blog
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary-500/10 text-primary-300 mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-white/60">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {post.readTime} de lectura
              </div>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[500px] mb-12 overflow-hidden rounded-xl">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          <div
            className="prose prose-invert prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/70"
              >
                #{tag}
              </span>
            ))}
          </div>

          <BlogCTA />
        </div>
      </div>
    </div>
  )
}
