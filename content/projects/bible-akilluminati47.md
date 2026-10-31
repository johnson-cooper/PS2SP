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
  lastCommit: '2026-10-28T21:27:18Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-31T05:41:05.442Z'
automation:
  sync: true
  github:
    repoEtag: W/"38b87ee3a66a72f14e0f1785d4a9a20720db3470cb34d898068e4029935aadbb"
    releasesEtag: '"b2698f3bc425a78276de1d8fc6bd7bb2255a34bae88cfdf311a1da54908ed37a"'
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
