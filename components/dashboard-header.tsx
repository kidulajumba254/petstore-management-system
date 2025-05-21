import Link from "next/link"
import { Bell, Menu, PawPrint, Search, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MainNav } from "@/components/main-nav"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[280px]">
            <nav className="flex flex-col gap-4 py-4">
              <Link href="/" className="flex items-center gap-2 px-2 py-1">
                <PawPrint className="h-6 w-6" />
                <span className="text-lg font-semibold">PetStore Pro</span>
              </Link>
              <Link href="/" className="px-2 py-1 text-lg font-medium">
                Dashboard
              </Link>
              <Link href="/pets" className="px-2 py-1 text-lg font-medium">
                Pets
              </Link>
              <Link href="/customers" className="px-2 py-1 text-lg font-medium">
                Customers
              </Link>
              <Link href="/sales" className="px-2 py-1 text-lg font-medium">
                Sales
              </Link>
              <Link href="/appointments" className="px-2 py-1 text-lg font-medium">
                Appointments
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2 md:ml-0 ml-2">
          <PawPrint className="h-6 w-6" />
          <span className="text-lg font-semibold hidden md:inline-block">PetStore Pro</span>
        </Link>
        <MainNav className="mx-6 hidden md:flex" />
        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="relative hidden md:flex w-full max-w-sm items-center">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="pl-8 md:w-[200px] lg:w-[300px]" />
          </div>
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              3
            </span>
            <span className="sr-only">Notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
