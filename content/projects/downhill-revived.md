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
  stars: 6
  forks: 0
  lastCommit: '2026-10-18T22:27:15Z'
latestRelease:
  tag: v0.2.7
  name: Downhill Revived 0.2.7
  publishedAt: '2026-10-18T22:26:41Z'
  url: 'https://github.com/skuza-oss/downhill-revived/releases/tag/v0.2.7'
activity:
  lastSynchronized: '2026-10-20T23:53:27.859Z'
automation:
  sync: true
  github:
    repoEtag: W/"8b0a6d54bb14048060826d1ddb2b83419ec3b72bb6e85d35f9e268963857377f"
    releasesEtag: W/"fee59b70048dc1094c24fa028f7c8cfb59b15d6fb3cf2462c69490011916f2d3"
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
