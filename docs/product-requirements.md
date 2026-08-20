# Master E-Commerce Platform Specification

## 1. Product Vision

Build a **production-grade, premium e-commerce platform** with two genuinely separate applications:

**Storefront**

- Customer-facing commerce website
- Luxury, highly polished interface
- Inspired by Apple's clarity, motion, product storytelling and whitespace
- More premium and refined than the current CosmicTech storefront
- Fully responsive
- Fast
- SEO-friendly
- Configurable from the admin dashboard

**Admin Platform**

- Separate application
- Separate authentication
- Role-based access
- Complete control over:
  - Products
  - Inventory
  - Orders
  - Customers
  - Reviews
  - Collections
  - Categories
  - Discounts
  - Expenses
  - Revenue
  - Storefront
  - Branding
  - Users/staff
  - Analytics
  - Settings
  - Future payments

The platform should be designed so that it can later evolve into a reusable commerce system for other stores.

---

# 2. Recommended Architecture

```text
CUSTOMER STOREFRONT
        │
        │
        ▼
┌─────────────────────────┐
│     Commerce API        │
│ Node.js + Express       │
│ Zod + Prisma            │
└───────────┬─────────────┘
            │
            ▼
     PostgreSQL DB
            ▲
            │
┌───────────┴─────────────┐
│     Admin API           │
│ RBAC + Admin Auth       │
└───────────▲─────────────┘
            │
            │
     ADMIN DASHBOARD

```

Additional services:

```text
Commerce API
     │
     ├── Notification Service
     │      ├── Email
     │      ├── WhatsApp
     │      └── Future SMS
     │
     ├── Media Service
     │
     ├── Payment Service
     │      ├── COD
     │      ├── JazzCash [later]
     │      └── Easypaisa [later]
     │
     ├── Analytics Engine
     │
     └── Audit Logging

```

---

# 3. Authentication Architecture

There will be separate authentication systems.

## Customer

Customer can:

- Register
- Login
- Logout
- Reset password
- Verify email
- Verify phone when required
- Manage profile
- Manage addresses
- View orders
- Track orders

## Admin

Separate admin login.

Admin token must never be interchangeable with customer authentication.

Roles:

### Super Admin

Full platform access.

Can manage:

- Admins
- Staff
- Roles
- Permissions
- Store settings
- Financial data
- Payment settings
- Products
- Inventory
- Orders
- Customers
- Website
- Reviews
- Discounts
- Reports
- Exports
- Audit logs

### Admin

Operational administration.

Typical permissions:

- Products
- Categories
- Collections
- Orders
- Customers
- Inventory
- Discounts
- Reviews
- Analytics
- Storefront content

Can be restricted from:

- Creating super admins
- Viewing/changing secrets
- Critical financial settings
- System configuration

### Staff

Restricted operational access.

Example permissions:

- View orders
- Update fulfillment
- Add manual orders
- View inventory
- Update permitted inventory fields
- View customer delivery information

Cannot:

- Access sensitive settings
- Manage admins
- Change payment credentials
- Delete important financial records
- Change system security

---

# 4. Granular Permissions

Do not rely on roles alone.

Build permissions such as:

```text
orders.view
orders.create
orders.update
orders.export

products.view
products.create
products.update
products.delete

inventory.view
inventory.adjust

customers.view
customers.update

reviews.manage

discounts.manage

finance.view
finance.manage_expenses

cms.manage

settings.manage

admins.manage

```

This allows us to customize staff capabilities later.

---

# 5. Premium Storefront

The storefront should feel like a **premium technology/lifestyle brand rather than a generic Pakistani e-commerce template**.

Design characteristics:

- Large editorial typography
- Extremely clean grid
- Generous whitespace
- High-quality product photography
- Product-focused animations
- Minimal navigation
- Smooth transitions
- Subtle micro-interactions
- Refined hover states
- Cinematic hero areas
- Full-width visual storytelling
- Sticky product interactions where useful
- Minimal use of conventional cards
- Smooth mobile experience
- Strong luxury/product photography direction

---

# 6. Storefront Theme System

The admin should be able to modify the visual identity without changing code.

## Typography

Admin can select/change:

- Display font
- Heading font
- Body font
- Button font
- Font weights
- Heading sizing
- Body sizing

We can provide approved presets rather than allowing completely uncontrolled CSS.

