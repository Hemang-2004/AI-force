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
import type { User } from "@/app/user-tracking/page"

interface UserTableProps {
  users: User[]
  searchTerm: string
}

export function UserTable({ users, searchTerm }: UserTableProps) {
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="rounded-md border border-yellow-400/20">
      <Table>
        <TableHeader>
          <TableRow className="border-yellow-400/20 hover:bg-yellow-400/5">
            <TableHead className="text-yellow-400">Name</TableHead>
            <TableHead className="text-yellow-400">Company</TableHead>
            <TableHead className="text-yellow-400">Email</TableHead>
            <TableHead className="text-yellow-400 text-right">Claims</TableHead>
            <TableHead className="text-yellow-400 text-right">Resolved</TableHead>
            <TableHead className="text-yellow-400">Status</TableHead>
            <TableHead className="text-yellow-400">Last Active</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id} className="border-yellow-400/20 hover:bg-yellow-400/5">
              <TableCell className="font-medium text-white">{user.name}</TableCell>
              <TableCell className="text-white">{user.company}</TableCell>
              <TableCell className="text-white">{user.email}</TableCell>
              <TableCell className="text-right text-white">{user.claims}</TableCell>
              <TableCell className="text-right text-white">{user.resolvedClaims}</TableCell>
              <TableCell>
                <Badge
                  className={
                    user.status === 'resolved'
                      ? 'bg-green-500 text-white'
                      : user.status === 'active'
                      ? 'bg-yellow-400 text-black'
                      : 'bg-blue-500 text-white'
                  }
                >
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell className="text-white">{user.lastActive}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

