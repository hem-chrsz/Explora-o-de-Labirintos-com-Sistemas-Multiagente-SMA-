"use client"

import { motion } from "framer-motion"
import { SlideContainer } from "../slide-container"
import { ChevronDown } from "lucide-react"

export function IntroSlide() {
  return (
    <SlideContainer className="relative">
      <div className="text-center">
        {/* Institution badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">Universidade Estadual do Tocantins - UNITINS</span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance"
        >
          <span className="text-glow-cyan">Sistemas</span>
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Multiagente
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8"
        >
          Exploracao de Labirintos com Inteligencia Artificial
        </motion.p>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {["Arquitetura Centralizada", "vs", "Arquitetura Descentralizada"].map((text, i) => (
            <span
              key={i}
              className={`${
                text === "vs"
                  ? "text-accent font-bold"
                  : "glass px-4 py-2 rounded-lg text-sm font-medium"
              }`}
            >
              {text}
            </span>
          ))}
        </motion.div>

        {/* Course info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground"
        >
          <span>Sistemas de Informacao</span>
          <span className="hidden md:block">|</span>
          <span>Topicos Especiais em IA</span>
        </motion.div>

        {/* Presenter badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 inline-flex items-center gap-3 glass px-6 py-3 rounded-xl"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center">
            <span className="font-bold">HC</span>
          </div>
          <div className="text-left">
            <div className="font-semibold">Hemilly Christinne Silva Pereira</div>
            <div className="text-xs text-muted-foreground">Abertura</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs">Role para explorar</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </SlideContainer>
  )
}
