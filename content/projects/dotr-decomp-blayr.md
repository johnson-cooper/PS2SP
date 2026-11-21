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
  lastSynchronized: '2026-11-21T09:53:18.103Z'
automation:
  sync: true
  github:
    repoEtag: W/"efeda125a20780297cd24a99e3ab916ebb3bc9caeed0d263a5232ed08762671b"
    releasesEtag: '"acc2dfa1507605c36b62df13cb3d5125a73ada5d832ec7ef65c5a1968664006f"'
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
