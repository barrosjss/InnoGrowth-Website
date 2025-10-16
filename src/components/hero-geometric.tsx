"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import Image from "next/image"
import { cn } from "@/lib/utils"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

// function FloatingGradientOrb({
//   className,
//   size = 300,
//   color = "from-indigo-500/20",
//   delay = 0,
// }: {
//   className?: string
//   size?: number
//   color?: string
//   delay?: number
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 2, delay }}
//       className={cn("absolute rounded-full blur-3xl", className)}
//       style={{ width: size, height: size }}
//     >
//       <motion.div
//         animate={{
//           x: [0, 30, 0],
//           y: [0, 20, 0],
//         }}
//         transition={{
//           duration: 8 + Math.random() * 5,
//           repeat: Number.POSITIVE_INFINITY,
//           ease: "easeInOut",
//           delay: Math.random() * 2,
//         }}
//         className={cn("w-full h-full rounded-full", "bg-gradient-to-br to-transparent", color)}
//       />
//     </motion.div>
//   )
// }

export default function HeroGeometric() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]" id="home">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.05] via-transparent to-primary-700/[0.05] blur-3xl" />

      {/* Logo grande en el fondo */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 0.07, x: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute left-[-10%] md:left-[-5%] top-[10%] md:top-[15%] w-[60%] h-[80%] pointer-events-none"
      >
        <Image
          src="/logo.svg"
          alt="InnoGrowth Logo Background"
          fill
          className="object-contain"
          style={{ objectPosition: "left center" }}
        />
      </motion.div>

      {/* Elementos geométricos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Formas geométricas abstractas */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,500 L1000,500 M500,0 L500,1000 M0,0 L1000,1000 M1000,0 L0,1000"
            stroke="rgba(164, 107, 255, 0.3)"
            strokeWidth="1"
            strokeDasharray="5,5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />

          <motion.path
            d="M200,200 L800,200 L800,800 L200,800 Z"
            stroke="rgba(164, 107, 255, 0.2)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
          />

          <motion.path
            d="M300,300 L700,300 L700,700 L300,700 Z"
            stroke="rgba(164, 107, 255, 0.4)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
          />
        </svg>

        {/* Formas redondeadas */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-primary-500/10"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full border border-primary-300/10"></div>

        {/* Líneas angulares */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/10 to-transparent transform -rotate-6"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-300/10 to-transparent transform rotate-6"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <Image src="/logo.svg" alt="InnoGrowth" width={20} height={20} />
            <span className="text-sm text-white/60 tracking-wide">InnoGrowth</span>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
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
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              Implementamos KPIs estratégicos y metodologías innovadoras para impulsar el crecimiento sostenible de tu
              negocio.
            </p>
          </motion.div>

          <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
            <button
              onClick={() => {
                if (typeof window !== "undefined" && window.openAppointmentModal) {
                  window.openAppointmentModal()
                }
              }}
              className="px-6 py-3 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-medium transition-all duration-300 shadow-lg shadow-primary-500/25"
            >
              Agendar una cita
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  )
}
