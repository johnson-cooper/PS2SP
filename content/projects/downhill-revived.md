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
  stars: 64
  forks: 7
  lastCommit: '2026-10-26T20:28:24Z'
latestRelease:
  tag: v0.5.0
  name: Downhill Revived 0.5.0
  publishedAt: '2026-10-26T20:28:33Z'
  url: 'https://github.com/skuza-oss/downhill-revived/releases/tag/v0.5.0'
activity:
  lastSynchronized: '2026-10-26T23:53:47.783Z'
automation:
  sync: true
  github:
    repoEtag: W/"edad2f8d3b8c2faf151a4e717470c6941aeb7349900dcb2ee1e090055b228761"
    releasesEtag: W/"ee21322f12c8abdc2155b1aebc797b0d8fbc9bef7cb82c87cbbc49505fea5ef9"
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
