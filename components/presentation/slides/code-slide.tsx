"use client"

import { SlideContainer, SlideTitle, SlideSubtitle, SlideContent } from "../slide-container"
import { CodeBlock } from "../code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const hedacCode = `class CentralizedMazeExploration:
    def __init__(self, maze_file, num_agents):
        self.maze = self._load_maze(maze_file)
        self.agents = self._initialize_agents(num_agents)
        self.visited_global = np.zeros_like(self.maze)
        
    def solve_poisson(self):
        # Fonte: celulas nao visitadas
        source = (1 - self.visited_global) * (self.maze == 0)
        # Resolve equacao de Poisson
        phi = scipy.ndimage.laplace(source)
        return phi
        
    def step(self):
        phi = self.solve_poisson()
        for agent in self.agents:
            gradient = self._compute_gradient(phi, agent.pos)
            agent.move(gradient)
            self.visited_global[agent.pos] = 1`

const stigmergyCode = `class DecentralizedMazeExploration:
    def __init__(self, maze_file, num_agents):
        self.maze = self._load_maze(maze_file)
        self.agents = self._initialize_agents(num_agents)
        self.pheromone_map = np.zeros_like(self.maze)
        
    def get_local_view(self, pos, radius=1):
        # Retorna vizinhanca local do agente
        neighbors = self._get_neighbors(pos, radius)
        return [(n, self.pheromone_map[n]) for n in neighbors]
        
    def step(self):
        for agent in self.agents:
            local_info = self.get_local_view(agent.pos)
            # Escolhe direcao com menor feromonio
            best_dir = min(local_info, key=lambda x: x[1])
            agent.move_to(best_dir[0])
            # Deposita feromonio
            self.pheromone_map[agent.pos] += 1`

const mazeCode = `def generate_maze_file(width, height, filename):
    """Gera labirinto usando BacktrackingGenerator"""
    m = Maze()
    m.generator = BacktrackingGenerator(width, height)
    m.generate()
    m.generate_entrances()
    
    # Converte para formato de arquivo
    with open(filename, 'w') as f:
        for row in m.grid:
            line = ''.join(['#' if cell else '.' for cell in row])
            f.write(line + '\\n')
    return m

# Configuracoes do experimento
W, H = 25, 25          # Dimensoes do labirinto
NUM_AGENTS = 5         # Numero de agentes
MAX_ITERATIONS = 3000  # Limite de iteracoes`

export function CodeSlide() {
  return (
    <SlideContainer>
      <SlideTitle>Implementacao</SlideTitle>
      <SlideSubtitle>
        Codigo Python para simulacao das arquiteturas
      </SlideSubtitle>

      <SlideContent delay={0.3}>
        <Tabs defaultValue="hedac" className="w-full">
          <TabsList className="glass mb-6">
            <TabsTrigger value="hedac" className="data-[state=active]:bg-primary/20">
              HEDAC (Centralizada)
            </TabsTrigger>
            <TabsTrigger value="stigmergy" className="data-[state=active]:bg-accent/20">
              Estigmergia (Descentralizada)
            </TabsTrigger>
            <TabsTrigger value="maze" className="data-[state=active]:bg-muted">
              Geracao do Labirinto
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="hedac">
            <CodeBlock
              code={hedacCode}
              language="python"
              title="centralized_exploration.py"
            />
          </TabsContent>
          
          <TabsContent value="stigmergy">
            <CodeBlock
              code={stigmergyCode}
              language="python"
              title="decentralized_exploration.py"
            />
          </TabsContent>
          
          <TabsContent value="maze">
            <CodeBlock
              code={mazeCode}
              language="python"
              title="maze_generator.py"
            />
          </TabsContent>
        </Tabs>
      </SlideContent>

      <SlideContent delay={0.4}>
        <div className="mt-8 mb-4">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2 text-center text-primary">Demonstração Visual</h3>
            <p className="text-sm text-muted-foreground text-center mb-6 max-w-3xl">
              Abaixo, observamos o funcionamento prático de cada modelo. A animação do <strong>modelo centralizado</strong> demonstra a solução guiada pelo cálculo do campo potencial de difusão de calor (HEDAC), enquanto a <strong>descentralizada</strong> exibe os agentes explorando de forma autônoma baseada na dispersão de feromônios (Estigmergia).
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-4 rounded-xl flex flex-col items-center cursor-pointer group transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <h4 className="font-medium mb-3 text-white/90 group-hover:text-primary transition-colors">Sistema Centralizado (HEDAC)</h4>
              <div className="relative w-full aspect-square md:aspect-video rounded-lg overflow-hidden bg-background">
                <img src="/images/animacao_centralizada.gif" alt="Animação Centralizada" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="glass p-4 rounded-xl flex flex-col items-center cursor-pointer group transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
              <h4 className="font-medium mb-3 text-white/90 group-hover:text-accent transition-colors">Sistema Descentralizado (Estigmergia)</h4>
              <div className="relative w-full aspect-square md:aspect-video rounded-lg overflow-hidden bg-background">
                <img src="/images/animacao_descentralizada.gif" alt="Animação Descentralizada" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </SlideContent>

      {/* Presenter badge */}
      <SlideContent delay={0.5}>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-xl">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center">
              <span className="font-bold text-sm">AA</span>
            </div>
            <div className="text-left">
              <div className="font-medium text-sm">Alex Andrade Trauthman</div>
              <div className="text-xs text-muted-foreground">Explicacao do Codigo</div>
            </div>
          </div>
        </div>
      </SlideContent>
    </SlideContainer>
  )
}
