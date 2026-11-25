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
  lastSynchronized: '2026-11-25T22:34:20.476Z'
automation:
  sync: true
  github:
    repoEtag: W/"b91125f33515b82bc26edf8244fb242954a38b241482e12e804e6af9216d5539"
    releasesEtag: W/"7d490c34ea958f958fda2b9d497bc16c4d758b68438ceca78979e8ab8fdfc5d5"
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
