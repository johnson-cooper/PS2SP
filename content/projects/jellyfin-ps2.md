---
name: jellyfin-ps2
slug: jellyfin-ps2
summary: PlayStation 2 software project discovered by PS2SP.
categories:
  - utilities
tags:
  - auto-discovered
features: []
authors: []
license: MIT
homepage: null
source:
  provider: github
  repository: jimmyBizMobile/jellyfin-ps2
  repositoryId: '1418396367'
repository:
  archived: false
  defaultBranch: main
  stars: 21
  forks: 2
  lastCommit: '2026-10-19T02:41:54Z'
latestRelease:
  tag: v2.0.0.0
  name: Jellyfin PS2 2.0.0
  publishedAt: '2026-10-19T02:41:55Z'
  url: 'https://github.com/jimmyBizMobile/jellyfin-ps2/releases/tag/v2.0.0.0'
activity:
  lastSynchronized: '2026-10-26T13:08:14.242Z'
automation:
  sync: true
  github:
    repoEtag: W/"b6807e2f0726c66edf5dc149896cf884c4e7ac4dc31ac3a07ba920b456660b86"
    releasesEtag: W/"91acc6afe05bf50c1c8d8d791ce3a585f914332be93c584cbe6d2581f668681a"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - release metadata identifies PS2
    - release contains a PS2-style ELF asset
  maturity: released-active
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
