import { PlusCircle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { AppointmentCalendar } from "@/components/appointment-calendar"
import { AppointmentList } from "@/components/appointment-list"

export default function AppointmentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <DashboardShell>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Appointments</h2>
            <p className="text-muted-foreground">Schedule and manage grooming, vet visits, and training sessions.</p>
          </div>
          <Button asChild>
            <Link href="/appointments/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Appointment
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-[1fr_300px]">
          <AppointmentCalendar />
          <AppointmentList />
        </div>
      </DashboardShell>
    </div>
  )
}
