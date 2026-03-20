"use client"

import { SlideContainer, SlideTitle, SlideSubtitle, SlideContent } from "../slide-container"
import { motion } from "framer-motion"
import { Server, Zap, Target, Network } from "lucide-react"

export function CentralizedSlide() {
  return (
    <SlideContainer>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center glow-cyan">
          <Server className="w-6 h-6 text-primary" />
        </div>
        <div>
          <SlideTitle className="mb-0">Arquitetura Centralizada</SlideTitle>
        </div>
      </div>
      <SlideSubtitle>
        HEDAC - Hybrid Entropy-Directed Area Coverage
      </SlideSubtitle>

      <div className="grid lg:grid-cols-2 gap-8">
        <SlideContent delay={0.3}>
          <div className="glass p-8 rounded-xl h-full">
            <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
              <Target className="w-5 h-5" />
              Como Funciona
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-sm font-bold text-primary">1</div>
                <div>
                  <h4 className="font-medium mb-1">Campo Potencial Global</h4>
                  <p className="text-sm text-muted-foreground">Calcula um campo potencial usando a equacao de Poisson, onde areas nao visitadas geram "atracoes"</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-sm font-bold text-primary">2</div>
                <div>
                  <h4 className="font-medium mb-1">No Central de Controle</h4>
                  <p className="text-sm text-muted-foreground">Um coordenador central processa todas as informacoes e define trajetorias otimas</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-sm font-bold text-primary">3</div>
                <div>
                  <h4 className="font-medium mb-1">Gradiente de Navegacao</h4>
                  <p className="text-sm text-muted-foreground">Agentes seguem o gradiente do campo para maximizar cobertura</p>
                </div>
              </div>
            </div>
          </div>
        </SlideContent>

        <SlideContent delay={0.5}>
          <div className="glass p-8 rounded-xl h-full">
            <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Equacao de Poisson
            </h3>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-card/50 p-6 rounded-lg mb-6 font-mono text-center"
            >
              <div className="text-2xl text-primary mb-2">
                {"∇²φ = -ρ"}
              </div>
              <p className="text-sm text-muted-foreground">
                Onde φ e o potencial e ρ representa celulas nao visitadas
              </p>
            </motion.div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Network className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Vantagens</h4>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                    <li>- Otimizacao global garantida</li>
                    <li>- Coordenacao eficiente entre agentes</li>
                    <li>- Menor numero de iteracoes</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-destructive mt-1" />
                <div>
                  <h4 className="font-medium">Desvantagens</h4>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                    <li>- Ponto unico de falha</li>
                    <li>- Maior custo computacional no no central</li>
                    <li>- Dependencia de comunicacao</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SlideContent>
      </div>

      {/* Presenter badge */}
      <SlideContent delay={0.7}>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-xl">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center">
              <span className="font-bold text-sm">JC</span>
            </div>
            <div className="text-left">
              <div className="font-medium text-sm">Julio Cesar Arraes Vieira</div>
              <div className="text-xs text-muted-foreground">Arquitetura HEDAC</div>
            </div>
          </div>
        </div>
      </SlideContent>
    </SlideContainer>
  )
}
