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
  stars: 237
  forks: 35
  lastCommit: '2026-11-21T08:08:40Z'
latestRelease:
  tag: v0.8.11
  name: Downhill Revived 0.8.11
  publishedAt: '2026-11-21T08:08:55Z'
  url: 'https://github.com/skuza-oss/downhill-revived/releases/tag/v0.8.11'
activity:
  lastSynchronized: '2026-11-21T23:16:28.235Z'
automation:
  sync: true
  github:
    repoEtag: W/"b7b61feae84ae0eca4fe1d5abc0cfebd1655e205e3b8c93fe0e750a7b400a713"
    releasesEtag: W/"566dfbcfabbd5c2d98adb30867cce00616d99cb0fd16c151a228956ece508c45"
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
