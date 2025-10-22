'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Users, BookOpen, Briefcase, Award, BarChart, ShieldCheck, Cpu, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const scrollToSection = (e: React.MouseEvent<HTMLElement>, sectionId: string) => {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export default function InnoLogixVR() {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-innologix" />,
      title: "Aprendizaje inmersivo",
      description: "Simulaciones que generan experiencias memorables y efectivas."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-innologix" />,
      title: "Prueba–error sin riesgo",
      description: "Corrige errores sin impacto en productos reales ni operaciones."
    },
    {
      icon: <Award className="h-8 w-8 text-innologix" />,
      title: "Gamificación motivadora",
      description: "Sistema de puntajes, logros y feedback en cada reto."
    },
    {
      icon: <BarChart className="h-8 w-8 text-innologix" />,
      title: "Evaluación automatizada",
      description: "Mide desempeño, tiempo, decisiones y reflexiones finales."
    },
    {
      icon: <Cpu className="h-8 w-8 text-innologix" />,
      title: "Modular y adaptable",
      description: "Retos escalables por nivel: básico, intermedio y avanzado."
    },
    {
      icon: <Users className="h-8 w-8 text-innologix" />,
      title: "Soporte personalizado",
      description: "Acompañamiento técnico y pedagógico para cada cliente."
    }
  ];

  const challenges = [
    {
      title: "Reto 1 – Recepción Operativa",
      level: "Básico",
      description: "Simula: Llegada de mercancía, inspección, decisiones logísticas y manejo de montacargas.",
      color: "bg-blue-100 dark:bg-blue-900/50"
    },
    {
      title: "Reto 2 – Almacenamiento Estratégico",
      level: "Básico",
      description: "Simula: Ubicación por rotación, peso y fragilidad + conteo cíclico de inventarios.",
      color: "bg-green-100 dark:bg-green-900/50"
    },
    {
      title: "Reto 3 – Consolidación de Pedidos",
      level: "Básico",
      description: "Simula: Picking, embalaje y organización en zona de despacho.",
      color: "bg-purple-100 dark:bg-purple-900/50"
    }
  ];

  const targetAudience = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Estudiantes técnicos y universitarios",
      description: "Aprenden haciendo, conectando teoría con práctica realista."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Instituciones educativas",
      description: "Modernizan su formación logística con tecnología inmersiva."
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Empresas logísticas e industriales",
      description: "Capacitan a sus equipos en procesos clave sin frenar operaciones."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Docentes y formadores",
      description: "Evalúan desempeño y toman decisiones pedagógicas basadas en datos."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Selecciona tus retos",
      description: "Explora escenarios logísticos diseñados por niveles. Elige entre recepción de mercancías, almacenamiento, consolidación, rutas, devoluciones y más."
    },
    {
      number: "2",
      title: "Entrena en realidad virtual",
      description: "Ponte las gafas VR y vive una simulación inmersiva con instrucciones, toma de decisiones y ejecución de tareas logísticas reales."
    },
    {
      number: "3",
      title: "Evalúa tu desempeño",
      description: "Al final de cada reto, recibirás un puntaje automático, retroalimentación personalizada y una reflexión sobre tu experiencia."
    },
    {
      number: "4",
      title: "Mejora continuamente",
      description: "Repite, analiza tus errores y mejora tus habilidades logísticas en un entorno sin riesgos."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Image 
                src="/projects/InnoLogix-VR/innologix-logo.png" 
                alt="InnoLogix VR Logo"
                width={300}
                height={100}
                className="h-24 w-auto object-contain"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-innologix-400 to-innologix-600">
              InnoLogix VR
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Formación en logística inmersiva a través de realidad virtual
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/573004986307?text=¡Hola!%20Estoy%20interesado%20en%20agendar%20una%20demo%20de%20InnoLogix%20VR%20para%20conocer%20más%20sobre%20su%20plataforma%20de%20formación%20inmersiva%20en%20logística.%20¿Podrían%20brindarme%20más%20información?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-innologix text-primary-foreground hover:bg-innologix/90 h-11 px-8 py-2 gap-2"
              >
                Solicitar Demo <ArrowRight className="h-4 w-4" />
              </a>
              <motion.a 
                href="#que-es-innologix" 
                onClick={(e) => scrollToSection(e, 'que-es-innologix')}
                className="inline-flex items-center justify-center rounded-md border-2 border-innologix bg-transparent text-innologix hover:bg-innologix/10 h-11 px-8 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
              >
                Ver más
              </motion.a>
            </div>
            <div className="mt-12 aspect-video w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dxfvEPRck0I?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0" 
                title="InnoLogix VR Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is InnoLogix VR */}
      <motion.section 
        id="que-es-innologix" 
        className="py-20 bg-muted/50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Qué es InnologiX VR?</h2>
            <p className="text-xl text-muted-foreground">
              InnologiX VR es una herramienta de formación en logística basada en realidad virtual. A través de simulaciones inmersivas y gamificadas, permite que estudiantes, docentes y profesionales vivan experiencias reales de bodega, transporte e inventarios... sin salir del aula.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-innologix/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Challenges Section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left side - Text and Challenges */}
            <div className="lg:w-1/2">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Qué vas a vivir en InnologiX VR?</h2>
                <p className="text-xl text-muted-foreground">
                  Experimenta retos interactivos que simulan procesos logísticos reales en un entorno inmersivo y seguro.
                </p>
              </div>
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <div key={index} className={`${challenge.color} rounded-xl p-6 transition-transform hover:scale-[1.02]`}>
                    <div className="flex items-start gap-4">
                      <div className="bg-background/80 dark:bg-background/90 text-foreground rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center text-lg font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{challenge.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Nivel: {challenge.level}</span><br />
                          {challenge.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Image */}
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/projects/InnoLogix-VR/foto-innologix.jpeg"
                  alt="Experiencia InnoLogix VR"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Target Audience */}
      <motion.section 
        className="py-20 bg-muted/50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Para quién es esta experiencia?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetAudience.map((item, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How it Works */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Cómo funciona InnologiX VR?</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-innologix-600 to-innologix-800 text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para transformar cómo enseñas y aprendes logística?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Agenda una demo, solicita más información o empieza hoy con InnologiX VR.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/573004986307?text=¡Hola!%20Estoy%20interesado%20en%20agendar%20una%20demo%20de%20InnoLogix%20VR%20para%20conocer%20más%20sobre%20su%20plataforma%20de%20formación%20inmersiva%20en%20logística.%20¿Podrían%20brindarme%20más%20información?" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-white text-innologix-700 hover:bg-gray-100 h-11 px-8 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 gap-2"
            >
              Solicitar Demo <ArrowRight className="h-4 w-4" />
            </a>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/10"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
            >
              Ver Video
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Formación inmersiva</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Tecnología aplicada</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Resultados reales</span>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
