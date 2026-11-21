---
name: open-splashdown
slug: open-splashdown-itzferret
summary: >-
  Matching decompilation of Splashdown (PS2, 2001) and a native Linux port +
  MacOS + Windows support
categories:
  - preservation
  - development
  - ports
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: ItZFerret/open-splashdown
  repositoryId: '1456114932'
repository:
  archived: false
  defaultBranch: main
  stars: 1
  forks: 0
  lastCommit: '2026-11-13T13:55:10Z'
latestRelease:
  tag: v0.1-test1
  name: PC port test build 1
  publishedAt: '2026-11-13T13:55:10Z'
  url: 'https://github.com/ItZFerret/open-splashdown/releases/tag/v0.1-test1'
activity:
  lastSynchronized: '2026-11-21T23:17:13.699Z'
automation:
  sync: true
  github:
    repoEtag: W/"0f1307ef4faf34bd303b646508913a39e7fc33b6177d50f4fab4934f944ab976"
    releasesEtag: W/"583607bdd620fd1b3e424ac4387627be7904409f8c149aeef1c15a492f6884a6"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: CoastRedWood/splashdown'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: CoastRedWood/splashdown
  source: CoastRedWood/splashdown
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
