---
name: dotr-decomp
slug: dotr-decomp-blayr
summary: >-
  Matching decompilation of Yu-Gi-Oh! The Duelists of the Roses (PS2,
  SLUS_205.15): C that rebuilds the retail executable and its 762 code modules
  byte for byte
categories:
  - preservation
  - development
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: CC0-1.0
homepage: null
source:
  provider: github
  repository: Blayr/dotr-decomp
  repositoryId: '1433705793'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-05T10:57:27Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-06T09:25:23.270Z'
automation:
  sync: true
  github:
    repoEtag: W/"14e0561c8db76254263f2ad0489736af287eedba4de056556e71b65cc825240a"
    releasesEtag: '"be990f20b43a23fbb93f1d0f3c6e480ef5b6d5e3fd6a3bceb642e74683ba0c83"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: kira-502/dotr-decomp'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: kira-502/dotr-decomp
  source: kira-502/dotr-decomp
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
