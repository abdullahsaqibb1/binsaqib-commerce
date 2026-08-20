# BinSaqib Commerce architecture

BinSaqib Commerce is a modular commerce operating system with independently deployable customer, operations, and API surfaces.

## Applications

| Application | Purpose | Vercel project root |
| --- | --- | --- |
| Storefront | Premium catalogue, product discovery, guest checkout, and order tracking | `apps/storefront` |
| Admin | Orders, catalogue, inventory, customers, finance, CMS, and settings | `apps/admin` |
| API | Authentication and commerce domain services | `apps/api` |

## Platform

- Next.js App Router for storefront SEO, rendering, and performance.
- Next.js App Router for the isolated admin console.
- Express for a portable, domain-oriented API.
- Prisma with Neon PostgreSQL for transactional data.
- Vercel for preview and production deployments.

## Backend domains

The API will be separated into modules instead of a single application file:

1. Identity and access
2. Catalogue and configuration
3. Pricing, promotions, and add-ons
4. Inventory and purchasing
5. Cart and checkout
6. Orders, payments, and fulfilment
7. Customers and reviews
8. Finance and expenses
9. CMS, theme, and settings
10. Audit and reporting

## Security baseline

- Separate customer and admin sessions in secure, HttpOnly cookies.
- CSRF validation for state-changing cookie-authenticated requests.
- Strict CORS allowlists and security headers.
- Rate limits on authentication, checkout, and public lookup routes.
- Server-owned pricing, stock, roles, and order state transitions.
- Encrypted sensitive address fields and redacted logs.
- Auditable inventory and administration mutations.

## Environment policy

Secrets belong in Vercel environment variables and local ignored files. The repository only contains placeholders in `.env.example`. Database migrations will run only after the Vercel projects and Neon integration are linked and verified.
