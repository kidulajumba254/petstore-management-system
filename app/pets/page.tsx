import Link from "next/link"
import { PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { PetCard } from "@/components/pet-card"
import { PetFilters } from "@/components/pet-filters"

export default function PetsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <DashboardShell>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Pets Inventory</h2>
            <p className="text-muted-foreground">Manage your pet inventory, add new pets, and track availability.</p>
          </div>
          <Button asChild>
            <Link href="/pets/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New Pet
            </Link>
          </Button>
        </div>

        <PetFilters />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <PetCard
            id="1"
            name="Max"
            species="Dog"
            breed="Golden Retriever"
            age="3 months"
            price="kes 120,000"
            imageUrl="/placeholder.svg?height=200&width=300"
          />
          <PetCard
            id="2"
            name="Luna"
            species="Cat"
            breed="Persian"
            age="1 year"
            price="kes 80,000"
            imageUrl="/placeholder.svg?height=200&width=300"
          />
          <PetCard
            id="3"
            name="Charlie"
            species="Bird"
            breed="Lovebird"
            age="6 months"
            price="kes 15,000"
            imageUrl="/placeholder.svg?height=200&width=300"
          />
          <PetCard
            id="4"
            name="Bella"
            species="Dog"
            breed="Poodle"
            age="2 months"
            price="kes 150,000"
            imageUrl="/placeholder.svg?height=200&width=300"
          />
          <PetCard
            id="5"
            name="Oliver"
            species="Cat"
            breed="Maine Coon"
            age="8 months"
            price="kes 95,000"
            imageUrl="/placeholder.svg?height=200&width=300"
          />
          <PetCard
            id="6"
            name="Rocky"
            species="Dog"
            breed="Labrador"
            age="4 months"
            price="kes 110,000"
            imageUrl="/placeholder.svg?height=200&width=300"
          />
          <PetCard
            id="7"
            name="Coco"
            species="Bird"
            breed="Cockatiel"
            age="1 year"
            price="Kes 20,000"
            imageUrl="/placeholder.svg?height=200&width=300"
          />
          <PetCard
            id="8"
            name="Daisy"
            species="Dog"
            breed="Beagle"
            age="5 months"
            price="kes 90,000"
            imageUrl="/placeholder.svg?height=200&width=300"
          />
        </div>
      </DashboardShell>
    </div>
  )
}
