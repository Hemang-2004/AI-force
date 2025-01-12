"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Book, FileText, HelpCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const knowledgeBase = [
  {
    id: 1,
    title: "How to file a claim",
    content: "Step by step guide to filing a new claim in the system...",
    category: "Claims"
  },
  {
    id: 2,
    title: "Required documents",
    content: "List of required documents for different claim types...",
    category: "Documentation"
  },
  {
    id: 3,
    title: "Claim status check",
    content: "Guide to checking and updating claim status...",
    category: "Claims"
  },
  {
    id: 4,
    title: "Risk Assessment",
    content: "Guidelines for conducting risk assessment...",
    category: "Assessment"
  }
]

export function KnowledgeBase() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredArticles = knowledgeBase.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.content.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Card className="bg-black/40 backdrop-blur-sm text-white border-yellow-400/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Book className="h-5 w-5 text-white" />
          Agent Knowledge Base
        </CardTitle>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search knowledge base..."
            className="pl-8 bg-black/20"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent>
        <AnimatePresence>
          <div className="space-y-4">
            {filteredArticles.map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-4 rounded-lg border border-white/10 hover:bg-white/5 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">{article.title}</h3>
                    <p className="text-sm text-gray-400">{article.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}

