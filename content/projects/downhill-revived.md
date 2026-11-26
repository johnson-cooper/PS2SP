---
name: downhill-revived
slug: downhill-revived
summary: >-
  A PC port of Downhill Domination (PS2), built on a matching decompilation.
  Bring your own disc.
categories:
  - preservation
  - development
  - ports
tags:
  - auto-discovered
features: []
authors: []
license: GPL-3.0
homepage: 'https://downhill-revived.pages.dev'
source:
  provider: github
  repository: skuza-oss/downhill-revived
  repositoryId: '1423433613'
repository:
  archived: false
  defaultBranch: main
  stars: 253
  forks: 37
  lastCommit: '2026-11-25T00:36:37Z'
latestRelease:
  tag: v0.8.13
  name: Downhill Revived 0.8.13
  publishedAt: '2026-11-25T00:36:53Z'
  url: 'https://github.com/skuza-oss/downhill-revived/releases/tag/v0.8.13'
activity:
  lastSynchronized: '2026-11-26T23:54:06.880Z'
automation:
  sync: true
  github:
    repoEtag: W/"9c54d4f23b9c7ae1f5c2c906823347fad3a2d974299e39945536366d966c99aa"
    releasesEtag: W/"87fc64a2f70768b9c7a17ef9064799917fb267c7bacf565ec96513c47e0dc528"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
  maturity: released-active
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
