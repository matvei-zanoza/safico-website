# SoFiCo Services Limited (Placeholder)

Production-ready, compliance-oriented corporate B2B website built with Next.js App Router (TypeScript) and Tailwind CSS.

## Requirements

- Node.js 20+ recommended
- pnpm (project uses `pnpm-lock.yaml`)

## Setup

1. Install dependencies

```bash
pnpm install
```

2. Configure environment variables

Copy `.env.example` to `.env.local` and fill placeholders:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_DEPLOY_ENV` (`preview` | `production`)
- `CATALOG_ACCESS_KEY`
- `ADMIN_PASSWORD`

3. Run locally

```bash
pnpm dev
```

## Build / Run

```bash
pnpm build
pnpm start
```

## Deploy to Netlify

1. Push this project to GitHub/GitLab/Bitbucket.
2. In Netlify: `Add new site` -> `Import an existing project`.
3. Select the repository and keep defaults:
   - Build command: `pnpm build`
   - Publish directory: leave empty (Netlify auto-detects Next.js)
4. Add environment variables in `Site settings` -> `Environment variables`:
   - `NEXT_PUBLIC_SITE_URL` (your Netlify domain or custom domain)
   - `NEXT_PUBLIC_DEPLOY_ENV` (`preview` for branch deploys, `production` for main production deploy)
   - `CATALOG_ACCESS_KEY`
   - `ADMIN_PASSWORD`
5. Trigger deploy (`Deploy site` / `Trigger deploy`).

Project includes [`netlify.toml`](/Users/ekaterina140805/Documents/Playground/site-vercel-fix/netlify.toml) with build command and Node.js version for predictable CI builds.

## Preview vs Production

The site supports two deploy modes controlled by `NEXT_PUBLIC_DEPLOY_ENV`:

- `preview`: global `robots` defaults to `noindex,nofollow`
- `production`: public pages are indexable (restricted areas remain `noindex`)

## Restricted areas

### Catalog

- Route: `/catalog` and `/catalog/[sku]`
- Soft gate via query key: `?k=CATALOG_ACCESS_KEY`
- Always `noindex,nofollow`
- Excluded from sitemap
- Disallowed in `robots.txt`

### Admin

- Route: `/admin` (and subpaths)
- Protected by middleware Basic Auth
- Username: `admin`
- Password: `ADMIN_PASSWORD`
- Secure default: if `ADMIN_PASSWORD` is missing, middleware returns `403`

## Compliance notes

- No analytics
- No trackers
- No phone numbers
- No bank account details
- No testimonials
