"use client"

import { useState, useEffect } from 'react'
import { Plus, Mic, MicOff, Search } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { AddUserDialog } from "@/components/user-tracking/add-user-dialog"
import { UserTable } from "@/components/user-tracking/user-table"

export type User = {
  id: number
  name: string
  company: string
  email: string
  claims: number
  resolvedClaims: number
  status: "active" | "resolved" | "pending"
  lastActive: string
}

const users: User[] = [
  {
    id: 1,
    name: "John Smith",
    company: "Mastercard",
    email: "john.smith@mastercard.com",
    claims: 12,
    resolvedClaims: 8,
    status: "active",
    lastActive: "2024-01-12"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "VISA",
    email: "sarah.j@visa.com",
    claims: 8,
    resolvedClaims: 8,
    status: "resolved",
    lastActive: "2024-01-11"
  },
  {
    id: 3,
    name: "Michael Chen",
    company: "Boat",
    email: "m.chen@boat.com",
    claims: 15,
    resolvedClaims: 10,
    status: "active",
    lastActive: "2024-01-12"
  }
]

export default function UserTrackingPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState("")

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition()
      recognition.continuous = false
      recognition.interimResults = false

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setTranscript(transcript)
        setSearchTerm(transcript)
        setIsListening(false)
      }

      recognition.onend = () => {
        setIsListening(false)
      }

      if (isListening) {
        recognition.start()
      }

      return () => {
        recognition.stop()
      }
    }
  }, [isListening])

  const toggleListening = () => {
    setIsListening(!isListening)
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-yellow-400">User Tracking</h1>
          <AddUserDialog />
        </div>

        <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
          <CardHeader>
            <CardTitle className="text-yellow-400">Search Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-yellow-400" />
                <Input
                  placeholder="Search by name, company, or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-black/20 border-yellow-400/20 text-white placeholder:text-gray-400"
                />
              </div>
              <Button
                variant="outline"
                className={`border-yellow-400/20 ${
                  isListening ? 'bg-yellow-400/20 text-yellow-400' : 'text-yellow-400 hover:bg-yellow-400/10'
                }`}
                onClick={toggleListening}
              >
                {isListening ? (
                  <MicOff className="h-4 w-4" />
                ) : (
                  <Mic className="h-4 w-4" />
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
          <CardHeader>
            <CardTitle className="text-yellow-400">User List</CardTitle>
          </CardHeader>
          <CardContent>
            <UserTable users={users} searchTerm={searchTerm} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