Example:

```text
Preset 01 — Modern Luxury
Preset 02 — Minimal Tech
Preset 03 — Editorial
Preset 04 — Bold Contemporary

```

---

# 7. Color Palette Management

Admin can modify global:

- Primary
- Secondary
- Accent
- Background
- Surface
- Heading
- Body text
- Border
- Success
- Warning
- Error
- Button colors

Default design direction could use:

```text
Obsidian
Warm Ivory
Champagne
Muted Bronze
Soft Stone
Deep Graphite

```

rather than CosmicTech's current visual palette.

Changing the palette from the dashboard updates the entire storefront consistently.

---

# 8. Storefront CMS

Admin should control storefront content.

## Global

- Logo
- Favicon
- Store name
- Announcement bar
- Navigation
- Footer
- Contact information
- Social links
- WhatsApp
- Instagram
- Copyright text

## Homepage

Admin controls:

- Hero image/video
- Hero headline
- Hero copy
- CTA
- Featured products
- Categories
- Collections
- Promotional content
- Product showcases
- Editorial sections
- Trust sections
- Reviews
- Promotional banners
- Featured collection
- Final CTA

Sections can eventually be reordered.

---

# 9. Product Management

Each product should support:

- Product name
- Slug
- Description
- Short description
- SKU
- Product status
- Category
- Collections
- Brand
- Tags
- Images
- Videos
- Product gallery
- Base price
- Sale price
- Purchasing cost
- Tax configuration
- Inventory
- Specifications
- Features
- Compatibility
- Warranty
- Delivery information
- SEO title
- Meta description
- Search keywords

Statuses:

```text
DRAFT
ACTIVE
ARCHIVED
OUT_OF_STOCK

```

---

# 10. Product Options vs Variants

We should separate three concepts:

### Attributes

Information only.

Example:

```text
Brand: Apple Compatible
Bluetooth: 5.3
Battery: 6 hours

```

### Variants

Change the actual purchasable item.

Example headphones:

```text
Black
Silver
Blue
Rose

```

Each variant can have its own:

- SKU
- Image
- Stock
- Cost
- Price
- Barcode
- Weight

### Options

Customer selections that may affect configuration.

Example charger:

```text
Cable Type

USB-C → USB-C
USB-C → Lightning
No Cable

```

---

# 11. Complimentary Products / Add-ons

This should be a dedicated system rather than a hack.

For example:

## AirPods

Primary product:

```text
AirPods Pro

```

Complimentary item:

```text
Silicone Protective Case

```

Customer can select:

```text
No Case

or

Add Silicone Case + Rs. XXX

```

If added:

```text
Case Color:
Black
White
Purple
Red
Blue

```

---

## Charger

Primary product:

```text
30W Fast Charger

```

Options:

```text
Charger Only

Charger + USB-C to USB-C

Charger + USB-C to Lightning

```

---

## Headphones

Options:

```text
Color:

Black
Silver
Blue
Cream

```

Changing the color should:

- Change gallery images
- Change SKU
- Change available inventory
- Update availability
- Update price if applicable

---

# 12. Product Add-on Engine

Admin should be able to configure:

```text
MAIN PRODUCT
      │
      ├── Recommended Add-on
      ├── Optional Accessory
      ├── Complementary Product
      └── Bundle

```

For every add-on:

- Optional/required
- Additional price
- Discounted bundle price
- Available options
- Maximum quantity
- Product-specific eligibility

This allows future examples like:

```text
Laptop
+ Sleeve
+ Mouse
+ USB Hub

```

without changing code.

---

# 13. Shopping Cart

Cart supports:

- Products
- Variants
- Options
- Add-ons
- Quantity
- Discount codes
- Shipping estimate
- Remove item
- Edit configuration
- Save cart
- Guest cart
- Persistent cart
- Logged-in cart synchronization

Cart must always be recalculated server-side before checkout.

---

# 14. Guest Checkout

Guest checkout will be supported.

Required information can include:

- Name
- Phone
- Email
- Shipping address
- City
- Notes

A customer account is **not required for ordinary COD purchases**.

However security protections will apply.

---

# 15. High-Value Order Security

If an order exceeds a configurable threshold, for example:

```text
Rs. 30,000

```

we can require:

### Option A

Customer account login.

### Option B — preferable

