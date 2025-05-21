import { Clock, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AppointmentList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Appointments</CardTitle>
        <CardDescription>Next scheduled services</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-medium">Pet Grooming - Max (Husky)</div>
              <div className="text-sm text-muted-foreground">Today, 2:00 PM</div>
              <div className="text-sm">Owner: John Njoroge</div>
            </div>
            <Badge>Today</Badge>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="w-full">
              <Clock className="mr-2 h-4 w-4" />
              Reschedule
            </Button>
            <Button size="sm" variant="outline" className="w-full">
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-medium">Vet Checkup - Luna (Siamese)</div>
              <div className="text-sm text-muted-foreground">Tomorrow, 10:30 AM</div>
              <div className="text-sm">Owner: Sarah Kamau</div>
            </div>
            <Badge variant="outline">Tomorrow</Badge>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="w-full">
              <Clock className="mr-2 h-4 w-4" />
              Reschedule
            </Button>
            <Button size="sm" variant="outline" className="w-full">
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-medium">Training Session - Rocky (Labrador)</div>
              <div className="text-sm text-muted-foreground">May 19, 3:15 PM</div>
              <div className="text-sm">Owner: Mike Wamau</div>
            </div>
            <Badge variant="outline">May 19</Badge>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="w-full">
              <Clock className="mr-2 h-4 w-4" />
              Reschedule
            </Button>
            <Button size="sm" variant="outline" className="w-full">
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-medium">Vet Checkup - Bella (Poodle)</div>
              <div className="text-sm text-muted-foreground">May 20, 1:00 PM</div>
              <div className="text-sm">Owner: Jennifer Betty</div>
            </div>
            <Badge variant="outline">May 20</Badge>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="w-full">
              <Clock className="mr-2 h-4 w-4" />
              Reschedule
            </Button>
            <Button size="sm" variant="outline" className="w-full">
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
