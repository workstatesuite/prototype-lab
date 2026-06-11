import { Hono } from "hono"
import { cors } from "hono/cors"

import { createDb } from "./db"
import { readEnv } from "./env"

const env = readEnv()
const db = createDb(env)

const app = new Hono()

app.use(
  "*",
  cors({
    origin: env.webOrigin,
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
  })
)

app.get("/health", (c) => {
  return c.json({
    ok: true,
    service: "prototype-api",
    databaseConfigured: Boolean(db),
  })
})

app.get("/db/health", async (c) => {
  if (!db) {
    return c.json(
      {
        ok: false,
        error: "DATABASE_URL is not configured",
      },
      503
    )
  }

  const [result] = await db`select now() as now`

  return c.json({
    ok: true,
    now: result.now,
  })
})

Bun.serve({
  port: env.port,
  fetch: app.fetch,
})

console.log(`API running on http://localhost:${env.port}`)