Phone OTP verification.

### Option C

Email verification.

### Option D

Manual WhatsApp confirmation.

The threshold must be configurable from admin.

Example:

```text
Require verification above:
Rs. 25,000

```

This is better than permanently hard-coding the rule.

---

# 16. COD Fraud Protection

Guest checkout should also include:

- Rate limiting
- Duplicate order detection
- Phone validation
- IP monitoring
- Suspicious order scoring
- Order value thresholds
- CAPTCHA/Turnstile when suspicious
- Optional OTP
- Repeated cancellation detection

Possible future customer status:

```text
NORMAL
TRUSTED
REVIEW
COD_RESTRICTED
BLOCKED

```

---

# 17. Instagram and WhatsApp Commerce

Storefront can display:

### WhatsApp

```text
Order via WhatsApp
Ask About This Product

```

Pre-filled message:

```text
Hi, I'm interested in:
AirPods Pro
Color: White

```

### Instagram

```text
Message us on Instagram

```

These should complement normal checkout, not replace it.

---

# 18. Order Sources

Every order should have a source.

```text
STOREFRONT
ADMIN
WHATSAPP
INSTAGRAM
PHONE
WALK_IN
MARKETPLACE
OTHER

```

This becomes extremely useful for reporting.

Example:

```text
Instagram: 24%
Website: 52%
WhatsApp: 18%
Manual: 6%

```

---

# 19. Manual Orders

Admin/staff can create an order manually.

Workflow:

```text
New Order
   ↓
Select existing customer
or
Create customer
   ↓
Add products
   ↓
Select variants
   ↓
Select add-ons
   ↓
Set quantities
   ↓
Discount
   ↓
Shipping
   ↓
Payment method
   ↓
Order source
   ↓
Notes
   ↓
Create order

```

Manual orders affect:

- Inventory
- Revenue
- Analytics
- Customer history
- Product sales
- Profit

exactly like website orders.

---

# 20. External Orders

External orders can be recorded using:

- Manual admin entry
- CSV import
- Future API endpoint
- Future marketplace integrations

External orders retain their origin/source.

---

# 21. Orders Dashboard

Orders table should support:

- Search
- Filtering
- Sorting
- Pagination
- Bulk selection
- Saved filters

Columns could include:

```text
Order #
Date
Customer
Phone
Source
Products
Quantity
Subtotal
Discount
Shipping
Total
Payment
Fulfillment
Profit
Assigned Staff

```

---

# 22. Order Filters

Filters should include:

- Date
- Today
- Yesterday
- Last 7 days
- Last 30 days
- Custom date
- Status
- Payment status
- Shipping status
- Customer
- Product
- Category
- Order source
- Staff member
- City
- Order value
- COD
- Discount used

---

# 23. Order Status

```text
PENDING
CONFIRMED
PROCESSING
PACKED
SHIPPED
DELIVERED
CANCELLED
RETURNED
REFUNDED

```

Payment status remains separate:

```text
UNPAID
PENDING
PAID
PARTIALLY_REFUNDED
REFUNDED

```

---

# 24. CSV Export

Admin can export:

### Selected orders

Select:

```text
✓ #1003
✓ #1008
✓ #1017

```

then:

```text
Export Selected

```

### Filtered orders

Example:

```text
Status = Confirmed
Date = Today
City = Lahore

Export Results

```

### All orders

```text
Export All

```

CSV can contain:

- Order number
- Date
- Customer
- Phone
- Email
- Address
- City
- Product
- Variant
- Quantity
- Price
- Cost
- Discount
- Shipping
- Order total
- Payment method
- Status
- Source
- Notes

---

# 25. Inventory Management

Inventory should be financially aware.

For every SKU/variant:

```text
Available Stock
Reserved Stock
Sold
Purchase Cost
Retail Price
Stock Value
Expected Retail Value
Expected Profit

```

---

# 26. Inventory Purchases

Instead of simply typing:

```text
Stock = 50

```

admin should eventually add inventory batches.

Example:

```text
Product:
AirPods Pro

Quantity Purchased:
100

Cost per Unit:
Rs. 3,250

Total Investment:
Rs. 325,000

```

We retain historical purchasing data.

---

# 27. Inventory Adjustments

Support:

```text
RESTOCK
SALE
RETURN
DAMAGED
LOST
MANUAL_CORRECTION
TRANSFER

```

