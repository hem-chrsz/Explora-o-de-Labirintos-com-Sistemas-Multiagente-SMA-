"use client"

import { SlideContainer, SlideTitle, SlideSubtitle, SlideContent } from "../slide-container"
import { ImageGallery } from "../image-gallery"
import { StatCard } from "../feature-card"

const chartImages = [
  {
    src: "/images/g1.jpeg",
    alt: "Gráfico 1 - 40x40 com 10 agentes",
    caption: "Gráfico 1 (40x40 com 10 agentes)"
  },
  {
    src: "/images/g2.jpeg",
    alt: "Gráfico 2 - 40x40 com 10 agentes",
    caption: "Gráfico 2 (40x40 com 10 agentes)"
  },
  {
    src: "/images/g3.jpeg",
    alt: "Gráfico 3 - 40x40 com 10 agentes",
    caption: "Gráfico 3 (40x40 com 10 agentes)"
  },
  {
    src: "/images/g4.jpeg",
    alt: "Gráfico 4 - 40x40 com 10 agentes",
    caption: "Gráfico 4 (40x40 com 10 agentes)"
  },
]

export function ResultsSlide() {
  return (
    <SlideContainer>
      <SlideTitle>Resultados Experimentais</SlideTitle>
      <SlideSubtitle>
        Metricas de desempenho comparando as tres abordagens
      </SlideSubtitle>

      <SlideContent delay={0.2} className="mb-6">
        <div className="glass p-5 rounded-xl border-l-[4px] border-primary/60 text-sm md:text-base">
          <p>
            <strong>Observação Importante:</strong> Conforme aumenta o tamanho do labirinto e o número de robôs, a diferença entre o tempo de processamento e o de movimento do modelo centralizado diminui, chegando ao ponto de ultrapassar o tempo de movimento, efetivamente se tornando um gargalo crítico.
          </p>
          <p className="mt-2 text-muted-foreground">
            Para demonstrar isso de forma explícita, foi testado também um <strong>labirinto 60x60 com 80 robôs</strong> que comprova esse limite. No entanto, ressalta-se que todos os gráficos abaixo correspondem ao cenário base padrão do experimento de <strong>40x40 com 10 agentes</strong>.
          </p>
        </div>
      </SlideContent>

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
