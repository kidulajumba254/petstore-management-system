import Link from "next/link"
import { ArrowLeft, Edit, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PetDetailsPage({ params }: { params: { id: string } }) {
  // This would normally fetch the pet data based on the ID
  const pet = {
    id: params.id,
    name: "Max",
    species: "Dog",
    breed: "Golden Retriever",
    age: "3 months",
    price: "KES 200,000",
    description:
      "Max is a friendly and playful Golden Retriever puppy. He's great with children and other pets. He's been vaccinated and is in excellent health.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    status: "Available",
    gender: "Male",
    weight: "15 lbs",
    color: "Golden",
    birthDate: "February 15, 2025",
    microchip: "Yes - #123456789",
    vaccinations: [
      { name: "Rabies", date: "April 10, 2025" },
      { name: "DHPP", date: "March 20, 2025" },
      { name: "Bordetella", date: "March 20, 2025" },
    ],
    medicalHistory: "No significant medical issues. Regular checkups completed.",
    temperament: "Friendly, Playful, Good with children",
    dietaryNeeds: "Premium puppy food, 3 times daily",
    additionalNotes: "Loves playing fetch and is already responding to basic commands like 'sit' and 'stay'.",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <DashboardShell>
        <div className="flex items-center gap-4 mb-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/pets">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Pet Details</h2>
            <p className="text-muted-foreground">View and manage detailed information about this pet.</p>
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant="outline" asChild>
              <Link href={`/pets/${params.id}/edit`}>
                <Edit className="mr-2 h-4 w-4" />
                Edit Pet
              </Link>
            </Button>
            <Button>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Sale
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[400px_1fr]">
          <Card>
            <CardContent className="p-0">
              <img
                src={pet.imageUrl || "/placeholder.svg"}
                alt={`${pet.name} - ${pet.breed}`}
                className="w-full h-auto object-cover rounded-t-lg"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{pet.name}</h3>
                    <p className="text-muted-foreground">{pet.breed}</p>
                  </div>
                  <Badge>{pet.status}</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Species</p>
                    <p className="font-medium">{pet.species}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Age</p>
                    <p className="font-medium">{pet.age}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Gender</p>
                    <p className="font-medium">{pet.gender}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Color</p>
                    <p className="font-medium">{pet.color}</p>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="text-lg font-bold">{pet.price}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="details">
            <TabsList className="mb-4">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="medical">Medical</TabsTrigger>
              <TabsTrigger value="care">Care Instructions</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>About {pet.name}</CardTitle>
                  <CardDescription>General information and description</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Description</h4>
                    <p>{pet.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Birth Date</h4>
                      <p>{pet.birthDate}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Weight</h4>
                      <p>{pet.weight}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Microchip</h4>
                      <p>{pet.microchip}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Temperament</h4>
                      <p>{pet.temperament}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Additional Notes</h4>
                    <p>{pet.additionalNotes}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="medical" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Medical Information</CardTitle>
                  <CardDescription>Health records and vaccination history</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Vaccination History</h4>
                    <ul className="space-y-2">
                      {pet.vaccinations.map((vaccination, index) => (
                        <li key={index} className="flex justify-between">
                          <span>{vaccination.name}</span>
                          <span className="text-muted-foreground">{vaccination.date}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Medical History</h4>
                    <p>{pet.medicalHistory}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="care" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Care Instructions</CardTitle>
                  <CardDescription>Dietary needs and care requirements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Dietary Needs</h4>
                    <p>{pet.dietaryNeeds}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Exercise Requirements</h4>
                    <p>Regular daily exercise recommended. At least 30 minutes of play time twice daily.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Grooming Needs</h4>
                    <p>Brush coat 2-3 times per week. Bathe monthly or as needed. Trim nails every 3-4 weeks.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </DashboardShell>
    </div>
  )
}
