import { describe, expect, it } from "vitest"

import { cn } from "./utils"

describe("cn", () => {
  it("merges conditional Tailwind classes", () => {
    const isHidden = false

    expect(cn("px-2", isHidden ? "hidden" : undefined, "px-4")).toBe("px-4")
  })
})
