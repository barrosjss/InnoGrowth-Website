import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  FileText,
  BarChart3,
  Presentation,
  Mail,
  Search,
  Wand2,
  Repeat,
  Brain,
  Workflow,
  Gift,
  Calendar,
  Clock,
  Users,
  Award,
  GraduationCap,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Luis from "@/assets/img/luisInow.png";

const UTM_BASE = "utm_source=landing&utm_medium=cta&utm_campaign=ai-power-worker-pro";

type CtaContent = "hero" | "precio" | "footer" | "sticky";

function formUrl(content: CtaContent) {
  return `https://forms.gle/sBG1F2CK1yj6NwNs7?${UTM_BASE}&utm_content=${content}`;
}

function whatsappUrl(content: CtaContent) {
  return `https://wa.me/573004986307?text=QUIERO%20IA&${UTM_BASE}&utm_content=${content}`;
}

export const metadata: Metadata = {
  title: "AI Power Worker Pro — Curso de IA para productividad | InnoGrowth",
  description:
    "Aumente su productividad x5 con IA. Curso práctico de ChatGPT, Claude, Gemini, Microsoft Copilot y Google AI Studio. 3 domingos, $200.000 COP. Cupos limitados.",
  openGraph: {
    title: "AI Power Worker Pro — Curso de IA para productividad",
    description:
      "Domine las mejores herramientas de IA en 3 domingos. Certificado, plantillas y biblioteca de 50 prompts incluidos.",
    url: "https://www.innogrowth.co/cursos/ai-power-worker-pro",
    siteName: "InnoGrowth",
    type: "website",
  },
};

const tools = [
  { name: "ChatGPT" },
  { name: "Claude" },
  { name: "Gemini" },
  { name: "Microsoft Copilot" },
  { name: "Google AI Studio" },
];

const capabilities = [
  { icon: FileText, text: "Crear informes y documentos profesionales" },
  { icon: BarChart3, text: "Analizar información y grandes volúmenes de datos" },
  { icon: Presentation, text: "Crear presentaciones en minutos" },
  { icon: Mail, text: "Mejorar correos y comunicaciones" },
  { icon: Search, text: "Investigar y sintetizar información" },
  { icon: Wand2, text: "Crear prompts profesionales" },
  { icon: Repeat, text: "Automatizar tareas repetitivas" },
  { icon: Brain, text: "Usar IA para análisis y toma de decisiones" },
  { icon: Workflow, text: "Incorporar IA a procesos de trabajo" },
];

const bonuses = [
  "Biblioteca de 50 prompts profesionales",
  "Plantillas listas para usar",
  "Casos empresariales reales",
  "Guías prácticas paso a paso",
  "Certificado de participación",
];

const audience = [
  "Profesionales",
  "Ingenieros",
  "Administradores",
  "Docentes",
  "Estudiantes",
  "Emprendedores",
  "Analistas",
  "Empresarios",
];

const faqs = [
  {
    q: "¿Necesito experiencia previa con inteligencia artificial?",
    a: "No. AI Power Worker Pro está diseñado para llevarlo de cero a un uso práctico y profesional de las principales herramientas de IA, sin necesidad de conocimientos técnicos previos.",
  },
  {
    q: "¿Cuándo y dónde se dicta el curso?",
    a: "Se dicta en 3 domingos consecutivos, de 8:00 a.m. a 12:00 p.m. El enlace o la sede se confirman al inscribirse.",
  },
  {
    q: "¿Cuál es el costo del curso?",
    a: "El valor del curso es de $200.000 COP e incluye todos los bonos: biblioteca de prompts, plantillas, casos empresariales, guías prácticas y certificado.",
  },
  {
    q: "¿Qué herramientas de IA se usan durante el curso?",
    a: "Trabajamos con ChatGPT, Claude, Gemini, Microsoft Copilot y Google AI Studio, las herramientas más usadas hoy en entornos profesionales.",
  },
  {
    q: "¿Recibo algún certificado al finalizar?",
    a: "Sí. Todos los participantes que completan las 3 sesiones reciben un certificado de participación de InnoGrowth.",
  },
  {
    q: "¿Cómo me inscribo?",
    a: "Puede inscribirse directamente por el formulario de inscripción o escribirnos por WhatsApp con el mensaje \"QUIERO IA\" y le confirmamos el cupo.",
  },
];

