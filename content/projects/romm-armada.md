---
name: romm-armada
slug: romm-armada
summary: >-
  Decky Loader plugin for Arm64 handhelds: download RomM games and sync PS2
  saves, with the experiments behind it
categories:
  - utilities
tags:
  - auto-discovered
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: abduznik/romm-armada
  repositoryId: '1433520951'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-27T18:53:08Z'
latestRelease:
  tag: v0.4.0
  name: RomM Armada 0.4.0
  publishedAt: '2026-10-27T18:53:08Z'
  url: 'https://github.com/abduznik/romm-armada/releases/tag/v0.4.0'
activity:
  lastSynchronized: '2026-10-30T01:01:35.060Z'
automation:
  sync: true
  github:
    repoEtag: W/"d3378872a22c914b8cd1ba309d625d824975aa4ef8c37841ef29366272996784"
    releasesEtag: W/"3a0278135bd20b8c5fd3b6e937fdffb0c84e1192b055198f607a0c6fe6facaba"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
  maturity: released-active
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
