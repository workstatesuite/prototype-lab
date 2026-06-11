# Workrate Prototype Base

Frontend-first prototype base for Workrate dashboards and product concepts.

The default app runs without an API or database. A Bun + Hono API and Neon database hook are included for prototypes that need real request/response behavior or persistence.

## Stack

- Bun
- Vite + React + TypeScript
- TanStack Router with file-based routes
- Tailwind CSS v4
- shadcn/ui
- XState for meaningful workflow state
- Vitest
- Optional Bun + Hono API
- Optional Neon Postgres connection

## Quick Start

```sh
git clone https://github.com/workstatesuite/prototype-lab workrate-prototype
cd workrate-prototype
bun install
bun run dev --host 0.0.0.0
```

Open:

```text
http://localhost:5173/
```

## Fresh Project Setup

Use these commands when starting a new Workrate prototype from this base:

```sh
git clone https://github.com/workstatesuite/prototype-lab workrate-prototype
cd workrate-prototype

export PATH="$HOME/.bun/bin:$PATH"
bun install

rm -rf .git
git init
git add .
git commit -m "Initial commit"

bun run dev --host 0.0.0.0
```

## Scripts

```sh
bun run dev        # Start the Vite web app
bun run dev:api    # Start the optional Bun + Hono API
bun run build      # Type-check and build the web app and API
bun run build:api  # Type-check the API only
bun run lint       # Run ESLint
bun run test       # Run Vitest
bun run test:watch # Run Vitest in watch mode
bun run preview    # Preview the production web build
```

## Agent Prompt

Use this prompt when asking an agent to set up the project:

```text
Clone https://github.com/workstatesuite/prototype-lab into a new Workrate prototype folder. Use Bun to install dependencies. Do not modify the app. Initialize a fresh Git repository, create an initial commit, and start the dev server.
```

## Project Structure

```text
apps/api/              Optional Bun + Hono API with Neon database hook
public/logo.svg        Workrate logo from workrate.eu
rules/                 Agent guidance for prototype work
src/app/dashboard/     Dashboard block data
src/components/        shadcn blocks and app components
src/components/ui/     shadcn/ui component library
src/machines/          XState machines for meaningful workflow state
src/routes/            TanStack Router file routes
src/routeTree.gen.ts   Generated TanStack route tree
src/index.css          Workrate theme
vite.config.ts         Vite, Tailwind, and TanStack Router config
```

## Routing

Routes are file-based with TanStack Router.

```text
src/routes/__root.tsx  Root route and shared route layout
src/routes/index.tsx   Dashboard at /
```

Add a route by adding a file in `src/routes/`. TanStack Router updates `src/routeTree.gen.ts` during development/build.

## State Machines

Use XState when a prototype has modes, steps, async lifecycle, approvals, or branching behavior.

The dashboard includes `src/machines/chart-range-machine.ts` as a small starter example wired into the chart range control.

## shadcn/ui

The shadcn registry is initialized for Vite and Tailwind CSS v4. The available shadcn UI components are installed in `src/components/ui`.

Current public shadcn blocks are included, including dashboard, login/signup, preview, and sidebar block files. Shared block components live in `src/components`, with dashboard data in `src/app/dashboard/data.json`.

To add another registry item:

```sh
bun run shadcn:add -- @shadcn/dashboard-01
```

## Optional API

The API is optional. The frontend runs without it.

Start the API:

```sh
bun run dev:api
```

The API defaults to:

```text
http://localhost:3001
```

`3001` is the local API port so it does not conflict with Vite on `5173`. Override it with `PORT` in `apps/api/.env` if needed.

Endpoints:

```text
GET /health
GET /db/health
```

`/health` works without a database.

## Optional Neon Database

The database is optional. Add it only when a prototype needs persistence.

```sh
cp apps/api/.env.example apps/api/.env
```

Add a Neon pooled Postgres connection string:

```sh
DATABASE_URL=postgres://user:password@ep-example-pooler.region.aws.neon.tech/dbname?sslmode=require
```

Then run:

```sh
bun run dev:api
```

`/db/health` verifies the Neon connection.
