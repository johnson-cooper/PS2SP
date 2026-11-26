---
name: BIBLE
slug: bible-akilluminati47
summary: >-
  BIBLE: the boot loader RIPPS2 sets up. A PS2BBL Extended fork with RIPPS2's
  splash, a launch keys page (L2 + R2) and PS2 builds for memory card, USB,
  MMCE, MX4SIO and HDD.
categories:
  - boot-tools
  - launchers
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://github.com/akilluminati47/RIPPS2'
source:
  provider: github
  repository: akilluminati47/BIBLE
  repositoryId: '1436579951'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-10T03:59:18Z'
latestRelease:
  tag: signed
  name: 'BIBLE 7671a5d, signed by akilluminati47: the AUTO list waits for a drive'
  publishedAt: '2026-11-08T05:46:19Z'
  url: 'https://github.com/akilluminati47/BIBLE/releases/tag/signed'
activity:
  lastSynchronized: '2026-11-26T05:04:26.499Z'
automation:
  sync: true
  github:
    repoEtag: W/"b376b5ecfc907440740bfa6b3e4fcf0290307ed0d4114f7cb9074fb9aa43507f"
    releasesEtag: W/"32433293b1e31ce2a7f7b9e010fc7947d86d0b4552b066a545802a73a051e211"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README identifies PS2 homebrew
    - GitHub fork of another repository
    - >-
      fork lineage traces to indexed PS2 project:
      saildot4k/PlayStation2-Basic-BootLoader-Extended
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: saildot4k/PlayStation2-Basic-BootLoader-Extended
  source: saildot4k/PlayStation2-Basic-BootLoader-Extended
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
