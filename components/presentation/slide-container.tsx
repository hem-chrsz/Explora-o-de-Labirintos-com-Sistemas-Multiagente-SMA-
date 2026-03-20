"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SlideContainerProps {
  children: ReactNode
  className?: string
}

export function SlideContainer({ children, className = "" }: SlideContainerProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden ${className}`}
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-16">
        {children}
      </div>
    </motion.section>
  )
}

export function SlideTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-5xl lg:text-6xl font-bold text-glow-cyan mb-4 text-balance ${className}`}
    >
      {children}
    </motion.h2>
  )
}

export function SlideSubtitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className={`text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl ${className}`}
    >
      {children}
    </motion.p>
  )
}

export function SlideContent({ children, className = "", delay = 0.3 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
