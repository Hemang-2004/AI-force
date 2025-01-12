"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export function SystemSettings() {
  const [automationThreshold, setAutomationThreshold] = useState(50)
  const [sentimentThreshold, setSentimentThreshold] = useState(70)

  return (
    <div className="space-y-6">
      <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
        <CardHeader>
          <CardTitle className="text-yellow-400">Automation Settings</CardTitle>
          <CardDescription className="text-gray-400">Configure the system's automation behavior</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="auto-assign" className="text-white">Auto-assign tasks</Label>
            <Switch id="auto-assign" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="automation-threshold" className="text-white">Automation threshold</Label>
            <Slider
              id="automation-threshold"
              min={0}
              max={100}
              step={1}
              value={[automationThreshold]}
              onValueChange={(value) => setAutomationThreshold(value[0])}
              className="w-full"
            />
            <p className="text-sm text-gray-400">Current value: {automationThreshold}%</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
        <CardHeader>
          <CardTitle className="text-yellow-400">Sentiment Analysis</CardTitle>
          <CardDescription className="text-gray-400">Adjust sentiment analysis parameters</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="sentiment-analysis" className="text-white">Enable sentiment analysis</Label>
            <Switch id="sentiment-analysis" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sentiment-threshold" className="text-white">Sentiment threshold</Label>
            <Slider
              id="sentiment-threshold"
              min={0}
              max={100}
              step={1}
              value={[sentimentThreshold]}
              onValueChange={(value) => setSentimentThreshold(value[0])}
              className="w-full"
            />
            <p className="text-sm text-gray-400">Current value: {sentimentThreshold}%</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
        <CardHeader>
          <CardTitle className="text-yellow-400">API Integration</CardTitle>
          <CardDescription className="text-gray-400">Manage external API connections</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="api-key" className="text-white">API Key</Label>
            <Input id="api-key" type="password" className="bg-black/20 border-yellow-400/20 text-white" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="webhook-url" className="text-white">Webhook URL</Label>
            <Input id="webhook-url" className="bg-black/20 border-yellow-400/20 text-white" />
          </div>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Save API Settings</Button>
        </CardContent>
      </Card>
    </div>
  )
}

