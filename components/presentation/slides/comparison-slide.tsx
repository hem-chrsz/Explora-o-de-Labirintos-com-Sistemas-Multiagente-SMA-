"use client"

import { SlideContainer, SlideTitle, SlideSubtitle, SlideContent } from "../slide-container"
import { motion } from "framer-motion"
import { SingleImage } from "../image-gallery"
import { ArrowRight, Clock, Cpu, Shield, Zap } from "lucide-react"

export function ComparisonSlide() {
  return (
    <SlideContainer>
      <SlideTitle>Analise Comparativa</SlideTitle>
      <SlideSubtitle>
        Trade-offs entre eficiencia e resiliencia
      </SlideSubtitle>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <SlideContent delay={0.3}>
          <div className="space-y-6">
            <SingleImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ukERt22vFSJYMkJCBiEBHUL8aum7xH.png"
              alt="Comparacao com tempo de iteracao"
              caption="Cobertura com cada iteracao valendo 0.15 segundos"
            />
            
            <SingleImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-i2u4yHByYkfgBbIIG6VEAXlrjyNWLI.png"
              alt="Evolucao da Cobertura - 3 Execucoes"
              caption="Evolucao da Cobertura (Media de 3 Execucoes)"
            />
          </div>
        </SlideContent>

        <SlideContent delay={0.5}>
          <div className="glass p-8 rounded-xl h-full">
            <h3 className="text-xl font-semibold mb-6">Principais Insights</h3>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Eficiencia</h4>
                  <p className="text-sm text-muted-foreground">HEDAC alcanca 100% de cobertura com 791 iteracoes vs 1091 da Estigmergia</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Tempo de Execucao</h4>
                  <p className="text-sm text-muted-foreground">Centralizada: 118.69s | Descentralizada: 163.69s | Baseline: 450s (timeout)</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Custo Computacional</h4>
                  <p className="text-sm text-muted-foreground">HEDAC exige mais processamento no no central, mas compensa com menos iteracoes</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Resiliencia</h4>
                  <p className="text-sm text-muted-foreground">Estigmergia continua funcionando mesmo se agentes falharem</p>
                </div>
              </motion.div>
            </div>

            {/* Trade-off visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
              className="mt-8 p-4 bg-card/50 rounded-lg"
            >
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-primary font-medium">Eficiencia</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                <span className="text-accent font-medium">Resiliencia</span>
              </div>
              <div className="h-2 rounded-full bg-gradient-to-r from-primary via-muted to-accent" />
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>HEDAC</span>
                <span>Estigmergia</span>
              </div>
            </motion.div>
          </div>
        </SlideContent>
      </div>

      {/* Presenter badge */}
      <SlideContent delay={0.7}>
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-xl">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center">
              <span className="font-bold text-sm">JA</span>
            </div>
            <div className="text-left">
              <div className="font-medium text-sm">Joao Antonio Fernandes</div>
              <div className="text-xs text-muted-foreground">Analise Comparativa</div>
            </div>
          </div>
        </div>
      </SlideContent>
    </SlideContainer>
  )
}
