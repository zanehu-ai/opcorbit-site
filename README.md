# opcorbit-site

Official public website for **OpcOrbit Cloud**, operated by **OpcOrbit LLC** (`32 N Gould St, Sheridan, WY 82801, United States`). Hosted on Vercel at `https://www.opcorbit.com/`.

## Public Routes

| Path | Purpose |
| --- | --- |
| `/` | OpcOrbit Cloud SaaS product overview, capabilities, pricing, and billing FAQ |
| `/pricing/` | Monthly & annual USD subscription tiers (`$29`, `$99`, `$299`) and comparison |
| `/contact/` | Customer & billing support (`support@opcorbit.com`) and 14-day trial requests |
| `/terms/` | Terms of Service (Wyoming governing law, SaaS-only scope, OFAC compliance) |
| `/privacy/` | Privacy Policy (Stripe PCI-DSS payment handling and customer data rights) |
| `/refund/` | Refund & Cancellation Policy (cancel anytime, 14-day guarantee, 5–10 business days) |

## Local Verification

```bash
npm ci
npm run lint
npm run typecheck
npm run build
npm run check:compliance
```

## Deployment

Production deploys from the `opcorbit` Vercel team project `opcorbit-site` using static Next.js export (`output: "export"` into `out/`), with legacy route redirects and security headers configured in `vercel.json`.