export default function AIPowerWorkerProPage() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Hero */}
      <section className="relative py-16 md:py-28 overflow-hidden bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/10 border-primary/20">
              <GraduationCap className="h-4 w-4 mr-1" />
              Curso práctico de IA para productividad laboral
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-700">
              Aumente su productividad x5 con IA
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              Domine las mejores herramientas de inteligencia artificial
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              AI Power Worker Pro es el curso práctico de InnoGrowth para aplicar IA en su trabajo diario: 3 domingos, cupos limitados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={formUrl("hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2 gap-2"
              >
                Inscribirme ahora <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={whatsappUrl("hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border-2 border-primary bg-transparent text-primary hover:bg-primary/10 h-11 px-8 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 gap-2"
              >
                <MessageCircle className="h-4 w-4" /> Escribir QUIERO IA
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" /> 3 domingos
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> 8:00 a.m. – 12:00 p.m.
              </span>
              <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                $200.000 COP
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Herramientas */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Herramientas que va a dominar</h2>
            <p className="text-lg text-muted-foreground">
              Trabajamos con las plataformas de IA más usadas en entornos profesionales hoy.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {tools.map((tool) => (
              <Card
                key={tool.name}
                className="p-6 text-center flex items-center justify-center min-h-[96px] hover:shadow-lg transition-shadow"
              >
                <span className="font-semibold">{tool.name}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Qué podrás hacer */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Qué podrá hacer al terminar el curso</h2>
            <p className="text-lg text-muted-foreground">
              Habilidades prácticas que puede aplicar desde la primera sesión.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm md:text-base">{item.text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bonos */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Gift className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bonos incluidos</h2>
            <p className="text-lg text-muted-foreground">
              Todo esto está incluido en el valor del curso, sin costo adicional.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {bonuses.map((bonus) => (
              <div key={bonus} className="flex items-center gap-3 bg-background rounded-xl p-4 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{bonus}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-8 bg-muted/50 rounded-2xl p-8">
              <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-primary/20">
                <Image src={Luis} alt="Luis Carlos Acosta Fontalvo" fill className="object-cover" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm font-medium text-primary mb-1">Su instructor</p>
                <h3 className="text-2xl font-bold mb-2">Luis Carlos Acosta Fontalvo</h3>
                <p className="text-muted-foreground">
                  Más de 15 años de experiencia en consultoría estratégica y transformación digital para empresas
                  Fortune 500. Lidera la implementación práctica de IA en InnoGrowth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horario y precio */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Horario y precio</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
              <p className="text-sm text-muted-foreground mb-1">Duración</p>
              <p className="text-lg font-semibold">3 domingos</p>
            </Card>
            <Card className="p-8 text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
              <p className="text-sm text-muted-foreground mb-1">Horario</p>
              <p className="text-lg font-semibold">8:00 a.m. – 12:00 p.m.</p>
            </Card>
            <Card className="p-8 text-center border-primary/40">
              <Award className="h-8 w-8 text-primary mx-auto mb-4" />
              <p className="text-sm text-muted-foreground mb-1">Inversión</p>
              <p className="text-lg font-semibold">$200.000 COP</p>
            </Card>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={formUrl("precio")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2 gap-2"
            >
              Reservar mi cupo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={whatsappUrl("precio")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border-2 border-primary bg-transparent text-primary hover:bg-primary/10 h-11 px-8 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 gap-2"
            >
              <MessageCircle className="h-4 w-4" /> Preguntar por WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* Para quién */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Users className="h-8 w-8 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Para quién es este curso?</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {audience.map((item) => (
              <Badge key={item} variant="secondary" className="text-sm px-4 py-2">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas frecuentes</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-background rounded-xl p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer font-semibold list-none">
                  {faq.q}
                  <Sparkles className="h-4 w-4 text-primary flex-shrink-0 transition-transform group-open:rotate-45" />
                </summary>
                <p className="text-muted-foreground mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para aumentar su productividad con IA?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Cupos limitados por grupo. Inscríbase o escríbanos por WhatsApp para resolver sus dudas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={formUrl("footer")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-white text-primary-700 hover:bg-gray-100 h-11 px-8 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 gap-2"
            >
              Inscribirme ahora <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={whatsappUrl("footer")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border-2 border-white bg-transparent text-white hover:bg-white/10 h-11 px-8 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 gap-2"
            >
              <MessageCircle className="h-4 w-4" /> Escribir QUIERO IA
            </Link>
          </div>
        </div>
      </section>

      {/* CTA sticky mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur border-t border-border p-3 flex gap-2">
        <Link
          href={formUrl("sticky")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-4 gap-2"
        >
          Inscribirme
        </Link>
        <Link
          href={whatsappUrl("sticky")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center rounded-md border-2 border-primary text-primary h-11 px-4 text-sm font-medium gap-2"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </Link>
      </div>
    </div>
  );
}
