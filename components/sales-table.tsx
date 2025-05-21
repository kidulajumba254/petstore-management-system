"use client"

import { MoreHorizontal, ArrowUpDown, FileText } from "lucide-react"

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

const sales = [
  {
    id: "INV-001",
    customer: "John Kamau",
    date: "2025-05-15",
    items: 3,
    total: "kes 24,589",
    status: "completed",
  },
  {
    id: "INV-002",
    customer: "Sarah Kamau",
    date: "2024-05-15",
    items: 2,
    total: "kes 17,650",
    status: "completed",
  },
  {
    id: "INV-003",
    customer: "Michael Omondi",
    date: "2024-05-14",
    items: 5,
    total: "kes 34,075",
    status: "completed",
  },
  {
    id: "INV-004",
    customer: "Emily Nduta",
    date: "2024-04-14",
    items: 1,
    total: "kes 6,725",
    status: "pending",
  },
  {
    id: "INV-005",
    customer: "Robert Williams",
    date: "2024-05-13",
    items: 4,
    total: "kes 29,030",
    status: "completed",
  },
]

export function SalesTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">
              <Button variant="ghost" className="-ml-4">
                Invoice
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>
              <Button variant="ghost" className="-ml-4">
                Date
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="text-center">Items</TableHead>
            <TableHead className="text-right">Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sales.map((sale) => (
            <TableRow key={sale.id}>
              <TableCell className="font-medium">{sale.id}</TableCell>
              <TableCell>{sale.customer}</TableCell>
              <TableCell>{sale.date}</TableCell>
              <TableCell className="text-center">{sale.items}</TableCell>
              <TableCell className="text-right">{sale.total}</TableCell>
              <TableCell>
                <Badge variant={sale.status === "completed" ? "default" : "secondary"}>{sale.status}</Badge>
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
                    <DropdownMenuItem>
                      <FileText className="mr-2 h-4 w-4" />
                      View invoice
                    </DropdownMenuItem>
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Print invoice</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Void sale</DropdownMenuItem>
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
