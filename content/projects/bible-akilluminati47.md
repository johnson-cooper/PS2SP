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
  lastCommit: '2026-10-28T15:03:33Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-28T19:07:21.883Z'
automation:
  sync: true
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
