---
name: PSBBN-Definitive-English-Patch-Nix
slug: psbbn-definitive-english-patch-nix-thomson2412
summary: >-
  A full English translation of the stock Japanese PlayStation Broadband
  Navigator (PSBBN) software with large drive support
categories:
  - dashboards
  - installers
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: Thomson2412/PSBBN-Definitive-English-Patch-Nix
  repositoryId: '1030312137'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-01T10:24:16Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-05T12:23:23.265Z'
automation:
  sync: true
  github:
    repoEtag: W/"3d79c54032455e32a0dfa8a4dd8c6ae5d75beb45ec088ffa110eec16cbb00b2e"
    releasesEtag: '"a265e13ba9964cb5149e04ac0bdf1bf82b2b42e69b35395c6e21fd78ae77d913"'
discovery:
  method: 'incremental:"PS2 homebrew" in:name,description,readme'
  confidence: 95
  evidence:
    - README explicitly mentions PlayStation 2
    - README identifies PS2 homebrew
    - GitHub fork of another repository
    - >-
      fork lineage traces to indexed PS2 project:
      CosmicScale/PSBBN-Definitive-Project
  maturity: active-unreleased
verified: false
featured: false
relationships:
  forkOf: CosmicScale/PSBBN-Definitive-Project
  source: CosmicScale/PSBBN-Definitive-Project
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
