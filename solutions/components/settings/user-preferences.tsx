"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function UserPreferences() {
  const [theme, setTheme] = useState("dark")
  const [language, setLanguage] = useState("en")

  return (
    <div className="space-y-6">
      <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
        <CardHeader>
          <CardTitle className="text-yellow-400">Appearance</CardTitle>
          <CardDescription className="text-gray-400">Customize your interface</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="theme" className="text-white">Theme</Label>
            <Select value={theme} onValueChange={setTheme}>
              <SelectTrigger id="theme" className="bg-black/20 border-yellow-400/20 text-white">
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent className="bg-black border-yellow-400/20">
                <SelectItem value="light" className="text-white">Light</SelectItem>
                <SelectItem value="dark" className="text-white">Dark</SelectItem>
                <SelectItem value="system" className="text-white">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="animations" className="text-white">Enable animations</Label>
            <Switch id="animations" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
        <CardHeader>
          <CardTitle className="text-yellow-400">Language & Region</CardTitle>
          <CardDescription className="text-gray-400">Set your language and regional preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="language" className="text-white">Language</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger id="language" className="bg-black/20 border-yellow-400/20 text-white">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent className="bg-black border-yellow-400/20">
                <SelectItem value="en" className="text-white">English</SelectItem>
                <SelectItem value="es" className="text-white">Español</SelectItem>
                <SelectItem value="fr" className="text-white">Français</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="timezone" className="text-white">Timezone</Label>
            <Select>
              <SelectTrigger id="timezone" className="bg-black/20 border-yellow-400/20 text-white">
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent className="bg-black border-yellow-400/20">
                <SelectItem value="utc" className="text-white">UTC</SelectItem>
                <SelectItem value="est" className="text-white">Eastern Time</SelectItem>
                <SelectItem value="pst" className="text-white">Pacific Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
        <CardHeader>
          <CardTitle className="text-yellow-400">Notifications</CardTitle>
          <CardDescription className="text-gray-400">Manage your notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications" className="text-white">Email notifications</Label>
            <Switch id="email-notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="push-notifications" className="text-white">Push notifications</Label>
            <Switch id="push-notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sms-notifications" className="text-white">SMS notifications</Label>
            <Switch id="sms-notifications" />
          </div>
        </CardContent>
      </Card>

      <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">Save Preferences</Button>
    </div>
  )
}

