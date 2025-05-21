"use client"

import { useState } from "react"
import { Check, ChevronsUpDown, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { cn } from "@/lib/utils"

const species = [
  { label: "All Species", value: "all" },
  { label: "Dogs", value: "dog" },
  { label: "Cats", value: "cat" },
  { label: "Birds", value: "bird" },
  { label: "Small Pets", value: "small" },
  { label: "Reptiles", value: "reptile" },
  { label: "Fish", value: "fish" },
]

export function PetFilters() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("all")

  return (
    <div className="flex flex-col sm:flex-row gap-4 py-4">
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Search pets..." className="pl-8 w-full" />
      </div>
      <div className="flex gap-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={open} className="justify-between min-w-[150px]">
              {species.find((item) => item.value === value)?.label || "Select species"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-[200px]">
            <Command>
              <CommandInput placeholder="Search species..." />
              <CommandList>
                <CommandEmpty>No species found.</CommandEmpty>
                <CommandGroup>
                  {species.map((item) => (
                    <CommandItem
                      key={item.value}
                      value={item.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                      }}
                    >
                      <Check className={cn("mr-2 h-4 w-4", value === item.value ? "opacity-100" : "opacity-0")} />
                      {item.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <Button>Filter</Button>
      </div>
    </div>
  )
}
