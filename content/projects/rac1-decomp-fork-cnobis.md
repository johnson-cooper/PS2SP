---
name: rac1-decomp-fork
slug: rac1-decomp-fork-cnobis
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
  repository: cnobis/rac1-decomp-fork
  repositoryId: '1416103832'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-13T19:38:20Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-14T00:20:58.168Z'
automation:
  sync: true
  github:
    repoEtag: W/"09194a414718d7e2561056c200f422e2c2c61013cce67de535b7400ab74510e0"
    releasesEtag: '"36d567469700f4427b574366fb28c0a44b33cd0a46243826716bb9a44ce0b216"'
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
