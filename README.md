# PS2SP — PlayStation 2 Software Plaza

PS2SP is a community-oriented index of PlayStation 2 software and the wider PS2 ecosystem.

## Goals

- keep software project records in plain, reviewable Markdown;
- keep GitHub repository/release metadata synchronized automatically;
- discover current and historical PS2 software without brute-force rescanning GitHub;
- index non-repository PS2 resources such as communities, documentation, archives, hardware, mods, online services, and media;
- deploy as a static Astro site on Cloudflare Pages;
- keep Git as the durable source of truth;
- require no application database or always-on backend.

## Architecture

```text
software discovery + known upstreams        PS2 ecosystem directory
                |                                     |
                v                                     v
       content/projects/*.md               data/resources/directory.json
                \                                     /
                 \                                   /
                  +------------ Astro ---------------+
                               |
                               v
                      static site + JSON API
                               |
                               v
                        Cloudflare Pages
```

Human-written project metadata stays separate from synchronized repository fields. Automated jobs can refresh source activity, releases, repository statistics, and cache validators without overwriting curated descriptions.

## Local development

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

The generated site is written to `dist/`.

## Cloudflare Pages

Use:

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`

## Catalog automation

PS2SP separates known-project synchronization from new-project discovery.

### Known projects

`.github/workflows/catalog-sync.yml` runs hourly. The registry is split into 24 deterministic shards, so each GitHub-backed project is normally checked about once per day.

GitHub ETags are stored and reused through `If-None-Match`. Unchanged resources return `304 Not Modified`, avoiding unnecessary processing and catalog commits.

When synchronization code itself changes on upstream `main`, the workflow performs one bounded forced full refresh. This is used to apply metadata migrations and cleanup without waiting for every shard to cycle.

### New-project discovery

`.github/workflows/catalog-discovery.yml` runs every two hours with a hard request budget.

Discovery combines:

1. trusted PS2 organizations and developers;
2. incremental recent searches using a persisted watermark;
3. a resumable historical bootstrap scanning backward in bounded monthly windows.

Forks are intentionally stricter than normal repositories. Copied upstream README text is not enough to auto-publish a fork; a fork needs PS2-specific identity in its own name/topics/release metadata, or trusted/manual curation.

### Historical and dormant software

Age and inactivity are not exclusion criteria. Archived, dormant, discontinued, unreleased, and historical PS2 software can still be indexed when relevance is established.

## Authentication and rate limits

The workflows support the repository-scoped `GITHUB_TOKEN`. For additional headroom, add:

```text
PS2SP_GITHUB_TOKEN
```

The code enforces request budgets and reserve thresholds independently of the token's maximum quota.

Local commands:

```bash
GITHUB_TOKEN=... npm run catalog:sync
GITHUB_TOKEN=... npm run catalog:discover
npm run catalog:promote-pending
```

Pending discovery records are reviewed automatically by the promotion step. Released projects can be promoted at lower confidence; recent unreleased projects require much stronger PS2-specific evidence. Explicit WIP, archived, dormant/discontinued, profile, documentation-only, and list/database repositories remain in `discovery/pending/` for manual review.

Force a local complete refresh:

```bash
GITHUB_TOKEN=... SYNC_ALL=true FORCE_REFRESH=true npm run catalog:sync
```

## Data quality

Automatically discovered entries retain their discovery method and confidence. Low-confidence candidates remain outside the public catalog until evidence improves or a maintainer reviews them.

Maintained forks that later prove unrelated to PS2 can be hidden automatically without destroying their record, while curated or verified projects are preserved.

Unknown dates are shown as unknown rather than fake epoch dates.

## Wider PS2 directory

General ecosystem resources live in:

```text
data/resources/directory.json
```

This is PS2SP-owned catalog data and can include websites, communities, archives, documentation, hardware resources, media, downloads, and other useful PS2 material regardless of where it is hosted.

## Static API

The build exposes:

- `/api/projects.json`
- `/api/categories.json`
- `/api/releases.json`
- `/api/resources.json`

## License

Site source and catalog metadata can be licensed separately from third-party software. PS2SP does not redistribute third-party binaries by default; software download links point to upstream project infrastructure.
