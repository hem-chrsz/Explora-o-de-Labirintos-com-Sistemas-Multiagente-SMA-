"use client"

import { SlideContainer, SlideTitle, SlideSubtitle, SlideContent } from "../slide-container"
import { ImageGallery } from "../image-gallery"
import { StatCard } from "../feature-card"

const chartImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gS9dX2f3VGx2GIcN2a6YOf2qvef5rP.png",
    alt: "Evolucao da Cobertura - Media de 15 Execucoes",
    caption: "Evolucao da Cobertura do Labirinto (Media de 15 Execucoes)"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p0D1XJdubwZNGQYqr11k1rpfPHZzFZ.png",
    alt: "Consumo de Recursos Medio - 15 Execucoes",
    caption: "Consumo de Recursos Medio (15 Execucoes)"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ROU2vIrpuAnakMAVt5vcZ6SM29cf2D.png",
    alt: "Evolucao da Cobertura - Media de 10 Execucoes",
    caption: "Evolucao da Cobertura (Media de 10 Execucoes)"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JAgCJYT1YFaYGGp65qHH5RuENmt2YA.png",
    alt: "Consumo de Recursos Medio - 10 Execucoes",
    caption: "Consumo de Recursos Medio (10 Execucoes)"
  },
]

export function ResultsSlide() {
  return (
    <SlideContainer>
      <SlideTitle>Resultados Experimentais</SlideTitle>
      <SlideSubtitle>
        Metricas de desempenho comparando as tres abordagens
      </SlideSubtitle>

      <SlideContent delay={0.3}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatCard value="791" label="Iteracoes HEDAC (15 exec)" delay={0.3} />
          <StatCard value="1091" label="Iteracoes Estigmergia" delay={0.4} />
          <StatCard value="118.69s" label="Tempo HEDAC" delay={0.5} />
          <StatCard value="163.69s" label="Tempo Estigmergia" delay={0.6} />
        </div>
      </SlideContent>

      <SlideContent delay={0.5}>
        <ImageGallery images={chartImages} />
      </SlideContent>

      {/* Presenter badge */}
      <SlideContent delay={0.7}>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-xl">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center">
              <span className="font-bold text-sm">LC</span>
            </div>
            <div className="text-left">
              <div className="font-medium text-sm">Leonardo Cerqueira Brasil</div>
              <div className="text-xs text-muted-foreground">Analise de Resultados</div>
            </div>
          </div>
        </div>
      </SlideContent>
    </SlideContainer>
  )
}
