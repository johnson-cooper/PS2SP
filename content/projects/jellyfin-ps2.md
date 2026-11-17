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
  stars: 30
  forks: 5
  lastCommit: '2026-11-16T01:41:07Z'
latestRelease:
  tag: v2.0.0.0
  name: Jellyfin PS2 2.0.0
  publishedAt: '2026-10-19T02:41:55Z'
  url: 'https://github.com/jimmyBizMobile/jellyfin-ps2/releases/tag/v2.0.0.0'
activity:
  lastSynchronized: '2026-11-17T13:27:12.291Z'
automation:
  sync: true
  github:
    repoEtag: W/"37a02beb5ff53760b117312ea5ed3c5912f911c239f749873d2d0336b75f20b1"
    releasesEtag: W/"90767a230c2327d14dbf12cc5252a6016e23f7ca9a06215b6c3d4a564ff49005"
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
