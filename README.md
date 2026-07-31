# Preet Raval — Portfolio

Personal portfolio site: work history, projects and case studies, skills, and
verifiable certifications. Built with Next.js and deployed on Vercel.

**Live:** [preet-raval.vercel.app](https://preet-raval.vercel.app)

## Tech Stack

- **Framework**: Next.js 16 (App Router, React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Theme**: next-themes (light/dark, system preference)
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel (auto-deploys on push to `main`)

## Getting Started

Requires Node.js 18+ and npm.

```bash
git clone https://github.com/preetraval45/PreetRaval.git
cd PreetRaval
npm install
npm run dev
```

Then open [localhost:3000](http://localhost:3000).

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint (flat config, `next/core-web-vitals`) |
| `npm run certs:render` | Render page 1 of each certificate PDF to WebP |
| `npm run images:optimize` | Convert the PNG screenshots in `public/` to WebP |

## Project Layout

```text
app/
  data/          projects.ts and experience.ts — shared source of truth
  site.ts        canonical site URL used by metadata, sitemap, robots, OG image
  components/    Navigation, Hero, FeaturedProjects, Footer, theme controls
  <route>/       one folder per page, each with its own layout.tsx for metadata
  projects/      listing plus per-project case studies (vyne, nexus)
public/
  certificates/  certificate PDFs, with rendered previews in previews/
scripts/         build-time asset tooling (see Scripts above)
```

Two conventions worth knowing:

- **Project data lives in `app/data/projects.ts`.** The projects page, the
  homepage cards, and the stat tiles all read from it — add a project there and
  every surface updates. Do not copy the list into a component.
- **Absolute URLs come from `app/site.ts`.** Metadata, JSON-LD, `sitemap.ts`,
  `robots.ts`, and the OG image all derive from `SITE_URL`. Changing the domain
  is a one-line edit there.

## Certificates

Certificate PDFs go in `public/certificates/`. Run `npm run certs:render` to
regenerate the preview images — it drives pdf.js inside headless Chrome via
puppeteer-core, because the Node canvas backends silently drop text in some
embedded fonts. Then add the `file` and `preview` paths to the entry in
`app/education/page.tsx`.

## Deployment

Pushing to `main` triggers a production deploy on Vercel. See
[DEPLOYMENT.md](DEPLOYMENT.md) for environment and domain setup.

## Contact

- **Email**: preetraval45@gmail.com
- **LinkedIn**: [preet-raval-45rs18vk](https://www.linkedin.com/in/preet-raval-45rs18vk/)
- **GitHub**: [preetraval45](https://github.com/preetraval45)
