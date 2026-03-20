"use client"

import { SlideContainer, SlideTitle, SlideSubtitle, SlideContent } from "../slide-container"
import { TeamMember } from "../team-member"
import { motion } from "framer-motion"

const teamMembers = [
  { name: "Hemilly Christinne Silva Pereira", role: "Abertura e Storytelling" },
  { name: "Alex Andrade Trauthman", role: "Explicacao do Codigo" },
  { name: "Julio Cesar Arraes Vieira", role: "Arquitetura HEDAC" },
  { name: "Lucas Gabriel Sousa da Silva", role: "Arquitetura Estigmergia" },
  { name: "Leonardo Cerqueira Brasil", role: "Analise de Resultados" },
  { name: "Joao Antonio Fernandes", role: "Comparacao e Trade-offs" },
  { name: "Jales Lima da Siqueira Junior", role: "Conclusoes" },
]

export function TeamSlide() {
  return (
    <SlideContainer>
      <SlideTitle>Nossa Equipe</SlideTitle>
      <SlideSubtitle>
        Os responsaveis por este projeto
      </SlideSubtitle>

      <SlideContent delay={0.3}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.name}
              name={member.name}
              role={member.role}
              delay={0.1 * index}
            />
          ))}
        </div>
      </SlideContent>

      <SlideContent delay={0.8}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-glow-cyan">Obrigado!</h3>
            <p className="text-muted-foreground mb-6">
              Universidade Estadual do Tocantins - UNITINS
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="glass px-4 py-2 rounded-full">Sistemas de Informacao</span>
              <span className="glass px-4 py-2 rounded-full">Topicos Especiais em IA</span>
            </div>
          </div>
        </motion.div>
      </SlideContent>
    </SlideContainer>
  )
}
