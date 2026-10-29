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
  lastCommit: '2026-10-29T10:00:54Z'
latestRelease:
  tag: ps2-ps2_port_revamp-8
  name: 'PS2 build #8 (ps2_port_revamp, 96e7f3d)'
  publishedAt: '2026-10-29T09:35:18Z'
  url: >-
    https://github.com/squishylemon/ClassiCube-RetroConsoleEdition/releases/tag/ps2-ps2_port_revamp-8
activity:
  lastSynchronized: '2026-10-29T10:25:26.926Z'
automation:
  sync: true
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
