# BinSaqib Commerce

A premium, luxury-focused commerce operating system for BinSaqib.

## Planned architecture

- `apps/storefront` — customer-facing Next.js storefront
- `apps/admin` — secure Next.js operations console
- `apps/api` — Express API for commerce, orders, inventory, and finance
- `packages/*` — shared contracts, design tokens, and tooling
- Neon PostgreSQL with Prisma
- Vercel deployments for storefront, admin, and API

## Project principles

- Premium, editorial storefront experience
- Mobile-first performance and accessibility
- Guest checkout with secure order tracking
- Inventory ledger and operational auditability
- Modular domains instead of a monolithic backend
- No secrets committed to source control

## Local setup

1. Install Node.js 22 or later.
2. Run `npm install` from the repository root.
3. Copy `.env.example` to `.env` and replace placeholders locally.
4. Run one surface at a time with `npm run dev:storefront`, `npm run dev:admin`, or `npm run dev:api`.

Database commands are intentionally deferred until the Vercel projects and Neon integration are linked. See [the architecture notes](docs/architecture.md) for the deployment topology and security baseline.

## Status

Foundation and brand-direction bootstrap in progress on `codex/bootstrap-binsaqib`.
