"use client"

import { Navigation } from "@/components/presentation/navigation"
import { AnimatedBackground } from "@/components/presentation/animated-background"
import { IntroSlide } from "@/components/presentation/slides/intro-slide"
import { ProblemSlide } from "@/components/presentation/slides/problem-slide"
import { SolutionSlide } from "@/components/presentation/slides/solution-slide"
import { CentralizedSlide } from "@/components/presentation/slides/centralized-slide"
import { DecentralizedSlide } from "@/components/presentation/slides/decentralized-slide"
import { CodeSlide } from "@/components/presentation/slides/code-slide"
import { ResultsSlide } from "@/components/presentation/slides/results-slide"
import { ComparisonSlide } from "@/components/presentation/slides/comparison-slide"
import { ConclusionSlide } from "@/components/presentation/slides/conclusion-slide"
import { TeamSlide } from "@/components/presentation/slides/team-slide"

export default function PresentationPage() {
  return (
    <main className="relative">
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Slides */}
      <div className="relative z-10">
        <section id="intro">
          <IntroSlide />
        </section>
        
        <section id="problema">
          <ProblemSlide />
        </section>
        
        <section id="solucao">
          <SolutionSlide />
        </section>
        
        <section id="centralizada">
          <CentralizedSlide />
        </section>
        
        <section id="descentralizada">
          <DecentralizedSlide />
        </section>
        
        <section id="codigo">
          <CodeSlide />
        </section>
        
        <section id="resultados">
          <ResultsSlide />
        </section>
        
        <section id="comparacao">
          <ComparisonSlide />
        </section>
        
        <section id="conclusao">
          <ConclusionSlide />
        </section>
        
        <section id="equipe">
          <TeamSlide />
        </section>
      </div>
    </main>
  )
}
