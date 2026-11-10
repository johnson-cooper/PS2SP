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
  stars: 199
  forks: 29
  lastCommit: '2026-11-10T20:19:52Z'
latestRelease:
  tag: v0.7.15
  name: Downhill Revived 0.7.15
  publishedAt: '2026-11-10T20:19:29Z'
  url: 'https://github.com/skuza-oss/downhill-revived/releases/tag/v0.7.15'
activity:
  lastSynchronized: '2026-11-10T23:22:13.395Z'
automation:
  sync: true
  github:
    repoEtag: W/"cc6ae09efbebcb63d3d1cea8b49ea1481e58d3f1cc343efcc8d1f7368cde47a3"
    releasesEtag: W/"7dd67643ccb74bb984151cce6b49e1f5eb303eb751fe0b14bfc48db622f9705e"
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
