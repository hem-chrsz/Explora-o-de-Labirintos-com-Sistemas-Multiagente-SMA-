"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
  variant?: "default" | "cyan" | "purple"
}

export function FeatureCard({ icon, title, description, delay = 0, variant = "default" }: FeatureCardProps) {
  const glowClass = variant === "cyan" ? "glow-cyan" : variant === "purple" ? "glow-purple" : ""
  const borderClass = variant === "cyan" 
    ? "border-primary/30 hover:border-primary/50" 
    : variant === "purple" 
      ? "border-accent/30 hover:border-accent/50" 
      : "border-border/50 hover:border-border"

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`glass p-6 rounded-xl border transition-all duration-300 ${borderClass} ${glowClass}`}
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
        variant === "cyan" ? "bg-primary/20 text-primary" : 
        variant === "purple" ? "bg-accent/20 text-accent" : 
        "bg-muted text-foreground"
      }`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

interface ComparisonCardProps {
  title: string
  items: string[]
  variant: "cyan" | "purple"
  delay?: number
}

export function ComparisonCard({ title, items, variant, delay = 0 }: ComparisonCardProps) {
  const colorClass = variant === "cyan" ? "text-primary border-primary/30" : "text-accent border-accent/30"
  const bgClass = variant === "cyan" ? "bg-primary/10" : "bg-accent/10"
  const glowClass = variant === "cyan" ? "glow-cyan" : "glow-purple"

  return (
    <motion.div
      initial={{ opacity: 0, x: variant === "cyan" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`glass p-8 rounded-xl border ${colorClass} ${glowClass}`}
    >
      <h3 className={`text-2xl font-bold mb-6 ${colorClass}`}>{title}</h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: delay + 0.1 * index }}
            viewport={{ once: true }}
            className="flex items-start gap-3"
          >
            <div className={`w-2 h-2 rounded-full mt-2 ${bgClass} ${variant === "cyan" ? "bg-primary" : "bg-accent"}`} />
            <span className="text-foreground/90">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

interface StatCardProps {
  value: string
  label: string
  delay?: number
}

export function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="glass p-6 rounded-xl text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary text-glow-cyan mb-2">
        {value}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  )
}
