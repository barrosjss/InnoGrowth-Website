import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4 relative overflow-hidden">
      {/* Fondo geométrico exactamente igual al Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30">
            <polygon points="0,0 500,500 0,1000" fill="#8a2be2" />
            <polygon points="1000,0 500,500 1000,1000" fill="#9370db" />
            <polygon points="0,0 1000,0 500,500" fill="#9932cc" />
            <polygon points="0,1000 1000,1000 500,500" fill="#ba55d3" />
          </svg>
        </div>
      </div>

      {/* Logo */}
      <div className="bg-black/80 px-4 py-2 rounded-full mb-8 z-10">
        <span className="text-white font-semibold flex items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M12 4L4 8L12 12L20 8L12 4Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M4 16L12 20L20 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12L12 16L20 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          InnoGrowth
        </span>
      </div>

      {/* Contenido 404 */}
      <h1 className="text-7xl md:text-9xl font-bold mb-4 z-10">404</h1>
      <h2 className="text-2xl md:text-4xl font-bold mb-6 z-10">
        Página no <span className="text-purple-400 font-['Pacifico',_cursive]">encontrada</span>
      </h2>
      <p className="text-gray-400 text-center max-w-md mb-8 z-10">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>

      {/* Botón de regreso */}
      <Link
        href="/"
        className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-full flex items-center transition-all duration-300 z-10"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        Volver al inicio
      </Link>

      {/* Barra de navegación flotante */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white text-black rounded-full px-6 py-3 shadow-lg">
          <nav className="flex space-x-6">
            <Link href="/#inicio" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link href="/#quienes-somos" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Quiénes Somos
            </Link>
            <Link href="/#sectores" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Sectores
            </Link>
            <Link href="/#equipo" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Equipo
            </Link>
            <Link href="/#proyectos" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Proyectos
            </Link>
            <Link href="/#clientes" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Clientes
            </Link>
            <Link href="/#blog" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Blog
            </Link>
            <Link href="/#contacto" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Contáctanos
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
