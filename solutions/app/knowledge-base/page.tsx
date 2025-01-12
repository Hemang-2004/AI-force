"use client"

import { useState } from 'react'
import { Search, FileText, Video, Book, Lightbulb, Settings, MessageSquare } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { KnowledgeBaseChat } from "@/components/knowledge-base/chat"

const articles = {
  policies: [
    { id: 1, title: "Claims Processing Policy", content: "Step-by-step guide on processing claims...", views: 245 },
    { id: 2, title: "Underwriting Guidelines", content: "Detailed underwriting procedures...", views: 189 },
    { id: 3, title: "Policy Renewal Process", content: "How to handle policy renewals...", views: 156 },
    { id: 4, title: "Claims Documentation Requirements", content: "Required documents for claims...", views: 234 },
    { id: 5, title: "Policy Cancellation Procedures", content: "Steps for policy cancellation...", views: 178 },
    { id: 6, title: "Coverage Limitations", content: "Understanding coverage limits...", views: 198 },
    { id: 7, title: "Premium Calculation Methods", content: "How premiums are calculated...", views: 167 },
    { id: 8, title: "Policy Endorsement Rules", content: "Guidelines for policy endorsements...", views: 145 },
    { id: 9, title: "Claims Appeal Process", content: "How to handle claims appeals...", views: 213 },
    { id: 10, title: "Policy Issuance Standards", content: "Standards for issuing new policies...", views: 189 }
  ],
  guidelines: [
    { id: 1, title: "Customer Communication Standards", content: "Best practices for customer communication...", views: 312 },
    { id: 2, title: "Risk Assessment Guidelines", content: "How to assess various risks...", views: 278 },
    { id: 3, title: "Complaint Handling Procedures", content: "Managing customer complaints...", views: 245 },
    { id: 4, title: "Documentation Best Practices", content: "Guidelines for proper documentation...", views: 198 },
    { id: 5, title: "Quality Assurance Standards", content: "Maintaining service quality...", views: 167 },
    { id: 6, title: "Emergency Response Protocol", content: "Handling emergency situations...", views: 223 },
    { id: 7, title: "Data Privacy Guidelines", content: "Protecting customer information...", views: 289 },
    { id: 8, title: "Regulatory Compliance Guide", content: "Staying compliant with regulations...", views: 334 },
    { id: 9, title: "Customer Service Standards", content: "Delivering excellent service...", views: 256 },
    { id: 10, title: "Ethics and Conduct Guidelines", content: "Professional conduct standards...", views: 301 }
  ],
  tutorials: [
    { id: 1, title: "New Agent Orientation", content: "Getting started as a new agent...", views: 567 },
    { id: 2, title: "Claims System Tutorial", content: "How to use the claims system...", views: 432 },
    { id: 3, title: "Policy Management System", content: "Managing policies effectively...", views: 389 },
    { id: 4, title: "Customer Database Training", content: "Using the customer database...", views: 298 },
    { id: 5, title: "Report Generation Guide", content: "Creating and managing reports...", views: 345 },
    { id: 6, title: "Communication Tools Tutorial", content: "Using communication platforms...", views: 267 },
    { id: 7, title: "Document Management System", content: "Managing digital documents...", views: 312 },
    { id: 8, title: "Risk Assessment Tools", content: "Using risk assessment tools...", views: 289 },
    { id: 9, title: "Customer Portal Guide", content: "Navigating the customer portal...", views: 356 },
    { id: 10, title: "Mobile App Tutorial", content: "Using the mobile application...", views: 278 }
  ]
}

export default function KnowledgeBasePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedArticle, setSelectedArticle] = useState<any>(null)

  const getIcon = (type: string) => {
    switch (type) {
      case 'policies':
        return <Book className="h-4 w-4 text-yellow-400" />
      case 'guidelines':
        return <Lightbulb className="h-4 w-4 text-yellow-400" />
      case 'tutorials':
        return <Video className="h-4 w-4 text-yellow-400" />
      default:
        return <FileText className="h-4 w-4 text-yellow-400" />
    }
  }

  const handleArticleClick = (article: any) => {
    setSelectedArticle(article)
  }

  const renderArticleTable = (type: 'policies' | 'guidelines' | 'tutorials') => {
    const filteredArticles = articles[type].filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
      <div className="rounded-md border border-yellow-400/20">
        <Table>
          <TableHeader>
            <TableRow className="border-yellow-400/20 hover:bg-yellow-400/5">
              <TableHead className="text-yellow-400">Title</TableHead>
              <TableHead className="text-yellow-400">Preview</TableHead>
              <TableHead className="text-yellow-400 text-right">Views</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredArticles.map((article) => (
              <TableRow 
                key={article.id}
                className="border-yellow-400/20 hover:bg-yellow-400/5 cursor-pointer"
                onClick={() => handleArticleClick(article)}
              >
                <TableCell className="font-medium text-white">
                  <div className="flex items-center gap-2">
                    {getIcon(type)}
                    {article.title}
                  </div>
                </TableCell>
                <TableCell className="text-gray-400">
                  {article.content.substring(0, 50)}...
                </TableCell>
                <TableCell className="text-right text-gray-400">{article.views}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-yellow-400">Knowledge Base</h1>
          <div className="relative w-96">
            <Search className="absolute left-3 top-3 h-4 w-4 text-yellow-400" />
            <Input
              placeholder="Search articles..."
              className="pl-10 bg-black/20 border-yellow-400/20 text-white placeholder:text-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
              <CardHeader>
                <CardTitle>
                  <Tabs defaultValue="policies" className="w-full">
                    <TabsList className="bg-black/40 border border-yellow-400/20">
                      <TabsTrigger 
                        value="policies"
                        className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
                      >
                        Policies
                      </TabsTrigger>
                      <TabsTrigger 
                        value="guidelines"
                        className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
                      >
                        Guidelines
                      </TabsTrigger>
                      <TabsTrigger 
                        value="tutorials"
                        className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
                      >
                        Tutorials
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="policies" className="mt-6">
                      {renderArticleTable('policies')}
                    </TabsContent>
                    <TabsContent value="guidelines" className="mt-6">
                      {renderArticleTable('guidelines')}
                    </TabsContent>
                    <TabsContent value="tutorials" className="mt-6">
                      {renderArticleTable('tutorials')}
                    </TabsContent>
                  </Tabs>
                </CardTitle>
              </CardHeader>
            </Card>
          </div>

          <div>
            {selectedArticle ? (
              <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
                <CardHeader>
                  <CardTitle className="text-yellow-400">{selectedArticle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white">{selectedArticle.content}</p>
                </CardContent>
              </Card>
            ) : null}

            <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20 mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-yellow-400" />
                  <span className="text-yellow-400">Knowledge Assistant</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <KnowledgeBaseChat articles={articles} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

