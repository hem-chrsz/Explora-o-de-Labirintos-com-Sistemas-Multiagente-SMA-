"use client"

import { SlideContainer, SlideTitle, SlideSubtitle, SlideContent } from "../slide-container"
import { motion } from "framer-motion"
import { CheckCircle, Lightbulb, Rocket } from "lucide-react"
import { SingleImage } from "../image-gallery"

export function ConclusionSlide() {
  return (
    <SlideContainer>
      <SlideTitle>Conclusoes</SlideTitle>
      <SlideSubtitle>
        Principais descobertas e implicacoes do estudo
      </SlideSubtitle>

      <div className="grid lg:grid-cols-2 gap-8">
        <SlideContent delay={0.3}>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl glow-cyan"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">HEDAC e Superior em Eficiencia</h3>
                  <p className="text-sm text-muted-foreground">
                    A arquitetura centralizada demonstrou ser 27% mais rapida na cobertura completa do labirinto, 
                    utilizando o campo potencial de Poisson para otimizacao global.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl glow-purple"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Estigmergia Oferece Robustez</h3>
                  <p className="text-sm text-muted-foreground">
                    A abordagem descentralizada, inspirada em colonias de formigas, 
                    oferece maior tolerancia a falhas e escalabilidade natural.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <Rocket className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Trabalhos Futuros</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>- Abordagens hibridas combinando ambas estrategias</li>
                    <li>- Testes em ambientes dinamicos</li>
                    <li>- Implementacao em hardware real</li>
                    <li>- Escalabilidade com centenas de agentes</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </SlideContent>

        <SlideContent delay={0.5}>
          <div className="space-y-6">
            <SingleImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-C5wErKlzcJ790liC0nAM3KjunlYnQx.png"
              alt="Consumo de Recursos - 3 Execucoes"
              caption="Consumo de Recursos Medio (3 Execucoes)"
            />
            
            <SingleImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ubv2NSTTvimcavUiWjPxRUltLJSFMM.png"
              alt="Tempo de Processamento vs Movimento"
              caption="Segundos em Processamento vs Movimento (3 Execucoes)"
            />
          </div>
        </SlideContent>
      </div>

      {/* Key takeaway */}
      <SlideContent delay={0.7}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-8 glass p-8 rounded-xl text-center max-w-4xl mx-auto"
        >
          <p className="text-lg">
            <span className="text-primary font-semibold">A escolha da arquitetura</span> deve considerar o contexto de aplicacao: 
            priorize <span className="text-primary">HEDAC</span> para <span className="font-medium">eficiencia maxima</span> ou 
            <span className="text-accent"> Estigmergia</span> para <span className="font-medium">ambientes imprevisiveis</span>.
          </p>
        </motion.div>
      </SlideContent>

      {/* Presenter badge */}
      <SlideContent delay={0.8}>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-xl">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center">
              <span className="font-bold text-sm">JL</span>
            </div>
            <div className="text-left">
              <div className="font-medium text-sm">Jales Lima da Siqueira Junior</div>
              <div className="text-xs text-muted-foreground">Conclusoes</div>
            </div>
          </div>
        </div>
      </SlideContent>
    </SlideContainer>
  )
}
