import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { SalesTable } from "@/components/sales-table"
import { SalesDateFilter } from "@/components/sales-date-filter"
import { SalesSummary } from "@/components/sales-summary"

export default function SalesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <DashboardShell>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Sales & Transactions</h2>
          <p className="text-muted-foreground">View and manage all sales transactions and revenue.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <SalesSummary title="Today's Sales" amount="kes 124,589" change="+12.5%" isPositive={true} />
          <SalesSummary title="This Week" amount="kes 894,250" change="+8.2%" isPositive={true} />
          <SalesSummary title="This Month" amount="kes 327,5823" change="+15.3%" isPositive={true} />
        </div>

        <SalesDateFilter />

        <SalesTable />
      </DashboardShell>
    </div>
  )
}
