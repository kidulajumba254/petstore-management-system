import Link from "next/link"
import { Edit, MoreHorizontal, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface PetCardProps {
  id: string
  name: string
  species: string
  breed: string
  age: string
  price: string
  imageUrl: string
}

export function PetCard({ id, name, species, breed, age, price, imageUrl }: PetCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative">
          <img src={imageUrl || "/placeholder.svg"} alt={`${name} - ${breed}`} className="h-48 w-full object-cover" />
          <div className="absolute top-2 right-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/80 backdrop-blur-sm">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/pets/${id}`}>View details</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/pets/${id}/edit`}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <Trash className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{breed}</p>
          </div>
          <Badge>{species}</Badge>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-sm">{age}</span>
          <span className="font-semibold">{price}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/pets/${id}`}>View Details</Link>
        </Button>
        <Button size="sm">Add to Sale</Button>
      </CardFooter>
    </Card>
  )
}
