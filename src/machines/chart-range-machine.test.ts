import { createActor } from "xstate"
import { describe, expect, it } from "vitest"

import {
  chartRangeEvent,
  chartRangeFromState,
  chartRangeMachine,
} from "./chart-range-machine"

describe("chartRangeMachine", () => {
  it("moves between dashboard chart ranges", () => {
    const actor = createActor(chartRangeMachine).start()

    expect(chartRangeFromState(actor.getSnapshot().value)).toBe("90d")

    actor.send(chartRangeEvent("30d"))
    expect(chartRangeFromState(actor.getSnapshot().value)).toBe("30d")

    actor.send(chartRangeEvent("7d"))
    expect(chartRangeFromState(actor.getSnapshot().value)).toBe("7d")
  })
})
