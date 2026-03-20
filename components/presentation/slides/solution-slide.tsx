"use client"

import { SlideContainer, SlideTitle, SlideSubtitle, SlideContent } from "../slide-container"
import { ComparisonCard } from "../feature-card"
import { motion } from "framer-motion"

export function SolutionSlide() {
  return (
    <SlideContainer>
      <SlideTitle>Nossa Abordagem</SlideTitle>
      <SlideSubtitle>
        Implementacao e analise comparativa de duas arquiteturas fundamentais em Sistemas Multiagente
      </SlideSubtitle>

      <SlideContent delay={0.3}>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ComparisonCard
            title="HEDAC - Centralizada"
            items={[
              "Campo potencial global via equacao de Poisson",
              "Coordenacao otimizada pelo no central",
              "Direciona agentes para areas nao exploradas",
              "Alta eficiencia na cobertura",
              "Depende de comunicacao centralizada"
            ]}
            variant="cyan"
            delay={0.4}
          />
          <ComparisonCard
            title="Estigmergia - Descentralizada"
            items={[
              "Agentes operam de forma autonoma",
              "Decisoes baseadas em visao local",
              "Sistema de feromonios no ambiente",
              "Maior resiliencia a falhas",
              "Independencia computacional"
            ]}
            variant="purple"
            delay={0.5}
          />
        </div>
      </SlideContent>

      <SlideContent delay={0.6}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass p-6 rounded-xl max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="text-primary font-semibold">VS</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>
          <p className="text-muted-foreground">
            Avaliando a troca compensatoria <span className="text-primary font-medium">(trade-off)</span> entre 
            otimizacao global da centralizacao frente a <span className="text-accent font-medium">resiliencia e independencia</span> da descentralizacao
          </p>
        </motion.div>
      </SlideContent>
    </SlideContainer>
  )
}
