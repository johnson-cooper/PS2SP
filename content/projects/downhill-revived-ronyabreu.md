---
name: downhill-revived
slug: downhill-revived-ronyabreu
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
  repository: RonyAbreu/downhill-switch
  repositoryId: '1444310447'
repository:
  archived: false
  defaultBranch: switch/port
  stars: 1
  forks: 0
  lastCommit: '2026-11-06T21:06:00Z'
latestRelease:
  tag: v0.1.0-beta.1
  name: Downhill Switch 0.1.0-beta.1
  publishedAt: '2026-11-06T21:06:32Z'
  url: 'https://github.com/RonyAbreu/downhill-switch/releases/tag/v0.1.0-beta.1'
activity:
  lastSynchronized: '2026-11-19T21:34:44.190Z'
automation:
  sync: true
  github:
    repoEtag: W/"a335aaf18b7faa93d979ea94bed69d81538621f788718456d6d19506b2bd3b45"
    releasesEtag: W/"379e23076bf01e24e3c4813f2778c99ecb13b4d0ef95e971ddb2c9ce2eea4100"
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
