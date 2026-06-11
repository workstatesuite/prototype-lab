# API

Optional Bun + Hono API for prototypes that need real request/response behavior or persistent data.

## Setup

```sh
cp apps/api/.env.example apps/api/.env
```

Add a Neon pooled connection string:

```sh
DATABASE_URL=postgres://user:password@ep-example-pooler.region.aws.neon.tech/dbname?sslmode=require
```

## Run

From the repo root:

```sh
bun run dev:api
```

The API runs on:

```text
http://localhost:3001
```

## Endpoints

```text
GET /health
GET /db/health
```

`/health` works without a database. `/db/health` checks the Neon connection.
