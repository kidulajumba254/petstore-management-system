"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {}

export function MainNav({ className, ...props }: MainNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Dashboard
      </Link>
      <Link
        href="/pets"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/pets" || pathname.startsWith("/pets/") ? "text-primary" : "text-muted-foreground",
        )}
      >
        Pets
      </Link>
      <Link
        href="/customers"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/customers" || pathname.startsWith("/customers/") ? "text-primary" : "text-muted-foreground",
        )}
      >
        Customers
      </Link>
      <Link
        href="/sales"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/sales" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Sales
      </Link>
      <Link
        href="/appointments"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/appointments" || pathname.startsWith("/appointments/")
            ? "text-primary"
            : "text-muted-foreground",
        )}
      >
        Appointments
      </Link>
    </nav>
  )
}
