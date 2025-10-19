"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  LucideBuilding,
  LucideUtensils,
  LucideHotel,
  LucideHeadphones,
  LucideShoppingBag,
  LucideCheck,
  LucideArrowRight,
} from "lucide-react";
import Restaurants from "@/assets/img/restauranteInow.png";
import Contruccion from "@/assets/img/contrucInow.png";
import Hotel from "@/assets/img/holtelInow.png";
import Call from "@/assets/img/callInow.png";
import Shop from "@/assets/img/shopInow.png";

// Registrar el plugin de ScrollTrigger para las animaciones de scroll.
gsap.registerPlugin(ScrollTrigger);

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
  isReversed?: boolean;
  img: string;
}

/**
 * Componente para mostrar una única tarjeta de servicio.
 * Cada tarjeta gestiona su propia animación de entrada al hacer scroll.
 */
function ServiceCard({
  icon,
  title,
  description,
  features,
  isReversed = false,
  img,
}: ServiceProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Contexto de GSAP para la limpieza automática de animaciones.
    const ctx = gsap.context(() => {
      // Animación simple de "fade in" y "slide up" para la tarjeta.
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        // ScrollTrigger hace que la animación se dispare al entrar en el viewport.
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%", // Comienza cuando el 85% superior de la tarjeta es visible.
          toggleActions: "play none none none", // Solo se reproduce una vez.
        },
      });
    }, cardRef);
    return () => ctx.revert(); // Limpieza al desmontar el componente.
  }, []);

  return (
    <div
      ref={cardRef}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className={`order-2 ${isReversed ? "md:order-1" : "md:order-2"}`}>
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-900/30 to-primary-800/30 flex items-center justify-center">
          <div className="absolute inset-0 bg-green-400">
            <Image
              src={img}
              alt={`${title} illustration`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className={`order-1 ${isReversed ? "md:order-2" : "md:order-1"}`}>
        <div
          className={cn(
            "w-12 h-12 mb-5 flex items-center justify-center rounded-xl",
            "bg-gradient-to-br from-white/[0.08] to-transparent",
            "border border-white/[0.08]"
          )}
        >
          {icon}
        </div>

        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">
          {title}
        </h3>
        <p className="text-white/40 leading-relaxed mb-6">{description}</p>

        <div className="space-y-3">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center">
                <LucideCheck className="w-3 h-3 text-primary-400" />
              </div>
              <span className="text-white/70">{feature}</span>
            </div>
          ))}
        </div>

        <button className="mt-6 inline-flex items-center gap-2 text-primary-300 hover:text-primary-200 transition-colors">
          <span>Ver soluciones para este sector</span>
          <LucideArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/**
 * Componente que renderiza la sección completa de "Servicios",
 * incluyendo una cabecera y una lista de `ServiceCard`.
 */
export default function ServicesSection() {
  // Ref para el contenedor de la cabecera de la sección.
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
      tl.from(".service-title-tag", { opacity: 0, y: 30, duration: 0.8 })
        .from(".service-title", { opacity: 0, y: 30, duration: 0.8 }, "-=0.6")
        .from(".service-subtitle", { opacity: 0, y: 30, duration: 0.8 }, "-=0.6");
    }, headerRef);
    return () => ctx.revert(); // Limpieza de la animación.
  }, []);

  const services = [
    {
      icon: <LucideUtensils className="w-6 h-6 text-primary-400" />,
      title: "Restaurantes",
      img: Restaurants.src,
      description:
        "Optimizamos la operación de tu restaurante mediante la implementación de KPIs y soluciones digitales que mejoran la eficiencia y la experiencia del cliente.",
      features: [
        "Sistemas de gestión de inventario",
        "Análisis de rentabilidad por plato",
        "Optimización de procesos operativos",
        "Estrategias de fidelización de clientes",
      ],
    },
    {
      icon: <LucideBuilding className="w-6 h-6 text-primary-300" />,
      title: "Construcción",
      img: Contruccion.src,
      description:
        "Implementamos soluciones para el control y seguimiento de proyectos de construcción, optimizando recursos y mejorando la rentabilidad.",
      features: [
        "Control de costos y presupuestos",
        "Seguimiento de avance de obra",
        "Gestión de proveedores y materiales",
        "Análisis de productividad",
      ],
    },
    {
      icon: <LucideHotel className="w-6 h-6 text-primary-300" />,
      title: "Hotelería y Turismo",
      img: Hotel.src,
      description:
        "Potenciamos la experiencia del huésped y la eficiencia operativa mediante la implementación de indicadores clave y soluciones digitales.",
      features: [
        "Optimización de tasas de ocupación",
        "Análisis de satisfacción del cliente",
        "Gestión de canales de distribución",
        "Estrategias de revenue management",
      ],
    },
    {
      icon: <LucideHeadphones className="w-6 h-6 text-primary-500" />,
      title: "BPO (Business Process Outsourcing)",
      img: Call.src,
      description:
        "Mejoramos la eficiencia y calidad de los servicios de outsourcing mediante la implementación de KPIs y metodologías de mejora continua.",
      features: [
        "Optimización de procesos operativos",
        "Medición de calidad del servicio",
        "Análisis de productividad",
        "Estrategias de retención de talento",
      ],
    },
    {
      icon: <LucideShoppingBag className="w-6 h-6 text-primary-200" />,
      title: "Tiendas de Productos",
      img: Shop.src,
      description:
        "Implementamos soluciones para optimizar la gestión de inventario, ventas y experiencia del cliente en tiendas físicas y online.",
      features: [
        "Análisis de rotación de inventario",
        "Optimización de layout y exhibición",
        "Estrategias de pricing y promociones",
        "Integración de canales físicos y digitales",
      ],
    },
  ];

  return (
    <div
      className="relative w-full py-24 md:py-32 overflow-hidden bg-[#030303]"
      id="services"
    >
      <div className="absolute inset-0 bg-gradient-to-tl from-primary-500/[0.03] via-transparent to-primary-700/[0.03] blur-3xl" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20" ref={headerRef}>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4 service-title-tag"
          >
            <span className="text-sm text-white/60 tracking-wide">
              Sectores
            </span>
          </div>

          <h2
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight service-title"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Sectores a los que
            </span>
            <span
              className={cn(
                "ml-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 via-white/90 to-primary-500",
                pacifico.className
              )}
            >
              Servimos
            </span>
          </h2>

          <p
            className="text-white/40 max-w-2xl mx-auto service-subtitle"
          >
            Ofrecemos soluciones especializadas para potenciar el crecimiento y
            la eficiencia en diversos sectores empresariales.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              img={service.img}
              description={service.description}
              features={service.features}
              index={index}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
