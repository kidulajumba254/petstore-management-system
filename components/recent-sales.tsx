import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">John Njoroge</p>
          <p className="text-sm text-muted-foreground">Premium Dog Food + Accessories</p>
        </div>
        <div className="ml-auto font-medium">+kes 24,589</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>SJ</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sarah Kamau</p>
          <p className="text-sm text-muted-foreground">Persian Cat + Cat Tree</p>
        </div>
        <div className="ml-auto font-medium">+kes 87,650</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>MB</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Michael Omondi</p>
          <p className="text-sm text-muted-foreground">Grooming Service + Pet Supplies</p>
        </div>
        <div className="ml-auto font-medium">+kes 18,975</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>ED</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Emily Nduta</p>
          <p className="text-sm text-muted-foreground">Lovebird + Cage + Food</p>
        </div>
        <div className="ml-auto font-medium">+kes 56,725</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>RW</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Robert Williams</p>
          <p className="text-sm text-muted-foreground">Vet Services + Medication</p>
        </div>
        <div className="ml-auto font-medium">+kes 13,250</div>
      </div>
    </div>
  )
}
