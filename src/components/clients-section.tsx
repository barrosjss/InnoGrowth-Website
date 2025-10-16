"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import fomo from "@/assets/img/fomoLogo.svg"
import caribe from "@/assets/img/caribeS.svg"
import feanwa from "@/assets/img/Logofeanware.svg"
import cie from "@/assets/img/logoCIEW.svg"
import comerci from "@/assets/img/Coaching_Comercial.svg"
import coderlbas from "@/assets/img/coder.svg"
import foodverso from "@/assets/img/logofoodiverso.png"
import magic from "@/assets/img/magic.svg"

export default function ClientsSection() {
  // En una aplicación real, estos datos vendrían de una API o CMS
  const clients = [
    { name: "FOMO", logo: fomo },
    { name: "Caribe Startup", logo: caribe },
    { name: "Feanware", logo: feanwa },
    { name: "CIE Barcelona", logo: cie },
    { name: "Coaching Comercial", logo: comerci },
    { name: "Coderlabs", logo: coderlbas },
    { name: "Foodiverso", logo: foodverso },
    { name: "Magichack", logo: magic },
  ]

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="clients" className="py-20 bg-[#030303]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-primary-300 font-medium mb-2 block"
            >
              Confianza y Colaboración
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              Clientes & Aliados
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button
              onClick={handleContactClick}
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full transition-colors"
            >
              Contáctenos
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 flex items-center justify-center hover:border-primary-300/30 transition-colors duration-300"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={160}
                height={80}
                className="max-h-16 w-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
