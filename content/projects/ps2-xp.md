---
name: ps2-xp
slug: ps2-xp
summary: a xp replica on a ps2
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
  repository: AndreicoderHacks/ps2-xp
  repositoryId: '1414803567'
repository:
  archived: false
  defaultBranch: main
  stars: 1
  forks: 0
  lastCommit: '2026-10-22T06:40:36Z'
latestRelease:
  tag: Ps2Xp
  name: Ps2-xp
  publishedAt: '2026-10-22T06:40:36Z'
  url: 'https://github.com/AndreicoderHacks/ps2-xp/releases/tag/Ps2Xp'
activity:
  lastSynchronized: '2026-10-22T10:39:06.591Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - published GitHub release present
    - release metadata identifies PS2
    - release contains a PS2-style ELF asset
  maturity: released-active
verified: false
featured: false
hidden: false
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
