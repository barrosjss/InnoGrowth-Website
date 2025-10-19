"use client"

import { useRef, useEffect } from "react"
import { Pacifico } from "next/font/google"
import Image from "next/image"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { LucideSparkles, LucideMoveRight } from "lucide-react"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

/**
 * Componente para renderizar un orbe de gradiente flotante y animado.
 * Se usa como un elemento decorativo en el fondo del Hero.
 */
function FloatingGradientOrb({
  className,
  size = 10,
  color = "from-indigo-500/20",
  delay = 1,
}: {
  className?: string
  size?: number
  color?: string
  delay?: number
}) {
  const orbRef = useRef<HTMLDivElement>(null)
  const innerOrbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Usamos gsap.context para una gestión segura de las animaciones y su limpieza
    const ctx = gsap.context(() => {
      // Animación de aparición (fade in)
      gsap.fromTo(orbRef.current, 
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: 2, 
          delay: delay,
          ease: "power2.inOut"
        }
      );

      // Animación de flotación continua y aleatoria
      if (innerOrbRef.current) {
        const randomX = 20 + Math.random() * 20;
        const randomY = 10 + Math.random() * 10;
        const duration = 8 + Math.random() * 5;
        
        gsap.to(innerOrbRef.current, {
          x: randomX,
          y: randomY,
          duration: duration,
          repeat: -1, // Repetir infinitamente
          yoyo: true, // Ir y volver
          ease: "sine.inOut",
          delay: Math.random() * 2,
        });
      }
    });

    // Función de limpieza: revierte todas las animaciones de este contexto
    return () => ctx.revert();
  }, [delay]);

  return (
    <div 
      ref={orbRef}
      className={cn("absolute rounded-full blur-3xl opacity-0", className)}
      style={{ width: size, height: size }}
    >
      <div 
        ref={innerOrbRef}
        className={cn("w-full h-full rounded-full bg-gradient-to-br to-transparent", color)}
      />
    </div>
  );
}

/**
 * Componente principal del Hero. 
 * Muestra el título, subtítulo y CTAs, y contiene complejas animaciones de fondo y efectos interactivos.
 */
