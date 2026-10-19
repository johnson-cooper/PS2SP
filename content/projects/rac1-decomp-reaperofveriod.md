---
name: rac1-decomp
slug: rac1-decomp-reaperofveriod
summary: >-
  A work-in-progress matching decompilation of the original Ratchet & Clank
  (2002) for PlayStation 2 (SCES_509.16, PAL v2.00). Focuses on reconstructing
  clean, idiomatic C/C++ source code identical to the retail executable, paving
  the way for native PC re-implementation and game preservation.
categories:
  - preservation
  - development
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://openrac.dev/'
source:
  provider: github
  repository: ReaperOfVeriod/rac1-decomp
  repositoryId: '1416171101'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-12T21:29:40Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-19T14:42:46.590Z'
automation:
  sync: true
  github:
    repoEtag: W/"5cb5303a57f32dfb770ab21e6506d5af0b2dbf5c3a00b0bd9e3f5c643381d4cb"
    releasesEtag: '"1474211309c9dbcbb93bb9a0d25d66c80bd12d58effff574e673d3f6cebe58ae"'
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: OpenRAC/rac1-decomp'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: OpenRAC/rac1-decomp
  source: OpenRAC/rac1-decomp
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
