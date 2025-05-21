import { ArrowDown, ArrowUp } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface SalesSummaryProps {
  title: string
  amount: string
  change: string
  isPositive: boolean
}

export function SalesSummary({ title, amount, change, isPositive }: SalesSummaryProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{amount}</div>
        <div className="flex items-center mt-1">
          {isPositive ? (
            <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
          ) : (
            <ArrowDown className="mr-1 h-4 w-4 text-red-500" />
          )}
          <p className={cn("text-xs", isPositive ? "text-green-500" : "text-red-500")}>{change} from previous period</p>
        </div>
      </CardContent>
    </Card>
  )
}
