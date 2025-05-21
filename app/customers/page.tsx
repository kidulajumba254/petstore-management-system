import { PlusCircle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { CustomerTable } from "@/components/customer-table"
import { CustomerSearch } from "@/components/customer-search"

export default function CustomersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <DashboardShell>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Customers</h2>
            <p className="text-muted-foreground">Manage your customer database and view purchase history.</p>
          </div>
          <Button asChild>
            <Link href="/customers/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New Customer
            </Link>
          </Button>
        </div>

        <CustomerSearch />

        <CustomerTable />
      </DashboardShell>
    </div>
  )
}
