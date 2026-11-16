---
name: OPL-JUMP
slug: opl-jump
summary: >-
  Community modification for Open PS2 Loader featuring the JUMP page and Smart
  APPS Filter.
categories:
  - loaders
tags:
  - auto-discovered
features: []
authors: []
license: AFL-3.0
homepage: null
source:
  provider: github
  repository: juankyt505/OPL-JUMP
  repositoryId: '1429338025'
repository:
  archived: false
  defaultBranch: main
  stars: 1
  forks: 0
  lastCommit: '2026-11-01T05:36:23Z'
latestRelease:
  tag: v1.0.2
  name: OPL JUMP v1.0.2
  publishedAt: '2026-11-01T05:36:24Z'
  url: 'https://github.com/juankyt505/OPL-JUMP/releases/tag/v1.0.2'
activity:
  lastSynchronized: '2026-11-16T02:09:28.048Z'
automation:
  sync: true
  github:
    repoEtag: W/"99a3cfca1c8de8046a735900b228e0d98fbaa03eb6bc273eb0fcde1c8e0ec074"
    releasesEtag: W/"1adff7820a36893d088850ae8d70809b1a0b5a4b9505bead9c9f8150a7955bcf"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - release contains a PS2-style ELF asset
  maturity: released-active
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
