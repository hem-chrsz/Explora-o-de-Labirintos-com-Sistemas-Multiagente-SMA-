"use client"

import { SlideContainer, SlideTitle, SlideSubtitle, SlideContent } from "../slide-container"
import { FeatureCard } from "../feature-card"
import { Map, Users, Brain, AlertTriangle } from "lucide-react"

export function ProblemSlide() {
  return (
    <SlideContainer>
      <SlideTitle>O Problema</SlideTitle>
      <SlideSubtitle>
        Como explorar ambientes complexos de forma eficiente usando multiplos agentes autonomos?
      </SlideSubtitle>

      <SlideContent delay={0.3}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <FeatureCard
            icon={<Map className="w-6 h-6" />}
            title="Ambientes Desconhecidos"
            description="Labirintos e espacos complexos sem mapeamento previo disponivel"
            delay={0.4}
            variant="cyan"
          />
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title="Multiplos Agentes"
            description="Coordenacao de varios robos para maximizar eficiencia"
            delay={0.5}
            variant="purple"
          />
          <FeatureCard
            icon={<Brain className="w-6 h-6" />}
            title="Tomada de Decisao"
            description="Algoritmos inteligentes para navegacao autonoma"
            delay={0.6}
            variant="cyan"
          />
          <FeatureCard
            icon={<AlertTriangle className="w-6 h-6" />}
            title="Trade-offs"
            description="Equilibrio entre otimizacao global e resiliencia do sistema"
            delay={0.7}
            variant="purple"
          />
        </div>
      </SlideContent>

      <SlideContent delay={0.8}>
        <div className="glass p-8 rounded-xl max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-primary">Aplicacoes do Mundo Real</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">Busca e Resgate</div>
              <p className="text-sm text-muted-foreground">Exploracao de areas de desastre</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">Mapeamento</div>
              <p className="text-sm text-muted-foreground">Robotica autonoma</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">Logistica</div>
              <p className="text-sm text-muted-foreground">Armazens inteligentes</p>
            </div>
          </div>
        </div>
      </SlideContent>
    </SlideContainer>
  )
}
