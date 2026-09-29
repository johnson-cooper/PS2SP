# PS2SP — PlayStation 2 Software Plaza

PS2SP is a community-oriented, Markdown-driven index of PlayStation 2 software.

The goals are simple:

- keep project pages in plain Markdown;
- keep repository/release metadata synchronized automatically;
- discover both current and historical PS2 software without brute-force rescanning GitHub;\n- index non-GitHub PS2 resources such as communities, documentation, archives, hardware, mods, online services, and media;
- deploy as a static Astro site on Cloudflare Pages;
- keep Git as the durable source of truth;
- require no application database or always-on backend.

## Architecture

```text
GitHub / GitLab / Codeberg / legacy sources
                |
                v
      automated catalog jobs
        /                 \
       v                   v
known-project sync    new-project discovery
       |                   |
conditional ETags     incremental + historical
24 hourly shards      resumable bootstrap
       \                   /
        v                 v
       content/projects/*.md
                |
                v
              Astro
                |
                v
      static site + JSON API
                |
                v
        Cloudflare Pages
```

The public catalog is generated entirely from `content/projects/*.md`. Automation refreshes machine-owned repository data while human-written titles, summaries, categories, tags, features, and body copy remain editable.

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

Create a Pages project connected to this repository and use:

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`

Catalog commits then deploy automatically.

## Catalog automation

PS2SP deliberately separates **known-project synchronization** from **new-project discovery** so the catalog can scale without exhausting GitHub's API limits.

### Known projects

`.github/workflows/catalog-sync.yml` runs hourly. The registry is deterministically divided into 24 shards, so each GitHub-backed project is checked approximately once per day instead of every project being scanned at once.

Each project stores GitHub ETags for repository and release metadata. Subsequent requests send `If-None-Match`. Unchanged resources normally return `304 Not Modified`, so PS2SP performs no enrichment and writes no catalog change.

The sync also uses the repository's `pushed_at` value instead of making a separate commits request. A normal unchanged check therefore consists only of bounded conditional metadata requests.

### New-project discovery

`.github/workflows/catalog-discovery.yml` runs every two hours with a hard request budget.

Discovery has three layers:

1. **Trusted PS2 sources** — repositories from explicitly configured PS2 organizations such as `ps2dev` and `ps2homebrew` are seeded directly.
2. **Incremental discovery** — recent GitHub searches use a persisted watermark so every run does not repeat the complete history of GitHub.
3. **Historical bootstrap** — GitHub history is scanned in monthly `created:` windows, working backward from the present to January 2000. Progress is stored in `discovery/state.json`, so a rate limit or timeout resumes later instead of restarting.

Searches are paced to respect GitHub's separate search rate limit. The job also keeps a core-rate reserve and stops cleanly before exhausting the token.

Existing pending candidates are remembered and are not expensively rediscovered every run. A bounded subset is periodically rechecked so a project can move from the review queue into the public catalog when its evidence improves.

### Historical and dormant software

Project maturity is no longer an inclusion gate.

Archived, dormant, discontinued, unreleased, and historical PS2 software can still be indexed when PS2 relevance is strong enough. Maturity is recorded as metadata rather than being used to discard legitimate old software.

Ordinary unchanged forks are still treated conservatively. Independently maintained forks can be published when the available evidence shows meaningful divergence.

## Authentication and rate limits

The workflows work with the repository-scoped `GITHUB_TOKEN` by default.

For additional headroom, add a repository secret named:

```text
PS2SP_GITHUB_TOKEN
```

The workflows prefer that token when present and fall back to GitHub Actions' built-in token otherwise.

The code also enforces its own per-run request budgets and rate-limit reserves. Increasing the token limit is useful, but the primary protection is incremental discovery, sharding, conditional requests, deduplication, and resumable progress.

Run the jobs locally with a GitHub token:

```bash
GITHUB_TOKEN=... npm run catalog:sync
GITHUB_TOKEN=... npm run catalog:discover
```

To force a local full sync instead of the current shard:

```bash
GITHUB_TOKEN=... SYNC_ALL=true npm run catalog:sync
```

## Discovery configuration

`config/discovery-sources.json` contains:

- trusted PS2 organizations/users;
- high-confidence historical/incremental search queries;
- broader queries used only for recent incremental discovery.

This keeps the crawler generic while allowing the catalog to add known ecosystem sources without hardcoding them throughout the discovery engine.

## Add a project manually

Copy `content/projects/_template.md.example` to a new `.md` file and fill in its frontmatter.

Human-maintained fields include the title, summary, categories, tags, features, and body copy. Machine-maintained fields live under `repository`, `latestRelease`, `activity`, and the GitHub cache validators under `automation.github`.

## Static API

The build exposes:

- `/api/projects.json`
- `/api/categories.json`
- `/api/releases.json`\n- `/api/resources.json`

This makes PS2SP usable by other websites, launchers, dashboards, and future PS2-native clients without needing an API server.

## License

Site source and catalog metadata can be licensed separately from third-party project software. PS2SP does not redistribute third-party binaries by default; release buttons point to the upstream project's own release infrastructure.
