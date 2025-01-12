"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const employees = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "Claims Manager",
    department: "Insurance Claims",
    handling: "High-value claims",
    experience: "8 years",
    status: "active"
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Senior Claims Adjuster",
    department: "Auto Insurance",
    handling: "Vehicle damage claims",
    experience: "5 years",
    status: "active"
  },
  {
    id: 3,
    name: "Maria Garcia",
    role: "Customer Service Lead",
    department: "Support",
    handling: "Client communications",
    experience: "6 years",
    status: "active"
  },
  {
    id: 4,
    name: "David Chen",
    role: "Risk Analyst",
    department: "Risk Assessment",
    handling: "Risk evaluation",
    experience: "4 years",
    status: "active"
  },
  {
    id: 5,
    name: "Sarah Ahmed",
    role: "Documentation Specialist",
    department: "Legal",
    handling: "Policy documentation",
    experience: "3 years",
    status: "active"
  },
  {
    id: 6,
    name: "Michael Brown",
    role: "Claims Investigator",
    department: "Fraud Detection",
    handling: "Suspicious claims",
    experience: "7 years",
    status: "active"
  },
  {
    id: 7,
    name: "Lisa Johnson",
    role: "Training Coordinator",
    department: "Human Resources",
    handling: "New employee training",
    experience: "4 years",
    status: "active"
  },
  {
    id: 8,
    name: "Robert Kim",
    role: "Quality Assurance",
    department: "Quality Control",
    handling: "Claims audit",
    experience: "5 years",
    status: "active"
  },
  {
    id: 9,
    name: "Jennifer Martinez",
    role: "Policy Specialist",
    department: "Policy Management",
    handling: "Policy updates",
    experience: "6 years",
    status: "active"
  },
  {
    id: 10,
    name: "William Taylor",
    role: "Technical Support",
    department: "IT",
    handling: "System maintenance",
    experience: "3 years",
    status: "active"
  },
  {
    id: 11,
    name: "Amanda White",
    role: "Compliance Officer",
    department: "Legal",
    handling: "Regulatory compliance",
    experience: "7 years",
    status: "active"
  },
  {
    id: 12,
    name: "Richard Lee",
    role: "Data Analyst",
    department: "Analytics",
    handling: "Performance metrics",
    experience: "4 years",
    status: "active"
  },
  {
    id: 13,
    name: "Sophie Turner",
    role: "Customer Relations",
    department: "Support",
    handling: "VIP clients",
    experience: "5 years",
    status: "active"
  },
  {
    id: 14,
    name: "Hassan Ali",
    role: "Senior Underwriter",
    department: "Underwriting",
    handling: "Risk assessment",
    experience: "8 years",
    status: "active"
  },
  {
    id: 15,
    name: "Rachel Green",
    role: "Operations Manager",
    department: "Operations",
    handling: "Workflow optimization",
    experience: "6 years",
    status: "active"
  }
]

export function EmployeeList() {
  return (
    <div className="rounded-md border border-yellow-400/20">
      <Table>
        <TableHeader>
          <TableRow className="border-yellow-400/20 hover:bg-yellow-400/5">
            <TableHead className="text-yellow-400">Name</TableHead>
            <TableHead className="text-yellow-400">Role</TableHead>
            <TableHead className="text-yellow-400">Department</TableHead>
            <TableHead className="text-yellow-400">Handling</TableHead>
            <TableHead className="text-yellow-400">Experience</TableHead>
            <TableHead className="text-yellow-400">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id} className="border-yellow-400/20 hover:bg-yellow-400/5">
              <TableCell className="font-medium text-white">{employee.name}</TableCell>
              <TableCell className="text-white">{employee.role}</TableCell>
              <TableCell className="text-white">{employee.department}</TableCell>
              <TableCell className="text-white">{employee.handling}</TableCell>
              <TableCell className="text-white">{employee.experience}</TableCell>
              <TableCell>
                <Badge className="bg-green-500 text-white">
                  {employee.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

