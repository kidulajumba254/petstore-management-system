import Link from "next/link"
import { ArrowRight, Calendar, DollarSign, PawPrint, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { RecentSales } from "@/components/recent-sales"
import { Overview } from "@/components/overview"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <DashboardShell>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">kes 4,523,189</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pets in Inventory</CardTitle>
              <PawPrint className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">+12 new this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">573</div>
              <p className="text-xs text-muted-foreground">+18.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Appointments</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+3 since yesterday</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Monthly Sales Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>You made 23 sales this month.</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentSales />
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Featured Pets</CardTitle>
              <CardDescription>Our newest additions to the store.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="flex items-center gap-4">
                <img
                  src="/goldenretriverpuppy.jpg?height=60&width=60"
                  alt="Golden Retriever puppy"
                  className="h-15 w-15 rounded-md object-cover"
                />
                <div>
                  <p className="text-sm font-medium">Golden Retriever</p>
                  <p className="text-xs text-muted-foreground">3 months old</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/cat.jpg?height=60&width=60"
                  alt="Persian cat"
                  className="h-15 w-15 rounded-md object-cover"
                />
                <div>
                  <p className="text-sm font-medium">Persian Cat</p>
                  <p className="text-xs text-muted-foreground">1 year old</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/lovebird.jpg?height=60&width=60"
                  alt="Lovebird"
                  className="h-15 w-15 rounded-md object-cover"
                />
                <div>
                  <p className="text-sm font-medium">Lovebird</p>
                  <p className="text-xs text-muted-foreground">6 months old</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/pets">
                  View All Pets <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Popular Products</CardTitle>
              <CardDescription>Best selling items this month.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="flex items-center gap-4">
                <img
                  src="/dogfood.jpg?height=60&width=60"
                  alt="Premium dog food"
                  className="h-15 w-15 rounded-md object-cover"
                />
                <div>
                  <p className="text-sm font-medium">Premium Dog Food</p>
                  <p className="text-xs text-muted-foreground">Kes 4,599</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/cat tree.jpg?height=60&width=60"
                  alt="Cat tree"
                  className="h-15 w-15 rounded-md object-cover"
                />
                <div>
                  <p className="text-sm font-medium">Deluxe Cat Tree</p>
                  <p className="text-xs text-muted-foreground">kes 8,999</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/luxurybirdnest.jpg?height=60&width=60"
                  alt="Bird cage"
                  className="h-15 w-15 rounded-md object-cover"
                />
                <div>
                  <p className="text-sm font-medium">Luxury Bird Cage</p>
                  <p className="text-xs text-muted-foreground">kes 12,999</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/products">
                  View All Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
              <CardDescription>Next scheduled services.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="flex flex-col gap-1 border-b pb-2">
                <p className="text-sm font-medium">Pet Grooming - Max (Husky)</p>
                <p className="text-xs text-muted-foreground">Today, 2:00 PM</p>
                <p className="text-xs">Owner: John Njoroge</p>
              </div>
              <div className="flex flex-col gap-1 border-b pb-2">
                <p className="text-sm font-medium">Vet Checkup - Luna (Siamese)</p>
                <p className="text-xs text-muted-foreground">Tomorrow, 10:30 AM</p>
                <p className="text-xs">Owner: Sarah Kamau</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Training Session - Rocky (Labrador)</p>
                <p className="text-xs text-muted-foreground">May 19, 3:15 PM</p>
                <p className="text-xs">Owner: Mike Muriithi</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/appointments">
                  Manage Appointments <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </DashboardShell>
    </div>
  )
}
