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
  lastCommit: '2026-11-04T05:17:16Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-04T09:13:15.869Z'
automation:
  sync: true
  github:
    repoEtag: W/"63dd34418da4241e6a236af54891f4ae29e22a3451bda6201c31c808f4c38347"
    releasesEtag: '"c4bd51f9504671f4969901308ba412b6242c8d688035833bd4cd4af22ec05bbd"'
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
