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
  stars: 188
  forks: 28
  lastCommit: '2026-11-07T19:01:51Z'
latestRelease:
  tag: v0.7.13
  name: Downhill Revived 0.7.13
  publishedAt: '2026-11-07T19:10:47Z'
  url: 'https://github.com/skuza-oss/downhill-revived/releases/tag/v0.7.13'
activity:
  lastSynchronized: '2026-11-08T23:43:38.717Z'
automation:
  sync: true
  github:
    repoEtag: W/"cb2d32868a82263ac6619c4119b143e0f545e603f6ae636aade3c8de9c27ebc4"
    releasesEtag: W/"14be82079ed04b9d68f8dbaf8fc0cea5dcd522971ce9ea941cc7eb0cb5148488"
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
