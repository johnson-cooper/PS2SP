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
  lastSynchronized: '2026-11-22T03:15:38.820Z'
automation:
  sync: true
  github:
    repoEtag: W/"25fbb1467d515d66f48b915ecbcb2bbc3fa2c26f9a09650fc1b2e2fc42b63bae"
    releasesEtag: '"0343964b28fb2eda143511ab450b2bffb6215822f235192fb1be4cc3a8b0fb1f"'
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
