"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PhoneCall, Calendar, BarChart } from 'lucide-react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const features = [
  {
    name: 'Virtual Call Agent',
    icon: PhoneCall,
    description: 'AI-powered call handling for efficient customer interactions',
    data: [
      { name: 'Jan', efficiency: 4000 },
      { name: 'Feb', efficiency: 3000 },
      { name: 'Mar', efficiency: 2000 },
      { name: 'Apr', efficiency: 2780 },
      { name: 'May', efficiency: 1890 },
      { name: 'Jun', efficiency: 2390 },
    ]
  },
  {
    name: 'Callback Manager Agent',
    icon: Calendar,
    description: 'Intelligent scheduling and prioritization of follow-ups',
    data: [
      { name: 'Jan', callbacks: 3200 },
      { name: 'Feb', callbacks: 4300 },
      { name: 'Mar', callbacks: 3800 },
      { name: 'Apr', callbacks: 4200 },
      { name: 'May', callbacks: 5000 },
      { name: 'Jun', callbacks: 4800 },
    ]
  },
  {
    name: 'AI Sentiment Analysis',
    icon: BarChart,
    description: 'Real-time analysis of customer emotions for improved service',
    data: [
      { name: 'Jan', sentiment: 70 },
      { name: 'Feb', sentiment: 75 },
      { name: 'Mar', sentiment: 80 },
      { name: 'Apr', sentiment: 82 },
      { name: 'May', sentiment: 85 },
      { name: 'Jun', sentiment: 88 },
    ]
  },
]

export default function KeyFeatures() {
  const [activeTab, setActiveTab] = useState('Virtual Call Agent')

  return (
    (<section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Key Features</h2>
          <p
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Powerful AI Tools for BPO Excellence
          </p>
        </div>

        <div className="mt-10">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              {features.map((feature) => (
                <TabsTrigger key={feature.name} value={feature.name}>
                  {feature.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {features.map((feature) => (
              <TabsContent key={feature.name} value={feature.name}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <feature.icon className="h-6 w-6 mr-2" />
                      {feature.name}
                    </CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={feature.data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey={Object.keys(feature.data[0])[1]}
                          stroke="#8884d8"
                          activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>)
  );
}

