"use client"

import { useState } from "react"
import { LucideDownload, LucideLoader } from "lucide-react"
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"

interface PdfGeneratorProps {
  contentId: string
  fileName: string
}

export default function PdfGenerator({ contentId, fileName }: PdfGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const generatePDF = async () => {
    const element = document.getElementById(contentId)
    if (!element) return

    setIsGenerating(true)

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      })

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      const imgWidth = 210
      const pageHeight = 295
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight
      let position = 0

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      pdf.save(`${fileName}.pdf`)
    } catch (error) {
      console.error("Error generating PDF:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <button
      onClick={generatePDF}
      disabled={isGenerating}
      className="px-4 py-2 bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isGenerating ? (
        <>
          <LucideLoader className="w-4 h-4 animate-spin" />
          Generando PDF...
        </>
      ) : (
        <>
          <LucideDownload className="w-4 h-4" />
          Descargar PDF
        </>
      )}
    </button>
  )
}
