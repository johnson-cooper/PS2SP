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
  lastCommit: '2026-10-23T17:08:25Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-23T00:56:01.696Z'
automation:
  sync: true
  github:
    repoEtag: W/"4dfa719bd625453838c12faa9e8f122d071d16d0f48ef0f5e6d0ff9fc4ac7d11"
    releasesEtag: '"c8fdb0ff9b1b306d443ac14d219293cd8f1f6440506ec7a56074c5ca01740e56"'
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
