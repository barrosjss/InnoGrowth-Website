"use client";

import { useEffect, useRef } from "react";
import { Pacifico } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { LucideLinkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DannaDiaz from "@/assets/img/Danna.jpg";
import Luis from "@/assets/img/luisInow.png";
import Jesus from "@/assets/img/JesusInow.png";
import Dana from "@/assets/img/DanaInow.png";
import Einer from "@/assets/img/Einer.jpg";

// Registrar el plugin de ScrollTrigger para las animaciones de scroll.
gsap.registerPlugin(ScrollTrigger);

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string | StaticImageData;
  index: number;
  link: string;
}

/**
 * Componente para mostrar la tarjeta de un único miembro del equipo.
 * Cada tarjeta autogestiona su animación de entrada.
 */
function TeamMember({ name, role, bio, image, index, link }: TeamMemberProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de entrada para la tarjeta.
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        // El `delay` se calcula usando el `index` del miembro en el array.
        // Esto crea un efecto de cascada: cada tarjeta aparece un poco después de la anterior.
        delay: 0.1 * index,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, cardRef);
    return () => ctx.revert();
  }, [index]); // El `index` se añade como dependencia por si el orden cambiara dinámicamente.

  return (
    <div className="group" ref={cardRef}>
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary-900/30 to-primary-800/30 mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-700/10 z-10" />

        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />

        <div className="absolute bottom-4 right-4 z-20">
          <Link href={link} target="_blank">
            <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <LucideLinkedin className="w-5 h-5 text-white" />
            </div>
          </Link>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-primary-300 mb-3">{role}</p>
      <p className="text-white/40 leading-relaxed">{bio}</p>
    </div>
  );
}

/**
 * Componente que renderiza la sección completa del "Equipo",
 * incluyendo una cabecera y una parrilla de tarjetas `TeamMember`.
 */
export default function TeamSection() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Contexto de GSAP para la animación de la cabecera.
    const ctx = gsap.context(() => {
      // Timeline para animar los elementos de la cabecera en secuencia.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      // Animación escalonada para el tag, el título y el subtítulo.
      tl.from(".team-title-tag", { opacity: 0, y: 30, duration: 0.8 })
        .from(".team-title", { opacity: 0, y: 30, duration: 0.8 }, "-=0.6")
        .from(".team-subtitle", { opacity: 0, y: 30, duration: 0.8 }, "-=0.6");
    }, headerRef);
    return () => ctx.revert();
  }, []);

  const team = [
    {
      name: "Luis Carlos Acosta Fontalvo",
      role: "CEO",
      bio: "Más de 15 años de experiencia en consultoría estratégica y transformación digital para empresas Fortune 500.",
      image: Luis,
      link: "https://www.linkedin.com/in/luis-carlos-acosta-fontalvo-3a254043/",
    },
    {
      name: "Jesús Barros Bolivar",
      role: "COO",
      bio: "Especialista en implementación de KPIs y optimización de procesos con enfoque en resultados medibles.",
      image: Jesus,
      link: "https://www.linkedin.com/in/barrosjesus/",
    },
    {
      name: "Einer Fritz Pizarro",
      role: "CFO",
      bio: "Experta en tecnologías emergentes y su aplicación para la modernización de modelos de negocio.",
      image: Einer,
      link: "https://www.linkedin.com/in/einer-fritz/",
    },
    {
      name: "Danna Diaz",
      role: "CMO",
      bio: "Especializado en desarrollo organizacional y gestión del cambio para empresas en crecimiento.",
      image: DannaDiaz,
      link: "https://www.linkedin.com/in/danna-diaz-33baa6262/",
    },
    {
      name: "Dana Barros Bolivar",
      role: "Directora Creativa",
      bio: "Experta en análisis de datos y diseño de dashboards para la toma de decisiones estratégicas.",
      image: Dana,
      link: "https://www.linkedin.com/in/dana-cecilia-barros-bolivar-39225a255/",
    },
  ];

  return (
    <div
      className="relative w-full py-24 md:py-32 overflow-hidden bg-[#030303]"
      id="team"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700/[0.03] via-transparent to-primary-500/[0.03] blur-3xl" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20" ref={headerRef}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4 team-title-tag">
            <span className="text-sm text-white/60 tracking-wide">Equipo</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight team-title">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Nuestra
            </span>
            <span
              className={cn(
                "ml-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 via-white/90 to-primary-500",
                pacifico.className
              )}
            >
              Gente
            </span>
          </h2>

          <p className="text-white/40 max-w-2xl mx-auto team-subtitle">
            Conoce al equipo de profesionales que hacen posible la
            transformación de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              link={member.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
