import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import AppointmentModal from "@/components/appointment-modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InnoGrowth - Consultoría Estratégica para Empresas",
  description:
    "Fortalecemos tu empresa implementando KPIs estratégicos y metodologías innovadoras. Impulsamos el crecimiento sostenible a través del análisis de datos y la transformación digital.",
  keywords: [
    "consultoría estratégica",
    "KPIs empresariales",
    "crecimiento sostenible",
    "análisis de datos",
    "optimización de procesos",
    "transformación digital",
    "mejora empresarial",
    "consultoría para empresas",
  ],
  openGraph: {
    title: "InnoGrowth - Impulsamos tu empresa con estrategia y tecnología",
    description:
      "Implementamos KPIs estratégicos y soluciones innovadoras basadas en datos para transformar tu empresa y alcanzar un crecimiento sostenible.",
    url: "https://www.innogrowth.co/", // reemplazar si tenés una URL real
    siteName: "InnoGrowth",
    images: [
      {
        url: "/previewInnow.png", 
        width: 1200,
        height: 630,
        alt: "Dashboard con KPIs estratégicos en una laptop",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InnoGrowth - Consultoría Estratégica para Empresas",
    description:
      "Impulsamos tu empresa con KPIs estratégicos y metodologías basadas en datos. Crecimiento sostenible, transformación digital y optimización de procesos.",
    images: [
      "/previewInnow.png"
    ],
  },
};


// Extender el objeto Window para TypeScript
declare global {
  interface Window {
    openAppointmentModal?: () => void;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Definir una función global para abrir el modal
            window.dispatchEvent(new Event('openAppointmentModal'));
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <AppointmentModal />
        </ThemeProvider>
      </body>
    </html>
  );
}
