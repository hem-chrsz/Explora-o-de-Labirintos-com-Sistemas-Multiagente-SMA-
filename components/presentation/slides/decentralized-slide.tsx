"use client"

import { SlideContainer, SlideTitle, SlideSubtitle, SlideContent } from "../slide-container"
import { motion } from "framer-motion"
import { Shuffle, Eye, Footprints, Shield } from "lucide-react"

export function DecentralizedSlide() {
  return (
    <SlideContainer>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center glow-purple">
          <Shuffle className="w-6 h-6 text-accent" />
        </div>
        <div>
          <SlideTitle className="mb-0">Arquitetura Descentralizada</SlideTitle>
        </div>
      </div>
      <SlideSubtitle>
        Estigmergia - Coordenacao Indireta Inspirada na Natureza
      </SlideSubtitle>

      <div className="grid lg:grid-cols-2 gap-8">
        <SlideContent delay={0.3}>
          <div className="glass p-8 rounded-xl h-full">
            <h3 className="text-xl font-semibold mb-6 text-accent flex items-center gap-2">
              <Footprints className="w-5 h-5" />
              Sistema de Feromonios
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 text-sm font-bold text-accent">1</div>
                <div>
                  <h4 className="font-medium mb-1">Deposito de Feromonios</h4>
                  <p className="text-sm text-muted-foreground">Agentes marcam celulas visitadas incrementando um contador no ambiente</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 text-sm font-bold text-accent">2</div>
                <div>
                  <h4 className="font-medium mb-1">Decisao Local</h4>
                  <p className="text-sm text-muted-foreground">Cada agente escolhe direcoes com menor contagem de visitas na vizinhanca</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 text-sm font-bold text-accent">3</div>
                <div>
                  <h4 className="font-medium mb-1">Emergencia Coletiva</h4>
                  <p className="text-sm text-muted-foreground">Comportamento global emerge de regras locais simples</p>
                </div>
              </div>
            </div>
          </div>
        </SlideContent>

        <SlideContent delay={0.5}>
          <div className="glass p-8 rounded-xl h-full">
            <h3 className="text-xl font-semibold mb-6 text-accent flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Visao Local do Agente
            </h3>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-2 max-w-[200px] mx-auto mb-6"
            >
              {[1, 3, 2, 5, 0, 1, 2, 4, 3].map((val, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-lg flex items-center justify-center text-sm font-mono ${
                    i === 4
                      ? "bg-accent text-accent-foreground"
                      : val === 0
                        ? "bg-primary/30 text-primary"
                        : "bg-card/50 text-muted-foreground"
                  }`}
                >
                  {i === 4 ? "A" : val}
                </div>
              ))}
            </motion.div>
            <p className="text-sm text-muted-foreground text-center mb-6">
              Numeros = contagem de visitas | A = Agente
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-accent mt-1" />
                <div>
                  <h4 className="font-medium">Vantagens</h4>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                    <li>- Alta resiliencia a falhas</li>
                    <li>- Escalabilidade natural</li>
                    <li>- Sem ponto unico de falha</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-destructive mt-1" />
                <div>
                  <h4 className="font-medium">Desvantagens</h4>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                    <li>- Menos eficiente globalmente</li>
                    <li>- Mais iteracoes necessarias</li>
                    <li>- Pode haver sobreposicao</li>
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
              <span className="font-bold text-sm">LG</span>
            </div>
            <div className="text-left">
              <div className="font-medium text-sm">Lucas Gabriel Sousa da Silva</div>
              <div className="text-xs text-muted-foreground">Arquitetura Estigmergia</div>
            </div>
          </div>
        </div>
      </SlideContent>
    </SlideContainer>
  )
}
