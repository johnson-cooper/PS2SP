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
  stars: 124
  forks: 14
  lastCommit: '2026-11-02T21:06:57Z'
latestRelease:
  tag: v0.7.7
  name: Downhill Revived 0.7.7
  publishedAt: '2026-11-02T09:32:44Z'
  url: 'https://github.com/skuza-oss/downhill-revived/releases/tag/v0.7.7'
activity:
  lastSynchronized: '2026-11-02T23:30:43.276Z'
automation:
  sync: true
  github:
    repoEtag: W/"36e969186b23b862f73ea3a7ac1d1db724299c965bb49fb879abcea60936d6cb"
    releasesEtag: W/"978be1c11c247f6c2c55064ca509f6cf72d31ec1d4beb719d779b1286d5a7aae"
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
