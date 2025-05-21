"use client"

import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import type { DateRange } from "react-day-picker"
import { useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function SalesDateFilter() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2023, 4, 1),
    to: new Date(),
  })

  return (
    <div className="flex flex-col sm:flex-row gap-4 py-4 justify-between items-start sm:items-center">
      <div>
        <h3 className="font-semibold">Sales History</h3>
        <p className="text-sm text-muted-foreground">View and filter sales transactions</p>
      </div>
      <div className="grid gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn("w-[300px] justify-start text-left font-normal", !date && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
