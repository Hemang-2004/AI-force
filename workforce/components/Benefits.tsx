'use client'

import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const data = {
  labels: ['Operational Efficiency', 'Client Satisfaction', 'Cost Reduction', 'Error Rate'],
  datasets: [
    {
      label: 'Before AI Implementation',
      data: [65, 70, 60, 80],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'After AI Implementation',
      data: [90, 95, 85, 20],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

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
      text: 'BPO Performance Metrics',
    },
  },
}

export default function Benefits() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Operational Scalability</h3>
            <p className="mb-6">
              Our AI-powered solution easily adapts to various processes, allowing your BPO operations to scale effortlessly. Handle increased workloads without proportional increases in resources or compromises in quality.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Enhanced Client Satisfaction</h3>
            <p className="mb-6">
              By leveraging AI for routine tasks and providing agents with real-time insights, we significantly improve response times and the accuracy of information provided to clients, leading to higher satisfaction rates.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Efficiency Gains</h3>
            <p>
              Our AI tools automate time-consuming tasks, allowing your human workforce to focus on complex, high-value activities. This results in dramatic improvements in overall operational efficiency and productivity.
            </p>
          </div>
          <div>
            <Bar options={options} data={data} />
          </div>
        </div>
      </div>
    </section>
  )
}

