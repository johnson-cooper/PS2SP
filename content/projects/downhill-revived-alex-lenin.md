---
name: downhill-revived
slug: downhill-revived-alex-lenin
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
  repository: alex-lenin/downhill-revived
  repositoryId: '1439353340'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-04T05:23:48Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-04T22:40:10.464Z'
automation:
  sync: true
  github:
    repoEtag: W/"685214f94dcee4c08fd8bb154aae2cceeab03346f5dca322d6a1f094d5a27772"
    releasesEtag: '"a4f168140a88f481cd5e05a9c06458170dc17a22c9e05abef5ff2db1765104a0"'
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
