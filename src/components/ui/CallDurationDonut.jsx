"use client"

import * as React from "react"
import { Phone } from "lucide-react"
import { PieChart, Pie, Cell, Label } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartTooltip,
  ChartTooltipContent,
  ChartContainer,
} from "@/components/ui/chart"

export function CallDurationDonut() {
  // Example durations in seconds
  const agentTalk = 42
  const callerTalk = 48
  const silence = 12
  const totalDuration = agentTalk + callerTalk + silence

  const chartData = [
    { name: "Agent", value: agentTalk, fill: "#22c55e" }, // green
    { name: "Caller", value: callerTalk, fill: "#eab308" }, // yellow
    { name: "Silence", value: silence, fill: "#3b82f6" }, // blue
  ]
  const chartConfig = {
  agent: { label: "Agent" },
  caller: { label: "Caller" },
  silence: { label: "Silence" },
}

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Call Breakdown</CardTitle>
        <CardDescription>Agent vs Caller vs Silence</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          className="mx-auto aspect-square max-h-[250px]"
          config={chartConfig}
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={80}
              strokeWidth={5}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              <Label
                content={({ viewBox }) => {
                  if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox)) return null

                  const formattedTime = `${Math.floor(totalDuration / 60)}m ${totalDuration % 60}s`

                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-2xl font-bold"
                      >
                        {formattedTime}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 20}
                        className="fill-muted-foreground text-sm"
                      >
                        Total Duration
                      </tspan>
                    </text>
                  )
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium">
          <Phone className="h-4 w-4 text-green-400" />
          Breakdown of a single call
        </div>
        <div className="text-muted-foreground">
          Data includes agent, caller, and silence time.
        </div>
      </CardFooter>
    </Card>
  )
}
