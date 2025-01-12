"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, User } from 'lucide-react'

interface Message {
  type: 'bot' | 'user'
  content: string
}

const QUICK_PROMPTS = [
  "How do I process a claim?",
  "What are the documentation requirements?",
  "How do I handle customer complaints?",
  "What are the policy renewal steps?",
]

export function KnowledgeBaseChat({ articles }: any) {
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', content: "Hello! I'm your knowledge assistant. How can I help you today?" }
  ])
  const [input, setInput] = useState('')

  const searchKnowledgeBase = (query: string) => {
    const allArticles = [
      ...articles.policies,
      ...articles.guidelines,
      ...articles.tutorials
    ]
    
    const relevantArticles = allArticles.filter(article =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.content.toLowerCase().includes(query.toLowerCase())
    )

    if (relevantArticles.length > 0) {
      const article = relevantArticles[0]
      return `Based on our knowledge base: ${article.content}`
    }

    return "I'm sorry, I couldn't find specific information about that in our knowledge base. Please try rephrasing your question or contact support for more help."
  }

  const handleSend = (message: string) => {
    if (!message.trim()) return

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: message }])

    // Search knowledge base and add bot response
    const response = searchKnowledgeBase(message)
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', content: response }])
    }, 500)

    setInput('')
  }

  return (
    <div className="flex flex-col h-[500px]">
      <ScrollArea className="flex-1 pr-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-2 ${
                message.type === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.type === 'bot' && (
                <Bot className="h-8 w-8 rounded-full bg-yellow-400/20 p-2 text-yellow-400" />
              )}
              <div
                className={`rounded-lg px-3 py-2 max-w-[80%] ${
                  message.type === 'user'
                    ? 'bg-yellow-400 text-black'
                    : 'bg-yellow-400/20 text-white'
                }`}
              >
                {message.content}
              </div>
              {message.type === 'user' && (
                <User className="h-8 w-8 rounded-full bg-yellow-400 p-2 text-black" />
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="space-y-4 mt-4">
        <div className="flex flex-wrap gap-2 text-black">
          {QUICK_PROMPTS.map((prompt, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="border-yellow-400/20 text-black-800 hover:bg-yellow-400/10"
              onClick={() => handleSend(prompt)}
            >
              {prompt}
            </Button>
          ))}
        </div>

        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 bg-black/20 border-yellow-400/20 text-white placeholder:text-gray-400"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSend(input)
              }
            }}
          />
          <Button
            onClick={() => handleSend(input)}
            className="bg-yellow-400 text-black hover:bg-yellow-500"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}

