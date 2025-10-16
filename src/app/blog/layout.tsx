import Footer from "@/components/footer"
import Header from "@/components/header"
import type React from "react"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
