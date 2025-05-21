"use client"

import { useState } from "react"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const customers = [
  {
    id: "1",
    name: "John Kakai",
    email: "john.kakai@gmail.com",
    phone: "+254 7833323",
    pets: 2,
    totalSpent: "KES 124,509",
    status: "active",
    avatar: "/avatars/john.png",
  },
  {
    id: "2",
    name: "Daniel Masawi",
    email: "masawidan@gmail.com",
    phone: "+254 73535363",
    pets: 1,
    totalSpent: "KES 87,650",
    status: "active",
    avatar: "/avatars/daniel.png",
  },
  {
    id: "3",
    name: "Kelvin Njuguna",
    email: "knjuguna@gmail.com",
    phone: "+254 760897",
    pets: 3,
    totalSpent: "KES 234,075",
    status: "active",
    avatar: "/avatars/kelvin.png",
  },
  {
    id: "4",
    name: "Emily Kosgei",
    email: "emily.kosgei@example.com",
    phone: "(555) 789-0123",
    pets: 1,
    totalSpent: "KES 56,725",
    status: "inactive",
    avatar: "/avatars/emily.png",
  },
  {
    id: "5",
    name: "Cindy Wambui",
    email: "cindywambui@gmail.com",
    phone: "+254 784-5678",
    pets: 2,
    totalSpent: "KES 108,930",
    status: "active",
    avatar: "/avatars/cindy.png",
  },
]

export function CustomerTable() {
  const [sorting, setSorting] = useState<"asc" | "desc" | null>(null)
  const [sortField, setSortField] = useState<string | null>(null)

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSorting(sorting === "asc" ? "desc" : sorting === "desc" ? null : "asc")
      if (sorting === "desc") {
        setSortField(null)
      }
    } else {
      setSortField(field)
      setSorting("asc")
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">
              <Button variant="ghost" onClick={() => handleSort("name")} className="-ml-4">
                Name
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead className="text-center">Pets</TableHead>
            <TableHead className="text-right">Total Spent</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow
              key={customer.id}
              className="transition-colors hover:bg-orange-50/60"
            >
              <TableCell className="font-medium flex items-center gap-3">
                <Avatar className="h-8 w-8 border shadow-sm">
                  <AvatarImage src={customer.avatar} alt={customer.name} />
                  <AvatarFallback>
                    {customer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <span>{customer.name}</span>
              </TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell className="text-center">
                <span className="inline-flex items-center gap-1">
                  <span className="text-lg">🐾</span>
                  {customer.pets}
                </span>
              </TableCell>
              <TableCell className="text-right font-semibold text-green-700">{customer.totalSpent}</TableCell>
              <TableCell>
                <Badge
                  className={
                    customer.status === "active"
                      ? "bg-green-100 text-green-800 border-green-200"
                      : "bg-gray-200 text-gray-600 border-gray-300"
                  }
                >
                  {customer.status === "active" ? "🟢 Active" : "⚪ Inactive"}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>View customer</DropdownMenuItem>
                    <DropdownMenuItem>View purchase history</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Edit customer</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Delete customer</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
