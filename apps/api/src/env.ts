export interface ApiEnv {
  databaseUrl?: string
  port: number
  webOrigin: string
}

export function readEnv(): ApiEnv {
  return {
    databaseUrl: Bun.env.DATABASE_URL,
    port: Number(Bun.env.PORT ?? 3001),
    webOrigin: Bun.env.WEB_ORIGIN ?? "http://localhost:5173",
  }
}
