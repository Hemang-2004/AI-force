"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EmployeeList } from "@/components/settings/employee-list"
import { SystemSettings } from "@/components/settings/system-settings"
import { UserPreferences } from "@/components/settings/user-preferences"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-yellow-400">Settings</h1>
        </div>

        <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
          <CardHeader>
            <CardTitle>
              <Tabs defaultValue="employees" className="w-full">
                <TabsList className="bg-black/40 border border-yellow-400/20">
                  <TabsTrigger 
                    value="employees"
                    className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
                  >
                    Employees
                  </TabsTrigger>
                  <TabsTrigger 
                    value="preferences"
                    className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
                  >
                    User Preferences
                  </TabsTrigger>
                  <TabsTrigger 
                    value="system"
                    className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
                  >
                    System Settings
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="employees" className="mt-6">
                  <EmployeeList />
                </TabsContent>
                <TabsContent value="preferences" className="mt-6">
                  <UserPreferences />
                </TabsContent>
                <TabsContent value="system" className="mt-6">
                  <SystemSettings />
                </TabsContent>
              </Tabs>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}