export default function HeroGeometric() {
  // --- Refs para Elementos DOM ---
  // Se usan para dar a GSAP un objetivo directo para las animaciones.
  const heroRef = useRef<HTMLDivElement>(null); // Contenedor principal
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null); // Contenedor de botones (corregido de HTMLButtonElement)
  const badgeRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null); // Logo de fondo
  const svgRef = useRef<SVGSVGElement>(null); // SVG de fondo

  // --- Efecto Principal para Animaciones e Interacciones ---
  useEffect(() => {
    // gsap.context() es la forma moderna y segura de gestionar animaciones en React.
    // Agrupa todas las animaciones y facilita su limpieza (cleanup) cuando el componente se desmonta.
    const ctx = gsap.context(() => {
      // --- ANIMACIONES DE ENTRADA ---
      // Estas animaciones se ejecutan una sola vez cuando el componente se monta.

      // Animación de dibujado de las líneas SVG
      if (svgRef.current) {
        const paths = svgRef.current.querySelectorAll('path');
        gsap.set(paths, { opacity: 0, drawSVG: "0% 0%" }); // drawSVG es un plugin de GSAP
        paths.forEach((path, i) => {
          gsap.to(path, {
            opacity: 1,
            duration: 2,
            delay: 0.5 + i * 0.3,
            drawSVG: "0% 100%",
            ease: "power2.inOut"
          });
        });
      }

      // Animación escalonada (stagger) para los elementos de texto y botones
      const elements = [
        { ref: badgeRef, y: 20 },
        { ref: titleRef, y: 30 },
        { ref: subtitleRef, y: 20 },
        { ref: buttonRef, y: 20 }
      ];

      elements.forEach(({ ref, y }, i) => {
        if (ref.current) {
          gsap.fromTo(ref.current,
            { opacity: 0, y },
            { opacity: 1, y: 0, duration: 1, delay: 0.5 + i * 0.2, ease: "back.out(1.2)" }
          );
        }
      });

      // Animación sutil de escala para todo el contenedor, dando un efecto de "zoom out"
      gsap.fromTo(heroRef.current,
        { scale: 0.98 },
        { scale: 1, duration: 1.5, ease: "power2.out" }
      );

      // --- ANIMACIÓN DEL LOGO DE FONDO CON SCROLL ---
      // Se usa gsap.fromTo con ScrollTrigger para definir el estado inicial y final del logo
      // y asegurar que se revierta correctamente al volver al tope.
      const logoScrollAnimation = gsap.fromTo(logoRef.current, 
        { x: 0, y: 0, opacity: 0.2 }, // Estado inicial del logo (visible y en su posición)
        { 
          x: "100%", // Mover hacia la derecha
          y: "-100%", // Mover hacia arriba
          opacity: 0, // Desvanecer completamente
          ease: "none", // Animación lineal con el scroll
          scrollTrigger: {
            trigger: heroRef.current, // El Hero completo es el disparador de esta animación.
            start: "top top", // La animación comienza cuando el borde superior del Hero llega al borde superior del viewport.
            end: "bottom top", // La animación termina cuando el borde inferior del Hero llega al borde superior del viewport.
            scrub: true, // Vincula la animación directamente al progreso del scroll.
          }
        }
      );

    }, heroRef); // El segundo argumento es el scope del selector, útil para el contexto.

    // --- EFECTO PARALLAX INTERACTIVO ---
    // Se define fuera del `gsap.context` porque los event listeners no son animaciones de GSAP
    // y deben gestionarse directamente.

    // Mueve elementos del fondo en respuesta a la posición del mouse
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = heroRef.current;

      // Normaliza la posición del mouse de -1 a 1 en ambos ejes
      const xPercent = (clientX / offsetWidth - 0.5) * 2;
      const yPercent = (clientY / offsetHeight - 0.5) * 2;
      const moveFactor = 20;

      // Mueve el logo y el SVG en dirección opuesta al mouse para dar profundidad
      gsap.to([logoRef.current, svgRef.current], { // <-- Ambos elementos se mueven con el parallax del mouse
        x: xPercent * moveFactor * -1,
        y: yPercent * moveFactor * -1,
        duration: 0.8,
        ease: "power2.out",
      });

      // Mueve los orbes en la misma dirección que el mouse, con diferente intensidad para mayor profundidad
      const orbs = heroRef.current.querySelectorAll(".floating-orb");
      orbs.forEach((orb, i) => {
        const factor = 15 + i * 5;
        gsap.to(orb, {
          x: xPercent * factor,
          y: yPercent * factor,
          duration: 1 + i * 0.2,
          ease: "power3.out",
        });
      });
    };

    // Resetea la posición de los elementos cuando el mouse sale del Hero
    const handleMouseLeave = () => {
      gsap.to([logoRef.current, svgRef.current, ".floating-orb"], {
        x: 0,
        y: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
      });
    };

    // --- GESTIÓN DE EVENT LISTENERS ---
    const currentHeroRef = heroRef.current;
    currentHeroRef?.addEventListener("mousemove", handleMouseMove);
    currentHeroRef?.addEventListener("mouseleave", handleMouseLeave);

    // --- FUNCIÓN DE LIMPIEZA DEL useEffect ---
    // Es crucial para evitar memory leaks en aplicaciones React.
    return () => {
      ctx.revert(); // Limpia todas las animaciones del contexto de GSAP
      if (currentHeroRef) {
        // Elimina los event listeners usando la misma referencia de función
        currentHeroRef.removeEventListener("mousemove", handleMouseMove);
        currentHeroRef.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []); // El array vacío `[]` asegura que este efecto se ejecute solo una vez (al montar el componente)

  return (
    <div ref={heroRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]" id="home">
      {/* Capa de gradiente sutil para dar color al fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.05] via-transparent to-primary-700/[0.05] blur-3xl" />
      
      {/* Orbes de gradiente flotantes y animados para un fondo dinámico */}
      <FloatingGradientOrb 
        className="-left-20 -top-20 floating-orb"
        size={400} 
        color="from-indigo-500/20 to-purple-500/10"
        delay={0.2}
      />
      <FloatingGradientOrb 
        className="-right-20 bottom-1/4 floating-orb"
        size={300} 
        color="from-blue-500/20 to-cyan-500/10"
        delay={0.4}
      />
      <FloatingGradientOrb 
        className="right-1/4 -bottom-20 floating-orb"
        size={250} 
        color="from-purple-500/20 to-pink-500/10"
        delay={0.6}
      />

      {/* Logo de InnoGrowth superpuesto en el fondo con baja opacidad */}
      <div 
        ref={logoRef}
        className="absolute left-[-10%] md:left-[-5%] top-[10%] md:top-[15%] w-[60%] h-[80%] pointer-events-none opacity-0"
      >
        <Image
          src="/logo.svg"
          alt="InnoGrowth Logo Background"
          fill
          className="object-contain"
          style={{ objectPosition: "left center" }}
        />
      </div>

      {/* Contenedor para elementos geométricos SVG y divs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Líneas SVG animadas para un look tecnológico */}
        <svg
          ref={svgRef}
          className="absolute top-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <path
            d="M0,500 L1000,500 M500,0 L500,1000 M0,0 L1000,1000 M1000,0 L0,1000"
            stroke="rgba(164, 107, 255, 0.3)"
            strokeWidth="1"
            strokeDasharray="5,5"
            fill="none"
          />
          <path
            d="M200,200 L800,200 L800,800 L200,800 Z"
            stroke="rgba(164, 107, 255, 0.2)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M300,300 L700,300 L700,700 L300,700 Z"
            stroke="rgba(164, 107, 255, 0.4)"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        {/* Formas decorativas adicionales */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-primary-500/10"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full border border-primary-300/10"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/10 to-transparent transform -rotate-6"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-300/10 to-transparent transform rotate-6"></div>
      </div>

      {/* Contenido Principal del Hero (centrado y por encima de las animaciones) */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/[0.08] mb-8 md:mb-12 opacity-0"
          >
            <Image src="/logo.svg" alt="InnoGrowth" width={20} height={20} />
            <span className="text-sm text-white/60 tracking-wide">InnoGrowth</span>
          </div>

          <div ref={titleRef} className="opacity-0">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Fortalecemos
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-primary-300 via-white/90 to-primary-500 ",
                  pacifico.className,
                )}
              >
                tu empresa
              </span>
            </h1>
          </div>

          <div ref={subtitleRef} className="opacity-0">
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              Implementamos KPIs estratégicos y metodologías innovadoras para impulsar el crecimiento sostenible de tu
              negocio.
            </p>
          </div>

          {/* Contenedor para los botones de llamada a la acción (CTA) */}
          <div ref={buttonRef} className="opacity-0 flex items-center justify-center gap-4">
            {/* Botón Principal: Abre el modal para agendar citas */}
            <button
              onClick={() => {
                if (typeof window !== "undefined" && window.openAppointmentModal) {
                  window.openAppointmentModal()
                }
              }}
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 text-white font-semibold transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/50 hover:scale-105 transform"
            >
              <LucideSparkles className="w-5 h-5 transition-transform duration-500 group-hover:rotate-180" />
              <span>Agendar una cita</span>
            </button>
            {/* Botón Secundario: Navega a la sección 'about' para más información */}
            <button
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-transparent border border-white/20 text-gray-300 font-medium transition-all duration-300 hover:border-white/40 hover:text-white hover:shadow-lg hover:shadow-white/10"
            >
              <span>Saber más</span>
              <LucideMoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Gradiente inferior para fusionar con la siguiente sección */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  )
}
