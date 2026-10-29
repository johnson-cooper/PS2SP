---
name: rac1-decomp
slug: rac1-decomp-llesieur99
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
  repository: llesieur99/rac1-decomp
  repositoryId: '1431085436'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-27T12:37:56Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-29T00:59:02.308Z'
automation:
  sync: true
  github:
    repoEtag: W/"b08b1e1c13c770d58fcc86c88f041d19a151dd53d6e149911c45b63ce41b50bb"
    releasesEtag: '"ed883635daf9e1a915725ab8be081a3ea70614a4faeaca680146a5aa9133984d"'
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
