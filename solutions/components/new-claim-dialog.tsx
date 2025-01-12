"use client"

import * as React from "react"
import { motion } from "framer-motion"
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
import { Textarea } from "@/components/ui/textarea"
import { Plus } from 'lucide-react'

export function NewClaimDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
          <Plus className="mr-2 h-4 w-4" /> New Claim
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black/90 border-yellow-400/20 text-white">
        <DialogHeader>
          <DialogTitle>Create New Claim</DialogTitle>
          <DialogDescription className="text-white">
            Fill in the claim details below to create a new claim.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="client">Client Name</Label>
            <Input id="client" className="bg-black/20" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="type">Claim Type</Label>
            <Select>
              <SelectTrigger className="bg-black/20">
                <SelectValue placeholder="Select claim type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="insurance">Insurance</SelectItem>
                <SelectItem value="medical">Medical</SelectItem>
                <SelectItem value="property">Property</SelectItem>
                <SelectItem value="liability">Liability</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              className="bg-black/20"
              placeholder="Enter claim details..."
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="priority">Priority</Label>
            <Select>
              <SelectTrigger className="bg-black/20">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <DialogTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogTrigger>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
            Create Claim
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

