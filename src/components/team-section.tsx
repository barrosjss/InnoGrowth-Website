"use client";

import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { LucideLinkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import DannaDiaz from "@/assets/img/Danna.jpg";
import Luis from "@/assets/img/luisInow.png";
import Jesus from "@/assets/img/JesusInow.png";
import Dana from "@/assets/img/DanaInow.png";
import Einer from "@/assets/img/Einer.jpg";
import Link from "next/link";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  index: number;
  link: string;
}

function TeamMember({ name, role, bio, image, index, link }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 * index }}
      viewport={{ once: true }}
      className="group"
    >
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
    </motion.div>
  );
}

export default function TeamSection() {
  const team = [
    {
      name: "Luis Carlos Acosta Fontalvo",
      role: "CEO",
      bio: "Más de 15 años de experiencia en consultoría estratégica y transformación digital para empresas Fortune 500.",
      image: Luis,
      link: "https://www.linkedin.com/in/luis-carlos-acosta-fontalvo-3a254043/"
    },
    {
      name: "Jesús Barros Bolivar",
      role: "COO",
      bio: "Especialista en implementación de KPIs y optimización de procesos con enfoque en resultados medibles.",
      image: Jesus,
      link: "https://www.linkedin.com/in/barrosjesus/"
    },
    {
      name: "Einer Fritz Pizarro",
      role: "CFO",
      bio: "Experta en tecnologías emergentes y su aplicación para la modernización de modelos de negocio.",
      image: Einer,
      link: "https://www.linkedin.com/in/einer-fritz/"
    },
    {
      name: "Danna Diaz",
      role: "CMO",
      bio: "Especializado en desarrollo organizacional y gestión del cambio para empresas en crecimiento.",
      image: DannaDiaz,
      link: "https://www.linkedin.com/in/danna-diaz-33baa6262/"
    },
    {
      name: "Dana Barros Bolivar",
      role: "Directora Creativa",
      bio: "Experta en análisis de datos y diseño de dashboards para la toma de decisiones estratégicas.",
      image: Dana,
      link: "https://www.linkedin.com/in/dana-cecilia-barros-bolivar-39225a255/"
    },
    // {
    //   name: "Javier López",
    //   role: "Consultor de Innovación",
    //   bio: "Especialista en metodologías ágiles y desarrollo de soluciones innovadoras para problemas complejos.",
    //   image: "/placeholder.svg?height=400&width=400",
    // },
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
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4"
          >
            <span className="text-sm text-white/60 tracking-wide">Equipo</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
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
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-2xl mx-auto"
          >
            Conoce al equipo de profesionales que hacen posible la
            transformación de tu negocio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image.src}
              link={member.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