Every adjustment records:

- User
- Date
- Previous stock
- Change
- New stock
- Reason

---

# 28. Inventory Value

Dashboard shows:

### Inventory Cost

What current stock cost us.

```text
remaining quantity × purchase cost

```

### Retail Inventory Value

What it could sell for.

```text
remaining quantity × selling price

```

### Potential Gross Profit

```text
Retail Inventory Value
-
Inventory Cost

```

---

# 29. Finance Model

We should distinguish financial metrics properly.

## Gross Sales

```text
Total product sales
before expenses

```

## Net Sales

```text
Gross Sales
-
Discounts
-
Refunds

```

## COGS

Cost of goods sold.

```text
quantity sold × purchasing cost

```

## Shipping Cost

Actual or estimated logistics expense.

## Gross Profit

```text
Net Sales
-
COGS

```

## Contribution Profit

More useful operationally:

```text
Net Sales
-
COGS
-
Shipping
-
Ad Spend

```

## Net Operational Estimate

```text
Net Sales
-
COGS
-
Shipping
-
Ad Spend
-
Other Recorded Expenses

```

This avoids calling every number "revenue."

---

# 30. Daily Expenses

Admin should have an expense manager.

Expense types:

```text
ADVERTISING
SHIPPING
PACKAGING
SALARY
TOOLS
OFFICE
RETURN_COST
MARKETING
MISCELLANEOUS

```

Expense entry:

```text
Amount
Category
Date
Description
Order [optional]
Receipt [optional]
Added By

```

---

# 31. Ad Spend

Ad spend receives its own tracking because it is operationally important.

Examples:

```text
Meta Ads
TikTok Ads
Google Ads
Influencer
Other

```

Fields:

```text
Platform
Campaign
Amount
Date
Notes

```

Future integrations can automatically import ad spend.

---

# 32. Overview Dashboard

Top KPI cards:

```text
Today's Sales

Today's Orders

Today's Gross Profit

Estimated Contribution Profit

Total Sales

Total Orders

Average Order Value

Inventory Cost

Inventory Retail Value

Potential Inventory Profit

Current COGS

Shipping Costs

Ad Spend

Other Expenses

Net Operational Estimate

Customers

Products

Low Stock Items

```

---

# 33. Expected Revenue

Two concepts should be displayed separately.

### Expected Revenue From Current Inventory

```text
Sum(
Current available units
×
Current selling price
)

```

### Potential Inventory Profit

```text
Expected Revenue
-
Cost of Current Inventory

```

These are forecasts, not realized revenue.

---

# 34. Daily Financial Summary

For a day:

```text
Sales             Rs. 100,000
Discounts          -Rs. 5,000
Net Sales           Rs. 95,000

COGS               -Rs. 45,000
Shipping           -Rs. 7,000

Gross/Contribution Rs. 43,000

Ad Spend           -Rs. 10,000
Other Expenses     -Rs. 3,000

Operational Estimate
                    Rs. 30,000

```

This will make the dashboard considerably more useful than simply showing revenue.

---

# 35. Charts

Dashboard should include interactive charts.

## Revenue

```text
Revenue by Day
Revenue by Week
Revenue by Month

```

## Profit

```text
Sales vs COGS
Gross Profit
Contribution Profit
Expenses

```

## Orders

```text
Orders Over Time
Order Status
Order Sources

```

## Products

```text
Best Sellers
Revenue by Product
Revenue by Category
Units Sold

```

## Inventory

```text
Inventory Value
Low Stock
Stock Movement

```

## Acquisition

```text
Storefront
Instagram
WhatsApp
Manual
Other

```

---

# 36. Categories

Products should belong to categories.

Example:

```text
Earbuds
Headphones
Chargers
Cables
Cases
Power Banks
Accessories

```

Categories support:

- Name
- Image
- Description
- SEO
- Sort order
- Active/inactive

---

# 37. Collections

Collections are marketing-oriented.

Example:

```text
New Arrivals
Best Sellers
Premium Audio
iPhone Essentials
Under Rs. 5,000
Travel Essentials
Featured

```

Storefront collection pages should feel editorial rather than like generic catalog grids.

---

# 38. Discounts

Admin can create:

```text
Percentage Discount
Fixed Discount
Free Shipping
Product Discount
Collection Discount
Category Discount

```

