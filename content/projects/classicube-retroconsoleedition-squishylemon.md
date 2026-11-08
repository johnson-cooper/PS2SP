---
name: ClassiCube-RetroConsoleEdition
slug: classicube-retroconsoleedition-squishylemon
summary: A fork of ClassiCube which aims to provide better support for older consoles.
categories:
  - utilities
tags:
  - fork
  - auto-discovered
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: squishylemon/ClassiCube-RetroConsoleEdition
  repositoryId: '1435600064'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-11-01T10:17:55Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-08T00:36:12.925Z'
automation:
  sync: true
  github:
    repoEtag: W/"fa2ffca3ce3f5ac134364eab6ca77c6f984e56d8424da65d1aedfe41bd7b34f0"
    releasesEtag: '"16473d649f768214514c512b7be0be3277466c8f8f99dd19d61ab7fc23e84735"'
discovery:
  method: 'incremental:"ps2 port" in:name,description,readme'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - release metadata identifies PS2
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: ClassiCube/ClassiCube
  source: ClassiCube/ClassiCube
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
