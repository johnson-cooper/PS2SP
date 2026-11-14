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
  lastSynchronized: '2026-11-14T21:30:16.605Z'
automation:
  sync: true
  github:
    repoEtag: W/"91b98344dce3f1c18dc7ada3221a93f18a377b8bcdf501d7e5970fd2b9719d0c"
    releasesEtag: W/"db0094d22f424f718302a7cd93f7e1ce9e119cf863854d5a89ab8d94babe2ebd"
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
