---
name: downhill-revived
slug: downhill-revived-gost1930
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
  repository: gost1930/downhill-revived
  repositoryId: '1462032963'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-17T17:27:04Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-19T03:28:09.818Z'
automation:
  sync: true
  github:
    repoEtag: W/"5c8d5166dfd7cc3acbe7f725d47bf24703176a699fce1d93beb36ca04c268d8d"
    releasesEtag: '"5439eddf41757a3450423ee500ca4e4ae360a247e876f1c1b434042b8a82a5b8"'
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
