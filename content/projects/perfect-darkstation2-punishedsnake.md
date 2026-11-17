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
  lastCommit: '2026-11-15T21:43:27Z'
latestRelease:
  tag: tools-spu2bank-v1
  name: SPU2 sound bank tool (tools-spu2bank-v1)
  publishedAt: '2026-11-14T22:42:13Z'
  url: >-
    https://github.com/PunishedSnake/perfect-darkstation2/releases/tag/tools-spu2bank-v1
activity:
  lastSynchronized: '2026-11-17T22:25:48.574Z'
automation:
  sync: true
  github:
    repoEtag: W/"b19dff65437e4dd8a701a42b634a97314188860a47a3f16cad463304a801c9b3"
    releasesEtag: W/"e8d82e5000d8d97b5d32c9ce8aa8c9161ea5c401d9021a0ec1abf7c13761786d"
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
