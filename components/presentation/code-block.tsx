"use client"

import { motion } from "framer-motion"

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

export function CodeBlock({ code, language = "python", title }: CodeBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass rounded-xl overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          {title && (
            <span className="ml-3 text-sm text-muted-foreground font-mono">{title}</span>
          )}
        </div>
        <span className="text-xs text-muted-foreground font-mono uppercase">{language}</span>
      </div>
      
      {/* Code content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono leading-relaxed">
          <code className="text-foreground/90">
            {code.split('\n').map((line, i) => (
              <div key={i} className="flex">
                <span className="w-8 text-muted-foreground/50 select-none text-right pr-4">
                  {i + 1}
                </span>
                <span className="flex-1">
                  {highlightSyntax(line)}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </motion.div>
  )
}

function highlightSyntax(line: string) {
  // Simple syntax highlighting
  const keywords = ['def', 'class', 'return', 'if', 'else', 'elif', 'for', 'while', 'import', 'from', 'as', 'in', 'not', 'and', 'or', 'True', 'False', 'None', 'self', 'async', 'await', 'try', 'except', 'with']
  const builtins = ['print', 'range', 'len', 'int', 'float', 'str', 'list', 'dict', 'set', 'tuple', 'np', 'scipy']
  
  let result = line
  
  // Highlight comments
  if (line.includes('#')) {
    const commentIndex = line.indexOf('#')
    const beforeComment = line.substring(0, commentIndex)
    const comment = line.substring(commentIndex)
    return (
      <>
        {processLine(beforeComment, keywords, builtins)}
        <span className="text-muted-foreground italic">{comment}</span>
      </>
    )
  }
  
  return processLine(result, keywords, builtins)
}

function processLine(line: string, keywords: string[], builtins: string[]) {
  // Highlight strings
  const stringRegex = /(["'])(?:(?=(\\?))\2.)*?\1/g
  const parts: (string | JSX.Element)[] = []
  let lastIndex = 0
  let match
  
  const temp = line
  const stringMatches: { start: number; end: number; content: string }[] = []
  
  while ((match = stringRegex.exec(temp)) !== null) {
    stringMatches.push({
      start: match.index,
      end: match.index + match[0].length,
      content: match[0]
    })
  }
  
  if (stringMatches.length === 0) {
    return highlightKeywords(line, keywords, builtins)
  }
  
  stringMatches.forEach((sm, i) => {
    if (sm.start > lastIndex) {
      parts.push(
        <span key={`text-${i}`}>
          {highlightKeywords(line.substring(lastIndex, sm.start), keywords, builtins)}
        </span>
      )
    }
    parts.push(
      <span key={`string-${i}`} className="text-green-400">
        {sm.content}
      </span>
    )
    lastIndex = sm.end
  })
  
  if (lastIndex < line.length) {
    parts.push(
      <span key="text-end">
        {highlightKeywords(line.substring(lastIndex), keywords, builtins)}
      </span>
    )
  }
  
  return <>{parts}</>
}

function highlightKeywords(text: string, keywords: string[], builtins: string[]): JSX.Element {
  const words = text.split(/(\s+|[()[\]{}:,.])/g)
  
  return (
    <>
      {words.map((word, i) => {
        if (keywords.includes(word)) {
          return <span key={i} className="text-purple-400 font-medium">{word}</span>
        }
        if (builtins.includes(word)) {
          return <span key={i} className="text-cyan-400">{word}</span>
        }
        if (/^\d+$/.test(word)) {
          return <span key={i} className="text-orange-400">{word}</span>
        }
        return <span key={i}>{word}</span>
      })}
    </>
  )
}
