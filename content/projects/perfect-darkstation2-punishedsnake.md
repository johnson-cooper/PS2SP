---
name: perfect-darkstation2
slug: perfect-darkstation2-punishedsnake
summary: work in progress port of n64decomp/perfect_dark to PS2
categories:
  - ports
tags:
  - fork
  - auto-discovered
features: []
authors: []
license: MIT
homepage: null
source:
  provider: github
  repository: PunishedSnake/perfect-darkstation2
  repositoryId: '1345976910'
repository:
  archived: false
  defaultBranch: ps2
  stars: 0
  forks: 0
  lastCommit: '2026-11-08T16:43:55Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-08T20:45:58.704Z'
automation:
  sync: true
discovery:
  method: 'incremental:"ps2 port" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
  maturity: active-wip
verified: false
featured: false
hidden: false
relationships:
  forkOf: perfect-dark-pc-port/perfect_dark
  source: n64decomp/perfect_dark
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
