import { createMachine } from "xstate"

export const chartRanges = ["90d", "30d", "7d"] as const

export type ChartRange = (typeof chartRanges)[number]

type ChartRangeState = "last90Days" | "last30Days" | "last7Days"

const rangeByState: Record<ChartRangeState, ChartRange> = {
  last90Days: "90d",
  last30Days: "30d",
  last7Days: "7d",
}

export const chartRangeMachine = createMachine({
  id: "chartRange",
  initial: "last90Days",
  states: {
    last90Days: {
      on: {
        SELECT_30_DAYS: "last30Days",
        SELECT_7_DAYS: "last7Days",
      },
    },
    last30Days: {
      on: {
        SELECT_90_DAYS: "last90Days",
        SELECT_7_DAYS: "last7Days",
      },
    },
    last7Days: {
      on: {
        SELECT_90_DAYS: "last90Days",
        SELECT_30_DAYS: "last30Days",
      },
    },
  },
})

export function isChartRange(value: string): value is ChartRange {
  return chartRanges.includes(value as ChartRange)
}

export function chartRangeFromState(value: unknown): ChartRange {
  return rangeByState[value as ChartRangeState] ?? "90d"
}

export function chartRangeEvent(range: ChartRange) {
  if (range === "30d") {
    return { type: "SELECT_30_DAYS" as const }
  }

  if (range === "7d") {
    return { type: "SELECT_7_DAYS" as const }
  }

  return { type: "SELECT_90_DAYS" as const }
}
