"use client"

import { motion } from "framer-motion"

interface TeamMemberProps {
  name: string
  role: string
  delay?: number
}

export function TeamMember({ name, role, delay = 0 }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="glass p-6 rounded-xl text-center group hover:glow-cyan transition-all duration-300"
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 mx-auto mb-4 flex items-center justify-center group-hover:from-primary/50 group-hover:to-accent/50 transition-all">
        <span className="text-2xl font-bold text-foreground">
          {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </span>
      </div>
      <h3 className="font-semibold text-lg mb-1">{name}</h3>
      <p className="text-sm text-muted-foreground">{role}</p>
    </motion.div>
  )
}
