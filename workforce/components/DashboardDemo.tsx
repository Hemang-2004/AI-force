'use client'

import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  scales: {
    x: {
      type: 'category' as const,
    },
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Live Call Sentiment Analysis',
    },
  },
}

const labels = ['0s', '10s', '20s', '30s', '40s', '50s', '60s']

const generateRandomData = () => labels.map(() => Math.random() * 100)

export default function DashboardDemo() {
  const [sentimentData, setSentimentData] = useState({
    labels,
    datasets: [
      {
        label: 'Positive Sentiment',
        data: generateRandomData(),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  })

  const [callbackQueue, setCallbackQueue] = useState([
    { id: 1, priority: 'High', client: 'ABC Corp', issue: 'Billing discrepancy' },
    { id: 2, priority: 'Medium', client: 'XYZ Inc', issue: 'Product inquiry' },
    { id: 3, priority: 'Low', client: '123 Ltd', issue: 'General feedback' },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setSentimentData(prevData => ({
        ...prevData,
        datasets: [{
          ...prevData.datasets[0],
          data: generateRandomData(),
        }],
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Real-Time Dashboard Demo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Live Call Sentiment Analysis</h3>
            <Line options={options} data={sentimentData} />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Prioritized Callback Queue</h3>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Priority</th>
                  <th className="text-left">Client</th>
                  <th className="text-left">Issue</th>
                </tr>
              </thead>
              <tbody>
                {callbackQueue.map(item => (
                  <tr key={item.id}>
                    <td className={`py-2 ${item.priority === 'High' ? 'text-red-600' : item.priority === 'Medium' ? 'text-yellow-600' : 'text-green-600'}`}>
                      {item.priority}
                    </td>
                    <td className="py-2">{item.client}</td>
                    <td className="py-2">{item.issue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">AI-Generated Call Summary</h3>
          <p className="text-gray-700">
            Client: John Doe<br />
            Date: {new Date().toLocaleDateString()}<br />
            Duration: 5 minutes 32 seconds<br />
            <br />
            Summary: The client called regarding a billing discrepancy on their latest invoice. They claimed that a $50 charge was incorrectly applied. After reviewing the account history, it was confirmed that the charge was indeed an error. The issue was resolved by crediting the client's account and assuring them that the correction would be reflected in their next statement. The client expressed satisfaction with the resolution and the prompt service.
          </p>
        </div>
      </div>
    </section>
  )
}

