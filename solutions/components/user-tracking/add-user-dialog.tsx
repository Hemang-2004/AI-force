"use client"

import * as React from "react"
import { Plus } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function AddUserDialog() {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
          <Plus className="mr-2 h-4 w-4" /> Add User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black/90 border-yellow-400/20">
        <DialogHeader>
          <DialogTitle className="text-yellow-400">Add New User</DialogTitle>
          <DialogDescription className="text-gray-400">
            Add a new user to the system. They will receive an email with login instructions.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-yellow-400">Full Name</Label>
            <Input
              id="name"
              className="bg-black/20 border-yellow-400/20 text-white"
              placeholder="John Smith"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-yellow-400">Email</Label>
            <Input
              id="email"
              type="email"
              className="bg-black/20 border-yellow-400/20 text-white"
              placeholder="john.smith@company.com"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="company" className="text-yellow-400">Company</Label>
            <Select>
              <SelectTrigger className="bg-black/20 border-yellow-400/20 text-white">
                <SelectValue placeholder="Select company" />
              </SelectTrigger>
              <SelectContent className="bg-black border-yellow-400/20">
                <SelectItem value="mastercard" className="text-white">Mastercard</SelectItem>
                <SelectItem value="visa" className="text-white">VISA</SelectItem>
                <SelectItem value="boat" className="text-white">Boat</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="border-yellow-400/20 text-white hover:bg-yellow-400/10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-yellow-400 text-black hover:bg-yellow-500"
            >
              Add User
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

