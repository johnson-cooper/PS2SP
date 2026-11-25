---
name: downhill-revived
slug: downhill-revived-comlata77
summary: >-
  A PC port of Downhill Domination (PS2), built on a matching decompilation.
  Bring your own disc.
categories:
  - preservation
  - development
  - ports
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://downhill-revived.pages.dev'
source:
  provider: github
  repository: ComLata77/downhill-revived
  repositoryId: '1447688102'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-06T03:12:45Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-25T02:29:20.063Z'
automation:
  sync: true
  github:
    repoEtag: W/"fada25372b8d295bffc23be221f38e8662476517b85cc61d9fd365e782d7f08c"
    releasesEtag: '"ad1a1ec552bf400ecf3a617d2c9aa1202b8cfcc5dd53e2a67ba715368e1da051"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: skuza-oss/downhill-revived'
  maturity: active-wip
verified: false
featured: false
hidden: false
relationships:
  forkOf: skuza-oss/downhill-revived
  source: skuza-oss/downhill-revived
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
