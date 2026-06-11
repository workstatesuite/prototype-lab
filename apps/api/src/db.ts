import { neon } from "@neondatabase/serverless"

import type { ApiEnv } from "./env"

export function createDb(env: ApiEnv) {
  if (!env.databaseUrl) {
    return null
  }

  return neon(env.databaseUrl)
}

export type Db = NonNullable<ReturnType<typeof createDb>>
