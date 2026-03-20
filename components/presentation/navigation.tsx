"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown } from "lucide-react"

const slides = [
  { id: "intro", label: "Abertura" },
  { id: "problema", label: "O Problema" },
  { id: "solucao", label: "A Solucao" },
  { id: "centralizada", label: "HEDAC" },
  { id: "descentralizada", label: "Estigmergia" },
  { id: "codigo", label: "Codigo" },
  { id: "resultados", label: "Resultados" },
  { id: "comparacao", label: "Comparacao" },
  { id: "conclusao", label: "Conclusao" },
  { id: "equipe", label: "Equipe" },
]

export function Navigation() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const currentSlide = Math.round(scrollPosition / windowHeight)
      setActiveSlide(Math.min(currentSlide, slides.length - 1))
      setIsVisible(scrollPosition > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSlide = (index: number) => {
    const element = document.getElementById(slides[index].id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const navigateUp = () => {
    if (activeSlide > 0) {
      scrollToSlide(activeSlide - 1)
    }
  }

  const navigateDown = () => {
    if (activeSlide < slides.length - 1) {
      scrollToSlide(activeSlide + 1)
    }
  }

  return (
    <>
      {/* Progress bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: (activeSlide + 1) / slides.length }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent origin-left z-50"
      />

      {/* Side navigation dots */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3"
          >
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => scrollToSlide(index)}
                className="group flex items-center gap-3"
                aria-label={`Ir para ${slide.label}`}
              >
                <span className={`text-xs font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 ${
                  activeSlide === index ? "text-primary" : "text-muted-foreground"
                }`}>
                  {slide.label}
                </span>
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSlide === index
                      ? "bg-primary scale-150 glow-cyan"
                      : "bg-muted-foreground/50 hover:bg-primary/50"
                  }`}
                />
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Navigation arrows */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-8 right-8 z-50 flex flex-col gap-2"
          >
            <button
              onClick={navigateUp}
              disabled={activeSlide === 0}
              className="p-2 glass rounded-full disabled:opacity-30 hover:glow-cyan transition-all"
              aria-label="Slide anterior"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
            <button
              onClick={navigateDown}
              disabled={activeSlide === slides.length - 1}
              className="p-2 glass rounded-full disabled:opacity-30 hover:glow-cyan transition-all"
              aria-label="Proximo slide"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide counter */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-8 left-8 z-50 glass px-4 py-2 rounded-full text-sm font-mono"
          >
            <span className="text-primary">{String(activeSlide + 1).padStart(2, "0")}</span>
            <span className="text-muted-foreground"> / {String(slides.length).padStart(2, "0")}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
