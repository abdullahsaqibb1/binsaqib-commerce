# Database foundation

BinSaqib uses Prisma ORM 7 with Neon PostgreSQL. The API connects through the official Neon Prisma adapter and initializes the client lazily at runtime.

## Connection variables

| Variable | Purpose |
| --- | --- |
| `DATABASE_POSTGRES_PRISMA_URL` | Pooled runtime connection used by the API |
| `DATABASE_POSTGRES_URL_NON_POOLING` | Direct connection preferred by Prisma migrations |
| `DATABASE_URL` | Integration fallback |

Values must remain in Vercel or ignored local environment files. Only variable names and placeholders belong in Git.

## Model groups

- Staff accounts, roles, and opaque sessions
- Customer accounts, sessions, and saved addresses
- Categories, collections, products, media, variants, options, and add-ons
- Inventory balances, purchase batches, reservations, and immutable movements
- Guest, storefront, manual, and external orders
- Order item snapshots, payments, fulfilment state, tracking tokens, and risk signals
- Reviews from customer, internal, and external sources
- Discounts, shipping zones, expenses, CMS content, and theme settings
- Webhook idempotency and administration audit logs

## Commands

```bash
npm run db:format
npm run db:validate
npm run db:generate
npm run db:migrate:deploy
```

`db:migrate:deploy` changes the connected database. Run it only after reviewing the committed migration and confirming the target environment.

## Migration policy

Migrations are committed to `apps/api/prisma/migrations`. Vercel builds generate the Prisma client but do not automatically modify production data. Production migrations are applied as an explicit release step before deploying code that depends on the new tables.