Example:

```text
Code:
WELCOME10

Discount:
10%

Minimum:
Rs. 5,000

Maximum Uses:
500

Per Customer:
1

Starts:
...

Expires:
...

```

---

# 39. Automatic Promotions

Future-ready support for rules such as:

```text
Spend Rs. 10,000
Get Rs. 1,000 Off

```

or:

```text
Buy AirPods
Get Case 20% Off

```

or:

```text
Buy Charger + Cable
Save Rs. 500

```

---

# 40. Reviews

Reviews can come from multiple legitimate sources.

```text
VERIFIED_CUSTOMER
WEBSITE
IMPORTED
INSTAGRAM
WHATSAPP
ADMIN_IMPORTED
OTHER

```

Review fields:

- Customer
- Rating
- Title
- Comment
- Photos
- Product
- Date
- Source
- Verified Purchase
- Status

---

# 41. Review Integrity

Admin can import or manually enter genuine reviews received externally.

However:

**Verified Purchase** can only be generated by matching the review to a real order.

An imported Instagram/WhatsApp review should be identified appropriately rather than falsely labeled as verified.

Statuses:

```text
PENDING
APPROVED
REJECTED
HIDDEN

```

---

# 42. Review Display

Product pages can display:

```text
4.8 ★
127 Reviews

```

Filters:

- Rating
- Most recent
- With photos
- Verified

Homepage can feature selected testimonials.

---

# 43. Customer Management

Customer profiles show:

- Name
- Email
- Phone
- Addresses
- Account status
- Orders
- Total spent
- Average order value
- Last purchase
- First purchase
- Reviews
- Refunds
- Cancellations
- Source

---

# 44. Customer Segmentation

Future-ready:

```text
NEW
RETURNING
VIP
HIGH_VALUE
COD_RISK
INACTIVE
WHOLESALE

```

---

# 45. Current Payment Method

Version 1:

# Cash on Delivery

Admin controls:

- Enable/disable COD
- Maximum COD amount
- Cities eligible
- Verification threshold
- COD fee if applicable

---

# 46. Future Payments

Architecture should already support a provider interface.

```text
PaymentProvider

CODProvider
JazzCashProvider
EasyPaisaProvider
FutureCardProvider

```

This means adding payments later doesn't require rebuilding checkout.

---

# 47. Shipping

Admin should eventually configure:

- Shipping zones
- Cities
- Rates
- Estimated delivery time
- Free shipping threshold
- COD availability
- Estimated business cost

Example:

```text
Lahore
Customer Shipping Fee: Rs. 250
Estimated Actual Cost: Rs. 180

```

This lets us calculate actual estimated profit.

---

# 48. Notifications

Order events should trigger centralized notifications.

```text
ORDER_CREATED
ORDER_CONFIRMED
ORDER_PACKED
ORDER_SHIPPED
ORDER_DELIVERED
ORDER_CANCELLED
PAYMENT_RECEIVED

```

Channels:

```text
Email
WhatsApp
Future SMS

```

---

# 49. Admin Dashboard Navigation

Recommended navigation:

```text
Overview

Orders

Products
  ├ Products
  ├ Categories
  ├ Collections
  ├ Add-ons
  └ Reviews

Inventory
  ├ Stock
  ├ Purchases
  └ Adjustments

Customers

Marketing
  ├ Discounts
  ├ Coupons
  └ Promotions

Finance
  ├ Overview
  ├ Expenses
  ├ Ad Spend
  └ Reports

Analytics

Storefront
  ├ Homepage
  ├ Navigation
  ├ Footer
  ├ Theme
  ├ Typography
  └ Branding

Team
  ├ Super Admin
  ├ Admin
  ├ Staff
  └ Permissions

Settings

Audit Logs

```

---

# 50. Security

The platform must retain the previously defined production security requirements.

### Core

- Separate customer/admin authentication
- Separate JWT secrets
- Password hashing
- Strong environment secrets
- Zod validation
- Server-side authorization
- Record-level authorization
- Restricted CORS
- Helmet
- HTTPS
- Rate limiting

### Commerce Integrity

- Never trust frontend prices
- Server-calculated totals
- Server-calculated discounts
- Server-side shipping
- Inventory transaction protection
- Product/order price snapshots
- Coupon validation
- Protected payment states

