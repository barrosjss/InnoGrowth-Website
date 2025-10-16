"use client";

import type React from "react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// const pacifico = Pacifico({
//   subsets: ["latin"],
//   weight: ["400"],
//   variable: "--font-pacifico",
// });

function FloatingGradientOrb({
  className,
  size = 300,
  color = "from-indigo-500/20",
  delay = 0,
}: {
  className?: string;
  size?: number;
  color?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay }}
      className={cn("absolute rounded-full blur-3xl", className)}
      style={{ width: size, height: size }}
    >
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8 + Math.random() * 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: Math.random() * 2,
        }}
        className={cn(
          "w-full h-full rounded-full",
          "bg-gradient-to-br to-transparent",
          color
        )}
      />
    </motion.div>
  );
}

// function FeatureItem({
//   icon,
//   title,
//   description,
//   index,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   index: number;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
//       viewport={{ once: true }}
//       className="flex gap-4"
//     >
//       <div className="flex-shrink-0 mt-1">
//         <div
//           className={cn(
//             "w-10 h-10 flex items-center justify-center rounded-lg",
//             "bg-gradient-to-br from-white/[0.08] to-transparent",
//             "border border-white/[0.08]"
//           )}
//         >
//           {icon}
//         </div>
//       </div>
//       <div>
//         <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
//         <p className="text-white/40 leading-relaxed">{description}</p>
//       </div>
//     </motion.div>
//   );
// }

export default function WhyChooseSection() {
  // const features = [
  //   {
  //     icon: <LucideAward className="w-5 h-5 text-indigo-300" />,
  //     title: "Expert Team",
  //     description:
  //       "Our SEO specialists have years of experience and stay updated with the latest algorithm changes and industry trends.",
  //   },
  //   {
  //     icon: <LucideUsers className="w-5 h-5 text-rose-300" />,
  //     title: "Client-Focused Approach",
  //     description:
  //       "We develop customized strategies based on your unique business goals, target audience, and competitive landscape.",
  //   },
  //   {
  //     icon: <LucideLineChart className="w-5 h-5 text-cyan-300" />,
  //     title: "Data-Driven Results",
  //     description:
  //       "Our strategies are backed by comprehensive research and analytics to ensure measurable and sustainable results.",
  //   },
  //   {
  //     icon: <LucideHeadphones className="w-5 h-5 text-amber-300" />,
  //     title: "Dedicated Support",
  //     description:
  //       "Enjoy ongoing support and regular updates from our team to keep you informed about your campaign's progress.",
  //   },
  // ];

  return (
    <div className="relative w-full py-24 md:py-32 overflow-hidden bg-[#030303]">
      {/* Background gradients */}
      <FloatingGradientOrb
        size={400}
        color="from-indigo-500/10"
        className="left-[-10%] top-[10%]"
        delay={0.2}
      />
      <FloatingGradientOrb
        size={350}
        color="from-rose-500/10"
        className="right-[-5%] bottom-[15%]"
        delay={0.5}
      />
      <FloatingGradientOrb
        size={250}
        color="from-violet-500/10"
        className="left-[20%] bottom-[5%]"
        delay={0.3}
      />
    </div>
  );
}
