# Scholar Digital Solutions — Marketing Website

A bold, dark, CMS-driven marketing site for Scholar Digital Solutions.
Every page pulls its content from the same Supabase `content` table your
Scholar Dashboard already manages — so once seeded, you edit this site
the exact same way you edit any client site (Website Editor → pick
"Scholar Digital Solutions" from the site dropdown).

## Pages

- `/` — Home (hero, dashboard-value stats, feature grid, CTA)
- `/pricing` — All six packages from the brochure, plus extras
- `/services` — What you build, laid out as six service pillars
- `/about` — Mission statement
- `/contact` — Working contact form (emails `info@scholardigitalsolutions.ie`)

## 1. Install & run locally

```bash
npm install
cp .env.local.example .env.local
# fill in .env.local with your real values (see below)
npm run dev
```

## 2. Environment variables

Same Supabase project as your dashboard:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | same as your dashboard's `.env.local` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | same as your dashboard's `.env.local` |
| `RESEND_API_KEY` | your Resend API key (same setup as the dashboard's Contact Us page) |
| `CONTACT_EMAIL_FROM` | optional — set once you've verified a domain in Resend, e.g. `Scholar Digital Solutions <noreply@scholardigitalsolutions.ie>` |

## 3. Seed the CMS content

Run `supabase-seed.sql` in the Supabase SQL Editor **once**. It:

1. Creates a `clients` row for Scholar Digital Solutions itself
2. Creates a `websites` row with `site_key = 'scholar'`
3. Seeds every content row for all five pages, matching exactly what's
   already on the live brochure/site — so opening the Website Editor for
   the first time shows real content, not placeholders

**Before running it:** the script has a placeholder `<CLIENT_ID>` in the
website insert — run the `clients` insert first, copy the returned `id`,
and paste it in before running the rest.

## 4. Deploy

Push this to its own GitHub repo and import it into Vercel as a **separate
project** from Scholar Dashboard (it's a distinct site, even though it
shares the same Supabase backend). Add the env vars above in Vercel
project settings, same as you did for the dashboard.

Connect your domain (`scholardigitalsolutions.ie`) via Cloudflare, same
process as any other client site — DNS-only (grey cloud) while you
confirm it's working.

## 5. Managing content

Once seeded and deployed, go to Scholar Dashboard → Website Editor →
select "Scholar Digital Solutions" from the site dropdown. You'll see
all five pages with their real sections, ready to edit — headlines,
pricing, feature copy, everything — exactly like any other client site.

## Notes on field naming

Your Website Editor auto-hides any content field whose name contains
`cta`, `button`, `link`, `href`, `url`, `color`, `colour`, `accent`,
`background`, or `gradient` (it assumes those are internal styling
metadata, not editable text). This site's button-text fields are
deliberately named `action_primary` / `action_secondary` / `action_label`
instead of `cta_*` so they show up and stay editable. Keep that pattern
in mind if you add new sections later.
