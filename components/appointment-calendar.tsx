"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function AppointmentCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Card>
      <CardHeader>
        <CardTitle>Appointment Calendar</CardTitle>
        <CardDescription>View and manage scheduled appointments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-center">
            <Button variant="outline" className="w-10 rounded-l-md p-0">
              &lt;
            </Button>
            <Button variant="outline" className="rounded-none border-l-0 border-r-0 px-4">
              {date ? format(date, "MMMM yyyy") : "Select a date"}
            </Button>
            <Button variant="outline" className="w-10 rounded-r-md p-0">
              &gt;
            </Button>
          </div>
          <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
          <div className="pt-6">
            <h3 className="mb-2 font-medium">{date ? format(date, "MMMM d, yyyy") : "No date selected"}</h3>
            <div className="space-y-2">
              <div className="rounded-md bg-primary/10 p-2 text-sm">
                <div className="font-medium">Pet Grooming - Max (Husky)</div>
                <div className="text-xs text-muted-foreground">2:00 PM - 3:00 PM</div>
                <div className="text-xs">Owner: John Njoroge</div>
              </div>
              <div className="rounded-md bg-primary/10 p-2 text-sm">
                <div className="font-medium">Vet Checkup - Luna (Siamese)</div>
                <div className="text-xs text-muted-foreground">4:30 PM - 5:00 PM</div>
                <div className="text-xs">Owner: Sarah Kamau</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
