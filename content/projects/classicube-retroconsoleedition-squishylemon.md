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
  lastCommit: '2026-10-30T00:21:38Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-30T00:59:48.876Z'
automation:
  sync: true
  github:
    repoEtag: W/"77a0fc9c53137cc01fa1083520ae1157ee9814fe4137de1ce24b2b8a665a4034"
    releasesEtag: '"80399694c75a8c644d0249a64c161ba58684a2b10dc101339d615790d812c8b6"'
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