### Guest Security

- Rate limiting
- OTP where appropriate
- CAPTCHA when suspicious
- Duplicate-order detection
- High-value verification
- COD abuse monitoring

### Admin Security

- Role-based access
- Granular permissions
- Audit logging
- Admin login throttling
- Future 2FA
- Critical-action protection

### Data

- API response field filtering
- Safe uploads
- XSS prevention
- Parameterized database access
- No exposed secrets
- Automated database backups

---

# 51. Audit Logs

Important admin actions should be recorded.

Example:

```text
USER
admin@example.com

ACTION
ORDER_STATUS_UPDATED

ORDER
#CT1038

FROM
PROCESSING

TO
SHIPPED

DATE
...

IP
...

```

Other logged actions:

- Product deletion
- Inventory adjustment
- Discount creation
- Expense modification
- Customer changes
- Staff permission changes
- Financial modifications

---

# 52. Search

Global admin search should find:

```text
Order
Customer
Email
Phone
Product
SKU

```

A command-style global search would make administration significantly faster.

---

# 53. Bulk Actions

Orders:

- Export
- Update status
- Assign staff
- Print
- Archive

Products:

- Publish
- Archive
- Category change
- Collection change
- Delete where safe

Inventory:

- Adjustment
- Export

Reviews:

- Approve
- Hide
- Delete

---

# 54. Responsive Admin

The admin dashboard should also be usable from:

- Desktop
- Tablet
- Mobile

Order fulfillment operations especially should work well from a phone.

---

# 55. Performance

The storefront should target:

- Fast initial render
- Optimized images
- Lazy loading
- CDN delivery
- Minimal layout shift
- Responsive images
- Efficient API calls
- Database indexes
- Server-side pagination
- Query caching where appropriate

The premium experience must not make the site slow.

---

# 56. SEO

Products and collections support:

- SEO title
- Meta description
- Canonical URLs
- Product schema
- Review schema
- Breadcrumb schema
- Open Graph
- Sitemap
- Robots configuration
- Image alt text

---

# 57. Phase 1 — Core Foundation

Build first:

1. Database architecture
2. Authentication
3. RBAC
4. Products
5. Variants
6. Options
7. Add-ons
8. Categories
9. Collections
10. Inventory
11. Customers
12. Cart
13. Guest checkout
14. COD
15. Orders
16. Manual orders
17. External order sources
18. CSV exports
19. Discounts
20. Reviews
21. Storefront CMS
22. Theme management
23. Finance/expenses
24. Dashboard analytics
25. Security
26. Audit logging

---

# 58. Phase 2 — Automation & Operational Improvements

Then:

- WhatsApp automation
- Email automation
- OTP verification
- Shipping automation
- Advanced promotions
- Product bundles
- Customer segmentation
- Advanced analytics
- Automated stock alerts
- Enhanced order risk scoring

---

# 59. Phase 3 — Payments & Advanced Commerce

Later:

- JazzCash
- Easypaisa
- Card payments
- Refund automation
- Payment reconciliation
- Abandoned checkout
- Wishlist
- Loyalty
- Referral system
- Marketplace integrations
- Ad platform integrations
- Automated reporting

---

# 60. Core Principle

This system should not be built as:

> "An online store with an admin page."

It should be built as a **commerce operating system** where:

```text
PRODUCTS
+
VARIANTS
+
INVENTORY
+
CUSTOMERS
+
ORDERS
+
FINANCE
+
MARKETING
+
CMS
+
ANALYTICS
+
AUTOMATION
+
SECURITY

```

all use the same underlying data.

The result should give us a storefront substantially more polished than CosmicTech while providing a backend powerful enough to operate the actual business day-to-day.

# Version 1 Direction — Locked for Now

The current specification therefore includes:

**Premium Apple-inspired luxury storefront + configurable branding + CMS + products + complex variants + complimentary products/add-ons + inventory purchasing costs + manual/external/storefront orders + secure guest checkout + high-value verification + Instagram/WhatsApp paths + categories + collections + reviews + coupons + COD + CSV exports + advanced order filters + customer management + revenue/profit/expense analytics + ad spend + charts + Super Admin/Admin/Staff RBAC + granular APIs + audit logs + full production security architecture.**

This becomes the **master baseline** that future changes should extend rather than rebuilding the platform from scratch.