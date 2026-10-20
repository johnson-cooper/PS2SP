---
name: dds-decomp
slug: dds-decomp-tge-was-taken
summary: 'Matching decompilation of Shin Megami Tensei: Digital Devil Saga 1 & 2 (PS2)'
categories:
  - preservation
  - development
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: tge-was-taken/dds-decomp
  repositoryId: '1427145008'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-20T14:35:21Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-20T15:22:35.905Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: Megami-Decomps/dds-decomp'
  maturity: active-wip
verified: false
featured: false
hidden: false
relationships:
  forkOf: Megami-Decomps/dds-decomp
  source: Megami-Decomps/dds-decomp
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
