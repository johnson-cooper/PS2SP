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
  lastSynchronized: '2026-11-13T00:24:25.604Z'
automation:
  sync: true
  github:
    repoEtag: W/"914549dd541b75ba184712e02408503306250392d1c7e432a4d174fd45576767"
    releasesEtag: '"98b39eaf82b5aff313393cd803aefa154c085e8109a70fb42a843a28b7b06d93"'
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
