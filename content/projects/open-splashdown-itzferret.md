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
  stars: 0
  forks: 0
  lastCommit: '2026-11-13T07:56:08Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-13T11:35:27.480Z'
automation:
  sync: true
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
